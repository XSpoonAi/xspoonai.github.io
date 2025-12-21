---
id: spoon_ai.llm.providers.ollama_provider
slug: /api-reference/spoon_ai/llm/providers/ollama_provider
title: spoon_ai.llm.providers.ollama_provider
---

# Table of Contents

* [spoon\_ai.llm.providers.ollama\_provider](#spoon_ai.llm.providers.ollama_provider)
  * [OllamaProvider](#spoon_ai.llm.providers.ollama_provider.OllamaProvider)

<a id="spoon_ai.llm.providers.ollama_provider"></a>

# Module `spoon_ai.llm.providers.ollama_provider`

Ollama Provider implementation for the unified LLM interface.

Ollama runs locally and exposes an HTTP API (default: http://localhost:11434).
This provider supports chat, completion, and streaming.

**Notes**:

  - Ollama does not require an API key; the configuration layer may still provide
  a placeholder api_key value for consistency.
  - Tool calling is not implemented here.

<a id="spoon_ai.llm.providers.ollama_provider.OllamaProvider"></a>

## `OllamaProvider` Objects

```python
@register_provider(
    "ollama",
    [
        ProviderCapability.CHAT,
        ProviderCapability.COMPLETION,
        ProviderCapability.STREAMING,
    ],
)
class OllamaProvider(LLMProviderInterface)
```

Local Ollama provider via HTTP.

