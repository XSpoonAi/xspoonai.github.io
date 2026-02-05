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
* [spoon\_ai.graph.cache](#spoon_ai.graph.cache)
  * [compute\_cache\_key](#spoon_ai.graph.cache.compute_cache_key)
  * [CacheEntry](#spoon_ai.graph.cache.CacheEntry)
    * [is\_expired](#spoon_ai.graph.cache.CacheEntry.is_expired)
    * [to\_dict](#spoon_ai.graph.cache.CacheEntry.to_dict)
    * [from\_dict](#spoon_ai.graph.cache.CacheEntry.from_dict)
  * [BaseCache](#spoon_ai.graph.cache.BaseCache)
    * [get](#spoon_ai.graph.cache.BaseCache.get)
    * [set](#spoon_ai.graph.cache.BaseCache.set)
    * [delete](#spoon_ai.graph.cache.BaseCache.delete)
    * [clear](#spoon_ai.graph.cache.BaseCache.clear)
    * [get\_or\_compute](#spoon_ai.graph.cache.BaseCache.get_or_compute)
  * [InMemoryCache](#spoon_ai.graph.cache.InMemoryCache)
    * [\_\_init\_\_](#spoon_ai.graph.cache.InMemoryCache.__init__)
    * [get](#spoon_ai.graph.cache.InMemoryCache.get)
    * [set](#spoon_ai.graph.cache.InMemoryCache.set)
    * [delete](#spoon_ai.graph.cache.InMemoryCache.delete)
    * [clear](#spoon_ai.graph.cache.InMemoryCache.clear)
    * [get\_stats](#spoon_ai.graph.cache.InMemoryCache.get_stats)
  * [SQLiteCache](#spoon_ai.graph.cache.SQLiteCache)
    * [\_\_init\_\_](#spoon_ai.graph.cache.SQLiteCache.__init__)
    * [get](#spoon_ai.graph.cache.SQLiteCache.get)
    * [set](#spoon_ai.graph.cache.SQLiteCache.set)
    * [delete](#spoon_ai.graph.cache.SQLiteCache.delete)
    * [clear](#spoon_ai.graph.cache.SQLiteCache.clear)
    * [get\_stats](#spoon_ai.graph.cache.SQLiteCache.get_stats)
  * [create\_memory\_cache](#spoon_ai.graph.cache.create_memory_cache)
  * [create\_sqlite\_cache](#spoon_ai.graph.cache.create_sqlite_cache)
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
  * [create\_multimodal\_message](#spoon_ai.graph.engine.create_multimodal_message)
  * [create\_vision\_user\_message](#spoon_ai.graph.engine.create_vision_user_message)
  * [create\_pdf\_message](#spoon_ai.graph.engine.create_pdf_message)
  * [create\_document\_message](#spoon_ai.graph.engine.create_document_message)
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

<a id="spoon_ai.graph.cache"></a>

# Module `spoon_ai.graph.cache`

Cache System for Graph Workflows.

Provides caching for node outputs in graph workflows to avoid redundant
computation and speed up execution.

Types of caching:
1. Node-level caching - caches node outputs based on inputs
2. In-memory and persistent (SQLite) backends

Compatible with LangGraph BaseCache interface.

Usage:
    from spoon_ai.graph.cache import InMemoryCache, SQLiteCache

    # In-memory cache (for testing/short sessions)
    cache = InMemoryCache()

    # SQLite cache (persistent across sessions)
    cache = SQLiteCache("cache.db")

    # Use with graph
    graph = StateGraph(...)
    compiled = graph.compile(cache=cache)

<a id="spoon_ai.graph.cache.compute_cache_key"></a>

#### `compute_cache_key`

```python
def compute_cache_key(node_name: str,
                      inputs: Dict[str, Any],
                      config: Optional[Dict[str, Any]] = None) -> str
```

Compute a cache key from node name and inputs.

**Arguments**:

- `node_name` - Name of the node
- `inputs` - Input values to the node
- `config` - Optional configuration
  

**Returns**:

  SHA256 hash as cache key

<a id="spoon_ai.graph.cache.CacheEntry"></a>

## `CacheEntry` Objects

```python
class CacheEntry()
```

A cached value with metadata.

<a id="spoon_ai.graph.cache.CacheEntry.is_expired"></a>

#### `is_expired`

```python
def is_expired() -> bool
```

Check if cache entry has expired.

<a id="spoon_ai.graph.cache.CacheEntry.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Serialize to dictionary.

<a id="spoon_ai.graph.cache.CacheEntry.from_dict"></a>

#### `from_dict`

```python
@classmethod
def from_dict(cls, data: Dict[str, Any]) -> "CacheEntry"
```

Deserialize from dictionary.

<a id="spoon_ai.graph.cache.BaseCache"></a>

## `BaseCache` Objects

```python
class BaseCache(ABC)
```

Abstract base class for graph caches.

Compatible with LangGraph BaseCache interface.

<a id="spoon_ai.graph.cache.BaseCache.get"></a>

#### `get`

```python
@abstractmethod
def get(key: str) -> Optional[Any]
```

Get a cached value by key.

**Arguments**:

- `key` - Cache key
  

**Returns**:

  Cached value or None if not found/expired

<a id="spoon_ai.graph.cache.BaseCache.set"></a>

#### `set`

```python
@abstractmethod
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set a cached value.

**Arguments**:

- `key` - Cache key
- `value` - Value to cache
- `node_name` - Name of the node that produced this value
- `ttl_seconds` - Time-to-live in seconds (None = no expiry)
- `metadata` - Optional metadata

<a id="spoon_ai.graph.cache.BaseCache.delete"></a>

#### `delete`

```python
@abstractmethod
def delete(key: str) -> bool
```

Delete a cached value.

**Arguments**:

- `key` - Cache key
  

**Returns**:

  True if deleted, False if not found

<a id="spoon_ai.graph.cache.BaseCache.clear"></a>

#### `clear`

```python
@abstractmethod
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.BaseCache.get_or_compute"></a>

#### `get_or_compute`

```python
def get_or_compute(key: str,
                   compute_fn: callable,
                   node_name: str = "",
                   ttl_seconds: Optional[int] = None) -> Tuple[Any, bool]
```

Get cached value or compute and cache it.

**Arguments**:

- `key` - Cache key
- `compute_fn` - Function to compute value if not cached
- `node_name` - Name of the node
- `ttl_seconds` - Time-to-live for cached value
  

**Returns**:

  Tuple of (value, was_cached)

<a id="spoon_ai.graph.cache.InMemoryCache"></a>

## `InMemoryCache` Objects

```python
class InMemoryCache(BaseCache)
```

In-memory cache implementation.

Fast but not persistent across sessions. Suitable for:
- Testing
- Short-running workflows
- When persistence is not needed

<a id="spoon_ai.graph.cache.InMemoryCache.__init__"></a>

#### `__init__`

```python
def __init__(max_entries: int = 1000,
             default_ttl_seconds: Optional[int] = None)
```

Initialize in-memory cache.

**Arguments**:

- `max_entries` - Maximum number of entries to keep
- `default_ttl_seconds` - Default TTL for entries (None = no expiry)

<a id="spoon_ai.graph.cache.InMemoryCache.get"></a>

#### `get`

```python
def get(key: str) -> Optional[Any]
```

Get cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.set"></a>

#### `set`

```python
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.delete"></a>

#### `delete`

```python
def delete(key: str) -> bool
```

Delete cached value.

<a id="spoon_ai.graph.cache.InMemoryCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.InMemoryCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

<a id="spoon_ai.graph.cache.SQLiteCache"></a>

## `SQLiteCache` Objects

```python
class SQLiteCache(BaseCache)
```

SQLite-based persistent cache.

Persistent across sessions. Suitable for:
- Production use
- Long-running workflows
- When you want to reuse cached results

<a id="spoon_ai.graph.cache.SQLiteCache.__init__"></a>

#### `__init__`

```python
def __init__(db_path: str = "graph_cache.db",
             default_ttl_seconds: Optional[int] = None,
             max_entries: Optional[int] = None)
```

Initialize SQLite cache.

**Arguments**:

- `db_path` - Path to SQLite database file
- `default_ttl_seconds` - Default TTL for entries (None = no expiry)
- `max_entries` - Maximum entries to keep (None = unlimited)

<a id="spoon_ai.graph.cache.SQLiteCache.get"></a>

#### `get`

```python
def get(key: str) -> Optional[Any]
```

Get cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.set"></a>

#### `set`

```python
def set(key: str,
        value: Any,
        node_name: str = "",
        ttl_seconds: Optional[int] = None,
        metadata: Optional[Dict[str, Any]] = None) -> None
```

Set cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.delete"></a>

#### `delete`

```python
def delete(key: str) -> bool
```

Delete cached value.

<a id="spoon_ai.graph.cache.SQLiteCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached values.

<a id="spoon_ai.graph.cache.SQLiteCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

<a id="spoon_ai.graph.cache.create_memory_cache"></a>

#### `create_memory_cache`

```python
def create_memory_cache(
        max_entries: int = 1000,
        default_ttl_seconds: Optional[int] = None) -> InMemoryCache
```

Create an in-memory cache.

**Arguments**:

- `max_entries` - Maximum entries to keep
- `default_ttl_seconds` - Default TTL
  

**Returns**:

  Configured InMemoryCache

<a id="spoon_ai.graph.cache.create_sqlite_cache"></a>

#### `create_sqlite_cache`

```python
def create_sqlite_cache(db_path: str = "graph_cache.db",
                        default_ttl_seconds: Optional[int] = None,
                        max_entries: Optional[int] = None) -> SQLiteCache
```

Create a SQLite cache.

**Arguments**:

- `db_path` - Path to database file
- `default_ttl_seconds` - Default TTL
- `max_entries` - Maximum entries
  

**Returns**:

  Configured SQLiteCache

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

<a id="spoon_ai.graph.engine.create_multimodal_message"></a>

#### `create_multimodal_message`

```python
def create_multimodal_message(
        role: str,
        text: str,
        image_url: Optional[str] = None,
        image_data: Optional[str] = None,
        image_media_type: str = "image/png",
        detail: Literal["auto", "low", "high"] = "auto") -> Message
```

Create a multimodal message for use in graph state.

Supports both URL-based and base64-encoded images.

**Arguments**:

- `role` - Message role (user, assistant, system)
- `text` - Text content
- `image_url` - URL of the image (including data URLs)
- `image_data` - Base64-encoded image data (alternative to image_url)
- `image_media_type` - MIME type for base64 images
- `detail` - Image detail level (auto, low, high)
  

**Returns**:

- `Message` - A multimodal message ready for graph state
  

**Example**:

    ```python
    # In a graph node function
    async def analyze_image(state: State) -> dict:
        msg = create_multimodal_message(
            "user",
            "Analyze this chart",
            image_url="https://example.com/chart.png"
        )
        return {"messages": [msg]}
    ```

<a id="spoon_ai.graph.engine.create_vision_user_message"></a>

#### `create_vision_user_message`

```python
def create_vision_user_message(text: str, images: List[Dict[str,
                                                            str]]) -> Message
```

Create a user message with multiple images.

**Arguments**:

- `text` - Text prompt
- `images` - List of image specs, each with either:
  - &#123;"url": "https://..."&#125; for URL-based images
  - &#123;"data": "&lt;base64&gt;", "media_type": "image/png"&#125; for base64 images
  

**Returns**:

- `Message` - A multimodal message with multiple images
  

**Example**:

    ```python
    msg = create_vision_user_message(
        "Compare these two charts",
        images=[
            {"url": "https://example.com/chart1.png"},
            {"url": "https://example.com/chart2.png"}
        ]
    )
    ```

<a id="spoon_ai.graph.engine.create_pdf_message"></a>

#### `create_pdf_message`

```python
def create_pdf_message(role: str,
                       text: str,
                       pdf_data: str,
                       filename: Optional[str] = None) -> Message
```

Create a message with a PDF document for use in graph state.

**Arguments**:

- `role` - Message role (user, assistant, system)
- `text` - Text content
- `pdf_data` - Base64-encoded PDF data
- `filename` - Optional filename for the PDF
  

**Returns**:

- `Message` - A multimodal message with PDF ready for graph state
  

**Example**:

    ```python
    # In a graph node function
    async def analyze_document(state: State) -> dict:
        msg = create_pdf_message(
            "user",
            "Summarize this whitepaper",
            pdf_data="<base64_encoded_pdf>",
            filename="bitcoin.pdf"
        )
        return {"messages": [msg]}
    ```

<a id="spoon_ai.graph.engine.create_document_message"></a>

#### `create_document_message`

```python
def create_document_message(role: str,
                            text: str,
                            document_data: str,
                            media_type: str = "application/pdf",
                            filename: Optional[str] = None) -> Message
```

Create a message with a document for use in graph state.

Supports various document types including PDF, text files, etc.

**Arguments**:

- `role` - Message role (user, assistant, system)
- `text` - Text content
- `document_data` - Base64-encoded document data
- `media_type` - MIME type of the document (default: application/pdf)
- `filename` - Optional filename for the document
  

**Returns**:

- `Message` - A multimodal message with document ready for graph state
  

**Example**:

    ```python
    # In a graph node function
    async def process_report(state: State) -> dict:
        msg = create_document_message(
            "user",
            "Extract key metrics from this report",
            document_data="<base64_encoded_data>",
            media_type="application/pdf",
            filename="annual_report.pdf"
        )
        return {"messages": [msg]}
    ```

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

