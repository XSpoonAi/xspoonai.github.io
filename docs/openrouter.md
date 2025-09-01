---
sidebar_position: 10
---

# 🌐 OpenRouter Configuration Guide

OpenRouter provides an OpenAI-compatible API interface that enables you to access multiple LLM providers (e.g., OpenAI, Anthropic, Meta, Mistral) through a **single API key**.

This guide explains how to configure and use OpenRouter in your SpoonOS projects.

## 1. 🔑 Get Your OpenRouter API Key

- Visit [OpenRouter Platform](https://openrouter.ai/keys)
- Sign up or log in
- Create an API key from the dashboard

## 2. ⚙️ Set Environment Variables

Use the `OPENAI_API_KEY` environment variable to store your OpenRouter key.

```bash
# Linux/macOS
export OPENAI_API_KEY="sk-or-your-openrouter-api-key-here"

# Windows PowerShell
$env:OPENAI_API_KEY="sk-or-your-openrouter-api-key-here"
```

📌 **Important:**
Even though you're using OpenRouter, the variable name must be `OPENAI_API_KEY` for compatibility with most OpenAI clients.

## 3. 🧠 Use OpenRouter in Your SpoonAI Agent

You can use OpenRouter in SpoonReactAI or any agent that accepts a ChatBot-style LLM interface.

```python
from spoon_ai.chat import ChatBot
from spoon_ai.agents import SpoonReactAI

# Configuring OpenRouter-powered agent
openrouter_agent = SpoonReactAI(
    llm=ChatBot(
        model_name="anthropic/claude-sonnet-4",     # Model name from OpenRouter
        llm_provider="openai",                      # MUST be "openai"
        base_url="https://openrouter.ai/api/v1"     # OpenRouter API endpoint
    )
)
```

## 4. 📌 Key Configuration Notes

- **base_url** must be set to: `https://openrouter.ai/api/v1`

- **llm_provider** must be `"openai"` — even for Anthropic, Meta, or Mistral models
  (because OpenRouter uses the OpenAI-compatible format)

- The API key is automatically read from `OPENAI_API_KEY`

## 5. 🧪 Available Models

### Popular Model Examples

- `openai/gpt-4o` - GPT-4o model
- `openai/gpt-4.1` - GPT-4.1 model
- `anthropic/claude-sonnet-4` - Claude 4 sonnet model
- `anthropic/claude-opus-4` - Claude 4 opus model
- `deepseek/deepseek-r1` - DeepSeek R1 model
- `meta-llama/llama-3.1-405b-instruct` - Llama 3.1 405B
- `mistralai/mistral-large` - Mistral Large

For the complete list of available models, see [OpenRouter Models List](https://openrouter.ai/models)

## 6. 💰 Cost Management

OpenRouter provides transparent pricing and usage tracking:

### Check Model Pricing

```python
# Different models have different costs
cheap_model = ChatBot(
    model_name="openai/gpt-3.5-turbo",
    llm_provider="openai",
    base_url="https://openrouter.ai/api/v1"
)

premium_model = ChatBot(
    model_name="anthropic/claude-opus-4",
    llm_provider="openai", 
    base_url="https://openrouter.ai/api/v1"
)
```

### Set Usage Limits

You can set spending limits in your OpenRouter dashboard to control costs.

## 7. 🔧 Advanced Configuration

### Custom Headers

```python
from spoon_ai.chat import ChatBot

# Add custom headers for tracking
agent = SpoonReactAI(
    llm=ChatBot(
        model_name="anthropic/claude-sonnet-4",
        llm_provider="openai",
        base_url="https://openrouter.ai/api/v1",
        extra_headers={
            "HTTP-Referer": "https://your-app.com",
            "X-Title": "SpoonOS Agent"
        }
    )
)
```

### Fallback Configuration

```python
# Configure multiple providers with fallback
primary_llm = ChatBot(
    model_name="anthropic/claude-sonnet-4",
    llm_provider="openai",
    base_url="https://openrouter.ai/api/v1"
)

fallback_llm = ChatBot(
    model_name="openai/gpt-4.1",
    llm_provider="openai",
    base_url="https://openrouter.ai/api/v1"
)

# Use in agent with fallback logic
agent = SpoonReactAI(llm=primary_llm)
```

## 8. 🚀 Complete Example

Here's a complete example of setting up a SpoonOS agent with OpenRouter:

```python
import os
from spoon_ai.chat import ChatBot
from spoon_ai.agents import SpoonReactAI
from spoon_ai.tools import ToolManager

# Set up environment
os.environ["OPENAI_API_KEY"] = "sk-or-your-openrouter-key"

# Create OpenRouter-powered LLM
llm = ChatBot(
    model_name="anthropic/claude-sonnet-4",
    llm_provider="openai",
    base_url="https://openrouter.ai/api/v1",
    temperature=0.7,
    max_tokens=4096
)

# Create agent
agent = SpoonReactAI(
    llm=llm,
    system_prompt="You are a helpful AI assistant powered by OpenRouter."
)

# Use the agent
async def main():
    response = await agent.run("Explain the benefits of using OpenRouter")
    print(response)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

## 9. 🔍 Monitoring and Debugging

### Check API Usage

Monitor your usage through the OpenRouter dashboard:
- Request counts
- Token usage
- Cost breakdown by model
- Error rates

### Debug Connection Issues

```python
# Test OpenRouter connection
import requests

headers = {
    "Authorization": f"Bearer {os.getenv('OPENAI_API_KEY')}",
    "Content-Type": "application/json"
}

response = requests.get(
    "https://openrouter.ai/api/v1/models",
    headers=headers
)

if response.status_code == 200:
    print("✅ OpenRouter connection successful")
    models = response.json()
    print(f"Available models: {len(models['data'])}")
else:
    print(f"❌ Connection failed: {response.status_code}")
```

## 10. 🛠️ Troubleshooting

### Common Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Invalid API Key** | `401 Unauthorized` | Check your OpenRouter API key |
| **Model Not Found** | `404 Not Found` | Verify model name from OpenRouter docs |
| **Rate Limiting** | `429 Too Many Requests` | Implement retry logic or upgrade plan |
| **Insufficient Credits** | `402 Payment Required` | Add credits to your OpenRouter account |

### Error Handling

```python
from spoon_ai.chat import ChatBot
import logging

try:
    llm = ChatBot(
        model_name="anthropic/claude-sonnet-4",
        llm_provider="openai",
        base_url="https://openrouter.ai/api/v1"
    )
    
    response = await llm.chat([
        {"role": "user", "content": "Hello!"}
    ])
    
except Exception as e:
    logging.error(f"OpenRouter error: {e}")
    # Implement fallback logic
```

## 11. 💡 Best Practices

1. **Model Selection**: Choose models based on your use case and budget
2. **Cost Monitoring**: Regularly check usage in the OpenRouter dashboard
3. **Error Handling**: Implement proper error handling and fallbacks
4. **Rate Limiting**: Respect rate limits to avoid service interruptions
5. **Security**: Keep your API key secure and rotate it regularly

## ✅ Next Steps

Once OpenRouter is configured:

- 🧩 [Learn to build your own agent](./agents)
- 🔧 [Explore built-in tools](./builtin-tools)
- 🌐 [Integrate Web3 tools with MCP](./mcp-protocol)

## 📚 Additional Resources

- [OpenRouter Documentation](https://openrouter.ai/docs)
- [OpenRouter Models](https://openrouter.ai/models)
- [OpenRouter Pricing](https://openrouter.ai/pricing)
- [OpenRouter API Reference](https://openrouter.ai/docs/api-reference)
