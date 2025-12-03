---
id: spoon_ai.llm.response_normalizer
slug: /api-reference/spoon_ai/llm/response_normalizer.md
title: spoon_ai.llm.response_normalizer
---

# Table of Contents

* [spoon\_ai.llm.response\_normalizer](#spoon_ai.llm.response_normalizer)
  * [ResponseNormalizer](#spoon_ai.llm.response_normalizer.ResponseNormalizer)
    * [normalize\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.normalize_response)
    * [validate\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.validate_response)
    * [add\_provider\_mapping](#spoon_ai.llm.response_normalizer.ResponseNormalizer.add_provider_mapping)
    * [get\_supported\_providers](#spoon_ai.llm.response_normalizer.ResponseNormalizer.get_supported_providers)
  * [get\_response\_normalizer](#spoon_ai.llm.response_normalizer.get_response_normalizer)

<a id="spoon_ai.llm.response_normalizer"></a>

# Module `spoon_ai.llm.response_normalizer`

Response normalizer for ensuring consistent response formats across providers.

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer"></a>

## `ResponseNormalizer` Objects

```python
class ResponseNormalizer()
```

Normalizes responses from different providers to ensure consistency.

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.normalize_response"></a>

#### `normalize_response`

```python
def normalize_response(response: LLMResponse) -> LLMResponse
```

Normalize a response from any provider.

**Arguments**:

- `response` - Raw LLM response
  

**Returns**:

- `LLMResponse` - Normalized response
  

**Raises**:

- `ValidationError` - If response cannot be normalized

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.validate_response"></a>

#### `validate_response`

```python
def validate_response(response: LLMResponse) -> bool
```

Validate that a response meets minimum requirements.

**Arguments**:

- `response` - Response to validate
  

**Returns**:

- `bool` - True if response is valid
  

**Raises**:

- `ValidationError` - If response is invalid

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.add_provider_mapping"></a>

#### `add_provider_mapping`

```python
def add_provider_mapping(provider_name: str, normalizer_func) -> None
```

Add a custom normalizer for a new provider.

**Arguments**:

- `provider_name` - Name of the provider
- `normalizer_func` - Function that takes and returns LLMResponse

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.get_supported_providers"></a>

#### `get_supported_providers`

```python
def get_supported_providers() -> List[str]
```

Get list of providers with custom normalizers.

**Returns**:

- `List[str]` - List of provider names

<a id="spoon_ai.llm.response_normalizer.get_response_normalizer"></a>

#### `get_response_normalizer`

```python
def get_response_normalizer() -> ResponseNormalizer
```

Get global response normalizer instance.

**Returns**:

- `ResponseNormalizer` - Global normalizer instance

