# Graph System API Reference

The Graph System in SpoonOS provides a powerful, structured approach to building complex multi-step workflows through composable nodes and deterministic execution flows.

## Overview

SpoonOS's graph system enables:

- **Deterministic Execution**: Structured control flow with explicit nodes and edges
- **Intelligent Routing**: Multiple routing strategies (LLM-powered, rule-based, conditional)
- **Parallel Processing**: Concurrent execution with configurable join strategies
- **State Management**: Type-safe state handling with reducer-based merging
- **Memory Integration**: Persistent context across executions

## Core Components

### [StateGraph](state-graph.md)
The main graph execution engine providing LangGraph-style workflow orchestration.

**Key Features:**
- Node and edge management
- Conditional routing
- Parallel execution groups
- LLM-powered routing
- Monitoring and metrics

```python
from spoon_ai.graph import StateGraph

graph = StateGraph(MyState)
graph.add_node("process", my_node)
graph.add_edge("process", "output")
compiled = graph.compile()
```

### [GraphAgent](graph-agent.md)
High-level agent interface for graph execution with memory management and conversation handling.

**Key Features:**
- Persistent memory management
- State preservation across executions
- Execution metadata tracking
- Error recovery and retry logic

```python
from spoon_ai.graph import GraphAgent

agent = GraphAgent("my_agent", graph, preserve_state=True)
result = await agent.run("Process this request")
```

### [Base Node Classes](base-node.md)
Building blocks for graph execution with specialized node types.

**Node Types:**
- `RunnableNode`: Wraps functions (sync/async)
- `ToolNode`: Executes tools from state
- `ConditionNode`: Handles routing decisions
- `BaseNode`: Abstract base for custom nodes

```python
from spoon_ai.graph import RunnableNode, ToolNode

# Function node
func_node = RunnableNode("analyzer", analyze_function)

# Tool node
tool_node = ToolNode("executor", [calculator_tool, search_tool])
```

## Quick Start

### Basic Graph Creation

```python
from typing import TypedDict
from spoon_ai.graph import StateGraph, END

class MyState(TypedDict):
    query: str
    result: str

async def process_query(state: MyState) -> dict:
    return {"result": f"Processed: {state['query']}"}

# Build graph
graph = StateGraph(MyState)
graph.add_node("processor", process_query)
graph.set_entry_point("processor")
graph.add_edge("processor", END)

# Execute
compiled = graph.compile()
result = await compiled.invoke({"query": "Hello Graph!"})
print(result["result"])  # "Processed: Hello Graph!"
```

### Agent with Memory

```python
from spoon_ai.graph import GraphAgent

# Create agent
agent = GraphAgent(
    name="chatbot",
    graph=my_graph,
    preserve_state=True
)

# Execute with memory persistence
response1 = await agent.run("Hello")
response2 = await agent.run("How are you?")  # Context preserved
```

## Advanced Patterns

### Conditional Routing

```python
def route_by_length(state: MyState) -> str:
    return "long" if len(state["query"]) > 50 else "short"

graph.add_conditional_edges(
    "processor",
    route_by_length,
    {"long": "detailed_analysis", "short": "quick_response"}
)
```

### Parallel Execution

```python
graph.add_parallel_group(
    "parallel_tasks",
    ["fetch_data", "analyze_trends", "generate_report"],
    {"join_strategy": "all_complete"}
)
```

### LLM-Powered Routing

```python
graph.enable_llm_routing({
    "model": "gpt-4",
    "temperature": 0.1
})
```

## State Management

### State Schema Definition

```python
from typing import TypedDict, Optional, Annotated

class AnalysisState(TypedDict):
    user_query: str
    analysis_type: str
    results: Annotated[Optional[Dict], None]
    confidence: Annotated[float, "0.0 to 1.0"]
    metadata: Annotated[Optional[Dict], None]
```

### State Updates

Nodes return dictionaries that update the graph state:

```python
async def analysis_node(state: AnalysisState) -> Dict[str, Any]:
    # Process state
    result = await analyze(state["user_query"])

    # Return state updates
    return {
        "results": result,
        "confidence": result.confidence,
        "analysis_type": "comprehensive"
    }
```

## Memory Integration

### Agent Memory

```python
agent = GraphAgent("analyzer", graph, preserve_state=True)

# Memory persists across executions
await agent.run("First analysis")
stats = agent.get_memory_statistics()
```

### Node-Level Memory

```python
async def load_context(state: MyState) -> Dict[str, Any]:
    # Load from persistent storage
    context = await load_user_context(state["user_id"])
    return {"context": context}

async def save_context(state: MyState) -> Dict[str, Any]:
    # Save to persistent storage
    await save_user_context(state["user_id"], state["context"])
    return {}
```

## Error Handling

### Node-Level Errors

```python
from spoon_ai.graph.exceptions import NodeExecutionError

async def robust_node(state: MyState) -> Dict[str, Any]:
    try:
        result = await risky_operation(state)
        return {"result": result, "success": True}
    except Exception as e:
        return {"error": str(e), "success": False}
```

### Graph-Level Recovery

```python
try:
    result = await compiled.invoke(state)
except Exception as e:
    # Handle graph execution errors
    print(f"Graph execution failed: {e}")
    # Implement recovery logic
```

## Monitoring and Debugging

### Execution Metrics

```python
graph.enable_monitoring(["execution_time", "success_rate"])
compiled = graph.compile()
result = await compiled.invoke(state)
metrics = compiled.get_execution_metrics()
```

### Agent Statistics

```python
stats = agent.get_memory_statistics()
metadata = agent.get_execution_metadata()
```

## Best Practices

### Node Design
- Keep nodes focused on single responsibilities
- Use descriptive node names
- Handle errors gracefully within nodes

### State Management
- Define clear state schemas
- Use type annotations for validation
- Keep state size manageable

### Routing Strategy
- Prefer conditional edges for deterministic routing
- Use LLM routing for complex decisions
- Combine multiple routing approaches

### Performance
- Enable monitoring to identify bottlenecks
- Use parallel groups for I/O operations
- Consider state serialization impact

## Integration Examples

### With LLM Manager

```python
from spoon_ai.llm import LLMManager

llm_manager = LLMManager()

async def llm_node(state: MyState) -> Dict[str, Any]:
    response = await llm_manager.generate(
        prompt=state["query"],
        model="gpt-4"
    )
    return {"llm_response": response}
```

### With Tool Manager

```python
from spoon_ai.tools import ToolManager

tool_manager = ToolManager()

async def tool_node(state: MyState) -> Dict[str, Any]:
    results = []
    for tool_call in state["tool_calls"]:
        result = await tool_manager.execute_tool(tool_call)
        results.append(result)
    return {"tool_results": results}
```

## Migration from Other Frameworks

### From LangChain/LangGraph

```python
# SpoonOS equivalent of LangGraph patterns
from spoon_ai.graph import StateGraph, END

# Similar API design
graph = StateGraph(State)
graph.add_node("node", my_function)
graph.add_edge("node", END)
```

### From Custom Workflow Engines

```python
# SpoonOS provides more structure and type safety
graph = StateGraph(TypedDictState)  # Type-safe state
graph.enable_monitoring()  # Built-in monitoring
agent = GraphAgent("name", graph)  # Memory and persistence
```

## Troubleshooting

### Common Issues

- **Node not found**: Ensure all referenced nodes are added to the graph
- **Edge validation errors**: Check that source/destination nodes exist
- **State serialization**: Keep state objects simple and serializable
- **Memory growth**: Clear agent memory periodically for long-running processes

### Debugging Tools

```python
# Enable detailed logging
import logging
logging.getLogger("spoon_ai.graph").setLevel(logging.DEBUG)

# Inspect graph structure
print(graph.get_graph())

# Monitor execution
graph.enable_monitoring()
metrics = compiled.get_execution_metrics()
```

## See Also

- [Graph System Overview](../../core-concepts/graph-system.md) - Conceptual introduction
- [Graph Crypto Analysis](../../examples/graph-crypto-analysis.md) - Complete example
- [Comprehensive Graph Demo](../../examples/comprehensive-graph-demo.md) - Advanced patterns
- [Performance Optimization](../../troubleshooting/performance.md) - Tuning guides

