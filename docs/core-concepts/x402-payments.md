# x402 Payments in SpoonOS

x402 is the payment rail SpoonOS uses to gate agent capabilities behind verifiable, instant crypto authorizations via signed typed-data and an HTTP 402 paywall pattern. This page explains the concepts you need before wiring the APIs or running demos, and ships with a facilitator service plus a FastAPI paywall router to verify and settle payments.

## What do you use it for?
- Gating agent or tool invocations so expensive or sensitive actions only run after a verified payment.
- Building paywalled HTTP endpoints that can be called by Spoon agents or external clients.
- Letting agents autonomously discover paywall requirements, sign, retry, and continue workflows.

## Why choose x402 here?
- **Fast & verifiable**: Uses TransferWithAuthorization-style payloads; signatures are facilitator-verified before execution.
- **Drop-in**: The paywall router and tools (`x402_paywalled_request`, `x402_create_payment`) are prebuilt—no custom cryptography required.
- **Multi-signer**: Automatically prefers local keys, with Turnkey fallback when you need hosted signing.
- **Observable**: Standardized receipts (`X-PAYMENT-RESPONSE`) make logging and analytics straightforward.

## Mental model

| Piece | Role inside SpoonOS |
| --- | --- |
| **x402 facilitator** | Public service (`https://x402.org/facilitator` by default) that verifies and settles signed payment payloads. |
| **Paywall server** | Your FastAPI router (`spoon_ai.payments.app`) that refuses unpaid requests with a 402 payload and forwards valid calls to agents. |
| **SpoonReact agent** | Issues HTTP probes, signs payments via tools, and stores payment receipts in memory. |
| **Signer** | Either the `PRIVATE_KEY` loaded in-process or a Turnkey identity configured via `TURNKEY_*` variables. |

## Configuration surfaces

Most deployments only need a `.env` entry and (optionally) config overrides:

```bash
X402_RECEIVER_ADDRESS=0xwallet-that-receives-fees
X402_FACILITATOR_URL=https://x402.org/facilitator
X402_DEFAULT_ASSET=
X402_DEFAULT_NETWORK=
X402_DEFAULT_SCHEME=exact
X402_DEFAULT_AMOUNT_USDC=
X402_PAYWALL_APP_NAME=SpoonOS Agent Services
X402_PAYWALL_APP_LOGO=https://your-domain.example/logo.png
X402_DEMO_URL=https://www.x402.org/protected
```

Key points:

- The system always prefers the local `PRIVATE_KEY`. If that variable is empty and Turnkey credentials (`TURNKEY_*`) exist, SpoonOS transparently switches to hosted signing.
- In CLI workflows (spoon-cli or the legacy `main.py` CLI), the `x402` block in the CLI `config.json` mirrors these defaults (branding, description, timeout, etc.). Update that file when you need per-environment variance. The core SDK still reads values from environment variables.
- Setting `X402_DEFAULT_ASSET` ensures all typed-data domains reference the real USDC contract so signatures pass facilitator validation.

## Runtime lifecycle

```mermaid
sequenceDiagram
    participant User
    participant Agent
    participant Paywall as Paywall Router (/x402)
    participant Facilitator

    User->>Agent: Task / query
    Agent->>Paywall: http_probe (unauthenticated)
    alt Paywall open
        Paywall-->>Agent: HTTP 200 (no payment)
        Agent-->>User: Return content / summary
    else Paywalled (HTTP 402)
        Paywall-->>Agent: 402 + requirements
        Agent->>Agent: Merge requirements + config overrides
        Agent->>Agent: Select signer (PRIVATE_KEY or Turnkey)
        Agent->>Agent: Build typed-data payload
        Agent->>Agent: Sign -> X-PAYMENT header
        Agent->>Paywall: Retry with X-PAYMENT
        Paywall->>Facilitator: verify_payment (optional settle)
        Facilitator-->>Paywall: Valid? + receipt
        alt Invalid
            Paywall-->>Agent: 402 / error
        else Valid
            Paywall-->>Agent: 200 + X-PAYMENT-RESPONSE
            Agent->>Agent: Log receipt / update memory
            Agent-->>User: Protected content + summary
        end
    end
```

If the paid retry fails (for example `verify_payment` rejects the header or the facilitator reports an error), the paywall server immediately returns another `402` or error payload and the agent decides whether to run `x402_paywalled_request` again with corrected parameters. A successful verification moves straight into settlement and target agent execution, so there is no additional retry cycle once the `X-PAYMENT` header is accepted.

## Operational checklist

1. Use [https://faucet.circle.com/](https://faucet.circle.com/) to mint 0.01 USDC for the public demo.
2. Keep `X402_RECEIVER_ADDRESS` aligned with the wallet that ultimately receives settlements.
3. Monitor facilitator responses. Any `invalid_exact_evm_payload_signature` errors typically mean the `asset`, `chainId`, or nonce encoding no longer matches the paywall challenge.
4. Use `X402PaymentService.decode_payment_response(header)` to archive payment receipts in logs or analytics pipelines.
