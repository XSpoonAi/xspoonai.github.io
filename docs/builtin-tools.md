---
sidebar_position: 7
---

# Built-in Tools Configuration Guide

This guide covers Agent configuration methods for SpoonOS built-in tools.

## Environment Variables Setup

Configure required environment variables in your `.env` file or system environment:

```bash
# Crypto APIs
OKX_API_KEY=your_okx_api_key
OKX_SECRET_KEY=your_okx_secret_key
OKX_API_PASSPHRASE=your_okx_passphrase
OKX_PROJECT_ID=your_okx_project_id

# Price APIs
COINGECKO_API_KEY=your_coingecko_key
BITQUERY_API_KEY=your_bitquery_key

# Blockchain
RPC_URL=https://eth.llamarpc.com
```

**Note**: Never hardcode API keys in your source code. Always use environment variables for sensitive data.

## Agent Configuration Methods

### Agent Types

#### SpoonReactAI (Standard Agent)

```json
{
  "trading_agent": {
    "class": "SpoonReactAI",
    "description": "Standard trading agent",
    "aliases": ["trader"],
    "config": {
      "max_steps": 10,
      "temperature": 0.3
    }
  }
}
```

## Built-in Tool Configuration Examples

### Crypto PowerData CEX Tool

```json
{
  "name": "crypto_powerdata_cex",
  "type": "builtin",
  "description": "CEX market data and analytics",
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
}
```

### Token Price Tool

```json
{
  "name": "get_token_price",
  "type": "builtin",
  "description": "Get current token prices from DEX",
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
```

#### Additional Token Price Tools

```json
{
  "name": "get_24h_stats",
  "type": "builtin",
  "description": "Get 24-hour price statistics from DEX",
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
```

```json
{
  "name": "get_kline_data",
  "type": "builtin",
  "description": "Get k-line (candlestick) data from DEX",
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
```

## Agent Tool Integration Examples

### Basic Trading Agent with Built-in Tools

```python
import os
from spoon_ai.agents import SpoonReactAI
from spoon_toolkits.crypto.crypto_powerdata.tools import CryptoPowerDataCEXTool
from spoon_toolkits.crypto.crypto_data_tools.price_data import GetTokenPriceTool

# Initialize tools
crypto_tool = CryptoPowerDataCEXTool(
    exchange="binance",
    symbol="BTC/USDT",
    timeframe="1h",
    limit=100
)

price_tool = GetTokenPriceTool(
    exchange="uniswap"
)

# Create agent with tools
trading_agent = SpoonReactAI(
    name="trading_agent",
    tools=[crypto_tool, price_tool],
    config={
        "max_steps": 10,
        "temperature": 0.3
    }
)

# Use agent
response = await trading_agent.run("Analyze BTC market data")
```

### Complete Configuration Example

#### Trading Agent with Built-in Tools

```json
{
  "default_agent": "trading_agent",
  "agents": {
    "trading_agent": {
      "class": "SpoonReactAI",
      "description": "Trading agent with built-in tools",
      "aliases": ["trader"],
      "config": {
        "max_steps": 10,
        "temperature": 0.3
      },
      "tools": [
        {
          "name": "crypto_powerdata_cex",
          "type": "builtin",
          "description": "CEX market data",
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
          "description": "Price lookup",
          "enabled": true,
          "env": {
            "COINGECKO_API_KEY": "${COINGECKO_API_KEY}"
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



## Next Steps

- **[Custom Tools](./custom-tools)** - Learn to create your own tools
- **[MCP Protocol](./mcp-protocol)** - Understand dynamic tool loading
- **[Examples](./examples/custom-tools)** - See tools in action
