---
id: spoon_ai.memory
slug: /api-reference/spoon_ai/memory/index.md/index
title: spoon_ai.memory
---

# Table of Contents

* [spoon\_ai.memory](#spoon_ai.memory)
* [spoon\_ai.memory.mem0\_client](#spoon_ai.memory.mem0_client)
  * [SpoonMem0](#spoon_ai.memory.mem0_client.SpoonMem0)
    * [add\_text](#spoon_ai.memory.mem0_client.SpoonMem0.add_text)
    * [get\_all\_memory](#spoon_ai.memory.mem0_client.SpoonMem0.get_all_memory)
* [spoon\_ai.memory.remove\_message](#spoon_ai.memory.remove_message)
  * [RemoveMessage](#spoon_ai.memory.remove_message.RemoveMessage)
* [spoon\_ai.memory.short\_term\_manager](#spoon_ai.memory.short_term_manager)
  * [TrimStrategy](#spoon_ai.memory.short_term_manager.TrimStrategy)
    * [FROM\_START](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_START)
    * [FROM\_END](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_END)
  * [MessageTokenCounter](#spoon_ai.memory.short_term_manager.MessageTokenCounter)
  * [ShortTermMemoryManager](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager)
    * [trim\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.trim_messages)
    * [summarize\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.summarize_messages)

<a id="spoon_ai.memory"></a>

# Module `spoon_ai.memory`

Short-term memory management for conversation history.

This module provides memory management utilities for maintaining and optimizing
conversation history in chat applications.

<a id="spoon_ai.memory.mem0_client"></a>

# Module `spoon_ai.memory.mem0_client`

<a id="spoon_ai.memory.mem0_client.SpoonMem0"></a>

## `SpoonMem0` Objects

```python
class SpoonMem0()
```

Lightweight wrapper around Mem0's MemoryClient with safe defaults.

<a id="spoon_ai.memory.mem0_client.SpoonMem0.add_text"></a>

#### `add_text`

```python
def add_text(data: str,
             user_id: Optional[str] = None,
             metadata: Optional[Dict[str, Any]] = None) -> None
```

Convenience helper for adding a single text memory.

<a id="spoon_ai.memory.mem0_client.SpoonMem0.get_all_memory"></a>

#### `get_all_memory`

```python
def get_all_memory(user_id: Optional[str] = None,
                   limit: Optional[int] = None) -> List[str]
```

Retrieve all memories for a user (subject to backend limits).

<a id="spoon_ai.memory.remove_message"></a>

# Module `spoon_ai.memory.remove_message`

Helpers for emitting message-removal directives.

<a id="spoon_ai.memory.remove_message.RemoveMessage"></a>

## `RemoveMessage` Objects

```python
class RemoveMessage(BaseModel)
```

Lightweight message that signals another message should be removed.

<a id="spoon_ai.memory.short_term_manager"></a>

# Module `spoon_ai.memory.short_term_manager`

Short-term memory management for conversation history.

<a id="spoon_ai.memory.short_term_manager.TrimStrategy"></a>

## `TrimStrategy` Objects

```python
class TrimStrategy(str, Enum)
```

Strategy for trimming messages.

<a id="spoon_ai.memory.short_term_manager.TrimStrategy.FROM_START"></a>

#### `FROM_START`

Remove oldest messages first

<a id="spoon_ai.memory.short_term_manager.TrimStrategy.FROM_END"></a>

#### `FROM_END`

Remove newest messages first

<a id="spoon_ai.memory.short_term_manager.MessageTokenCounter"></a>

## `MessageTokenCounter` Objects

```python
class MessageTokenCounter()
```

Approximate token counter aligned with LangChain semantics.

<a id="spoon_ai.memory.short_term_manager.ShortTermMemoryManager"></a>

## `ShortTermMemoryManager` Objects

```python
class ShortTermMemoryManager()
```

Manager for short-term conversation memory with advanced operations.

<a id="spoon_ai.memory.short_term_manager.ShortTermMemoryManager.trim_messages"></a>

#### `trim_messages`

```python
async def trim_messages(messages: List[Message],
                        max_tokens: int,
                        strategy: TrimStrategy = TrimStrategy.FROM_END,
                        keep_system: bool = True,
                        model: Optional[str] = None) -> List[Message]
```

Trim messages using a LangChain-style heuristic.

<a id="spoon_ai.memory.short_term_manager.ShortTermMemoryManager.summarize_messages"></a>

#### `summarize_messages`

```python
async def summarize_messages(
    messages: List[Message],
    max_tokens_before_summary: int,
    messages_to_keep: int = 5,
    summary_model: Optional[str] = None,
    llm_manager=None,
    llm_provider: Optional[str] = None,
    existing_summary: str = ""
) -> Tuple[List[Message], List[RemoveMessage], Optional[str]]
```

Summarize earlier messages and emit removal directives.

