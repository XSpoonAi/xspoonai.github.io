---
id: spoon_ai.graph.checkpointer
slug: /api-reference/spoon_ai/graph/checkpointer.md
title: spoon_ai.graph.checkpointer
---

# Table of Contents

* [spoon\_ai.graph.checkpointer](#spoon_ai.graph.checkpointer)
  * [InMemoryCheckpointer](#spoon_ai.graph.checkpointer.InMemoryCheckpointer)
    * [iter\_checkpoint\_history](#spoon_ai.graph.checkpointer.InMemoryCheckpointer.iter_checkpoint_history)

<a id="spoon_ai.graph.checkpointer"></a>

# Module `spoon_ai.graph.checkpointer`

In-memory checkpointer for the graph package.

<a id="spoon_ai.graph.checkpointer.InMemoryCheckpointer"></a>

## `InMemoryCheckpointer` Objects

```python
class InMemoryCheckpointer()
```

<a id="spoon_ai.graph.checkpointer.InMemoryCheckpointer.iter_checkpoint_history"></a>

#### `iter_checkpoint_history`

```python
def iter_checkpoint_history(
        config: Dict[str, Any]) -> Iterable[CheckpointTuple]
```

Return checkpoint tuples for the specified thread, newest last.

