---
id: spoon_ai.memory.checkpointer
slug: /api-reference/spoon_ai/memory/checkpointer
title: spoon_ai.memory.checkpointer
---

# Table of Contents

* [spoon\_ai.memory.checkpointer](#spoon_ai.memory.checkpointer)
  * [Checkpoint](#spoon_ai.memory.checkpointer.Checkpoint)
    * [messages](#spoon_ai.memory.checkpointer.Checkpoint.messages)
    * [agent\_state](#spoon_ai.memory.checkpointer.Checkpoint.agent_state)
    * [metadata](#spoon_ai.memory.checkpointer.Checkpoint.metadata)
  * [BaseCheckpointer](#spoon_ai.memory.checkpointer.BaseCheckpointer)
    * [save](#spoon_ai.memory.checkpointer.BaseCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.BaseCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.BaseCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.BaseCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.BaseCheckpointer.get_history)
  * [InMemoryCheckpointer](#spoon_ai.memory.checkpointer.InMemoryCheckpointer)
    * [save](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.InMemoryCheckpointer.get_history)
  * [SQLiteCheckpointer](#spoon_ai.memory.checkpointer.SQLiteCheckpointer)
    * [\_\_init\_\_](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.__init__)
    * [save](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.SQLiteCheckpointer.get_history)
  * [JSONCheckpointer](#spoon_ai.memory.checkpointer.JSONCheckpointer)
    * [\_\_init\_\_](#spoon_ai.memory.checkpointer.JSONCheckpointer.__init__)
    * [save](#spoon_ai.memory.checkpointer.JSONCheckpointer.save)
    * [load](#spoon_ai.memory.checkpointer.JSONCheckpointer.load)
    * [list\_threads](#spoon_ai.memory.checkpointer.JSONCheckpointer.list_threads)
    * [delete](#spoon_ai.memory.checkpointer.JSONCheckpointer.delete)
    * [get\_history](#spoon_ai.memory.checkpointer.JSONCheckpointer.get_history)
  * [CheckpointMiddleware](#spoon_ai.memory.checkpointer.CheckpointMiddleware)
    * [\_\_init\_\_](#spoon_ai.memory.checkpointer.CheckpointMiddleware.__init__)
    * [before\_agent](#spoon_ai.memory.checkpointer.CheckpointMiddleware.before_agent)
    * [after\_agent](#spoon_ai.memory.checkpointer.CheckpointMiddleware.after_agent)
  * [create\_sqlite\_checkpointer](#spoon_ai.memory.checkpointer.create_sqlite_checkpointer)
  * [create\_memory\_checkpointer](#spoon_ai.memory.checkpointer.create_memory_checkpointer)

<a id="spoon_ai.memory.checkpointer"></a>

# Module `spoon_ai.memory.checkpointer`

Enhanced Checkpointing System

Provides persistent storage for agent state, enabling:
- Conversation pause and resume
- Thread-based isolation
- State recovery after crashes
- Cross-session persistence

Backends:
- InMemoryCheckpointer: For testing
- SQLiteCheckpointer: Production-ready persistence
- JSONCheckpointer: File-based persistence

Usage:
    checkpointer = SQLiteCheckpointer("agent_memory.db")

    agent = ToolCallAgent(
        thread_id="user-123",
        middleware=[CheckpointMiddleware(checkpointer)]
    )

    # State is automatically saved after each step
    await agent.run("Do something complex")

    # Resume in a new session
    agent2 = ToolCallAgent(
        thread_id="user-123",  # Same thread
        middleware=[CheckpointMiddleware(checkpointer)]
    )
    # Agent2 will restore state from checkpoint

<a id="spoon_ai.memory.checkpointer.Checkpoint"></a>

## `Checkpoint` Objects

```python
@dataclass
class Checkpoint()
```

A single checkpoint containing agent state.

<a id="spoon_ai.memory.checkpointer.Checkpoint.messages"></a>

#### `messages`

Serialized messages

<a id="spoon_ai.memory.checkpointer.Checkpoint.agent_state"></a>

#### `agent_state`

Agent state dict

<a id="spoon_ai.memory.checkpointer.Checkpoint.metadata"></a>

#### `metadata`

Additional metadata

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer"></a>

## `BaseCheckpointer` Objects

```python
class BaseCheckpointer(ABC)
```

Abstract base class for checkpointers.

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.save"></a>

#### `save`

```python
@abstractmethod
def save(checkpoint: Checkpoint) -> None
```

Save a checkpoint.

**Arguments**:

- `checkpoint` - Checkpoint to save

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.load"></a>

#### `load`

```python
@abstractmethod
def load(thread_id: str) -> Optional[Checkpoint]
```

Load the latest checkpoint for a thread.

**Arguments**:

- `thread_id` - Thread identifier
  

**Returns**:

  Latest checkpoint or None if not found

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.list_threads"></a>

#### `list_threads`

```python
@abstractmethod
def list_threads() -> List[str]
```

List all thread IDs with checkpoints.

**Returns**:

  List of thread IDs

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.delete"></a>

#### `delete`

```python
@abstractmethod
def delete(thread_id: str) -> bool
```

Delete all checkpoints for a thread.

**Arguments**:

- `thread_id` - Thread identifier
  

**Returns**:

  True if deleted, False if not found

<a id="spoon_ai.memory.checkpointer.BaseCheckpointer.get_history"></a>

#### `get_history`

```python
@abstractmethod
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history for a thread.

**Arguments**:

- `thread_id` - Thread identifier
- `limit` - Maximum number of checkpoints to return
  

**Returns**:

  List of checkpoints, most recent first

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer"></a>

## `InMemoryCheckpointer` Objects

```python
class InMemoryCheckpointer(BaseCheckpointer)
```

In-memory checkpointer for testing and development.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.save"></a>

#### `save`

```python
def save(checkpoint: Checkpoint) -> None
```

Save checkpoint to memory.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.load"></a>

#### `load`

```python
def load(thread_id: str) -> Optional[Checkpoint]
```

Load latest checkpoint from memory.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.list_threads"></a>

#### `list_threads`

```python
def list_threads() -> List[str]
```

List all thread IDs.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.delete"></a>

#### `delete`

```python
def delete(thread_id: str) -> bool
```

Delete all checkpoints for thread.

<a id="spoon_ai.memory.checkpointer.InMemoryCheckpointer.get_history"></a>

#### `get_history`

```python
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer"></a>

## `SQLiteCheckpointer` Objects

```python
class SQLiteCheckpointer(BaseCheckpointer)
```

SQLite-based checkpointer for production use.

Features:
- Persistent storage
- Automatic schema creation
- Thread-safe operations
- Checkpoint history

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.__init__"></a>

#### `__init__`

```python
def __init__(db_path: str = "checkpoints.db")
```

Initialize SQLite checkpointer.

**Arguments**:

- `db_path` - Path to SQLite database file

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.save"></a>

#### `save`

```python
def save(checkpoint: Checkpoint) -> None
```

Save checkpoint to SQLite.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.load"></a>

#### `load`

```python
def load(thread_id: str) -> Optional[Checkpoint]
```

Load latest checkpoint from SQLite.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.list_threads"></a>

#### `list_threads`

```python
def list_threads() -> List[str]
```

List all thread IDs.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.delete"></a>

#### `delete`

```python
def delete(thread_id: str) -> bool
```

Delete all checkpoints for thread.

<a id="spoon_ai.memory.checkpointer.SQLiteCheckpointer.get_history"></a>

#### `get_history`

```python
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer"></a>

## `JSONCheckpointer` Objects

```python
class JSONCheckpointer(BaseCheckpointer)
```

JSON file-based checkpointer.

Each thread gets its own JSON file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.__init__"></a>

#### `__init__`

```python
def __init__(storage_dir: str = ".checkpoints")
```

Initialize JSON checkpointer.

**Arguments**:

- `storage_dir` - Directory for checkpoint files

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.save"></a>

#### `save`

```python
def save(checkpoint: Checkpoint) -> None
```

Save checkpoint to JSON file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.load"></a>

#### `load`

```python
def load(thread_id: str) -> Optional[Checkpoint]
```

Load latest checkpoint from JSON file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.list_threads"></a>

#### `list_threads`

```python
def list_threads() -> List[str]
```

List all thread IDs.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.delete"></a>

#### `delete`

```python
def delete(thread_id: str) -> bool
```

Delete checkpoint file.

<a id="spoon_ai.memory.checkpointer.JSONCheckpointer.get_history"></a>

#### `get_history`

```python
def get_history(thread_id: str, limit: int = 10) -> List[Checkpoint]
```

Get checkpoint history.

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware"></a>

## `CheckpointMiddleware` Objects

```python
class CheckpointMiddleware(AgentMiddleware)
```

Middleware that adds automatic checkpointing.

Features:
- Automatic state saving after each step
- Automatic state restoration on startup
- Thread-based isolation
- Configurable checkpoint frequency

Usage:
    checkpointer = SQLiteCheckpointer("agent.db")

    agent = ToolCallAgent(
        thread_id="user-123",
        middleware=[CheckpointMiddleware(
            checkpointer,
            save_frequency=1  # Save after every step
        )]
    )

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(checkpointer: BaseCheckpointer,
             save_frequency: int = 1,
             auto_restore: bool = True)
```

Initialize checkpoint middleware.

**Arguments**:

- `checkpointer` - Checkpointer backend
- `save_frequency` - Save checkpoint every N steps
- `auto_restore` - Automatically restore state on startup

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Restore state from checkpoint on startup.

<a id="spoon_ai.memory.checkpointer.CheckpointMiddleware.after_agent"></a>

#### `after_agent`

```python
def after_agent(state: Dict[str, Any],
                runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Save checkpoint after agent completes.

<a id="spoon_ai.memory.checkpointer.create_sqlite_checkpointer"></a>

#### `create_sqlite_checkpointer`

```python
def create_sqlite_checkpointer(
        db_path: str = "agent_memory.db") -> SQLiteCheckpointer
```

Create a SQLite checkpointer.

**Arguments**:

- `db_path` - Path to SQLite database
  

**Returns**:

  Configured SQLiteCheckpointer

<a id="spoon_ai.memory.checkpointer.create_memory_checkpointer"></a>

#### `create_memory_checkpointer`

```python
def create_memory_checkpointer() -> InMemoryCheckpointer
```

Create an in-memory checkpointer for testing.

**Returns**:

  InMemoryCheckpointer instance

