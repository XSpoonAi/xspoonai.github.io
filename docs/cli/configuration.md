# CLI Configuration

The  uses a flexible, multi-layered configuration system that allows you to customize behavior through various methods. This guide covers all configuration options and methods.

## Configuration Hierarchy

Configurations are applied in the following order (later sources override earlier ones):

1. **Built-in defaults** - Predefined sensible defaults
2. **Global config file** - `~/.spoon/config.json` or `~/.config/spoon/config.json`
3. **Project config file** - `./config.json` in current directory
4. **Environment variables** - Shell environment variables
5. **Command-line arguments** - Flags and options passed to commands

## Configuration File

The primary configuration method is through a JSON configuration file. Create `config.json` in your project root or home directory.

### Basic Configuration

```json
{
  "default_agent": "react",
  "api_keys": {
    "openai": "sk-your-openai-key-here",
    "anthropic": "sk-ant-your-anthropic-key-here"
  },
  "agents": {
    "my_agent": {
      "class_name": "SpoonReactAI",
      "description": "My custom agent",
      "config": {
        "llm_provider": "openai",
        "model_name": "gpt-4",
        "temperature": 0.7
      },
      "tools": ["web_search", "calculator"]
    }
  }
}
```

### Advanced Configuration

```json
{
  "default_agent": "react",
  "api_keys": {
    "openai": "sk-...",
    "anthropic": "sk-ant-...",
    "deepseek": "sk-...",
    "gemini": "your-gemini-key"
  },
  "agents": {
    "react": {
      "class_name": "SpoonReactAI",
      "description": "Standard React agent",
      "aliases": ["r"],
      "config": {
        "llm_provider": "anthropic",
        "model_name": "claude-3-sonnet-20240229",
        "temperature": 0.7,
        "max_tokens": 4000
      },
      "tools": ["web_search", "file_operations", "calculator"]
    },
    "mcp_agent": {
      "class_name": "SpoonReactMCP",
      "description": "Agent with MCP support",
      "config": {
        "llm_provider": "openai",
        "model_name": "gpt-4-turbo-preview"
      },
      "mcp_servers": ["filesystem", "github"]
    }
  },
  "mcp_servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Documents"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    },
    "slack": {
      "command": "uvx",
      "args": ["mcp-server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-..."
      }
    }
  },
  "llm": {
    "fallback_chain": ["anthropic", "openai", "deepseek"],
    "timeout": 30,
    "retry_attempts": 3
  },
  "logging": {
    "level": "INFO",
    "file": "spoon_cli.log",
    "max_file_size": "10MB",
    "backup_count": 5
  }
}
```

## Environment Variables

Environment variables provide an alternative way to configure sensitive information like API keys.

### LLM Provider API Keys

```bash
# Primary LLM providers
export OPENAI_API_KEY="sk-proj-..."
export ANTHROPIC_API_KEY="sk-ant-api03-..."
export DEEPSEEK_API_KEY="sk-..."

# Additional providers
export GEMINI_API_KEY="AIza..."
export OPENROUTER_API_KEY="sk-or-v1-..."
export TAVILY_API_KEY="tvly-..."
```

### Blockchain Configuration

```bash
export PRIVATE_KEY="0x..."
export RPC_URL="https://mainnet.infura.io/v3/YOUR_PROJECT_ID"
export CHAIN_ID="1"
export SCAN_URL="https://etherscan.io"
```

### Application Settings

```bash
export SPOON_CLI_CONFIG_FILE="/path/to/custom/config.json"
export SPOON_CLI_LOG_LEVEL="DEBUG"
export SPOON_CLI_DEFAULT_AGENT="my_agent"
```

## Configuration Management Commands

The CLI provides built-in commands to manage configuration:

### View Configuration

```bash
# Start spoon-cli and run:
# Show all configuration
config

# Show specific key
config api_keys.openai

# Show LLM status
llm-status
```

### Modify Configuration

```bash
# Start spoon-cli and run:
# Set API key
config api_key openai "sk-your-key"

# Set configuration value
config default_agent "my_custom_agent"

# Set nested configuration
config llm.timeout 60
```

### Configuration Validation

```bash
# Start spoon-cli and run:
# Validate current configuration
validate-config

# Check for migration needs
check-config

# Migrate legacy configuration
# Start spoon-cli and run:
migrate-config
```

## Configuration Sections

### Agents Configuration

Define custom agents with specific configurations:

```json
{
  "agents": {
    "crypto_trader": {
      "class_name": "SpoonReactAI",
      "description": "Cryptocurrency trading assistant",
      "config": {
        "llm_provider": "anthropic",
        "model_name": "claude-3-sonnet-20240229",
        "temperature": 0.3,
        "max_tokens": 2000
      },
      "tools": [
        "crypto_price_lookup",
        "dex_swap",
        "wallet_balance",
        "market_data"
      ]
    }
  }
}
```

### MCP Servers Configuration

Configure Model Context Protocol servers for extended capabilities:

```json
{
  "mcp_servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/allowed/path"],
      "env": {}
    },
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git", "--repository", "/path/to/repo"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    }
  }
}
```

### LLM Configuration

Configure LLM provider settings and fallback chains:

```json
{
  "llm": {
    "default_provider": "anthropic",
    "fallback_chain": ["anthropic", "openai", "deepseek"],
    "timeout": 30,
    "retry_attempts": 3,
    "providers": {
      "openai": {
        "base_url": null,
        "organization": null
      },
      "anthropic": {
        "max_tokens": 4096
      }
    }
  }
}
```

## Configuration Profiles

Use different configurations for different environments:

```json
{
  "profiles": {
    "development": {
      "default_agent": "debug_agent",
      "llm": {
        "timeout": 60,
        "retry_attempts": 5
      }
    },
    "production": {
      "default_agent": "production_agent",
      "logging": {
        "level": "WARNING"
      }
    }
  }
}
```

Activate a profile:

```bash
export SPOON_CLI_PROFILE="production"

# Then start spoon-cli with the profile active
```

## Configuration File Locations

The CLI searches for configuration files in the following order:

1. **Project-specific**: `./config.json`
2. **User-specific**: `~/.spoon/config.json`
3. **System-wide**: `/etc/spoon/config.json`
4. **XDG Base Directory**: `~/.config/spoon/config.json`

## Security Best Practices

### API Keys Management

1. **Never commit API keys** to version control
2. **Use environment variables** for sensitive data
3. **Rotate keys regularly**
4. **Use different keys** for different environments

### File Permissions

```bash
# Set restrictive permissions on config files
chmod 600 config.json
chmod 600 .env
```

### Environment Separation

Use different configurations for different environments:

```bash
# Development
cp config.json config.dev.json
export SPOON_CLI_CONFIG_FILE="config.dev.json"

# Production
cp config.json config.prod.json
export SPOON_CLI_CONFIG_FILE="config.prod.json"
```

## Troubleshooting Configuration

### Common Issues

1. **Configuration not loading**
   ```bash
# Start spoon-cli and run:
validate-config
# Check file syntax and permissions
   ```

2. **API keys not working**
   ```bash
# Start spoon-cli and run:
llm-status
# Verify key format and validity
   ```

3. **MCP servers not connecting**
   ```bash
# Start spoon-cli and run:
validate-config --check-servers
# Check server commands and environment variables
   ```

### Debug Configuration

Enable debug logging to troubleshoot configuration issues:

```bash
export SPOON_CLI_DEBUG=1
# Start spoon-cli and run:
config
```

## Next Steps

After configuring :
- [Basic Usage](./basic-usage.md) - Learn basic CLI operations
- [Advanced Features](./advanced-features.md) - Explore advanced capabilities
- [Troubleshooting](./troubleshooting.md) - Solve common issues

