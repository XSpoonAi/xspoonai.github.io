# Performance Optimization Guide

Comprehensive guide for optimizing SpoonOS performance across agents, tools, and infrastructure.

## Performance Monitoring

### System Metrics

```bash
# Check system performance
python main.py
> system-info

# Monitor resource usage
top -p $(pgrep -f "python main.py")
htop
```

### Built-in Performance Monitoring

```python
# performance_monitor.py
import psutil
import time
from dataclasses import dataclass
from typing import Dict, List

@dataclass
class PerformanceMetrics:
    timestamp: float
    cpu_percent: float
    memory_rss: int
    memory_percent: float
    disk_io_read: int
    disk_io_write: int
    network_sent: int
    network_recv: int

class PerformanceMonitor:
    def __init__(self):
        self.metrics_history: List[PerformanceMetrics] = []
        self.process = psutil.Process()
        self.initial_io = self.process.io_counters()
        self.initial_net = psutil.net_io_counters()

    def collect_metrics(self) -> PerformanceMetrics:
        """Collect current performance metrics"""
        current_io = self.process.io_counters()
        current_net = psutil.net_io_counters()

        metrics = PerformanceMetrics(
            timestamp=time.time(),
            cpu_percent=self.process.cpu_percent(),
            memory_rss=self.process.memory_info().rss,
            memory_percent=self.process.memory_percent(),
            disk_io_read=current_io.read_bytes - self.initial_io.read_bytes,
            disk_io_write=current_io.write_bytes - self.initial_io.write_bytes,
            network_sent=current_net.bytes_sent - self.initial_net.bytes_sent,
            network_recv=current_net.bytes_recv - self.initial_net.bytes_recv
        )

        self.metrics_history.append(metrics)
        return metrics

    def get_performance_summary(self, window_minutes: int = 5) -> Dict:
        """Get performance summary for the last N minutes"""
        cutoff_time = time.time() - (window_minutes * 60)
        recent_metrics = [m for m in self.metrics_history if m.timestamp > cutoff_time]

        if not recent_metrics:
            return {"error": "No metrics available"}

        return {
            "window_minutes": window_minutes,
            "sample_count": len(recent_metrics),
            "cpu": {
                "avg": sum(m.cpu_percent for m in recent_metrics) / len(recent_metrics),
                "max": max(m.cpu_percent for m in recent_metrics),
                "min": min(m.cpu_percent for m in recent_metrics)
            },
            "memory": {
                "current_mb": recent_metrics[-1].memory_rss / 1024 / 1024,
                "peak_mb": max(m.memory_rss for m in recent_metrics) / 1024 / 1024,
                "avg_percent": sum(m.memory_percent for m in recent_metrics) / len(recent_metrics)
            },
            "io": {
                "total_read_mb": recent_metrics[-1].disk_io_read / 1024 / 1024,
                "total_write_mb": recent_metrics[-1].disk_io_write / 1024 / 1024
            }
        }
```

## Agent Performance Optimization

### Efficient Agent Configuration

```json
{
  "agents": {
    "optimized_agent": {
      "class": "SpoonReactAI",
      "config": {
        "max_steps": 5,
        "temperature": 0.7,
        "max_tokens": 1000,
        "timeout": 30,
        "stream": true,
        "cache_enabled": true
      }
    }
  }
}
```

### Memory-Efficient Agent Implementation

```python
# optimized_agent.py
from spoon_ai.agents import SpoonReactAI
from typing import List, Dict
import gc

class OptimizedAgent(SpoonReactAI):
    """Memory-optimized agent implementation"""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.max_history_length = kwargs.get('max_history_length', 50)
        self.cleanup_interval = kwargs.get('cleanup_interval', 10)
        self.request_count = 0

    async def run(self, message: str, **kwargs):
        """Run with memory management"""
        try:
            result = await super().run(message, **kwargs)

            # Periodic cleanup
            self.request_count += 1
            if self.request_count % self.cleanup_interval == 0:
                self._cleanup_memory()

            return result

        except Exception as e:
            # Force cleanup on error
            self._cleanup_memory()
            raise

    def _cleanup_memory(self):
        """Clean up memory usage"""
        # Limit conversation history
        if hasattr(self, 'conversation_history'):
            if len(self.conversation_history) > self.max_history_length:
                # Keep only recent messages
                self.conversation_history = self.conversation_history[-self.max_history_length:]

        # Force garbage collection
        gc.collect()

        logger.debug("Memory cleanup performed", agent=self.name)
```

### Conversation History Management

```python
# history_manager.py
from collections import deque
from typing import Dict, List, Optional
import json
import hashlib

class ConversationHistoryManager:
    """Efficient conversation history management"""

    def __init__(self, max_length: int = 100, compression_enabled: bool = True):
        self.max_length = max_length
        self.compression_enabled = compression_enabled
        self.messages = deque(maxlen=max_length)
        self.compressed_history = {}

    def add_message(self, message: Dict):
        """Add message with automatic compression"""
        # Add to recent messages
        self.messages.append(message)

        # Compress old messages if enabled
        if self.compression_enabled and len(self.messages) == self.max_length:
            self._compress_old_messages()

    def get_recent_messages(self, count: int = 10) -> List[Dict]:
        """Get recent messages efficiently"""
        return list(self.messages)[-count:]

    def get_context_summary(self) -> str:
        """Get compressed context summary"""
        if not self.compressed_history:
            return ""

        # Generate summary from compressed history
        summaries = []
        for period, summary in self.compressed_history.items():
            summaries.append(f"Period {period}: {summary}")

        return "\
".join(summaries)

    def _compress_old_messages(self):
        """Compress older messages into summaries"""
        # Take first half of messages for compression
        to_compress = list(self.messages)[:self.max_length // 2]

        # Generate summary (simplified)
        summary = self._generate_summary(to_compress)

        # Store compressed summary
        period_key = len(self.compressed_history)
        self.compressed_history[period_key] = summary

        # Remove compressed messages from deque
        for _ in range(len(to_compress)):
            self.messages.popleft()

    def _generate_summary(self, messages: List[Dict]) -> str:
        """Generate summary of message batch"""
        # Simple summarization (could be enhanced with LLM)
        user_messages = [m['content'] for m in messages if m.get('role') == 'user']
        assistant_messages = [m['content'] for m in messages if m.get('role') == 'assistant']

        return f"User asked {len(user_messages)} questions, assistant provided {len(assistant_messages)} responses"
```

## Tool Performance Optimization

### Async Tool Implementation

```python
# async_tool.py
import asyncio
import aiohttp
from spoon_ai.tools.base import BaseTool
from typing import List, Dict, Any

class AsyncHTTPTool(BaseTool):
    """High-performance async HTTP tool"""

    name = "async_http_tool"
    description = "Optimized HTTP requests with connection pooling"

    def __init__(self):
        self.session = None
        self.connector = None

    async def __aenter__(self):
        # Create optimized connector
        self.connector = aiohttp.TCPConnector(
            limit=100,  # Total connection pool size
            limit_per_host=30,  # Per-host connection limit
            ttl_dns_cache=300,  # DNS cache TTL
            use_dns_cache=True,
            keepalive_timeout=30,
            enable_cleanup_closed=True
        )

        # Create session with optimized settings
        timeout = aiohttp.ClientTimeout(total=30, connect=10)
        self.session = aiohttp.ClientSession(
            connector=self.connector,
            timeout=timeout,
            headers={'User-Agent': 'SpoonOS/1.0'}
        )

        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
        if self.connector:
            await self.connector.close()

    async def execute(self, urls: List[str], method: str = "GET", **kwargs) -> List[Dict]:
        """Execute multiple HTTP requests concurrently"""
        if not self.session:
            async with self:
                return await self._make_requests(urls, method, **kwargs)
        else:
            return await self._make_requests(urls, method, **kwargs)

    async def _make_requests(self, urls: List[str], method: str, **kwargs) -> List[Dict]:
        """Make concurrent HTTP requests"""
        semaphore = asyncio.Semaphore(10)  # Limit concurrent requests

        async def make_request(url: str) -> Dict:
            async with semaphore:
                try:
                    async with self.session.request(method, url, **kwargs) as response:
                        return {
                            "url": url,
                            "status": response.status,
                            "data": await response.text(),
                            "headers": dict(response.headers)
                        }
                except Exception as e:
                    return {
                        "url": url,
                        "error": str(e),
                        "status": 0
                    }

        # Execute all requests concurrently
        tasks = [make_request(url) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        return [r for r in results if not isinstance(r, Exception)]
```

### Caching Implementation

```python
# caching_tool.py
import asyncio
import hashlib
import json
import time
from typing import Any, Dict, Optional
from spoon_ai.tools.base import BaseTool

class CachedTool(BaseTool):
    """Tool with intelligent caching"""

    def __init__(self, cache_ttl: int = 3600, max_cache_size: int = 1000):
        self.cache_ttl = cache_ttl
        self.max_cache_size = max_cache_size
        self.cache: Dict[str, Dict] = {}
        self.cache_stats = {
            "hits": 0,
            "misses": 0,
            "evictions": 0
        }

    async def execute(self, **kwargs) -> Any:
        """Execute with caching"""
        # Generate cache key
        cache_key = self._generate_cache_key(**kwargs)

        # Check cache
        cached_result = self._get_from_cache(cache_key)
        if cached_result is not None:
            self.cache_stats["hits"] += 1
            logger.debug("Cache hit", tool=self.name, cache_key=cache_key[:8])
            return cached_result

        # Cache miss - execute tool
        self.cache_stats["misses"] += 1
        logger.debug("Cache miss", tool=self.name, cache_key=cache_key[:8])

        result = await self._execute_impl(**kwargs)

        # Store in cache
        self._set_cache(cache_key, result)

        return result

    def _generate_cache_key(self, **kwargs) -> str:
        """Generate deterministic cache key"""
        # Sort kwargs for consistent key generation
        key_data = json.dumps(kwargs, sort_keys=True, default=str)
        return hashlib.sha256(key_data.encode()).hexdigest()

    def _get_from_cache(self, key: str) -> Optional[Any]:
        """Get value from cache if not expired"""
        if key not in self.cache:
            return None

        entry = self.cache[key]
        if time.time() - entry["timestamp"] > self.cache_ttl:
            # Expired - remove from cache
            del self.cache[key]
            return None

        return entry["value"]

    def _set_cache(self, key: str, value: Any):
        """Set value in cache with eviction"""
        # Evict oldest entries if cache is full
        if len(self.cache) >= self.max_cache_size:
            self._evict_oldest()

        self.cache[key] = {
            "value": value,
            "timestamp": time.time()
        }

    def _evict_oldest(self):
        """Evict oldest cache entries"""
        # Sort by timestamp and remove oldest 10%
        sorted_items = sorted(
            self.cache.items(),
            key=lambda x: x[1]["timestamp"]
        )

        evict_count = max(1, len(sorted_items) // 10)
        for i in range(evict_count):
            key = sorted_items[i][0]
            del self.cache[key]
            self.cache_stats["evictions"] += 1

    def get_cache_stats(self) -> Dict:
        """Get cache performance statistics"""
        total_requests = self.cache_stats["hits"] + self.cache_stats["misses"]
        hit_rate = self.cache_stats["hits"] / total_requests if total_requests > 0 else 0

        return {
            "cache_size": len(self.cache),
            "max_cache_size": self.max_cache_size,
            "hit_rate": hit_rate,
            "total_requests": total_requests,
            **self.cache_stats
        }

    async def _execute_impl(self, **kwargs) -> Any:
        """Override this method in subclasses"""
        raise NotImplementedError
```

## LLM Performance Optimization

### Request Batching

```python
# batch_llm_provider.py
import asyncio
from typing import List, Dict, Any
from spoon_ai.llm.base import BaseLLMProvider

class BatchedLLMProvider(BaseLLMProvider):
    """LLM provider with request batching"""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.batch_size = kwargs.get('batch_size', 5)
        self.batch_timeout = kwargs.get('batch_timeout', 1.0)
        self.pending_requests = []
        self.batch_lock = asyncio.Lock()

    async def generate(self, messages: List[Dict], **kwargs) -> Dict:
        """Generate with batching optimization"""
        # For single requests, use batching
        if len(messages) == 1:
            return await self._batched_generate(messages[0], **kwargs)
        else:
            # For multi-message requests, process directly
            return await super().generate(messages, **kwargs)

    async def _batched_generate(self, message: Dict, **kwargs) -> Dict:
        """Generate with request batching"""
        # Create request future
        request_future = asyncio.Future()
        request_data = {
            "message": message,
            "kwargs": kwargs,
            "future": request_future
        }

        async with self.batch_lock:
            self.pending_requests.append(request_data)

            # If batch is full or this is the first request, process batch
            if len(self.pending_requests) >= self.batch_size:
                await self._process_batch()
            elif len(self.pending_requests) == 1:
                # Start batch timer for first request
                asyncio.create_task(self._batch_timer())

        # Wait for result
        return await request_future

    async def _batch_timer(self):
        """Timer to process batch after timeout"""
        await asyncio.sleep(self.batch_timeout)

        async with self.batch_lock:
            if self.pending_requests:
                await self._process_batch()

    async def _process_batch(self):
        """Process pending requests as a batch"""
        if not self.pending_requests:
            return

        batch = self.pending_requests.copy()
        self.pending_requests.clear()

        try:
            # Process all requests concurrently
            tasks = [
                self._process_single_request(req["message"], req["kwargs"])
                for req in batch
            ]

            results = await asyncio.gather(*tasks, return_exceptions=True)

            # Set results for each future
            for req, result in zip(batch, results):
                if isinstance(result, Exception):
                    req["future"].set_exception(result)
                else:
                    req["future"].set_result(result)

        except Exception as e:
            # Set exception for all futures
            for req in batch:
                if not req["future"].done():
                    req["future"].set_exception(e)

    async def _process_single_request(self, message: Dict, kwargs: Dict) -> Dict:
        """Process a single request"""
        return await super().generate([message], **kwargs)
```

### Response Streaming

```python
# streaming_provider.py
import asyncio
from typing import AsyncGenerator, Dict, Any
from spoon_ai.llm.base import BaseLLMProvider

class StreamingLLMProvider(BaseLLMProvider):
    """LLM provider with streaming support"""

    async def generate_stream(self, messages: List[Dict], **kwargs) -> AsyncGenerator[str, None]:
        """Generate streaming response"""
        # Implementation depends on provider API
        async for chunk in self._stream_implementation(messages, **kwargs):
            yield chunk

    async def _stream_implementation(self, messages: List[Dict], **kwargs) -> AsyncGenerator[str, None]:
        """Provider-specific streaming implementation"""
        # Example implementation
        response = await self._make_streaming_request(messages, **kwargs)

        async for line in response:
            if line.startswith('data: '):
                chunk_data = line[6:]  # Remove 'data: ' prefix
                if chunk_data.strip() == '[DONE]':
                    break

                try:
                    chunk_json = json.loads(chunk_data)
                    if 'choices' in chunk_json and chunk_json['choices']:
                        delta = chunk_json['choices'][0].get('delta', {})
                        if 'content' in delta:
                            yield delta['content']
                except json.JSONDecodeError:
                    continue
```

## Database and Storage Optimization

### Connection Pooling

```python
# db_pool.py
import asyncpg
import asyncio
from typing import Optional, Dict, Any

class DatabasePool:
    """Optimized database connection pool"""

    def __init__(self, connection_string: str, **pool_kwargs):
        self.connection_string = connection_string
        self.pool_kwargs = {
            'min_size': 5,
            'max_size': 20,
            'command_timeout': 60,
            'server_settings': {
                'jit': 'off',  # Disable JIT for faster startup
                'application_name': 'spoon_ai'
            },
            **pool_kwargs
        }
        self.pool: Optional[asyncpg.Pool] = None

    async def initialize(self):
        """Initialize connection pool"""
        if self.pool is None:
            self.pool = await asyncpg.create_pool(
                self.connection_string,
                **self.pool_kwargs
            )

    async def execute_query(self, query: str, *args) -> List[Dict[str, Any]]:
        """Execute query with connection pooling"""
        if self.pool is None:
            await self.initialize()

        async with self.pool.acquire() as connection:
            rows = await connection.fetch(query, *args)
            return [dict(row) for row in rows]

    async def execute_transaction(self, queries: List[tuple]) -> List[Any]:
        """Execute multiple queries in a transaction"""
        if self.pool is None:
            await self.initialize()

        async with self.pool.acquire() as connection:
            async with connection.transaction():
                results = []
                for query, args in queries:
                    result = await connection.fetch(query, *args)
                    results.append([dict(row) for row in result])
                return results

    async def close(self):
        """Close connection pool"""
        if self.pool:
            await self.pool.close()
            self.pool = None
```

### Efficient Data Serialization

```python
# serialization.py
import orjson  # Faster JSON library
import pickle
import gzip
from typing import Any, Union

class OptimizedSerializer:
    """High-performance data serialization"""

    @staticmethod
    def serialize_json(data: Any) -> bytes:
        """Fast JSON serialization"""
        return orjson.dumps(data)

    @staticmethod
    def deserialize_json(data: bytes) -> Any:
        """Fast JSON deserialization"""
        return orjson.loads(data)

    @staticmethod
    def serialize_compressed(data: Any) -> bytes:
        """Compressed pickle serialization"""
        pickled = pickle.dumps(data, protocol=pickle.HIGHEST_PROTOCOL)
        return gzip.compress(pickled)

    @staticmethod
    def deserialize_compressed(data: bytes) -> Any:
        """Compressed pickle deserialization"""
        decompressed = gzip.decompress(data)
        return pickle.loads(decompressed)

    @staticmethod
    def choose_serialization(data: Any) -> tuple[bytes, str]:
        """Choose optimal serialization method"""
        # Try JSON first (faster, more compatible)
        try:
            json_data = OptimizedSerializer.serialize_json(data)
            compressed_data = OptimizedSerializer.serialize_compressed(data)

            # Use JSON if it's not much larger
            if len(json_data) <= len(compressed_data) * 1.2:
                return json_data, 'json'
            else:
                return compressed_data, 'compressed'

        except (TypeError, ValueError):
            # Fall back to compressed pickle
            return OptimizedSerializer.serialize_compressed(data), 'compressed'
```

## Infrastructure Optimization

### Process Management

```python
# process_manager.py
import asyncio
import multiprocessing as mp
from concurrent.futures import ProcessPoolExecutor
from typing import Any, Callable, List

class OptimizedProcessManager:
    """Optimized process management for CPU-intensive tasks"""

    def __init__(self, max_workers: int = None):
        self.max_workers = max_workers or mp.cpu_count()
        self.executor = None

    async def __aenter__(self):
        self.executor = ProcessPoolExecutor(max_workers=self.max_workers)
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.executor:
            self.executor.shutdown(wait=True)

    async def run_cpu_intensive(self, func: Callable, *args, **kwargs) -> Any:
        """Run CPU-intensive function in separate process"""
        if self.executor is None:
            async with self:
                return await self._execute(func, *args, **kwargs)
        else:
            return await self._execute(func, *args, **kwargs)

    async def _execute(self, func: Callable, *args, **kwargs) -> Any:
        """Execute function in process pool"""
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(
            self.executor,
            lambda: func(*args, **kwargs)
        )

    async def map_parallel(self, func: Callable, items: List[Any]) -> List[Any]:
        """Map function over items in parallel"""
        if self.executor is None:
            async with self:
                return await self._map_execute(func, items)
        else:
            return await self._map_execute(func, items)

    async def _map_execute(self, func: Callable, items: List[Any]) -> List[Any]:
        """Execute map in process pool"""
        loop = asyncio.get_event_loop()
        tasks = [
            loop.run_in_executor(self.executor, func, item)
            for item in items
        ]
        return await asyncio.gather(*tasks)
```

### Memory Management

```python
# memory_manager.py
import gc
import psutil
import os
from typing import Dict, Any

class MemoryManager:
    """Advanced memory management utilities"""

    def __init__(self, warning_threshold: float = 0.8, critical_threshold: float = 0.9):
        self.warning_threshold = warning_threshold
        self.critical_threshold = critical_threshold
        self.process = psutil.Process(os.getpid())

    def get_memory_info(self) -> Dict[str, Any]:
        """Get detailed memory information"""
        memory_info = self.process.memory_info()
        memory_percent = self.process.memory_percent()

        return {
            "rss_mb": memory_info.rss / 1024 / 1024,
            "vms_mb": memory_info.vms / 1024 / 1024,
            "percent": memory_percent,
            "available_mb": psutil.virtual_memory().available / 1024 / 1024,
            "warning_level": self._get_warning_level(memory_percent)
        }

    def _get_warning_level(self, memory_percent: float) -> str:
        """Get memory warning level"""
        if memory_percent >= self.critical_threshold * 100:
            return "critical"
        elif memory_percent >= self.warning_threshold * 100:
            return "warning"
        else:
            return "normal"

    def cleanup_memory(self, force: bool = False) -> Dict[str, Any]:
        """Perform memory cleanup"""
        before_info = self.get_memory_info()

        # Force garbage collection
        collected = gc.collect()

        # Additional cleanup for critical memory usage
        if force or before_info["warning_level"] == "critical":
            # Clear caches
            self._clear_internal_caches()

            # Force another GC cycle
            collected += gc.collect()

        after_info = self.get_memory_info()

        return {
            "before_mb": before_info["rss_mb"],
            "after_mb": after_info["rss_mb"],
            "freed_mb": before_info["rss_mb"] - after_info["rss_mb"],
            "objects_collected": collected,
            "warning_level": after_info["warning_level"]
        }

    def _clear_internal_caches(self):
        """Clear internal caches"""
        # Clear function caches
        import functools
        for obj in gc.get_objects():
            if isinstance(obj, functools._lru_cache_wrapper):
                obj.cache_clear()

        # Clear regex cache
        import re
        re.purge()

    def monitor_memory(self) -> bool:
        """Monitor memory and return True if action needed"""
        info = self.get_memory_info()

        if info["warning_level"] == "critical":
            logger.warning(
                "Critical memory usage detected",
                memory_mb=info["rss_mb"],
                percent=info["percent"]
            )
            return True
        elif info["warning_level"] == "warning":
            logger.info(
                "High memory usage detected",
                memory_mb=info["rss_mb"],
                percent=info["percent"]
            )

        return False
```

## Configuration Optimization

### Production Configuration

```json
{
  "performance": {
    "agents": {
      "max_concurrent": 5,
      "memory_limit_mb": 512,
      "cleanup_interval": 10,
      "max_history_length": 50
    },
    "llm": {
      "connection_pool_size": 10,
      "request_timeout": 30,
      "retry_attempts": 3,
      "batch_size": 5,
      "cache_enabled": true,
      "cache_ttl": 3600
    },
    "tools": {
      "concurrent_limit": 10,
      "cache_enabled": true,
      "cache_size": 1000,
      "timeout": 30
    },
    "database": {
      "pool_min_size": 5,
      "pool_max_size": 20,
      "command_timeout": 60,
      "connection_timeout": 10
    }
  }
}
```

### Environment Variables

```bash
# Performance tuning
export PYTHONOPTIMIZE=1
export PYTHONDONTWRITEBYTECODE=1
export PYTHONUNBUFFERED=1

# Memory management
export MALLOC_TRIM_THRESHOLD_=100000
export MALLOC_MMAP_THRESHOLD_=131072

# Async settings
export PYTHONASYNCIODEBUG=0
export UV_THREADPOOL_SIZE=16

# Logging optimization
export LOG_LEVEL=INFO
export LOG_FORMAT=json
```

## Monitoring and Alerting

### Performance Alerts

```python
# alerts.py
import asyncio
from typing import Dict, Callable, Any

class PerformanceAlerting:
    """Performance monitoring and alerting"""

    def __init__(self):
        self.thresholds = {
            "memory_percent": 80,
            "cpu_percent": 80,
            "response_time": 5.0,
            "error_rate": 0.1
        }
        self.alert_handlers = []

    def add_alert_handler(self, handler: Callable[[str, Dict[str, Any]], None]):
        """Add alert handler function"""
        self.alert_handlers.append(handler)

    async def check_performance(self, metrics: Dict[str, Any]):
        """Check performance metrics against thresholds"""
        alerts = []

        # Check memory usage
        if metrics.get("memory_percent", 0) > self.thresholds["memory_percent"]:
            alerts.append({
                "type": "memory_high",
                "value": metrics["memory_percent"],
                "threshold": self.thresholds["memory_percent"],
                "message": f"Memory usage {metrics['memory_percent']:.1f}% exceeds threshold"
            })

        # Check CPU usage
        if metrics.get("cpu_percent", 0) > self.thresholds["cpu_percent"]:
            alerts.append({
                "type": "cpu_high",
                "value": metrics["cpu_percent"],
                "threshold": self.thresholds["cpu_percent"],
                "message": f"CPU usage {metrics['cpu_percent']:.1f}% exceeds threshold"
            })

        # Check response time
        if metrics.get("avg_response_time", 0) > self.thresholds["response_time"]:
            alerts.append({
                "type": "response_time_high",
                "value": metrics["avg_response_time"],
                "threshold": self.thresholds["response_time"],
                "message": f"Response time {metrics['avg_response_time']:.2f}s exceeds threshold"
            })

        # Send alerts
        for alert in alerts:
            await self._send_alert(alert)

    async def _send_alert(self, alert: Dict[str, Any]):
        """Send alert to all handlers"""
        for handler in self.alert_handlers:
            try:
                await handler(alert["type"], alert)
            except Exception as e:
                logger.error(f"Alert handler failed: {e}")
```

## Best Practices

### Code Optimization
- Use async/await for I/O operations
- Implement connection pooling
- Cache expensive computations
- Batch similar operations
- Use efficient data structures

### Memory Management
- Limit conversation history
- Implement periodic cleanup
- Monitor memory usage
- Use generators for large datasets
- Clear caches regularly

### Network Optimization
- Use connection pooling
- Implement request batching
- Enable compression
- Set appropriate timeouts
- Handle rate limiting

### Database Optimization
- Use connection pooling
- Implement query caching
- Optimize query patterns
- Use transactions efficiently
- Monitor query performance

## See Also

- [Debugging Guide](./debugging.md)
- [Common Issues](./common-issues.md)
- [System Requirements](../getting-started/installation.md)"}