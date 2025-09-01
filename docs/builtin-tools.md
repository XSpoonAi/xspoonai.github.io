---
sidebar_position: 7
---

# Built-in Tools Reference

This document lists all available built-in tools in SpoonOS. These tools are part of the spoon-toolkit and can be used directly in agent configurations without requiring external MCP servers.

**Important**: Built-in tools support flexible configuration through:

1. **Environment Variables** (traditional method)
2. **Tool-level Configuration** (new unified approach)
3. **Hybrid Configuration** (combination of both)

Make sure to set the required environment variables in your `.env` file or configure them directly in tool configurations.

## Environment Variables Setup

- **DESEARCH_API_KEY**: For Desearch AI search tools

Before using built-in tools, configure the required environment variables:

```bash
# Crypto PowerData (for DEX data via OKX API)
OKX_API_KEY=your_okx_api_key
OKX_SECRET_KEY=your_okx_secret_key
OKX_API_PASSPHRASE=your_okx_api_passphrase
OKX_PROJECT_ID=your_okx_project_id

# Chainbase API
CHAINBASE_API_KEY=your_chainbase_api_key

# ThirdWeb API
THIRDWEB_CLIENT_ID=your_thirdweb_client_id

# GoPlusLabs Security API
GO_PLUS_LABS_APP_KEY=your_goplus_api_key
GO_PLUS_LABS_APP_SECRET=your_goplus_secret

# Storage Services
AIOZ_ACCESS_KEY=your_aioz_access_key
AIOZ_SECRET_KEY=your_aioz_secret_key
FOUREVERLAND_ACCESS_KEY=your_foureverland_access_key
FOUREVERLAND_SECRET_KEY=your_foureverland_secret_key
OORT_ACCESS_KEY=your_oort_access_key
OORT_SECRET_KEY=your_oort_secret_key

# Social Media
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
GITHUB_TOKEN=your_github_token

# Blockchain RPC
RPC_URL=your_ethereum_rpc_url
```

## Crypto Tools

### PowerData Tools
Advanced crypto market data from PowerData API:

- **`crypto_powerdata_cex`** - CEX market data and analytics
- **`crypto_powerdata_dex`** - DEX market data and analytics
- **`crypto_powerdata_indicators`** - Technical indicators and analysis
- **`crypto_powerdata_price`** - Real-time price data

#### Configuration
```json
{
  "name": "crypto_powerdata_cex",
  "type": "builtin",
  "description": "Crypto PowerData CEX market data",
  "enabled": true,
  "env": {
    "OKX_API_KEY": "your_okx_api_key",
    "OKX_SECRET_KEY": "your_okx_secret_key",
    "OKX_API_PASSPHRASE": "your_okx_api_passphrase",
    "OKX_PROJECT_ID": "your_okx_project_id"
  },
  "config": {
    "timeout": 30,
    "max_retries": 3
  }
}
```

**Environment Variables Required:**

- `OKX_API_KEY`, `OKX_SECRET_KEY`, `OKX_API_PASSPHRASE`, `OKX_PROJECT_ID` (for DEX data)
- Can be set in tool configuration via `env` field or system environment variables

### Basic Crypto Data Tools
Core cryptocurrency data and analysis tools:

- **`get_token_price`** - Get current token prices
- **`get_24h_stats`** - 24-hour trading statistics
- **`get_kline_data`** - Candlestick/K-line chart data
- **`price_threshold_alert`** - Price alert monitoring
- **`lp_range_check`** - Liquidity pool range checking
- **`sudden_price_increase`** - Sudden price movement detection
- **`lending_rate_monitor`** - DeFi lending rate monitoring
- **`crypto_market_monitor`** - General market monitoring
- **`predict_price`** - Price prediction analysis
- **`token_holders`** - Token holder analysis
- **`trading_history`** - Trading history analysis
- **`uniswap_liquidity`** - Uniswap liquidity pool analysis
- **`wallet_analysis`** - Wallet behavior analysis

## Data Platform Tools

### Chainbase Tools
Blockchain data from Chainbase API:

- **`get_latest_block_number`** - Latest block information
- **`get_block_by_number`** - Block details by number
- **`get_transaction_by_hash`** - Transaction details by hash
- **`get_account_transactions`** - Account transaction history
- **`contract_call`** - Smart contract function calls
- **`get_account_tokens`** - Account token holdings
- **`get_account_nfts`** - Account NFT holdings
- **`get_account_balance`** - Account balance information
- **`get_token_metadata`** - Token metadata lookup

### ThirdWeb Tools
Web3 development tools via ThirdWeb API:

- **`get_contract_events`** - Contract event logs
- **`get_multichain_transfers`** - Cross-chain transfer data
- **`get_transactions`** - Transaction data
- **`get_contract_transactions`** - Contract-specific transactions
- **`get_contract_transactions_by_signature`** - Transactions by function signature
- **`get_blocks`** - Block information
- **`get_wallet_transactions`** - Wallet transaction history

## Storage Tools

Decentralized storage solutions:

- **`aioz_storage`** - AIOZ decentralized storage
- **`foureverland_storage`** - 4EVERLAND storage platform
- **`oort_storage`** - OORT decentralized storage

## Social Media Tools

Social platform integrations:

- **`discord_tool`** - Discord bot integration
- **`email_tool`** - Email functionality
- **`telegram_tool`** - Telegram bot integration
- **`twitter_tool`** - Twitter/X integration

## Usage Examples

### Trading Agent with Multiple Tools
```json
{
  "trading_agent": {
    "class": "SpoonReactAI",
    "description": "Comprehensive trading agent",
    "tools": [
      {
        "name": "crypto_powerdata_cex",
        "type": "builtin",
        "description": "CEX market data",
        "enabled": true,
        "env": {
          "OKX_API_KEY": "your_okx_api_key",
          "OKX_SECRET_KEY": "your_okx_secret_key",
          "OKX_API_PASSPHRASE": "your_okx_api_passphrase",
          "OKX_PROJECT_ID": "your_okx_project_id"
        }
      },
      {
        "name": "get_token_price",
        "type": "builtin",
        "description": "Basic price lookup",
        "enabled": true,
        "env": {
          "RPC_URL": "https://eth.llamarpc.com"
        }
      }
    ]
  }
}
```

## Important Notes

1. **Environment Variables**: API keys and credentials can be configured via environment variables or tool-level `env` configuration
2. **Tool-level Configuration**: The new unified configuration system allows setting environment variables directly in tool configurations
3. **Priority Order**: Tool-level environment variables override system environment variables
4. **Dependencies**: Some tools may require additional Python packages to be installed
5. **Rate Limits**: Be aware of API rate limits when configuring multiple tools
6. **Error Handling**: Tools will gracefully handle missing environment variables with clear error messages

## Troubleshooting

### Missing API Keys
If you see errors like "Missing CHAINBASE_API_KEY in environment variables!", make sure to:

1. Add the required environment variable to your `.env` file
2. Restart your application to load the new environment variables
3. Check that the variable name matches exactly (case-sensitive)

### Tool Not Working
If a tool isn't working as expected:

1. Check that all required environment variables are set
2. Verify your API keys are valid and have the necessary permissions
3. Check the tool's specific documentation in the spoon-toolkit repository

For more information on tool configuration, see the [Configuration Guide](./configuration).

## Agent Configuration

### Using Built-in Tools in Agents

Built-in tools can be configured in agents through the unified configuration system. Here's how to set up an agent with built-in tools:

#### 1. Configuration File Setup

Create or update your `config.json` file with agent and tool configurations:

```json
{
  "api_keys": {
    "DESEARCH_API_KEY": "your_desearch_api_key",
    "OKX_API_KEY": "your_okx_api_key",
    "OKX_SECRET_KEY": "your_okx_secret_key",
    "OKX_API_PASSPHRASE": "your_okx_passphrase",
    "OKX_PROJECT_ID": "your_okx_project_id"
  },
  "agents": {
    "crypto_analyst": {
      "class": "SpoonReactAI",
      "description": "Crypto analysis agent with comprehensive market data tools",
      "aliases": ["crypto", "analyst"],
      "config": {
        "max_steps": 15,
        "tool_choice": "auto"
      },
      "tools": [
        {
          "name": "crypto_price_tool",
          "type": "builtin",
          "description": "Real-time cryptocurrency price tracking",
          "enabled": true,
          "config": {
            "timeout": 30,
            "max_retries": 3
          }
        },
        {
          "name": "desearch_ai_search",
          "type": "builtin",
          "description": "AI-powered multi-platform search",
          "enabled": true,
          "env": {
            "DESEARCH_API_KEY": "your_desearch_api_key"
          },
          "config": {
            "platforms": ["web", "reddit", "wikipedia"],
            "limit": 10
          }
        },
        {
          "name": "crypto_powerdata_cex",
          "type": "builtin",
          "description": "CEX market data analysis",
          "enabled": true,
          "env": {
            "OKX_API_KEY": "your_okx_api_key",
            "OKX_SECRET_KEY": "your_okx_secret_key",
            "OKX_API_PASSPHRASE": "your_okx_passphrase",
            "OKX_PROJECT_ID": "your_okx_project_id"
          },
          "config": {
            "exchange": "okx",
            "timeout": 30
          }
        }
      ]
    }
  }
}
```

#### 2. Programmatic Agent Setup

You can also configure agents programmatically:

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.tools import ToolManager
from spoon_toolkits.crypto.crypto_data_tools.price_data import GetTokenPriceTool
from spoon_toolkits.data_platforms.desearch.builtin_tools import DesearchAISearchTool
from spoon_toolkits.crypto.crypto_powerdata import CryptoPowerDataCEXTool
import os

# Create tool instances
tools = []

# Crypto price tool
price_tool = GetTokenPriceTool()
tools.append(price_tool)

# AI search tool (requires DESEARCH_API_KEY)
if os.getenv("DESEARCH_API_KEY"):
    search_tool = DesearchAISearchTool()
    tools.append(search_tool)

# CEX market data tool
cex_tool = CryptoPowerDataCEXTool(
    exchange="okx",
    api_key=os.getenv("OKX_API_KEY"),
    secret_key=os.getenv("OKX_SECRET_KEY"),
    passphrase=os.getenv("OKX_API_PASSPHRASE")
)
tools.append(cex_tool)

# Create tool manager
tool_manager = ToolManager(tools)

# Configure agent with tools
agent = SpoonReactAI()
agent.available_tools = tool_manager
agent.max_steps = 15
agent.tool_choice = "auto"

# Use the agent
result = await agent.run("Analyze the current price of ETH and search for recent news")
```

#### 3. Using ConfigManager for Agent Initialization

For more advanced configuration management, use the ConfigManager:

```python
from spoon_ai.config import ConfigManager
from spoon_ai.agents import SpoonReactAI

async def create_agent_from_config(agent_name: str):
    # Initialize config manager
    config_manager = ConfigManager("config.json")

    # Load configuration
    config = config_manager.load_config()

    # Load agent tools from configuration
    tools = await config_manager.load_agent_tools(agent_name)

    # Create tool manager
    from spoon_ai.tools import ToolManager
    tool_manager = ToolManager(tools)

    # Create and configure agent
    agent = SpoonReactAI()
    agent.available_tools = tool_manager

    # Apply agent-specific configuration
    agent_config = config.agents[agent_name]
    if agent_config.config:
        for key, value in agent_config.config.items():
            setattr(agent, key, value)

    return agent

# Usage
agent = await create_agent_from_config("crypto_analyst")
result = await agent.run("Get ETH price and search for DeFi news")
```

### Environment Variables vs. Configuration

Built-in tools support two configuration approaches:

#### Environment Variables (Global)
```bash
# Set globally for all tools
export DESEARCH_API_KEY="your_key_here"
export OKX_API_KEY="your_okx_key"
```

#### Tool-Specific Configuration (Per-Agent)
```json
{
  "tools": [
    {
      "name": "desearch_ai_search",
      "type": "builtin",
      "env": {
        "DESEARCH_API_KEY": "specific_key_for_this_agent"
      }
    }
  ]
}
```

**Recommendation**: Use environment variables for shared credentials and tool-specific config for agent-unique settings.

### Tool Validation and Health Checks

```python
from spoon_ai.config import ConfigManager

async def validate_agent_tools(agent_name: str):
    config_manager = ConfigManager("config.json")

    # Load and validate tools
    tools = await config_manager.load_agent_tools(agent_name)

    print(f"✅ Loaded {len(tools)} tools for {agent_name}")

    # Test each tool
    for tool in tools:
        try:
            # Perform a simple validation check
            if hasattr(tool, '_validate_api_key'):
                tool._validate_api_key()
            print(f"✅ {tool.name}: Ready")
        except Exception as e:
            print(f"❌ {tool.name}: {e}")

# Validate all tools before running agent
await validate_agent_tools("crypto_analyst")
```

## Next Steps

- **[Custom Tools](./custom-tools)** - Learn to create your own tools
- **[MCP Protocol](./mcp-protocol)** - Understand dynamic tool loading
- **[Examples](./examples/custom-tools)** - See tools in action
