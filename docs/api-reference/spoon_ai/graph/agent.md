---
id: spoon_ai.graph.agent
slug: /api-reference/spoon_ai/graph/agent.md
title: spoon_ai.graph.agent
---

# Table of Contents

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

