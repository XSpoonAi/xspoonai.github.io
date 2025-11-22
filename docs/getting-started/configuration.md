# Configuration

SpoonOS is **env-first**. The core Python SDK only reads environment variables (including values from a `.env` file). The `spoon-cli` workflow is the only place `config.json` is read; the CLI loads that file and exports the values into the environment before starting agents.

## Configuration Priority

At runtime (latest wins):

1. Built-in defaults in the SDK  
2. Environment variables (`.env` or shell)  
3. Values exported by `spoon-cli` from `config.json` (CLI only)

## Environment Variables

Create a `.env` file in your project root:

```bash
# LLM Provider API Keys (set at least one)
GEMINI_API_KEY=your_gemini_key_here        # recommended for Quick Start
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
DEEPSEEK_API_KEY=your_deepseek_key_here
OPENROUTER_API_KEY=your_openrouter_key_here

# Optional: Default LLM Settings
DEFAULT_LLM_PROVIDER=gemini                # or openai / anthropic / deepseek / openrouter
DEFAULT_MODEL=gemini-2.5-pro
GEMINI_MAX_TOKENS=20000                    # recommended context limit for Gemini

# Web3 Configuration (only needed for on-chain tools)
WEB3_PROVIDER_URL=https://mainnet.infura.io/v3/your_project_id
PRIVATE_KEY=your_private_key_here
```

## CLI Configuration File (optional)

If you use `spoon-cli`, manage CLI-specific settings in `config.json`. The CLI exports that file into environment variables automatically; the SDK does **not** read it directly. See `docs/cli/configuration.md` for the full schema and commands.

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
