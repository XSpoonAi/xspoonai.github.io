---
sidebar_position: 8
---

# 🛠️ SpoonOS CLI Usage Guide

SCDF CLI is a powerful command-line tool that provides rich functionality, including interacting with AI agents, managing chat history, processing cryptocurrency transactions, and loading documents.

## 📦 Prerequisite: Start the MCP Server

Before starting the CLI, make sure the MCP (Message Connectivity Protocol) server is running:

```bash
python -m spoon_ai.tools.mcp_tools_collection
```

## 🚀 Start the CLI

Once the MCP server is running, launch the CLI:

```bash
python main.py
```

## 📋 Available Agents

The CLI includes these built-in agents:

| Agent | Aliases | Type | MCP Support | Description |
|-------|---------|------|-------------|-------------|
| `react` | `spoon_react` | SpoonReactAI | ❌ | Standard blockchain analysis agent |
| `spoon_react_mcp` | - | SpoonReactMCP | ✅ | MCP-enabled blockchain agent |

**Note**: Additional agents can be configured in `config.json` (see examples below).

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

Set required API keys before starting:

```bash
# Required for web search (Tavily MCP)
export TAVILY_API_KEY="your-tavily-api-key"

# Required for web scraping (Firecrawl MCP)
export FIRECRAWL_API_KEY="your-firecrawl-api-key"

# Required for LLM functionality
export OPENAI_API_KEY="your-openai-api-key"

# Optional: Debug mode
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
> action chat "Analyze Bitcoin market conditions"

# Perform specific action
> action react "Step-by-step analysis of DeFi protocols"
```

### 3. Using Custom Built-in MCP Tools

#### Configuring Built-in MCP Tools

```json
{
  "agents": {
    "mcp_agent": {
      "class": "SpoonReactMCP",
      "tools": [
        {
          "name": "tavily_search",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["--yes", "tavily-mcp"],
            "env": {"TAVILY_API_KEY": "your-tavily-key"},
            "transport": "stdio"
          }
        },
        {
          "name": "context7_docs",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "url": "https://mcp.context7.com/mcp",
            "transport": "http",
            "timeout": 30,
            "headers": {
              "User-Agent": "SpoonOS-CLI/1.0"
            }
          }
        },
        {
          "name": "firecrawl_scraper",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "url": "https://mcp.firecrawl.dev/{FIRECRAWL_API_KEY}/sse",
            "transport": "sse",
            "timeout": 60,
            "reconnect_interval": 5,
            "headers": {
              "Accept": "text/event-stream",
              "User-Agent": "SpoonOS-CLI/1.0",
              "Cache-Control": "no-cache"
            }
          }
        },
        {
          "name": "github_tools",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-github"],
            "env": {"GITHUB_TOKEN": "your-github-token"},
            "transport": "stdio"
          }
        }
      ]
    }
  }
}
```

#### Using MCP Tools

```bash
# Load MCP agent
> load-agent mcp_agent

# List available MCP tools
> action list_mcp_tools
Available MCP tools:
- tavily_search: Web search using Tavily API
- context7_docs: Access Context7 documentation and libraries
- firecrawl_scraper: Advanced web scraping and content extraction
- github_tools: GitHub repository management

# Using MCP Tools for Search
> action chat "Search for latest SpoonOS updates"
> action chat "Find GitHub repositories related to AI agents"
> action chat "Look up Context7 documentation for library information"
> action chat "Scrape content from a website using Firecrawl"

# List available MCP tools
> action list_mcp_tools
Available MCP tools:
- tavily_search: Web search using Tavily API
- context7_docs: Access Context7 documentation and libraries
- firecrawl_scraper: Advanced web scraping and content extraction
- github_tools: GitHub repository management
```

### 4. Interaction with External MCP

#### MCP Tool Usage

#### Available MCP Tools

The CLI supports MCP (Model Context Protocol) tools that are configured in the agent configuration. These tools provide additional capabilities like web search, documentation access, and data processing.

To see what MCP tools are available with your current agent:

```bash
> action list_mcp_tools
```

MCP tools are automatically integrated with the agent's capabilities and can be used through natural language commands:

```bash
> action chat "Search for latest SpoonOS updates"
> action chat "Find GitHub repositories related to AI agents"
> action chat "Look up Context7 documentation for library information"
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
| **MCP connection failed** | `Failed to create transport` | Check API keys, verify MCP server is running |
| **Tool not available** | `Tool 'name' not found` | Check `tool` config, verify MCP server enabled |
| **API key missing** | Authentication errors | Set environment variables: `TAVILY_API_KEY`, `OPENAI_API_KEY` |

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
3. **Test MCP servers**: Verify external services are accessible
4. **Check environment variables**: Confirm all API keys are set

## ✅ Next Steps

To extend CLI usage:

- 🤖 [Explore agent capabilities](./agents)
- 🔧 [Learn about built-in tools](./builtin-tools)
- 🌐 [Use Web3 tools via MCP](./mcp-protocol)
