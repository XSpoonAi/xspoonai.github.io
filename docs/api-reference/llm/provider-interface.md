# LLM Provider Interface API Reference

The `LLMProviderInterface` defines the standardized contract that all LLM providers must implement, ensuring consistent behavior across different AI services.

## Interface Definition

```python
from abc import ABC, abstractmethod
from typing import List, Dict, Any, AsyncGenerator
from spoon_ai.llm import LLMProviderInterface, ProviderCapability, ProviderMetadata, LLMResponse
from spoon_ai.schema import Message

class LLMProviderInterface(ABC):
    """Abstract base class defining the unified interface for all LLM providers."""
```

## Core Abstract Methods

### Initialization and Lifecycle

#### `async initialize(config: Dict[str, Any]) -> None`

Initialize the provider with configuration.

**Parameters:**
- `config` (`Dict[str, Any]`): Provider-specific configuration dictionary

**Raises:**
- `ConfigurationError`: If configuration is invalid

**Example:**
```python
await provider.initialize({
    "api_key": "sk-...",
    "model": "gpt-4",
    "temperature": 0.7
})
```

#### `async cleanup() -> None`

Clean up resources and connections when the provider is no longer needed.

**Example:**
```python
await provider.cleanup()  # Close connections, cleanup resources
```

### Chat and Generation

#### `async chat(messages: List[Message], **kwargs) -> LLMResponse`

Send chat request to the provider.

**Parameters:**
- `messages` (`List[Message]`): List of conversation messages
- `**kwargs`: Additional provider-specific parameters

**Returns:**
- `LLMResponse`: Standardized response object

**Raises:**
- `ProviderError`: If the request fails

**Example:**
```python
from spoon_ai.schema import Message

messages = [
    Message(role="system", content="You are a helpful assistant."),
    Message(role="user", content="Hello!")
]

response = await provider.chat(messages)
print(response.content)
```

#### `async chat_stream(messages: List[Message], **kwargs) -> AsyncGenerator[str, None]`

Send streaming chat request to the provider.

**Parameters:**
- `messages` (`List[Message]`): List of conversation messages
- `**kwargs`: Additional provider-specific parameters

**Yields:**
- `str`: Streaming response chunks

**Raises:**
- `ProviderError`: If the request fails

**Example:**
```python
async for chunk in provider.chat_stream(messages):
    print(chunk, end="", flush=True)
```

#### `async completion(prompt: str, **kwargs) -> LLMResponse`

Send completion request to the provider (legacy support).

**Parameters:**
- `prompt` (`str`): Text prompt for completion
- `**kwargs`: Additional provider-specific parameters

**Returns:**
- `LLMResponse`: Completion response

**Raises:**
- `ProviderError`: If the request fails

**Example:**
```python
response = await provider.completion("Once upon a time")
print(response.content)
```

#### `async chat_with_tools(messages: List[Message], tools: List[Dict], **kwargs) -> LLMResponse`

Send chat request with tool/function calling support.

**Parameters:**
- `messages` (`List[Message]`): List of conversation messages
- `tools` (`List[Dict]`): Available tools/functions for the model
- `**kwargs`: Additional provider-specific parameters

**Returns:**
- `LLMResponse`: Response with potential tool calls

**Raises:**
- `ProviderError`: If the request fails

**Example:**
```python
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather",
        "parameters": {
            "type": "object",
            "properties": {"location": {"type": "string"}}
        }
    }
]

response = await provider.chat_with_tools(messages, tools)
for tool_call in response.tool_calls:
    print(f"Tool call: {tool_call.name}")
```

### Metadata and Health

#### `get_metadata() -> ProviderMetadata`

Get provider metadata and capabilities.

**Returns:**
- `ProviderMetadata`: Provider information and capabilities

**Example:**
```python
metadata = provider.get_metadata()
print(f"Provider: {metadata.name}")
print(f"Max tokens: {metadata.max_tokens}")
print(f"Capabilities: {[cap.value for cap in metadata.capabilities]}")
```

#### `async health_check() -> bool`

Check if provider is healthy and available.

**Returns:**
- `bool`: True if provider is healthy, False otherwise

**Example:**
```python
is_healthy = await provider.health_check()
if not is_healthy:
    print("Provider is currently unavailable")
```

## Data Structures

### ProviderCapability Enum

```python
from enum import Enum

class ProviderCapability(Enum):
    CHAT = "chat"                    # Basic chat functionality
    COMPLETION = "completion"        # Text completion
    TOOLS = "tools"                  # Function/tool calling
    STREAMING = "streaming"          # Streaming responses
    IMAGE_GENERATION = "image_generation"  # Image generation
    VISION = "vision"                # Vision/image understanding
```

### ProviderMetadata Class

```python
from dataclasses import dataclass
from typing import List, Dict

@dataclass
class ProviderMetadata:
    name: str                                    # Provider name
    version: str                                 # Provider version
    capabilities: List[ProviderCapability]       # Supported capabilities
    max_tokens: int                              # Maximum context tokens
    supports_system_messages: bool               # System message support
    rate_limits: Dict[str, int] = field(default_factory=dict)  # Rate limits
```

### LLMResponse Class

```python
from dataclasses import dataclass
from datetime import datetime
from typing import List, Dict, Any, Optional

@dataclass
class LLMResponse:
    content: str                           # Response text content
    provider: str                          # Provider name used
    model: str                             # Model name used
    finish_reason: str                     # Standardized finish reason
    native_finish_reason: str              # Provider-specific finish reason
    tool_calls: List[ToolCall]             # Function/tool calls
    usage: Optional[Dict[str, int]]        # Token usage statistics
    metadata: Dict[str, Any]               # Additional provider metadata
    request_id: str                        # Unique request identifier
    duration: float                        # Request duration in seconds
    timestamp: datetime                    # Request timestamp
```

## Implementing a Custom Provider

### Basic Provider Implementation

```python
from spoon_ai.llm import LLMProviderInterface, ProviderCapability, ProviderMetadata, LLMResponse
from spoon_ai.schema import Message

class CustomProvider(LLMProviderInterface):
    def __init__(self):
        self.api_key = None
        self.model = "custom-model"
        self.initialized = False

    async def initialize(self, config: Dict[str, Any]) -> None:
        self.api_key = config.get("api_key")
        if not self.api_key:
            raise ConfigurationError("API key is required")

        # Initialize connection, validate credentials, etc.
        self.initialized = True

    async def chat(self, messages: List[Message], **kwargs) -> LLMResponse:
        if not self.initialized:
            raise ProviderError("Provider not initialized")

        # Convert messages to provider format
        prompt = self._messages_to_prompt(messages)

        # Make API call
        response_data = await self._call_api(prompt, **kwargs)

        # Convert to standardized response
        return LLMResponse(
            content=response_data["content"],
            provider="custom",
            model=self.model,
            finish_reason="stop",
            native_finish_reason=response_data.get("finish_reason", "stop"),
            tool_calls=[],
            usage=response_data.get("usage"),
            metadata=response_data.get("metadata", {}),
            request_id=response_data.get("request_id", ""),
            duration=response_data.get("duration", 0.0)
        )

    async def chat_stream(self, messages: List[Message], **kwargs) -> AsyncGenerator[str, None]:
        if not self.initialized:
            raise ProviderError("Provider not initialized")

        # Implementation for streaming
        async for chunk in self._stream_api(messages, **kwargs):
            yield chunk

    async def completion(self, prompt: str, **kwargs) -> LLMResponse:
        # Convert to chat format for simplicity
        messages = [Message(role="user", content=prompt)]
        return await self.chat(messages, **kwargs)

    async def chat_with_tools(self, messages: List[Message], tools: List[Dict], **kwargs) -> LLMResponse:
        # If provider supports tools, implement tool calling
        # Otherwise, fall back to regular chat
        if ProviderCapability.TOOLS in self.get_metadata().capabilities:
            return await self._chat_with_tools_impl(messages, tools, **kwargs)
        else:
            return await self.chat(messages, **kwargs)

    def get_metadata(self) -> ProviderMetadata:
        return ProviderMetadata(
            name="custom",
            version="1.0.0",
            capabilities=[
                ProviderCapability.CHAT,
                ProviderCapability.COMPLETION,
                ProviderCapability.STREAMING
            ],
            max_tokens=4096,
            supports_system_messages=True,
            rate_limits={
                "requests_per_minute": 60,
                "tokens_per_minute": 10000
            }
        )

    async def health_check(self) -> bool:
        try:
            # Quick API call to test connectivity
            test_response = await self._call_api("test", max_tokens=1)
            return True
        except Exception:
            return False

    async def cleanup(self) -> None:
        # Close connections, cleanup resources
        self.initialized = False

    # Helper methods
    def _messages_to_prompt(self, messages: List[Message]) -> str:
        # Convert messages to provider-specific format
        return "\n".join([f"{msg.role}: {msg.content}" for msg in messages])

    async def _call_api(self, prompt: str, **kwargs) -> Dict[str, Any]:
        # Implement actual API call
        # This is a mock implementation
        return {
            "content": "Mock response",
            "finish_reason": "stop",
            "usage": {"prompt_tokens": 10, "completion_tokens": 20},
            "metadata": {},
            "request_id": "mock-123",
            "duration": 0.5
        }
```

### Provider Capabilities Implementation

#### Tools Support

```python
async def _chat_with_tools_impl(self, messages: List[Message], tools: List[Dict], **kwargs) -> LLMResponse:
    # Convert tools to provider format
    provider_tools = self._convert_tools_format(tools)

    # Make API call with tools
    response_data = await self._call_api_with_tools(messages, provider_tools, **kwargs)

    # Parse tool calls from response
    tool_calls = self._parse_tool_calls(response_data)

    return LLMResponse(
        content=response_data.get("content", ""),
        provider="custom",
        model=self.model,
        finish_reason="tool_calls" if tool_calls else "stop",
        native_finish_reason=response_data.get("finish_reason", "stop"),
        tool_calls=tool_calls,
        usage=response_data.get("usage"),
        metadata=response_data.get("metadata", {}),
        request_id=response_data.get("request_id", ""),
        duration=response_data.get("duration", 0.0)
    )
```

#### Streaming Support

```python
async def _stream_api(self, messages: List[Message], **kwargs) -> AsyncGenerator[str, None]:
    # Implement streaming API call
    async for chunk in self._streaming_call(messages, **kwargs):
        # Parse and yield content chunks
        if "content" in chunk:
            yield chunk["content"]
        elif chunk.get("finish_reason"):
            break  # End of stream
```

### Error Handling

```python
from spoon_ai.llm.errors import ProviderError, RateLimitError, AuthenticationError

async def chat(self, messages: List[Message], **kwargs) -> LLMResponse:
    try:
        return await self._call_api(messages, **kwargs)
    except HTTPError as e:
        if e.status == 401:
            raise AuthenticationError("Invalid API key", provider=self.name)
        elif e.status == 429:
            raise RateLimitError("Rate limit exceeded", provider=self.name)
        else:
            raise ProviderError(f"HTTP {e.status}: {e.message}", provider=self.name)
    except Exception as e:
        raise ProviderError(f"Unexpected error: {str(e)}", provider=self.name)
```

## Built-in Provider Implementations

### OpenAI Provider

```python
from spoon_ai.llm.providers import OpenAIProvider

provider = OpenAIProvider()
await provider.initialize({
    "api_key": "sk-...",
    "model": "gpt-4.1"
})
```

### Anthropic Provider

```python
from spoon_ai.llm.providers import AnthropicProvider

provider = AnthropicProvider()
await provider.initialize({
    "api_key": "sk-ant-...",
    "model": "claude-sonnet-4-20250514"
})
```

### Gemini Provider

```python
from spoon_ai.llm.providers import GeminiProvider

provider = GeminiProvider()
await provider.initialize({
    "api_key": "...",
    "model": "gemini-2.5-pro"
})
```

## Provider Registry

### Registering Custom Providers

```python
from spoon_ai.llm import LLMProviderRegistry, register_provider

# Register a custom provider
registry = LLMProviderRegistry.get_global_registry()
registry.register_provider("my_provider", MyCustomProvider)

# Or use the convenience function
register_provider("my_provider", MyCustomProvider)
```

### Provider Discovery

```python
from spoon_ai.llm import get_global_registry

registry = get_global_registry()

# List all available providers
providers = registry.list_providers()
print(f"Available providers: {providers}")

# Get a provider instance
provider_class = registry.get_provider("openai")
provider = provider_class()
```

## Best Practices

### Provider Implementation
- Always implement proper error handling and conversion
- Use standardized response formats
- Support all interface methods for full compatibility
- Implement health checks for reliability monitoring

### Capability Declaration
- Accurately declare supported capabilities
- Include realistic rate limits and token limits
- Specify supported models and features

### Error Handling
- Convert provider-specific errors to standard types
- Include helpful error messages and context
- Implement proper cleanup in error scenarios

### Performance
- Implement efficient streaming when supported
- Cache metadata and configuration when possible
- Use connection pooling for better performance

## See Also

- [LLMManager](llm-manager.md) - Central orchestration layer
- [Configuration Manager](config-manager.md) - Provider configuration
- [LLM Providers](../../core-concepts/llm-providers.md) - Supported providers overview



























