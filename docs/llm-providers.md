---
sidebar_position: 11
---

# LLM Providers

SpoonOS features a unified LLM infrastructure that provides seamless integration with multiple providers, automatic fallback mechanisms, and comprehensive monitoring.

## Supported Providers

### OpenAI
- **Models**: GPT-4.1, GPT-4o, GPT-3.5-turbo
- **Features**: Chat completion, function calling, streaming
- **Configuration**: API key required

### Anthropic
- **Models**: Claude Sonnet 4, Claude Opus 4, Claude Haiku 4
- **Features**: Chat completion, function calling, prompt caching
- **Configuration**: API key required

### DeepSeek
- **Models**: DeepSeek R1, DeepSeek Coder
- **Features**: Chat completion, code generation
- **Configuration**: API key required

### Google Gemini
- **Models**: Gemini 2.5 Pro, Gemini Flash
- **Features**: Chat completion, multimodal
- **Configuration**: API key required

### OpenRouter
- **Models**: Access to 100+ models through single API
- **Features**: Unified interface, cost optimization
- **Configuration**: OpenRouter API key

## Configuration

### Basic Setup

```python
from spoon_ai.llm import LLMManager, ConfigurationManager

# Initialize the LLM manager
config_manager = ConfigurationManager()
llm_manager = LLMManager(config_manager)

# Simple chat request (uses default provider)
response = await llm_manager.chat([
    {"role": "user", "content": "Hello, world!"}
])
print(response.content)
```

### Provider Configuration

Configure providers in your `config.json`:

```json
{
  "llm_providers": {
    "openai": {
      "api_key": "sk-your-openai-key",
      "model": "gpt-4.1",
      "max_tokens": 4096,
      "temperature": 0.3
    },
    "anthropic": {
      "api_key": "sk-ant-your-key",
      "model": "claude-sonnet-4-20250514",
      "max_tokens": 4096,
      "temperature": 0.3
    },
    "gemini": {
      "api_key": "your-gemini-key",
      "model": "gemini-2.5-pro",
      "max_tokens": 4096
    }
  },
  "llm_settings": {
    "default_provider": "openai",
    "fallback_chain": ["openai", "anthropic", "gemini"],
    "enable_monitoring": true,
    "enable_caching": true
  }
}
```

### Environment Variables

```bash
# LLM Provider Keys
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-your-claude-key
DEEPSEEK_API_KEY=your-deepseek-key
GEMINI_API_KEY=your-gemini-api-key

# Default provider (optional)
DEFAULT_LLM_PROVIDER=openai
```

## Usage Examples

### Using Specific Provider

```python
# Use specific provider
response = await llm_manager.chat(
    messages=[{"role": "user", "content": "Hello!"}],
    provider="anthropic"
)

# Chat with tools
tools = [{"name": "get_weather", "description": "Get weather info"}]
response = await llm_manager.chat_with_tools(
    messages=[{"role": "user", "content": "What's the weather?"}],
    tools=tools,
    provider="openai"
)
```

### Fallback and Load Balancing

```python
# Set up fallback chain
llm_manager.set_fallback_chain(["openai", "anthropic", "gemini"])

# The manager will automatically try providers in order if one fails
response = await llm_manager.chat([
    {"role": "user", "content": "Hello!"}
])
# If OpenAI fails, it will try Anthropic, then Gemini
```

## Key Benefits

- **Provider Agnostic**: Switch between OpenAI, Anthropic, Gemini, and custom providers without code changes
- **Automatic Fallback**: Built-in fallback chains ensure high availability
- **Load Balancing**: Distribute requests across multiple provider instances
- **Comprehensive Monitoring**: Request logging, performance metrics, and error tracking
- **Easy Extension**: Add new providers with minimal code

## Monitoring and Debugging

```python
from spoon_ai.llm import get_debug_logger, get_metrics_collector

# Get monitoring instances
debug_logger = get_debug_logger()
metrics = get_metrics_collector()

# View provider statistics
stats = metrics.get_provider_stats("openai")
print(f"Success rate: {stats['success_rate']:.1f}%")
print(f"Average response time: {stats['avg_response_time']:.2f}s")

# Get recent logs
logs = debug_logger.get_recent_logs(limit=10)
for log in logs:
    print(f"{log.timestamp}: {log.provider} - {log.method}")
```

## Custom Provider Integration

```python
from spoon_ai.llm import LLMProviderInterface, register_provider

@register_provider("custom", capabilities=["chat", "completion"])
class CustomProvider(LLMProviderInterface):
    async def initialize(self, config):
        self.api_key = config["api_key"]
        # Initialize your provider

    async def chat(self, messages, **kwargs):
        # Implement chat functionality
        return LLMResponse(
            content="Custom response",
            provider="custom",
            model="custom-model",
            finish_reason="stop"
        )

    # Implement other required methods...
```

## Best Practices

1. **Use Fallback Chains**: Configure multiple providers for reliability
2. **Monitor Performance**: Track response times and error rates
3. **Cost Optimization**: Choose appropriate models for your use case
4. **Rate Limiting**: Implement proper rate limiting to avoid API limits
5. **Error Handling**: Handle provider-specific errors gracefully

## Next Steps

- **[Configuration](./configuration)** - Detailed configuration guide
- **[OpenRouter](./openrouter)** - Multi-provider access
- **[Agents](./agents)** - Using LLMs in agents
- **[Examples](./examples/basic-agent)** - See LLM providers in action
