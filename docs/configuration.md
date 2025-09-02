---
sidebar_position: 3
---

# Configuration

SpoonOS uses a flexible configuration system that supports multiple setup methods. This guide will help you configure API keys, LLM providers, and agent settings.

## Configuration Methods

SpoonOS supports multiple configuration approaches:

1. **Environment Variables (.env file)** - Recommended for development
2. **CLI Configuration** - Interactive setup
3. **Direct config.json** - Advanced configurations
4. **Tool-level Configuration** - Per-tool environment variables

### Configuration Priority

SpoonOS uses a unified configuration system with the following priority:

1. **Tool-level env vars** (Highest Priority) - Specific to individual tools
2. **`config.json`** (High Priority) - Runtime configuration
3. **System environment variables** (Medium Priority) - Global settings
4. **`.env` file** (Fallback) - Initial setup values

## Method 1: Environment Variables (.env)

### Create .env File

Create a `.env` file in your project root:

```bash
# Copy the example file
cp .env.example .env
```

### Basic LLM Configuration

```bash
# LLM Provider Keys
OPENAI_API_KEY=sk-your-openai-key-here
ANTHROPIC_API_KEY=sk-ant-your-claude-key-here
DEEPSEEK_API_KEY=your-deepseek-key-here
GEMINI_API_KEY=your-gemini-api-key-here

# Default provider (optional)
DEFAULT_LLM_PROVIDER=openai
```

### Web3 Configuration

```bash
# Wallet Configuration
PRIVATE_KEY=your-wallet-private-key
RPC_URL=https://mainnet.infura.io/v3/your-project-id
CHAIN_ID=1

# Alternative RPC endpoints
ETHEREUM_RPC=https://eth-mainnet.alchemyapi.io/v2/your-key
POLYGON_RPC=https://polygon-mainnet.infura.io/v3/your-project-id
```

### Tool-specific Keys

```bash
# Search and Data Tools
TAVILY_API_KEY=your-tavily-search-key
SERP_API_KEY=your-serp-api-key

# Exchange APIs
OKX_API_KEY=your-okx-api-key
OKX_SECRET_KEY=your-okx-secret-key
OKX_API_PASSPHRASE=your-okx-passphrase
OKX_PROJECT_ID=your-okx-project-id

# Social Media
TWITTER_API_KEY=your-twitter-api-key
TWITTER_API_SECRET=your-twitter-api-secret
```

### Load Environment Variables

In your Python code:

```python
from dotenv import load_dotenv
load_dotenv(override=True)
```

## Method 2: CLI Configuration

Start the SpoonOS CLI and configure interactively:

```bash
python main.py
```

### Configure API Keys

```bash
# Set OpenAI API key
> config api_key openai sk-your-openai-key

# Set Anthropic API key
> config api_key anthropic sk-ant-your-claude-key

# Set default provider
> config default_provider openai

# View current configuration
> config
```

### Configure Agents

```bash
# Set default agent
> config default_agent trading_agent

# List available agents
> list-agents

# Load specific agent
> load-agent web_researcher
```

## Method 3: Direct config.json

For advanced configurations, edit `config.json` directly:

```json
{
  "api_keys": {
    "openai": "sk-your-openai-key",
    "anthropic": "sk-ant-your-claude-key",
    "deepseek": "your-deepseek-key",
    "gemini": "your-gemini-key"
  },
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
    }
  },
  "llm_settings": {
    "default_provider": "openai",
    "fallback_chain": ["openai", "anthropic", "gemini"],
    "enable_monitoring": true,
    "enable_caching": true
  },
  "default_agent": "trading_agent",
  "agents": {
    "trading_agent": {
      "class": "SpoonReactMCP",
      "tools": [
        {
          "name": "tavily-search",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["--yes", "tavily-mcp"],
            "env": {"TAVILY_API_KEY": "your-tavily-key"}
          }
        },
        {
          "name": "crypto_powerdata_cex",
          "type": "builtin",
          "enabled": true,
          "env": {
            "OKX_API_KEY": "${OKX_API_KEY}",
            "OKX_SECRET_KEY": "${OKX_SECRET_KEY}",
            "OKX_API_PASSPHRASE": "${OKX_API_PASSPHRASE}",
            "OKX_PROJECT_ID": "${OKX_PROJECT_ID}"
          },
          "config": {
            "timeout": 30,
            "max_retries": 3,
            "cache_duration": 300,
            "default_exchange": "binance",
            "default_timeframe": "1h",
            "max_limit": 500
          }
        },
        {
          "name": "get_token_price",
          "type": "builtin",
          "enabled": true,
          "env": {
            "RPC_URL": "${RPC_URL}"
          },
          "config": {
            "timeout": 30,
            "max_retries": 3,
            "exchange": "uniswap"
          }
        }
      ]
    }
  }
}
```

## LLM Provider Setup

### OpenAI

1. Visit [OpenAI API](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add to your configuration:

```bash
OPENAI_API_KEY=sk-your-key-here
```

### Anthropic (Claude)

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Generate an API key
3. Add to your configuration:

```bash
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### DeepSeek

1. Visit [DeepSeek Platform](https://platform.deepseek.com/)
2. Create an API key
3. Add to your configuration:

```bash
DEEPSEEK_API_KEY=your-deepseek-key
```

### OpenRouter (Multi-LLM Gateway)

For access to multiple models through one API:

```bash
OPENAI_API_KEY=sk-your-openrouter-key
OPENAI_BASE_URL=https://openrouter.ai/api/v1
```

## Tool Configuration

### MCP Tools

External tools via Model Context Protocol:

```json
{
  "name": "tavily-search",
  "type": "mcp",
  "mcp_server": {
    "command": "npx",
    "args": ["--yes", "tavily-mcp"],
    "env": {"TAVILY_API_KEY": "your-key"}
  }
}
```

### Built-in Tools

Native SpoonOS tools:

```json
{
  "name": "crypto_powerdata_cex",
  "type": "builtin",
  "enabled": true,
  "env": {
    "OKX_API_KEY": "your-key"
  }
}
```

## Verification

Test your configuration:

```bash
# Start CLI
python main.py

# Test LLM connection
> action chat "Hello, can you help me?"

# Check tool status
> action list_mcp_tools

# View configuration
> config
```

## Security Best Practices

1. **Never commit API keys** to version control
2. **Use environment variables** for sensitive data
3. **Rotate keys regularly**
4. **Use least privilege** - only grant necessary permissions
5. **Monitor usage** - track API consumption

## Troubleshooting

### Common Issues

**Invalid API Key**
```
Error: Invalid API key provided
```
**Solution**: Verify your API key is correct and has proper permissions.

**Configuration Not Found**
```
Error: No configuration file found
```
**Solution**: Create a `.env` file or run CLI configuration.

**Tool Connection Failed**
```
Error: Failed to connect to MCP server
```
**Solution**: Check tool dependencies and API keys.

## Next Steps

With configuration complete:

1. **[Quick Start](./quick-start)** - Build your first agent
2. **[Agent Development](./agents)** - Learn about agent architecture
3. **[Custom Tools](./custom-tools)** - Create your own tools

Ready to build your first agent? Let's go to the [Quick Start](./quick-start) guide! 🚀
