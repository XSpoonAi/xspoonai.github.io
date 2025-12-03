---
id: spoon_ai.monitoring.clients.cex.base
slug: /api-reference/spoon_ai/monitoring/clients/cex/base.md
title: spoon_ai.monitoring.clients.cex.base
---

# Table of Contents

* [spoon\_ai.monitoring.clients.cex.base](#spoon_ai.monitoring.clients.cex.base)
  * [CEXClient](#spoon_ai.monitoring.clients.cex.base.CEXClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_server_time)

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

