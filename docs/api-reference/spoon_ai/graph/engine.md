---
id: spoon_ai.graph.engine
slug: /api-reference/spoon_ai/graph/engine
title: spoon_ai.graph.engine
---

# Table of Contents

* [spoon\_ai.graph.engine](#spoon_ai.graph.engine)
  * [BaseNode](#spoon_ai.graph.engine.BaseNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.BaseNode.__call__)
  * [RunnableNode](#spoon_ai.graph.engine.RunnableNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.RunnableNode.__call__)
  * [ToolNode](#spoon_ai.graph.engine.ToolNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.ToolNode.__call__)
  * [ConditionNode](#spoon_ai.graph.engine.ConditionNode)
    * [\_\_call\_\_](#spoon_ai.graph.engine.ConditionNode.__call__)
  * [interrupt](#spoon_ai.graph.engine.interrupt)
  * [RouteRule](#spoon_ai.graph.engine.RouteRule)
    * [matches](#spoon_ai.graph.engine.RouteRule.matches)
  * [RunningSummary](#spoon_ai.graph.engine.RunningSummary)
  * [SummarizationNode](#spoon_ai.graph.engine.SummarizationNode)
  * [StateGraph](#spoon_ai.graph.engine.StateGraph)
    * [add\_node](#spoon_ai.graph.engine.StateGraph.add_node)
    * [add\_edge](#spoon_ai.graph.engine.StateGraph.add_edge)
    * [add\_conditional\_edges](#spoon_ai.graph.engine.StateGraph.add_conditional_edges)
    * [set\_entry\_point](#spoon_ai.graph.engine.StateGraph.set_entry_point)
    * [add\_tool\_node](#spoon_ai.graph.engine.StateGraph.add_tool_node)
    * [add\_conditional\_node](#spoon_ai.graph.engine.StateGraph.add_conditional_node)
    * [add\_parallel\_group](#spoon_ai.graph.engine.StateGraph.add_parallel_group)
    * [add\_routing\_rule](#spoon_ai.graph.engine.StateGraph.add_routing_rule)
    * [get\_state](#spoon_ai.graph.engine.StateGraph.get_state)
    * [get\_state\_history](#spoon_ai.graph.engine.StateGraph.get_state_history)
    * [add\_pattern\_routing](#spoon_ai.graph.engine.StateGraph.add_pattern_routing)
    * [set\_intelligent\_router](#spoon_ai.graph.engine.StateGraph.set_intelligent_router)
    * [set\_llm\_router](#spoon_ai.graph.engine.StateGraph.set_llm_router)
    * [enable\_llm\_routing](#spoon_ai.graph.engine.StateGraph.enable_llm_routing)
    * [compile](#spoon_ai.graph.engine.StateGraph.compile)
    * [get\_graph](#spoon_ai.graph.engine.StateGraph.get_graph)
  * [CompiledGraph](#spoon_ai.graph.engine.CompiledGraph)
    * [get\_execution\_metrics](#spoon_ai.graph.engine.CompiledGraph.get_execution_metrics)

<a id="spoon_ai.graph.engine"></a>

# Module `spoon_ai.graph.engine`

Graph engine: StateGraph, CompiledGraph, and interrupt API implementation.

<a id="spoon_ai.graph.engine.BaseNode"></a>

## `BaseNode` Objects

```python
class BaseNode(ABC, Generic[State])
```

Base class for all graph nodes

<a id="spoon_ai.graph.engine.BaseNode.__call__"></a>

#### `__call__`

```python
@abstractmethod
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute the node logic

<a id="spoon_ai.graph.engine.RunnableNode"></a>

## `RunnableNode` Objects

```python
class RunnableNode(BaseNode[State])
```

Runnable node that wraps a function

<a id="spoon_ai.graph.engine.RunnableNode.__call__"></a>

#### `__call__`

```python
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute the wrapped function

<a id="spoon_ai.graph.engine.ToolNode"></a>

## `ToolNode` Objects

```python
class ToolNode(BaseNode[State])
```

Tool node for executing tools

<a id="spoon_ai.graph.engine.ToolNode.__call__"></a>

#### `__call__`

```python
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute tools based on state

<a id="spoon_ai.graph.engine.ConditionNode"></a>

## `ConditionNode` Objects

```python
class ConditionNode(BaseNode[State])
```

Conditional node for routing decisions

<a id="spoon_ai.graph.engine.ConditionNode.__call__"></a>

#### `__call__`

```python
async def __call__(state: State,
                   config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Execute condition and return routing decision

<a id="spoon_ai.graph.engine.interrupt"></a>

#### `interrupt`

```python
def interrupt(data: Dict[str, Any]) -> Any
```

Interrupt execution and wait for human input.

<a id="spoon_ai.graph.engine.RouteRule"></a>

## `RouteRule` Objects

```python
class RouteRule()
```

Advanced routing rule for automatic path selection

<a id="spoon_ai.graph.engine.RouteRule.matches"></a>

#### `matches`

```python
def matches(state: Dict[str, Any], query: str = "") -> bool
```

Check if this rule matches the current state/query

<a id="spoon_ai.graph.engine.RunningSummary"></a>

## `RunningSummary` Objects

```python
@dataclass
class RunningSummary()
```

Rolling conversation summary used by the summarisation node.

<a id="spoon_ai.graph.engine.SummarizationNode"></a>

## `SummarizationNode` Objects

```python
class SummarizationNode(BaseNode[Dict[str, Any]])
```

Node that summarises conversation history before model invocation.

<a id="spoon_ai.graph.engine.StateGraph"></a>

## `StateGraph` Objects

```python
class StateGraph(Generic[State])
```

<a id="spoon_ai.graph.engine.StateGraph.add_node"></a>

#### `add_node`

```python
def add_node(
        node_name: str, node: Union[BaseNode[State],
                                    Callable[[State], Any]]) -> "StateGraph"
```

Add a node to the graph

<a id="spoon_ai.graph.engine.StateGraph.add_edge"></a>

#### `add_edge`

```python
def add_edge(
        start_node: str,
        end_node: str,
        condition: Optional[Callable[[State], bool]] = None) -> "StateGraph"
```

Add an edge. When condition is provided, edge becomes conditional.

<a id="spoon_ai.graph.engine.StateGraph.add_conditional_edges"></a>

#### `add_conditional_edges`

```python
def add_conditional_edges(start_node: str, condition: Callable[[State], str],
                          path_map: Dict[str, str]) -> "StateGraph"
```

Add conditional edges

<a id="spoon_ai.graph.engine.StateGraph.set_entry_point"></a>

#### `set_entry_point`

```python
def set_entry_point(node_name: str) -> "StateGraph"
```

Set the entry point

<a id="spoon_ai.graph.engine.StateGraph.add_tool_node"></a>

#### `add_tool_node`

```python
def add_tool_node(tools: List[Any], name: str = "tools") -> "StateGraph"
```

Add a tool node

<a id="spoon_ai.graph.engine.StateGraph.add_conditional_node"></a>

#### `add_conditional_node`

```python
def add_conditional_node(condition_func: Callable[[State], str],
                         name: str = "condition") -> "StateGraph"
```

Add a conditional node

<a id="spoon_ai.graph.engine.StateGraph.add_parallel_group"></a>

#### `add_parallel_group`

```python
def add_parallel_group(
    group_name: str,
    nodes: List[str],
    config: Optional[Union[Dict[str, Any], ParallelGroupConfig]] = None
) -> "StateGraph"
```

Add a parallel execution group

<a id="spoon_ai.graph.engine.StateGraph.add_routing_rule"></a>

#### `add_routing_rule`

```python
def add_routing_rule(source_node: str,
                     condition: Union[str, Callable[[State, str], bool]],
                     target_node: str,
                     priority: int = 0) -> "StateGraph"
```

Add an intelligent routing rule

<a id="spoon_ai.graph.engine.StateGraph.get_state"></a>

#### `get_state`

```python
def get_state(
        config: Optional[Dict[str, Any]] = None) -> Optional[StateSnapshot]
```

Fetch the latest (or specified) checkpoint snapshot for a thread.

<a id="spoon_ai.graph.engine.StateGraph.get_state_history"></a>

#### `get_state_history`

```python
def get_state_history(
        config: Optional[Dict[str, Any]] = None) -> Iterable[StateSnapshot]
```

Return all checkpoints for the given thread, ordered by creation time.

<a id="spoon_ai.graph.engine.StateGraph.add_pattern_routing"></a>

#### `add_pattern_routing`

```python
def add_pattern_routing(source_node: str,
                        pattern: str,
                        target_node: str,
                        priority: int = 0) -> "StateGraph"
```

Add pattern-based routing rule

<a id="spoon_ai.graph.engine.StateGraph.set_intelligent_router"></a>

#### `set_intelligent_router`

```python
def set_intelligent_router(
        router_func: Callable[[Dict[str, Any], str], str]) -> "StateGraph"
```

Set the intelligent router function

<a id="spoon_ai.graph.engine.StateGraph.set_llm_router"></a>

#### `set_llm_router`

```python
def set_llm_router(router_func: Optional[Callable[[Dict[str, Any], str],
                                                  str]] = None,
                   config: Optional[Dict[str, Any]] = None) -> "StateGraph"
```

Set the LLM-powered router function

**Arguments**:

- `router_func` - Custom LLM router function. If None, uses default LLM router.
- `config` - Configuration for LLM router (model, temperature, max_tokens, etc.)

<a id="spoon_ai.graph.engine.StateGraph.enable_llm_routing"></a>

#### `enable_llm_routing`

```python
def enable_llm_routing(
        config: Optional[Dict[str, Any]] = None) -> "StateGraph"
```

Enable LLM-powered natural language routing

This automatically sets up LLM routing for the graph entry point.

<a id="spoon_ai.graph.engine.StateGraph.compile"></a>

#### `compile`

```python
def compile(checkpointer: Optional[Any] = None) -> "CompiledGraph"
```

Compile the graph

<a id="spoon_ai.graph.engine.StateGraph.get_graph"></a>

#### `get_graph`

```python
def get_graph() -> Dict[str, Any]
```

Get graph structure for visualization/debugging

<a id="spoon_ai.graph.engine.CompiledGraph"></a>

## `CompiledGraph` Objects

```python
class CompiledGraph(Generic[State])
```

Compiled graph for execution

<a id="spoon_ai.graph.engine.CompiledGraph.get_execution_metrics"></a>

#### `get_execution_metrics`

```python
def get_execution_metrics() -> Dict[str, Any]
```

Get aggregated execution metrics

