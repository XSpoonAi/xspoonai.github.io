---
id: spoon_ai.monitoring.clients.cex
slug: /api-reference/spoon_ai/monitoring/clients/cex/index.md/index
title: spoon_ai.monitoring.clients.cex
---

# Table of Contents

* [spoon\_ai.monitoring.clients.cex](#spoon_ai.monitoring.clients.cex)
  * [get\_cex\_client](#spoon_ai.monitoring.clients.cex.get_cex_client)
* [spoon\_ai.monitoring.clients.cex.base](#spoon_ai.monitoring.clients.cex.base)
  * [CEXClient](#spoon_ai.monitoring.clients.cex.base.CEXClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_server_time)
* [spoon\_ai.monitoring.clients.cex.binance](#spoon_ai.monitoring.clients.cex.binance)
  * [BinanceClient](#spoon_ai.monitoring.clients.cex.binance.BinanceClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_server_time)

<a id="spoon_ai.monitoring.clients.cex"></a>

# Module `spoon_ai.monitoring.clients.cex`

<a id="spoon_ai.monitoring.clients.cex.get_cex_client"></a>

#### `get_cex_client`

```python
def get_cex_client(provider: str) -> CEXClient
```

Get appropriate CEX client based on provider name

**Arguments**:

- `provider` - Provider code (e.g., 'bn' for Binance)
  

**Returns**:

- `CEXClient` - Corresponding exchange client instance
  

**Raises**:

- `ValueError` - If provider is not supported

<a id="spoon_ai.monitoring.clients.cex.base"></a>

# Module `spoon_ai.monitoring.clients.cex.base`

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient"></a>

## `CEXClient` Objects

```python
class CEXClient(DataClient)
```

Centralized exchange client base class

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
@abstractmethod
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
@abstractmethod
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour statistics

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_klines"></a>

#### `get_klines`

```python
@abstractmethod
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[Any]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_server_time"></a>

#### `get_server_time`

```python
@abstractmethod
def get_server_time() -> int
```

Get server time

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

