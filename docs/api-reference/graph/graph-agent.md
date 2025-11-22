# GraphAgent API Reference

`GraphAgent` is a lightweight wrapper that executes a compiled `StateGraph` and optionally persists state and chat memory between runs.

## Class Definition

```python
from spoon_ai.graph import GraphAgent, StateGraph

class GraphAgent:
    def __init__(self, name: str, graph: StateGraph, preserve_state: bool = False, **kwargs)
```

**Key init kwargs**
- `memory`: custom `Memory` instance. Defaults to on-disk `Memory` when not provided.
- `memory_path`: storage path for the default memory.
- `session_id`: override session id for the default memory.
- `max_metadata_size`: maximum bytes stored in `execution_metadata`.

## Core Methods

- `async run(request: str | None = None) -> str`  
  Executes the compiled graph. When `preserve_state=True`, merges the previous result into the next invocation.

- `def clear_state() -> None`  
  Clears preserved state, resets `current_step`, and empties execution metadata. If the backing `Memory` supports `clear()`, it is invoked.

- `def get_execution_metadata() -> dict`  
  Returns the last execution metadata (success flag, timestamp, last request preview).

- `def get_execution_history() -> list[dict]`  
  If the compiled graph tracks `execution_history`, returns a copy; otherwise returns an empty list.

### Memory Helpers
- `def search_memory(query: str, limit: int = 10) -> list[dict]`  
  Uses `Memory.search_messages` when available.
- `def get_recent_memory(hours: int = 24) -> list[dict]`  
  Uses `Memory.get_recent_messages` when available.
- `def get_memory_statistics() -> dict`  
  Uses `Memory.get_statistics` when available.
- `def set_memory_metadata(key: str, value: Any) -> None`  
- `def get_memory_metadata(key: str, default=None) -> Any`
- `def save_session() -> None`  
  Calls the memory backend’s `_save_to_disk` if present.
- `def load_session(session_id: str) -> None`  
  Replaces the current memory with a new instance bound to `session_id` when using the built-in `Memory`/`MockMemory`.

## Usage Example

```python
graph = build_my_graph()               # returns a StateGraph
agent = GraphAgent("router", graph, preserve_state=True)

# First request
result1 = await agent.run("route this request")

# Subsequent request reuses preserved state
result2 = await agent.run("keep going")

# Inspect memory and metadata
stats = agent.get_memory_statistics()
metadata = agent.get_execution_metadata()
```

## Notes
- `GraphAgent` does **not** expose a `chat()` method; use `run()` for all executions.
- State preservation only retains data returned from the previous invocation; it does not replay the entire execution history.
- Memory helper methods are no-ops when the configured memory backend does not implement the respective helper.

## See Also
- `state-graph.md` for graph construction APIs.
- `spoon_ai.graph.engine.CompiledGraph` for the compiled execution engine.
