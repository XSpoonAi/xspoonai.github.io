# StateGraph API Reference

The `StateGraph` class is the core of SpoonOS's graph execution engine, providing a structured way to build complex, multi-step workflows with deterministic control flow.

## Class Definition

```python
from spoon_ai.graph import StateGraph
from typing import TypeVar, TypedDict

State = TypeVar('State')

class StateGraph(Generic[State]):
    def __init__(
        self,
        state_schema: type,
        checkpointer: Optional[Any] = None,
        config_schema: Optional[type] = None
    )
```

## Constructor Parameters

### Required Parameters

- **state_schema** (`type`): Type definition for the graph state (usually a TypedDict class)

### Optional Parameters

- **checkpointer** (`Optional[Any]`): Checkpointer instance for state persistence
- **config_schema** (`Optional[type]`): Configuration schema for the graph

## Core Methods

### Graph Construction

#### `add_node(node_name: str, node: Union[BaseNode[State], Callable]) -> StateGraph`

Add a node to the graph. Nodes can be either `BaseNode` instances or callable functions.

**Parameters:**
- `node_name` (str): Unique identifier for the node
- `node` (Union[BaseNode, Callable]): Node implementation

**Returns:**
- `StateGraph`: Self for method chaining

**Example:**
```python
async def analyze_query(state: MyState) -> Dict[str, Any]:
    return {"analysis": "processed"}

graph = StateGraph(MyState)
graph.add_node("analyzer", analyze_query)
```

#### `add_edge(start_node: str, end_node: str, condition: Callable[[State], bool] | None = None) -> StateGraph`

Add an edge between nodes. When `condition` is provided, the edge is only taken if the predicate returns `True`.

**Parameters:**
- `start_node` (str): Starting node name
- `end_node` (str): Ending node name
- `condition` (callable, optional): Predicate that receives the current state

**Returns:**
- `StateGraph`: Self for method chaining

**Example:**
```python
graph.add_edge("analyzer", "summarizer")                     # unconditional
graph.add_edge("retryable_step", "retryable_step", lambda s: s["needs_retry"])
```

#### `set_entry_point(node_name: str) -> StateGraph`

Set the graph's entry point node.

**Parameters:**
- `node_name` (str): Name of the entry point node

**Returns:**
- `StateGraph`: Self for method chaining

**Example:**
```python
graph.set_entry_point("analyzer")
```

### Compilation and Execution

#### `compile(checkpointer: Optional[Any] = None) -> CompiledGraph`

Compile the graph into an executable form.

**Parameters:**
- `checkpointer` (Optional[Any]): Optional checkpointer for execution

**Returns:**
- `CompiledGraph`: Compiled executable graph

**Raises:**
- `GraphConfigurationError`: If graph has configuration issues

**Example:**
```python
compiled_graph = graph.compile()
result = await compiled_graph.invoke({"query": "analyze market"})
```

## State Management

### State Schema Definition

```python
from typing import TypedDict, Optional, Annotated

class MyState(TypedDict):
    user_query: str
    analysis_result: Optional[str]
    confidence_score: Annotated[float, "0.0 to 1.0"]
    metadata: Annotated[Optional[Dict[str, Any]], None]
```

### State Updates

Nodes return dictionaries that update the graph state:

```python
async def analysis_node(state: MyState) -> Dict[str, Any]:
    # Process state
    result = await analyze(state["user_query"])

    # Return state updates
    return {
        "results": result,
        "confidence": result.confidence,
        "analysis_type": "comprehensive"
    }
```

## Execution Flow

### Basic Execution

```python
# Build graph
graph = StateGraph(MyState)
graph.add_node("process", my_node)
graph.add_edge("process", "output")
graph.set_entry_point("process")
graph.add_edge("process", END)

# Execute
compiled = graph.compile()
result = await compiled.invoke({
    "user_query": "Hello Graph!",
    "analysis_result": None
})

print(result["analysis_result"])
```

### With Conditional Routing

```python
def route_by_complexity(state: MyState) -> str:
    query_length = len(state.get("user_query", ""))
    return "deep_analysis" if query_length > 100 else "quick_answer"

graph.add_conditional_edges(
    "analyze",
    route_by_complexity,
    {
        "deep_analysis": "deep_analyzer",
        "quick_answer": "quick_responder"
    }
)
```

## See Also

- [Graph Agent API](graph-agent.md) - Agent wrapper for graphs
- [Base Node API](base-node.md) - Node implementation details
- [Graph System Overview](../../core-concepts/graph-system.md) - Conceptual overview
