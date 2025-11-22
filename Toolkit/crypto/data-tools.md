

`spoon_toolkits.crypto.crypto_data_tools` is SpoonAI’s Bitquery-centric toolbox for price discovery, liquidity intelligence, lending-rate aggregation, and wallet forensics. Every class in this package plugs directly into the Spoon tool runtime, so agents can reuse the same `BaseTool` lifecycle (validation, structured outputs, telemetry) without additional glue code.


## Environment & Dependencies

```bash
export BITQUERY_API_KEY=your_rest_key              # legacy modules
export BITQUERY_CLIENT_ID=your_oauth_client_id     # required by Bitquery OAuth
export BITQUERY_CLIENT_SECRET=your_oauth_secret
export RPC_URL=https://eth.llamarpc.com            
```

- `Get*`/`Alert*` tools depend on `web3` (for Uniswap) and respect `RPC_URL`. Provide a reliable mainnet endpoint to avoid public-rate limits.
- `PredictPrice` requires `pandas`, `scikit-learn`, and `numpy`. Install toolkit extras via `pip install -r requirements.txt` at the project root or install modules individually.
- `LendingRateMonitorTool` performs concurrent HTTP requests using `aiohttp`; event loops must be active (use `nest_asyncio` in notebooks if necessary).

## Tool Catalog 

### Spot & Historical Pricing
- `GetTokenPriceTool` resolves ERC-20 pairs to the canonical Uniswap v3 pool, fetches slot0, and converts ticks into human prices.
- `Get24hStatsTool` and `GetKlineDataTool` expose the same provider stack for downstream analytics (volatility, TWAP, etc.).

### Alerting & Monitoring
- `PriceThresholdAlertTool` compares live prices with a configurable ±% drift versus prior day.
- `LpRangeCheckTool` reads Uniswap positions, current ticks, and warns when LPs approach range boundaries (`buffer_ticks`).
- `SuddenPriceIncreaseTool` scans Bitquery datasets for large-cap, high-volume tokens with rapid appreciation—ideal for whale or listing alerts.
- `CryptoMarketMonitor` abstracts “set-and-forget” monitors by POSTing well-formed payloads to the monitoring daemon you run (defaults to `localhost:8888` but can be swapped).

### Wallet Intelligence
- `WalletAnalysis`, `TokenHolders`, and `TradingHistory` share the Bitquery GraphQL templates embedded in their modules so you always know the dataset (`combined` vs `archive`) and filters before execution.
- Pagination is driven by the `limit` clauses inside the template; adjust the class constants if you need bigger windows.

### DeFi Rates & Liquidity
- `LendingRateMonitorTool` merges DeFiLlama pools with Aave/Compound/Morpho APIs, derives utilization, and wraps the result in `ToolResult` for consumption by governance agents.
- `UniswapLiquidity` emits the latest Mint/Burn events so you can approximate real-time liquidity deltas without running a listener yourself.
- `PredictPrice` is intentionally heavyweight (builds a RandomForest and scaler); cache the fitted estimator in your application if you call it frequently.

## Usage Patterns

### Synchronous price lookup
```python
from spoon_toolkits.crypto.crypto_data_tools import GetTokenPriceTool

tool = GetTokenPriceTool()
result = await tool.execute(symbol="ETH-USDC")

print(result.output["price"])         # structured response
print(result.diagnostic["pool"])      # extra context for logging
```

### Long-running alert inside an agent
```python
import asyncio
from spoon_toolkits.crypto.crypto_data_tools import PriceThresholdAlertTool

alerts = PriceThresholdAlertTool()

async def monitor():
    while True:
        tool_result = await alerts.execute(symbol="ETH-USDC", threshold_percent=7)
        if tool_result.output.get("exceeded"):
            await send_notification(tool_result.output["message"])
        await asyncio.sleep(60)

asyncio.run(monitor())
```

Tips:
- Most tools return dictionaries; when a class subclasses `DexBaseTool`, the `ToolResult.output` mirrors the Bitquery JSON fragment shown in the GraphQL template.
- Async utilities (`PriceThresholdAlertTool`, `LendingRateMonitorTool`) already shield you from rate spikes with short sleeps; avoid spawning excessive parallel loops unless you also raise Bitquery limits.

## Operational Notes

- Centralize credential management: add the Bitquery OAuth keys to your `.env` and load them before instantiating tools to prevent runtime `ValueError`s from `DexBaseTool.oAuth()`.
- Because Uniswap calls hit your RPC, failures there do **not** imply Bitquery downtime—inspect `ToolResult.diagnostic` for the precise failure domain.
- The monitoring helper in `blockchain_monitor.py` assumes a scheduler reachable at `http://localhost:8888/monitoring/tasks`. Override `api_url` in the module before deploying if your infra differs.
- `PredictPrice` fetches up to ~1000 rows per query. If Bitquery throttles you, lower the template limit or use a paid API plan.
