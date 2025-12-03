---
id: spoon_ai.monitoring.clients.dex.uniswap
slug: /api-reference/spoon_ai/monitoring/clients/dex/uniswap.md
title: spoon_ai.monitoring.clients.dex.uniswap
---

# Table of Contents

* [spoon\_ai.monitoring.clients.dex.uniswap](#spoon_ai.monitoring.clients.dex.uniswap)
  * [UniswapClient](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_klines)

<a id="spoon_ai.monitoring.clients.dex.uniswap"></a>

# Module `spoon_ai.monitoring.clients.dex.uniswap`

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient"></a>

## `UniswapClient` Objects

```python
class UniswapClient(DEXClient)
```

Uniswap API client

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour price change statistics

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_klines"></a>

#### `get_klines`

```python
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[List]
```

Get K-line data

