# RAG (Retrieval-Augmented Generation)

SpoonOS ships a minimal, switchable RAG stack under `spoon_ai.rag`:

- Index local files/dirs/URLs
- Retrieve top-k chunks
- Answer questions with `[n]` citations

## Installation

The RAG system supports multiple vector-store backends.

### Basic (FAISS / Offline)

```bash
pip install faiss-cpu  # Optional: real FAISS backend
# or no extra install for offline/in-memory testing
```

### Advanced Backends

```bash
pip install chromadb        # Chroma
pip install pinecone-client  # Pinecone
pip install qdrant-client    # Qdrant
```

## Basic Usage

### 1) Initialize components

```python
import os
from spoon_ai.rag import (
    get_default_config,
    get_vector_store,
    get_embedding_client,
    RagIndex,
    RagRetriever,
    RagQA,
)
from spoon_ai.chat import ChatBot

# Example: enable embeddings
# os.environ["OPENAI_API_KEY"] = "sk-..."
# or
# os.environ["OPENROUTER_API_KEY"] = "sk-or-..."

cfg = get_default_config()
store = get_vector_store(cfg.backend)
embed = get_embedding_client(
    cfg.embeddings_provider,
    openai_model=cfg.openai_embeddings_model,
)
```

### 2) Ingest

```python
index = RagIndex(config=cfg, store=store, embeddings=embed)
count = index.ingest(["./my_documents", "https://example.com/article"])
print(f"Ingested {count} chunks.")
```

### 3) Retrieve

```python
retriever = RagRetriever(config=cfg, store=store, embeddings=embed)
chunks = retriever.retrieve("How do I use SpoonAI?", top_k=3)
for c in chunks:
    print(f"[{c.score:.2f}] {c.text[:100]}... (Source: {c.metadata.get('source')})")
```

### 4) QA with citations

```python
llm = ChatBot()  # uses the configured core LLM provider
qa = RagQA(config=cfg, llm=llm)
result = await qa.answer("How do I use SpoonAI?", chunks)

print("Answer:", result.answer)
for cite in result.citations:
    print(f"- {cite.marker} {cite.source}")
```

## Configuration

### Core env vars

| Variable | Description | Default |
|----------|-------------|---------|
| `RAG_BACKEND` | Vector store backend (`faiss`, `chroma`, `pinecone`, `qdrant`) | `faiss` |
| `RAG_COLLECTION` | Collection name | `default` |
| `RAG_DIR` | Persistence directory (used by some backends) | `.rag_store` |
| `TOP_K` | Default number of chunks to retrieve | `5` |
| `CHUNK_SIZE` | Chunk size | `800` |
| `CHUNK_OVERLAP` | Chunk overlap | `120` |

### Embeddings selection

| Variable | Description | Default |
|----------|-------------|---------|
| `RAG_EMBEDDINGS_PROVIDER` | `auto`, `openai`, `openrouter`, `gemini`, `openai_compatible`, `ollama`, `hash` (`auto` uses OpenAI > OpenRouter > Gemini > openai_compatible) | `auto` |
| `RAG_EMBEDDINGS_MODEL` | Embedding model id (provider-specific) | `text-embedding-3-small` |
| `RAG_EMBEDDINGS_API_KEY` | API key for `openai_compatible` embeddings | None |
| `RAG_EMBEDDINGS_BASE_URL` | Base URL for `openai_compatible` embeddings (OpenAI-compatible `/embeddings`) | None |

### Provider keys (when used)

- `OPENAI_API_KEY` (OpenAI embeddings)
- `OPENROUTER_API_KEY` (OpenRouter embeddings)
- `GEMINI_API_KEY` (Gemini embeddings)
- `OLLAMA_BASE_URL` (Ollama embeddings, default: `http://localhost:11434`)

## Backends & Smoke Tests

### Vector stores (`RAG_BACKEND`)

- `faiss` (default): local/offline friendly. Falls back to an in-memory cosine store if FAISS is not installed.
- `pinecone`: cloud vector DB (requires `PINECONE_API_KEY`, optional `RAG_PINECONE_INDEX`).
- `qdrant`: local/cloud (requires `qdrant-client`; uses `QDRANT_URL` / `QDRANT_PATH`).
- `chroma`: local (requires `chromadb`; persists under `${RAG_DIR:-.rag_store}/chroma`).

### Smoke tests

```bash
# Offline (no LLM calls)
RAG_BACKEND=faiss RAG_FAKE_QA=1 python examples/smoke/rag_faiss_smoke.py

# Pinecone
export PINECONE_API_KEY=...
RAG_BACKEND=pinecone RAG_FAKE_QA=1 python examples/smoke/rag_pinecone_smoke.py

# Qdrant
pip install qdrant-client
export QDRANT_URL=http://localhost:6333
RAG_BACKEND=qdrant RAG_FAKE_QA=1 python examples/smoke/rag_qdrant_smoke.py

# Chroma
pip install chromadb
RAG_BACKEND=chroma RAG_FAKE_QA=1 python examples/smoke/rag_chroma_smoke.py
```

## Runnable Examples

```bash
python examples/rag_react_agent_demo.py
python examples/rag_graph_agent_demo.py
```




















