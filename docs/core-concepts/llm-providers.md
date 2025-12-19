# LLM Providers

SpoonOS provides a **unified interface** to multiple LLM providers. Write your code once, then switch between OpenAI, Anthropic, Google, DeepSeek, or OpenRouter by changing a single parameter—no code rewrites, no API differences to handle.

## Why Multi-Provider?

Relying on a single LLM provider is risky:

- **Outages** — OpenAI goes down, your app goes down
- **Rate limits** — Hit the ceiling, requests fail
- **Cost** — Different models have different pricing
- **Capabilities** — Some models excel at code, others at analysis

SpoonOS solves this with:

```mermaid
graph LR
    A[Your Agent] --> B[ChatBot]
    B --> C{Provider Router}
    C -->|primary| D[OpenAI GPT-4]
    C -->|fallback 1| E[Anthropic Claude]
    C -->|fallback 2| F[Google Gemini]
    D -->|rate limited| C
    E -->|success| A
```

## Provider Comparison

| Provider | Best For | Context | Strengths |
|----------|----------|---------|-----------|
| **OpenAI** | General purpose, code | 128K | Fastest iteration, best tool calling |
| **Anthropic** | Long documents, analysis | 200K | Prompt caching, safety features |
| **Google** | Multimodal, cost-sensitive | 1M | Longest context, fast inference |
| **DeepSeek** | Complex reasoning, code | 64K | Best cost/performance for code |
| **OpenRouter** | Experimentation | Varies | 100+ models, automatic routing |

## Key Features

| Feature | What It Does |
|---------|--------------|
| **Unified API** | Same `ChatBot` class for all providers |
| **Auto-fallback** | Chain providers: GPT-4 → Claude → Gemini |
| **Streaming** | Real-time responses across all providers |
| **Tool calling** | Consistent function calling interface |
| **Token tracking** | Automatic counting and cost monitoring |

---

## Quick Start

```bash
pip install spoon-ai
export OPENAI_API_KEY="your-key"
```

```python
import asyncio
from spoon_ai.chat import ChatBot

# Same interface for all providers—just change model_name and llm_provider
llm = ChatBot(model_name="gpt-5.1-chat-latest", llm_provider="openai")

async def main():
    response = await llm.ask([{"role": "user", "content": "Explain quantum computing in one sentence"}])
    print(response)

asyncio.run(main())
```

---

## Supported Providers

### OpenAI

- **Models**: GPT-5.1, GPT-4o, o1, o3, etc. ([See latest models](https://platform.openai.com/docs/models))
- **Features**: Function calling, streaming, embeddings, reasoning models
- **Best for**: General-purpose tasks, reasoning, code generation

```python
from spoon_ai.chat import ChatBot

# OpenAI configuration with default model
llm = ChatBot(
    model_name="gpt-5.1-chat-latest",  # Check docs for latest model names
    llm_provider="openai",
    temperature=0.7
)
```

### Anthropic (Claude)

- **Models**: Claude 4.5 Opus, Claude 4.5 Sonnet, etc. ([See latest models](https://docs.anthropic.com/en/docs/about-claude/models))
- **Features**: Large context windows, prompt caching, safety features
- **Best for**: Long documents, analysis, safety-critical applications

```python
# Anthropic configuration with default model
llm = ChatBot(
    model_name="claude-sonnet-4-20250514",  # Check docs for latest model names
    llm_provider="anthropic",
    temperature=0.1
)
```

### Google (Gemini)

- **Models**: Gemini 3 Pro, Gemini 2.5 Flash, etc. ([See latest models](https://ai.google.dev/gemini-api/docs/models))
- **Features**: Multimodal capabilities, fast inference, large context
- **Best for**: Multimodal tasks, cost-effective solutions, long context

```python
# Google configuration with default model
llm = ChatBot(
    model_name="gemini-3-pro-preview",  # Check docs for latest model names
    llm_provider="gemini",
    temperature=0.1
)
```

### DeepSeek

- **Models**: DeepSeek-V3, DeepSeek-Reasoner, etc. ([See latest models](https://platform.deepseek.com/api-docs/))
- **Features**: Advanced reasoning, code-specialized models, cost-effective
- **Best for**: Complex reasoning, code generation, technical tasks

```python
# DeepSeek configuration with default model
llm = ChatBot(
    model_name="deepseek-reasoner",  # Check docs for latest model names
    llm_provider="deepseek",
    temperature=0.2
)
```

### OpenRouter

- **Models**: Access to multiple providers through one API
- **Features**: Model routing, cost optimization
- **Best for**: Experimentation, cost optimization

```python
# OpenRouter configuration
llm = ChatBot(
    model_name="anthropic/claude-3-opus",
    llm_provider="openrouter",
    temperature=0.7
)
```

## Unified LLM Manager

The LLM Manager provides provider-agnostic access with automatic fallback:

```python
from spoon_ai.llm.manager import LLMManager
from spoon_ai.schema import Message
import asyncio

# Initialize LLM Manager
llm_manager = LLMManager()

# Clear default_provider so fallback_chain takes precedence
llm_manager.default_provider = None

# Set fallback chain (primary provider first, then fallbacks)
llm_manager.set_fallback_chain(["gemini", "openai"])

async def main():
    # Create messages
    messages = [Message(role="user", content="Explain quantum computing in one sentence")]
    response = await llm_manager.chat(messages)
    print(f"Response: {response.content}")
    print(f"Provider used: {response.provider}")
    
if __name__ == "__main__":
    asyncio.run(main())
```

## Configuration

### Environment Variables

```bash
# Provider API Keys
OPENAI_API_KEY=sk-your_openai_key_here
ANTHROPIC_API_KEY=sk-ant-your_anthropic_key_here
GEMINI_API_KEY=your_gemini_key_here
DEEPSEEK_API_KEY=your_deepseek_key_here
OPENROUTER_API_KEY=sk-or-your_openrouter_key_here

# Default Settings
DEFAULT_LLM_PROVIDER=openai
DEFAULT_MODEL=gpt-5.1-chat-latest
DEFAULT_TEMPERATURE=0.3
```

### Runtime Configuration

```json
{
  "llm": {
    "provider": "openai",
    "model": "gpt-5.1-chat-latest",
    "temperature": 0.3,
    "max_tokens": 32768,
    "fallback_providers": ["anthropic", "deepseek", "gemini"]
  }
}
```

## Advanced Features

### Response Caching

```python
from spoon_ai.llm.cache import LLMResponseCache, CachedLLMManager
from spoon_ai.llm.manager import LLMManager
from spoon_ai.schema import Message
import asyncio


# Enable response caching to avoid redundant API calls
cache = LLMResponseCache()
llm_manager = LLMManager()
cached_manager = CachedLLMManager(llm_manager, cache=cache)

async def main():
    messages = [Message(role="user", content="Explain quantum computing in one sentence")]
    response1 = await cached_manager.chat(messages)
    print(response1)
    
if __name__ == "__main__":
    asyncio.run(main())
```

### Streaming Responses

```python
# Stream responses for real-time interaction
import asyncio
from spoon_ai.chat import ChatBot

async def main():
    # Create a ChatBot instance
    llm = ChatBot(
        model_name="gpt-5.1-chat-latest",
        llm_provider="openai",
        temperature=0.7
    )
    
    # Prepare messages
    messages = [{"role": "user", "content": "Write a long story about AI"}]

    # Stream the response chunk by chunk
    async for chunk in llm.astream(messages):
        # chunk.delta contains the text content of this chunk
        print(chunk.delta, end="", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
```

### Function Calling

```python
# Define functions for the model to call
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA"
                    }
                },
                "required": ["location"]
            }
        }
    }
]

response = await llm.ask_tool(
        messages=messages,
        tools=tools
    )
```

## Model Selection Guide

### Task-Based Recommendations

> Choose the right model for your use case. Check official documentation for the latest model capabilities.

#### Code Generation
- **Recommended**: DeepSeek (cost-effective), OpenAI GPT models (fast iteration)
- **Alternative**: Anthropic Claude (strong reasoning)

#### Analysis & Reasoning
- **Recommended**: OpenAI o-series models, DeepSeek Reasoner, Claude
- **Alternative**: Gemini Pro

#### Cost-Sensitive Tasks
- **Recommended**: DeepSeek models, Gemini models
- **Alternative**: OpenRouter for provider comparison

#### Long Context Tasks
- **Recommended**: Gemini (largest context), Claude (large context)
- **Alternative**: Check each provider's latest context window limits

### Performance Comparison

> **Note**: Model capabilities and pricing change frequently. Always check the official documentation for the latest information:
> - [OpenAI Models](https://platform.openai.com/docs/models)
> - [Anthropic Models](https://docs.anthropic.com/en/docs/about-claude/models)
> - [Google Gemini Models](https://ai.google.dev/gemini-api/docs/models)
> - [DeepSeek Models](https://platform.deepseek.com/api-docs/)

| Provider | Model Example | Context Window | Best For |
|----------|---------------|----------------|----------|
| **OpenAI** | gpt-5.1-chat-latest | Check docs | General purpose, tool calling |
| **Anthropic** | claude-sonnet-4-20250514 | Check docs | Analysis, long documents |
| **Google** | gemini-2.5-pro | Check docs | Multimodal, cost-effective |
| **DeepSeek** | deepseek-reasoner | Check docs | Reasoning, code generation |
| **OpenRouter** | Various | Varies | Access multiple providers |

## Error Handling & Fallbacks

### Automatic Fallback

The framework provides built-in error handling with automatic fallback between providers:

```python
"""
LLMManager with fallback chain demo - demonstrates automatic provider fallback.
"""
from spoon_ai.llm.manager import LLMManager
from spoon_ai.schema import Message
import asyncio

# Initialize LLM Manager
llm_manager = LLMManager()
# Clear default_provider so fallback_chain takes precedence
llm_manager.default_provider = None
# The manager will try providers in order: gemini -> openai -> anthropic
llm_manager.set_fallback_chain(["gemini", "openai", "anthropic"])

async def main():
    # Create messages
    messages = [Message(role="user", content="Hello world")]
    response = await llm_manager.chat(messages)
    print(response.content)
 
if __name__ == "__main__":
    asyncio.run(main())
```

### Error Types & Recovery

The framework uses structured error types for clean error handling:

```python
from spoon_ai.llm.errors import RateLimitError, AuthenticationError, ModelNotFoundError

llm = ChatBot(
    model_name="gemini-2.5-flash",
    llm_provider="gemini",
    temperature=0.1
)

# Simple error handling with specific error types
response = await llm.ask([{"role": "user", "content": "Hello world"}])

# Framework handles common errors automatically:
# - Rate limits: automatic retry with backoff
# - Network issues: automatic retry with fallback
# - Authentication: clear error messages
# - Model availability: fallback to alternative models
```

### Graceful Degradation

```python
import asyncio
from spoon_ai.llm.manager import LLMManager
from spoon_ai.schema import Message

# Framework provides graceful degradation patterns
llm_manager = LLMManager()
llm_manager.default_provider = "openai"
llm_manager.set_fallback_chain(["openai", "deepseek", "gemini"])  # Cost-effective fallbacks

# If primary fails, automatically uses fallback
# No manual error handling required
async def main():
    messages = [Message(role="user", content="Complex reasoning task: Explain quantum computing and its applications")]
    response = await llm_manager.chat(messages)
    print(response.content)

asyncio.run(main())
```

## Monitoring & Metrics

### Usage Tracking

```python
import asyncio
from spoon_ai.chat import ChatBot
from spoon_ai.llm.monitoring import get_metrics_collector

# Get the global metrics collector
collector = get_metrics_collector()

llm = ChatBot(model_name="gemini-2.5-flash", llm_provider="gemini")

async def main():
    # Metrics are automatically tracked during LLM calls
    response = await llm.ask([{"role": "user", "content": "Hello"}])
    
    # Get collected stats per provider
    stats = collector.get_provider_stats("gemini")
    print(f"Total requests: {stats.total_requests}")
    print(f"Success rate: {stats.success_rate:.2f}%")
    print(f"Average duration: {stats.average_duration:.3f}s")
    print(f"Total tokens: {stats.total_tokens}")
    print(f"Total cost: ${stats.total_cost:.6f}")

asyncio.run(main())
```

### Performance Monitoring

```python
# The MetricsCollector automatically tracks:
# - Request counts and success/failure rates
# - Token usage (input/output)
# - Latency statistics (average, min, max)
# - Error tracking per provider

# Access provider-specific stats
import asyncio
from spoon_ai.chat import ChatBot
from spoon_ai.llm.monitoring import get_metrics_collector

# The MetricsCollector automatically tracks:
# - Request counts and success/failure rates
# - Token usage (input/output)
# - Latency statistics (average, min, max)
# - Error tracking per provider

collector = get_metrics_collector()
llm = ChatBot(model_name="gemini-2.5-flash", llm_provider="gemini")

async def main():
    # Make some requests to generate metrics
    await llm.ask([{"role": "user", "content": "Hello"}])
    
    # Access provider-specific stats
    for provider in ["openai", "anthropic", "gemini"]:
        stats = collector.get_provider_stats(provider)
        if stats and stats.total_requests > 0:
            print(f"{provider}: {stats.total_requests} requests, {stats.failed_requests} errors")
    
    # Access all provider stats
    all_stats = collector.get_all_stats()
    if all_stats:
        print(f"\nAll Providers Summary:")
        for provider_name, provider_stats in all_stats.items():
            print(f"{provider_name}: {provider_stats.total_requests} requests, "
                  f"{provider_stats.success_rate:.1f}% success rate")

asyncio.run(main())
```

## Best Practices

### Provider Selection

- **Test multiple providers** for your specific use case
- **Consider cost vs. quality** trade-offs
- **Use fallbacks** for production reliability

### Configuration Management

- **Store API keys securely** in environment variables
- **Use configuration files** for easy switching
- **Monitor usage and costs** regularly

### Performance Optimization

- **Cache responses** when appropriate
- **Use streaming** for long responses
- **Batch requests** when possible

### Error Handling Philosophy

The SpoonOS framework follows a "fail-fast, recover-gracefully" approach:

- **Automatic Recovery**: Common errors (rate limits, network issues) are handled automatically
- **Structured Errors**: Use specific error types instead of generic exceptions
- **Fallback Chains**: Configure multiple providers for automatic failover
- **Minimal Try-Catch**: Let the framework handle errors; only catch when you need custom logic

```python
# Preferred: Let framework handle errors
import asyncio
from spoon_ai.chat import ChatBot
from spoon_ai.llm.errors import RateLimitError, AuthenticationError, ModelNotFoundError

llm = ChatBot(model_name="gemini-2.5-flash", llm_provider="gemini")

async def main():
    try:
        response = await llm.ask([{"role": "user", "content": "Hello world"}])
        print(response)
    except AuthenticationError as e:
        print(f"Authentication failed: {e.message}")
    except RateLimitError as e:
        print(f"Rate limit exceeded: {e.message}")
    except ModelNotFoundError as e:
        print(f"Model not found: {e.model}")

asyncio.run(main())
```

## Next Steps

- [Agents](./agents.md) - Learn how agents use LLMs
- [MCP Protocol](./mcp-protocol.md) - Dynamic tool integration
- [Configuration Guide](../getting-started/configuration.md) - Detailed setup instructions
