---
id: spoon_ai.llm.providers.openai_provider
slug: /api-reference/spoon_ai/llm/providers/openai_provider.md
title: spoon_ai.llm.providers.openai_provider
---

# Table of Contents

* [spoon\_ai.llm.providers.openai\_provider](#spoon_ai.llm.providers.openai_provider)
  * [OpenAIProvider](#spoon_ai.llm.providers.openai_provider.OpenAIProvider)
    * [get\_metadata](#spoon_ai.llm.providers.openai_provider.OpenAIProvider.get_metadata)

<a id="spoon_ai.llm.providers.openai_provider"></a>

# Module `spoon_ai.llm.providers.openai_provider`

OpenAI Provider implementation for the unified LLM interface.

<a id="spoon_ai.llm.providers.openai_provider.OpenAIProvider"></a>

## `OpenAIProvider` Objects

```python
@register_provider("openai", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class OpenAIProvider(OpenAICompatibleProvider)
```

OpenAI provider implementation.

<a id="spoon_ai.llm.providers.openai_provider.OpenAIProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get OpenAI provider metadata.

