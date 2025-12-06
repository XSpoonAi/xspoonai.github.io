---
id: spoon_ai.memory.utils
slug: /api-reference/spoon_ai/memory/utils
title: spoon_ai.memory.utils
---

# Table of Contents

* [spoon\_ai.memory.utils](#spoon_ai.memory.utils)
  * [extract\_memories](#spoon_ai.memory.utils.extract_memories)
  * [extract\_first\_memory\_id](#spoon_ai.memory.utils.extract_first_memory_id)

<a id="spoon_ai.memory.utils"></a>

# Module `spoon_ai.memory.utils`

Memory helpers shared across Mem0 demos and utilities.

<a id="spoon_ai.memory.utils.extract_memories"></a>

#### `extract_memories`

```python
def extract_memories(result: Any) -> List[str]
```

Normalize Mem0 search/get responses into a list of memory strings.
Supports common shapes: &#123;"memories": [...]&#125;, &#123;"results": [...]&#125;, &#123;"data": [...]&#125;, list, or scalar.

<a id="spoon_ai.memory.utils.extract_first_memory_id"></a>

#### `extract_first_memory_id`

```python
def extract_first_memory_id(result: Any) -> Optional[str]
```

Pull the first memory id from Mem0 responses.
Supports common id fields: id, _id, memory_id, uuid.

