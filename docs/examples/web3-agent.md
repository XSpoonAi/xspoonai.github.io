---
sidebar_position: 3
---

# Web3 Agent Example

This example demonstrates building a comprehensive Web3 agent that can interact with blockchain networks, analyze DeFi protocols, and execute on-chain transactions.

## Overview

Our Web3 agent will provide:
- Multi-chain blockchain analysis
- DeFi protocol interactions
- Token and NFT operations
- Smart contract analysis
- Cross-chain bridge operations

## Complete Web3 Agent

```python
import asyncio
import os
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_toolkits.crypto import (
    ChainbaseTool,
    ThirdWebTool,
    CryptoPowerDataCEXTool
)

class Web3Agent:
    def __init__(self):
        # Configure LLM for Web3 operations
        self.llm = ChatBot(
            model_name="gpt-4.1",
            temperature=0.2,
            max_tokens=4096
        )
        
        # Set up Web3 tools
        self.tools = self._setup_web3_tools()
        
        # Create Web3 agent
        self.agent = SpoonReactAI(
            llm=self.llm,
            available_tools=self.tools,
            system_prompt=self._get_web3_prompt(),
            max_iterations=20
        )
    
    def _setup_web3_tools(self) -> ToolManager:
        """Set up Web3 and blockchain tools"""
        tools = []
        
        # Chainbase for blockchain data
        if os.getenv("CHAINBASE_API_KEY"):
            chainbase_tool = ChainbaseTool()
            tools.append(chainbase_tool)
        
        # ThirdWeb for multi-chain operations
        if os.getenv("THIRDWEB_CLIENT_ID"):
            thirdweb_tool = ThirdWebTool()
            tools.append(thirdweb_tool)
        
        # Crypto market data
        if all(os.getenv(key) for key in ["OKX_API_KEY", "OKX_SECRET_KEY", "OKX_API_PASSPHRASE"]):
            crypto_tool = CryptoPowerDataCEXTool()
            tools.append(crypto_tool)
        
        return ToolManager(tools)
    
    def _get_web3_prompt(self) -> str:
        """Define the Web3 agent's capabilities and behavior"""
        return """
        You are an expert Web3 AI agent with comprehensive blockchain and DeFi knowledge.
        
        Your capabilities include:
        
        🔗 BLOCKCHAIN ANALYSIS:
        - Multi-chain data analysis (Ethereum, Polygon, Arbitrum, Base, etc.)
        - Transaction history and wallet analysis
        - Smart contract interaction and analysis
        - Block and network statistics
        
        💰 DEFI OPERATIONS:
        - Yield farming opportunity analysis
        - Liquidity pool analysis and management
        - DEX trading and arbitrage identification
        - Lending/borrowing protocol analysis
        - Risk assessment for DeFi strategies
        
        🪙 TOKEN & NFT OPERATIONS:
        - Token price analysis and market data
        - NFT collection analysis and valuation
        - Token holder analysis
        - Cross-chain token tracking
        
        🌉 CROSS-CHAIN OPERATIONS:
        - Bridge analysis and recommendations
        - Multi-chain portfolio tracking
        - Cross-chain arbitrage opportunities
        
        🔒 SECURITY & RISK:
        - Smart contract security analysis
        - Transaction simulation and risk assessment
        - Rug pull and scam detection
        - Portfolio risk analysis
        
        IMPORTANT GUIDELINES:
        1. Always prioritize security and risk assessment
        2. Provide clear warnings about potential risks
        3. Suggest transaction simulations before execution
        4. Include gas cost estimates
        5. Recommend diversification and risk management
        6. Stay updated with latest DeFi protocols and trends
        
        When analyzing or recommending actions:
        - Provide detailed reasoning
        - Include risk assessments
        - Suggest alternatives when appropriate
        - Always mention potential downsides
        """
    
    async def analyze_wallet(self, wallet_address: str, chains: list = None) -> str:
        """Comprehensive wallet analysis across multiple chains"""
        if chains is None:
            chains = ["ethereum", "polygon", "arbitrum", "base"]
        
        analysis_prompt = f"""
        Perform comprehensive analysis of wallet: {wallet_address}
        
        Analyze across chains: {', '.join(chains)}
        
        Provide detailed breakdown of:
        1. Token Holdings:
           - Current balances and USD values
           - Token distribution and diversification
           - Top holdings by value
        
        2. DeFi Positions:
           - Lending/borrowing positions
           - Liquidity pool participations
           - Staking positions
           - Yield farming activities
        
        3. NFT Holdings:
           - Collection breakdown
           - Estimated values
           - Rarity analysis
        
        4. Transaction Analysis:
           - Recent activity patterns
           - Most used protocols
           - Trading behavior analysis
        
        5. Risk Assessment:
           - Portfolio concentration risk
           - Smart contract exposure
           - Impermanent loss exposure
           - Overall risk score
        
        6. Recommendations:
           - Diversification suggestions
           - Yield optimization opportunities
           - Risk mitigation strategies
        """
        
        return await self.agent.run(analysis_prompt)
    
    async def find_yield_opportunities(self, amount: float, token: str = "USDC", risk_level: str = "medium") -> str:
        """Find optimal yield farming opportunities"""
        yield_prompt = f"""
        Find the best yield farming opportunities for:
        - Amount: ${amount:,.2f} worth of {token}
        - Risk tolerance: {risk_level}
        
        Analyze and compare:
        1. Lending Protocols:
           - Aave, Compound, Euler
           - Current APY rates
           - Risk factors
        
        2. Liquidity Pools:
           - Uniswap V3, Curve, Balancer
           - IL risk assessment
           - Fee earnings potential
        
        3. Yield Farms:
           - High-yield opportunities
           - Token emission rewards
           - Lock-up requirements
        
        4. Staking Options:
           - Liquid staking derivatives
           - Validator staking
           - Protocol governance staking
        
        For each opportunity, provide:
        - Current APY/APR
        - Risk level (Low/Medium/High)
        - Minimum investment
        - Lock-up period
        - Potential risks
        - Gas cost estimates
        
        Recommend top 3 strategies with reasoning.
        """
        
        return await self.agent.run(yield_prompt)
    
    async def analyze_defi_protocol(self, protocol_name: str) -> str:
        """Deep analysis of a DeFi protocol"""
        protocol_prompt = f"""
        Perform comprehensive analysis of DeFi protocol: {protocol_name}
        
        Analyze:
        1. Protocol Overview:
           - Core functionality and use cases
           - Token economics and governance
           - Team and development activity
        
        2. Financial Metrics:
           - Total Value Locked (TVL)
           - Revenue and fees
           - Token price performance
           - Market cap and valuation
        
        3. Security Assessment:
           - Audit history and findings
           - Bug bounty programs
           - Historical incidents
           - Smart contract risks
        
        4. Competitive Analysis:
           - Market position
           - Competitors comparison
           - Unique value propositions
        
        5. Risk Factors:
           - Smart contract risk
           - Regulatory risk
           - Market risk
           - Operational risk
        
        6. Investment Thesis:
           - Growth potential
           - Adoption trends
           - Upcoming catalysts
           - Recommendation (Buy/Hold/Avoid)
        
        Provide overall risk score (1-10) and investment recommendation.
        """
        
        return await self.agent.run(protocol_prompt)
    
    async def cross_chain_arbitrage(self, token: str, chains: list = None) -> str:
        """Find cross-chain arbitrage opportunities"""
        if chains is None:
            chains = ["ethereum", "polygon", "arbitrum", "base"]
        
        arbitrage_prompt = f"""
        Scan for cross-chain arbitrage opportunities for {token}
        
        Analyze across chains: {', '.join(chains)}
        
        For each potential arbitrage:
        1. Price Differences:
           - Current prices on each chain
           - Percentage difference
           - Historical price spreads
        
        2. Execution Analysis:
           - Bridge options and costs
           - Time requirements
           - Slippage estimates
           - Gas costs on each chain
        
        3. Profit Calculation:
           - Gross profit potential
           - Total execution costs
           - Net profit estimate
           - ROI percentage
        
        4. Risk Assessment:
           - Bridge risks
           - Price movement risk
           - Execution complexity
           - Capital requirements
        
        5. Execution Strategy:
           - Step-by-step process
           - Optimal bridge selection
           - Timing considerations
           - Risk mitigation
        
        Only recommend opportunities with >2% net profit after all costs.
        """
        
        return await self.agent.run(arbitrage_prompt)
    
    async def nft_collection_analysis(self, collection_address: str, chain: str = "ethereum") -> str:
        """Analyze NFT collection metrics and trends"""
        nft_prompt = f"""
        Analyze NFT collection: {collection_address} on {chain}
        
        Provide comprehensive analysis:
        1. Collection Overview:
           - Collection name and description
           - Total supply and minted count
           - Creator and team information
        
        2. Market Metrics:
           - Floor price and trends
           - Volume (24h, 7d, 30d)
           - Market cap
           - Holder count and distribution
        
        3. Trading Analysis:
           - Price history and volatility
           - Sales frequency
           - Average sale price
           - Top sales and outliers
        
        4. Rarity Analysis:
           - Trait distribution
           - Rarity rankings
           - Most valuable traits
        
        5. Community Metrics:
           - Social media presence
           - Discord/Twitter activity
           - Community engagement
        
        6. Investment Analysis:
           - Price momentum
           - Support/resistance levels
           - Risk factors
           - Investment recommendation
        
        Provide overall assessment and price prediction.
        """
        
        return await self.agent.run(nft_prompt)
    
    async def simulate_transaction(self, transaction_details: dict) -> str:
        """Simulate and analyze a transaction before execution"""
        simulation_prompt = f"""
        Simulate and analyze this transaction before execution:
        {transaction_details}
        
        Simulation Analysis:
        1. Transaction Validation:
           - Parameter validation
           - Balance checks
           - Allowance verification
        
        2. Cost Analysis:
           - Gas estimation
           - Token costs
           - Slippage impact
           - Total execution cost
        
        3. Risk Assessment:
           - Smart contract risks
           - MEV vulnerability
           - Price impact
           - Failure scenarios
        
        4. Optimization Suggestions:
           - Gas optimization
           - Timing recommendations
           - Alternative approaches
           - Risk mitigation
        
        5. Expected Outcomes:
           - Success probability
           - Expected results
           - Potential side effects
        
        Provide GO/NO-GO recommendation with reasoning.
        """
        
        return await self.agent.run(simulation_prompt)

# Usage examples
async def main():
    # Check required environment variables
    required_vars = ["OPENAI_API_KEY"]
    optional_vars = ["CHAINBASE_API_KEY", "THIRDWEB_CLIENT_ID", "OKX_API_KEY"]
    
    missing_required = [var for var in required_vars if not os.getenv(var)]
    if missing_required:
        print(f"❌ Missing required variables: {', '.join(missing_required)}")
        return
    
    missing_optional = [var for var in optional_vars if not os.getenv(var)]
    if missing_optional:
        print(f"⚠️ Missing optional variables: {', '.join(missing_optional)}")
        print("Some features may be limited.")
    
    # Create Web3 agent
    agent = Web3Agent()
    
    # Example 1: Wallet analysis
    print("=== Wallet Analysis ===")
    wallet_analysis = await agent.analyze_wallet("0x123...abc")  # Replace with real address
    print(wallet_analysis)
    print("\n" + "="*50 + "\n")
    
    # Example 2: Yield opportunities
    print("=== Yield Opportunities ===")
    yield_analysis = await agent.find_yield_opportunities(10000, "USDC", "medium")
    print(yield_analysis)
    print("\n" + "="*50 + "\n")
    
    # Example 3: Protocol analysis
    print("=== Protocol Analysis ===")
    protocol_analysis = await agent.analyze_defi_protocol("Uniswap")
    print(protocol_analysis)
    print("\n" + "="*50 + "\n")
    
    # Interactive mode
    print("=== Interactive Web3 Agent ===")
    print("Commands: 'wallet <address>', 'yield <amount> <token>', 'protocol <name>', 'quit'")
    
    while True:
        command = input("\nWeb3 Agent> ").strip()
        
        if command.lower() == "quit":
            break
        elif command.startswith("wallet "):
            address = command.split()[1]
            analysis = await agent.analyze_wallet(address)
            print(analysis)
        elif command.startswith("yield "):
            parts = command.split()
            amount = float(parts[1])
            token = parts[2] if len(parts) > 2 else "USDC"
            analysis = await agent.find_yield_opportunities(amount, token)
            print(analysis)
        elif command.startswith("protocol "):
            protocol = " ".join(command.split()[1:])
            analysis = await agent.analyze_defi_protocol(protocol)
            print(analysis)
        else:
            print("Unknown command. Available: 'wallet <address>', 'yield <amount> <token>', 'protocol <name>', 'quit'")

if __name__ == "__main__":
    asyncio.run(main())
```

## Key Features

### 1. Multi-Chain Support
- Ethereum, Polygon, Arbitrum, Base
- Cross-chain portfolio tracking
- Bridge analysis and recommendations

### 2. DeFi Integration
- Yield farming analysis
- Liquidity pool management
- Protocol risk assessment

### 3. Security Focus
- Transaction simulation
- Risk assessment
- Scam detection

### 4. Comprehensive Analysis
- Wallet portfolio analysis
- NFT collection metrics
- Market trend analysis

## Next Steps

- **[Trading Bot](./trading-bot)** - Automated trading
- **[Graph Workflows](./graph-workflows)** - Complex DeFi strategies
- **[Custom Tools](./custom-tools)** - Build Web3 tools
