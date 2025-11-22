

`spoon_toolkits.crypto.neo` bundles async Neo N3 helpers on top of the `neo-mamba` RPC client, covering addresses, assets, blocks, governance, and smart-contract introspection. Every tool subclasses `BaseTool` so agents get consistent parameter validation and `ToolResult` payloads.

## Environment & Network Selection

```bash
export NEO_MAINNET_RPC=https://mainmagnet.ngd.network:443   # overrides default mainnet RPC
export NEO_TESTNET_RPC=https://testmagnet.ngd.network:443   # overrides default testnet RPC
export NEO_RPC_TIMEOUT=20                                   # seconds (defaults to 60 if unset)
export NEO_RPC_ALLOW_INSECURE=false                         # set true to skip TLS verification
```

- Each tool accepts `network` (`"mainnet"` / `"testnet"`) so you can switch clusters per call. If you omit it, `NeoProvider` defaults to testnet.
- Address inputs may be Base58 (e.g., `Nf2C...`) or `0x` script hashes; `NeoProvider` normalizes them internally before hitting RPCs.
- `NEO_RPC_TIMEOUT` defaults to 60 seconds in `NeoProvider`. Set the env var to override that per deployment.

## Toolkit Map

| Module | Highlights |
| --- | --- |
| `address_tools.py` | Address counts/info, RPC validation, per-contract NEP-17 sent/received totals, and paginated transfer history. |
| `asset_tools.py` | Asset metadata by hash/name, bulk metadata lookups, and contract/address holding snapshots via `GetAssetInfoByAssetAndAddress`. |
| `block_tools.py` | Block count, block-by-height/hash, best-hash, rewards, and rolling recent block summaries. |
| `transaction_tools.py` | Transaction counts, raw tx retrieval (by block hash/height/address/transaction hash), and transfer event extraction. |
| `contract_tools.py` / `sc_call_tools.py` | Contract inventories, verified contract metadata, and smart-contract call traces filtered by contract/address/tx. |
| `nep_tools.py` | Specialized NEP-11/NEP-17 transfer feeds (by address, block height, contract hash) plus balance helpers. |
| `governance_tools.py` / `voting_tools.py` | Committee info, candidate/voter tallies, on-chain vote call traces. |
| `log_state_tools.py` | Application log/state fetchers for debugging contract execution. |
| `neo_provider.py`, `base.py` | Shared provider, RPC request helpers, normalization utilities, and graceful fallbacks when neo-mamba lacks a direct method. |

###  Official N3 RPC helpers

| Tool | RPC | Description |
| --- | --- | --- |
| `ValidateAddressTool` (`address_tools.py`) | `validateaddress` | Calls the official RPC to confirm if an address/script hash is valid for the selected network and returns metadata. |


## Usage Patterns

> **Note on outputs:** every `BaseTool` wraps the payload in a formatted string such as `"Address info: {...}"`. When you need the underlying dict, strip the prefix and parse it (e.g., with `ast.literal_eval` or `json.loads` after replacing single quotes).

### Address intelligence
```python
from ast import literal_eval
from spoon_toolkits.crypto.neo import GetAddressInfoTool

tool = GetAddressInfoTool()
result = await tool.execute(
    address="Nf2CXE8s1R6yoZ6e52xX5yb7Z9Uv7S3N1h",
    network="mainnet",
)
prefix, _, payload = result.output.partition(": ")
balances = literal_eval(payload)  # includes NEP-17 balances + script hash
```

```python
from ast import literal_eval
from spoon_toolkits.crypto.neo import ValidateAddressTool

validation = await ValidateAddressTool().execute(
    address="NaU3shtZqnR1H6XnDTxghorgkXN687C444",
    network="testnet",
)
_, _, payload = validation.output.partition(": ")
metadata = literal_eval(payload)  # {"isvalid": True, "address": "...", ...}
```

### Asset metadata & holdings
```python
from ast import literal_eval
from spoon_toolkits.crypto.neo import (
    GetAssetInfoByHashTool,
    GetAssetInfoByAssetAndAddressTool,
)

asset_info = await GetAssetInfoByHashTool().execute(
    asset_hash="0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5",  # GAS
    network="mainnet",
)
_, _, asset_payload = asset_info.output.partition(": ")
asset_dict = literal_eval(asset_payload)

holding = await GetAssetInfoByAssetAndAddressTool().execute(
    asset_hash="0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5",
    address="Nf2CXE8s1R6yoZ6e52xX5yb7Z9Uv7S3N1h",
    network="mainnet",
)
_, _, holding_payload = holding.output.partition(": ")
holding_dict = literal_eval(holding_payload)  # contract/address balance snapshot
```

### Block & transaction lookups
```python
from ast import literal_eval
from spoon_toolkits.crypto.neo import (
    GetBlockByHeightTool,
    GetRawTransactionByTransactionHashTool,
)

block = await GetBlockByHeightTool().execute(block_height=4500000, network="mainnet")
_, _, block_payload = block.output.partition(": ")
block_dict = literal_eval(block_payload)

tx = await GetRawTransactionByTransactionHashTool().execute(
    transaction_hash="0x...",
    network="mainnet",
)
_, _, tx_payload = tx.output.partition(": ")
tx_dict = literal_eval(tx_payload)
```

### Governance snapshots
```python
from ast import literal_eval
from spoon_toolkits.crypto.neo import GetCommitteeInfoTool, GetVotesByCandidateAddressTool

committee = await GetCommitteeInfoTool().execute(network="mainnet")
_, _, committee_payload = committee.output.partition(": ")
committee_dict = literal_eval(committee_payload)

votes = await GetVotesByCandidateAddressTool().execute(candidate_address="NVSX...", network="mainnet")
_, _, votes_payload = votes.output.partition(": ")
votes_dict = literal_eval(votes_payload)
```

### Token volume totals per address & contract
```python
from ast import literal_eval
from spoon_toolkits.crypto.neo import GetTotalSentAndReceivedTool

volume = await GetTotalSentAndReceivedTool().execute(
    contract_hash="0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5",
    address="Nf2CXE8s1R6yoZ6e52xX5yb7Z9Uv7S3N1h",
    network="mainnet",
)
_, _, volume_payload = volume.output.partition(": ")
volume_dict = literal_eval(volume_payload)  # {"received": "...", "sent": "..."}
```
## Operational Notes

- Always `await` tool execution; the provider relies on async context managers to open/close RPC sessions cleanly. If you compose multiple calls, instantiate the tool once and re-use it to avoid repeated class construction overhead. 
