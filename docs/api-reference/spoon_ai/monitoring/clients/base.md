---
id: spoon_ai.monitoring.clients.base
slug: /api-reference/spoon_ai/monitoring/clients/base.md
title: spoon_ai.monitoring.clients.base
---

# Table of Contents

* [spoon\_ai.monitoring.clients.base](#spoon_ai.monitoring.clients.base)
  * [DataClient](#spoon_ai.monitoring.clients.base.DataClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.base.DataClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.base.DataClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.base.DataClient.get_klines)
    * [get\_client](#spoon_ai.monitoring.clients.base.DataClient.get_client)

<a id="spoon_ai.monitoring.clients.base"></a>

# Module `spoon_ai.monitoring.clients.base`

<a id="spoon_ai.monitoring.clients.base.DataClient"></a>

## `DataClient` Objects

```python
class DataClient(ABC)
```

Base class for data clients

<a id="spoon_ai.monitoring.clients.base.DataClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
@abstractmethod
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.base.DataClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
@abstractmethod
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour statistics

<a id="spoon_ai.monitoring.clients.base.DataClient.get_klines"></a>

#### `get_klines`

```python
@abstractmethod
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[Any]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.base.DataClient.get_client"></a>

#### `get_client`

```python
@classmethod
def get_client(cls, market: str, provider: str)
```

Get appropriate client based on market and provider

