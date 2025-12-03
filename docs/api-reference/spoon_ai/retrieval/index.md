---
id: spoon_ai.retrieval
slug: /api-reference/spoon_ai/retrieval/index.md/index
title: spoon_ai.retrieval
---

# Table of Contents

* [spoon\_ai.retrieval](#spoon_ai.retrieval)
* [spoon\_ai.retrieval.base](#spoon_ai.retrieval.base)
  * [BaseRetrievalClient](#spoon_ai.retrieval.base.BaseRetrievalClient)
* [spoon\_ai.retrieval.chroma](#spoon_ai.retrieval.chroma)
* [spoon\_ai.retrieval.document\_loader](#spoon_ai.retrieval.document_loader)
  * [BasicTextSplitter](#spoon_ai.retrieval.document_loader.BasicTextSplitter)
    * [split\_text](#spoon_ai.retrieval.document_loader.BasicTextSplitter.split_text)
    * [split\_documents](#spoon_ai.retrieval.document_loader.BasicTextSplitter.split_documents)
  * [DocumentLoader](#spoon_ai.retrieval.document_loader.DocumentLoader)
    * [load\_directory](#spoon_ai.retrieval.document_loader.DocumentLoader.load_directory)
    * [load\_file](#spoon_ai.retrieval.document_loader.DocumentLoader.load_file)
* [spoon\_ai.retrieval.qdrant](#spoon_ai.retrieval.qdrant)

<a id="spoon_ai.retrieval"></a>

# Module `spoon_ai.retrieval`

<a id="spoon_ai.retrieval.base"></a>

# Module `spoon_ai.retrieval.base`

<a id="spoon_ai.retrieval.base.BaseRetrievalClient"></a>

## `BaseRetrievalClient` Objects

```python
class BaseRetrievalClient()
```

Abstract base class for retrieval clients.

<a id="spoon_ai.retrieval.chroma"></a>

# Module `spoon_ai.retrieval.chroma`

<a id="spoon_ai.retrieval.document_loader"></a>

# Module `spoon_ai.retrieval.document_loader`

<a id="spoon_ai.retrieval.document_loader.BasicTextSplitter"></a>

## `BasicTextSplitter` Objects

```python
class BasicTextSplitter()
```

Simple text splitter to replace langchain's RecursiveCharacterTextSplitter

<a id="spoon_ai.retrieval.document_loader.BasicTextSplitter.split_text"></a>

#### `split_text`

```python
def split_text(text: str) -> List[str]
```

Split text into chunks

<a id="spoon_ai.retrieval.document_loader.BasicTextSplitter.split_documents"></a>

#### `split_documents`

```python
def split_documents(documents: List[Document]) -> List[Document]
```

Split document collection into smaller document chunks

<a id="spoon_ai.retrieval.document_loader.DocumentLoader"></a>

## `DocumentLoader` Objects

```python
class DocumentLoader()
```

<a id="spoon_ai.retrieval.document_loader.DocumentLoader.load_directory"></a>

#### `load_directory`

```python
def load_directory(directory_path: str,
                   glob_pattern: Optional[str] = None) -> List[Document]
```

Load documents from a directory

<a id="spoon_ai.retrieval.document_loader.DocumentLoader.load_file"></a>

#### `load_file`

```python
def load_file(file_path: str) -> List[Document]
```

Load a single file and return the documents

<a id="spoon_ai.retrieval.qdrant"></a>

# Module `spoon_ai.retrieval.qdrant`

