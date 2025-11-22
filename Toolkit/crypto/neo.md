

`spoon_toolkits.crypto.neo` bundles async Neo N3 helpers on top of the `neo-mamba` RPC client, covering addresses, assets, blocks, governance, and smart-contract introspection. Every tool subclasses `BaseTool` so agents get consistent parameter validation and `ToolResult` payloads.

## Environment & Network Selection

```bash
export NEO_MAINNET_RPC=https://mainmagnet.ngd.network:443   # overrides default mainnet RPC
export NEO_TESTNET_RPC=https://testmagnet.ngd.network:443   # overrides default testnet RPC
export NEO_RPC_TIMEOUT=20                                   # seconds
export NEO_RPC_ALLOW_INSECURE=false                         # set true to skip TLS verification
```

- Each tool accepts `network` (`"mainnet"` / `"testnet"`) so you can switch clusters per call. If you omit it, `NeoProvider` defaults to testnet.
- The provider reuses a single `aiohttp` session with optional insecure mode—handy when you test against private RPC nodes.
- Address inputs may be Base58 (e.g., `Nf2C...`) or `0x` script hashes; `NeoProvider` normalizes them internally before hitting RPCs.

## Toolkit Map

| Module | Highlights |
| --- | --- |
| `address_tools.py` | Counts, info lookups, NEP-17 transfer history, ad-hoc tagging across multiple addresses. |
| `asset_tools.py` | Asset metadata by hash/name, portfolio snapshots per address, NEP-17/NEP-11 balance queries. |
| `block_tools.py` | Block count, block-by-height/hash, best-hash, rewards, and rolling recent block summaries. |
| `transaction_tools.py` | Transaction counts, raw tx retrieval (by hash or block), and transfer event extraction. |
| `contract_tools.py` / `sc_call_tools.py` | Contract inventories, verified contract metadata, invoke history filtered by contract/address/tx. |
| `nep_tools.py` | Specialized NEP-11/NEP-17 transfer feeds (by address, block height, contract hash) plus balance helpers. |
| `governance_tools.py` / `voting_tools.py` | Committee info, candidate/voter tallies, on-chain vote call traces. |
| `log_state_tools.py` | Application log/state fetchers for debugging contract execution. |
| `neo_provider.py`, `base.py` | Shared provider, RPC request helpers, normalization utilities, and graceful fallbacks when neo-mamba lacks a direct method. |

## Usage Patterns

### Address intelligence
```python
from spoon_toolkits.crypto.neo import GetAddressInfoTool

tool = GetAddressInfoTool()
result = await tool.execute(
    address="Nf2CXE8s1R6yoZ6e52xX5yb7Z9Uv7S3N1h",
    network="mainnet",
)
balances = result.output  # includes NEP-17 balances + script hash
```

### Asset metadata & balances
```python
from spoon_toolkits.crypto.neo import GetAssetInfoByHashTool, GetAssetsInfoByUserAddressTool

asset_info = await GetAssetInfoByHashTool().execute(
    asset_hash="0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5",  # GAS
    network="mainnet",
)

portfolio = await GetAssetsInfoByUserAddressTool().execute(
    address="Nf2CXE8s1R6yoZ6e52xX5yb7Z9Uv7S3N1h",
    network="mainnet",
    Limit=50,
)
```

### Block & transaction lookups
```python
from spoon_toolkits.crypto.neo import GetBlockByHeightTool, GetRawTransactionByHashTool

block = await GetBlockByHeightTool().execute(block_height=4500000, network="mainnet")
tx = await GetRawTransactionByHashTool().execute(transaction_hash="0x...", network="mainnet")
```

### Governance snapshots
```python
from spoon_toolkits.crypto.neo import GetCommitteeInfoTool, GetVotesByCandidateAddressTool

committee = await GetCommitteeInfoTool().execute(network="mainnet")
votes = await GetVotesByCandidateAddressTool().execute(candidate_address="NVSX...", network="mainnet")
```

## Operational Notes

- Some RPC extensions (e.g., `GetTagByAddresses`) are not fully implemented in `neo-mamba`. The toolkit surfaces shim behaviors or explanatory messages so agents fail gracefully; check `ToolResult.output` for strings such as “not available with current implementation”.
- Long-running scans (e.g., iterating transfers) reuse `NeoProvider._make_request` with built-in retries governed by `NEO_RPC_TIMEOUT`. For heavy workflows, pool results externally rather than looping inside a single tool call.
- Always `await` tool execution; the provider relies on async context managers to open/close RPC sessions cleanly. If you compose multiple calls, instantiate the tool once and re-use it to avoid repeated class construction overhead. 
