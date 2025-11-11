---
title: Shared Utilities
---

# Shared Utilities

The GoPlusLabs integration packages several helpers that keep the tooling efficient and consistent across modules.

## Environment Requirements

```bash
export GO_PLUS_LABS_APP_KEY=your_app_key
export GO_PLUS_LABS_APP_SECRET=your_app_secret
```

`env.py` loads these variables via `python-dotenv` on import. Set them once per process; every security helper (tokens, approvals, phishing, etc.) relies on the same values and the module immediately makes an access-token request during import.

## HTTP Clients

`http_client.py` generates a bearer token via `get_token()` and instantiates two `httpx.AsyncClient` objects:
- `go_plus_labs_client_v1` targets `https://api.gopluslabs.io/api/v1`.
- `go_plus_labs_client_v2` targets `https://api.gopluslabs.io/api/v2`.

Both attach an async `raise_on_4xx_5xx` hook so callers only deal with successful JSON payloads or Python exceptions. The clients are created at import time, so reuse them instead of spinning up new sessions.

## Caching

`time_cache(max_age_seconds=300)` wraps coroutine functions with an LRU cache that invalidates entries on a time salt. This keeps frequently accessed risk reports (e.g., the same contract address within five minutes) local while still refreshing periodically.

## Address Normalisation

`utils.normalize_ethereum_contract_address` ensures every EVM address is 0x-prefixed, 42 characters long, and hexadecimal. Raise early if a user submits malformed data.

## Environment Loading

`env.py` uses `dotenv` to pull `GO_PLUS_LABS_APP_KEY` and `GO_PLUS_LABS_APP_SECRET` from the environment at import time. Double-check the secret variable name (`GO_PLUS_LABS_APP_SECRET`) in your deployment manifests.

Leverage these utilities when extending the security toolkit—keeping caching, HTTP usage, and normalisation consistent reduces the chances of subtle bugs or rate-limit regressions.

## Signature Data Decode (Preview)

`signature_data_decode.py` defines an MCP tool stub named `get_abi_decode_info(chain_name, data, contract_address='')`. The implementation currently raises `NotImplementedError` because the input contract ABI schema is still being finalized (see the GoPlus docs at [docs.gopluslabs.io/reference/getabidatainfousingpost](https://docs.gopluslabs.io/reference/getabidatainfousingpost)). If you plan to extend this area:

- Expect to provide `data` as a raw hex string (function selector + calldata) and optionally the target `contract_address`.
- Once implemented, wire the helper into the shared `time_cache` decorator and HTTP clients to match the rest of the security stack.
- Update this document with parameter and response details when the API contract stabilizes.
