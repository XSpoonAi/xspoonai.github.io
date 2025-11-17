# x402 Payments in SpoonOS

x402 is the payment rail SpoonOS uses to gate agent capabilities behind verifiable, instant crypto authorizations. This page explains the concepts you need before wiring the APIs or running demos.

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
- The `x402` block in `config.json` mirrors these defaults (branding, description, timeout, etc.). Update it when you need per-environment variance.
- Setting `X402_DEFAULT_ASSET` ensures all typed-data domains reference the real USDC contract so signatures pass facilitator validation.

## Runtime lifecycle

```mermaid
flowchart TD
    A[User task -> SpoonReact agent] --> B[Step 1: http_probe tool<br/>Unauthenticated probe of paywalled URL]
    B -->|HTTP 200| J[Step 4: Agent parses body/headers<br/>No payment required]
    B -->|HTTP 402| C[Step 2: x402_paywalled_request tool<br/>Parse paywall requirements]
    C --> D[Merge paywall + config overrides]
    D --> E[Signer selection<br/>PRIVATE_KEY preferred, Turnkey fallback]
    E --> F[Typed-data build<br/>TransferWithAuthorization payload]
    F --> G[Signature via eth_account or Turnkey]
    G --> H[Encode header -> X-PAYMENT]
    H --> I[Step 3: Paid retry with X-PAYMENT header]
    I --> P1

    subgraph "Paywall server (FastAPI /x402)"
        P1[Incoming request carrying X-PAYMENT] --> P2[verify_payment -> Facilitator API]
        P2 --> P3{Valid payment?}
        P3 -- No --> P4[Return HTTP 402 + error]
        P3 -- Yes --> P5[Optional settle_payment]
        P5 --> P6[Invoke agent/tooling]
        P6 --> P7[Return HTTP 200 + X-PAYMENT-RESPONSE]
    end

    P4 -.-> C
    P7 --> J
    J --> K[Memory/log update + ReAct summary output]
```

If the paid retry fails (for example `verify_payment` rejects the header or the facilitator reports an error), the paywall server immediately returns another `402` or error payload and the agent decides whether to run `x402_paywalled_request` again with corrected parameters. A successful verification moves straight into settlement and target agent execution, so there is no additional retry cycle once the `X-PAYMENT` header is accepted.

## Operational checklist

1. Use [https://faucet.circle.com/](https://faucet.circle.com/) to mint 0.01 USDC for the public demo.
2. Keep `X402_RECEIVER_ADDRESS` aligned with the wallet that ultimately receives settlements.
3. Monitor facilitator responses. Any `invalid_exact_evm_payload_signature` errors typically mean the `asset`, `chainId`, or nonce encoding no longer matches the paywall challenge.
4. Use `X402PaymentService.decode_payment_response(header)` to archive payment receipts in logs or analytics pipelines.
