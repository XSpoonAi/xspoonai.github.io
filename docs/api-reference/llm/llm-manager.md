# LLMManager API Reference

The `LLMManager` class is the central orchestrator for LLM providers, providing unified access with automatic fallback, load balancing, and comprehensive error handling.

## Class Definition

```python
from spoon_ai.llm import LLMManager, LLMResponse
from spoon_ai.schema import Message
from typing import Optional, List, Dict, Any

class LLMManager:
    def __init__(
        self,
        config_manager: Optional[ConfigurationManager] = None,
        debug_logger: Optional[DebugLogger] = None,
        metrics_collector: Optional[MetricsCollector] = None,
        response_normalizer: Optional[ResponseNormalizer] = None,
        registry: Optional[LLMProviderRegistry] = None
    )
```

## Constructor Parameters

### Required Parameters

None - all parameters are optional with sensible defaults

### Optional Parameters

- **config_manager** (`Optional[ConfigurationManager]`): Configuration manager instance
- **debug_logger** (`Optional[DebugLogger]`): Debug logging instance
- **metrics_collector** (`Optional[MetricsCollector]`): Metrics collection instance
- **response_normalizer** (`Optional[ResponseNormalizer]`): Response normalization instance
- **registry** (`Optional[LLMProviderRegistry]`): Provider registry instance

## Core Methods

### Chat and Generation

#### `async chat(messages: List[Message], provider: Optional[str] = None, **kwargs) -> LLMResponse`

Send chat request with automatic provider selection and fallback.

**Parameters:**
- `messages` (`List[Message]`): List of conversation messages
- `provider` (`Optional[str]`): Specific provider to use (optional)
- `**kwargs`: Additional provider-specific parameters

**Returns:**
- `LLMResponse`: Standardized response with metadata

**Example:**
```python
from spoon_ai.schema import Message

messages = [
    Message(role="user", content="Hello, how are you?")
]

response = await llm_manager.chat(messages)
print(response.content)  # "I'm doing well, thank you!"
```

#### `async chat_stream(messages: List[Message], provider: Optional[str] = None, **kwargs) -> AsyncGenerator[str, None]`

Send streaming chat request for real-time responses.

**Parameters:**
- `messages` (`List[Message]`): List of conversation messages
- `provider` (`Optional[str]`): Specific provider to use (optional)
- `**kwargs`: Additional provider-specific parameters

**Yields:**
- `str`: Streaming response chunks

**Example:**
```python
async for chunk in llm_manager.chat_stream(messages):
    print(chunk, end="", flush=True)  # Real-time output
```

#### `async chat_with_tools(messages: List[Message], tools: List[Dict], provider: Optional[str] = None, **kwargs) -> LLMResponse`

Send chat request with tool/function calling support.

**Parameters:**
- `messages` (`List[Message]`): List of conversation messages
- `tools` (`List[Dict]`): Available tools/functions for the model
- `provider` (`Optional[str]`): Specific provider to use (optional)
- `**kwargs`: Additional provider-specific parameters

**Returns:**
- `LLMResponse`: Response with potential tool calls

**Example:**
```python
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string"}
            }
        }
    }
]

response = await llm_manager.chat_with_tools(messages, tools)
if response.tool_calls:
    # Handle tool calls
    for tool_call in response.tool_calls:
        print(f"Tool: {tool_call.name}, Args: {tool_call.arguments}")
```

#### `async completion(prompt: str, provider: Optional[str] = None, **kwargs) -> LLMResponse`

Send text completion request (legacy support).

**Parameters:**
- `prompt` (`str`): Text prompt for completion
- `provider` (`Optional[str]`): Specific provider to use (optional)
- `**kwargs`: Additional provider-specific parameters

**Returns:**
- `LLMResponse`: Completion response

**Example:**
```python
response = await llm_manager.completion("Once upon a time")
print(response.content)  # "Once upon a time, in a land far away..."
```

### Provider Management

#### `set_primary_provider(provider_name: str) -> None`

Set the primary provider for requests.

**Parameters:**
- `provider_name` (`str`): Name of the provider to use as primary

**Example:**
```python
llm_manager.set_primary_provider("openai")
```

#### `add_fallback_provider(provider_name: str, priority: int = 0) -> None`

Add a fallback provider with priority.

**Parameters:**
- `provider_name` (`str`): Name of the fallback provider
- `priority` (`int`): Priority level (higher = more important)

**Example:**
```python
llm_manager.add_fallback_provider("anthropic", priority=10)
llm_manager.add_fallback_provider("deepseek", priority=5)
```

#### `remove_provider(provider_name: str) -> None`

Remove a provider from the manager.

**Parameters:**
- `provider_name` (`str`): Name of the provider to remove

**Example:**
```python
llm_manager.remove_provider("openrouter")
```

### Configuration

#### `configure_provider(provider_name: str, config: Dict[str, Any]) -> None`

Configure a specific provider.

**Parameters:**
- `provider_name` (`str`): Name of the provider to configure
- `config` (`Dict[str, Any]`): Provider-specific configuration

**Example:**
```python
llm_manager.configure_provider("openai", {
    "model": "gpt-4.1",
    "temperature": 0.7,
    "max_tokens": 4096
})
```

#### `get_provider_config(provider_name: str) -> Optional[Dict[str, Any]]`

Get configuration for a specific provider.

**Parameters:**
- `provider_name` (`str`): Name of the provider

**Returns:**
- `Optional[Dict[str, Any]]`: Provider configuration or None if not found

**Example:**
```python
config = llm_manager.get_provider_config("openai")
print(f"Model: {config.get('model')}")
```

### Health and Monitoring

#### `async health_check(provider_name: Optional[str] = None) -> Dict[str, Any]`

Check health status of providers.

**Parameters:**
- `provider_name` (`Optional[str]`): Specific provider to check, or None for all

**Returns:**
- `Dict[str, Any]`: Health status information

**Example:**
```python
# Check all providers
health = await llm_manager.health_check()
print(f"Healthy providers: {health['healthy_providers']}")

# Check specific provider
health = await llm_manager.health_check("openai")
print(f"OpenAI healthy: {health['healthy']}")
```

#### `get_metrics() -> Dict[str, Any]`

Get usage metrics and statistics.

**Returns:**
- `Dict[str, Any]`: Comprehensive metrics data

**Example:**
```python
metrics = llm_manager.get_metrics()
print(f"Total requests: {metrics['total_requests']}")
print(f"Success rate: {metrics['success_rate']}%")
print(f"Total tokens: {metrics['total_tokens']}")
```

#### `get_provider_stats() -> Dict[str, Any]`

Get per-provider statistics.

**Returns:**
- `Dict[str, Any]`: Provider-specific statistics

**Example:**
```python
stats = llm_manager.get_provider_stats()
for provider, data in stats.items():
    print(f"{provider}: {data['requests']} requests, {data['errors']} errors")
```

### Load Balancing

#### `set_load_balancing_strategy(strategy: str) -> None`

Set load balancing strategy between providers.

**Parameters:**
- `strategy` (`str`): Strategy name ("round_robin", "weighted", "random")

**Example:**
```python
llm_manager.set_load_balancing_strategy("weighted")
```

#### `set_provider_weight(provider_name: str, weight: float) -> None`

Set weight for weighted load balancing.

**Parameters:**
- `provider_name` (`str`): Name of the provider
- `weight` (`float`): Weight value (higher = more requests)

**Example:**
```python
llm_manager.set_provider_weight("openai", 0.7)
llm_manager.set_provider_weight("anthropic", 0.3)
```

### Error Handling

#### `set_retry_policy(max_attempts: int, backoff_factor: float) -> None`

Configure retry policy for failed requests.

**Parameters:**
- `max_attempts` (`int`): Maximum retry attempts
- `backoff_factor` (`float`): Backoff multiplier for delays

**Example:**
```python
llm_manager.set_retry_policy(max_attempts=3, backoff_factor=2.0)
```

#### `set_timeout(timeout: float) -> None`

Set global timeout for requests.

**Parameters:**
- `timeout` (`float`): Timeout in seconds

**Example:**
```python
llm_manager.set_timeout(30.0)  # 30 second timeout
```

### Advanced Features

#### `async batch_chat(messages_list: List[List[Message]], provider: Optional[str] = None, **kwargs) -> List[LLMResponse]`

Send multiple chat requests in batch for efficiency.

**Parameters:**
- `messages_list` (`List[List[Message]]`): List of message lists
- `provider` (`Optional[str]`): Provider to use (optional)
- `**kwargs`: Additional parameters

**Returns:**
- `List[LLMResponse]`: List of responses

**Example:**
```python
batch_messages = [
    [Message(role="user", content="Summarize this text...")],
    [Message(role="user", content="Translate this...")],
    [Message(role="user", content="Analyze this...")]
]

responses = await llm_manager.batch_chat(batch_messages)
for i, response in enumerate(responses):
    print(f"Response {i+1}: {response.content[:100]}...")
```

#### `create_conversation_context() -> Dict[str, Any]`

Create a conversation context for maintaining state.

**Returns:**
- `Dict[str, Any]`: Context object for conversation management

**Example:**
```python
context = llm_manager.create_conversation_context()

# Use context in subsequent requests
response1 = await llm_manager.chat(messages1, context=context)
response2 = await llm_manager.chat(messages2, context=context)
```

## LLMResponse Structure

All methods return a standardized `LLMResponse` object:

```python
@dataclass
class LLMResponse:
    content: str                    # Response text
    provider: str                   # Provider used
    model: str                      # Model used
    finish_reason: str              # Why generation stopped
    native_finish_reason: str       # Provider-specific reason
    tool_calls: List[ToolCall]      # Function calls (if any)
    usage: Optional[Dict[str, int]] # Token usage statistics
    metadata: Dict[str, Any]        # Additional metadata
    request_id: str                 # Unique request identifier
    duration: float                 # Request duration in seconds
    timestamp: datetime             # When request was made
```

## Error Types

The LLMManager can raise several error types:

- `ProviderError`: Provider-specific failures
- `ConfigurationError`: Configuration issues
- `RateLimitError`: Rate limiting errors
- `AuthenticationError`: Authentication failures
- `ModelNotFoundError`: Invalid model specified
- `TokenLimitError`: Token limit exceeded
- `NetworkError`: Network connectivity issues

## Best Practices

### Provider Selection
- Use primary provider for critical functionality
- Configure fallbacks for reliability
- Monitor provider performance and costs

### Configuration
- Store API keys securely in environment variables
- Use configuration files for complex setups
- Validate configurations before deployment

### Error Handling
- Always handle provider failures gracefully
- Implement exponential backoff for retries
- Log errors for debugging and monitoring

### Performance
- Use streaming for real-time applications
- Batch requests when possible
- Monitor and optimize token usage

## Example: Complete Setup

```python
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message

# Initialize manager
llm_manager = LLMManager()

# Configure providers
llm_manager.configure_provider("openai", {
    "model": "gpt-4.1",
    "temperature": 0.7
})

llm_manager.configure_provider("anthropic", {
    "model": "claude-sonnet-4-20250514",
    "temperature": 0.1
})

# Set primary and fallbacks
llm_manager.set_primary_provider("openai")
llm_manager.add_fallback_provider("anthropic")

# Use with automatic fallback
messages = [Message(role="user", content="Hello!")]
response = await llm_manager.chat(messages)

print(f"Response from {response.provider}: {response.content}")
```

## See Also

- [LLM Provider Interface](provider-interface.md) - Provider abstraction layer
- [Configuration Manager](config-manager.md) - Configuration management
- [LLM Providers](../../core-concepts/llm-providers.md) - Supported providers overview

