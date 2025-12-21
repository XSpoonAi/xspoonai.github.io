---
id: spoon_ai.llm.cache
slug: /api-reference/spoon_ai/llm/cache
title: spoon_ai.llm.cache
---

# Table of Contents

* [spoon\_ai.llm.cache](#spoon_ai.llm.cache)
  * [LLMResponseCache](#spoon_ai.llm.cache.LLMResponseCache)
    * [\_\_init\_\_](#spoon_ai.llm.cache.LLMResponseCache.__init__)
    * [get](#spoon_ai.llm.cache.LLMResponseCache.get)
    * [set](#spoon_ai.llm.cache.LLMResponseCache.set)
    * [clear](#spoon_ai.llm.cache.LLMResponseCache.clear)
    * [get\_stats](#spoon_ai.llm.cache.LLMResponseCache.get_stats)
  * [CachedLLMManager](#spoon_ai.llm.cache.CachedLLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.cache.CachedLLMManager.__init__)
    * [chat](#spoon_ai.llm.cache.CachedLLMManager.chat)
    * [chat\_stream](#spoon_ai.llm.cache.CachedLLMManager.chat_stream)
    * [clear\_cache](#spoon_ai.llm.cache.CachedLLMManager.clear_cache)
    * [get\_cache\_stats](#spoon_ai.llm.cache.CachedLLMManager.get_cache_stats)

<a id="spoon_ai.llm.cache"></a>

# Module `spoon_ai.llm.cache`

LLM Response Caching - Cache LLM responses to avoid redundant API calls.

<a id="spoon_ai.llm.cache.LLMResponseCache"></a>

## `LLMResponseCache` Objects

```python
class LLMResponseCache()
```

Cache for LLM responses to avoid redundant API calls.

<a id="spoon_ai.llm.cache.LLMResponseCache.__init__"></a>

#### `__init__`

```python
def __init__(default_ttl: int = 3600, max_size: int = 1000)
```

Initialize the cache.

**Arguments**:

- `default_ttl` - Default time-to-live in seconds (default: 1 hour)
- `max_size` - Maximum number of cached entries (default: 1000)

<a id="spoon_ai.llm.cache.LLMResponseCache.get"></a>

#### `get`

```python
def get(messages: List[Message],
        provider: Optional[str] = None,
        **kwargs) -> Optional[LLMResponse]
```

Get cached response if available.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Provider name (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `Optional[LLMResponse]` - Cached response if found and not expired, None otherwise

<a id="spoon_ai.llm.cache.LLMResponseCache.set"></a>

#### `set`

```python
def set(messages: List[Message],
        response: LLMResponse,
        provider: Optional[str] = None,
        ttl: Optional[int] = None,
        **kwargs) -> None
```

Store response in cache.

**Arguments**:

- `messages` - List of conversation messages
- `response` - LLM response to cache
- `provider` - Provider name (optional)
- `ttl` - Time-to-live in seconds (optional, uses default if not provided)
- `**kwargs` - Additional parameters

<a id="spoon_ai.llm.cache.LLMResponseCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached entries.

<a id="spoon_ai.llm.cache.LLMResponseCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics including size, max_size, etc.

<a id="spoon_ai.llm.cache.CachedLLMManager"></a>

## `CachedLLMManager` Objects

```python
class CachedLLMManager()
```

Wrapper around LLMManager that adds response caching.

<a id="spoon_ai.llm.cache.CachedLLMManager.__init__"></a>

#### `__init__`

```python
def __init__(llm_manager: LLMManager,
             cache: Optional[LLMResponseCache] = None)
```

Initialize cached LLM manager.

**Arguments**:

- `llm_manager` - The underlying LLMManager instance
- `cache` - Optional cache instance (creates new one if not provided)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               use_cache: bool = True,
               cache_ttl: Optional[int] = None,
               **kwargs) -> LLMResponse
```

Send chat request with caching support.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `use_cache` - Whether to use cache (default: True)
- `cache_ttl` - Custom TTL for this request (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - LLM response (from cache or API)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      provider: Optional[str] = None,
                      callbacks: Optional[List] = None,
                      **kwargs)
```

Send streaming chat request (caching not supported for streaming).

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `callbacks` - Optional callback handlers
- `**kwargs` - Additional parameters
  

**Yields**:

- `LLMResponseChunk` - Streaming response chunks

<a id="spoon_ai.llm.cache.CachedLLMManager.clear_cache"></a>

#### `clear_cache`

```python
def clear_cache() -> None
```

Clear the response cache.

<a id="spoon_ai.llm.cache.CachedLLMManager.get_cache_stats"></a>

#### `get_cache_stats`

```python
def get_cache_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics

