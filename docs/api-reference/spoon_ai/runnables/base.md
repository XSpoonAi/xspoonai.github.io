---
id: spoon_ai.runnables.base
slug: /api-reference/spoon_ai/runnables/base.md
title: spoon_ai.runnables.base
---

# Table of Contents

* [spoon\_ai.runnables.base](#spoon_ai.runnables.base)
  * [log\_patches\_from\_events](#spoon_ai.runnables.base.log_patches_from_events)
  * [Runnable](#spoon_ai.runnables.base.Runnable)
    * [astream\_log](#spoon_ai.runnables.base.Runnable.astream_log)
    * [astream\_events](#spoon_ai.runnables.base.Runnable.astream_events)

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

