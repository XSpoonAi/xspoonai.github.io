---
id: spoon_ai.bridge
slug: /api-reference/spoon_ai/bridge//index
title: spoon_ai.bridge
---

# Table of Contents

* [spoon\_ai.bridge](#spoon_ai.bridge)
* [spoon\_ai.bridge.eth\_neofs\_indexer](#spoon_ai.bridge.eth_neofs_indexer)
  * [EthereumNeoFSIndexer](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer)
    * [register\_event\_handler](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.register_event_handler)
    * [start\_indexing](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.start_indexing)
    * [stop\_indexing](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.stop_indexing)
    * [get\_indexer\_status](#spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.get_indexer_status)

<a id="spoon_ai.bridge"></a>

# Module `spoon_ai.bridge`

Cross-chain bridge module for DID synchronization
Ethereum ← → NeoFS/IPFS event indexing

<a id="spoon_ai.bridge.eth_neofs_indexer"></a>

# Module `spoon_ai.bridge.eth_neofs_indexer`

Ethereum to NeoFS/IPFS Event Indexer
Listens to ERC-8004 registry events and ensures off-chain storage is synchronized

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer"></a>

## `EthereumNeoFSIndexer` Objects

```python
class EthereumNeoFSIndexer()
```

Event indexer that syncs Ethereum registry events to NeoFS/IPFS
Ensures content hash verification and storage consistency

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.register_event_handler"></a>

#### `register_event_handler`

```python
def register_event_handler(event_name: str, handler: Callable)
```

Register custom event handler

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.start_indexing"></a>

#### `start_indexing`

```python
def start_indexing(block_limit: Optional[int] = None)
```

Start indexing events

**Arguments**:

- `block_limit` - Optional block limit for testing (stops after N blocks)

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.stop_indexing"></a>

#### `stop_indexing`

```python
def stop_indexing()
```

Stop the indexer

<a id="spoon_ai.bridge.eth_neofs_indexer.EthereumNeoFSIndexer.get_indexer_status"></a>

#### `get_indexer_status`

```python
def get_indexer_status() -> Dict
```

Get current indexer status

