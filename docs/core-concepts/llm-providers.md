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

- **Models**: gpt-5.1-chat-latest (default), GPT-4o, GPT-4o-mini, o1-preview, o1-mini
- **Features**: Function calling, streaming, embeddings, reasoning models
- **Best for**: General-purpose tasks, reasoning, code generation

```python
from spoon_ai.chat import ChatBot

# OpenAI configuration with default model
llm = ChatBot(
    model_name="gpt-5.1-chat-latest",  # Framework default
    llm_provider="openai",
    temperature=0.7
)
```

### Anthropic (Claude)

- **Models**: Claude-Sonnet-4-20250514 (default), Claude-3.5 Sonnet, Claude-3.5 Haiku
- **Features**: Large context windows, prompt caching, safety features
- **Best for**: Long documents, analysis, safety-critical applications

```python
# Anthropic configuration with default model
llm = ChatBot(
    model_name="claude-sonnet-4-20250514",  # Framework default
    llm_provider="anthropic",
    temperature=0.1
)
```

### Google (Gemini)

- **Models**: Gemini-2.5-Pro (default), Gemini-2.0-Flash, Gemini-1.5-Pro
- **Features**: Multimodal capabilities, fast inference, large context
- **Best for**: Multimodal tasks, cost-effective solutions, long context

```python
# Google configuration with default model
llm = ChatBot(
    model_name="gemini-2.5-pro",  # Framework default
    llm_provider="gemini",
    temperature=0.1
)
```

### DeepSeek

- **Models**: DeepSeek-Reasoner (default), DeepSeek-V3, DeepSeek-Chat
- **Features**: Advanced reasoning, code-specialized models, cost-effective
- **Best for**: Complex reasoning, code generation, technical tasks

```python
# DeepSeek configuration with default model
llm = ChatBot(
    model_name="deepseek-reasoner",  # Framework default
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
llm_manager = LLMManager(
    primary_provider="openai",
    fallback_providers=["anthropic", "gemini"],
    model_preferences={
        "openai": "gpt-5.1-chat-latest",
        "anthropic": "claude-sonnet-4-20250514",
        "gemini": "gemini-2.5-pro",
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

### Prompt Caching (Anthropic)

```python
from spoon_ai.llm.cache import PromptCache

# Enable prompt caching for repeated system prompts
llm = ChatBot(
    model_name="claude-sonnet-4-20250514",
    llm_provider="anthropic",
    enable_caching=True
)
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

#### Code Generation

- Primary: DeepSeek-Reasoner, gpt-5.1-chat-latest
- Alternative: Claude-Sonnet-4

#### Analysis & Reasoning

- Primary: DeepSeek-Reasoner, gpt-5.1-chat-latest, Claude-Sonnet-4
- Alternative: Gemini-2.5-Pro

#### Cost-Sensitive Tasks

- Primary: DeepSeek-Reasoner, Gemini-2.5-Pro
- Alternative: gpt-5.1-chat-latest

#### Long Context Tasks

- Primary: Gemini-2.5-Pro (250K tokens), Claude-Sonnet-4 (200K tokens)
- Alternative: DeepSeek-Reasoner (65K tokens)

### Performance Comparison

| Provider                  | Speed     | Cost     | Context | Quality              |
| ------------------------- | --------- | -------- | ------- | -------------------- |
| OpenAI gpt-5.1-chat-latest            | Fast      | Medium   | 128K    | Excellent            |
| Anthropic Claude-Sonnet-4 | Medium    | Medium   | 200K    | Excellent            |
| Google Gemini-2.5-Pro     | Very Fast | Low      | 250K    | Very Good            |
| DeepSeek-Reasoner         | Fast      | Very Low | 65K     | Superior (Reasoning) |
| OpenAI o1-preview         | Slow      | High     | 128K    | Superior (Reasoning) |

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
from spoon_ai.llm.monitoring import LLMMonitor

# Track usage and costs automatically
monitor = LLMMonitor()
response = await llm.generate("Hello", monitor=monitor)

# Get metrics
metrics = monitor.get_metrics()
print(f"Tokens used: {metrics.total_tokens}")
print(f"Cost: ${metrics.total_cost}")
```

### Performance Monitoring

```python
# Monitor response times and success rates
monitor.log_request(
    provider="openai",
    model="gpt-4",
    tokens=150,
    latency=1.2,
    success=True
)
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
