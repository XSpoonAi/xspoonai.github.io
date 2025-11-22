

`spoon_toolkits.data_platforms.third_web` wraps the Thirdweb Insight REST API in async `BaseTool` classes so Spoon agents can fetch contract events, multichain transfers, transactions, and block data without crafting HTTP requests by hand. Some tools require you to supply a `client_id` argument, while others read `THIRDWEB_CLIENT_ID` from the environment—make sure to supply credentials in the format each tool expects.

## Environment & Configuration

```bash
export THIRDWEB_CLIENT_ID=your_client_id          # used by tools that read from env
```

- Tools fall into two credential styles:
  1. `GetContractEventsFromThirdwebInsight`, `GetBlocksFromThirdwebInsight`, and `GetWalletTransactionsFromThirdwebInsight` require a `client_id` argument on every call and never look at `THIRDWEB_CLIENT_ID`.
  2. `GetMultichainTransfersFromThirdwebInsight`, `GetTransactionsTool`, `GetContractTransactionsTool`, and `GetContractTransactionsBySignatureTool` exclusively read `THIRDWEB_CLIENT_ID` and do not expose a per-call override.
- Requests use a 100-second timeout where implemented; a few helpers (notably the block fetcher) currently omit the timeout parameter and will rely on `requests` defaults until updated.
- Each tool catches exceptions and returns either a formatted status string (prefixed with ✅/❌) or a dict like `{"error": "..."}`—errors do not raise, and successful calls may return strings rather than raw JSON.

## Package Layout

| Module | Purpose |
| --- | --- |
| `third_web_tools.py` | Houses every `BaseTool` plus lightweight async test helpers. Some `execute` methods return human-readable strings (with emojis and counts) instead of the raw Insight JSON object—inspect the tool docstrings before assuming `dict` output. Import from `spoon_toolkits.data_platforms.third_web.third_web_tools`. |

## Tooling Highlights

### Events and Transfers
- `GetContractEventsFromThirdwebInsight` - fetch decoded events for a contract + signature (`Transfer(address,address,uint256)`, etc.) with paging metadata. Requires you to pass `client_id` explicitly; returns a status string summarizing the page and event count plus the JSON dump.
- `GetMultichainTransfersFromThirdwebInsight` - scan recent transfers for a list of chain IDs (defaults to USDT events exposed by Insight). Reads `THIRDWEB_CLIENT_ID` from the environment and returns the raw Insight JSON dict.

### Transactions and Blocks
- `GetTransactionsTool` - consolidate recent transactions across multiple chains. Reads `THIRDWEB_CLIENT_ID` and returns the raw Insight JSON dict.
- `GetContractTransactionsTool` - view activity for a single contract. Reads `THIRDWEB_CLIENT_ID`.
- `GetContractTransactionsBySignatureTool` - narrow contract activity down to a specific function signature. Reads `THIRDWEB_CLIENT_ID`.
- `GetBlocksFromThirdwebInsight` - stream the latest blocks per chain with optional sort field and order. Requires a per-call `client_id` and currently returns a formatted status string (`"✅ Success ..."`) rather than the JSON dict; also omits the explicit 100-second timeout, so the default `requests` timeout applies.
- `GetWalletTransactionsFromThirdwebInsight` - list wallet transactions across multiple chains, sorted by block number or timestamp. Requires a per-call `client_id` and returns a status string similar to the block tool.

Depending on the helper, `client_id` may need to be passed explicitly, and successful responses may be either raw JSON dicts or formatted status strings. If you need structured data, parse the portion after the newline in the status strings (they contain the serialized JSON response). Always check for `❌` or an `"error"` key to detect failures because network/Insight errors are caught instead of raised.

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
if result.startswith("❌"):
    raise RuntimeError(result)

# Returned string includes JSON after the newline
summary, _, raw_json = result.partition("\n")
print(summary)
print(raw_json)
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
if history.startswith("❌"):
    raise RuntimeError(history)

_, _, raw_history = history.partition("\n")
print(raw_history)
```

## Operational Notes

- Set `THIRDWEB_CLIENT_ID` in your runtime environment for the env-driven tools, and pass `client_id` for the helpers that require it; missing credentials surface as `ValueError` strings in the result.
- HTTP errors are caught and reported in the returned string/dict instead of bubbling up through `requests.raise_for_status()`, so alerting logic should look for `❌` prefixes or `"error"` keys.
- Test helpers at the bottom of `third_web_tools.py` (`test_get_contract_events`, etc.) offer quick sanity checks - run them with `python third_web_tools.py` once your credentials are configured.
- Insight endpoints enforce per-client rate limits; stagger large batch pulls by adjusting `limit` or splitting chain lists across multiple requests.
