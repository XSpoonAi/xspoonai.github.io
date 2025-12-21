---
id: spoon_ai.llm.providers.anthropic_provider
slug: /api-reference/spoon_ai/llm/providers/anthropic_provider
title: spoon_ai.llm.providers.anthropic_provider
---

# Table of Contents

* [spoon\_ai.llm.providers.anthropic\_provider](#spoon_ai.llm.providers.anthropic_provider)
  * [AnthropicProvider](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider)
    * [initialize](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.initialize)
    * [get\_cache\_metrics](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_cache_metrics)
    * [chat](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat)
    * [chat\_stream](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_stream)
    * [completion](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_metadata)
    * [health\_check](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.health_check)
    * [cleanup](#spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.cleanup)

<a id="spoon_ai.llm.providers.anthropic_provider"></a>

# Module `spoon_ai.llm.providers.anthropic_provider`

Anthropic Provider implementation for the unified LLM interface.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider"></a>

## `AnthropicProvider` Objects

```python
@register_provider("anthropic", [
    ProviderCapability.CHAT,
    ProviderCapability.COMPLETION,
    ProviderCapability.TOOLS,
    ProviderCapability.STREAMING
])
class AnthropicProvider(LLMProviderInterface)
```

Anthropic provider implementation.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.initialize"></a>

#### `initialize`

```python
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the Anthropic provider with configuration.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_cache_metrics"></a>

#### `get_cache_metrics`

```python
def get_cache_metrics() -> Dict[str, int]
```

Get current cache performance metrics.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to Anthropic.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request to Anthropic with callback support.

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to Anthropic.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tools to Anthropic.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get Anthropic provider metadata.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.health_check"></a>

#### `health_check`

```python
async def health_check() -> bool
```

Check if Anthropic provider is healthy.

<a id="spoon_ai.llm.providers.anthropic_provider.AnthropicProvider.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Cleanup Anthropic provider resources.

