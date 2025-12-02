# Agents

## Introduction

Agents are autonomous AI systems that combine large language model (LLM) reasoning with structured execution patterns to accomplish complex tasks. In SpoonOS, an agent orchestrates the interaction between language models, tools, memory, and external systems to reason about goals, plan action sequences, execute operations, and adapt based on observations.

### Core Capabilities

- **Structured Reasoning**: ReAct (Reasoning + Acting) loop for step-by-step problem solving with explicit thought-action-observation cycles
- **Workflow Orchestration**: Graph-based execution for complex multi-step pipelines with conditional branching and parallel processing
- **Tool Integration**: Pluggable tool system with JSON-schema validation, supporting local tools, toolkit bundles, and MCP-based remote tools
- **Memory Systems**: Short-term conversation context and long-term persistent memory (Mem0) for cross-session knowledge retention
- **Provider Abstraction**: Unified interface across OpenAI, Anthropic, Google, DeepSeek, and OpenRouter with automatic fallback
- **Operational Features**: Automatic retries, execution monitoring, error recovery, and comprehensive logging

### Comparison with Other Agent Frameworks

| Aspect | SpoonOS Agents | LangChain Agents | AutoGPT |
|--------|---------------|------------------|---------|
| **Execution Model** | ReAct loop or Graph-based workflows | ReAct with various agent types | Autonomous goal-driven loop |
| **Tool System** | `BaseTool` + `ToolManager` + MCP protocol | `Tool` class with various loaders | Plugin-based system |
| **Memory** | Built-in short-term + Mem0 long-term | External memory modules | File-based workspace |
| **State Management** | Typed `TypedDict` with reducers | Unstructured dict or Pydantic | JSON-based |
| **Multi-Provider** | Native `LLMManager` with fallback chains | Via `ChatModel` abstraction | Single provider |
| **Web3/Crypto** | Native toolkits (CEX, DEX, on-chain) | Via third-party integrations | Limited |

**When to choose SpoonOS Agents:**

- You need both simple ReAct agents and complex graph-based workflows in the same project
- You're building crypto/Web3 applications that require CEX, DEX, or on-chain tool integration
- You want unified provider management with automatic fallback across multiple LLM providers
- You need MCP protocol support for federated tool discovery and execution

---

## Quick Start

```bash
pip install spoon-ai
export OPENAI_API_KEY="your-key"
```

```python
import asyncio
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

agent = SpoonReactAI(llm=ChatBot(model_name="gpt-4.1", llm_provider="openai"))

async def main():
    response = await agent.run("What is the capital of France?")
    print(response)

asyncio.run(main())
```

---

## Agent Types

### ReAct Agents

ReAct (Reasoning + Acting) agents follow a thought → action → observation loop. The agent thinks about what to do, executes a tool or generates a response, observes the result, and repeats until the task is complete.

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager

# Agent with tools
agent = SpoonReactAI(
    llm=ChatBot(model_name="gpt-4.1", llm_provider="openai"),
    tools=ToolManager([SearchTool(), CalculatorTool()]),
    max_iterations=10  # Limit reasoning loops
)

response = await agent.run("Search for Bitcoin price and calculate 10% of it")
```

**Best for:** Single-step tasks, API calls, Q&A, simple automation.

### Graph Agents

Graph agents execute structured workflows defined as state graphs, supporting conditional branching, parallel execution, and complex multi-step pipelines.

```python
from spoon_ai.agents import GraphAgent
from spoon_ai.graph import StateGraph

# Build workflow (see Graph System docs for StateGraph details)
graph = StateGraph(MyState)
graph.add_node("analyze", analyze_fn)
graph.add_node("execute", execute_fn)
graph.add_edge("__start__", "analyze")
graph.add_conditional_edge("analyze", router_fn)

# Agent with memory persistence
agent = GraphAgent(
    graph=graph.compile(),
    memory_path="./agent_memory",
    session_id="user_123"
)

result = await agent.run("Analyze market and execute trades")
```

**Best for:** Multi-step workflows, conditional logic, parallel tasks, human-in-the-loop.

---

## Agent Architecture

### Core Components

1. **LLM Provider** - The language model powering the agent
2. **Tool Manager** - Manages available tools and execution
3. **Memory System** - Stores conversation history and context
4. **Prompt System** - Handles system prompts and instructions

### Agent Lifecycle

```mermaid
graph TD
    A[Initialize Agent] --> B[Load Tools]
    B --> C[Receive Input]
    C --> D[Reason About Task]
    D --> E[Select Action]
    E --> F[Execute Tool]
    F --> G[Observe Result]
    G --> H{Task Complete?}
    H -->|No| D
    H -->|Yes| I[Return Response]
```

## Creating Custom Agents

### Basic Agent Setup

```python
from spoon_ai.agents.base import BaseAgent
from spoon_ai.tools import ToolManager

class CustomAgent(BaseAgent):
    def __init__(self, llm, tools=None):
        super().__init__(llm)
        self.tool_manager = ToolManager(tools or [])

    async def run(self, message: str) -> str:
        # Custom agent logic here
        return await self.process_message(message)
```

### Agent Configuration

```python
# Configure agent with specific tools
from spoon_ai.tools.crypto_tools import CryptoTools
from spoon_ai.tools.web3_tools import Web3Tools

agent = SpoonReactAI(
    llm=ChatBot(model_name="gpt-4.1", llm_provider="openai"),
    tools=[CryptoTools(), Web3Tools()]
)
```

## Best Practices

### Tool Selection
- Choose tools that match your use case
- Avoid tool overload - too many tools can confuse the agent
- Test tool combinations thoroughly

### Prompt Engineering
- Provide clear, specific instructions
- Include examples of desired behavior
- Set appropriate constraints and guidelines

### Error Handling

- Leverage framework's automatic retry mechanisms
- Use built-in fallback strategies
- Rely on framework's structured error handling

### Framework Error Handling

SpoonOS agents benefit from built-in error resilience:

```python
# Framework handles errors automatically
agent = SpoonReactAI(
    llm=ChatBot(model_name="gpt-4.1", llm_provider="openai"),
    tools=[CryptoTools(), Web3Tools()]
)

# Automatic handling includes:
# - LLM provider failures with fallback
# - Tool execution errors with retry
# - Network issues with graceful degradation
response = await agent.run("Get Bitcoin price and analyze trends")
```

## Performance Considerations

### Memory Usage
- ReAct agents: Lower memory footprint
- Graph agents: Higher memory for complex workflows

### Execution Speed
- Simple tasks: ReAct agents are faster
- Complex workflows: Graph agents are more efficient

### Scalability
- ReAct: Better for high-frequency, simple tasks
- Graph: Better for complex, long-running processes

## Next Steps

### 📚 **Agent Implementation Examples**

#### 🎯 [Intent Graph Demo](../examples/intent-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/intent_graph_demo.py)

**What it demonstrates:**
- Complete Graph agent implementation with intelligent routing
- Long-lived agent architecture with persistent memory
- Advanced state management and context preservation
- Production-ready error handling and recovery

**Key features:**
- Dynamic query routing based on user intent (general_qa → short_term_trend → macro_trend → deep_research)
- True parallel execution across multiple data sources
- Memory persistence and conversation context
- Real-time performance monitoring and metrics

**Best for learning:**
- Graph agent architecture patterns
- Long-running process management
- Advanced memory and state handling
- Production deployment considerations

#### 🔍 [MCP Spoon Search Agent](../examples/mcp-spoon-search-agent.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/mcp/spoon_search_agent.py)

**What it demonstrates:**
- MCP-enabled agent with dynamic tool discovery
- Web search integration with cryptocurrency analysis
- Multi-tool orchestration and data synthesis
- Real-world agent deployment patterns

**Key features:**
- Tavily MCP server integration for web search
- Crypto PowerData tools for market analysis
- Unified analysis combining multiple data sources
- Dynamic tool loading and validation

**Best for learning:**
- MCP protocol implementation
- Multi-tool agent architecture
- Real-time data integration patterns
- Error handling in distributed systems

#### 📊 [Graph Crypto Analysis](../examples/graph-crypto-analysis.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)

**What it demonstrates:**
- Specialized cryptocurrency analysis agent
- LLM-driven decision making throughout the workflow
- Real-time market data processing and analysis
- Investment recommendation generation

**Key features:**
- Real Binance API integration (no simulated data)
- Technical indicator calculation (RSI, MACD, EMA, Bollinger Bands)
- Multi-timeframe analysis and correlation
- Risk assessment and market sentiment analysis

**Best for learning:**
- Domain-specific agent development
- Financial data processing patterns
- LLM-driven workflow automation
- Real API integration in agents

### 🛠️ **Development Guides**

- **[Tools System](./tools.md)** - Complete guide to available tools and integrations
- **[LLM Providers](./llm-providers.md)** - Configure and optimize language models
- **[Build Your First Agent](../how-to-guides/build-first-agent.md)** - Step-by-step agent development tutorial

### 📖 **Advanced Topics**

- **[Graph System](../core-concepts/graph-system.md)** - Advanced workflow orchestration
- **[MCP Protocol](../core-concepts/mcp-protocol.md)** - Dynamic tool discovery and execution
- **[API Reference](../api-reference/agents/base-agent.md)** - Complete agent API documentation
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/intent_graph_demo.py)

**What it demonstrates:**
- Complete Graph agent implementation with intelligent routing
- Long-lived agent architecture with persistent memory
- Advanced state management and context preservation
- Production-ready error handling and recovery

**Key features:**
- Dynamic query routing based on user intent (general_qa → short_term_trend → macro_trend → deep_research)
- True parallel execution across multiple data sources
- Memory persistence and conversation context
- Real-time performance monitoring and metrics

**Best for learning:**
- Graph agent architecture patterns
- Long-running process management
- Advanced memory and state handling
- Production deployment considerations

#### 🔍 [MCP Spoon Search Agent](../examples/mcp-spoon-search-agent.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/mcp/spoon_search_agent.py)

**What it demonstrates:**
- MCP-enabled agent with dynamic tool discovery
- Web search integration with cryptocurrency analysis
- Multi-tool orchestration and data synthesis
- Real-world agent deployment patterns

**Key features:**
- Tavily MCP server integration for web search
- Crypto PowerData tools for market analysis
- Unified analysis combining multiple data sources
- Dynamic tool loading and validation

**Best for learning:**
- MCP protocol implementation
- Multi-tool agent architecture
- Real-time data integration patterns
- Error handling in distributed systems

#### 📊 [Graph Crypto Analysis](../examples/graph-crypto-analysis.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)

**What it demonstrates:**
- Specialized cryptocurrency analysis agent
- LLM-driven decision making throughout the workflow
- Real-time market data processing and analysis
- Investment recommendation generation

**Key features:**
- Real Binance API integration (no simulated data)
- Technical indicator calculation (RSI, MACD, EMA, Bollinger Bands)
- Multi-timeframe analysis and correlation
- Risk assessment and market sentiment analysis

**Best for learning:**
- Domain-specific agent development
- Financial data processing patterns
- LLM-driven workflow automation
- Real API integration in agents

### 🛠️ **Development Guides**

- **[Tools System](./tools.md)** - Complete guide to available tools and integrations
- **[LLM Providers](./llm-providers.md)** - Configure and optimize language models
- **[Build Your First Agent](../how-to-guides/build-first-agent.md)** - Step-by-step agent development tutorial

### 📖 **Advanced Topics**

- **[Graph System](../core-concepts/graph-system.md)** - Advanced workflow orchestration
- **[MCP Protocol](../core-concepts/mcp-protocol.md)** - Dynamic tool discovery and execution
- **[API Reference](../api-reference/agents/base-agent.md)** - Complete agent API documentation
