---
id: spoon_ai.llm.manager
slug: /api-reference/spoon_ai/llm/manager
title: spoon_ai.llm.manager
---

# Table of Contents

* [spoon\_ai.llm.manager](#spoon_ai.llm.manager)
  * [ProviderState](#spoon_ai.llm.manager.ProviderState)
    * [can\_retry\_initialization](#spoon_ai.llm.manager.ProviderState.can_retry_initialization)
    * [record\_initialization\_failure](#spoon_ai.llm.manager.ProviderState.record_initialization_failure)
    * [record\_initialization\_success](#spoon_ai.llm.manager.ProviderState.record_initialization_success)
  * [FallbackStrategy](#spoon_ai.llm.manager.FallbackStrategy)
    * [execute\_with\_fallback](#spoon_ai.llm.manager.FallbackStrategy.execute_with_fallback)
  * [LoadBalancer](#spoon_ai.llm.manager.LoadBalancer)
    * [select\_provider](#spoon_ai.llm.manager.LoadBalancer.select_provider)
    * [update\_provider\_health](#spoon_ai.llm.manager.LoadBalancer.update_provider_health)
    * [set\_provider\_weight](#spoon_ai.llm.manager.LoadBalancer.set_provider_weight)
  * [LLMManager](#spoon_ai.llm.manager.LLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.manager.LLMManager.__init__)
    * [cleanup](#spoon_ai.llm.manager.LLMManager.cleanup)
    * [get\_provider\_status](#spoon_ai.llm.manager.LLMManager.get_provider_status)
    * [reset\_provider](#spoon_ai.llm.manager.LLMManager.reset_provider)
    * [chat](#spoon_ai.llm.manager.LLMManager.chat)
    * [chat\_stream](#spoon_ai.llm.manager.LLMManager.chat_stream)
    * [completion](#spoon_ai.llm.manager.LLMManager.completion)
    * [chat\_with\_tools](#spoon_ai.llm.manager.LLMManager.chat_with_tools)
    * [set\_fallback\_chain](#spoon_ai.llm.manager.LLMManager.set_fallback_chain)
    * [enable\_load\_balancing](#spoon_ai.llm.manager.LLMManager.enable_load_balancing)
    * [disable\_load\_balancing](#spoon_ai.llm.manager.LLMManager.disable_load_balancing)
    * [health\_check\_all](#spoon_ai.llm.manager.LLMManager.health_check_all)
    * [cleanup](#spoon_ai.llm.manager.LLMManager.cleanup)
    * [get\_stats](#spoon_ai.llm.manager.LLMManager.get_stats)
  * [get\_llm\_manager](#spoon_ai.llm.manager.get_llm_manager)
  * [set\_llm\_manager](#spoon_ai.llm.manager.set_llm_manager)

<a id="spoon_ai.llm.manager"></a>

# Module `spoon_ai.llm.manager`

LLM Manager - Central orchestrator for managing providers, fallback, and load balancing.

<a id="spoon_ai.llm.manager.ProviderState"></a>

## `ProviderState` Objects

```python
@dataclass
class ProviderState()
```

Track provider initialization and health state.

<a id="spoon_ai.llm.manager.ProviderState.can_retry_initialization"></a>

#### `can_retry_initialization`

```python
def can_retry_initialization() -> bool
```

Check if provider initialization can be retried.

<a id="spoon_ai.llm.manager.ProviderState.record_initialization_failure"></a>

#### `record_initialization_failure`

```python
def record_initialization_failure(error: Exception) -> None
```

Record initialization failure with exponential backoff.

<a id="spoon_ai.llm.manager.ProviderState.record_initialization_success"></a>

#### `record_initialization_success`

```python
def record_initialization_success() -> None
```

Record successful initialization.

<a id="spoon_ai.llm.manager.FallbackStrategy"></a>

## `FallbackStrategy` Objects

```python
class FallbackStrategy()
```

Handles fallback logic between providers.

<a id="spoon_ai.llm.manager.FallbackStrategy.execute_with_fallback"></a>

#### `execute_with_fallback`

```python
async def execute_with_fallback(providers: List[str], operation, *args,
                                **kwargs) -> LLMResponse
```

Execute operation with fallback chain.

**Arguments**:

- `providers` - List of provider names in fallback order
- `operation` - Async operation to execute
  *args, **kwargs: Arguments for the operation
  

**Returns**:

- `LLMResponse` - Response from successful provider
  

**Raises**:

- `ProviderError` - If all providers fail

<a id="spoon_ai.llm.manager.LoadBalancer"></a>

## `LoadBalancer` Objects

```python
class LoadBalancer()
```

Handles load balancing between multiple provider instances.

<a id="spoon_ai.llm.manager.LoadBalancer.select_provider"></a>

#### `select_provider`

```python
def select_provider(providers: List[str],
                    strategy: str = "round_robin") -> str
```

Select a provider based on load balancing strategy.

**Arguments**:

- `providers` - List of available providers
- `strategy` - Load balancing strategy ('round_robin', 'weighted', 'random')
  

**Returns**:

- `str` - Selected provider name

<a id="spoon_ai.llm.manager.LoadBalancer.update_provider_health"></a>

#### `update_provider_health`

```python
def update_provider_health(provider: str, is_healthy: bool) -> None
```

Update provider health status.

<a id="spoon_ai.llm.manager.LoadBalancer.set_provider_weight"></a>

#### `set_provider_weight`

```python
def set_provider_weight(provider: str, weight: float) -> None
```

Set provider weight for weighted load balancing.

<a id="spoon_ai.llm.manager.LLMManager"></a>

## `LLMManager` Objects

```python
class LLMManager()
```

Central orchestrator for LLM providers with fallback and load balancing.

<a id="spoon_ai.llm.manager.LLMManager.__init__"></a>

#### `__init__`

```python
def __init__(config_manager: Optional[ConfigurationManager] = None,
             debug_logger: Optional[DebugLogger] = None,
             metrics_collector: Optional[MetricsCollector] = None,
             response_normalizer: Optional[ResponseNormalizer] = None,
             registry: Optional[LLMProviderRegistry] = None)
```

Initialize LLM Manager with enhanced provider state tracking.

<a id="spoon_ai.llm.manager.LLMManager.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Enhanced cleanup with proper resource management.

<a id="spoon_ai.llm.manager.LLMManager.get_provider_status"></a>

#### `get_provider_status`

```python
def get_provider_status() -> Dict[str, Dict[str, Any]]
```

Get detailed status of all providers.

<a id="spoon_ai.llm.manager.LLMManager.reset_provider"></a>

#### `reset_provider`

```python
async def reset_provider(provider_name: str) -> bool
```

Reset a provider's state and force reinitialization.

**Arguments**:

- `provider_name` - Name of provider to reset
  

**Returns**:

- `bool` - True if reset successful

<a id="spoon_ai.llm.manager.LLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               **kwargs) -> LLMResponse
```

Send chat request with automatic provider selection and fallback.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      provider: Optional[str] = None,
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      **kwargs) -> AsyncGenerator[LLMResponseChunk, None]
```

Send streaming chat request with callback support.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `callbacks` - Optional callback handlers for monitoring
- `**kwargs` - Additional parameters
  

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.manager.LLMManager.completion"></a>

#### `completion`

```python
async def completion(prompt: str,
                     provider: Optional[str] = None,
                     **kwargs) -> LLMResponse
```

Send completion request.

**Arguments**:

- `prompt` - Text prompt
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message],
                          tools: List[Dict],
                          provider: Optional[str] = None,
                          **kwargs) -> LLMResponse
```

Send tool-enabled chat request.

**Arguments**:

- `messages` - List of conversation messages
- `tools` - List of available tools
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.set_fallback_chain"></a>

#### `set_fallback_chain`

```python
def set_fallback_chain(providers: List[str]) -> None
```

Set fallback provider chain.

**Arguments**:

- `providers` - List of provider names in fallback order

<a id="spoon_ai.llm.manager.LLMManager.enable_load_balancing"></a>

#### `enable_load_balancing`

```python
def enable_load_balancing(strategy: str = "round_robin") -> None
```

Enable load balancing with specified strategy.

**Arguments**:

- `strategy` - Load balancing strategy ('round_robin', 'weighted', 'random')

<a id="spoon_ai.llm.manager.LLMManager.disable_load_balancing"></a>

#### `disable_load_balancing`

```python
def disable_load_balancing() -> None
```

Disable load balancing.

<a id="spoon_ai.llm.manager.LLMManager.health_check_all"></a>

#### `health_check_all`

```python
async def health_check_all() -> Dict[str, bool]
```

Check health of all registered providers.

**Returns**:

  Dict[str, bool]: Provider health status

<a id="spoon_ai.llm.manager.LLMManager.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Cleanup all provider resources.

<a id="spoon_ai.llm.manager.LLMManager.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get comprehensive statistics.

**Returns**:

  Dict[str, Any]: Manager and provider statistics

<a id="spoon_ai.llm.manager.get_llm_manager"></a>

#### `get_llm_manager`

```python
def get_llm_manager() -> LLMManager
```

Get global LLM manager instance.

**Returns**:

- `LLMManager` - Global manager instance

<a id="spoon_ai.llm.manager.set_llm_manager"></a>

#### `set_llm_manager`

```python
def set_llm_manager(manager: LLMManager) -> None
```

Set global LLM manager instance.

**Arguments**:

- `manager` - Manager instance to set as global

