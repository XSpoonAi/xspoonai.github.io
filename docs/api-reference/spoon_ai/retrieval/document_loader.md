---
id: spoon_ai.retrieval.document_loader
slug: /api-reference/spoon_ai/retrieval/document_loader
title: spoon_ai.retrieval.document_loader
---

# Table of Contents

* [spoon\_ai.retrieval.document\_loader](#spoon_ai.retrieval.document_loader)
  * [BasicTextSplitter](#spoon_ai.retrieval.document_loader.BasicTextSplitter)
    * [split\_text](#spoon_ai.retrieval.document_loader.BasicTextSplitter.split_text)
    * [split\_documents](#spoon_ai.retrieval.document_loader.BasicTextSplitter.split_documents)
  * [DocumentLoader](#spoon_ai.retrieval.document_loader.DocumentLoader)
    * [load\_directory](#spoon_ai.retrieval.document_loader.DocumentLoader.load_directory)
    * [load\_file](#spoon_ai.retrieval.document_loader.DocumentLoader.load_file)

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

