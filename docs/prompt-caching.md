---
sidebar_position: 16
---

# Prompt Caching

SpoonOS includes advanced prompt caching capabilities that significantly improve performance and reduce costs by intelligently caching LLM responses and reusing them when appropriate.

## Overview

Prompt caching in SpoonOS provides:

- **Response Caching** - Cache LLM responses for identical prompts
- **Semantic Caching** - Cache responses for semantically similar prompts
- **Context-Aware Caching** - Consider conversation context in caching decisions
- **Cost Optimization** - Reduce API calls and associated costs
- **Performance Improvement** - Faster response times for cached queries

## Basic Caching Configuration

### Enable Caching

```python
from spoon_ai.llm import LLMManager, CacheConfig

# Configure caching
cache_config = CacheConfig(
    enabled=True,
    cache_type="memory",  # or "redis", "file"
    ttl_seconds=3600,     # 1 hour cache lifetime
    max_entries=1000,     # Maximum cached entries
    semantic_similarity_threshold=0.85  # For semantic caching
)

# Initialize LLM manager with caching
llm_manager = LLMManager(cache_config=cache_config)
```

### Configuration Options

```json
{
  "llm_settings": {
    "enable_caching": true,
    "cache_config": {
      "cache_type": "memory",
      "ttl_seconds": 3600,
      "max_entries": 1000,
      "semantic_caching": true,
      "similarity_threshold": 0.85,
      "cache_key_strategy": "content_hash",
      "exclude_patterns": ["random", "timestamp", "uuid"]
    }
  }
}
```

## Cache Types

### 1. Memory Cache (Default)

Fast in-memory caching for single-process applications:

```python
from spoon_ai.llm.cache import MemoryCache

cache = MemoryCache(
    max_entries=1000,
    ttl_seconds=3600
)

llm_manager = LLMManager(cache=cache)
```

### 2. Redis Cache

Distributed caching for multi-process/multi-server deployments:

```python
from spoon_ai.llm.cache import RedisCache

cache = RedisCache(
    host="localhost",
    port=6379,
    db=0,
    password="your-redis-password",
    ttl_seconds=3600
)

llm_manager = LLMManager(cache=cache)
```

### 3. File Cache

Persistent file-based caching:

```python
from spoon_ai.llm.cache import FileCache

cache = FileCache(
    cache_dir="./llm_cache",
    max_size_mb=100,
    ttl_seconds=3600
)

llm_manager = LLMManager(cache=cache)
```

## Caching Strategies

### 1. Exact Match Caching

Cache responses for identical prompts:

```python
# First call - hits LLM API
response1 = await llm_manager.chat([
    {"role": "user", "content": "What is the capital of France?"}
])

# Second call - returns cached response
response2 = await llm_manager.chat([
    {"role": "user", "content": "What is the capital of France?"}
])

# response1 and response2 are identical, but response2 is much faster
```

### 2. Semantic Caching

Cache responses for semantically similar prompts:

```python
# Configure semantic caching
cache_config = CacheConfig(
    semantic_caching=True,
    similarity_threshold=0.85
)

llm_manager = LLMManager(cache_config=cache_config)

# First call
response1 = await llm_manager.chat([
    {"role": "user", "content": "What is the capital city of France?"}
])

# Second call - semantically similar, returns cached response
response2 = await llm_manager.chat([
    {"role": "user", "content": "What's the capital of France?"}
])
```

### 3. Context-Aware Caching

Consider conversation context in caching:

```python
# Configure context-aware caching
cache_config = CacheConfig(
    context_aware=True,
    context_window=5  # Consider last 5 messages
)

# Conversation context affects caching
conversation = [
    {"role": "user", "content": "I'm planning a trip to Europe"},
    {"role": "assistant", "content": "That sounds exciting! Which countries are you considering?"},
    {"role": "user", "content": "What's the capital of France?"}  # Context: travel planning
]

response1 = await llm_manager.chat(conversation)

# Different context, different cache entry
different_conversation = [
    {"role": "user", "content": "I'm studying geography"},
    {"role": "assistant", "content": "Geography is fascinating! What would you like to learn?"},
    {"role": "user", "content": "What's the capital of France?"}  # Context: studying
]

response2 = await llm_manager.chat(different_conversation)
```

## Advanced Caching Features

### Cache Invalidation

```python
from spoon_ai.llm.cache import CacheManager

cache_manager = CacheManager()

# Invalidate specific cache entry
await cache_manager.invalidate("cache_key_123")

# Invalidate by pattern
await cache_manager.invalidate_pattern("weather_*")

# Clear all cache
await cache_manager.clear_all()

# Invalidate expired entries
await cache_manager.cleanup_expired()
```

### Cache Warming

Pre-populate cache with common queries:

```python
async def warm_cache():
    """Pre-populate cache with common queries"""
    common_queries = [
        "What is Bitcoin?",
        "How does Ethereum work?",
        "What is DeFi?",
        "Explain smart contracts",
        "What is yield farming?"
    ]
    
    for query in common_queries:
        await llm_manager.chat([
            {"role": "user", "content": query}
        ])
    
    print(f"Cache warmed with {len(common_queries)} entries")

# Warm cache on startup
await warm_cache()
```

### Conditional Caching

Control when responses should be cached:

```python
class ConditionalCache:
    def should_cache(self, messages: list, response: dict) -> bool:
        """Determine if response should be cached"""
        
        # Don't cache if response contains current time/date
        if any(keyword in response.get("content", "").lower() 
               for keyword in ["today", "now", "current time"]):
            return False
        
        # Don't cache if query asks for random/unique content
        user_message = messages[-1].get("content", "").lower()
        if any(keyword in user_message 
               for keyword in ["random", "generate unique", "create new"]):
            return False
        
        # Don't cache if response is very short (likely error)
        if len(response.get("content", "")) < 10:
            return False
        
        return True

# Use conditional caching
cache_config = CacheConfig(
    conditional_caching=True,
    cache_condition_func=ConditionalCache().should_cache
)
```

## Performance Optimization

### Cache Hit Rate Monitoring

```python
from spoon_ai.llm.cache import CacheMetrics

metrics = CacheMetrics()

# Monitor cache performance
stats = await metrics.get_stats()
print(f"Cache hit rate: {stats['hit_rate']:.2%}")
print(f"Total requests: {stats['total_requests']}")
print(f"Cache hits: {stats['cache_hits']}")
print(f"Cache misses: {stats['cache_misses']}")
print(f"Average response time: {stats['avg_response_time']:.2f}ms")
```

### Cache Size Management

```python
# Configure cache size limits
cache_config = CacheConfig(
    max_entries=5000,
    max_memory_mb=100,
    eviction_policy="lru",  # or "lfu", "fifo"
    cleanup_interval=300    # Cleanup every 5 minutes
)

# Monitor cache size
cache_info = await cache_manager.get_info()
print(f"Cache entries: {cache_info['entry_count']}")
print(f"Memory usage: {cache_info['memory_usage_mb']:.2f} MB")
print(f"Hit rate: {cache_info['hit_rate']:.2%}")
```

### Batch Cache Operations

```python
# Batch cache warming
async def batch_warm_cache(queries: list):
    """Efficiently warm cache with multiple queries"""
    
    # Process in batches to avoid overwhelming the API
    batch_size = 10
    for i in range(0, len(queries), batch_size):
        batch = queries[i:i + batch_size]
        
        # Process batch concurrently
        tasks = [
            llm_manager.chat([{"role": "user", "content": query}])
            for query in batch
        ]
        
        await asyncio.gather(*tasks)
        
        # Small delay between batches
        await asyncio.sleep(1)

# Usage
crypto_queries = [
    "What is Bitcoin?", "How does Ethereum work?", 
    "What is DeFi?", "Explain yield farming",
    # ... more queries
]

await batch_warm_cache(crypto_queries)
```

## Integration with Agents

### Agent-Level Caching

```python
class CachedAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        # Configure caching for this agent
        cache_config = CacheConfig(
            enabled=True,
            semantic_caching=True,
            similarity_threshold=0.9,  # Higher threshold for agent responses
            context_aware=True
        )
        
        llm = ChatBot(cache_config=cache_config)
        super().__init__(llm=llm, **kwargs)
    
    async def run(self, user_input: str) -> str:
        # Agent-specific caching logic
        cache_key = self.generate_cache_key(user_input)
        
        # Check agent-level cache first
        cached_response = await self.get_cached_response(cache_key)
        if cached_response:
            return cached_response
        
        # Run normal agent logic
        response = await super().run(user_input)
        
        # Cache the response
        await self.cache_response(cache_key, response)
        
        return response
```

### Tool Response Caching

```python
from spoon_ai.tools.base import BaseTool

class CachedTool(BaseTool):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.cache = {}
        self.cache_ttl = 300  # 5 minutes
    
    async def execute(self, **kwargs) -> str:
        # Generate cache key from parameters
        cache_key = self.generate_cache_key(kwargs)
        
        # Check cache
        if cache_key in self.cache:
            cached_data, timestamp = self.cache[cache_key]
            if time.time() - timestamp < self.cache_ttl:
                return cached_data
        
        # Execute tool logic
        result = await self._execute_impl(**kwargs)
        
        # Cache result
        self.cache[cache_key] = (result, time.time())
        
        return result
```

## Best Practices

### 1. Cache Key Design

```python
def generate_cache_key(messages: list, model: str, temperature: float) -> str:
    """Generate consistent cache keys"""
    
    # Normalize messages
    normalized_messages = []
    for msg in messages:
        normalized_msg = {
            "role": msg["role"],
            "content": msg["content"].strip().lower()
        }
        normalized_messages.append(normalized_msg)
    
    # Include relevant parameters
    key_data = {
        "messages": normalized_messages,
        "model": model,
        "temperature": round(temperature, 2)  # Round to avoid float precision issues
    }
    
    # Generate hash
    import hashlib
    import json
    key_string = json.dumps(key_data, sort_keys=True)
    return hashlib.md5(key_string.encode()).hexdigest()
```

### 2. Cache Expiration Strategy

```python
class SmartCacheExpiration:
    def get_ttl(self, query_type: str, content: str) -> int:
        """Determine TTL based on content type"""
        
        if "price" in content.lower() or "current" in content.lower():
            return 60  # 1 minute for time-sensitive data
        elif "news" in content.lower():
            return 300  # 5 minutes for news
        elif "definition" in content.lower() or "what is" in content.lower():
            return 3600  # 1 hour for definitions
        else:
            return 1800  # 30 minutes default
```

### 3. Memory Management

```python
# Configure memory-efficient caching
cache_config = CacheConfig(
    max_memory_mb=50,           # Limit memory usage
    eviction_policy="lru",      # Remove least recently used
    compression=True,           # Compress cached data
    cleanup_interval=300        # Regular cleanup
)
```

## Monitoring and Analytics

### Cache Performance Dashboard

```python
async def generate_cache_report():
    """Generate comprehensive cache performance report"""
    
    metrics = await cache_manager.get_detailed_metrics()
    
    report = f"""
# Cache Performance Report

## Overall Statistics
- Total Requests: {metrics['total_requests']:,}
- Cache Hits: {metrics['cache_hits']:,}
- Cache Misses: {metrics['cache_misses']:,}
- Hit Rate: {metrics['hit_rate']:.2%}

## Performance Impact
- Average Response Time (Cached): {metrics['avg_cached_response_time']:.2f}ms
- Average Response Time (Uncached): {metrics['avg_uncached_response_time']:.2f}ms
- Time Saved: {metrics['total_time_saved']:.2f}s
- API Calls Saved: {metrics['api_calls_saved']:,}

## Cache Health
- Memory Usage: {metrics['memory_usage_mb']:.2f} MB
- Entry Count: {metrics['entry_count']:,}
- Evictions: {metrics['evictions']:,}
- Expired Entries: {metrics['expired_entries']:,}

## Top Cached Queries
{format_top_queries(metrics['top_queries'])}
    """
    
    return report
```

## Next Steps

- **[LLM Providers](./llm-providers)** - Configure LLM providers with caching
- **[Building Agents](./building-agents)** - Use caching in agent development
- **[Performance Optimization](./performance)** - Advanced optimization techniques
- **[Examples](./examples/caching)** - See caching in action
