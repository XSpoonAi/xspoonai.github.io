# Graph System

The Graph System in SpoonOS enables complex, multi-step workflows through a modern declarative execution engine that supports intelligent routing, parallel execution, and state management. Built around `StateGraph` with powerful declarative building tools.

## What you get

- **Declarative graph construction**: `GraphTemplate`, `NodeSpec`, and `EdgeSpec` for modular workflows
- **High-level API integration**: `HighLevelGraphAPI` for automatic parameter inference and intent analysis
- **Intelligent routing**: LLM router, rule-based, and conditional functions with priority systems
- **Advanced parallel execution**: concurrent branches with join strategies, timeouts, and retry policies
- **Type-safe state management**: Pydantic-based configuration and reducer-based merging
- **Memory integration**: persistent context across runs with automatic memory updates

---

## Declarative Graph Building (Recommended)

The modern approach uses `GraphTemplate` for declarative construction, making graphs more maintainable and reusable.

```python
from typing import TypedDict, Dict, Any, Optional, Annotated
from spoon_ai.graph.builder import (
    DeclarativeGraphBuilder, GraphTemplate, NodeSpec, EdgeSpec,
    ParallelGroupSpec, ParallelGroupConfig, HighLevelGraphAPI
)
from spoon_ai.graph.config import GraphConfig, ParallelRetryPolicy
from spoon_ai.graph import StateGraph, END


class MyState(TypedDict):
    user_query: str
    intent: str
    result: str
    memory: Annotated[Optional[Dict[str, Any]], None]


async def analyze_intent(state: MyState, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """LLM-powered intent analysis with automatic parameter inference"""
    query = state.get("user_query", "").lower()
    intent = "greet" if "hello" in query else "other"
    return {"intent": intent}


async def generate_result(state: MyState, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """Generate response based on detected intent"""
    intent = state.get("intent", "other")
    if intent == "greet":
        return {"result": "Hi! How can I help?"}
    return {"result": "Let me analyze that..."}


def build_declarative_graph() -> StateGraph:
    """Build graph using declarative templates"""

    # Define nodes with specifications
    nodes = [
        NodeSpec("analyze_intent", analyze_intent),
        NodeSpec("generate_result", generate_result),
    ]

    # Define edges
    edges = [
        EdgeSpec("analyze_intent", "generate_result"),
        EdgeSpec("generate_result", END),
    ]

    # Define parallel groups (if needed)
    parallel_groups = []

    # Configure graph settings
    config = GraphConfig(max_iterations=100)

    # Create template
    template = GraphTemplate(
        entry_point="analyze_intent",
        nodes=nodes,
        edges=edges,
        parallel_groups=parallel_groups,
        config=config
    )

    # Build graph
    builder = DeclarativeGraphBuilder(MyState)
    graph = builder.build(template)

    # Enable monitoring
    if hasattr(graph, "enable_monitoring"):
        graph.enable_monitoring([
            "execution_time",
            "llm_response_quality",
            "routing_performance"
        ])

    return graph


# High-level API usage
async def run_with_high_level_api(query: str) -> Dict[str, Any]:
    """Use HighLevelGraphAPI for automatic parameter inference"""
    api = HighLevelGraphAPI(state_schema=MyState)

    intent, initial_state = await api.build_initial_state(query)

    # Build and run graph
    graph = build_declarative_graph()
    compiled = graph.compile()

    return await compiled.invoke(initial_state)
```

Execute:

```python
# Simple execution
compiled = build_declarative_graph().compile()
result = await compiled.invoke({"user_query": "hello graph"})
print(result["result"])  # Hi! How can I help?

# Advanced execution with high-level API
result = await run_with_high_level_api("analyze crypto trends")
```

---

## Intelligent Routing

SpoonOS offers advanced routing capabilities with priority-based decision making. Routes are evaluated in order: LLM router → intelligent rules → conditional edges → regular edges.

### 1) High-Level API Router (Recommended)

```python
# Using HighLevelGraphAPI for automatic intent-based routing
async def route_with_high_level_api(state: MyState) -> str:
    api = HighLevelGraphAPI(state_schema=MyState)
    intent = await api.intent_analyzer.analyze(state.get("user_query", ""))
    # Route based on the detected intent category
    return intent.category
```

### 2) LLM-Powered Router

```python
# Configure LLM router with priority system
graph.enable_llm_routing(config={
    "model": "gpt-4",
    "temperature": 0.1,
    "max_tokens": 64
})
```

### 3) Conditional Edges (function-based)

```python
def route_after_intent(state: MyState) -> str:
    return "path_a" if state.get("intent") == "greet" else "path_b"

graph.add_conditional_edges(
    "analyze_intent",
    route_after_intent,
    {"path_a": "generate_result", "path_b": "fallback"}
)
```

### 4) Rules and Patterns

```python
# Add routing rules with priorities
graph.add_routing_rule(
    "analyze_intent",
    lambda s, q: "price" in q,
    target_node="fetch_prices",
    priority=10
)
graph.add_pattern_routing(
    "analyze_intent",
    r"buy|sell|trade",
    target_node="make_decision",
    priority=5
)
```

---

## Advanced Parallel Execution

Define parallel groups with sophisticated control strategies for optimal performance.

```python
# Configure parallel group with advanced settings
parallel_config = ParallelGroupConfig(
    join_strategy="all",  # accepts aliases like "all_complete", quorum, any_first
    error_strategy="collect_errors",  # ignore_errors, fail_fast, collect_errors
    timeout=30,
    retry_policy=ParallelRetryPolicy(
        max_retries=3,
        backoff_multiplier=2.0,
    ),
    circuit_breaker_threshold=5,
    max_in_flight=10
)

graph.add_parallel_group(
    "fetch_group",
    ["fetch_prices", "fetch_social", "fetch_news"],
    config=parallel_config
)
```

Advanced join strategies:
- **`all`** (alias `all_complete`): Wait for all branches (default)
- **`quorum`**: Wait for majority (e.g., 2 out of 3)
- **`any_first`**: Return first successful result

---

## Memory Integration

### A) High-Level API Memory (Recommended)

Use the built-in `Memory` helper for persistence alongside your graphs.

```python
from spoon_ai.graph.agent import Memory

# Load memory into state before execution
async def load_memory_with_api(state: MyState) -> Dict[str, Any]:
    mem = Memory(session_id=state.get("user_name", "default"))
    return {"memory": mem.get_messages(), "__memory_obj__": mem}

# Update memory after execution
async def update_memory_with_api(state: MyState) -> Dict[str, Any]:
    mem = state.get("__memory_obj__") or Memory(session_id=state.get("user_name", "default"))
    mem.add_message({"content": state.get("intent", "unknown")})
    return {}
```

### B) Node-Level Memory (Custom)

Add memory nodes for fine-grained control.

```python
async def load_memory(state: MyState) -> Dict[str, Any]:
    # Custom memory loading logic
    return {"memory": {"preferences": {}, "history": []}}

async def update_memory(state: MyState) -> Dict[str, Any]:
    # Custom memory update logic
    return {"memory": state.get("memory", {})}
```

---

## Configuration-Driven Design

Use `GraphConfig` for comprehensive graph configuration. Supported fields today are `max_iterations`, `router`, `state_validators`, and `parallel_groups`—legacy options like `state_reducer_max_list_length` or `enable_monitoring` are not part of the current API.

```python
# Configure graph behavior
from spoon_ai.graph.config import RouterConfig

config = GraphConfig(
    max_iterations=100,
    router=RouterConfig(
        allow_llm=True,
        default_target="generate_result"
    )
)

template = GraphTemplate(
    entry_point="analyze_intent",
    nodes=nodes,
    edges=edges,
    parallel_groups=parallel_groups,
    config=config
)

# Enable monitoring on the graph instance
graph = DeclarativeGraphBuilder(MyState).build(template)
graph.enable_monitoring(["execution_time", "routing_performance"])
```

---

## Monitoring and Metrics

```python
# Enable comprehensive monitoring
graph.enable_monitoring([
    "execution_time",
    "success_rate",
    "routing_performance",
    "llm_response_quality",
    "parallel_branch_efficiency"
])

compiled = graph.compile()
result = await compiled.invoke({"user_query": "..."})

# Get detailed metrics
metrics = compiled.get_execution_metrics()
print(f"Execution time: {metrics.get('execution_time', 0)}s")
print(f"LLM calls: {metrics.get('llm_calls', 0)}")
print(f"Routing accuracy: {metrics.get('routing_accuracy', 0)}%")
```

---

## End-to-End Declarative Example

Complete example using declarative templates and high-level API.

```python
from spoon_ai.graph import StateGraph, END
from spoon_ai.graph.builder import (
    DeclarativeGraphBuilder, GraphTemplate, NodeSpec, EdgeSpec,
    ParallelGroupSpec, HighLevelGraphAPI
)
from spoon_ai.graph.config import GraphConfig


class CryptoAnalysisState(TypedDict):
    user_query: str
    symbol: str
    timeframes: List[str]
    market_data: Dict[str, Any]
    analysis_result: str
    memory: Annotated[Optional[Dict[str, Any]], None]


async def fetch_market_data(state: CryptoAnalysisState, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """Fetch market data for multiple timeframes in parallel"""
    symbol = state.get("symbol", "BTC")
    timeframes = state.get("timeframes", ["1h", "4h"])

    # Parallel fetching logic here
    return {"market_data": {"symbol": symbol, "data": "..."}}


async def analyze_market(state: CryptoAnalysisState, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """LLM-powered market analysis"""
    # Analysis logic here
    return {"analysis_result": "Market analysis complete"}


def build_crypto_analysis_graph() -> StateGraph:
    """Build complete crypto analysis workflow"""

    nodes = [
        NodeSpec("fetch_market_data", fetch_market_data, parallel_group="data_collection"),
        NodeSpec("analyze_market", analyze_market),
    ]

    edges = [
        EdgeSpec("fetch_market_data", "analyze_market"),
        EdgeSpec("analyze_market", END),
    ]

    parallel_groups = [
        ParallelGroupSpec(
            name="data_collection",
            nodes=["fetch_market_data"],
            config=ParallelGroupConfig(join_strategy="all")  # "all_complete" is accepted; "all" is preferred
        )
    ]

    config = GraphConfig(max_iterations=100)

    template = GraphTemplate(
        entry_point="fetch_market_data",
        nodes=nodes,
        edges=edges,
        parallel_groups=parallel_groups,
        config=config
    )

    builder = DeclarativeGraphBuilder(CryptoAnalysisState)
    return builder.build(template)


# High-level API integration
async def run_crypto_analysis(query: str) -> Dict[str, Any]:
    """Complete analysis using high-level API"""
    api = HighLevelGraphAPI(state_schema=CryptoAnalysisState)

    # Automatic parameter inference is included in build_initial_state
    intent, initial_state = await api.build_initial_state(query)
    # If you need additional parameters, call:
    # extra = await api.parameter_inference.infer_parameters(query, intent)
    # initial_state.update(extra)

    # Build and execute graph
    graph = build_crypto_analysis_graph()
    compiled = graph.compile()

    return await compiled.invoke(initial_state)
```

---

## Memory System Integration

The graph runtime builds on the SpoonOS Memory System to persist context, metadata, and execution state across runs. Every compiled graph can attach a `Memory` store so routers, reducers, and agents reason over accumulated history without bespoke plumbing.

### Overview

- Persistent JSON-backed storage keyed by `session_id`
- Chronological message history with metadata enrichment
- Query helpers for search and time-based filtering
- Automatic wiring inside `GraphAgent` and high-level APIs

### Core Components

```python
from spoon_ai.graph.agent import Memory

# Use default storage path (~/.spoon_ai/memory)
default_memory = Memory()

# Customize location and session isolation
scoped_memory = Memory(storage_path="./custom_memory", session_id="my_session")
```

- **Persistent storage** keeps transcripts and state checkpoints on disk
- **Session management** separates contexts per agent or user
- **Metadata fields** let reducers store structured state
- **Search helpers** (`search_messages`, `get_recent_messages`) surface relevant history

### Basic Usage Patterns

```python
message = {"role": "user", "content": "Hello, how can I help?"}
scoped_memory.add_message(message)

all_messages = scoped_memory.get_messages()
recent = scoped_memory.get_recent_messages(hours=24)
metadata = scoped_memory.get_metadata("last_topic")
```

Use metadata to thread routing hints and conversation topics, and prune history with retention policies or manual cleanup (`memory.clear()`).

### Graph Workflow Integration

`GraphAgent` wires memory automatically and exposes statistics for monitoring:

```python
from spoon_ai.graph import GraphAgent, StateGraph

agent = GraphAgent(
    name="crypto_analyzer",
    graph=my_graph,
    memory_path="./agent_memory",
    session_id="crypto_session"
)

result = await agent.run("Analyze BTC trends")
stats = agent.get_memory_statistics()
print(stats["total_messages"])
```

Switch between sessions to isolate experiments (`agent.load_session("research_session")`) or inject custom `Memory` subclasses for domain-specific validation.

### Advanced Patterns

- Call `memory.get_statistics()` to monitor file size, last update time, and record counts
- Implement custom subclasses to enforce schemas or add enrichment hooks
- Use time-window retrieval for reducers that need the most recent facts only
- Build automated cleanup jobs for oversized stores (>10MB) to keep execution tight

### Troubleshooting

```python
import json
try:
    with open(scoped_memory.session_file, "r") as fh:
        json.load(fh)
except json.JSONDecodeError:
    scoped_memory.clear()  # Reset corrupted memory files
```

Conflicts typically trace back to duplicated session IDs—compose unique identifiers with timestamps or agent names to avoid contention.

---

## Best Practices

- **Use declarative templates**: `GraphTemplate` + `NodeSpec` for maintainable workflows
- **Leverage high-level API**: `HighLevelGraphAPI` for automatic parameter inference
- **Configure parallel execution**: Use `ParallelGroupConfig` for optimal performance
- **Implement proper error handling**: Use retry policies and circuit breakers
- **Monitor performance**: Enable metrics and use `get_execution_metrics()`
- **Keep state bounded**: Use `state_validators` or custom reducers; `GraphConfig` currently supports `max_iterations`, `router`, `state_validators`, and `parallel_groups`

---

## Next Steps

### 📚 **Hands-on Examples**

#### 🎯 [Declarative Crypto Analysis](../examples/graph-crypto-analysis.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)

**What it demonstrates:**
- Complete end-to-end cryptocurrency analysis pipeline using declarative templates
- LLM-driven decision making from data collection to investment recommendations
- Real-time technical indicator calculation (RSI, MACD, EMA) with PowerData toolkit
- Multi-timeframe analysis with advanced parallel processing
- High-level API integration for automatic parameter inference

**Key features:**
- Declarative `GraphTemplate` construction
- `HighLevelGraphAPI` for intent analysis and parameter inference
- Real Binance API integration with error recovery
- Comprehensive market analysis with actionable insights

#### 🔧 [Declarative Intent Graph Demo](../examples/intent-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/intent_graph_demo.py)

**What it demonstrates:**
- Intelligent query routing system using `HighLevelGraphAPI`
- True parallel execution across multiple timeframes
- Advanced memory management with persistent context
- LLM-powered routing decisions and summarization
- Declarative graph construction with fresh node implementations

**Key features:**
- `GraphTemplate` and `NodeSpec` for modular workflow construction
- `ParameterInferenceEngine` for automatic parameter extraction
- Dynamic workflow routing based on user intent
- Concurrent data fetching for optimal performance

### 🛠️ **Integration Guides**

- **[Tools Integration](./tools.md)** - Learn how to integrate external capabilities and APIs
- **[Agent Architecture](./agents.md)** - Understand when to wrap graphs with long-lived agents
- **[MCP Protocol](../core-concepts/mcp-protocol.md)** - Explore dynamic tool discovery and execution

### 📖 **Additional Resources**
- **[State Management](../api-reference/graph/state-graph.md)** - Reducer configuration guide
- **[Agents Detailed](./agents-detailed.md)** - Long-lived agent design patterns
- **[Graph Builder API](../api-reference/graph/)** - Complete declarative API documentation
- **[Performance Optimization](../troubleshooting/performance.md)** - Graph performance tuning guides
- **[Troubleshooting](../troubleshooting/common-issues.md)** - Common issues and solutions
