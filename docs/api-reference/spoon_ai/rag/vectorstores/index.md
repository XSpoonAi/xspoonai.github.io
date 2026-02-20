---
id: spoon_ai.rag.vectorstores
slug: /api-reference/spoon_ai/rag/vectorstores//index
title: spoon_ai.rag.vectorstores
---

# Table of Contents

* [spoon\_ai.rag.vectorstores](#spoon_ai.rag.vectorstores)
* [spoon\_ai.rag.vectorstores.faiss\_store](#spoon_ai.rag.vectorstores.faiss_store)
  * [FaissVectorStore](#spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore)
* [spoon\_ai.rag.vectorstores.chroma\_store](#spoon_ai.rag.vectorstores.chroma_store)
* [spoon\_ai.rag.vectorstores.pinecone\_store](#spoon_ai.rag.vectorstores.pinecone_store)
* [spoon\_ai.rag.vectorstores.qdrant\_store](#spoon_ai.rag.vectorstores.qdrant_store)
* [spoon\_ai.rag.vectorstores.registry](#spoon_ai.rag.vectorstores.registry)
  * [get\_vector\_store](#spoon_ai.rag.vectorstores.registry.get_vector_store)
* [spoon\_ai.rag.vectorstores.base](#spoon_ai.rag.vectorstores.base)
  * [VectorStore](#spoon_ai.rag.vectorstores.base.VectorStore)
    * [query](#spoon_ai.rag.vectorstores.base.VectorStore.query)

<a id="spoon_ai.rag.vectorstores"></a>

# Module `spoon_ai.rag.vectorstores`

<a id="spoon_ai.rag.vectorstores.faiss_store"></a>

# Module `spoon_ai.rag.vectorstores.faiss_store`

<a id="spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore"></a>

## `FaissVectorStore` Objects

```python
class FaissVectorStore(VectorStore)
```

FAISS-backed local vector store (cosine via inner product + L2 norm).

<a id="spoon_ai.rag.vectorstores.chroma_store"></a>

# Module `spoon_ai.rag.vectorstores.chroma_store`

<a id="spoon_ai.rag.vectorstores.pinecone_store"></a>

# Module `spoon_ai.rag.vectorstores.pinecone_store`

<a id="spoon_ai.rag.vectorstores.qdrant_store"></a>

# Module `spoon_ai.rag.vectorstores.qdrant_store`

<a id="spoon_ai.rag.vectorstores.registry"></a>

# Module `spoon_ai.rag.vectorstores.registry`

<a id="spoon_ai.rag.vectorstores.registry.get_vector_store"></a>

#### `get_vector_store`

```python
def get_vector_store(backend: Optional[str] = None) -> VectorStore
```

Return a vector store by backend name.

Backends:
- faiss: local/offline (mapped to in-memory cosine store)
- pinecone: cloud Pinecone (requires PINECONE_API_KEY)
- qdrant: local/cloud Qdrant (requires qdrant-client, default http://localhost:6333)
- chroma: local Chroma (requires chromadb)

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

