# Configuration

SpoonOS uses a flexible configuration system with environment variables and JSON configuration files.

## Configuration Priority

Configuration is loaded in the following order (later sources override earlier ones):

1. Default values
2. `.env` file
3. `config.json` file

## Environment Variables

Create a `.env` file in your project root:

```bash
# LLM Provider API Keys
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
GOOGLE_API_KEY=your_google_key_here

# Web3 Configuration
WEB3_PROVIDER_URL=https://mainnet.infura.io/v3/your_project_id
PRIVATE_KEY=your_private_key_here

# Optional: Default LLM Settings
DEFAULT_LLM_PROVIDER=openai
DEFAULT_MODEL=gpt-4
```

## Runtime Configuration

Create a `config.json` file for dynamic configuration:

```json
{
  "llm": {
    "provider": "openai",
    "model": "gpt-4.1",
    "temperature": 0.3
  },
  "tools": {
    "enabled": ["crypto_tools", "web3_tools", "mcp_tools"]
  },
  "web3": {
    "default_chain": "ethereum",
    "gas_limit": 21000
  }
}
```

## API Key Setup

### OpenAI
1. Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add to your `.env` file

### Anthropic
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Generate an API key
3. Add to your `.env` file

### Google (Gemini)
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create an API key
3. Add to your `.env` file

## Verification

Test your configuration:

```bash
python -c "from spoon_ai.utils.config_manager import ConfigManager; print('✅ Configuration loaded successfully')"
```

The framework automatically validates your configuration and provides helpful error messages if any issues are detected.

## Next Steps

- [Quick Start](./quick-start.md) - Build your first agent
- [Core Concepts](../core-concepts/agents.md) - Learn about agents
