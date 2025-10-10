---
sidebar_position: 3
---

# MCP Spoon Search Agent

This example demonstrates how to build an MCP (Model Context Protocol) enabled agent that seamlessly integrates web search capabilities with cryptocurrency analysis tools, creating a powerful research and analysis assistant.

#### 🎯 **Core Functionality**

**Intelligent Web Search Integration:**
- **Tavily MCP integration** - Advanced web search capabilities through the Model Context Protocol
- **Real-time information retrieval** - Access to current news, articles, and market data from across the web
- **Context-aware search** - Searches are guided by user intent and current market context

**Cryptocurrency Analysis Tools:**
- **Crypto PowerData integration** - Professional-grade cryptocurrency market data and analysis
- **Multi-exchange support** - Access to data from major exchanges (Binance, Coinbase, etc.)
- **Technical indicators** - Real-time calculation of RSI, MACD, EMA, and other key indicators

**Unified Analysis System:**
- **Cross-referenced insights** - Combines web search results with technical analysis
- **Macro market analysis** - Provides comprehensive market outlook by correlating multiple data sources
- **Intelligent synthesis** - LLM-powered synthesis of diverse information sources into coherent analysis

#### 🚀 **Key Features Demonstrated**

- **MCP Protocol Implementation** - Complete MCP server integration and tool discovery
- **Multi-tool Orchestration** - Seamless coordination between search and analysis tools
- **Real-time Data Processing** - Live data integration from multiple APIs
- **Advanced Error Handling** - Robust error recovery and fallback mechanisms
- **Modular Architecture** - Clean separation between MCP tools and analysis logic

#### 📋 **Prerequisites**

```bash
# Required environment variables
export TAVILY_API_KEY="your-tavily-api-key"        # Web search API
export OPENAI_API_KEY="your-openai-api-key"        # LLM responses
export ANTHROPIC_API_KEY="your-anthropic-api-key"  # Alternative LLM

# System requirements
npm install -g tavily-mcp  # Install Tavily MCP server
npx --version              # Ensure npx is available
```

#### 🏃 **Quick Start**

```bash
# Navigate to examples directory
cd spoon-cookbook/example

# Install dependencies
pip install -r requirements.txt

# Run the MCP search agent
python spoon_search_agent.py
```

#### 🔍 **What to Observe**

**MCP Tool Discovery:**
- Watch how the system automatically discovers and connects to MCP servers
- Observe the dynamic tool loading process
- See how tools are validated and initialized

**Search-Analysis Integration:**
- Monitor how web search results are combined with market data
- Observe the correlation between news sentiment and technical indicators
- Track how the system synthesizes diverse information sources

**Real-time Processing:**
- See live data fetching from both web sources and crypto exchanges
- Watch the real-time analysis and recommendation generation
- Observe how the system handles API rate limits and errors

#### 📊 **Analysis Output Example**

```
🔍 COMPREHENSIVE MARKET ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📰 LATEST MARKET NEWS:
• Federal Reserve signals potential rate cut in Q4 2024
• Bitcoin ETF inflows reach record $2.1B this week
• Ethereum staking rewards hit 7.2% APY
• Major tech companies announce crypto payment integration

📊 TECHNICAL ANALYSIS:
• BTC/USDT: Breaking above $45K resistance, volume spike detected
• ETH/USDT: Testing $2,800 support level, RSI showing oversold conditions
• Market-wide momentum: Bullish divergence across major altcoins

🎯 INVESTMENT INSIGHTS:
• SHORT-TERM: Bullish momentum favors BTC accumulation
• MEDIUM-TERM: ETH showing strong fundamental support
• RISK FACTORS: Monitor Federal Reserve policy decisions

💡 MARKET SENTIMENT:
Overall market sentiment is cautiously optimistic with strong institutional...
```

#### 📁 **Source Code & Documentation**

- **GitHub Link**: [MCP Spoon Search Agent](https://github.com/XSpoonAi/spoon-core/blob/main/examples/mcp/spoon_search_agent.py)
- **Related Files**:
  - `spoon-core/examples/mcp/spoon_search_agent.py` - Core MCP implementation
  - `spoon-core/spoon_ai/tools/mcp_tools.py` - MCP tool integration
  - `docs/core-concepts/mcp-protocol.md` - MCP protocol documentation

#### 🎓 **Learning Objectives**

This example teaches you:
- How to integrate MCP (Model Context Protocol) servers into your agents
- Advanced multi-tool orchestration and data synthesis techniques
- Real-time web search integration with LLM-powered analysis
- Error handling and recovery in distributed tool systems
- Building research assistants that combine multiple data sources

#### 💡 **Best Practices Demonstrated**

- **MCP Server Management** - Proper initialization and error handling for MCP servers
- **Tool Discovery** - Dynamic tool loading and validation
- **Data Correlation** - Effective synthesis of diverse information sources
- **API Rate Limiting** - Intelligent handling of API limitations and quotas
- **Fallback Mechanisms** - Robust error recovery when tools or APIs are unavailable



