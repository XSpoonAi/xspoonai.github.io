---
id: spoon_ai.monitoring.clients.dex.base
slug: /api-reference/spoon_ai/monitoring/clients/dex/base.md
title: spoon_ai.monitoring.clients.dex.base
---

# Table of Contents

* [spoon\_ai.monitoring.clients.dex.base](#spoon_ai.monitoring.clients.dex.base)
  * [DEXClient](#spoon_ai.monitoring.clients.dex.base.DEXClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_klines)

<a id="spoon_ai.monitoring.clients.dex.base"></a>

# Module `spoon_ai.monitoring.clients.dex.base`

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient"></a>

## `DEXClient` Objects

```python
class DEXClient(DataClient)
```

Decentralized exchange client base class

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
@abstractmethod
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
@abstractmethod
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour statistics

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient.get_klines"></a>

#### `get_klines`

```python
@abstractmethod
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[Any]
```

Get K-line data

