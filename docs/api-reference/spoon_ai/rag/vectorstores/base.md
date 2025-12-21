---
id: spoon_ai.rag.vectorstores.base
slug: /api-reference/spoon_ai/rag/vectorstores/base
title: spoon_ai.rag.vectorstores.base
---

# Table of Contents

* [spoon\_ai.rag.vectorstores.base](#spoon_ai.rag.vectorstores.base)
  * [VectorStore](#spoon_ai.rag.vectorstores.base.VectorStore)
    * [query](#spoon_ai.rag.vectorstores.base.VectorStore.query)

<a id="spoon_ai.rag.vectorstores.base"></a>

# Module `spoon_ai.rag.vectorstores.base`

<a id="spoon_ai.rag.vectorstores.base.VectorStore"></a>

## `VectorStore` Objects

```python
class VectorStore(ABC)
```

<a id="spoon_ai.rag.vectorstores.base.VectorStore.query"></a>

#### `query`

```python
@abstractmethod
def query(
        *,
        collection: str,
        query_embeddings: List[List[float]],
        top_k: int = 5,
        filter: Optional[Dict] = None) -> List[List[Tuple[str, float, Dict]]]
```

Return per-query list of (id, score, metadata). Higher score is better.

