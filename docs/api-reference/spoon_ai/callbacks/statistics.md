---
id: spoon_ai.callbacks.statistics
slug: /api-reference/spoon_ai/callbacks/statistics
title: spoon_ai.callbacks.statistics
---

# Table of Contents

* [spoon\_ai.callbacks.statistics](#spoon_ai.callbacks.statistics)
  * [StreamingStatisticsCallback](#spoon_ai.callbacks.statistics.StreamingStatisticsCallback)

<a id="spoon_ai.callbacks.statistics"></a>

# Module `spoon_ai.callbacks.statistics`

<a id="spoon_ai.callbacks.statistics.StreamingStatisticsCallback"></a>

## `StreamingStatisticsCallback` Objects

```python
class StreamingStatisticsCallback(BaseCallbackHandler, LLMManagerMixin)
```

Collect simple throughput statistics during streaming runs.

By default, the callback prints summary metrics when the LLM finishes.
Consumers can provide a custom ``print_fn`` to redirect output, or disable
printing entirely and read the public attributes after execution.

