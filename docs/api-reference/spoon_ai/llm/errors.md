---
id: spoon_ai.llm.errors
slug: /api-reference/spoon_ai/llm/errors.md
title: spoon_ai.llm.errors
---

# Table of Contents

* [spoon\_ai.llm.errors](#spoon_ai.llm.errors)
  * [LLMError](#spoon_ai.llm.errors.LLMError)
  * [ProviderError](#spoon_ai.llm.errors.ProviderError)
  * [ConfigurationError](#spoon_ai.llm.errors.ConfigurationError)
  * [RateLimitError](#spoon_ai.llm.errors.RateLimitError)
  * [AuthenticationError](#spoon_ai.llm.errors.AuthenticationError)
  * [ModelNotFoundError](#spoon_ai.llm.errors.ModelNotFoundError)
  * [TokenLimitError](#spoon_ai.llm.errors.TokenLimitError)
  * [NetworkError](#spoon_ai.llm.errors.NetworkError)
  * [ProviderUnavailableError](#spoon_ai.llm.errors.ProviderUnavailableError)
  * [ValidationError](#spoon_ai.llm.errors.ValidationError)

<a id="spoon_ai.llm.errors"></a>

# Module `spoon_ai.llm.errors`

Standardized error hierarchy for LLM operations.

<a id="spoon_ai.llm.errors.LLMError"></a>

## `LLMError` Objects

```python
class LLMError(Exception)
```

Base exception for all LLM-related errors.

<a id="spoon_ai.llm.errors.ProviderError"></a>

## `ProviderError` Objects

```python
class ProviderError(LLMError)
```

Provider-specific error with detailed context.

<a id="spoon_ai.llm.errors.ConfigurationError"></a>

## `ConfigurationError` Objects

```python
class ConfigurationError(LLMError)
```

Configuration validation or loading error.

<a id="spoon_ai.llm.errors.RateLimitError"></a>

## `RateLimitError` Objects

```python
class RateLimitError(ProviderError)
```

Rate limit exceeded error.

<a id="spoon_ai.llm.errors.AuthenticationError"></a>

## `AuthenticationError` Objects

```python
class AuthenticationError(ProviderError)
```

Authentication failed error.

<a id="spoon_ai.llm.errors.ModelNotFoundError"></a>

## `ModelNotFoundError` Objects

```python
class ModelNotFoundError(ProviderError)
```

Model not found or not available error.

<a id="spoon_ai.llm.errors.TokenLimitError"></a>

## `TokenLimitError` Objects

```python
class TokenLimitError(ProviderError)
```

Token limit exceeded error.

<a id="spoon_ai.llm.errors.NetworkError"></a>

## `NetworkError` Objects

```python
class NetworkError(ProviderError)
```

Network connectivity or timeout error.

<a id="spoon_ai.llm.errors.ProviderUnavailableError"></a>

## `ProviderUnavailableError` Objects

```python
class ProviderUnavailableError(ProviderError)
```

Provider service unavailable error.

<a id="spoon_ai.llm.errors.ValidationError"></a>

## `ValidationError` Objects

```python
class ValidationError(LLMError)
```

Input validation error.

