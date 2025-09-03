# Built-in Tools API Reference

Comprehensive reference for all SpoonOS built-in tools, their configuration, and usage patterns.

## Overview

Built-in tools are core capabilities provided by the **spoon-toolkit** package. These tools are directly integrated into SpoonOS and provide access to blockchain data, market analysis, and external APIs.

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

## Tool Categories

### Crypto Data Tools

#### CryptoPowerDataCEXTool
**Description:** CEX market data and analytics
**Module:** `spoon_toolkits.crypto.crypto_powerdata.tools`

**Configuration:**
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

**Methods:**
- `get_market_data(symbol, timeframe, limit)`: Get OHLCV data
- `get_order_book(symbol, depth)`: Get order book data
- `get_trades(symbol, limit)`: Get recent trades
- `get_ticker(symbol)`: Get 24h ticker statistics

**Usage Example:**
```python
from spoon_toolkits.crypto.crypto_powerdata.tools import CryptoPowerDataCEXTool

tool = CryptoPowerDataCEXTool(
    exchange="binance",
    symbol="BTC/USDT",
    timeframe="1h",
    limit=100
)

result = await tool.execute(action="get_market_data")
```

#### GetTokenPriceTool
**Description:** Get current token prices from DEX
**Module:** `spoon_toolkits.crypto.crypto_data_tools.price_data`

**Configuration:**
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

**Methods:**
- `get_price(token_address)`: Get current token price
- `get_price_by_symbol(symbol)`: Get price by token symbol
- `get_multiple_prices(addresses)`: Get prices for multiple tokens

#### Get24hStatsTool
**Description:** Get 24-hour price statistics from DEX
**Module:** `spoon_toolkits.crypto.crypto_data_tools.price_data`

**Configuration:**
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

**Methods:**
- `get_24h_stats(token_address)`: Get 24h price change, volume, etc.
- `get_price_change(token_address, period)`: Get price change for period

#### GetKlineDataTool
**Description:** Get k-line (candlestick) data from DEX
**Module:** `spoon_toolkits.crypto.crypto_data_tools.price_data`

**Configuration:**
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

**Methods:**
- `get_klines(symbol, interval, limit)`: Get candlestick data
- `get_historical_data(symbol, start_time, end_time)`: Get historical OHLCV

### Blockchain Tools

#### ChainbaseTools
**Description:** Comprehensive blockchain data API
**Module:** `spoon_toolkits.chainbase`

**Configuration:**
```json
{
  "name": "chainbase_tools",
  "type": "builtin",
  "enabled": true,
  "env": {
    "CHAINBASE_API_KEY": "${CHAINBASE_API_KEY}"
  },
  "config": {
    "default_chain": "ethereum",
    "rate_limit": 100,
    "timeout": 30
  }
}
```

**Methods:**
- `get_account_balance(address, chain)`: Get account balance
- `get_transaction_history(address, limit)`: Get transaction history
- `get_token_metadata(contract_address)`: Get token information
- `get_nft_metadata(contract_address, token_id)`: Get NFT metadata

#### ThirdWebTools
**Description:** Web3 development tools via ThirdWeb API
**Module:** `spoon_toolkits.third_web`

**Configuration:**
```json
{
  "name": "thirdweb_tools",
  "type": "builtin",
  "enabled": true,
  "env": {
    "THIRDWEB_API_KEY": "${THIRDWEB_API_KEY}"
  },
  "config": {
    "default_chain": "ethereum",
    "timeout": 30
  }
}
```

**Methods:**
- `deploy_contract(contract_type, params)`: Deploy smart contract
- `interact_contract(address, method, params)`: Interact with contract
- `get_contract_events(address, event_name)`: Get contract events

### Neo Blockchain Tools

#### NeoTools
**Description:** Complete Neo ecosystem tools
**Module:** `spoon_toolkits.neo`

**Configuration:**
```json
{
  "name": "neo_tools",
  "type": "builtin",
  "enabled": true,
  "env": {
    "NEO_RPC_URL": "${NEO_RPC_URL}"
  },
  "config": {
    "network": "mainnet",
    "timeout": 30
  }
}
```

**Methods:**
- `get_address_info(address)`: Get Neo address information
- `get_asset_info(asset_id)`: Get asset details
- `get_contract_info(contract_hash)`: Get contract information
- `get_transaction_info(tx_hash)`: Get transaction details

### Storage Tools

#### DecentralizedStorageTools
**Description:** Decentralized storage integration (AIOZ, 4EVERLAND, OORT)
**Module:** `spoon_toolkits.storage`

**Configuration:**
```json
{
  "name": "storage_tools",
  "type": "builtin",
  "enabled": true,
  "env": {
    "AIOZ_API_KEY": "${AIOZ_API_KEY}",
    "FOUREVERLAND_API_KEY": "${FOUREVERLAND_API_KEY}",
    "OORT_API_KEY": "${OORT_API_KEY}"
  },
  "config": {
    "default_provider": "aioz",
    "timeout": 60
  }
}
```

**Methods:**
- `upload_file(file_path, provider)`: Upload file to storage
- `download_file(file_hash, provider)`: Download file from storage
- `list_files(provider)`: List stored files
- `delete_file(file_hash, provider)`: Delete file from storage

### Security Tools

#### GoPlusLabsTools
**Description:** Security detection (token, NFT, phishing, rug pulls)
**Module:** `spoon_toolkits.gopluslabs`

**Configuration:**
```json
{
  "name": "security_tools",
  "type": "builtin",
  "enabled": true,
  "env": {
    "GOPLUSLABS_API_KEY": "${GOPLUSLABS_API_KEY}"
  },
  "config": {
    "timeout": 30,
    "max_retries": 3
  }
}
```

**Methods:**
- `check_token_security(contract_address, chain)`: Analyze token security
- `check_nft_security(contract_address, chain)`: Analyze NFT security
- `check_phishing_site(url)`: Check if URL is phishing
- `check_rug_pull_risk(contract_address)`: Assess rug pull risk

## Agent Integration Examples

### Basic Trading Agent

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
        },
        {
          "name": "security_tools",
          "type": "builtin",
          "description": "Token security analysis",
          "enabled": true,
          "env": {
            "GOPLUSLABS_API_KEY": "${GOPLUSLABS_API_KEY}"
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

## Configuration Patterns

### Environment Variable References
Use `${VARIABLE_NAME}` syntax to reference environment variables:

```json
{
  "env": {
    "API_KEY": "${MY_API_KEY}",
    "SECRET": "${MY_SECRET}"
  }
}
```

### Tool Grouping
Group related tools by functionality:

```json
{
  "tools": [
    {
      "name": "crypto_powerdata_cex",
      "type": "builtin",
      "category": "market_data"
    },
    {
      "name": "get_token_price",
      "type": "builtin",
      "category": "market_data"
    },
    {
      "name": "security_tools",
      "type": "builtin",
      "category": "security"
    }
  ]
}
```

### Conditional Tool Loading
Enable tools based on environment:

```json
{
  "name": "advanced_tool",
  "type": "builtin",
  "enabled": "${ENABLE_ADVANCED_TOOLS:-false}",
  "env": {
    "API_KEY": "${ADVANCED_API_KEY}"
  }
}
```

## Error Handling

### Common Issues

| Error | Cause | Solution |
|-------|-------|----------|
| `Tool not found` | Tool name misspelled | Check tool name in configuration |
| `API key missing` | Environment variable not set | Set required environment variables |
| `Timeout error` | API response too slow | Increase timeout in tool config |
| `Rate limit exceeded` | Too many API calls | Implement rate limiting or caching |
| `Invalid configuration` | Malformed JSON | Validate configuration syntax |

### Debug Mode
Enable debug logging for tools:

```json
{
  "config": {
    "debug": true,
    "log_level": "debug",
    "log_requests": true
  }
}
```

### Retry Configuration
Configure retry behavior:

```json
{
  "config": {
    "max_retries": 3,
    "retry_delay": 1.0,
    "exponential_backoff": true,
    "retry_on_errors": ["timeout", "rate_limit"]
  }
}
```

## Performance Optimization

### Caching
Enable caching for expensive operations:

```json
{
  "config": {
    "cache_enabled": true,
    "cache_duration": 300,
    "cache_size": 1000
  }
}
```

### Connection Pooling
Optimize HTTP connections:

```json
{
  "config": {
    "connection_pool_size": 10,
    "connection_timeout": 30,
    "keep_alive": true
  }
}
```

### Batch Operations
Process multiple requests efficiently:

```json
{
  "config": {
    "batch_size": 100,
    "batch_timeout": 60,
    "parallel_requests": 5
  }
}
```

## Security Best Practices

### API Key Management
- Never hardcode API keys in configuration files
- Use environment variables for all sensitive data
- Rotate API keys regularly
- Use different keys for different environments

### Access Control
- Limit tool permissions to minimum required
- Use read-only keys when possible
- Monitor API usage and set alerts
- Implement rate limiting

### Data Protection
- Encrypt sensitive data at rest
- Use HTTPS for all API communications
- Validate all input parameters
- Log security events

## See Also

- [Base Tool API](./base-tool.md)
- [MCP Tools](./mcp-tools.md)
- [Custom Tool Development](../../how-to-guides/add-custom-tools.md)
- [Agent Configuration](../agents/base-agent.md)"}