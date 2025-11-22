---
title: dApp & Site Review
---

# dApp & Site Review

Evaluate project websites and contract bundles before agents surface them to users or execute automated flows.

## Environment

```bash
export GO_PLUS_LABS_APP_KEY=your_app_key
export GO_PLUS_LABS_APP_SECRET=your_app_secret
```

The dApp and phishing scanners share the same HTTP clients and caching layer as the other GoPlus modules. Credentials are loaded once at import, and the module immediately requests an access token—if either value is missing, that HTTP call fails before any tool executes.

## dApp Security

`dapp_security.py` defines `get_nft_security(url)` (the name is historical; it checks full dApp stacks).
- Queries `/dapp_security/?url=...` and returns `audit_info`, contract inventories, and malicious behavior flags.
- Contract entries include creator addresses, deployment timestamps, open-source status, and any GoPlusLabs threat tags.
- `trust_list` and `is_audit` fields help quickly spot vetted ecosystems.

**Response highlights**

| Key | Description |
| --- | --- |
| `audit_info` | Map of audit firms and reports attached to the project |
| `contract_list` | Array of contracts with `contract_address`, `chain_id`, verification flags |
| `malicious_behavior` | Aggregated tags covering rug, phishing, fake_token, etc. |
| `risk_score` | Normalized 0–100 trust score from GoPlus |

## Phishing Sites

`phishing_site.py` provides `get_nft_security(url)` (again, legacy name) to classify URLs as phishing or safe.
- Returns a `phishing_site` flag plus `website_contract_security` entries with contract standard, NFT risk characteristics, and `address_risk` labels.
- Useful for safeguarding webhook callbacks, prompt-injected URLs, or user-submitted domains.

**Response highlights**

| Key | Description |
| --- | --- |
| `phishing_site` | `"1"` if GoPlus flagged the domain |
| `website_contract_security` | Contracts referenced by the site (standard, chain, security labels) |
| `dapp` | Basic metadata: project name, category, listed marketplaces |
| `detected_time` | Unix timestamp of last phishing detection |

### Example

```python
from spoon_toolkits.security.gopluslabs.phishing_site import get_nft_security as check_site

site_report = await check_site("go-ethdenver.com")
if site_report.get("phishing_site") == 1:
    raise ValueError("Domain flagged as phishing, abort visit")
```

Pair these scanners with the token and approval checks to build multi-step policy guards in SpoonOS agents.

## Caching & Errors

- Both helpers use `@time_cache(max_age_seconds=300)`. If a domain’s status changes (e.g., cleared phishing record), cached responses may lag by up to five minutes.
- HTTP failures or invalid URLs raise exceptions from the shared HTTP client; catch them to trigger retries or fallbacks.
- GoPlus returns strings for booleans; compare against `"1"`/`"0"` instead of Python `True`/`False`.
