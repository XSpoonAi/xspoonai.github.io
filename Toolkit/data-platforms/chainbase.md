

`spoon_toolkits.data_platforms.chainbase` wraps the Chainbase REST API in async `BaseTool` classes and mounts them on a FastMCP server, so agents can query block, transaction, account, and token data without writing raw HTTP calls.

## Environment & Configuration

```bash
export CHAINBASE_API_KEY=your_chainbase_key             # required for every request
export CHAINBASE_HOST=0.0.0.0                           # optional when running the MCP server
export CHAINBASE_PORT=8000                              # optional (default 8000)
export CHAINBASE_PATH=/sse                              # optional SSE path
```

- Every tool loads `CHAINBASE_API_KEY` at execution time and aborts with a descriptive error if it is missing.
- HTTP calls go to `https://api.chainbase.online/v1/...`; you can override host/port/path only when launching the bundled FastMCP server.

## Package Layout

| Module | Purpose |
| --- | --- |
| `chainbase_tools.py` | Source of the `BaseTool` implementations (`GetLatestBlockNumberTool`, `GetAccountTokensTool`, `ContractCallTool`, etc.). |
| `balance.py`, `basic.py`, `token_api.py` | Individual FastMCP sub-servers exposing account, base, and token endpoints as MCP tools/resources (with docs baked in). |
| `__init__.py` | Aggregates all MCP sub-servers via `FastMCP` and re-exports the tool classes. Running the module spins up an SSE server. |
| `README.md` | Lists supported chains (`chain_id` values) and shows quick-start snippets. |

## Tooling Highlights

### Blocks & Transactions
- `GetLatestBlockNumberTool` – current block height by `chain_id`.
- `GetBlockByNumberTool` – detailed block payload (transactions, miner, timestamp).
- `GetTransactionByHashTool` – fetch by tx hash or `(block_number, tx_index)` combo.
- `GetAccountTransactionsTool` – paginated tx history per address with optional block/timestamp filters.

### Accounts & Portfolios
- `GetAccountBalanceTool` – native coin balance with optional `to_block`.
- `GetAccountTokensTool` – ERC-20 balances, limit/page params, optional contract filter.
- `GetAccountNFTsTool` – NFT holdings, same pagination semantics.

### Contracts & Tokens
- `ContractCallTool` – invoke read-only contract functions by supplying ABI JSON and params.
- `GetTokenMetadataTool` – ERC-20 metadata (name, symbol, decimals, total supply).

On success every tool returns Chainbase’s raw JSON payload: `{"code": ..., "message": ..., "data": [...]}`. When anything fails (missing API key, HTTP error, etc.) the wrapper returns `{"error": "..."}` instead of raising, so always check for an `error` key before consuming `data`.

## Usage Examples

### Fetch the latest Ethereum block
```python
from spoon_toolkits.data_platforms.chainbase import GetLatestBlockNumberTool

height_tool = GetLatestBlockNumberTool()
block = await height_tool.execute(chain_id=1)
print(block["data"])
```

### Enumerate ERC-20 holdings for a wallet
```python
from spoon_toolkits.data_platforms.chainbase import GetAccountTokensTool

tokens = await GetAccountTokensTool().execute(
    chain_id=1,
    address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    limit=50,
)

for token in tokens.get("data", []):
    print(token["symbol"], token["balance"])
```

### Run a read-only contract call
```python
from spoon_toolkits.data_platforms.chainbase import ContractCallTool

result = await ContractCallTool().execute(
    chain_id=1,
    contract_address="0x6B175474E89094C44Da98b954EedeAC495271d0F",  # DAI
    function_name="totalSupply",
    abi='[{"inputs":[],"name":"totalSupply","outputs":[{"type":"uint256"}],"stateMutability":"view","type":"function"}]',
    params=[],
)
print(result["data"])
```

## FastMCP Server Mode

To expose these tools over SSE (useful for MCP-compatible frontends), run:

```bash
python -m spoon_toolkits.data_platforms.chainbase
# or, in code:
from spoon_toolkits.data_platforms.chainbase import mcp_server
mcp_server.run(transport="sse", host="0.0.0.0", port=8000, path="/sse")
```

Internally, the server mounts three subdomains (`Balance`, `Basic`, `TokenAPI`) so you can enable only the scopes you need.

## Operational Notes

- Chainbase enforces per-key rate limits; handle `{"error": "...429..."}` responses by backing off or narrowing ranges (`limit`, `page`).
- Because the SDK just wraps REST, you can set `CHAINBASE_API_KEY` at runtime (e.g., from a vault) before invoking any tool to support multi-tenant agents.
- For deterministic pipelines, inspect the `code` and `message` fields returned by Chainbase before assuming `data` is present—errors come back with HTTP 200 but non-zero `code`. 
