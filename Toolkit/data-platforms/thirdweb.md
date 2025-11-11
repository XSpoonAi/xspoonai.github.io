

`spoon_toolkits.data_platforms.third_web` wraps the Thirdweb Insight REST API in async `BaseTool` classes so Spoon agents can fetch contract events, multichain transfers, transactions, and block data without crafting HTTP requests by hand.

## Environment & Configuration

```bash
export THIRDWEB_CLIENT_ID=your_client_id          # used by most tools
```

- Some tools (such as `GetContractEventsFromThirdwebInsight`) allow a `client_id` argument, letting you override the global key for multi-tenant agents.
- Requests use a 100-second timeout and raise descriptive errors if Insight responds with non-success status codes.

## Package Layout

| Module | Purpose |
| --- | --- |
| `third_web_tools.py` | Houses every `BaseTool` plus lightweight async test helpers. Import from `spoon_toolkits.data_platforms.third_web.third_web_tools`. |

## Tooling Highlights

### Events and Transfers
- `GetContractEventsFromThirdwebInsight` - fetch decoded events for a contract + signature (`Transfer(address,address,uint256)`, etc.) with paging metadata.
- `GetMultichainTransfersFromThirdwebInsight` - scan recent transfers for a list of chain IDs (defaults to USDT events exposed by Insight).

### Transactions and Blocks
- `GetTransactionsTool` - consolidate recent transactions across multiple chains.
- `GetContractTransactionsTool` - view activity for a single contract.
- `GetContractTransactionsBySignatureTool` - narrow contract activity down to a specific function signature.
- `GetBlocksFromThirdwebInsight` - stream the latest blocks per chain with optional sort field and order.
- `GetWalletTransactionsFromThirdwebInsight` - list wallet transactions across multiple chains, sorted by block number or timestamp.

Every tool reads `THIRDWEB_CLIENT_ID` when `client_id` is not provided explicitly and returns the raw Insight JSON payload (`{"data": [...], "meta": {...}}`) so you can feed it directly to downstream logic.

## Usage Examples

### Fetch contract events for a signature
```python
from spoon_toolkits.data_platforms.third_web.third_web_tools import GetContractEventsFromThirdwebInsight

tool = GetContractEventsFromThirdwebInsight()
result = await tool.execute(
    client_id="your-client-id",
    chain_id=1,
    contract_address="0xdAC17F958D2ee523a2206206994597C13D831ec7",
    event_signature="Transfer(address,address,uint256)",
    limit=5,
)
print(result)
```

### Aggregate transfers across chains
```python
from spoon_toolkits.data_platforms.third_web.third_web_tools import GetMultichainTransfersFromThirdwebInsight

tool = GetMultichainTransfersFromThirdwebInsight()
transfers = await tool.execute(chains=[1, 137, 8453], limit=10)
print(transfers["data"][0])
```

### Inspect wallet transactions with sorting
```python
from spoon_toolkits.data_platforms.third_web.third_web_tools import GetWalletTransactionsFromThirdwebInsight

wallet_tool = GetWalletTransactionsFromThirdwebInsight()
history = await wallet_tool.execute(
    client_id="your-client-id",
    wallet_address="0xabc...",
    chains=[1, 137],
    limit=10,
    sort_by="block_timestamp",
    sort_order="desc",
)
print(history["data"])
```

## Operational Notes

- Set `THIRDWEB_CLIENT_ID` in your runtime environment (or pass `client_id` per call) before invoking any tool; missing keys raise `ValueError` to prevent ambiguous outcomes.
- HTTP errors bubble up through `requests.raise_for_status()` so you can distinguish network failures from empty result sets.
- Test helpers at the bottom of `third_web_tools.py` (`test_get_contract_events`, etc.) offer quick sanity checks - run them with `python third_web_tools.py` once your credentials are configured.
- Insight endpoints enforce per-client rate limits; stagger large batch pulls by adjusting `limit` or splitting chain lists across multiple requests.
