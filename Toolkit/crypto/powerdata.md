

`spoon_toolkits.crypto.crypto_powerdata` fuses CCXT-powered CEX feeds, OKX Web3 DEX data, TA-Lib/enhanced indicators, and an MCP server that can stream results over stdio or SSE. Use it when agents need richer analytics than simple price lookups.

## Environment & Settings

```bash
export OKX_API_KEY=...
export OKX_SECRET_KEY=...
export OKX_API_PASSPHRASE=...
export OKX_PROJECT_ID=...
export OKX_BASE_URL=https://web3.okx.com/api/v5/   # optional override

# Optional overrides (defaults shown)
export RATE_LIMIT_REQUESTS_PER_SECOND=10
export MAX_RETRIES=3
export RETRY_DELAY=1.0
export TIMEOUT_SECONDS=30
```

`data_provider.Settings` ingests these variables (plus indicator defaults such as SMA/EMA periods). Missing OKX keys raise immediately before any HTTP call, so configure them centrally—either via environment or by passing `env_vars` into the MCP helpers.

## What’s Inside the Toolkit

<table>
  <colgroup>
    <col style={{ width: "22%" }} />
    <col style={{ width: "22%" }} />
    <col style={{ width: "56%" }} />
  </colgroup>
  <thead>
    <tr>
      <th>Component</th>
      <th>File(s)</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`CryptoPowerDataCEXTool`</td>
      <td>`tools.py`</td>
      <td>Pull OHLCV candles from 100+ CCXT exchanges and pipe them through the enhanced indicator stack.</td>
    </tr>
    <tr>
      <td>`CryptoPowerDataDEXTool`</td>
      <td>`tools.py`</td>
      <td>Hit OKX Web3 DEX APIs for on-chain pairs specified by `chain_index` + token address.</td>
    </tr>
    <tr>
      <td>`CryptoPowerDataPriceTool`</td>
      <td>`tools.py`</td>
      <td>Lightweight spot price snapshot (CEX or DEX) without fetching an entire candle set.</td>
    </tr>
    <tr>
      <td>`CryptoPowerDataIndicatorsTool`</td>
      <td>`tools.py`</td>
      <td>Enumerate every indicator name/parameter accepted by the enhanced TA registry (TA-Lib + custom extras).</td>
    </tr>
    <tr>
      <td>`Settings`, `OKXDEXClient`, `TechnicalAnalysis`</td>
      <td>`data_provider.py`</td>
      <td>Central place for rate limiting, retries, authenticated OKX calls, and TA-Lib helpers.</td>
    </tr>
    <tr>
      <td>MCP server runners (`start_crypto_powerdata_mcp_*`)</td>
      <td>`server.py`, `dual_transport_server.py`</td>
      <td>Start stdio or HTTP/SSE transports so UI agents can subscribe to continuous feeds.</td>
    </tr>
    <tr>
      <td>Analytics core</td>
      <td>`main.py`, `enhanced_indicators.py`, `talib_registry.py`</td>
      <td>Parse indicator configs, register TA functions, and expose them via FastMCP tools.</td>
    </tr>
  </tbody>
</table>

All tools inherit `CryptoPowerDataBaseTool`, which lazily initializes global settings and reuses throttled clients; you rarely need to micromanage sessions yourself.

## Indicator Configuration Cheatsheet

- Accepts either JSON strings (most MCP clients) or native dicts. Double-encoded JSON like `"\"{\\\"ema\\\": ...}\""` is auto-decoded.
- Mix-and-match multiple parameters per indicator:  
  `{"ema": [{"timeperiod": 12}, {"timeperiod": 26}], "macd": [{"fastperiod": 12, "slowperiod": 26, "signalperiod": 9}]}`
- Enhanced registry supports 150+ TA-Lib functions plus custom composites (VWAP, BB width/position, Aroon oscillators, etc.).
- Validation errors bubble back as descriptive `ToolResult.error` messages so you can surface them directly to users.

## Usage Patterns

### CEX candles + indicators

```python
from spoon_toolkits.crypto.crypto_powerdata import CryptoPowerDataCEXTool

tool = CryptoPowerDataCEXTool()
result = await tool.execute(
    exchange="binance",
    symbol="BTC/USDT",
    timeframe="1h",
    limit=200,
    indicators_config='{"ema": [{"timeperiod": 12}, {"timeperiod": 26}], "rsi": [{"timeperiod": 14}]}',
)

ohlcv_rows = result.output            # only the candle rows are returned
# metadata is not exposed by the ToolResult wrapper yet
```

### DEX analytics on OKX Web3

```python
from spoon_toolkits.crypto.crypto_powerdata import CryptoPowerDataDEXTool

dex = CryptoPowerDataDEXTool()
result = await dex.execute(
    chain_index="1",                      # Ethereum
    token_address="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",  # WETH
    timeframe="1H",
    limit=150,
    indicators_config='{"macd": [{"fastperiod": 12, "slowperiod": 26, "signalperiod": 9}], "bb": [{"period": 20, "std": 2}]}',
)

candles = result.output               # ToolResult output already contains the payload
```

### Real-time price snapshot

```python
from spoon_toolkits.crypto.crypto_powerdata import CryptoPowerDataPriceTool

price_tool = CryptoPowerDataPriceTool()
btc = await price_tool.execute(source="cex", exchange="okx", symbol="BTC/USDT")
dex_price = await price_tool.execute(source="dex", chain_index="42161", token_address="0xFF970A61A04b1cA14834A43f5de4533eBDDB5CC8")
```

### Discover supported indicators

```python
from spoon_toolkits.crypto.crypto_powerdata import CryptoPowerDataIndicatorsTool

catalog = await CryptoPowerDataIndicatorsTool().execute()
print(catalog.output["indicators"])   # list of indicator metadata with defaults
```

## MCP Server & Streaming

- `start_crypto_powerdata_mcp_stdio(env_vars=...)` spins up a FastMCP stdio server; pass `background=True` if you need it alongside other async work.
- `start_crypto_powerdata_mcp_sse(host, port, env_vars)` exposes identical tools over HTTP + Server-Sent Events (see `dual_transport_server.py` for endpoints `/mcp` and `/health`).
- `start_crypto_powerdata_mcp_auto` picks stdio vs SSE automatically based on environment; handy for container images.
- `CryptoPowerDataMCPServer` keeps track of running threads so you can query `status()` or stop everything on shutdown.
- `mcp_bridge.py` wires FastMCP methods into the dual transport so CLI agents and browser extensions consume the same tool definitions.

The current HTTP/SSE server keeps an `/mcp` SSE connection alive with heartbeats, but tool responses are delivered via JSON-RPC POST replies rather than pushed over the SSE channel. Keep calling the tools periodically if you need fresh data; the same OKX rate limiting (`rate_limit_requests_per_second`) and retry envelopes apply regardless of transport.
