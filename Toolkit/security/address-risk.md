---
title: Address & Protocol Reputation
---

# Address & Protocol Reputation

Use these helpers to vet EOAs, contracts, and launch patterns before allowing agents to interact with them.

## Environment

```bash
export GO_PLUS_LABS_APP_KEY=your_app_key
export GO_PLUS_LABS_APP_SECRET=your_app_secret
```

The GoPlusLabs HTTP clients load the variables above at import time and immediately request an access token. If either variable is unset, the token call itself fails with an HTTP 4xx error before any tool executes, so set both values (or load them from a secrets manager) prior to importing the module. All RPC calls run through shared `httpx.AsyncClient` instances, so populate the variables once per process.

## Malicious Address Checks

`malicious_address.py` exposes `check_malicious_address(contract_address, chain_name='')`.
- Normalises the address, optionally converts `chain_name` to an ID, and queries `/address_security/`.
- Returns threat labels such as `phishing_activities`, `mixer`, `blacklist_doubt`, `sanctioned`, and counts of malicious contracts deployed.
- Pass an empty `chain_name` to aggregate findings across networks; otherwise specify a chain for focused results.

**Response fields**

| Key | Description |
| --- | --- |
| `phishing_activities`, `mixer`, `blacklist_doubt` | `"1"` when the address matches GoPlus’ threat feeds |
| `malicious_contract_count` | Number of high-risk contracts deployed by the address |
| `label_list` | Additional annotations, e.g., exchange labels or airdrop roles |
| `updated_time` | Timestamp (seconds) of the latest detection event |

## Rug Pull Detection

`rug_pull_detection(contract_address, chain_name)` inspects ownership privileges and withdrawal patterns:
- Flags approval abuse, privileged withdraws, self-destruct permissions, and proxy usage.
- Returns owner metadata (`owner_address`, `owner_type`) to feed governance rules.

## Chain Metadata

`supported_chains.py` offers two important utilities:
- `supported_chains()` (resource `resource://SupportedChains`) – list of chain names currently covered by GoPlusLabs.
- `chain_name_to_id(name)` – resolves user-friendly names to API IDs (`"Ethereum" -> "1"`).

Cache behaviour is shared across these functions, so repeated lookups stay within rate limits.

### Example

```python
from spoon_toolkits.security.gopluslabs.malicious_address import check_malicious_address

labels = await check_malicious_address("0xEvil", "Ethereum")
if labels.get("phishing_activities") == "1":
    raise ValueError("Sender flagged for phishing")
```

## Caching & Errors

- Every public coroutine is wrapped with `@time_cache(max_age_seconds=300)`, so repeated lookups within five minutes hit the in-memory cache (per process). Pass distinct parameters to force a refresh, or restart the agent for an immediate purge.
- GoPlusLabs occasionally returns HTTP 429 or structured error payloads; the shared HTTP client raises a Python exception in those cases, which you should catch to retry/back off.
- When `chain_name` is invalid, `chain_name_to_id` raises `NotImplementedError("Chain <name> not supported.")`. Use `supported_chains()` to validate user input before calling the scanners.
