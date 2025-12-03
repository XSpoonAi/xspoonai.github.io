---
id: spoon_ai.monitoring.clients
slug: /api-reference/spoon_ai/monitoring/clients/index.md/index
title: spoon_ai.monitoring.clients
---

# Table of Contents

* [spoon\_ai.monitoring.clients](#spoon_ai.monitoring.clients)
* [spoon\_ai.monitoring.clients.base](#spoon_ai.monitoring.clients.base)
  * [DataClient](#spoon_ai.monitoring.clients.base.DataClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.base.DataClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.base.DataClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.base.DataClient.get_klines)
    * [get\_client](#spoon_ai.monitoring.clients.base.DataClient.get_client)
* [spoon\_ai.monitoring.clients.binance](#spoon_ai.monitoring.clients.binance)
  * [BinanceClient](#spoon_ai.monitoring.clients.binance.BinanceClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.binance.BinanceClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.binance.BinanceClient.get_server_time)
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
* [spoon\_ai.monitoring.clients.cex](#spoon_ai.monitoring.clients.cex)
  * [get\_cex\_client](#spoon_ai.monitoring.clients.cex.get_cex_client)
* [spoon\_ai.monitoring.clients.dex.base](#spoon_ai.monitoring.clients.dex.base)
  * [DEXClient](#spoon_ai.monitoring.clients.dex.base.DEXClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_klines)
* [spoon\_ai.monitoring.clients.dex.raydium](#spoon_ai.monitoring.clients.dex.raydium)
  * [RaydiumClient](#spoon_ai.monitoring.clients.dex.raydium.RaydiumClient)
    * [\_\_init\_\_](#spoon_ai.monitoring.clients.dex.raydium.RaydiumClient.__init__)
* [spoon\_ai.monitoring.clients.dex.uniswap](#spoon_ai.monitoring.clients.dex.uniswap)
  * [UniswapClient](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_klines)
* [spoon\_ai.monitoring.clients.dex](#spoon_ai.monitoring.clients.dex)
  * [get\_dex\_client](#spoon_ai.monitoring.clients.dex.get_dex_client)

<a id="spoon_ai.monitoring.clients"></a>

# Module `spoon_ai.monitoring.clients`

API client module

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

<a id="spoon_ai.monitoring.clients.binance"></a>

# Module `spoon_ai.monitoring.clients.binance`

<a id="spoon_ai.monitoring.clients.binance.BinanceClient"></a>

## `BinanceClient` Objects

```python
class BinanceClient()
```

Binance API client

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get single trading pair price

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour price change statistics

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_klines"></a>

#### `get_klines`

```python
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[List]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_server_time"></a>

#### `get_server_time`

```python
def get_server_time() -> int
```

Get server time

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

<a id="spoon_ai.monitoring.clients.dex.raydium"></a>

# Module `spoon_ai.monitoring.clients.dex.raydium`

<a id="spoon_ai.monitoring.clients.dex.raydium.RaydiumClient"></a>

## `RaydiumClient` Objects

```python
class RaydiumClient(DEXClient)
```

Raydium (Solana) DEX client with V3 API support

<a id="spoon_ai.monitoring.clients.dex.raydium.RaydiumClient.__init__"></a>

#### `__init__`

```python
def __init__(rpc_url: Optional[str] = None)
```

Initialize Raydium client with optional RPC URL

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

<a id="spoon_ai.monitoring.clients.dex"></a>

# Module `spoon_ai.monitoring.clients.dex`

<a id="spoon_ai.monitoring.clients.dex.get_dex_client"></a>

#### `get_dex_client`

```python
def get_dex_client(provider: str) -> DEXClient
```

Get appropriate DEX client based on provider name

**Arguments**:

- `provider` - Provider code (e.g., 'uni' for Uniswap)
  

**Returns**:

- `DEXClient` - Corresponding exchange client instance
  

**Raises**:

- `ValueError` - If provider is not supported

