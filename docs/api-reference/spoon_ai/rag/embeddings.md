---
id: spoon_ai.rag.embeddings
slug: /api-reference/spoon_ai/rag/embeddings
title: spoon_ai.rag.embeddings
---

# Table of Contents

* [spoon\_ai.rag.embeddings](#spoon_ai.rag.embeddings)
  * [HashEmbeddingClient](#spoon_ai.rag.embeddings.HashEmbeddingClient)
  * [get\_embedding\_client](#spoon_ai.rag.embeddings.get_embedding_client)

<a id="spoon_ai.rag.embeddings"></a>

# Module `spoon_ai.rag.embeddings`

<a id="spoon_ai.rag.embeddings.HashEmbeddingClient"></a>

## `HashEmbeddingClient` Objects

```python
class HashEmbeddingClient(EmbeddingClient)
```

Deterministic offline embedding via hashing.

Produces fixed-length vectors in [0,1] normalized range. Not semantically meaningful
but stable for tests and offline demos.

<a id="spoon_ai.rag.embeddings.get_embedding_client"></a>

#### `get_embedding_client`

```python
def get_embedding_client(
        provider: Optional[str],
        *,
        openai_api_key: Optional[str] = None,
        openai_model: str = "text-embedding-3-small") -> EmbeddingClient
```

Create an embedding client.

Provider selection rules:
- provider is None/"auto": pick the first configured embeddings provider using a dedicated
  priority order (OpenAI &gt; OpenRouter &gt; Gemini).
- provider is "openai" / "openrouter" / "gemini" / "ollama": force that provider (uses core env config when applicable).
- provider is "openai_compatible": use OpenAI-compatible embeddings via RAG_EMBEDDINGS_* env vars.
- otherwise: deterministic hash embeddings (offline).

