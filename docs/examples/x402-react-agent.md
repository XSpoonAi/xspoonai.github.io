# x402 Agent

This walkthrough mirrors `core/examples/x402_agent_demo.py`, which shows a SpoonReact agent autonomously paying the official x402 paywall before summarising the protected content.

## Prerequisites

1. Install SpoonOS core dependencies (`uv pip install -r requirements.txt`).
2. Configure `core/.env` with:
   - `OPENAI_API_KEY`
   - `PRIVATE_KEY` (0x-prefixed; must hold ≥0.01 USDC). If omitted, set the Turnkey variables documented in the API reference.
   - `X402_RECEIVER_ADDRESS` (usually matches the private key address).
   - Optional: `X402_FACILITATOR_URL`, `X402_DEFAULT_NETWORK`, `X402_DEMO_URL`.
3. Acquire USDC Testnet Token (0.01 is enough) via [https://faucet.circle.com/](https://faucet.circle.com/).

## Run the demo

```bash
uv run python examples/x402_agent_demo.py
```

What happens:

1. The script prints signer details and the target resource (`https://www.x402.org/protected` by default).
2. A `SpoonReactAI` instance performs a ReAct loop:
   - Calls `web_scraper` (no payment) to capture the 402 challenge.
   - Calls `x402_paywalled_request` to sign and submit a 0.01 USDC payment.
   - Retrieves the protected payload (a SoundCloud embed) after settlement.
3. The console logs tool traces, the signed `PAYMENT-SIGNATURE` (x402 v2) header, and the decoded settlement receipt from `PAYMENT-RESPONSE` (transaction hash, payer, network).

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| `invalid_exact_evm_payload_signature` | Asset/network mismatch or stale nonce. | Ensure you copied the paywall's `asset` and `pay_to` fields, and confirm `PRIVATE_KEY` funds exist. |
| `Configuration error: API key is required for provider ...` | Missing `OPENAI_API_KEY`. | Export a valid LLM key before running the demo. |
| `x402 configuration error: Turnkey signing identity missing` | `X402_USE_TURNKEY` enabled but no `TURNKEY_SIGN_WITH`. | Provide the required Turnkey identifiers or disable Turnkey by setting `X402_USE_TURNKEY=0`. |

## Next steps

- Automate the payment header generation inside your own agents by reusing the `x402_paywalled_request` tool documented in the API reference.
- Expose your agents via the paywall router (`python -m spoon_ai.payments.app`) so external callers must submit verified x402 payments before invoking them.
