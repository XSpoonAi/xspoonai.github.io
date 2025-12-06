---
id: spoon_ai.agents.rag
slug: /api-reference/spoon_ai/agents/rag
title: spoon_ai.agents.rag
---

# Table of Contents

* [spoon\_ai.agents.rag](#spoon_ai.agents.rag)
  * [RetrievalMixin](#spoon_ai.agents.rag.RetrievalMixin)
    * [initialize\_retrieval\_client](#spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client)
    * [add\_documents](#spoon_ai.agents.rag.RetrievalMixin.add_documents)
    * [retrieve\_relevant\_documents](#spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents)
    * [get\_context\_from\_query](#spoon_ai.agents.rag.RetrievalMixin.get_context_from_query)

<a id="spoon_ai.agents.rag"></a>

# Module `spoon_ai.agents.rag`

<a id="spoon_ai.agents.rag.RetrievalMixin"></a>

## `RetrievalMixin` Objects

```python
class RetrievalMixin()
```

Mixin class for retrieval-augmented generation functionality

<a id="spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client"></a>

#### `initialize_retrieval_client`

```python
def initialize_retrieval_client(backend: str = 'chroma', **kwargs)
```

Initialize the retrieval client if it doesn't exist

<a id="spoon_ai.agents.rag.RetrievalMixin.add_documents"></a>

#### `add_documents`

```python
def add_documents(documents, backend: str = 'chroma', **kwargs)
```

Add documents to the retrieval system

<a id="spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents"></a>

#### `retrieve_relevant_documents`

```python
def retrieve_relevant_documents(query, k=5, backend: str = 'chroma', **kwargs)
```

Retrieve relevant documents for a query

<a id="spoon_ai.agents.rag.RetrievalMixin.get_context_from_query"></a>

#### `get_context_from_query`

```python
def get_context_from_query(query)
```

Get context string from relevant documents for a query

