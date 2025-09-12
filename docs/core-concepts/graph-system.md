# Graph System

The Graph System in SpoonOS enables complex, multi-step workflows through a structured, node-and-edge execution engine called `StateGraph`.

## What you get

- **Deterministic control flow**: explicit nodes and edges
- **Intelligent routing**: LLM router, rule-based, and conditional functions
- **Parallel execution**: run branches concurrently with join strategies
- **State management**: type-safe, reducer-based merging across steps
- **Memory integration**: persist context across runs or update memory as a node

---

## Quick Start with StateGraph

```python
from typing import TypedDict, Dict, Any, Optional, Annotated
from spoon_ai.graph import StateGraph, END


class MyState(TypedDict):
    user_query: str
    intent: str
    result: str
    memory: Annotated[Optional[Dict[str, Any]], None]


async def analyze_intent(state: MyState) -> Dict[str, Any]:
    # Use your LLM manager here in real code
    query = state.get("user_query", "").lower()
    intent = "greet" if "hello" in query else "other"
    return {"intent": intent}


async def generate_result(state: MyState) -> Dict[str, Any]:
    intent = state.get("intent", "other")
    if intent == "greet":
        return {"result": "Hi! How can I help?"}
    return {"result": "Let me analyze that..."}


def build_graph() -> StateGraph:
    graph = StateGraph(MyState)
    graph.add_node("analyze_intent", analyze_intent)
    graph.add_node("generate_result", generate_result)
    graph.set_entry_point("analyze_intent")
    graph.add_edge("analyze_intent", "generate_result")
    graph.add_edge("generate_result", END)
    return graph
```

Execute:

```python
compiled = build_graph().compile()
result = await compiled.invoke({"user_query": "hello graph"})
print(result["result"])  # Hi! How can I help?
```

---

## Intelligent Routing

SpoonOS offers three complementary routing styles. You can combine them; precedence is: LLM router → intelligent rules → regular edges.

### 1) LLM-Powered Router

```python
graph.enable_llm_routing(config={"model": "gpt-4", "temperature": 0.1, "max_tokens": 64})
```

The engine will ask the LLM to select the best next node name based on the query and state. Results are validated against available nodes.

### 2) Conditional Edges (function-based)

```python
def route_after_intent(state: MyState) -> str:
    return "path_a" if state.get("intent") == "greet" else "path_b"

graph.add_conditional_edges(
    "analyze_intent",
    route_after_intent,
    {"path_a": "generate_result", "path_b": "fallback"}
)
```

### 3) Rules and Patterns

```python
graph.add_routing_rule("analyze_intent", lambda s, q: "price" in q, target_node="fetch_prices", priority=10)
graph.add_pattern_routing("analyze_intent", r"buy|sell|trade", target_node="make_decision", priority=5)
```

---

## Parallel Execution

Group nodes and run them concurrently with explicit join strategies.

```python
graph.add_parallel_group(
    "fetch_group",
    ["fetch_prices", "fetch_social", "fetch_news"],
    {"join_strategy": "all_complete", "error_strategy": "ignore_errors", "timeout": 15}
)
```

If the current node belongs to a parallel group, the engine gathers all branch updates and merges them into state using reducers.

---

## Memory Integration

You can integrate memory in two ways:

### A) Agent Memory (recommended for agent use)

Use `GraphAgent` persistent memory to store messages and metadata.

```python
from spoon_ai.graph import GraphAgent

graph = build_graph()
agent = GraphAgent(name="demo", graph=graph, preserve_state=True)
await agent.run("hello")
stats = agent.get_memory_statistics()
```

### B) Node-Level Memory (demo-style)

Add memory as regular nodes at graph entry/exit to load/update per-user context.

```python
async def load_memory(state: MyState) -> Dict[str, Any]:
    # read your JSON or DB here; keep it small and safe
    return {"memory": {"greet_count": 3}}

async def update_memory(state: MyState) -> Dict[str, Any]:
    # write back learned patterns/statistics
    return {"memory": state.get("memory", {})}

graph.add_node("load_memory", load_memory)
graph.add_node("update_memory", update_memory)
graph.add_edge("__start__", "load_memory")  # entry
graph.add_edge("load_memory", "analyze_intent")
graph.add_edge("generate_result", "update_memory")
graph.add_edge("update_memory", END)
```

---

## Monitoring and Metrics

```python
graph.enable_monitoring(["execution_time", "success_rate", "routing_performance"])
compiled = graph.compile()
result = await compiled.invoke({"user_query": "..."})
metrics = compiled.get_execution_metrics()
```

---

## End-to-End Example (Intent → Parallel Fetch → Analysis → Memory)

The full example (used in our demo) routes a crypto query into `general_qa`, `short_term_trend`, `macro_trend`, or `deep_research`, runs true parallel data fetching, and updates memory before finishing.

```python
from typing import TypedDict, Dict, Any, Optional, Annotated
from spoon_ai.graph import StateGraph, END


class AdvancedState(TypedDict):
    user_query: str
    user_name: str
    session_id: str
    symbol: str
    query_analysis: Annotated[Optional[Dict[str, Any]], None]
    final_output: str
    memory_state: Annotated[Optional[Dict[str, Any]], None]


async def initialize_session(state: AdvancedState) -> Dict[str, Any]:
    return {"session_id": "session_...", "final_output": ""}


async def analyze_query_intent(state: AdvancedState) -> Dict[str, Any]:
    # Ask LLM to classify into: general_qa | short_term_trend | macro_trend | deep_research
    category = "macro_trend"  # pretend LLM said so
    return {"query_analysis": {"query_type": category}}


async def load_memory(state: AdvancedState) -> Dict[str, Any]:
    return {"memory_state": {"learned_patterns": {"query_type_counts": {"macro_trend": 12}}}}


async def update_memory(state: AdvancedState) -> Dict[str, Any]:
    # persist updated counts, last summary, per-symbol stats, etc.
    return {}


def build_advanced_graph() -> StateGraph:
    g = StateGraph(AdvancedState).enable_monitoring(["execution_time"])
    g.add_node("initialize_session", initialize_session)
    g.add_node("load_memory", load_memory)
    g.add_node("analyze_query_intent", analyze_query_intent)
    # ... add: extract_symbol, fetch_15m/30m/1h, fetch_4h/1d/1w, search_news, analysis nodes, etc.
    g.add_node("update_memory", update_memory)

    g.set_entry_point("initialize_session")
    g.add_edge("initialize_session", "load_memory")
    g.add_edge("load_memory", "analyze_query_intent")

    # Conditional routing (function based)
    def route(state: AdvancedState) -> str:
        qt = (state.get("query_analysis") or {}).get("query_type", "general_qa")
        return qt

    g.add_conditional_edges(
        "analyze_query_intent",
        route,
        {
            "general_qa": "general_qa",
            "short_term_trend": "extract_symbol",
            "macro_trend": "extract_symbol",
            "deep_research": "deep_research_search",
        },
    )

    # All terminal paths go through memory update
    g.add_edge("general_qa", "update_memory")
    g.add_edge("analyze_macro_trend", "update_memory")
    g.add_edge("analyze_short_term_trend", "update_memory")
    g.add_edge("deep_research_synthesize", "update_memory")
    g.add_edge("update_memory", END)
    return g
```

See a full working version in the Cookbook example linked below.

---

## Best Practices

- **Keep nodes focused**: one responsibility per node
- **Prefer conditional edges** for deterministic routing; layer LLM router for flexibility
- **Use parallel groups** for I/O-bound branches; choose join strategies wisely
- **Bound state growth**: reducers should cap list sizes; keep memory small
- **Monitor** execution and inspect `compiled.get_execution_metrics()`

---

## Next Steps

### 📚 **Hands-on Examples**

#### 🎯 [Graph Crypto Analysis](../examples/graph-crypto-analysis.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)

**What it demonstrates:**
- Complete end-to-end cryptocurrency analysis pipeline
- LLM-driven decision making from data collection to investment recommendations
- Real-time technical indicator calculation (RSI, MACD, EMA)
- Multi-timeframe analysis with parallel data processing
- Advanced state management and error recovery

**Key features:**
- Real Binance API integration (no simulated data)
- Intelligent token selection based on market conditions
- Comprehensive market analysis with actionable insights
- Production-ready error handling and performance optimization

#### 🔧 [Comprehensive Graph Demo](../examples/comprehensive-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/comprehensive_graph_demo.py)

**What it demonstrates:**
- Intelligent query routing system (general_qa → short_term_trend → macro_trend → deep_research)
- True parallel execution across multiple timeframes (15m, 30m, 1h, 4h, daily, weekly)
- Advanced memory management with persistent context
- LLM-powered routing decisions and summarization
- Production-style graph architecture

**Key features:**
- Dynamic workflow routing based on user intent
- Concurrent data fetching for optimal performance
- Memory persistence across graph executions
- Comprehensive error handling and recovery

### 🛠️ **Integration Guides**

- **[Tools Integration](./tools.md)** - Learn how to integrate external capabilities and APIs
- **[Agent Architecture](./agents.md)** - Understand when to wrap graphs with long-lived agents
- **[MCP Protocol](../core-concepts/mcp-protocol.md)** - Explore dynamic tool discovery and execution

### 📖 **Additional Resources**

- **[StateGraph API Reference](../api-reference/tools/base-tool.md)** - Complete API documentation
- **[Performance Optimization](../troubleshooting/performance.md)** - Graph performance tuning guides
- **[Troubleshooting](../troubleshooting/common-issues.md)** - Common issues and solutions


**What it demonstrates:**
- Complete end-to-end cryptocurrency analysis pipeline
- LLM-driven decision making from data collection to investment recommendations
- Real-time technical indicator calculation (RSI, MACD, EMA)
- Multi-timeframe analysis with parallel data processing
- Advanced state management and error recovery

**Key features:**
- Real Binance API integration (no simulated data)
- Intelligent token selection based on market conditions
- Comprehensive market analysis with actionable insights
- Production-ready error handling and performance optimization

#### 🔧 [Comprehensive Graph Demo](../examples/comprehensive-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-ai/tree/main/spoon-cookbook/example/comprehensive_graph_demo.py)

**What it demonstrates:**
- Intelligent query routing system (general_qa → short_term_trend → macro_trend → deep_research)
- True parallel execution across multiple timeframes (15m, 30m, 1h, 4h, daily, weekly)
- Advanced memory management with persistent context
- LLM-powered routing decisions and summarization
- Production-style graph architecture

**Key features:**
- Dynamic workflow routing based on user intent
- Concurrent data fetching for optimal performance
- Memory persistence across graph executions
- Comprehensive error handling and recovery

### 🛠️ **Integration Guides**

- **[Tools Integration](./tools.md)** - Learn how to integrate external capabilities and APIs
- **[Agent Architecture](./agents.md)** - Understand when to wrap graphs with long-lived agents
- **[MCP Protocol](../core-concepts/mcp-protocol.md)** - Explore dynamic tool discovery and execution

### 📖 **Additional Resources**

- **[StateGraph API Reference](../api-reference/tools/base-tool.md)** - Complete API documentation
- **[Performance Optimization](../troubleshooting/performance.md)** - Graph performance tuning guides
- **[Troubleshooting](../troubleshooting/common-issues.md)** - Common issues and solutions
