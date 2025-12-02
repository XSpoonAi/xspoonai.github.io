# Short-Term Memory

## Introduction

Short-term memory manages conversation context within a single session, ensuring LLMs receive relevant history without exceeding context window limits. SpoonOS provides `ShortTermMemoryManager` with automatic trimming, LLM-based summarization, and checkpoint integration—enabling long-running conversations without context loss or excessive token consumption.

### Core Capabilities

- **Token-Aware Trimming**: Automatically trims messages to fit within configurable token budgets while preserving recent context
- **LLM Summarization**: Condenses older messages into summaries when history grows too long, maintaining key information
- **Configurable Strategies**: Multiple trimming strategies (from start, from end, oldest first) for different use cases
- **Checkpoint Integration**: Integrates with graph system checkpointers for state persistence and recovery
- **Built-in with ChatBot**: Enabled by default in `ChatBot` class—works transparently without extra configuration

### Comparison with Context Management Approaches

| Approach | Behavior | Pros | Cons |
|----------|----------|------|------|
| **No management** | Pass full history | Complete context | Exceeds limits, high cost |
| **Truncation** | Drop old messages | Simple, fast | Loses important context |
| **Sliding window** | Keep last N messages | Predictable | May lose critical early context |
| **SpoonOS STM** | Trim + summarize | Preserves key info, token efficient | Summarization latency/cost |

**When to use short-term memory:**

- You're building chatbots or agents with multi-turn conversations
- Conversations may exceed your model's context window
- You want to reduce token costs while maintaining conversation coherence
- You need automatic handling without manual message management

---

## Quick Start

```bash
pip install spoon-ai
export OPENAI_API_KEY="your-key"
```

```python
import asyncio
from spoon_ai.chat import ChatBot

# ChatBot includes built-in short-term memory with auto-trimming
llm = ChatBot(model_name="gpt-4.1", llm_provider="openai")

async def main():
    await llm.chat("My name is Alice")
    await llm.chat("What's the capital of France?")
    response = await llm.chat("What's my name?")  # Remembers "Alice"
    print(response)

asyncio.run(main())
```

---

## ShortTermMemoryManager

For fine-grained control beyond `ChatBot`'s automatic handling, use `ShortTermMemoryManager` directly:

```python
import asyncio
from spoon_ai.memory.short_term_manager import ShortTermMemoryManager, TrimStrategy
from spoon_ai.schema import Message

manager = ShortTermMemoryManager()
history = [
    Message(id="u1", role="user", content="Hello!"),
    Message(id="a1", role="assistant", content="Hi there — how can I help?"),
    Message(id="u2", role="user", content="What's DeFi?"),
]


#  Trim the message list by token budget
trimmed = asyncio.run(
    manager.trim_messages(
        messages=history,
        max_tokens=48,
        strategy=TrimStrategy.FROM_END,
        keep_system=True,
    )
)

#  Summarize history before model call
llm_ready, removals, summary = asyncio.run(
    manager.summarize_messages(
        messages=history,
        max_tokens_before_summary=48,
        messages_to_keep=2,
        summary_model="anthropic/claude-3.5-sonnet",
        llm_manager=chatbot.llm_manager,
        llm_provider=chatbot.llm_provider,
        existing_summary=chatbot.latest_summary() or "",
    )
)
```

 `llm_ready` — condensed history you can pass to the LLM
 `removals` — list of RemoveMessage directives:apply removals to your persisted history using spoon_ai.graph.reducers.add_messages.

Note: both `summarize_messages()` and `ChatBot.ask()` invoke your configured LLM. Ensure `chatbot.llm_manager`/`chatbot.llm_provider` (and any required API keys or env vars) are set so these examples can run end‑to‑end.

```python
from spoon_ai.chat import ChatBot
from spoon_ai.graph.reducers import add_messages

chatbot = ChatBot(enable_short_term_memory=True)
history = [
    Message(id="u1", role="user", content="Hello!"),
    Message(id="a1", role="assistant", content="Hi there — how can I help?"),
    Message(id="u2", role="user", content="What's DeFi?"),
]
# Remove the latest assistant message
assistant_ids = [msg.id for msg in history if msg.role == "assistant"]
remove_last = chatbot.remove_message(assistant_ids[-1])

# Or clear the entire history
remove_all = chatbot.remove_all_messages()

# Apply directives to persisted history
updated_history = add_messages(history, [remove_last])
cleared_history = add_messages(history, [remove_all])
```

`add_messages()` merges the removal directives into the existing history,
deleting targeted entries (or the entire transcript).
This mirrors how the short-term memory manager emits `RemoveMessage` items
when summarization trims older turns.

---

## Inspecting Thread State and Checkpoints

every time the graph runs, you can retrieve the latest snapshot (messages plus metadata), iterate the full checkpoint history, or read a `CheckpointTuple` for an external consumer. This makes it easy to debug memory behaviour, replay from any checkpoint, or sync state to persistent storage. The example below shows how to fetch the most recent summary, list all checkpoints, and view the tuple-style payload.

```python
config = {"configurable": {"thread_id": "memory_demo_thread"}}

snapshot = graph.get_state(config)
print("Latest checkpoint:", snapshot.metadata.get("checkpoint_id"))

for snap in graph.get_state_history(config):
    print("History id:", snap.metadata.get("checkpoint_id"))

checkpoint_tuple = graph.checkpointer.get_checkpoint_tuple(config)
print("Checkpoint tuple:", checkpoint_tuple)

for entry in graph.checkpointer.iter_checkpoint_history(config):
    print("Tuple history entry:", entry)
```

If you are using a compiled graph (`CompiledGraph`), call `graph.graph.get_state(config)` and `graph.graph.get_state_history(config)` instead; the snippet above assumes `graph` is a `StateGraph`.
