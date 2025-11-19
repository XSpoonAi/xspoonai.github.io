# LLM System API Reference

The LLM (Large Language Model) system in SpoonOS provides a unified, provider-agnostic interface for working with multiple AI services including OpenAI, Anthropic, Google, and DeepSeek.

## Overview

SpoonOS's LLM system offers:

- > **Note (Nov 2025):** The core Python SDK reads provider settings from environment variables. The `spoon-cli` toolchain loads `config.json` and exports those values into the environment automatically. When using the SDK directly, set the relevant `*_API_KEY`, `*_BASE_URL`, and related environment variables before creating `ConfigurationManager()`.

- **Provider Agnosticism**: Unified API across all providers
- **Automatic Fallback**: Intelligent provider switching on failures
- **Load Balancing**: Distribute requests across multiple providers
- **Comprehensive Monitoring**: Usage tracking and performance metrics
- **Flexible Configuration**: Multiple configuration sources and validation
- **Advanced Features**: Streaming, function calling, and tool integration

## Core Components

### [LLMManager](llm-manager.md)
Central orchestrator for LLM operations with provider management, fallback, and load balancing.

**Key Features:**
- Unified chat and generation API
- Automatic provider fallback
- Load balancing and health monitoring
- Streaming and batch operations
- Comprehensive error handling

```python
from spoon_ai.llm import LLMManager

llm_manager = LLMManager()
response = await llm_manager.chat(messages)
```

### [Provider Interface](provider-interface.md)
Abstract interface that all LLM providers implement for consistent behavior.

**Key Features:**
- Standardized provider contract
- Comprehensive capability system
- Unified response format
- Built-in error handling patterns

```python
from spoon_ai.llm import LLMProviderInterface

class CustomProvider(LLMProviderInterface):
    async def chat(self, messages, **kwargs) -> LLMResponse:
        # Implementation
```

### [Configuration Manager](config-manager.md)
Handles configuration loading, validation, and management from multiple sources.

**Key Features:**
- Multi-source configuration (files, env vars, runtime)
- Provider-specific validation
- Secure credential management
- Configuration templates and merging

```python
import os
from spoon_ai.llm import ConfigurationManager

# Export provider settings into environment variables
os.environ["OPENAI_API_KEY"] = "sk-..."
os.environ["DEFAULT_LLM_PROVIDER"] = "openai"

config_manager = ConfigurationManager()
```

## Quick Start

### Basic Usage

```python
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message

# Initialize manager
llm_manager = LLMManager()

# Simple chat
messages = [Message(role="user", content="Hello!")]
response = await llm_manager.chat(messages)
print(response.content)
```


### Controlling Provider Priority

You can steer which provider is used first—and how the system falls back—purely via environment variables:

```bash
# Prefer Anthropic by default
export DEFAULT_LLM_PROVIDER=anthropic

# Allow fallback to OpenAI, then Gemini
export LLM_FALLBACK_CHAIN="anthropic,openai,gemini"
```

On Windows PowerShell:

```powershell
$env:DEFAULT_LLM_PROVIDER = "anthropic"
$env:LLM_FALLBACK_CHAIN = "anthropic,openai,gemini"
```

After setting the variables, simply instantiate `ConfigurationManager()` as usual; no code changes are needed. The `spoon-cli` configuration workflow writes these variables for you whenever it loads `config.json`.

### Streaming Responses

```python
# Stream responses for real-time output
async for chunk in llm_manager.chat_stream(messages):
    print(chunk, end="", flush=True)
```

## Supported Providers

### OpenAI
- **Models**: GPT-4.1, GPT-4o, GPT-4o-mini, o1-preview, o1-mini
- **Features**: Function calling, streaming, embeddings
- **Best for**: General-purpose tasks, reasoning, code generation

### Anthropic (Claude)
- **Models**: Claude-Sonnet-4-20250514, Claude-3.5 Sonnet, Claude-3.5 Haiku
- **Features**: Large context windows, prompt caching, safety
- **Best for**: Long documents, analysis, safety-critical applications

### Google (Gemini)
- **Models**: Gemini-2.5-Pro, Gemini-2.0-Flash, Gemini-1.5-Pro
- **Features**: Multimodal, fast inference, large context
- **Best for**: Multimodal tasks, cost-effectiveness, long context

### DeepSeek
- **Models**: DeepSeek-Reasoner, DeepSeek-V3, DeepSeek-Chat
- **Features**: Advanced reasoning, code-specialized, cost-effective
- **Best for**: Complex reasoning, code generation, technical tasks

### OpenRouter
- **Models**: Access to multiple providers through single API
- **Features**: Model routing, cost optimization
- **Best for**: Experimentation, cost optimization

## Advanced Patterns

### Provider Fallback

```python
# Configure automatic fallback
llm_manager = LLMManager()
llm_manager.set_primary_provider("openai")
llm_manager.add_fallback_provider("anthropic")
llm_manager.add_fallback_provider("deepseek")

# Automatic fallback on failures
response = await llm_manager.chat(messages)
print(f"Used provider: {response.provider}")
```

### Load Balancing

```python
# Weighted load balancing
llm_manager.set_load_balancing_strategy("weighted")
llm_manager.set_provider_weight("openai", 0.6)
llm_manager.set_provider_weight("anthropic", 0.4)

# Requests distributed by weights
response = await llm_manager.chat(messages)
```

### Tool Integration

```python
# Function calling with tools
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

response = await llm_manager.chat_with_tools(messages, tools)
for tool_call in response.tool_calls:
    # Execute tool calls
    result = await execute_tool(tool_call)
```

### Batch Operations

```python
# Process multiple requests efficiently
batch_messages = [
    [Message(role="user", content="Summarize text A")],
    [Message(role="user", content="Translate text B")],
    [Message(role="user", content="Analyze text C")]
]

responses = await llm_manager.batch_chat(batch_messages)
for i, response in enumerate(responses):
    print(f"Response {i+1}: {response.content[:50]}...")
```

## Configuration

### Environment Variables

```bash
# API Keys (required - set at least one)
OPENAI_API_KEY=sk-your_key
ANTHROPIC_API_KEY=sk-ant-your_key
GEMINI_API_KEY=your_gemini_key
DEEPSEEK_API_KEY=your_key

# Global Settings (optional)
DEFAULT_LLM_PROVIDER=openai          # or anthropic / gemini / deepseek / openrouter
DEFAULT_MODEL=gpt-5.1
DEFAULT_TEMPERATURE=0.3
LLM_TIMEOUT=30
LLM_RETRY_ATTEMPTS=3

# Provider-specific overrides (optional)
GEMINI_MAX_TOKENS=20000
```

### Runtime Configuration

```python
from spoon_ai.llm import ConfigurationManager

config_manager = ConfigurationManager()  # uses environment variables by default

# Configure providers
config_manager.set_provider_config("openai", {
    "api_key": "sk-...",
    "model": "gpt-4.1",
    "temperature": 0.7
})

# Set global settings
config_manager.set_global_config({
    "default_provider": "openai",
    "timeout": 30
})
```

## Response Format

All LLM operations return a standardized `LLMResponse`:

```python
@dataclass
class LLMResponse:
    content: str                    # Generated text
    provider: str                   # Provider used
    model: str                      # Model used
    finish_reason: str              # Why generation stopped
    native_finish_reason: str       # Provider-specific reason
    tool_calls: List[ToolCall]      # Function calls (if any)
    usage: Dict[str, int]          # Token usage statistics
    metadata: Dict[str, Any]       # Additional metadata
    request_id: str                # Unique request ID
    duration: float                # Request duration
    timestamp: datetime            # Request time
```

## Error Handling

### Structured Error Types

```python
from spoon_ai.llm.errors import (
    LLMError,              # Base LLM error
    ProviderError,         # Provider-specific errors
    ConfigurationError,    # Configuration issues
    RateLimitError,        # Rate limiting
    AuthenticationError,   # Auth failures
    ModelNotFoundError,    # Invalid model
    TokenLimitError,       # Token limit exceeded
    NetworkError,          # Network issues
    ProviderUnavailableError  # Provider down
)

try:
    response = await llm_manager.chat(messages)
except RateLimitError:
    # Handle rate limiting
    await asyncio.sleep(60)
    response = await llm_manager.chat(messages)
except AuthenticationError:
    # Handle auth issues
    print("API key invalid")
except ProviderError as e:
    print(f"Provider {e.provider} failed: {e.message}")
```

### Automatic Recovery

```python
# Framework handles most errors automatically
llm_manager = LLMManager()

# Automatic retry with backoff
# Automatic fallback to other providers
# Automatic rate limit handling

response = await llm_manager.chat(messages)  # Robust by default
```

## Monitoring and Metrics

### Usage Tracking

```python
# Get comprehensive metrics
metrics = llm_manager.get_metrics()
print(f"Total requests: {metrics['total_requests']}")
print(f"Success rate: {metrics['success_rate']}%")
print(f"Total tokens: {metrics['total_tokens']}")
print(f"Total cost: ${metrics['total_cost']}")
```

### Provider Statistics

```python
# Per-provider metrics
stats = llm_manager.get_provider_stats()
for provider, data in stats.items():
    print(f"{provider}: {data['requests']} requests, {data['errors']} errors")
```

### Health Monitoring

```python
# Check provider health
health = await llm_manager.health_check()
print(f"Healthy providers: {health['healthy_providers']}")

# Individual provider health
health = await llm_manager.health_check("openai")
print(f"OpenAI healthy: {health['healthy']}")
```

## Custom Provider Implementation

### Basic Custom Provider

```python
from spoon_ai.llm import LLMProviderInterface, LLMResponse

class MyCustomProvider(LLMProviderInterface):
    async def initialize(self, config: Dict[str, Any]) -> None:
        self.api_key = config["api_key"]

    async def chat(self, messages, **kwargs) -> LLMResponse:
        # Your implementation
        response = await self._call_api(messages, **kwargs)
        return LLMResponse(
            content=response["content"],
            provider="custom",
            model="my-model",
            finish_reason="stop",
            native_finish_reason="stop",
            tool_calls=[],
            usage=response.get("usage"),
            metadata={},
            request_id="custom-123",
            duration=response.get("duration", 0.0)
        )

    def get_metadata(self) -> ProviderMetadata:
        return ProviderMetadata(
            name="custom",
            version="1.0",
            capabilities=[ProviderCapability.CHAT],
            max_tokens=4096,
            supports_system_messages=True
        )

    async def health_check(self) -> bool:
        try:
            # Test API connectivity
            return True
        except:
            return False

    async def cleanup(self) -> None:
        pass

    # Implement other required methods...
```

### Registering Custom Providers

```python
from spoon_ai.llm import register_provider

# Register your custom provider
register_provider("my_provider", MyCustomProvider)

# Now you can use it
llm_manager.set_primary_provider("my_provider")
```

## Best Practices

### Configuration Management
- Store API keys securely in environment variables
- Use configuration files for complex setups
- Validate configurations before deployment
- Use different configs for dev/staging/production

### Error Handling
- Let the framework handle common errors automatically
- Use specific error types for custom logic
- Implement proper fallback chains
- Monitor error rates and patterns

### Performance Optimization
- Use streaming for real-time applications
- Batch requests when possible
- Monitor token usage and costs
- Cache responses when appropriate

### Provider Selection
- Test multiple providers for your use case
- Consider cost vs. quality trade-offs
- Use fallbacks for production reliability
- Monitor provider performance regularly

## Migration Guide

### From Direct Provider APIs

```python
# Before: Direct OpenAI API
import openai
client = openai.OpenAI(api_key="sk-...")
response = client.chat.completions.create(...)

# After: SpoonOS LLM Manager
from spoon_ai.llm import LLMManager
llm_manager = LLMManager()
response = await llm_manager.chat(messages)  # Automatic provider selection
```

### From Other LLM Libraries

```python
# Before: LangChain
from langchain.llms import OpenAI
llm = OpenAI(model="gpt-4", temperature=0.7)

# After: SpoonOS
from spoon_ai.llm import LLMManager
llm_manager = LLMManager()
llm_manager.configure_provider("openai", {
    "model": "gpt-4.1",
    "temperature": 0.7
})
```

## Troubleshooting

### Common Issues

**Provider Connection Failed**
```python
# Check API keys
health = await llm_manager.health_check("openai")
if not health["healthy"]:
    print(f"Error: {health.get('error')}")

# Verify configuration
config = llm_manager.get_provider_config("openai")
print(f"API Key configured: {bool(config.api_key)}")
```

**Rate Limiting**
```python
# Increase timeout and retry settings
llm_manager.set_retry_policy(max_attempts=5, backoff_factor=2.0)
llm_manager.set_timeout(60)

# Use multiple providers to distribute load
llm_manager.add_fallback_provider("anthropic")
```

**High Latency**
```python
# Enable monitoring to identify bottlenecks
llm_manager.enable_monitoring(["execution_time", "success_rate"])

# Check metrics
metrics = llm_manager.get_metrics()
print(f"Average latency: {metrics['avg_latency']}s")

# Consider faster providers or models
llm_manager.set_primary_provider("gemini")  # Generally faster
```

**Configuration Errors**
```python
from spoon_ai.llm import ConfigurationManager

config_manager = ConfigurationManager()  # refreshes from environment variables
errors = config_manager.validate_config(your_config)
for error in errors:
    print(f"Config error: {error}")
```

## See Also

- [LLM Providers](../../core-concepts/llm-providers.md) - Supported providers and features
- [Configuration Guide](../../getting-started/configuration.md) - Setup and configuration
- [Error Handling](../../troubleshooting/common-issues.md) - Troubleshooting guide
