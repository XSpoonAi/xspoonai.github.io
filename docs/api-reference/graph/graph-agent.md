# GraphAgent API Reference

The `GraphAgent` class provides a high-level agent interface for StateGraph execution, managing memory, state persistence, and conversation flow.

## Class Definition

```python
from spoon_ai.graph import GraphAgent, StateGraph
from typing import Optional

class GraphAgent:
    def __init__(
        self,
        name: str,
        graph: StateGraph,
        preserve_state: bool = False,
        memory: Optional[Memory] = None,
        memory_path: Optional[str] = None,
        session_id: Optional[str] = None,
        max_metadata_size: int = 1024,
        **kwargs
    )
```

## Constructor Parameters

### Required Parameters

- **name** (`str`): Unique identifier for the agent
- **graph** (`StateGraph`): Compiled StateGraph instance to execute

### Optional Parameters

- **preserve_state** (`bool`, default: `False`): Whether to maintain state between executions
- **memory** (`Optional[Memory]`): Custom memory instance (auto-created if None)
- **memory_path** (`Optional[str]`): Path for memory storage
- **session_id** (`Optional[str]`): Session identifier for memory
- **max_metadata_size** (`int`, default: `1024`): Maximum metadata size in bytes
- **kwargs**: Additional configuration options

## Core Methods

### Execution Methods

#### `async run(request: Optional[str] = None) -> str`

Execute the graph with a user request.

**Parameters:**
- `request` (`Optional[str]`): User input string

**Returns:**
- `str`: Graph execution result

**Raises:**
- `Exception`: Graph execution errors

**Example:**
```python
agent = GraphAgent(name="crypto_analyzer", graph=build_crypto_graph())

# Execute with a request
result = await agent.run("Analyze BTC price trends")
print(result)

# Execute without request (uses preserved state)
result = await agent.run()
```

#### `async chat(messages: List[Dict[str, Any]], **kwargs) -> Dict[str, Any]`

Process a conversation with multiple messages (for compatibility).

**Parameters:**
- `messages` (`List[Dict[str, Any]]`): List of conversation messages
- `**kwargs`: Additional execution parameters

**Returns:**
- `Dict[str, Any]`: Response with conversation metadata

**Example:**
```python
messages = [
    {"role": "user", "content": "What's the market doing?"},
    {"role": "assistant", "content": "Let me analyze..."}
]

response = await agent.chat(messages)
print(response["output"])
```

### Memory Management

#### `get_memory_statistics() -> Dict[str, Any]`

Get comprehensive memory usage statistics.

**Returns:**
- `Dict[str, Any]`: Memory statistics including:
  - `total_messages`: Number of stored messages
  - `session_id`: Current session identifier
  - `storage_path`: Memory storage location
  - `last_updated`: Last update timestamp
  - `file_size`: Memory file size in bytes

**Example:**
```python
stats = agent.get_memory_statistics()
print(f"Messages: {stats['total_messages']}")
print(f"Storage: {stats['file_size']} bytes")
```

#### `set_memory_metadata(key: str, value: Any)`

Set metadata in the agent's memory.

**Parameters:**
- `key` (`str`): Metadata key
- `value` (`Any`): Metadata value

**Example:**
```python
agent.set_memory_metadata("last_topic", "cryptocurrency")
agent.set_memory_metadata("user_preferences", {"theme": "dark"})
```

#### `clear_memory()`

Clear all messages and reset memory to initial state.

**Example:**
```python
agent.clear_memory()  # Reset conversation history
```

### State Management

#### `get_current_state() -> Optional[Dict[str, Any]]`

Get the current preserved state (if state preservation is enabled).

**Returns:**
- `Optional[Dict[str, Any]]`: Current state or None if not preserving state

**Example:**
```python
current_state = agent.get_current_state()
if current_state:
    print(f"Current step: {current_state.get('current_step', 0)}")
```

#### `reset_state()`

Reset the agent's preserved state.

**Example:**
```python
agent.reset_state()  # Clear preserved state for fresh start
```

### Execution Control

#### `get_execution_metadata() -> Dict[str, Any]`

Get metadata about the last execution.

**Returns:**
- `Dict[str, Any]`: Execution metadata including:
  - `execution_successful`: Whether last execution succeeded
  - `execution_time`: Timestamp of last execution
  - `last_request`: Truncated version of last request

**Example:**
```python
metadata = agent.get_execution_metadata()
if metadata.get("execution_successful"):
    print("Last execution succeeded")
```

## Advanced Usage

### State Preservation

```python
# Create agent with state preservation
agent = GraphAgent(
    name="persistent_agent",
    graph=my_graph,
    preserve_state=True,
    memory_path="./agent_memory"
)

# First execution
await agent.run("Start analysis")

# Second execution (continues from previous state)
await agent.run("Continue with next step")
```

### Custom Memory Configuration

```python
from spoon_ai.graph.agent import Memory

# Custom memory instance
custom_memory = Memory(
    storage_path="/custom/path",
    session_id="custom_session"
)

agent = GraphAgent(
    name="custom_memory_agent",
    graph=my_graph,
    memory=custom_memory
)
```

### Error Handling

```python
try:
    result = await agent.run("Complex analysis request")
    print(f"Success: {result}")
except Exception as e:
    print(f"Execution failed: {e}")

    # Check execution metadata for debugging
    metadata = agent.get_execution_metadata()
    print(f"Last successful: {metadata.get('execution_successful')}")

    # Reset state if needed
    agent.reset_state()
```

### Memory Analysis

```python
# Get detailed memory statistics
stats = agent.get_memory_statistics()
print(f"""
Memory Statistics:
- Total messages: {stats['total_messages']}
- Session: {stats['session_id']}
- Storage size: {stats['file_size']} bytes
- Last updated: {stats.get('last_updated')}
""")

# Set custom metadata for tracking
agent.set_memory_metadata("analysis_count", 42)
agent.set_memory_metadata("last_model_used", "gpt-4")
```

## Integration Patterns

### With LLM Manager

```python
from spoon_ai.llm import LLMManager

# Agent with LLM integration in graph
llm_manager = LLMManager()
agent = GraphAgent(
    name="llm_agent",
    graph=build_llm_integrated_graph(llm_manager)
)

response = await agent.run("Explain quantum computing")
```

### With Tool Manager

```python
from spoon_ai.tools import ToolManager

# Agent with tool execution capabilities
tool_manager = ToolManager()
agent = GraphAgent(
    name="tool_agent",
    graph=build_tool_integrated_graph(tool_manager)
)

result = await agent.run("Calculate 15 * 23 and search for Python tutorials")
```

### Multi-Agent Coordination

```python
# Multiple agents working together
analyzer_agent = GraphAgent("analyzer", analysis_graph)
summarizer_agent = GraphAgent("summarizer", summary_graph)

# Chain executions
analysis_result = await analyzer_agent.run("Analyze this data")
final_result = await summarizer_agent.run(f"Summarize: {analysis_result}")
```

## Memory Persistence

The GraphAgent automatically persists memory to disk:

```python
# Memory is saved to: ~/.spoon_ai/memory/{agent_name}_{timestamp}.json
agent = GraphAgent("my_agent", my_graph)

# Memory persists between sessions
await agent.run("First message")  # Creates memory file
# ... restart application ...
agent2 = GraphAgent("my_agent", my_graph)  # Loads previous memory
```

## Best Practices

### Memory Management
- Use descriptive session IDs for different conversation contexts
- Clear memory periodically to prevent unbounded growth
- Set meaningful metadata for analysis and debugging

### State Preservation
- Enable state preservation for multi-turn conversations
- Reset state when switching contexts
- Validate preserved state before reuse

### Error Recovery
- Always check execution metadata after failures
- Implement retry logic with exponential backoff
- Use checkpoints for complex operations

### Performance Optimization
- Monitor memory statistics regularly
- Use appropriate metadata size limits
- Consider memory cleanup for long-running agents

## See Also

- [StateGraph API](state-graph.md) - Underlying graph execution engine
- [Memory System](../../core-concepts/memory-system.md) - Memory management details
- [Agent Architecture](../../core-concepts/agents-detailed.md) - Agent design patterns
