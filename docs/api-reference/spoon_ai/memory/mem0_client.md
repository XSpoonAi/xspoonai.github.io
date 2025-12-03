---
id: spoon_ai.memory.mem0_client
slug: /api-reference/spoon_ai/memory/mem0_client.md
title: spoon_ai.memory.mem0_client
---

# Table of Contents

* [spoon\_ai.memory.mem0\_client](#spoon_ai.memory.mem0_client)
  * [SpoonMem0](#spoon_ai.memory.mem0_client.SpoonMem0)
    * [add\_text](#spoon_ai.memory.mem0_client.SpoonMem0.add_text)
    * [get\_all\_memory](#spoon_ai.memory.mem0_client.SpoonMem0.get_all_memory)

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

