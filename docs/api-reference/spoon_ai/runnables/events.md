---
id: spoon_ai.runnables.events
slug: /api-reference/spoon_ai/runnables/events.md
title: spoon_ai.runnables.events
---

# Table of Contents

* [spoon\_ai.runnables.events](#spoon_ai.runnables.events)
  * [StreamEventBuilder](#spoon_ai.runnables.events.StreamEventBuilder)
    * [chain\_start](#spoon_ai.runnables.events.StreamEventBuilder.chain_start)
    * [chain\_stream](#spoon_ai.runnables.events.StreamEventBuilder.chain_stream)
    * [chain\_end](#spoon_ai.runnables.events.StreamEventBuilder.chain_end)
    * [chain\_error](#spoon_ai.runnables.events.StreamEventBuilder.chain_error)
    * [llm\_stream](#spoon_ai.runnables.events.StreamEventBuilder.llm_stream)

<a id="spoon_ai.runnables.events"></a>

# Module `spoon_ai.runnables.events`

<a id="spoon_ai.runnables.events.StreamEventBuilder"></a>

## `StreamEventBuilder` Objects

```python
class StreamEventBuilder()
```

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_start"></a>

#### `chain_start`

```python
@staticmethod
def chain_start(run_id: UUID, name: str, inputs: Any,
                **kwargs: Any) -> StreamEvent
```

Build chain start event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_stream"></a>

#### `chain_stream`

```python
@staticmethod
def chain_stream(run_id: UUID, name: str, chunk: Any,
                 **kwargs: Any) -> StreamEvent
```

Build chain stream event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_end"></a>

#### `chain_end`

```python
@staticmethod
def chain_end(run_id: UUID, name: str, output: Any,
              **kwargs: Any) -> StreamEvent
```

Build chain end event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.chain_error"></a>

#### `chain_error`

```python
@staticmethod
def chain_error(run_id: UUID, name: str, error: Exception,
                **kwargs: Any) -> StreamEvent
```

Build chain error event.

<a id="spoon_ai.runnables.events.StreamEventBuilder.llm_stream"></a>

#### `llm_stream`

```python
@staticmethod
def llm_stream(run_id: UUID,
               name: str,
               token: str,
               chunk: Optional[Any] = None,
               **kwargs: Any) -> StreamEvent
```

Build LLM stream event.

