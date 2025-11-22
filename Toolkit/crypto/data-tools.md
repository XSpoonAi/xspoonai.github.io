

`spoon_toolkits.crypto.crypto_data_tools` is SpoonAI’s Bitquery-centric toolbox for price discovery, liquidity intelligence, lending-rate aggregation, and wallet forensics. Every class in this package plugs directly into the Spoon tool runtime, so agents can reuse the same `BaseTool` lifecycle (validation, structured outputs, telemetry) without additional glue code.


## Environment & Dependencies

```bash
export BITQUERY_API_KEY=your_rest_key              # reserved for future REST helpers
export BITQUERY_CLIENT_ID=your_oauth_client_id     # required by Bitquery OAuth
export BITQUERY_CLIENT_SECRET=your_oauth_secret
export RPC_URL=https://eth.llamarpc.com
```

- `Get*` price tools pull the RPC URL from the environment automatically; alert helpers default to a bundled Alchemy mainnet URL unless you pass a custom endpoint when instantiating them.
- `PredictPrice` requires `pandas`, `scikit-learn`, and `numpy`. Install toolkit extras via `pip install -r requirements.txt` at the project root or install modules individually.
- `LendingRateMonitorTool` performs concurrent HTTP requests using `aiohttp`; event loops must be active (use `nest_asyncio` in notebooks if necessary).
- `SuddenPriceIncreaseTool` currently relies exclusively on CoinGecko’s REST feed; the Bitquery enrichment hook exists in code but is not wired up yet, so providing `BITQUERY_API_KEY` has no effect today.

## Tool Catalog 

### Spot & Historical Pricing
- `GetTokenPriceTool` resolves supported ERC-20 pairs (ETH, USDC, USDT, DAI, WBTC by default) to the canonical Uniswap v3 pool, fetches slot0, and converts ticks into human prices.
- `Get24hStatsTool` uses the same provider stack for downstream analytics, while `GetKlineDataTool` is currently a placeholder that returns an empty list until a Graph/event-log integration ships.

### Alerting & Monitoring
- `PriceThresholdAlertTool` compares live prices with a configurable ±% drift versus prior day.
- `LpRangeCheckTool` reads Uniswap positions, current ticks, and warns when LPs approach range boundaries (`buffer_ticks`).
- `SuddenPriceIncreaseTool` filters CoinGecko’s REST feed for large-cap, high-volume tokens with rapid appreciation; Bitquery enrichment is planned but not enabled.
- `CryptoMarketMonitor` POSTs well-formed payloads to the monitoring daemon bundled at `http://localhost:8888/monitoring/tasks` (`blockchain_monitor.py`). Change the URL in that module if your scheduler lives elsewhere.

### Wallet Intelligence
- `WalletAnalysis`, `TokenHolders`, and `TradingHistory` share the Bitquery GraphQL templates embedded in their modules so you always know the dataset (`combined` vs `archive`) and filters before execution.
- Pagination and filters live directly inside each template string (e.g., `TokenHolders` enforces `Amount >= 10,000,000`). Edit the template if you need a different threshold or window; no exposed class constants exist today. These helpers return the Bitquery JSON fragments directly rather than wrapping results in `ToolResult`.

### DeFi Rates & Liquidity
- `LendingRateMonitorTool` merges DeFiLlama pools with first-party Aave subgraphs today (Compound/Morpho data arrives via DeFiLlama’s feed only), derives utilization, and wraps the result in `ToolResult`. Every response also includes an `arbitrage_opportunities` array summarizing large APY spreads.
- `UniswapLiquidity` emits the latest Mint/Burn events so you can approximate real-time liquidity deltas without running a listener yourself.
- `PredictPrice` is intentionally heavyweight (builds a RandomForest and scaler); cache the fitted estimator in your application if you call it frequently.

## Usage Patterns

### Synchronous price lookup
```python
from spoon_toolkits.crypto.crypto_data_tools import GetTokenPriceTool

tool = GetTokenPriceTool()
result = await tool.execute(symbol="ETH-USDC")

print(result.output["price"])         # structured response
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
- Synchronous price tools return dictionaries nested inside `ToolResult.output`, whereas the Bitquery GraphQL helpers (`WalletAnalysis`, `TokenHolders`, `TradingHistory`, `UniswapLiquidity`) currently return the raw template output.
- Async utilities (`PriceThresholdAlertTool`, `LendingRateMonitorTool`) already shield you from rate spikes with short sleeps; avoid spawning excessive parallel loops unless you also raise Bitquery limits.

## Operational Notes

- Centralize credential management: add the Bitquery OAuth keys to your `.env` and load them before instantiating tools to prevent runtime `ValueError`s from `DexBaseTool.oAuth()`.
- Because Uniswap calls hit your RPC, failures there do **not** imply Bitquery downtime—inspect the `error` string inside `ToolResult.output` or the returned dictionary to isolate the failure domain.
- The monitoring helper in `blockchain_monitor.py` assumes a scheduler reachable at `http://localhost:8888/monitoring/tasks`. Override `api_url` in the module before deploying if your infra differs.
- `PredictPrice` fetches up to ~1000 rows per query. If Bitquery throttles you, lower the template limit or use a paid API plan.
