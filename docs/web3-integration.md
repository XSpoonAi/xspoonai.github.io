---
sidebar_position: 15
---

# Web3 Integration

SpoonOS provides comprehensive Web3 integration capabilities, enabling your agents to interact with blockchain networks, DeFi protocols, and decentralized applications.

## Overview

SpoonOS is designed as a Web3-native framework with built-in support for:

- **Blockchain Interactions** - Read and write operations on multiple chains
- **DeFi Protocol Integration** - Interact with DEXs, lending protocols, and yield farms
- **Token Operations** - Transfer, swap, and manage digital assets
- **Smart Contract Interaction** - Call and deploy smart contracts
- **Cross-chain Operations** - Multi-chain workflows and bridge integrations
- **NFT Management** - Create, transfer, and analyze NFTs

## Blockchain Connectivity

### RPC Configuration

Configure blockchain connections in your environment:

```bash
# Ethereum Mainnet
ETHEREUM_RPC=https://eth-mainnet.alchemyapi.io/v2/your-key
ETHEREUM_CHAIN_ID=1

# Polygon
POLYGON_RPC=https://polygon-mainnet.infura.io/v3/your-project-id
POLYGON_CHAIN_ID=137

# Arbitrum
ARBITRUM_RPC=https://arb1.arbitrum.io/rpc
ARBITRUM_CHAIN_ID=42161

# Base
BASE_RPC=https://mainnet.base.org
BASE_CHAIN_ID=8453
```

### Multi-chain Agent Setup

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.tools import ToolManager
from spoon_toolkits.crypto import (
    CryptoPowerDataCEXTool,
    ChainbaseTool,
    ThirdWebTool
)

class Web3Agent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Configure Web3 tools
        tools = [
            CryptoPowerDataCEXTool(),  # Market data
            ChainbaseTool(),           # Blockchain data
            ThirdWebTool(),            # Multi-chain operations
        ]

        self.avaliable_tools = ToolManager(tools)

        self.system_prompt = """
        You are a Web3 AI agent with access to blockchain data and DeFi protocols.
        You can:
        - Analyze token prices and market data
        - Check wallet balances and transaction history
        - Interact with smart contracts
        - Provide DeFi yield farming recommendations
        - Execute token swaps and transfers

        Always verify transaction details before execution and warn about risks.
        """
```

## Token Operations

### Price Analysis

```python
# Get token prices across multiple chains
agent_response = await web3_agent.run("""
Analyze the price of USDC across Ethereum, Polygon, and Arbitrum.
Check for arbitrage opportunities and provide a summary.
""")

# Example response includes:
# - Current prices on each chain
# - Price differences and arbitrage potential
# - Gas costs for potential trades
# - Risk assessment
```

### Portfolio Management

```python
# Analyze wallet portfolio
portfolio_analysis = await web3_agent.run("""
Analyze the portfolio for wallet address 0x123...
Provide breakdown by:
- Token holdings and current values
- DeFi positions (lending, staking, LP)
- NFT collections
- Overall portfolio health and recommendations
""")
```

### Token Transfers

```python
# Execute token transfer
transfer_result = await web3_agent.run("""
Transfer 100 USDC from my wallet to 0x456...
Use the most cost-effective chain and provide transaction details.
""")
```

## DeFi Protocol Integration

### Yield Farming Analysis

```python
class DeFiAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.system_prompt = """
        You are a DeFi yield farming specialist. You can:
        - Analyze yield farming opportunities across protocols
        - Calculate APY and risks for different strategies
        - Monitor liquidity pool performance
        - Suggest optimal farming strategies

        Always include risk warnings and impermanent loss calculations.
        """

# Usage
defi_analysis = await defi_agent.run("""
Find the best yield farming opportunities for USDC with:
- Minimum $10,000 investment
- Maximum 30 days lock period
- Low to medium risk tolerance
- Preference for established protocols
""")
```

### Liquidity Pool Management

```python
# Analyze LP positions
lp_analysis = await web3_agent.run("""
Analyze my Uniswap V3 positions:
- Current value and PnL
- Impermanent loss calculation
- Fee earnings
- Rebalancing recommendations
""")

# Add liquidity
add_liquidity = await web3_agent.run("""
Add $5,000 worth of liquidity to the ETH/USDC pool on Uniswap V3
- Suggest optimal price range
- Calculate expected fees
- Estimate gas costs
""")
```

## Smart Contract Interaction

### Contract Analysis

```python
# Analyze smart contract
contract_analysis = await web3_agent.run("""
Analyze the smart contract at 0x789...
Provide:
- Contract functionality overview
- Security assessment
- Gas optimization suggestions
- Integration recommendations
""")
```

### Custom Contract Deployment

```python
# Deploy custom contract
deployment = await web3_agent.run("""
Deploy a simple ERC-20 token contract with:
- Name: "MyToken"
- Symbol: "MTK"
- Total Supply: 1,000,000
- Mintable: Yes
- Burnable: Yes

Estimate gas costs and provide deployment transaction.
""")
```

## Cross-chain Operations

### Bridge Integration

```python
# Cross-chain bridge operations
bridge_operation = await web3_agent.run("""
Bridge 1000 USDC from Ethereum to Polygon:
- Compare bridge options (official, Hop, Synapse)
- Calculate costs and time estimates
- Execute the most efficient option
""")
```

### Multi-chain Arbitrage

```python
# Arbitrage opportunities
arbitrage_analysis = await web3_agent.run("""
Scan for arbitrage opportunities between:
- Ethereum and Arbitrum
- Tokens: ETH, USDC, USDT, WBTC
- Minimum profit: $100
- Include gas costs and slippage
""")
```

## NFT Operations

### NFT Analysis

```python
# NFT collection analysis
nft_analysis = await web3_agent.run("""
Analyze the Bored Ape Yacht Club collection:
- Floor price trends
- Trading volume
- Rarity distribution
- Market sentiment
""")
```

### NFT Trading

```python
# NFT trading operations
nft_trading = await web3_agent.run("""
Find undervalued NFTs in the Pudgy Penguins collection:
- Budget: 5 ETH
- Rarity score > 300
- Listed in last 24 hours
- Provide purchase recommendations
""")
```

## Security and Risk Management

### Transaction Simulation

```python
# Simulate transactions before execution
simulation = await web3_agent.run("""
Simulate this transaction before execution:
- Swap 1 ETH for USDC on Uniswap
- Check for:
  - Slippage impact
  - MEV risks
  - Gas optimization
  - Potential failures
""")
```

### Risk Assessment

```python
# Comprehensive risk assessment
risk_assessment = await web3_agent.run("""
Assess the risks of this DeFi strategy:
- Provide 50% USDC to Aave
- Borrow 30% worth of ETH
- Stake ETH in Lido
- Use stETH as collateral for more borrowing

Calculate:
- Liquidation risk
- Interest rate risk
- Smart contract risk
- Overall risk score
""")
```

## Configuration Examples

### Environment Setup

```bash
# Wallet Configuration
PRIVATE_KEY=your_wallet_private_key
WALLET_ADDRESS=your_wallet_address

# API Keys
CHAINBASE_API_KEY=your_chainbase_key
THIRDWEB_CLIENT_ID=your_thirdweb_client_id
OKX_API_KEY=your_okx_api_key
OKX_SECRET_KEY=your_okx_secret_key
OKX_API_PASSPHRASE=your_okx_passphrase

# RPC Endpoints
ETHEREUM_RPC=https://eth-mainnet.alchemyapi.io/v2/your-key
POLYGON_RPC=https://polygon-mainnet.infura.io/v3/your-project-id
ARBITRUM_RPC=https://arb1.arbitrum.io/rpc
```

### Agent Configuration

```json
{
  "web3_trading_agent": {
    "class": "SpoonReactAI",
    "description": "Advanced Web3 trading and DeFi agent",
    "tools": [
      {
        "name": "crypto_powerdata_cex",
        "type": "builtin",
        "enabled": true,
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
        "env": {
          "CHAINBASE_API_KEY": "your_chainbase_key"
        }
      },
      {
        "name": "thirdweb_tools",
        "type": "builtin",
        "enabled": true,
        "env": {
          "THIRDWEB_CLIENT_ID": "your_thirdweb_client_id"
        }
      }
    ]
  }
}
```

## Best Practices

### 1. Security First
- Always simulate transactions before execution
- Use hardware wallets for production
- Implement multi-signature for large operations
- Regular security audits of smart contracts

### 2. Risk Management
- Set maximum transaction limits
- Implement slippage protection
- Monitor liquidation risks in DeFi
- Diversify across protocols and chains

### 3. Gas Optimization
- Monitor gas prices and optimize timing
- Use layer 2 solutions when possible
- Batch transactions when beneficial
- Consider gas tokens for frequent operations

### 4. Monitoring and Alerts
- Set up price alerts for key assets
- Monitor protocol health and risks
- Track portfolio performance
- Alert on unusual market conditions

## Example Use Cases

### 1. Automated DeFi Yield Farming
```python
# Automated yield optimization
yield_optimizer = await web3_agent.run("""
Optimize my DeFi yield strategy:
- Current portfolio: $50,000 USDC
- Risk tolerance: Medium
- Rebalance weekly
- Target APY: >8%
- Avoid protocols with <6 months history
""")
```

### 2. MEV Protection
```python
# MEV-protected trading
mev_protection = await web3_agent.run("""
Execute this trade with MEV protection:
- Swap 10 ETH for USDC
- Use private mempool
- Maximum slippage: 0.5%
- Split into smaller trades if beneficial
""")
```

### 3. Cross-chain Portfolio Rebalancing
```python
# Portfolio rebalancing across chains
rebalancing = await web3_agent.run("""
Rebalance my portfolio across chains:
- Target: 40% ETH, 30% USDC, 20% WBTC, 10% stablecoins
- Current holdings on Ethereum, Polygon, Arbitrum
- Minimize gas costs and bridge fees
- Execute rebalancing plan
""")
```

## Next Steps

- **[Built-in Tools](./builtin-tools)** - Explore Web3 tools
- **[Custom Tools](./custom-tools)** - Create blockchain tools
- **[Examples](./examples/web3-agent)** - See Web3 agents in action
- **[Graph System](./graph-system)** - Build complex DeFi workflows
