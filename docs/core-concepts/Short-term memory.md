
---

## Overview

Memory is a system that enables an AI agent to retain information from past interactions.
For intelligent agents, memory is vital because it allows them to recall previous conversations, learn from feedback, and adapt to user preferences over time. As agents engage in increasingly complex tasks involving many user exchanges, a reliable memory mechanism becomes essential for both efficiency and user experience.

### Short-term memory

Short-term memory allows your application to remember recent interactions within a single thread or conversation.
A thread groups multiple exchanges in a session, much like how an email client organizes messages into a single conversation.

The conversation history is the most common form of short-term memory. However, long-running conversations pose a major challenge for modern large language models (LLMs):
a complete history may exceed the model’s context window, leading to context loss or inconsistent responses.

Even when a model supports large context windows, most LLMs still degrade in performance with long contexts—they tend to become distracted by irrelevant or outdated information, respond more slowly, and consume more tokens (and cost).

### Managing context effectively

Chat models receive context through messages, which typically include:

* System messages (instructions or role definitions)
* User messages (human inputs)
* Assistant messages (model responses)

As conversations progress, the message list grows continuously.
Because context windows are finite, applications benefit from strategies that trim, summarize, or forget stale information—keeping the model’s focus sharp while maintaining coherence and reducing computational cost.

---


##  Quick Start: ChatBot with Built-in Memory
 When you initialise `ChatBot` with `enable_short_term_memory=True` (the default), it creates a `ShortTermMemoryManager` internally. Before every LLM call, the chatbot feeds the running history into the manager, which handles trimming or summarising and (optionally) saving checkpoints.
 You can still access the same manager manually via `chatbot.short_term_memory_manager` if you want to tweak the behaviour or call its methods directly, as shown in the next section.

```python
import asyncio
from spoon_ai.chat import ChatBot

chatbot = ChatBot(enable_short_term_memory=True)

messages = [
    {"role": "user", "content": "Explain blockchain in one sentence."},
    {"role": "assistant", "content": "A blockchain is an append-only, shared ledger."},
]

reply = asyncio.run(chatbot.ask(messages))
print(reply)
```

---

##  Manage short-term memory by using `ShortTermMemoryManager`

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

##  Inspecting Thread State and Checkpoints

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
