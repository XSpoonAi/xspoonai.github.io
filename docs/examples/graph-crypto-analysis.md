---
sidebar_position: 2
---

# Graph Crypto Analysis

This example implements a complete cryptocurrency research and analysis pipeline that demonstrates end-to-end LLM-driven decision making, from data collection through technical analysis to investment recommendations.

#### 🎯 **Core Functionality**

**Intelligent Market Analysis System:**
- **LLM-driven token selection** - The system analyzes market data and intelligently selects tokens for deeper analysis based on real-time market conditions
- **Multi-timeframe analysis** - Simultaneously processes data from multiple timeframes (1m, 5m, 15m, 1h, 4h, daily) for comprehensive market view
- **Dynamic decision flow** - Every step in the analysis process is guided by LLM decisions, creating adaptive and context-aware analysis

**Advanced Technical Analysis:**
- **Real-time indicator calculation** - Computes technical indicators (RSI, MACD, EMA, Bollinger Bands) using live market data
- **Market sentiment analysis** - Analyzes price patterns, volume, and market momentum
- **Risk assessment** - Evaluates market volatility and risk metrics for each analyzed token

**LLM-Powered Synthesis:**
- **Intelligent summarization** - Synthesizes complex market data into clear, actionable insights
- **Investment recommendations** - Provides data-driven buy/sell/hold recommendations with reasoning
- **Market outlook generation** - Creates short-term and macro-level market predictions

#### 🚀 **Key Features Demonstrated**

- **Complete Graph Workflow** - End-to-end implementation from data ingestion to final recommendations
- **Real API Integration** - Uses actual Binance and cryptocurrency APIs for live data
- **LLM Decision Making** - Every major decision in the workflow is LLM-driven
- **Advanced State Management** - Maintains complex analysis state throughout the process
- **Error Recovery** - Robust error handling and fallback mechanisms

#### 📋 **Prerequisites**

```bash
# Required environment variables
export OPENAI_API_KEY="your-openai-api-key"          # Primary LLM
export ANTHROPIC_API_KEY="your-anthropic-api-key"   # Alternative LLM
export TAVILY_API_KEY="your-tavily-api-key"       # Search engine
```

#### 🏃 **Quick Start**

```bash
# Navigate to examples directory
cd spoon-cookbook/example

# Install dependencies
pip install -r requirements.txt

# Run the crypto analysis
python graph_crypto_analysis.py
```

#### 🔍 **What to Observe**

**Data Flow Analysis:**
- Watch how the system fetches and processes real market data from multiple sources
- Observe how the LLM analyzes raw data and makes intelligent decisions
- See the step-by-step analysis process from data collection to final recommendations

**Technical Analysis:**
- Monitor how technical indicators are calculated in real-time
- Observe how the system correlates different data sources
- Track how market sentiment is analyzed and quantified

**LLM Decision Process:**
- See how the LLM evaluates different tokens and selects analysis targets
- Watch the synthesis process that combines technical and fundamental analysis
- Observe how investment recommendations are generated with detailed reasoning

#### 📊 **Analysis Output Example**

```
🔍 MARKET ANALYSIS REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 SELECTED TOKENS FOR ANALYSIS: BTC, ETH, SOL, ADA

📊 TECHNICAL ANALYSIS:
• BTC/USDT: Bullish momentum, RSI: 68, MACD positive crossover
• ETH/USDT: Consolidation phase, approaching key resistance
• SOL/USDT: Strong uptrend, breaking previous highs
• ADA/USDT: Recovery phase, positive volume momentum

🎯 INVESTMENT RECOMMENDATIONS:
• SHORT-TERM: Consider BTC and SOL for momentum plays
• MEDIUM-TERM: Hold ETH through current consolidation
• RISK ASSESSMENT: Moderate volatility expected in next 24-48 hours

💡 MARKET OUTLOOK:
The current market shows strong bullish momentum with BTC leading...
```

#### 📁 **Source Code & Documentation**

- **GitHub Link**: [Graph Crypto Analysis](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)
- **Related Files**:
  - `spoon-core/examples/graph_crypto_analysis.py` - Full implementation
  - `spoon-core/spoon_ai/tools/crypto_tools.py` - Crypto analysis tools
  - `spoon-core/spoon_ai/graph/` - Graph system utilities
  - `docs/core-concepts/tools.md` - Tool system documentation

#### 🎓 **Learning Objectives**

This example teaches you:
- How to build complete end-to-end analysis systems with LLM integration
- Advanced cryptocurrency market analysis techniques
- Real-time data processing and technical indicator calculation
- LLM-driven decision making in complex workflows
- Error handling and data validation in financial applications

#### 💡 **Best Practices Demonstrated**

- **Data Validation** - Comprehensive validation of market data and API responses
- **Error Resilience** - Robust error handling for network and API failures
- **Performance Optimization** - Efficient data processing and caching strategies
- **Security** - Safe handling of API keys and sensitive financial data
- **Modular Architecture** - Clean separation between data collection, analysis, and presentation


