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
    model_name="gemini-3-pro",  # Check docs for latest model names
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

# Initialize with multiple providers
# Note: Check each provider's docs for latest model names
llm_manager = LLMManager(
    primary_provider="openai",
    fallback_providers=["anthropic", "gemini"],
    model_preferences={
        "openai": "gpt-5.1-chat-latest",
        "anthropic": "claude-sonnet-4-20250514",
        "gemini": "gemini-3-pro",
        "deepseek": "deepseek-reasoner"
    }
)

# Use with automatic fallback
response = await llm_manager.generate("Explain quantum computing")
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
from spoon_ai.llm.cache import LLMResponseCache

# Enable response caching to avoid redundant API calls
cache = LLMResponseCache()
llm = ChatBot(
    model_name="claude-sonnet-4-20250514",
    llm_provider="anthropic",
)
# Cache is automatically managed by the framework
```

### Streaming Responses

```python
# Stream responses for real-time interaction
async for chunk in llm.stream("Write a long story about AI"):
    print(chunk, end="", flush=True)
```

### Function Calling

```python
# Define functions for the model to call
functions = [
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

response = await llm.generate(
    "What's the weather in New York?",
    functions=functions
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
from spoon_ai.llm.manager import LLMManager

# Configure fallback chain - errors are handled automatically
llm_manager = LLMManager(
    primary_provider="openai",
    fallback_providers=["anthropic", "google"],
    retry_attempts=3,
    timeout=30
)

# Automatic fallback on provider failures
response = await llm_manager.generate("Hello world")
```

### Error Types & Recovery

The framework uses structured error types for clean error handling:

```python
from spoon_ai.llm.errors import RateLimitError, AuthenticationError, ModelNotFoundError

# Simple error handling with specific error types
response = await llm.generate("Hello world")

# Framework handles common errors automatically:
# - Rate limits: automatic retry with backoff
# - Network issues: automatic retry with fallback
# - Authentication: clear error messages
# - Model availability: fallback to alternative models
```

### Graceful Degradation

```python
# Framework provides graceful degradation patterns
llm_manager = LLMManager(
    primary_provider="openai",
    fallback_providers=["deepseek", "gemini"],  # Cost-effective fallbacks
    enable_graceful_degradation=True
)

# If primary fails, automatically uses fallback
# No manual error handling required
response = await llm_manager.generate("Complex reasoning task")
```

## Monitoring & Metrics

### Usage Tracking

```python
from spoon_ai.llm.monitoring import MetricsCollector, get_metrics_collector

# Get the global metrics collector
collector = get_metrics_collector()

# Metrics are automatically tracked during LLM calls
response = await llm.ask([{"role": "user", "content": "Hello"}])

# Get collected stats per provider
stats = collector.get_stats("openai")
print(f"Total requests: {stats.total_requests}")
print(f"Average latency: {stats.average_latency:.2f}s")
```

### Performance Monitoring

```python
# The MetricsCollector automatically tracks:
# - Request counts and success/failure rates
# - Token usage (input/output)
# - Latency statistics (average, min, max)
# - Error tracking per provider

# Access provider-specific stats
for provider in ["openai", "anthropic", "gemini"]:
    stats = collector.get_stats(provider)
    if stats.total_requests > 0:
        print(f"{provider}: {stats.total_requests} requests, {stats.error_count} errors")
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
response = await llm_manager.generate("Hello world")

# Only use explicit error handling for custom business logic
if response.provider != "openai":
    logger.info(f"Fell back to {response.provider}")
```

## Next Steps

- [Agents](./agents.md) - Learn how agents use LLMs
- [MCP Protocol](./mcp-protocol.md) - Dynamic tool integration
- [Configuration Guide](../getting-started/configuration.md) - Detailed setup instructions
