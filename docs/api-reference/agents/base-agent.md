# BaseAgent API Reference

`BaseAgent` is the concurrency-safe foundation for all agents in `spoon_ai`. It is a Pydantic `BaseModel` plus an `ABC`; concrete agents must override `step()` and plug in an `llm` and (optionally) a `memory` backend.

## Class Definition

```python
from spoon_ai.agents.base import BaseAgent
from spoon_ai.chat import ChatBot, Memory
from spoon_ai.schema import AgentState, Message, Role, ToolCall

class BaseAgent(BaseModel, ABC):
    name: str
    description: str | None = None
    system_prompt: str | None = None
    next_step_prompt: str | None = None
    llm: ChatBot
    memory: Memory = Memory()
    state: AgentState = AgentState.IDLE
    max_steps: int = 10
    current_step: int = 0
    callbacks: list[BaseCallbackHandler] = []
```

### Construction
- Instantiate with the fields above (Pydantic will validate types).  
- `__init__(**kwargs)` also sets up async locks, timeout defaults, and a `CallbackManager`.  
- Python 3.12+ and an event loop are required for all async methods.

## Core Methods

### `async add_message(role, content, *, tool_call_id=None, tool_calls=None, tool_name=None, timeout=None) -> None`
Thread‑safe append to the agent’s memory. Accepts roles `"user"`, `"assistant"`, or `"tool"`. When `tool_calls` are provided, they are serialized into the assistant message. Default timeout: `_memory_operation_timeout` (10s).

### `@asynccontextmanager state_context(new_state: AgentState, timeout: float | None = None)`
Atomic state transition helper used inside `run()`; records transition history and prevents deadlocks while user work runs outside the lock.

### `async run(request: str | None = None, timeout: float | None = None) -> str`
Top-level execution loop.  
- Adds the user request (if provided) via `add_message`.  
- Iterates up to `max_steps`, calling `step(run_id=uuid4())` each time.  
- Guards each step with per-step timeouts and stuck‑state detection.  
- Resets `state` to `IDLE` and `current_step` to `0` on exit.  
Default timeout: `_default_timeout` (30s).

### `async step(run_id: uuid.UUID | None = None) -> str`
Abstract hook that concrete agents must implement. A per-step lock (`_step_lock`) is held while this runs.

### `async is_stuck() -> bool`
Returns `True` when the agent has stayed in the same state for multiple transitions.

### `async handle_stuck_state() -> None`
Adds a short “I seem stuck…” assistant message to memory and bumps `next_step_prompt` to help the agent recover.

### `def add_documents(documents) -> None`
Stores arbitrary documents on the agent (kept in `_loaded_documents`). Override in RAG-capable subclasses to index into a vector store.

### `def save_chat_history() -> None`
Writes chat history to `chat_logs/{agent_name}_history.json` if `chat_history` is present on the instance.

### `async stream(timeout: float | None = None) -> AsyncGenerator[str, None]`
Yields items from `output_queue` until `task_done` is signaled. Used when streaming responses via `process_mcp_message`.

### `async process_mcp_message(content, sender, message, agent_id, timeout: float | None = None) -> str | AsyncGenerator[str, None]`
Utility to ingest an MCP message: records the user text into memory, then either returns the result of `run()` or a streaming generator when `metadata.request_stream` is set.

### `async shutdown() -> None`
Signals shutdown, waits for active operations to drain, and resets state.

### `def get_diagnostics() -> dict`
Returns internal counters and lock states for debugging.

## Typical Usage

```python
class EchoAgent(BaseAgent):
    async def step(self, run_id=None) -> str:
        last_user = self.memory.messages[-1].content if self.memory.messages else ""
        reply = f"Echo: {last_user}"
        await self.add_message("assistant", reply)
        # push to stream
        await self.output_queue.put(reply)
        return reply

agent = EchoAgent(name="echo", llm=my_chatbot)
result = await agent.run("hello")
print(result)  # "Step 1: Echo: hello"
```

## Notes
- All public methods are coroutine-safe; avoid bypassing `add_message` or `state_context` when mutating memory or state.
- Tool integration is handled by higher-level agent subclasses; BaseAgent itself does not manage tools.
- Errors inside `run()` reset the agent to `IDLE` and re-raise to the caller.

## See Also
- `spoon_ai.agents.graph_agent.GraphAgent` for graph-backed agents.
- `spoon_ai.callbacks.manager.CallbackManager` for callback wiring.
- `spoon_ai.schema.AgentState` for state enums.
