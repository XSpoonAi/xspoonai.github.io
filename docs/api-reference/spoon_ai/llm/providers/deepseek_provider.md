---
id: spoon_ai.llm.providers.deepseek_provider
slug: /api-reference/spoon_ai/llm/providers/deepseek_provider.md
title: spoon_ai.llm.providers.deepseek_provider
---

# Table of Contents

* [spoon\_ai.llm.providers.deepseek\_provider](#spoon_ai.llm.providers.deepseek_provider)
  * [DeepSeekProvider](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider)
    * [get\_metadata](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider.get_metadata)

<a id="spoon_ai.llm.providers.deepseek_provider"></a>

# Module `spoon_ai.llm.providers.deepseek_provider`

DeepSeek Provider implementation for the unified LLM interface.
DeepSeek provides access to their models through an OpenAI-compatible API.

<a id="spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider"></a>

## `DeepSeekProvider` Objects

```python
@register_provider("deepseek", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class DeepSeekProvider(OpenAICompatibleProvider)
```

DeepSeek provider implementation using OpenAI-compatible API.

<a id="spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get DeepSeek provider metadata.

