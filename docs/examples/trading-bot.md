---
sidebar_position: 2
---

# Trading Bot Example

This example demonstrates how to build a sophisticated cryptocurrency trading bot using SpoonOS with real-time market data, technical analysis, and automated trading capabilities.

## Overview

Our trading bot will include:
- Real-time market data analysis
- Technical indicator calculations
- Risk management and position sizing
- Automated trade execution
- Portfolio monitoring and reporting

## Complete Trading Bot

```python
import asyncio
import json
import logging
import os
from datetime import datetime, timedelta
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_toolkits.crypto.crypto_powerdata.tools import CryptoPowerDataCEXTool, CryptoPowerDataPriceTool

# Configure logging
logger = logging.getLogger(__name__)

class CryptoTradingBot:
    def __init__(self, initial_balance: float = 10000):
        self.initial_balance = initial_balance
        self.current_balance = initial_balance
        self.positions = {}
        self.trade_history = []

        # Configure LLM for trading decisions
        self.llm = ChatBot(
            model_name="gpt-4.1",
            temperature=0.1,  # Low temperature for consistent trading decisions
            max_tokens=4096
        )

        # Set up trading tools
        self.tools = self._setup_trading_tools()

        # Create trading agent
        self.agent = SpoonReactAI(
            llm=self.llm,
            available_tools=self.tools,
            system_prompt=self._get_trading_prompt(),
            max_iterations=15
        )

    def _setup_trading_tools(self) -> ToolManager:
        """Set up crypto trading tools"""
        tools = []

        # Crypto market data tools
        if all(os.getenv(key) for key in ["OKX_API_KEY", "OKX_SECRET_KEY", "OKX_API_PASSPHRASE"]):
            # Tool for comprehensive market data with indicators
            crypto_data_tool = CryptoPowerDataCEXTool()
            tools.append(crypto_data_tool)

            # Tool for real-time price fetching
            crypto_price_tool = CryptoPowerDataPriceTool()
            tools.append(crypto_price_tool)

        return ToolManager(tools)

    def _get_trading_prompt(self) -> str:
        """Define the trading agent's behavior"""
        return f"""
        You are an expert cryptocurrency trading bot with access to real-time market data.

        Current Portfolio:
        - Balance: ${self.current_balance:,.2f}
        - Positions: {self.positions}

        Trading Rules:
        1. RISK MANAGEMENT: Never risk more than 2% of portfolio on a single trade
        2. POSITION SIZING: Use appropriate position sizing based on volatility
        3. STOP LOSSES: Always set stop losses at 5-8% below entry
        4. TAKE PROFITS: Set take profit targets at 2:1 or 3:1 risk/reward ratio
        5. DIVERSIFICATION: Don't hold more than 30% in any single asset

        Analysis Framework:
        1. Technical Analysis: Use RSI, MACD, moving averages, support/resistance
        2. Market Sentiment: Consider fear/greed index, news sentiment
        3. Volume Analysis: Confirm moves with volume
        4. Risk Assessment: Evaluate market conditions and volatility

        Decision Process:
        1. Analyze current market conditions
        2. Identify potential trading opportunities
        3. Calculate position size and risk
        4. Set entry, stop loss, and take profit levels
        5. Execute trade if all criteria are met

        Always provide detailed reasoning for trading decisions and include risk warnings.
        """

    async def analyze_market(self, symbols: list = None) -> str:
        """Analyze current market conditions"""
        if symbols is None:
            symbols = ["BTC", "ETH", "SOL", "ADA", "DOT"]

        analysis_prompt = f"""
        Perform comprehensive market analysis for: {', '.join(symbols)}

        For each asset, analyze:
        1. Current price and 24h change
        2. Technical indicators (RSI, MACD, moving averages)
        3. Support and resistance levels
        4. Volume analysis
        5. Market sentiment

        Provide overall market assessment and identify:
        - Best trading opportunities
        - Assets to avoid
        - Recommended position sizes
        - Risk level (Low/Medium/High)

        Current portfolio balance: ${self.current_balance:,.2f}
        """

        return await self.agent.run(analysis_prompt)

    async def execute_trade(self, symbol: str, action: str, amount: float, price: float = None) -> dict:
        """Execute a trade (paper trading - simulated execution with real prices)"""
        trade = {
            "timestamp": datetime.now(),
            "symbol": symbol,
            "action": action,  # "buy" or "sell"
            "amount": amount,
            "price": price or await self._get_current_price(symbol),
            "value": 0,
            "status": "executed"
        }

        trade["value"] = trade["amount"] * trade["price"]

        if action == "buy":
            if trade["value"] > self.current_balance:
                trade["status"] = "failed - insufficient balance"
                return trade

            self.current_balance -= trade["value"]
            self.positions[symbol] = self.positions.get(symbol, 0) + amount

        elif action == "sell":
            if symbol not in self.positions or self.positions[symbol] < amount:
                trade["status"] = "failed - insufficient position"
                return trade

            self.current_balance += trade["value"]
            self.positions[symbol] -= amount
            if self.positions[symbol] <= 0:
                del self.positions[symbol]

        self.trade_history.append(trade)
        return trade

    async def _get_current_price(self, symbol: str) -> float:
        """Get current price for a symbol using real market data"""
        try:
            # Use CryptoPowerDataPriceTool to get real-time price from Binance
            price_tool = CryptoPowerDataPriceTool()
            result = await price_tool.execute(
                source="cex",
                exchange="binance",
                symbol=f"{symbol}/USDT",
                market_type="spot"
            )
            # Parse the price from the result
            price_data = json.loads(result.output) if isinstance(result.output, str) else result.output
            return float(price_data.get('price', 100))

        except Exception as e:
            logger.error(f"Error fetching price for {symbol}: {e}")

    async def get_trading_signal(self, symbol: str) -> str:
        """Get trading signal for a specific symbol"""
        signal_prompt = f"""
        Analyze {symbol} and provide a trading signal.

        Consider:
        1. Current technical indicators
        2. Market sentiment
        3. Volume patterns
        4. Support/resistance levels
        5. Overall market conditions

        Provide:
        - Signal: BUY/SELL/HOLD
        - Confidence: 1-10
        - Entry price
        - Stop loss level
        - Take profit target
        - Position size recommendation
        - Risk assessment
        - Reasoning for the signal

        Current portfolio: ${self.current_balance:,.2f}
        Current {symbol} position: {self.positions.get(symbol, 0)}
        """

        return await self.agent.run(signal_prompt)

    async def portfolio_report(self) -> str:
        """Generate portfolio performance report"""
        total_value = self.current_balance

        # Calculate position values
        for symbol, amount in self.positions.items():
            current_price = await self._get_current_price(symbol)
            total_value += amount * current_price

        pnl = total_value - self.initial_balance
        pnl_percent = (pnl / self.initial_balance) * 100

        report = f"""
        📊 PORTFOLIO REPORT
        ==================

        💰 Financial Summary:
        - Initial Balance: ${self.initial_balance:,.2f}
        - Current Cash: ${self.current_balance:,.2f}
        - Total Portfolio Value: ${total_value:,.2f}
        - P&L: ${pnl:,.2f} ({pnl_percent:+.2f}%)

        📈 Current Positions:
        """

        if self.positions:
            for symbol, amount in self.positions.items():
                current_price = await self._get_current_price(symbol)
                position_value = amount * current_price
                report += f"- {symbol}: {amount:.4f} @ ${current_price:,.2f} = ${position_value:,.2f}\n"
        else:
            report += "- No open positions\n"

        report += f"""

        📋 Recent Trades ({len(self.trade_history)} total):
        """

        for trade in self.trade_history[-5:]:  # Last 5 trades
            report += f"- {trade['timestamp'].strftime('%Y-%m-%d %H:%M')} | "
            report += f"{trade['action'].upper()} {trade['amount']:.4f} {trade['symbol']} "
            report += f"@ ${trade['price']:,.2f} | {trade['status']}\n"

        return report

    async def run_trading_session(self, duration_minutes: int = 60):
        """Run automated trading session"""
        print(f"🚀 Starting trading session for {duration_minutes} minutes...")

        end_time = datetime.now() + timedelta(minutes=duration_minutes)

        while datetime.now() < end_time:
            try:
                # Analyze market
                print("📊 Analyzing market conditions...")
                market_analysis = await self.analyze_market()
                print(f"Market Analysis:\n{market_analysis}\n")

                # Check for trading opportunities
                symbols_to_check = ["BTC", "ETH", "SOL"]

                for symbol in symbols_to_check:
                    signal = await self.get_trading_signal(symbol)
                    print(f"🔍 {symbol} Signal:\n{signal}\n")

                    # Parse signal and execute if conditions are met
                    # (In a real implementation, you'd parse the LLM response
                    # and extract trading parameters)

                # Generate portfolio report
                report = await self.portfolio_report()
                print(f"📈 Portfolio Update:\n{report}\n")

                # Wait before next analysis
                print("⏳ Waiting 5 minutes before next analysis...")
                await asyncio.sleep(300)  # 5 minutes

            except Exception as e:
                print(f"❌ Error in trading session: {e}")
                await asyncio.sleep(60)  # Wait 1 minute on error

        print("🏁 Trading session completed!")

# Usage example
async def main():
    # Check required environment variables
    required_vars = ["OPENAI_API_KEY", "OKX_API_KEY", "OKX_SECRET_KEY", "OKX_API_PASSPHRASE"]
    missing_vars = [var for var in required_vars if not os.getenv(var)]

    if missing_vars:
        print(f"❌ Missing environment variables: {', '.join(missing_vars)}")
        print("Please set these variables before running the trading bot.")
        return

    # Create trading bot
    bot = CryptoTradingBot(initial_balance=10000)

    # Example 1: Market analysis
    print("=== Market Analysis ===")
    analysis = await bot.analyze_market(["BTC", "ETH", "SOL"])
    print(analysis)
    print("\n" + "="*50 + "\n")

    # Example 2: Get trading signal
    print("=== Trading Signal ===")
    signal = await bot.get_trading_signal("BTC")
    print(signal)
    print("\n" + "="*50 + "\n")

    # Example 3: Execute a trade (paper trading with real prices)
    print("=== Execute Trade ===")
    trade_result = await bot.execute_trade("BTC", "buy", 0.1, 45000)
    print(f"Trade executed: {trade_result}")
    print("\n" + "="*50 + "\n")

    # Example 4: Portfolio report
    print("=== Portfolio Report ===")
    report = await bot.portfolio_report()
    print(report)

    # Example 5: Interactive mode
    print("\n=== Interactive Trading Mode ===")
    print("Commands: 'analyze', 'signal <SYMBOL>', 'portfolio', 'quit'")

    while True:
        command = input("\nTrading Bot> ").strip().lower()

        if command == "quit":
            break
        elif command == "analyze":
            analysis = await bot.analyze_market()
            print(analysis)
        elif command.startswith("signal "):
            symbol = command.split()[1].upper()
            signal = await bot.get_trading_signal(symbol)
            print(signal)
        elif command == "portfolio":
            report = await bot.portfolio_report()
            print(report)
        else:
            print("Unknown command. Available: 'analyze', 'signal <SYMBOL>', 'portfolio', 'quit'")

if __name__ == "__main__":
    asyncio.run(main())
```

## Key Features

### 1. Risk Management
- Position sizing based on portfolio percentage
- Stop loss and take profit levels
- Maximum exposure limits per asset

### 2. Technical Analysis
- Multiple timeframe analysis
- Technical indicators (RSI, MACD, moving averages)
- Support and resistance identification

### 3. Portfolio Management
- Real-time portfolio tracking
- Performance reporting
- Trade history logging

### 4. Automated Decision Making
- AI-powered market analysis
- Signal generation with confidence levels
- Risk-adjusted position sizing

## Safety Features

⚠️ **Important Safety Notes:**

1. **Real Data Integration**: This example uses real market data from exchanges via CryptoPowerData tools
2. **Risk Limits**: Built-in position and risk limits
3. **Human Oversight**: Always review AI decisions
4. **Gradual Deployment**: Start with small amounts

## Next Steps

- **[Web3 Agent](./web3-agent)** - Blockchain integration
- **[Custom Tools](./custom-tools)** - Build trading tools
- **[Graph Workflows](./graph-workflows)** - Complex trading strategies
