---
id: spoon_ai.utils.streaming
slug: /api-reference/spoon_ai/utils/streaming
title: spoon_ai.utils.streaming
---

# Table of Contents

* [spoon\_ai.utils.streaming](#spoon_ai.utils.streaming)
  * [StreamOutcome](#spoon_ai.utils.streaming.StreamOutcome)
  * [build\_output\_queue\_event](#spoon_ai.utils.streaming.build_output_queue_event)

<a id="spoon_ai.utils.streaming"></a>

# Module `spoon_ai.utils.streaming`

<a id="spoon_ai.utils.streaming.StreamOutcome"></a>

## `StreamOutcome` Objects

```python
@dataclass
class StreamOutcome()
```

Accumulator for streaming output state.

<a id="spoon_ai.utils.streaming.build_output_queue_event"></a>

#### `build_output_queue_event`

```python
def build_output_queue_event(
        *,
        event_type: str,
        delta: str = "",
        metadata: Optional[Dict[str, Any]] = None) -> Dict[str, Any]
```

Build a backward-compatible output queue event payload.

