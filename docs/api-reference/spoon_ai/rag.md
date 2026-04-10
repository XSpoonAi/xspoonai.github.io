---
id: spoon_ai.rag
slug: /api-reference/spoon_ai/rag
title: spoon_ai.rag
---

# Table of Contents

* [spoon\_ai.rag](#spoon_ai.rag)
* [spoon\_ai.rag.config](#spoon_ai.rag.config)
  * [ensure\_dotenv](#spoon_ai.rag.config.ensure_dotenv)
  * [RagConfig](#spoon_ai.rag.config.RagConfig)
    * [backend](#spoon_ai.rag.config.RagConfig.backend)
    * [embeddings\_model](#spoon_ai.rag.config.RagConfig.embeddings_model)
    * [retrieval\_overfetch\_factor](#spoon_ai.rag.config.RagConfig.retrieval_overfetch_factor)
    * [rrf\_k](#spoon_ai.rag.config.RagConfig.rrf_k)
    * [openai\_embeddings\_model](#spoon_ai.rag.config.RagConfig.openai_embeddings_model)
* [spoon\_ai.rag.parser.unstructured\_parser](#spoon_ai.rag.parser.unstructured_parser)
  * [ParsedDocument](#spoon_ai.rag.parser.unstructured_parser.ParsedDocument)
    * [filename](#spoon_ai.rag.parser.unstructured_parser.ParsedDocument.filename)
    * [filepath](#spoon_ai.rag.parser.unstructured_parser.ParsedDocument.filepath)
    * [elements](#spoon_ai.rag.parser.unstructured_parser.ParsedDocument.elements)
  * [UnstructuredParser](#spoon_ai.rag.parser.unstructured_parser.UnstructuredParser)
    * [\_\_init\_\_](#spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.__init__)
    * [parse\_url](#spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse_url)
    * [parse\_file](#spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse_file)
    * [parse\_directory](#spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse_directory)
    * [parse](#spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse)
* [spoon\_ai.rag.parser](#spoon_ai.rag.parser)
* [spoon\_ai.rag.chunk](#spoon_ai.rag.chunk)
  * [recursive\_chunk](#spoon_ai.rag.chunk.recursive_chunk)
  * [simple\_chunk](#spoon_ai.rag.chunk.simple_chunk)
  * [paragraph\_chunk](#spoon_ai.rag.chunk.paragraph_chunk)
  * [chunk\_text](#spoon_ai.rag.chunk.chunk_text)
* [spoon\_ai.rag.index](#spoon_ai.rag.index)
* [spoon\_ai.rag.qa](#spoon_ai.rag.qa)
* [spoon\_ai.rag.embeddings](#spoon_ai.rag.embeddings)
  * [HashEmbeddingClient](#spoon_ai.rag.embeddings.HashEmbeddingClient)
  * [get\_embedding\_client](#spoon_ai.rag.embeddings.get_embedding_client)
* [spoon\_ai.rag.retriever](#spoon_ai.rag.retriever)
* [spoon\_ai.rag.vectorstores.base](#spoon_ai.rag.vectorstores.base)
  * [VectorStore](#spoon_ai.rag.vectorstores.base.VectorStore)
    * [query](#spoon_ai.rag.vectorstores.base.VectorStore.query)
* [spoon\_ai.rag.vectorstores.chroma\_store](#spoon_ai.rag.vectorstores.chroma_store)
* [spoon\_ai.rag.vectorstores.qdrant\_store](#spoon_ai.rag.vectorstores.qdrant_store)
* [spoon\_ai.rag.vectorstores.pinecone\_store](#spoon_ai.rag.vectorstores.pinecone_store)
* [spoon\_ai.rag.vectorstores.registry](#spoon_ai.rag.vectorstores.registry)
  * [get\_vector\_store](#spoon_ai.rag.vectorstores.registry.get_vector_store)
* [spoon\_ai.rag.vectorstores.faiss\_store](#spoon_ai.rag.vectorstores.faiss_store)
  * [FaissVectorStore](#spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore)
* [spoon\_ai.rag.vectorstores](#spoon_ai.rag.vectorstores)

<a id="spoon_ai.rag"></a>

# Module `spoon_ai.rag`

<a id="spoon_ai.rag.config"></a>

# Module `spoon_ai.rag.config`

<a id="spoon_ai.rag.config.ensure_dotenv"></a>

#### `ensure_dotenv`

```python
def ensure_dotenv() -> None
```

Load .env file once if python-dotenv is available.

Does NOT override existing environment variables (e.g. those injected by
CI/CD).  Call this explicitly before reading env-based config rather than
relying on import-time side effects.

<a id="spoon_ai.rag.config.RagConfig"></a>

## `RagConfig` Objects

```python
@dataclass
class RagConfig()
```

<a id="spoon_ai.rag.config.RagConfig.backend"></a>

#### `backend`

faiss|pinecone|qdrant|chroma

<a id="spoon_ai.rag.config.RagConfig.embeddings_model"></a>

#### `embeddings_model`

Generic model name for all embedding providers

<a id="spoon_ai.rag.config.RagConfig.retrieval_overfetch_factor"></a>

#### `retrieval_overfetch_factor`

overfetch multiplier: max(top_k * factor, 20)

<a id="spoon_ai.rag.config.RagConfig.rrf_k"></a>

#### `rrf_k`

RRF smoothing constant

<a id="spoon_ai.rag.config.RagConfig.openai_embeddings_model"></a>

#### `openai_embeddings_model`

```python
@property
def openai_embeddings_model() -> str
```

Deprecated: use 'embeddings_model' instead. Kept for backward compatibility.

<a id="spoon_ai.rag.parser.unstructured_parser"></a>

# Module `spoon_ai.rag.parser.unstructured_parser`

Unstructured-based document parser for RAG system.

Supports loading documents from:
- URLs (http/https)
- Directory paths (recursive)
- Single file paths

<a id="spoon_ai.rag.parser.unstructured_parser.ParsedDocument"></a>

## `ParsedDocument` Objects

```python
@dataclass
class ParsedDocument()
```

Represents a parsed document with its elements.

<a id="spoon_ai.rag.parser.unstructured_parser.ParsedDocument.filename"></a>

#### `filename`

Original filename (e.g., "README.md")

<a id="spoon_ai.rag.parser.unstructured_parser.ParsedDocument.filepath"></a>

#### `filepath`

Full file path or URL

<a id="spoon_ai.rag.parser.unstructured_parser.ParsedDocument.elements"></a>

#### `elements`

unstructured parsed elements

<a id="spoon_ai.rag.parser.unstructured_parser.UnstructuredParser"></a>

## `UnstructuredParser` Objects

```python
class UnstructuredParser()
```

Parser using unstructured library for document parsing.

<a id="spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.__init__"></a>

#### `__init__`

```python
def __init__(ignore_dirs: Optional[set] = None)
```

Initialize the parser.

**Arguments**:

- `ignore_dirs` - Set of directory names to ignore when traversing

<a id="spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse_url"></a>

#### `parse_url`

```python
def parse_url(url: str) -> Optional[ParsedDocument]
```

Parse a document from URL.

Supports:
- GitHub URLs (auto-converts to raw)
- Plain text/code files (direct download)
- HTML pages (uses Jina Reader or unstructured)

**Arguments**:

- `url` - URL to fetch and parse
  

**Returns**:

  ParsedDocument or None if parsing fails

<a id="spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse_file"></a>

#### `parse_file`

```python
def parse_file(path: Path) -> Optional[ParsedDocument]
```

Parse a single file using unstructured partition.

**Arguments**:

- `path` - Path to the file
  

**Returns**:

  ParsedDocument or None if parsing fails

<a id="spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse_directory"></a>

#### `parse_directory`

```python
def parse_directory(dir_path: Path) -> List[ParsedDocument]
```

Parse all files in a directory recursively.

Skips directories in self.ignore_dirs.

**Arguments**:

- `dir_path` - Directory path to traverse
  

**Returns**:

  List of ParsedDocument

<a id="spoon_ai.rag.parser.unstructured_parser.UnstructuredParser.parse"></a>

#### `parse`

```python
def parse(paths_or_urls: Iterable[str]) -> List[ParsedDocument]
```

Parse documents from multiple sources (URLs, directories, files).

**Arguments**:

- `paths_or_urls` - Iterable of URLs, directory paths, or file paths
  

**Returns**:

  List of ParsedDocument

<a id="spoon_ai.rag.parser"></a>

# Module `spoon_ai.rag.parser`

<a id="spoon_ai.rag.chunk"></a>

# Module `spoon_ai.rag.chunk`

Recursive chunking module for RAG system.

Provides element-aware chunking that:
- Keeps atomic elements (tables, code, formulas) intact
- Starts new chunks at title/header elements
- Splits long text elements by paragraphs
- Adds overlap between chunks

<a id="spoon_ai.rag.chunk.recursive_chunk"></a>

#### `recursive_chunk`

```python
def recursive_chunk(elements: List,
                    chunk_size: int = 1200,
                    overlap: int = 120) -> List[str]
```

Recursively chunk elements based on element types with overlap.

**Arguments**:

- `elements` - List of unstructured elements
- `chunk_size` - Maximum characters per chunk
- `overlap` - Overlap characters between chunks
  

**Returns**:

  List of chunk texts (strings)

<a id="spoon_ai.rag.chunk.simple_chunk"></a>

#### `simple_chunk`

```python
def simple_chunk(text: str,
                 chunk_size: int = 1200,
                 overlap: int = 120) -> List[str]
```

Simple sliding window chunking with overlap.

**Arguments**:

- `text` - Text to chunk
- `chunk_size` - Maximum characters per chunk
- `overlap` - Overlap characters between chunks
  

**Returns**:

  List of chunk texts

<a id="spoon_ai.rag.chunk.paragraph_chunk"></a>

#### `paragraph_chunk`

```python
def paragraph_chunk(text: str,
                    chunk_size: int = 1200,
                    overlap: int = 120) -> List[str]
```

Paragraph-based chunking with overlap.

**Arguments**:

- `text` - Text to chunk
- `chunk_size` - Maximum characters per chunk
- `overlap` - Overlap characters between chunks
  

**Returns**:

  List of chunk texts

<a id="spoon_ai.rag.chunk.chunk_text"></a>

#### `chunk_text`

```python
def chunk_text(text: str,
               chunk_size: int = 1200,
               overlap: int = 120,
               chunk_method: str = 'recursive',
               elements: Optional[List] = None) -> List[str]
```

Chunk text using specified method.

**Arguments**:

- `text` - Text to chunk
- `chunk_size` - Maximum characters per chunk
- `overlap` - Overlap characters between chunks
- `chunk_method` - Chunking method - 'simple', 'paragraph', or 'recursive'
- `elements` - Optional unstructured elements (required for 'recursive')
  

**Returns**:

  List of chunk texts

<a id="spoon_ai.rag.index"></a>

# Module `spoon_ai.rag.index`

<a id="spoon_ai.rag.qa"></a>

# Module `spoon_ai.rag.qa`

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

<a id="spoon_ai.rag.retriever"></a>

# Module `spoon_ai.rag.retriever`

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

<a id="spoon_ai.rag.vectorstores.chroma_store"></a>

# Module `spoon_ai.rag.vectorstores.chroma_store`

<a id="spoon_ai.rag.vectorstores.qdrant_store"></a>

# Module `spoon_ai.rag.vectorstores.qdrant_store`

<a id="spoon_ai.rag.vectorstores.pinecone_store"></a>

# Module `spoon_ai.rag.vectorstores.pinecone_store`

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

<a id="spoon_ai.rag.vectorstores.faiss_store"></a>

# Module `spoon_ai.rag.vectorstores.faiss_store`

<a id="spoon_ai.rag.vectorstores.faiss_store.FaissVectorStore"></a>

## `FaissVectorStore` Objects

```python
class FaissVectorStore(VectorStore)
```

FAISS-backed local vector store (cosine via inner product + L2 norm).

<a id="spoon_ai.rag.vectorstores"></a>

# Module `spoon_ai.rag.vectorstores`

