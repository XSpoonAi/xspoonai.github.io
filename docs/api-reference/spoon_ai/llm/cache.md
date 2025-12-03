---
id: spoon_ai.llm.cache
slug: /api-reference/spoon_ai/llm/cache.md
title: spoon_ai.llm.cache
---

# Table of Contents

* [spoon\_ai.llm.cache](#spoon_ai.llm.cache)
  * [CacheEntry](#spoon_ai.llm.cache.CacheEntry)
    * [is\_expired](#spoon_ai.llm.cache.CacheEntry.is_expired)
    * [touch](#spoon_ai.llm.cache.CacheEntry.touch)
  * [LLMResponseCache](#spoon_ai.llm.cache.LLMResponseCache)
    * [\_\_init\_\_](#spoon_ai.llm.cache.LLMResponseCache.__init__)
    * [get](#spoon_ai.llm.cache.LLMResponseCache.get)
    * [put](#spoon_ai.llm.cache.LLMResponseCache.put)
    * [clear](#spoon_ai.llm.cache.LLMResponseCache.clear)
    * [get\_stats](#spoon_ai.llm.cache.LLMResponseCache.get_stats)
    * [cleanup\_expired](#spoon_ai.llm.cache.LLMResponseCache.cleanup_expired)
  * [get\_global\_cache](#spoon_ai.llm.cache.get_global_cache)
  * [set\_global\_cache](#spoon_ai.llm.cache.set_global_cache)
  * [CachedLLMManager](#spoon_ai.llm.cache.CachedLLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.cache.CachedLLMManager.__init__)
    * [chat](#spoon_ai.llm.cache.CachedLLMManager.chat)
    * [chat\_with\_tools](#spoon_ai.llm.cache.CachedLLMManager.chat_with_tools)
    * [enable\_cache](#spoon_ai.llm.cache.CachedLLMManager.enable_cache)
    * [disable\_cache](#spoon_ai.llm.cache.CachedLLMManager.disable_cache)
    * [clear\_cache](#spoon_ai.llm.cache.CachedLLMManager.clear_cache)
    * [get\_cache\_stats](#spoon_ai.llm.cache.CachedLLMManager.get_cache_stats)
    * [\_\_getattr\_\_](#spoon_ai.llm.cache.CachedLLMManager.__getattr__)

<a id="spoon_ai.llm.cache"></a>

# Module `spoon_ai.llm.cache`

Caching system for LLM responses to improve performance.

<a id="spoon_ai.llm.cache.CacheEntry"></a>

## `CacheEntry` Objects

```python
@dataclass
class CacheEntry()
```

Cache entry for LLM responses.

<a id="spoon_ai.llm.cache.CacheEntry.is_expired"></a>

#### `is_expired`

```python
def is_expired(ttl: float) -> bool
```

Check if cache entry is expired.

**Arguments**:

- `ttl` - Time to live in seconds
  

**Returns**:

- `bool` - True if expired

<a id="spoon_ai.llm.cache.CacheEntry.touch"></a>

#### `touch`

```python
def touch() -> None
```

Update access information.

<a id="spoon_ai.llm.cache.LLMResponseCache"></a>

## `LLMResponseCache` Objects

```python
class LLMResponseCache()
```

Cache for LLM responses with TTL and size limits.

<a id="spoon_ai.llm.cache.LLMResponseCache.__init__"></a>

#### `__init__`

```python
def __init__(max_size: int = 1000, default_ttl: float = 3600)
```

Initialize cache.

**Arguments**:

- `max_size` - Maximum number of entries
- `default_ttl` - Default time to live in seconds

<a id="spoon_ai.llm.cache.LLMResponseCache.get"></a>

#### `get`

```python
def get(messages: List[Message],
        provider: str,
        ttl: Optional[float] = None,
        **kwargs) -> Optional[LLMResponse]
```

Get cached response if available and not expired.

**Arguments**:

- `messages` - List of messages
- `provider` - Provider name
- `ttl` - Time to live override
- `**kwargs` - Additional parameters
  

**Returns**:

- `Optional[LLMResponse]` - Cached response if available

<a id="spoon_ai.llm.cache.LLMResponseCache.put"></a>

#### `put`

```python
def put(messages: List[Message], provider: str, response: LLMResponse,
        **kwargs) -> None
```

Store response in cache.

**Arguments**:

- `messages` - List of messages
- `provider` - Provider name
- `response` - Response to cache
- `**kwargs` - Additional parameters

<a id="spoon_ai.llm.cache.LLMResponseCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cache entries.

<a id="spoon_ai.llm.cache.LLMResponseCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics

<a id="spoon_ai.llm.cache.LLMResponseCache.cleanup_expired"></a>

#### `cleanup_expired`

```python
def cleanup_expired() -> int
```

Remove expired entries.

**Returns**:

- `int` - Number of entries removed

<a id="spoon_ai.llm.cache.get_global_cache"></a>

#### `get_global_cache`

```python
def get_global_cache() -> LLMResponseCache
```

Get global cache instance.

**Returns**:

- `LLMResponseCache` - Global cache instance

<a id="spoon_ai.llm.cache.set_global_cache"></a>

#### `set_global_cache`

```python
def set_global_cache(cache: LLMResponseCache) -> None
```

Set global cache instance.

**Arguments**:

- `cache` - Cache instance to set as global

<a id="spoon_ai.llm.cache.CachedLLMManager"></a>

## `CachedLLMManager` Objects

```python
class CachedLLMManager()
```

LLM Manager wrapper with caching support.

<a id="spoon_ai.llm.cache.CachedLLMManager.__init__"></a>

#### `__init__`

```python
def __init__(manager, cache: Optional[LLMResponseCache] = None)
```

Initialize cached manager.

**Arguments**:

- `manager` - LLM manager instance
- `cache` - Cache instance (optional)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               use_cache: bool = True,
               **kwargs) -> LLMResponse
```

Chat with caching support.

**Arguments**:

- `messages` - List of messages
- `provider` - Provider name
- `use_cache` - Whether to use cache
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Response (cached or fresh)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message],
                          tools: List[Dict],
                          provider: Optional[str] = None,
                          use_cache: bool = True,
                          **kwargs) -> LLMResponse
```

Chat with tools and caching support.

**Arguments**:

- `messages` - List of messages
- `tools` - List of tools
- `provider` - Provider name
- `use_cache` - Whether to use cache
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Response (cached or fresh)

<a id="spoon_ai.llm.cache.CachedLLMManager.enable_cache"></a>

#### `enable_cache`

```python
def enable_cache() -> None
```

Enable caching.

<a id="spoon_ai.llm.cache.CachedLLMManager.disable_cache"></a>

#### `disable_cache`

```python
def disable_cache() -> None
```

Disable caching.

<a id="spoon_ai.llm.cache.CachedLLMManager.clear_cache"></a>

#### `clear_cache`

```python
def clear_cache() -> None
```

Clear cache.

<a id="spoon_ai.llm.cache.CachedLLMManager.get_cache_stats"></a>

#### `get_cache_stats`

```python
def get_cache_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics

<a id="spoon_ai.llm.cache.CachedLLMManager.__getattr__"></a>

#### `__getattr__`

```python
def __getattr__(name)
```

Delegate other methods to the underlying manager.

