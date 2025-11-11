---
title: Token & NFT Risk
---

# Token & NFT Risk

The token scanners wrap GoPlusLabs endpoints for both EVM contracts and Solana SPL assets. Each function is decorated with `time_cache()` to avoid hammering the API while still returning fresh data for fast-moving markets.

## Environment

```bash
export GO_PLUS_LABS_APP_KEY=your_app_key
export GO_PLUS_LABS_APP_SECRET=your_app_secret
```

Credentials are loaded as soon as `token_security.py` is imported. If either value is missing, the initial token request fails with an HTTP error, so set them in your agent runtime or `.env` file upfront.

## ERC-20 / EVM Tokens

`token_security.py` exposes `get_token_risk_and_security_data(chain_name, contract_address)`.
The helper normalises the address (`normalize_ethereum_contract_address`) and resolves the chain ID using `chain_name_to_id` before querying `/token_security/{chain_id}`.

Common response fields:
- Ownership & minting privileges (`can_take_back_ownership`, `is_mintable`, `is_proxy`).
- Trading health (`is_honeypot`, `buy_tax`, `sell_tax`, `personal_slippage_modifiable`).
- Liquidity signals (`dex` pairs, LP holder distribution, `lp_total_supply`).
- Holder intel (`holders`, whale percentages, blacklist tags).
- Upgrade risk (`is_proxy`, `owner_address`, `owner_balance`).
- Market metadata (`token_name`, `token_symbol`, `total_supply`, `price_change_24h`).

### Example

```python
from spoon_toolkits.security.gopluslabs.token_security import get_token_risk_and_security_data

report = await get_token_risk_and_security_data("Ethereum", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
risks = report[0]
if risks["is_honeypot"] == "1":
    raise ValueError("Abort swap: honeypot flag present")
```

## Solana Tokens

`get_token_security_for_solana(contract_address)` validates the 44-character address, requests `/solana/token_security`, and returns governance flags (freeze/mint authorities, metadata mutability) plus DEX pricing/TVL snapshots.

Key fields: `is_mutable`, `freeze_authority`, `mint_authority`, `liquidity`, `pair_symbol`, and `honeypot_and_anti_whale` metadata from Solana DEX integrations.

## NFT Collections

`nft_security.py` provides `get_nft_security(chain_name, contract_address, token_id='')`.
It surfaces:
- Collection metadata (supply, verification status, sales volume).
- Privileged operations (mint/burn/self-destruct).
- Oversupply detection, approval restrictions, and red flags for derivative collections.

Use the optional `token_id` when interrogating a specific collectible.

For multi-chain agents, combine these scanners with `SupportedChains` to validate user-supplied chain names before execution.

## Caching & Error Handling

- All token/NFT functions use `@time_cache(max_age_seconds=300)`; identical calls within five minutes reuse cached JSON. Include a timestamp tag or random salt in requests if you must bypass the cache.
- GoPlus returns `"N/A"` or `"Unknown"` when liquidity or holder data is missing—handle those values before casting to numbers.
- Invalid chain names raise `NotImplementedError("Chain <name> not supported.")` from `chain_name_to_id`. Call `supported_chains()` first when accepting user input.
- HTTP errors (network issues, rate limits) bubble up as `httpx.HTTPStatusError`. Wrap calls in `try/except` to implement backoff or fallback providers.
