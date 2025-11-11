---
title: Approval Intelligence
---

# Approval Intelligence

`approval_security.py` inventories token allowances and evaluates spender contracts using GoPlusLabs v1/v2 APIs. All functions share the `time_cache()` decorator, so repeated calls within the TTL reuse cached responses.

## Environment

```bash
export GO_PLUS_LABS_APP_KEY=your_app_key
export GO_PLUS_LABS_APP_SECRET=your_app_secret
```

These values hydrate a bearer token for the shared HTTP clients defined in `http_client.py`. Set them before importing the module; otherwise the token request itself fails with an HTTP 4xx error and the module never finishes loading.

## Contract Safety Snapshot

```python
from spoon_toolkits.security.gopluslabs.approval_security import check_approval_security
report = await check_approval_security("0xUniswapRouter", "Ethereum")
```

The result details contract metadata, open-source status, proxy usage, and `malicious_behavior` tags for downstream filtering.

**Response fields**

| Key | Description |
| --- | --- |
| `contract_security` | Verification status, open-source flag, proxy detection |
| `malicious_behavior` | List of GoPlus threat labels (honeypot, fake_token, rug_pull, etc.) |
| `creator_address`, `deploy_timestamp` | Provenance data for the spender |
| `security_source` | Indicates whether the data came from on-chain scans or audits |

## ERC-20 Allowances

`erc20_approval_security(contract_address, chain_name)` fetches outstanding approvals granted by an EOA. Each entry contains:
- `approved_contract` and categorized behaviors (`malicious_behavior`).
- `approved_amount`, timestamps, and transaction hashes (`initial_approval_hash`).
- Token metadata (decimals, symbol) and verification flags.

Additional keys: `token_symbol`, `token_contract`, `spender_type`, `approve_time`, `dex`, and boolean strings (`is_verified`, `is_open_source`).

## ERC-721 / ERC-1155 Allowances

`erc721_approval_security` and `erc1155_approval_security` mirror the structure but capture NFT-specific approval scopes:
- Per-token approvals (`approved_token_id`).
- `approved_for_all` flags for marketplace integrations.
- Verification/open-source status of the target contracts.

## Usage Tips

- Normalize addresses before calling: the helpers internally call `normalize_ethereum_contract_address`.
- Allow an empty `chain_name` if you want GoPlusLabs to infer chains, but prefer explicit chains to avoid surprises.
- Layer results with wallet analytics (e.g., Whale tracking) to decide when to revoke allowances automatically.

## Caching & Error Handling

- All approval helpers are decorated with `@time_cache(max_age_seconds=300)`; expect up to a five-minute delay before a revoked allowance disappears from cached results.
- GoPlusLabs returns HTTP error codes for invalid chains, missing addresses, or rate limits. The shared HTTP client raises `httpx.HTTPStatusError`, so wrap calls in `try/except` if you need retries.
- Responses use strings for booleans (`"1"`, `"0"`) and numeric fields; coerce them to integers/floats before arithmetic.
