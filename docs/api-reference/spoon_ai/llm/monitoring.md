---
id: spoon_ai.llm.monitoring
slug: /api-reference/spoon_ai/llm/monitoring.md
title: spoon_ai.llm.monitoring
---

# Table of Contents

* [spoon\_ai.llm.monitoring](#spoon_ai.llm.monitoring)
  * [RequestMetrics](#spoon_ai.llm.monitoring.RequestMetrics)
  * [ProviderStats](#spoon_ai.llm.monitoring.ProviderStats)
    * [get](#spoon_ai.llm.monitoring.ProviderStats.get)
    * [success\_rate](#spoon_ai.llm.monitoring.ProviderStats.success_rate)
    * [avg\_response\_time](#spoon_ai.llm.monitoring.ProviderStats.avg_response_time)
  * [DebugLogger](#spoon_ai.llm.monitoring.DebugLogger)
    * [\_\_init\_\_](#spoon_ai.llm.monitoring.DebugLogger.__init__)
    * [log\_request](#spoon_ai.llm.monitoring.DebugLogger.log_request)
    * [log\_response](#spoon_ai.llm.monitoring.DebugLogger.log_response)
    * [log\_error](#spoon_ai.llm.monitoring.DebugLogger.log_error)
    * [log\_fallback](#spoon_ai.llm.monitoring.DebugLogger.log_fallback)
    * [get\_request\_history](#spoon_ai.llm.monitoring.DebugLogger.get_request_history)
    * [get\_active\_requests](#spoon_ai.llm.monitoring.DebugLogger.get_active_requests)
    * [clear\_history](#spoon_ai.llm.monitoring.DebugLogger.clear_history)
  * [MetricsCollector](#spoon_ai.llm.monitoring.MetricsCollector)
    * [\_\_init\_\_](#spoon_ai.llm.monitoring.MetricsCollector.__init__)
    * [record\_request](#spoon_ai.llm.monitoring.MetricsCollector.record_request)
    * [get\_provider\_stats](#spoon_ai.llm.monitoring.MetricsCollector.get_provider_stats)
    * [get\_all\_stats](#spoon_ai.llm.monitoring.MetricsCollector.get_all_stats)
    * [get\_rolling\_metrics](#spoon_ai.llm.monitoring.MetricsCollector.get_rolling_metrics)
    * [get\_summary](#spoon_ai.llm.monitoring.MetricsCollector.get_summary)
    * [reset\_stats](#spoon_ai.llm.monitoring.MetricsCollector.reset_stats)
  * [get\_debug\_logger](#spoon_ai.llm.monitoring.get_debug_logger)
  * [get\_metrics\_collector](#spoon_ai.llm.monitoring.get_metrics_collector)

<a id="spoon_ai.llm.monitoring"></a>

# Module `spoon_ai.llm.monitoring`

Comprehensive monitoring, debugging, and metrics collection for LLM operations.

<a id="spoon_ai.llm.monitoring.RequestMetrics"></a>

## `RequestMetrics` Objects

```python
@dataclass
class RequestMetrics()
```

Metrics for a single LLM request.

<a id="spoon_ai.llm.monitoring.ProviderStats"></a>

## `ProviderStats` Objects

```python
@dataclass
class ProviderStats()
```

Aggregated statistics for a provider.

<a id="spoon_ai.llm.monitoring.ProviderStats.get"></a>

#### `get`

```python
def get(key: str, default=None)
```

Get attribute value with default fallback for dictionary-like access.

**Arguments**:

- `key` - Attribute name
- `default` - Default value if attribute doesn't exist
  

**Returns**:

  Attribute value or default

<a id="spoon_ai.llm.monitoring.ProviderStats.success_rate"></a>

#### `success_rate`

```python
@property
def success_rate() -> float
```

Calculate success rate as a percentage.

<a id="spoon_ai.llm.monitoring.ProviderStats.avg_response_time"></a>

#### `avg_response_time`

```python
@property
def avg_response_time() -> float
```

Get average response time.

<a id="spoon_ai.llm.monitoring.DebugLogger"></a>

## `DebugLogger` Objects

```python
class DebugLogger()
```

Comprehensive logging and debugging system for LLM operations.

<a id="spoon_ai.llm.monitoring.DebugLogger.__init__"></a>

#### `__init__`

```python
def __init__(max_history: int = 1000, enable_detailed_logging: bool = True)
```

Initialize debug logger.

**Arguments**:

- `max_history` - Maximum number of requests to keep in history
- `enable_detailed_logging` - Whether to enable detailed request/response logging

<a id="spoon_ai.llm.monitoring.DebugLogger.log_request"></a>

#### `log_request`

```python
def log_request(provider: str, method: str, params: Dict[str, Any]) -> str
```

Log request with unique ID.

**Arguments**:

- `provider` - Provider name
- `method` - Method being called (chat, completion, etc.)
- `params` - Request parameters
  

**Returns**:

- `str` - Unique request ID

<a id="spoon_ai.llm.monitoring.DebugLogger.log_response"></a>

#### `log_response`

```python
def log_response(request_id: str, response: LLMResponse,
                 duration: float) -> None
```

Log response with timing information.

**Arguments**:

- `request_id` - Request ID from log_request
- `response` - LLM response object
- `duration` - Request duration in seconds

<a id="spoon_ai.llm.monitoring.DebugLogger.log_error"></a>

#### `log_error`

```python
def log_error(request_id: str, error: Exception, context: Dict[str,
                                                               Any]) -> None
```

Log error with context.

**Arguments**:

- `request_id` - Request ID from log_request
- `error` - Exception that occurred
- `context` - Additional error context

<a id="spoon_ai.llm.monitoring.DebugLogger.log_fallback"></a>

#### `log_fallback`

```python
def log_fallback(from_provider: str, to_provider: str, reason: str) -> None
```

Log provider fallback event.

**Arguments**:

- `from_provider` - Provider that failed
- `to_provider` - Provider being used as fallback
- `reason` - Reason for fallback

<a id="spoon_ai.llm.monitoring.DebugLogger.get_request_history"></a>

#### `get_request_history`

```python
def get_request_history(provider: Optional[str] = None,
                        limit: Optional[int] = None) -> List[RequestMetrics]
```

Get request history.

**Arguments**:

- `provider` - Filter by provider (optional)
- `limit` - Maximum number of requests to return (optional)
  

**Returns**:

- `List[RequestMetrics]` - List of request metrics

<a id="spoon_ai.llm.monitoring.DebugLogger.get_active_requests"></a>

#### `get_active_requests`

```python
def get_active_requests() -> List[RequestMetrics]
```

Get currently active requests.

**Returns**:

- `List[RequestMetrics]` - List of active request metrics

<a id="spoon_ai.llm.monitoring.DebugLogger.clear_history"></a>

#### `clear_history`

```python
def clear_history() -> None
```

Clear request history.

<a id="spoon_ai.llm.monitoring.MetricsCollector"></a>

## `MetricsCollector` Objects

```python
class MetricsCollector()
```

Collects and aggregates performance metrics for LLM providers.

<a id="spoon_ai.llm.monitoring.MetricsCollector.__init__"></a>

#### `__init__`

```python
def __init__(window_size: int = 3600)
```

Initialize metrics collector.

**Arguments**:

- `window_size` - Time window in seconds for rolling metrics

<a id="spoon_ai.llm.monitoring.MetricsCollector.record_request"></a>

#### `record_request`

```python
def record_request(provider: str,
                   method: str,
                   duration: float,
                   success: bool,
                   tokens: int = 0,
                   model: str = '',
                   error: Optional[str] = None) -> None
```

Record request metrics.

**Arguments**:

- `provider` - Provider name
- `method` - Method called
- `duration` - Request duration in seconds
- `success` - Whether request was successful
- `tokens` - Number of tokens used
- `model` - Model name
- `error` - Error message if failed

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_provider_stats"></a>

#### `get_provider_stats`

```python
def get_provider_stats(provider: str) -> Optional[ProviderStats]
```

Get statistics for a specific provider.

**Arguments**:

- `provider` - Provider name
  

**Returns**:

- `Optional[ProviderStats]` - Provider statistics or None if not found

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_all_stats"></a>

#### `get_all_stats`

```python
def get_all_stats() -> Dict[str, ProviderStats]
```

Get statistics for all providers.

**Returns**:

  Dict[str, ProviderStats]: Dictionary of provider statistics

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_rolling_metrics"></a>

#### `get_rolling_metrics`

```python
def get_rolling_metrics(provider: Optional[str] = None,
                        method: Optional[str] = None) -> List[Dict[str, Any]]
```

Get rolling metrics with optional filtering.

**Arguments**:

- `provider` - Filter by provider (optional)
- `method` - Filter by method (optional)
  

**Returns**:

  List[Dict[str, Any]]: List of metrics

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_summary"></a>

#### `get_summary`

```python
def get_summary() -> Dict[str, Any]
```

Get overall summary statistics.

**Returns**:

  Dict[str, Any]: Summary statistics

<a id="spoon_ai.llm.monitoring.MetricsCollector.reset_stats"></a>

#### `reset_stats`

```python
def reset_stats(provider: Optional[str] = None) -> None
```

Reset statistics.

**Arguments**:

- `provider` - Reset specific provider only (optional)

<a id="spoon_ai.llm.monitoring.get_debug_logger"></a>

#### `get_debug_logger`

```python
def get_debug_logger() -> DebugLogger
```

Get global debug logger instance.

**Returns**:

- `DebugLogger` - Global debug logger

<a id="spoon_ai.llm.monitoring.get_metrics_collector"></a>

#### `get_metrics_collector`

```python
def get_metrics_collector() -> MetricsCollector
```

Get global metrics collector instance.

**Returns**:

- `MetricsCollector` - Global metrics collector

