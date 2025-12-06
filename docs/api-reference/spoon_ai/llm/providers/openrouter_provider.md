---
id: spoon_ai.llm.providers.openrouter_provider
slug: /api-reference/spoon_ai/llm/providers/openrouter_provider
title: spoon_ai.llm.providers.openrouter_provider
---

# Table of Contents

* [spoon\_ai.llm.providers.openrouter\_provider](#spoon_ai.llm.providers.openrouter_provider)
  * [OpenRouterProvider](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider)
    * [get\_additional\_headers](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_additional_headers)
    * [get\_metadata](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_metadata)

<a id="spoon_ai.llm.providers.openrouter_provider"></a>

# Module `spoon_ai.llm.providers.openrouter_provider`

OpenRouter Provider implementation for the unified LLM interface.
OpenRouter provides access to multiple LLM models through a unified API compatible with OpenAI.

<a id="spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider"></a>

## `OpenRouterProvider` Objects

```python
@register_provider("openrouter", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class OpenRouterProvider(OpenAICompatibleProvider)
```

OpenRouter provider implementation using OpenAI-compatible API.

<a id="spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_additional_headers"></a>

#### `get_additional_headers`

```python
def get_additional_headers(config: Dict[str, Any]) -> Dict[str, str]
```

Get OpenRouter-specific headers.

<a id="spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get OpenRouter provider metadata.

