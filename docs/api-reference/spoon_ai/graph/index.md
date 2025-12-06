---
id: spoon_ai.graph
slug: /api-reference/spoon_ai/graph//index
title: spoon_ai.graph
---

# Table of Contents

* [spoon\_ai.graph](#spoon_ai.graph)
* [spoon\_ai.graph.agent](#spoon_ai.graph.agent)
  * [Memory](#spoon_ai.graph.agent.Memory)
    * [clear](#spoon_ai.graph.agent.Memory.clear)
    * [add\_message](#spoon_ai.graph.agent.Memory.add_message)
    * [get\_messages](#spoon_ai.graph.agent.Memory.get_messages)
    * [get\_recent\_messages](#spoon_ai.graph.agent.Memory.get_recent_messages)
    * [search\_messages](#spoon_ai.graph.agent.Memory.search_messages)
    * [get\_statistics](#spoon_ai.graph.agent.Memory.get_statistics)
    * [set\_metadata](#spoon_ai.graph.agent.Memory.set_metadata)
    * [get\_metadata](#spoon_ai.graph.agent.Memory.get_metadata)
  * [MockMemory](#spoon_ai.graph.agent.MockMemory)
  * [GraphAgent](#spoon_ai.graph.agent.GraphAgent)
    * [search\_memory](#spoon_ai.graph.agent.GraphAgent.search_memory)
    * [get\_recent\_memory](#spoon_ai.graph.agent.GraphAgent.get_recent_memory)
    * [get\_memory\_statistics](#spoon_ai.graph.agent.GraphAgent.get_memory_statistics)
    * [set\_memory\_metadata](#spoon_ai.graph.agent.GraphAgent.set_memory_metadata)
    * [get\_memory\_metadata](#spoon_ai.graph.agent.GraphAgent.get_memory_metadata)
    * [save\_session](#spoon_ai.graph.agent.GraphAgent.save_session)
    * [load\_session](#spoon_ai.graph.agent.GraphAgent.load_session)
* [spoon\_ai.graph.types](#spoon_ai.graph.types)
* [spoon\_ai.graph.checkpointer](#spoon_ai.graph.checkpointer)
  * [InMemoryCheckpointer](#spoon_ai.graph.checkpointer.InMemoryCheckpointer)
    * [iter\_checkpoint\_history](#spoon_ai.graph.checkpointer.InMemoryCheckpointer.iter_checkpoint_history)
* [spoon\_ai.graph.builder](#spoon_ai.graph.builder)
  * [Intent](#spoon_ai.graph.builder.Intent)
  * [IntentAnalyzer](#spoon_ai.graph.builder.IntentAnalyzer)
  * [AdaptiveStateBuilder](#spoon_ai.graph.builder.AdaptiveStateBuilder)
  * [ParameterInferenceEngine](#spoon_ai.graph.builder.ParameterInferenceEngine)
  * [NodeSpec](#spoon_ai.graph.builder.NodeSpec)
  * [EdgeSpec](#spoon_ai.graph.builder.EdgeSpec)
    * [end](#spoon_ai.graph.builder.EdgeSpec.end)
  * [ParallelGroupSpec](#spoon_ai.graph.builder.ParallelGroupSpec)
  * [GraphTemplate](#spoon_ai.graph.builder.GraphTemplate)
  * [DeclarativeGraphBuilder](#spoon_ai.graph.builder.DeclarativeGraphBuilder)
  * [NodePlugin](#spoon_ai.graph.builder.NodePlugin)
  * [NodePluginSystem](#spoon_ai.graph.builder.NodePluginSystem)
  * [HighLevelGraphAPI](#spoon_ai.graph.builder.HighLevelGraphAPI)
* [spoon\_ai.graph.mcp\_integration](#spoon_ai.graph.mcp_integration)
  * [MCPToolSpec](#spoon_ai.graph.mcp_integration.MCPToolSpec)
  * [MCPConfigManager](#spoon_ai.graph.mcp_integration.MCPConfigManager)
  * [MCPToolDiscoveryEngine](#spoon_ai.graph.mcp_integration.MCPToolDiscoveryEngine)
  * [MCPIntegrationManager](#spoon_ai.graph.mcp_integration.MCPIntegrationManager)
* [spoon\_ai.graph.exceptions](#spoon_ai.graph.exceptions)
* [spoon\_ai.graph.reducers](#spoon_ai.graph.reducers)
* [spoon\_ai.graph.decorators](#spoon_ai.graph.decorators)
* [spoon\_ai.graph.config](#spoon_ai.graph.config)
  * [RouterConfig](#spoon_ai.graph.config.RouterConfig)
  * [ParallelRetryPolicy](#spoon_ai.graph.config.ParallelRetryPolicy)
  * [ParallelGroupConfig](#spoon_ai.graph.config.ParallelGroupConfig)
    * [quorum](#spoon_ai.graph.config.ParallelGroupConfig.quorum)
    * [error\_strategy](#spoon_ai.graph.config.ParallelGroupConfig.error_strategy)
  * [GraphConfig](#spoon_ai.graph.config.GraphConfig)
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

<a id="spoon_ai.graph"></a>

# Module `spoon_ai.graph`

spoon_ai.graph package

Public facade for the graph engine. Import from here.

<a id="spoon_ai.graph.agent"></a>

# Module `spoon_ai.graph.agent`

GraphAgent implementation for the graph package.

<a id="spoon_ai.graph.agent.Memory"></a>

## `Memory` Objects

```python
class Memory()
```

Memory implementation with persistent storage

<a id="spoon_ai.graph.agent.Memory.clear"></a>

#### `clear`

```python
def clear()
```

Clear all messages and reset memory

<a id="spoon_ai.graph.agent.Memory.add_message"></a>

#### `add_message`

```python
def add_message(msg)
```

Add a message to memory

<a id="spoon_ai.graph.agent.Memory.get_messages"></a>

#### `get_messages`

```python
def get_messages(limit: Optional[int] = None) -> List[Dict[str, Any]]
```

Get messages from memory

<a id="spoon_ai.graph.agent.Memory.get_recent_messages"></a>

#### `get_recent_messages`

```python
def get_recent_messages(hours: int = 24) -> List[Dict[str, Any]]
```

Get messages from the last N hours

<a id="spoon_ai.graph.agent.Memory.search_messages"></a>

#### `search_messages`

```python
def search_messages(query: str, limit: int = 10) -> List[Dict[str, Any]]
```

Search messages containing the query

<a id="spoon_ai.graph.agent.Memory.get_statistics"></a>

#### `get_statistics`

```python
def get_statistics() -> Dict[str, Any]
```

Get memory statistics

<a id="spoon_ai.graph.agent.Memory.set_metadata"></a>

#### `set_metadata`

```python
def set_metadata(key: str, value: Any)
```

Set metadata

<a id="spoon_ai.graph.agent.Memory.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata(key: str, default: Any = None) -> Any
```

Get metadata

<a id="spoon_ai.graph.agent.MockMemory"></a>

## `MockMemory` Objects

```python
class MockMemory(Memory)
```

Alias for backward compatibility - now uses persistent memory

<a id="spoon_ai.graph.agent.GraphAgent"></a>

## `GraphAgent` Objects

```python
class GraphAgent()
```

<a id="spoon_ai.graph.agent.GraphAgent.search_memory"></a>

#### `search_memory`

```python
def search_memory(query: str, limit: int = 10) -> List[Dict[str, Any]]
```

Search memory for messages containing the query

<a id="spoon_ai.graph.agent.GraphAgent.get_recent_memory"></a>

#### `get_recent_memory`

```python
def get_recent_memory(hours: int = 24) -> List[Dict[str, Any]]
```

Get recent messages from memory

<a id="spoon_ai.graph.agent.GraphAgent.get_memory_statistics"></a>

#### `get_memory_statistics`

```python
def get_memory_statistics() -> Dict[str, Any]
```

Get memory statistics

<a id="spoon_ai.graph.agent.GraphAgent.set_memory_metadata"></a>

#### `set_memory_metadata`

```python
def set_memory_metadata(key: str, value: Any)
```

Set memory metadata

<a id="spoon_ai.graph.agent.GraphAgent.get_memory_metadata"></a>

#### `get_memory_metadata`

```python
def get_memory_metadata(key: str, default: Any = None) -> Any
```

Get memory metadata

<a id="spoon_ai.graph.agent.GraphAgent.save_session"></a>

#### `save_session`

```python
def save_session()
```

Manually save current session

<a id="spoon_ai.graph.agent.GraphAgent.load_session"></a>

#### `load_session`

```python
def load_session(session_id: str)
```

Load a specific session

<a id="spoon_ai.graph.types"></a>

# Module `spoon_ai.graph.types`

Typed structures for the graph package.

<a id="spoon_ai.graph.checkpointer"></a>

# Module `spoon_ai.graph.checkpointer`

In-memory checkpointer for the graph package.

<a id="spoon_ai.graph.checkpointer.InMemoryCheckpointer"></a>

## `InMemoryCheckpointer` Objects

```python
class InMemoryCheckpointer()
```

<a id="spoon_ai.graph.checkpointer.InMemoryCheckpointer.iter_checkpoint_history"></a>

#### `iter_checkpoint_history`

```python
def iter_checkpoint_history(
        config: Dict[str, Any]) -> Iterable[CheckpointTuple]
```

Return checkpoint tuples for the specified thread, newest last.

<a id="spoon_ai.graph.builder"></a>

# Module `spoon_ai.graph.builder`

Declarative builders and helpers for SpoonAI graphs.

<a id="spoon_ai.graph.builder.Intent"></a>

## `Intent` Objects

```python
@dataclass
class Intent()
```

Result of intent analysis.

<a id="spoon_ai.graph.builder.IntentAnalyzer"></a>

## `IntentAnalyzer` Objects

```python
class IntentAnalyzer()
```

LLM-powered intent analyzer.

Core stays generic; concrete prompts/parsers are supplied by callers.

<a id="spoon_ai.graph.builder.AdaptiveStateBuilder"></a>

## `AdaptiveStateBuilder` Objects

```python
class AdaptiveStateBuilder()
```

Construct initial graph state using query intent and optional parameters.

<a id="spoon_ai.graph.builder.ParameterInferenceEngine"></a>

## `ParameterInferenceEngine` Objects

```python
class ParameterInferenceEngine()
```

LLM delegator for parameter extraction.

Core keeps this generic; applications provide formatting/parsing via options.

<a id="spoon_ai.graph.builder.NodeSpec"></a>

## `NodeSpec` Objects

```python
@dataclass
class NodeSpec()
```

Declarative node specification.

<a id="spoon_ai.graph.builder.EdgeSpec"></a>

## `EdgeSpec` Objects

```python
@dataclass
class EdgeSpec()
```

Declarative edge specification.

<a id="spoon_ai.graph.builder.EdgeSpec.end"></a>

#### `end`

target name or callable router

<a id="spoon_ai.graph.builder.ParallelGroupSpec"></a>

## `ParallelGroupSpec` Objects

```python
@dataclass
class ParallelGroupSpec()
```

Parallel group specification.

<a id="spoon_ai.graph.builder.GraphTemplate"></a>

## `GraphTemplate` Objects

```python
@dataclass
class GraphTemplate()
```

Complete declarative template for a graph.

<a id="spoon_ai.graph.builder.DeclarativeGraphBuilder"></a>

## `DeclarativeGraphBuilder` Objects

```python
class DeclarativeGraphBuilder()
```

Build StateGraph instances from declarative templates.

<a id="spoon_ai.graph.builder.NodePlugin"></a>

## `NodePlugin` Objects

```python
class NodePlugin()
```

Pluggable node provider.

<a id="spoon_ai.graph.builder.NodePluginSystem"></a>

## `NodePluginSystem` Objects

```python
class NodePluginSystem()
```

Registry and discovery for node plugins.

<a id="spoon_ai.graph.builder.HighLevelGraphAPI"></a>

## `HighLevelGraphAPI` Objects

```python
class HighLevelGraphAPI()
```

Convenience facade for building graphs per query.

<a id="spoon_ai.graph.mcp_integration"></a>

# Module `spoon_ai.graph.mcp_integration`

Utility classes for intelligent MCP tool discovery and configuration.

Core graph components no longer hard-code external tools; instead, user code
registers tool specifications and optional transport/configuration details via
these helpers.

<a id="spoon_ai.graph.mcp_integration.MCPToolSpec"></a>

## `MCPToolSpec` Objects

```python
@dataclass
class MCPToolSpec()
```

Specification describing a desired MCP tool.

<a id="spoon_ai.graph.mcp_integration.MCPConfigManager"></a>

## `MCPConfigManager` Objects

```python
class MCPConfigManager()
```

Centralised configuration loader for MCP tools.

<a id="spoon_ai.graph.mcp_integration.MCPToolDiscoveryEngine"></a>

## `MCPToolDiscoveryEngine` Objects

```python
class MCPToolDiscoveryEngine()
```

Discover MCP tools based on registered intent mappings.

<a id="spoon_ai.graph.mcp_integration.MCPIntegrationManager"></a>

## `MCPIntegrationManager` Objects

```python
class MCPIntegrationManager()
```

High level coordinator for MCP tool usage within graphs.

<a id="spoon_ai.graph.exceptions"></a>

# Module `spoon_ai.graph.exceptions`

Graph engine exception definitions (public within graph package).

<a id="spoon_ai.graph.reducers"></a>

# Module `spoon_ai.graph.reducers`

Reducers and validators for the graph package.

<a id="spoon_ai.graph.decorators"></a>

# Module `spoon_ai.graph.decorators`

Decorators and executor for the graph package.

<a id="spoon_ai.graph.config"></a>

# Module `spoon_ai.graph.config`

Configuration primitives for the SpoonAI graph engine.

<a id="spoon_ai.graph.config.RouterConfig"></a>

## `RouterConfig` Objects

```python
@dataclass
class RouterConfig()
```

Controls how the graph chooses the next node after each execution step.

<a id="spoon_ai.graph.config.ParallelRetryPolicy"></a>

## `ParallelRetryPolicy` Objects

```python
@dataclass
class ParallelRetryPolicy()
```

Retry policy for individual nodes inside a parallel group.

<a id="spoon_ai.graph.config.ParallelGroupConfig"></a>

## `ParallelGroupConfig` Objects

```python
@dataclass
class ParallelGroupConfig()
```

Controls how a parallel group executes and aggregates results.

<a id="spoon_ai.graph.config.ParallelGroupConfig.quorum"></a>

#### `quorum`

floats in (0, 1] treated as ratio, ints as absolute

<a id="spoon_ai.graph.config.ParallelGroupConfig.error_strategy"></a>

#### `error_strategy`

fail_fast, collect_errors, ignore_errors

<a id="spoon_ai.graph.config.GraphConfig"></a>

## `GraphConfig` Objects

```python
@dataclass
class GraphConfig()
```

Top-level configuration applied to an entire graph instance.

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

