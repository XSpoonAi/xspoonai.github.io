---
sidebar_position: 8
---

# 🛠️ SpoonOS CLI Usage Guide

SCDF CLI is a powerful command-line tool that provides rich functionality, including interacting with AI agents, managing chat history, processing cryptocurrency transactions, and loading documents.

## 📦 Prerequisites

Before starting the CLI, ensure you have:

1. **Python Environment**: Python 3.8+ installed
2. **Dependencies**: Install required packages

   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Variables**: Configure API keys (see Configuration section)

## 🚀 Start the CLI

Launch the CLI from your project root directory:

```bash
python main.py
```

This will start the interactive CLI session where you can execute commands.

## 📋 Available Agents

The CLI supports these built-in agents:

| Agent | Aliases | Type | Description |
|-------|---------|------|-------------|
| `react` | `spoon_react` | SpoonReactAI | Standard blockchain analysis agent |
| `spoon_react_mcp` | - | SpoonReactMCP | MCP-enabled blockchain agent |

**Note**: Additional custom agents can be configured in `config.json`.

### Loading Agents

```bash
# List all available agents
> list-agents

# Load built-in agent by name
> load-agent react
> load-agent spoon_react_mcp

# Load agent by alias
> load-agent spoon_react

# Check currently loaded agent
> list-agents
```

## Basic Commands

| Command             | Aliases           | Description                                                                                                               |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `help`              | `h`, `?`          | Display help information                                                                                                  |
| `exit`              | `quit`, `q`       | Exit the CLI                                                                                                              |
| `system-info`       | `sysinfo`, `status`, `info` | Display comprehensive system information, environment status, and health checks                                    |
| `load-agent <n>` | `load`            | Load an agent with the specified name                                                                                     |
| `list-agents`       | `agents`          | List all available agents                                                                                                 |
| `config`            | `cfg`, `settings` | Configure settings (such as API keys)                                                                                     |
| `reload-config`     | `reload`          | Reload the current agent's configuration                                                                                  |
| `action <action>`   | `a`               | Perform a specific action using the current agent. For example, `action react` to start a step-by-step reasoning session. |

### Chat Management Commands

| Command          | Aliases | Description                         |
| ---------------- | ------- | ----------------------------------- |
| `new-chat`       | `new`   | Start a new chat (clear history)    |
| `list-chats`     | `chats` | List available chat history records |
| `load-chat <ID>` | -       | Load a specific chat history record |

### Cryptocurrency-Related Commands

| Command                                       | Aliases  | Description                            |
| --------------------------------------------- | -------- | -------------------------------------- |
| `transfer <address> <amount> <token>`         | `send`   | Transfer tokens to a specified address |
| `swap <source_token> <target_token> <amount>` | -        | Exchange tokens using an aggregator    |
| `token-info <address>`                        | `token`  | Get token information by address       |
| `token-by-symbol <symbol>`                    | `symbol` | Get token information by symbol        |

### Document Management Commands

| Command                      | Aliases | Description                                                      |
| ---------------------------- | ------- | ---------------------------------------------------------------- |
| `load-docs <directory_path>` | `docs`  | Load documents from the specified directory to the current agent |
| `delete-docs [agent_name]` | - | Delete documents from the current agent or specified agent |

### Toolkit Management Commands

| Command | Aliases | Description |
| ------- | ------- | ----------- |
| `list-toolkit-categories` | `toolkit-categories`, `categories` | List all available toolkit categories |
| `list-toolkit-tools <category>` | `toolkit-tools` | List tools in a specific category |
| `load-toolkit-tools <categories>` | `load-tools` | Load toolkit tools from specified categories |

### LLM Provider Management Commands

| Command         | Aliases           | Description                                  |
| ----------------| ----------------- | -------------------------------------------- |
| `llm-status`    | `llm`, `providers`| Show LLM provider configuration and availability |
| `config api_key <provider> <key>` | - | Set provider API key (stored in config.json) |
| `migrate-config` | `migrate` | Migrate legacy configuration to new unified format |
| `check-config` | `check-migration` | Check if configuration needs migration |
| `validate-config` | `validate` | Validate current configuration and check for issues |

### Social Media Commands

| Command | Aliases | Description |
| ------- | ------- | ----------- |
| `telegram` | `tg` | Start the Telegram client |

## ⚙️ Configuration Management

### Environment Variables

Configure required environment variables before starting the CLI:

```bash
# LLM Provider API Keys (at least one required)
export OPENAI_API_KEY="sk-your-openai-key"
export ANTHROPIC_API_KEY="sk-ant-your-anthropic-key"
export DEEPSEEK_API_KEY="your-deepseek-key"
export GEMINI_API_KEY="your-gemini-key"

# Cryptocurrency APIs (for crypto operations)
export OKX_API_KEY="your-okx-api-key"
export OKX_SECRET_KEY="your-okx-secret-key"
export OKX_API_PASSPHRASE="your-okx-passphrase"
export OKX_PROJECT_ID="your-okx-project-id"

# Price APIs (for token price lookups)
export COINGECKO_API_KEY="your-coingecko-key"
export BITQUERY_API_KEY="your-bitquery-key"

# Blockchain Configuration
export RPC_URL="https://eth.llamarpc.com"
export PRIVATE_KEY="your-wallet-private-key"
export CHAIN_ID="1"

# Social Media (optional)
export TELEGRAM_BOT_TOKEN="your-telegram-bot-token"
export GITHUB_TOKEN="your-github-token"

# Security
export SECRET_KEY="your-jwt-secret-key"

# Optional: Debug and Logging
export DEBUG=true
export LOG_LEVEL=debug
```

### Agent Configuration

Custom agents can be configured in `spoon-core/config.json`. The basic structure is:

```json
{
  "default_agent": "react",
  "agents": {
    "my_custom_agent": {
      "class": "SpoonReactAI",
      "aliases": ["my", "custom"],
      "description": "My custom agent",
      "config": {
        "max_steps": 10,
        "tool_choice": "auto"
      },
      "tools": ["crypto_tools"]
    }
  }
}
```

For MCP-enabled agents, additional configuration is needed (see examples below).

### Configuration Commands

```bash
# Reload configuration after changes
> reload-config

# Check current configuration
> config

# Update API keys (stored in config.json)
> config api_key openai sk-your-openai-key

# LLM Provider status (see provider selection and availability)
> llm-status
```

### System Diagnostics

The `system-info` command provides comprehensive system diagnostics and health checks:

```bash
# Display full system information
> system-info

# Using aliases
> sysinfo
> status
> info
```

This command shows:

- **System Details**: Platform, Python version, architecture, timestamp
- **Environment Variables**: Status of all API keys and configuration (with security masking)
- **Configuration Status**: Validates config.json and detects placeholder values
- **Agent Status**: Current agent information, tools, and LLM provider
- **Health Checks**: Automated scoring with recommendations for improvements

## CLI Usage Examples

### 1. Using Various Commands

#### Basic Command Usage

```bash
# View help
> help
> h
> ?

# View system information
> system-info
> sysinfo
> status
> info

# Exit CLI
> exit
> quit
> q
```

#### Configuration Management

```bash
# View current configuration
> config
Current configuration:
API_KEY: sk-***********
MODEL: gpt-4.1
DEFAULT_AGENT: trading_agent
...

# Modify configuration
> config API_KEY sk-your-new-api-key
> config DEFAULT_AGENT my_custom_agent
> config MODEL gpt-4.1

# Reload configuration
> reload-config
> reload
```

#### Agent Management

```bash
# List all available agents
> list-agents
> agents

Available agents:
- react (SpoonReactAI) - Standard blockchain analysis agent
- spoon_react_mcp (SpoonReactMCP) - MCP-enabled blockchain agent
- trading_agent (Custom) - Crypto trading specialist
- web3_agent (Custom) - Web3 interaction agent

# Load agents
> load-agent react
> load-agent spoon_react_mcp
> load-agent trading_agent

# Load using alias
> load spoon_react
```

### 2. Using Custom Built-in Agents

#### Creating Custom Agent Configuration

Define custom agents in `config.json`:

```json
{
  "agents": {
    "my_research_agent": {
      "class": "SpoonReactAI",
      "aliases": ["research", "analyst"],
      "description": "Research and analysis specialist",
      "config": {
        "max_steps": 15,
        "temperature": 0.3,
        "system_prompt": "You are a research analyst..."
      },
      "tools": [
        {
          "name": "web_search",
          "type": "builtin",
          "enabled": true
        },
        {
          "name": "data_analysis",
          "type": "builtin",
          "enabled": true
        }
      ]
    },
    "crypto_trader": {
      "class": "SpoonReactMCP",
      "aliases": ["trader", "crypto"],
      "description": "Cryptocurrency trading agent",
      "config": {
        "max_steps": 20,
        "temperature": 0.1
      },
      "tools": [
        {
          "name": "crypto_powerdata_cex",
          "type": "builtin",
          "enabled": true,
          "env": {
            "OKX_API_KEY": "your_okx_api_key",
            "OKX_SECRET_KEY": "your_okx_secret_key"
          }
        }
      ]
    }
  }
}
```

#### Using Custom Agents

```bash
# Load custom agent
> load-agent my_research_agent
Agent 'my_research_agent' loaded successfully

# Load using alias
> load research
> load analyst

# Interact with agent
> action chat "Research the latest AI trends"
> action react "Step-by-step analysis of DeFi protocols"

# Chat management
> action new          # Start new chat (clear history)
> action list         # List available chat histories
> action load chat_001  # Load specific chat history

# MCP tools (if supported by current agent)
> action list_mcp_tools
```

### 3. Using Built-in Tools with Agents

#### Configuring Built-in Tools

Built-in tools are configured in the agent's configuration and loaded automatically when the agent starts:

```json
{
  "agents": {
    "crypto_agent": {
      "class": "SpoonReactAI",
      "description": "Crypto analysis agent with built-in tools",
      "config": {
        "max_steps": 10,
        "temperature": 0.3
      },
      "tools": [
        {
          "name": "crypto_powerdata_cex",
          "type": "builtin",
          "enabled": true,
          "env": {
            "OKX_API_KEY": "${OKX_API_KEY}",
            "OKX_SECRET_KEY": "${OKX_SECRET_KEY}",
            "OKX_API_PASSPHRASE": "${OKX_API_PASSPHRASE}"
          },
          "config": {
            "timeout": 30,
            "max_retries": 3
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
            "max_retries": 3
          }
        }
      ]
    }
  }
}
```

#### Using Built-in Tools

```bash
# Load agent with built-in tools
> load-agent crypto_agent

# Use built-in crypto tools
> action chat "Get Bitcoin price from CEX data"
> action chat "Analyze ETH market trends"

# Check which tools are available
> list-toolkit-tools crypto
```

### 4. Advanced Features

#### Chat History Management

```bash
# Start new chat session
> action new

# List available chat histories
> action list

# Load specific chat history
> action load chat_20250101_143022

# Interactive chat mode (without arguments)
> action chat
```

#### System Information

```bash
# Get comprehensive system information
> system-info

# Check LLM provider status
> llm-status

# Validate configuration
> validate-config
```

### 5. Using System Custom Tool Configuration

#### Built-in Tool Configuration

```json
{
  "agents": {
    "full_featured_agent": {
      "class": "SpoonReactMCP",
      "tools": [
        {
          "name": "crypto_powerdata_cex",
          "type": "builtin",
          "enabled": true,
          "config": {
            "timeout": 30,
            "max_retries": 3,
            "cache_duration": 300
          },
          "env": {
            "OKX_API_KEY": "your_okx_api_key",
            "OKX_SECRET_KEY": "your_okx_secret_key",
            "OKX_API_PASSPHRASE": "your_okx_passphrase"
          }
        },
        {
          "name": "chainbase_tools",
          "type": "builtin",
          "enabled": true,
          "config": {
            "default_chain": "ethereum",
            "rate_limit": 100
          },
          "env": {
            "CHAINBASE_API_KEY": "your_chainbase_key"
          }
        },
        {
          "name": "social_media_monitor",
          "type": "builtin",
          "enabled": true,
          "config": {
            "platforms": ["twitter", "reddit"],
            "sentiment_threshold": 0.7
          },
          "env": {
            "TWITTER_API_KEY": "your_twitter_key",
            "REDDIT_CLIENT_ID": "your_reddit_id"
          }
        }
      ]
    }
  }
}
```

#### Using System Custom Tools

```bash
# Load agent configured with custom tools
> load-agent full_featured_agent

# View agent's tool configuration
> action list_tools
Available tools:
- crypto_powerdata_cex: CEX market data (builtin)
- chainbase_tools: Blockchain data (builtin)
- social_media_monitor: Social sentiment (builtin)

# Use specific tools
> action chat "Get Bitcoin price from CEX data"
> action chat "Check Ethereum transaction for address 0x123..."
> action chat "Monitor social sentiment for Solana"

# Reload configuration to apply changes
> reload-config
```

#### LLM Provider Management

1. List available providers:

```bash
> llm-status
Available LLM providers:
✅ openai (gpt-4.1) - Healthy
✅ anthropic (claude-sonnet-4-20250514) - Healthy
❌ gemini (gemini-2.5-pro) - Unhealthy
Default provider: openai
```

1. Show detailed LLM status:

```bash
> llm-status
Current Default Provider: openai
Available Providers (by priority): openai, anthropic, gemini
...

Provider Details:
  OPENAI: Available
    Model: gpt-4.1
    Configured via: config.json
  ANTHROPIC: Available
    Model: claude-sonnet-4-20250514
    Configured via: config.json
```

#### Basic Interaction

1. Start a new chat:

```bash
> action chat
New chat session started
```

1. Directly input text to interact with the AI agent:

```bash
> Hello, please introduce yourself
[AI reply will be displayed here]
```

#### Cryptocurrency Operations

1. View token information:

```bash
> token-by-symbol SPO
Token information:
Name: SpoonOS not a meme
Symbol:SPO
Address: 0x...
Decimals: 18
...
```

1. Transfer operation:

```bash
> transfer 0x123... 0.1 SPO
Preparing to transfer 0.1 SPO to 0x123...
[Transfer details will be displayed here]
```

## 🔧 Troubleshooting

### Common Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Agent not found** | `Agent 'name' not found` | Use `list-agents` to check available agents, verify spelling |
| **Tool not available** | `Tool 'name' not found` | Check agent configuration, verify tool is enabled |
| **API key missing** | Authentication errors | Set required environment variables (OPENAI_API_KEY, OKX_API_KEY, etc.) |
| **Configuration error** | JSON parsing errors | Use `validate-config` to check configuration syntax |
| **Agent loading failed** | Import or initialization errors | Check Python dependencies and environment setup |

### Debug Mode

Enable detailed logging:

```bash
export DEBUG=true
export LOG_LEVEL=debug
python main.py
```

### Configuration Validation

1. **Check JSON syntax**: Use a JSON validator for `config.json`
2. **Verify required fields**: Ensure all required parameters are present
3. **Check environment variables**: Confirm all API keys are set
4. **Validate agent configuration**: Use `validate-config` command
5. **Test LLM connectivity**: Use `llm-status` to verify provider connections

## ✅ Next Steps

To extend CLI usage:

- 🤖 [Explore agent capabilities](./agents)
- 🔧 [Learn about built-in tools](./builtin-tools)
- ⚙️ [Configure agents and tools](./configuration)
- 📊 [Use system diagnostics](./#system-diagnostics)
