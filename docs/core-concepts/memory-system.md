# Memory System

Comprehensive guide to SpoonOS memory management, persistence, and state handling across agents and graph executions.

## Overview

The SpoonOS Memory System provides persistent storage and retrieval of conversation history, metadata, and execution state. It enables agents to maintain context across sessions and supports complex multi-turn conversations.

## Core Components

### Memory Class

The `Memory` class provides persistent storage with automatic disk serialization:

```python
from spoon_ai.graph.agent import Memory

# Initialize memory with custom path
memory = Memory(storage_path="./custom_memory", session_id="my_session")

# Use default path (~/.spoon_ai/memory)
memory = Memory()
```

### Key Features

- **Persistent Storage**: Automatic JSON serialization to disk
- **Session Management**: Multiple conversation sessions per agent
- **Message History**: Chronological storage of conversation messages
- **Metadata Support**: Custom key-value metadata storage
- **Search Functionality**: Query messages by content
- **Time-based Filtering**: Retrieve messages from specific time periods

## Basic Usage

### Message Management

```python
# Add messages to memory
message = {"role": "user", "content": "Hello, how can I help?"}
memory.add_message(message)

# Retrieve all messages
messages = memory.get_messages()
print(f"Total messages: {len(messages)}")

# Get recent messages (last 24 hours)
recent = memory.get_recent_messages(hours=24)
```

### Search and Filtering

```python
# Search for specific content
results = memory.search_messages("bitcoin", limit=5)

# Get messages from last hour
recent = memory.get_recent_messages(hours=1)
```

### Metadata Management

```python
# Store custom metadata
memory.set_metadata("last_topic", "cryptocurrency")
memory.set_metadata("user_preferences", {"theme": "dark"})

# Retrieve metadata
topic = memory.get_metadata("last_topic")
preferences = memory.get_metadata("user_preferences", {})
```

## Integration with GraphAgent

The `GraphAgent` automatically integrates memory management:

```python
from spoon_ai.graph import GraphAgent, StateGraph

# Create agent with automatic memory
agent = GraphAgent(
    name="crypto_analyzer",
    graph=my_graph,
    memory_path="./agent_memory",
    session_id="crypto_session"
)

# Memory is automatically managed
result = await agent.run("Analyze BTC trends")

# Access memory statistics
stats = agent.get_memory_statistics()
print(f"Messages stored: {stats['total_messages']}")
```

## Memory Statistics

Get comprehensive memory usage information:

```python
stats = memory.get_statistics()

# Available statistics:
# - total_messages: Number of stored messages
# - session_id: Current session identifier
# - storage_path: Memory storage location
# - file_size: Memory file size in bytes
# - last_updated: Last update timestamp
```

## Session Management

### Multiple Sessions

```python
# Create different sessions for different contexts
trading_memory = Memory(session_id="trading_session")
research_memory = Memory(session_id="research_session")

# Switch between sessions in GraphAgent
agent.load_session("trading_session")
result = await agent.run("Trading analysis")
```

### Session Persistence

Memory automatically persists to disk:

```python
# Data is saved to: ~/.spoon_ai/memory/{session_id}.json
memory.add_message({"role": "user", "content": "Important message"})

# Restart application - memory persists
memory2 = Memory(session_id="my_session")  # Loads previous data
```

## Advanced Features

### Custom Memory Implementation

```python
class CustomMemory(Memory):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.custom_field = "custom_value"

    def custom_method(self):
        # Custom functionality
        pass

# Use custom memory with GraphAgent
custom_memory = CustomMemory()
agent = GraphAgent("custom_agent", my_graph, memory=custom_memory)
```

### Memory Cleanup

```python
# Clear all memory data
memory.clear()

# Clear specific old messages
# (Implement based on your retention policy)
old_messages = memory.get_recent_messages(hours=-24)  # More than 24h ago
```

### Memory Validation

```python
# Validate message format before storage
def validate_message(msg):
    required_fields = ['role', 'content', 'timestamp']
    return all(field in msg for field in required_fields)

# Use in custom memory implementation
class ValidatingMemory(Memory):
    def add_message(self, msg):
        if validate_message(msg):
            super().add_message(msg)
```

## Best Practices

### Performance Optimization

- **Message Limits**: Set reasonable limits on stored messages
- **Cleanup Policies**: Implement automatic cleanup for old messages
- **Metadata Size**: Keep metadata compact and relevant
- **Search Optimization**: Use appropriate limits for search operations

### State Management

- **Session Isolation**: Use separate sessions for different contexts
- **State Validation**: Validate preserved state before reuse
- **Error Recovery**: Implement checkpoint/restore mechanisms

### Security Considerations

- **Data Encryption**: Consider encrypting sensitive conversation data
- **Access Control**: Implement proper file permissions for memory storage
- **Data Sanitization**: Remove sensitive information before storage

## Troubleshooting

### Common Issues

**Memory file corruption:**
```python
# Check file integrity
import json
try:
    with open(memory.session_file, 'r') as f:
        data = json.load(f)
except json.JSONDecodeError:
    memory.clear()  # Reset corrupted memory
```

**Large memory files:**
```python
# Monitor file size
stats = memory.get_statistics()
if stats['file_size'] > 10 * 1024 * 1024:  # 10MB limit
    memory.clear()  # Or implement selective cleanup
```

**Session conflicts:**
```python
# Ensure unique session IDs
import time
session_id = f"agent_{int(time.time())}_{random_suffix}"
memory = Memory(session_id=session_id)
```

## See Also

- **[GraphAgent API](graph-agent.md)**: Agent implementation with memory integration
- **[State Management](../api-reference/graph/state-graph.md)**: Graph execution state handling
- **[Agent Architecture](../core-concepts/agents-detailed.md)**: Complete agent design patterns

