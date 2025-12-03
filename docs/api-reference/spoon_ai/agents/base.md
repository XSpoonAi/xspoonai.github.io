---
id: spoon_ai.agents.base
slug: /api-reference/spoon_ai/agents/base.md
title: spoon_ai.agents.base
---

# Table of Contents

* [spoon\_ai.agents.base](#spoon_ai.agents.base)
  * [ThreadSafeOutputQueue](#spoon_ai.agents.base.ThreadSafeOutputQueue)
    * [get](#spoon_ai.agents.base.ThreadSafeOutputQueue.get)
  * [BaseAgent](#spoon_ai.agents.base.BaseAgent)
    * [add\_message](#spoon_ai.agents.base.BaseAgent.add_message)
    * [state\_context](#spoon_ai.agents.base.BaseAgent.state_context)
    * [run](#spoon_ai.agents.base.BaseAgent.run)
    * [step](#spoon_ai.agents.base.BaseAgent.step)
    * [is\_stuck](#spoon_ai.agents.base.BaseAgent.is_stuck)
    * [handle\_stuck\_state](#spoon_ai.agents.base.BaseAgent.handle_stuck_state)
    * [add\_documents](#spoon_ai.agents.base.BaseAgent.add_documents)
    * [save\_chat\_history](#spoon_ai.agents.base.BaseAgent.save_chat_history)
    * [stream](#spoon_ai.agents.base.BaseAgent.stream)
    * [process\_mcp\_message](#spoon_ai.agents.base.BaseAgent.process_mcp_message)
    * [shutdown](#spoon_ai.agents.base.BaseAgent.shutdown)
    * [get\_diagnostics](#spoon_ai.agents.base.BaseAgent.get_diagnostics)

<a id="spoon_ai.agents.base"></a>

# Module `spoon_ai.agents.base`

<a id="spoon_ai.agents.base.ThreadSafeOutputQueue"></a>

## `ThreadSafeOutputQueue` Objects

```python
class ThreadSafeOutputQueue()
```

Thread-safe output queue with fair access and timeout protection

<a id="spoon_ai.agents.base.ThreadSafeOutputQueue.get"></a>

#### `get`

```python
async def get(timeout: Optional[float] = 30.0) -> Any
```

Get item with timeout and fair access

<a id="spoon_ai.agents.base.BaseAgent"></a>

## `BaseAgent` Objects

```python
class BaseAgent(BaseModel, ABC)
```

Thread-safe base class for all agents with proper concurrency handling.

<a id="spoon_ai.agents.base.BaseAgent.add_message"></a>

#### `add_message`

```python
async def add_message(role: Literal["user", "assistant", "tool"],
                      content: str,
                      tool_call_id: Optional[str] = None,
                      tool_calls: Optional[List[ToolCall]] = None,
                      tool_name: Optional[str] = None,
                      timeout: Optional[float] = None) -> None
```

Thread-safe message addition with timeout protection

<a id="spoon_ai.agents.base.BaseAgent.state_context"></a>

#### `state_context`

```python
@asynccontextmanager
async def state_context(new_state: AgentState,
                        timeout: Optional[float] = None)
```

Thread-safe state context manager with deadlock prevention.
Acquires the state lock only to perform quick transitions, not for the
duration of the work inside the context, avoiding long-held locks and
false timeouts during network calls.

<a id="spoon_ai.agents.base.BaseAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None,
              timeout: Optional[float] = None) -> str
```

Thread-safe run method with proper concurrency control and callback support.

<a id="spoon_ai.agents.base.BaseAgent.step"></a>

#### `step`

```python
async def step(run_id: Optional[uuid.UUID] = None) -> str
```

Override this method in subclasses - now with step-level locking and callback support.

<a id="spoon_ai.agents.base.BaseAgent.is_stuck"></a>

#### `is_stuck`

```python
async def is_stuck() -> bool
```

Thread-safe stuck detection

<a id="spoon_ai.agents.base.BaseAgent.handle_stuck_state"></a>

#### `handle_stuck_state`

```python
async def handle_stuck_state()
```

Thread-safe stuck state handling

<a id="spoon_ai.agents.base.BaseAgent.add_documents"></a>

#### `add_documents`

```python
def add_documents(documents) -> None
```

Store documents on the agent so CLI load-docs works without RAG mixin.

This default implementation keeps the documents in-memory under
self._loaded_documents. Agents that support retrieval should override
this method to index documents into their vector store.

<a id="spoon_ai.agents.base.BaseAgent.save_chat_history"></a>

#### `save_chat_history`

```python
def save_chat_history()
```

Thread-safe chat history saving

<a id="spoon_ai.agents.base.BaseAgent.stream"></a>

#### `stream`

```python
async def stream(timeout: Optional[float] = None)
```

Thread-safe streaming with proper cleanup and timeout

<a id="spoon_ai.agents.base.BaseAgent.process_mcp_message"></a>

#### `process_mcp_message`

```python
async def process_mcp_message(content: Any,
                              sender: str,
                              message: Dict[str, Any],
                              agent_id: str,
                              timeout: Optional[float] = None)
```

Thread-safe MCP message processing with timeout protection

<a id="spoon_ai.agents.base.BaseAgent.shutdown"></a>

#### `shutdown`

```python
async def shutdown(timeout: float = 30.0)
```

Graceful shutdown with cleanup of active operations

<a id="spoon_ai.agents.base.BaseAgent.get_diagnostics"></a>

#### `get_diagnostics`

```python
def get_diagnostics() -> Dict[str, Any]
```

Get diagnostic information about the agent's state

