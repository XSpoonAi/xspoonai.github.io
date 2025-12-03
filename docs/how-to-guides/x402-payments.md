# x402 Integration Guide

The x402 documentation is now split by audience so you can jump directly to the right level of detail.

## 1. Core concepts

Read [Core Concepts: x402 payments](../core-concepts/x402-payments.md) to understand:

- Why SpoonOS uses x402 to gate agent actions.
- Required environment variables and configuration fallbacks.
- The end-to-end payment lifecycle (probe -> sign -> retry -> settle) plus the flow diagram.

## 2. API reference

Consult [API Reference: x402](../api-reference/spoon_ai/payments/) for:

- Python services (`X402PaymentService`, request/response models, helper methods).
- Built-in tools (`x402_create_payment`, `x402_paywalled_request`) with parameter tables.
- CLI commands (`requirements`, `sign`) and the FastAPI paywall endpoints.
- Environment and Turnkey integration notes.

## 3. Example

Follow [Example: x402 ReAct agent](../examples/x402-react-agent.md) to run the ReAct demo (`uv run python examples/x402_agent_demo.py`). It walks through:

- Preparing `.env` and funding the signer.
- Observing the agent call `http_probe`, then `x402_paywalled_request`, retrieve the protected page, and print the signed `X-PAYMENT` + settlement receipt.
- Troubleshooting common facilitator or configuration errors.

## Quick checklist

- Fund the signer via [Circle faucet](https://faucet.circle.com/).
- Keep `PRIVATE_KEY` populated; rely on Turnkey only when the local key is absent.
- Reuse `X402PaymentService.decode_payment_response()` anywhere you archive facilitator receipts.
