---
id: spoon_ai.memory.short_term_manager
slug: /api-reference/spoon_ai/memory/short_term_manager
title: spoon_ai.memory.short_term_manager
---

# Table of Contents

* [spoon\_ai.memory.short\_term\_manager](#spoon_ai.memory.short_term_manager)
  * [TrimStrategy](#spoon_ai.memory.short_term_manager.TrimStrategy)
    * [FROM\_START](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_START)
    * [FROM\_END](#spoon_ai.memory.short_term_manager.TrimStrategy.FROM_END)
  * [MessageTokenCounter](#spoon_ai.memory.short_term_manager.MessageTokenCounter)
  * [ShortTermMemoryManager](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager)
    * [trim\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.trim_messages)
    * [summarize\_messages](#spoon_ai.memory.short_term_manager.ShortTermMemoryManager.summarize_messages)

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

