---
id: spoon_ai.llm.factory
slug: /api-reference/spoon_ai/llm/factory
title: spoon_ai.llm.factory
---

# Table of Contents

* [spoon\_ai.llm.factory](#spoon_ai.llm.factory)
  * [LLMFactory](#spoon_ai.llm.factory.LLMFactory)
    * [register](#spoon_ai.llm.factory.LLMFactory.register)
    * [create](#spoon_ai.llm.factory.LLMFactory.create)

<a id="spoon_ai.llm.factory"></a>

# Module `spoon_ai.llm.factory`

<a id="spoon_ai.llm.factory.LLMFactory"></a>

## `LLMFactory` Objects

```python
class LLMFactory()
```

LLM factory class, used to create different LLM instances

<a id="spoon_ai.llm.factory.LLMFactory.register"></a>

#### `register`

```python
@classmethod
def register(cls, provider_name: str)
```

Register LLM provider

**Arguments**:

- `provider_name` - Provider name
  

**Returns**:

  Decorator function

<a id="spoon_ai.llm.factory.LLMFactory.create"></a>

#### `create`

```python
@classmethod
def create(cls,
           provider: Optional[str] = None,
           config_path: str = "config/config.toml",
           config_name: str = "llm") -> LLMBase
```

Create LLM instance

**Arguments**:

- `provider` - Provider name, if None, read from configuration file
- `config_path` - Configuration file path
- `config_name` - Configuration name
  

**Returns**:

- `LLMBase` - LLM instance
  

**Raises**:

- `ValueError` - If provider does not exist

