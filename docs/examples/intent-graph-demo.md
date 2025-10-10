---
sidebar_position: 1
---

# Intent Graph Demo

This example demonstrates an advanced StateGraph workflow that showcases intelligent query routing, parallel execution, and memory management - a production-ready implementation of complex multi-step processes.

#### 🎯 **Core Functionality**

**Intelligent Query Routing System:**
- **LLM-powered intent classification** - Automatically categorizes user queries into: `general_qa`, `short_term_trend`, `macro_trend`, or `deep_research`
- **Dynamic routing logic** - Routes queries to specialized analysis paths based on detected intent
- **Context-aware decision making** - Uses conversation history and market context for routing decisions

**True Parallel Data Processing:**
- **Concurrent data fetching** - Simultaneously retrieves data from multiple timeframes (15m, 30m, 1h, 4h, daily, weekly)
- **Real-time market data** - Integrates with live cryptocurrency APIs for accurate, current information
- **Performance optimization** - Parallel execution significantly reduces total processing time

**Advanced Memory Management:**
- **Persistent conversation context** - Maintains user preferences and analysis history across sessions
- **Intelligent memory updates** - Automatically stores learned patterns and market insights
- **State preservation** - Saves analysis results and routing decisions for future reference

#### 🚀 **Key Features Demonstrated**

- **StateGraph Architecture** - Complete implementation of SpoonOS graph system
- **LLM Integration** - Advanced prompt engineering and response processing
- **Tool Orchestration** - Seamless integration of multiple data sources
- **Error Handling** - Robust error recovery and fallback mechanisms
- **Performance Monitoring** - Built-in metrics and execution tracking

#### 📋 **Prerequisites**

```bash
# Required environment variables
export OPENAI_API_KEY="your-openai-api-key"
export TAVILY_API_KEY="your-tavily-api-key"       # Search engine
```

#### 🏃 **Quick Start**

```bash
# Navigate to examples directory
cd spoon-cookbook/example

# Install dependencies
pip install -r requirements.txt

# Run the intent graph demo
python intent_graph_demo.py
```

#### 🔍 **What to Observe**

**Execution Flow:**
- Watch how the system intelligently routes queries to appropriate analysis paths
- Observe parallel data fetching across multiple timeframes simultaneously
- See how memory is loaded and updated throughout the process

**Performance Metrics:**
- Monitor execution times for different routing paths
- Compare sequential vs parallel processing performance
- Track memory usage and optimization

**Advanced Behaviors:**
- See how the LLM makes routing decisions based on query intent
- Watch real-time data integration from multiple sources
- Observe how the system maintains context across complex workflows

#### 📁 **Source Code & Documentation**

- **GitHub Link**: [Intent Graph Demo](https://github.com/XSpoonAi/spoon-core/blob/main/examples/intent_graph_demo.py)
- **Related Files**:
  - `spoon-core/examples/intent_graph_demo.py` - Core implementation
  - `spoon-core/spoon_ai/graph/` - Graph system components
  - `docs/core-concepts/graph-system.md` - Graph system documentation

#### 🎓 **Learning Objectives**

This example teaches you:
- How to build complex, multi-step workflows using StateGraph
- Advanced LLM integration patterns and prompt engineering
- Parallel processing techniques for performance optimization
- Memory management and state persistence in long-running processes
- Error handling and recovery in distributed systems

#### 💡 **Best Practices Demonstrated**

- **Modular Design** - Clean separation of concerns with focused nodes
- **Scalable Architecture** - Easy to extend with new analysis types
- **Resource Efficiency** - Optimized for both speed and memory usage
- **Maintainable Code** - Well-documented and structured implementation


