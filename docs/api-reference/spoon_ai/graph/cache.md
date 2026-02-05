---
id: spoon_ai.graph.cache
slug: /api-reference/spoon_ai/graph/cache
title: spoon_ai.graph.cache
---

# Table of Contents

* [spoon\_ai.graph.cache](#spoon_ai.graph.cache)
  * [compute\_cache\_key](#spoon_ai.graph.cache.compute_cache_key)
  * [CacheEntry](#spoon_ai.graph.cache.CacheEntry)
    * [is\_expired](#spoon_ai.graph.cache.CacheEntry.is_expired)
    * [to\_dict](#spoon_ai.graph.cache.CacheEntry.to_dict)
    * [from\_dict](#spoon_ai.graph.cache.CacheEntry.from_dict)
  * [BaseCache](#spoon_ai.graph.cache.BaseCache)
    * [get](#spoon_ai.graph.cache.BaseCache.get)
    * [set](#spoon_ai.graph.cache.BaseCache.set)
    * [delete](#spoon_ai.graph.cache.BaseCache.delete)
    * [clear](#spoon_ai.graph.cache.BaseCache.clear)
    * [get\_or\_compute](#spoon_ai.graph.cache.BaseCache.get_or_compute)
  * [InMemoryCache](#spoon_ai.graph.cache.InMemoryCache)
    * [\_\_init\_\_](#spoon_ai.graph.cache.InMemoryCache.__init__)
    * [get](#spoon_ai.graph.cache.InMemoryCache.get)
    * [set](#spoon_ai.graph.cache.InMemoryCache.set)
    * [delete](#spoon_ai.graph.cache.InMemoryCache.delete)
    * [clear](#spoon_ai.graph.cache.InMemoryCache.clear)
    * [get\_stats](#spoon_ai.graph.cache.InMemoryCache.get_stats)
  * [SQLiteCache](#spoon_ai.graph.cache.SQLiteCache)
    * [\_\_init\_\_](#spoon_ai.graph.cache.SQLiteCache.__init__)
    * [get](#spoon_ai.graph.cache.SQLiteCache.get)
    * [set](#spoon_ai.graph.cache.SQLiteCache.set)
    * [delete](#spoon_ai.graph.cache.SQLiteCache.delete)
    * [clear](#spoon_ai.graph.cache.SQLiteCache.clear)
    * [get\_stats](#spoon_ai.graph.cache.SQLiteCache.get_stats)
  * [create\_memory\_cache](#spoon_ai.graph.cache.create_memory_cache)
  * [create\_sqlite\_cache](#spoon_ai.graph.cache.create_sqlite_cache)

<a id="spoon_ai.graph.cache"></a>

# Module `spoon_ai.graph.cache`

Cache System for Graph Workflows.

Provides caching for node outputs in graph workflows to avoid redundant
computation and speed up execution.

Types of caching:
1. Node-level caching - caches node outputs based on inputs
2. In-memory and persistent (SQLite) backends

Compatible with LangGraph BaseCache interface.

Usage:
    from spoon_ai.graph.cache import InMemoryCache, SQLiteCache

    # In-memory cache (for testing/short sessions)
    cache = InMemoryCache()

    # SQLite cache (persistent across sessions)
    cache = SQLiteCache("cache.db")

    # Use with graph
    graph = StateGraph(...)
    compiled = graph.compile(cache=cache)

<a id="spoon_ai.graph.cache.compute_cache_key"></a>

#### `compute_cache_key`

```python
def compute_cache_key(node_name: str,
                      inputs: Dict[str, Any],
                      config: Optional[Dict[str, Any]] = None) -> str
```

Compute a cache key from node name and inputs.

**Arguments**:

- `node_name` - Name of the node
- `inputs` - Input values to the node
- `config` - Optional configuration
  

**Returns**:

  SHA256 hash as cache key

<a id="spoon_ai.graph.cache.CacheEntry"></a>

## `CacheEntry` Objects

```python
class CacheEntry()
```

A cached value with metadata.

<a id="spoon_ai.graph.cache.CacheEntry.is_expired"></a>

#### `is_expired`

```python
def is_expired() -> bool
```

Check if cache entry has expired.

<a id="spoon_ai.graph.cache.CacheEntry.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Serialize to dictionary.

<a id="spoon_ai.graph.cache.CacheEntry.from_dict"></a>

#### `from_dict`

```python
@classmethod
def from_dict(cls, data: Dict[str, Any]) -> "CacheEntry"
```

Deserialize from dictionary.

<a id="spoon_ai.graph.cache.BaseCache"></a>

## `BaseCache` Objects

```python
class BaseCache(ABC)
```

Abstract base class for graph caches.

Compatible with LangGraph BaseCache interface.

<a id="spoon_ai.graph.cache.BaseCache.get"></a>

#### `get`

```python
@abstractmethod
def get(key: str) -> Optional[Any]
```

Get a cached value by key.

**Arguments**:

- `key` - Cache key
  

**Returns**:

  Cached value or None if not found/expired

<a id="spoon_ai.graph.cache.BaseCache.set"></a>

#### `set`

```python
@abstractmethod
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set a cached value.

**Arguments**:

- `key` - Cache key
- `value` - Value to cache
- `node_name` - Name of the node that produced this value
- `ttl_seconds` - Time-to-live in seconds (None = no expiry)
- `metadata` - Optional metadata

<a id="spoon_ai.graph.cache.BaseCache.delete"></a>

#### `delete`

```python
@abstractmethod
def delete(key: str) -> bool
```

Delete a cached value.

**Arguments**:

- `key` - Cache key
  

**Returns**:

  True if deleted, False if not found

<a id="spoon_ai.graph.cache.BaseCache.clear"></a>

#### `clear`

```python
@abstractmethod
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.BaseCache.get_or_compute"></a>

#### `get_or_compute`

```python
def get_or_compute(key: str,
                   compute_fn: callable,
                   node_name: str = "",
                   ttl_seconds: Optional[int] = None) -> Tuple[Any, bool]
```

Get cached value or compute and cache it.

**Arguments**:

- `key` - Cache key
- `compute_fn` - Function to compute value if not cached
- `node_name` - Name of the node
- `ttl_seconds` - Time-to-live for cached value
  

**Returns**:

  Tuple of (value, was_cached)

<a id="spoon_ai.graph.cache.InMemoryCache"></a>

## `InMemoryCache` Objects

```python
class InMemoryCache(BaseCache)
```

In-memory cache implementation.

Fast but not persistent across sessions. Suitable for:
- Testing
- Short-running workflows
- When persistence is not needed

<a id="spoon_ai.graph.cache.InMemoryCache.__init__"></a>

#### `__init__`

```python
def __init__(max_entries: int = 1000,
             default_ttl_seconds: Optional[int] = None)
```

Initialize in-memory cache.

**Arguments**:

- `max_entries` - Maximum number of entries to keep
- `default_ttl_seconds` - Default TTL for entries (None = no expiry)

<a id="spoon_ai.graph.cache.InMemoryCache.get"></a>

#### `get`

```python
def get(key: str) -> Optional[Any]
```

Get cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.set"></a>

#### `set`

```python
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.delete"></a>

#### `delete`

```python
def delete(key: str) -> bool
```

Delete cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.InMemoryCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

<a id="spoon_ai.graph.cache.SQLiteCache"></a>

## `SQLiteCache` Objects

```python
class SQLiteCache(BaseCache)
```

SQLite-based persistent cache.

Persistent across sessions. Suitable for:
- Production use
- Long-running workflows
- When you want to reuse cached results

<a id="spoon_ai.graph.cache.SQLiteCache.__init__"></a>

#### `__init__`

```python
def __init__(db_path: str = "graph_cache.db",
             default_ttl_seconds: Optional[int] = None,
             max_entries: Optional[int] = None)
```

Initialize SQLite cache.

**Arguments**:

- `db_path` - Path to SQLite database file
- `default_ttl_seconds` - Default TTL for entries (None = no expiry)
- `max_entries` - Maximum entries to keep (None = unlimited)

<a id="spoon_ai.graph.cache.SQLiteCache.get"></a>

#### `get`

```python
def get(key: str) -> Optional[Any]
```

Get cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.set"></a>

#### `set`

```python
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.delete"></a>

#### `delete`

```python
def delete(key: str) -> bool
```

Delete cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.SQLiteCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

<a id="spoon_ai.graph.cache.create_memory_cache"></a>

#### `create_memory_cache`

```python
def create_memory_cache(
        max_entries: int = 1000,
        default_ttl_seconds: Optional[int] = None) -> InMemoryCache
```

Create an in-memory cache.

**Arguments**:

- `max_entries` - Maximum entries to keep
- `default_ttl_seconds` - Default TTL
  

**Returns**:

  Configured InMemoryCache

<a id="spoon_ai.graph.cache.create_sqlite_cache"></a>

#### `create_sqlite_cache`

```python
def create_sqlite_cache(db_path: str = "graph_cache.db",
                        default_ttl_seconds: Optional[int] = None,
                        max_entries: Optional[int] = None) -> SQLiteCache
```

Create a SQLite cache.

**Arguments**:

- `db_path` - Path to database file
- `default_ttl_seconds` - Default TTL
- `max_entries` - Maximum entries
  

**Returns**:

  Configured SQLiteCache

