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
    A[User task -> SpoonReact agent] --> B[Step 1: http_probe tool<br/>Probe paywalled URL without payment]
    B -->|HTTP 402| C[Step 2: x402_paywalled_request tool<br/>Parse paywall requirements]
    C --> D[X402PaymentService.build_payment_requirements<br/>Merge paywall + config + overrides]
    D --> E["Signer selection<br/>PRIVATE_KEY (preferred)<br/>or Turnkey fallback"]
    E --> F["Typed-data build (TransferWithAuthorization)<br/>Chain ID + verifying contract"]
    F --> G[Signature via eth_account or Turnkey]
    G --> H[Encode header -> X-PAYMENT]
    H --> I[Step 3: Paid retry to target URL]
    I -->|HTTP 200 + X-PAYMENT-RESPONSE| J[Step 4: Agent parses body + receipt]
    J --> K[Memory/log update + ReAct summary output]

    subgraph "Paywall server (your FastAPI router)"
        P1[Incoming request with X-PAYMENT] --> P2[verify_payment -> Facilitator API]
        P2 --> P3[Optional settle_payment]
        P3 --> P4[Invoke target agent/tooling]
        P4 --> P5[Return result + X-PAYMENT-RESPONSE header]
    end

    H -.-> P1
    P5 -.-> J
```

## Operational checklist

1. Use [https://faucet.circle.com/](https://faucet.circle.com/) to mint 0.01 USDC for the public demo.
2. Keep `X402_RECEIVER_ADDRESS` aligned with the wallet that ultimately receives settlements.
3. Monitor facilitator responses. Any `invalid_exact_evm_payload_signature` errors typically mean the `asset`, `chainId`, or nonce encoding no longer matches the paywall challenge.
4. Use `X402PaymentService.decode_payment_response(header)` to archive payment receipts in logs or analytics pipelines.
