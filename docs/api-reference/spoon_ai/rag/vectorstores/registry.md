---
id: spoon_ai.rag.vectorstores.registry
slug: /api-reference/spoon_ai/rag/vectorstores/registry
title: spoon_ai.rag.vectorstores.registry
---

# Table of Contents

* [spoon\_ai.rag.vectorstores.registry](#spoon_ai.rag.vectorstores.registry)
  * [get\_vector\_store](#spoon_ai.rag.vectorstores.registry.get_vector_store)

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

