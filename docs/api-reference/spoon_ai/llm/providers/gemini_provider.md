---
id: spoon_ai.llm.providers.gemini_provider
slug: /api-reference/spoon_ai/llm/providers/gemini_provider.md
title: spoon_ai.llm.providers.gemini_provider
---

# Table of Contents

* [spoon\_ai.llm.providers.gemini\_provider](#spoon_ai.llm.providers.gemini_provider)
  * [GeminiProvider](#spoon_ai.llm.providers.gemini_provider.GeminiProvider)
    * [initialize](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.initialize)
    * [chat](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat)
    * [chat\_stream](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_stream)
    * [completion](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.get_metadata)
    * [health\_check](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.health_check)
    * [cleanup](#spoon_ai.llm.providers.gemini_provider.GeminiProvider.cleanup)

<a id="spoon_ai.llm.providers.gemini_provider"></a>

# Module `spoon_ai.llm.providers.gemini_provider`

Gemini Provider implementation for the unified LLM interface.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider"></a>

## `GeminiProvider` Objects

```python
@register_provider("gemini", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.STREAMING,
    ProviderCapability.TOOLS,
    ProviderCapability.IMAGE_GENERATION,
    ProviderCapability.VISION
])
class GeminiProvider(LLMProviderInterface)
```

Gemini provider implementation.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.initialize"></a>

#### `initialize`

```python
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the Gemini provider with configuration.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to Gemini.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request to Gemini with callback support.

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to Gemini.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tools to Gemini using native function calling.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get Gemini provider metadata.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.health_check"></a>

#### `health_check`

```python
async def health_check() -> bool
```

Check if Gemini provider is healthy.

<a id="spoon_ai.llm.providers.gemini_provider.GeminiProvider.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Cleanup Gemini provider resources.

