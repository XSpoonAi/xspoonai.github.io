---
id: spoon_ai.monitoring.clients.cex.binance
slug: /api-reference/spoon_ai/monitoring/clients/cex/binance.md
title: spoon_ai.monitoring.clients.cex.binance
---

# Table of Contents

* [spoon\_ai.monitoring.clients.cex.binance](#spoon_ai.monitoring.clients.cex.binance)
  * [BinanceClient](#spoon_ai.monitoring.clients.cex.binance.BinanceClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_server_time)

<a id="spoon_ai.monitoring.clients.cex.binance"></a>

# Module `spoon_ai.monitoring.clients.cex.binance`

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient"></a>

## `BinanceClient` Objects

```python
class BinanceClient(CEXClient)
```

Binance API client

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get single trading pair price

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour price change statistics

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_klines"></a>

#### `get_klines`

```python
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[List]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_server_time"></a>

#### `get_server_time`

```python
def get_server_time() -> int
```

Get server time

