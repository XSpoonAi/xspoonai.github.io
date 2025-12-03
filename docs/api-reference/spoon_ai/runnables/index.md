---
id: spoon_ai.runnables
slug: /api-reference/spoon_ai/runnables/index.md/index
title: spoon_ai.runnables
---

# Table of Contents

* [spoon\_ai.runnables](#spoon_ai.runnables)
* [spoon\_ai.runnables.base](#spoon_ai.runnables.base)
  * [log\_patches\_from\_events](#spoon_ai.runnables.base.log_patches_from_events)
  * [Runnable](#spoon_ai.runnables.base.Runnable)
    * [astream\_log](#spoon_ai.runnables.base.Runnable.astream_log)
    * [astream\_events](#spoon_ai.runnables.base.Runnable.astream_events)
* [spoon\_ai.runnables.events](#spoon_ai.runnables.events)
  * [StreamEventBuilder](#spoon_ai.runnables.events.StreamEventBuilder)
    * [chain\_start](#spoon_ai.runnables.events.StreamEventBuilder.chain_start)
    * [chain\_stream](#spoon_ai.runnables.events.StreamEventBuilder.chain_stream)
    * [chain\_end](#spoon_ai.runnables.events.StreamEventBuilder.chain_end)
    * [chain\_error](#spoon_ai.runnables.events.StreamEventBuilder.chain_error)
    * [llm\_stream](#spoon_ai.runnables.events.StreamEventBuilder.llm_stream)

<a id="spoon_ai.runnables"></a>

# Module `spoon_ai.runnables`

Runnable interface and utilities for composable AI components.

This module provides the foundational Runnable interface that all Spoon AI
components implement, enabling streaming, composition, and standardized execution.

<a id="spoon_ai.runnables.base"></a>

# Module `spoon_ai.runnables.base`

<a id="spoon_ai.runnables.base.log_patches_from_events"></a>

#### `log_patches_from_events`

```python
async def log_patches_from_events(
        event_iter: AsyncIterator[Dict[str, Any]],
        *,
        diff: bool = True) -> AsyncIterator[RunLogPatch]
```

Convert a stream of events into run log patches.

<a id="spoon_ai.runnables.base.Runnable"></a>

## `Runnable` Objects

```python
class Runnable(ABC, Generic[Input, Output])
```

<a id="spoon_ai.runnables.base.Runnable.astream_log"></a>

#### `astream_log`

```python
async def astream_log(input: Input,
                      config: Optional[RunnableConfig] = None,
                      *,
                      diff: bool = True) -> AsyncIterator[RunLogPatch]
```

Asynchronously stream structured log patches derived from execution events.

<a id="spoon_ai.runnables.base.Runnable.astream_events"></a>

#### `astream_events`

```python
async def astream_events(
        input: Input,
        config: Optional[RunnableConfig] = None
) -> AsyncIterator[Dict[str, Any]]
```

Asynchronously stream structured execution events.

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

