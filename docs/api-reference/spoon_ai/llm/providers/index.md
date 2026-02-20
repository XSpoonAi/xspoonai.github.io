---
id: spoon_ai.llm.providers
slug: /api-reference/spoon_ai/llm/providers//index
title: spoon_ai.llm.providers
---

# Table of Contents

* [spoon\_ai.llm.providers](#spoon_ai.llm.providers)
* [spoon\_ai.llm.providers.deepseek\_provider](#spoon_ai.llm.providers.deepseek_provider)
  * [DeepSeekProvider](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider)
    * [get\_metadata](#spoon_ai.llm.providers.deepseek_provider.DeepSeekProvider.get_metadata)
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
* [spoon\_ai.llm.providers.openai\_compatible\_provider](#spoon_ai.llm.providers.openai_compatible_provider)
  * [MAX\_INLINE\_FILE\_SIZE](#spoon_ai.llm.providers.openai_compatible_provider.MAX_INLINE_FILE_SIZE)
  * [OpenAICompatibleProvider](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider)
    * [get\_provider\_name](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_provider_name)
    * [get\_default\_base\_url](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_base_url)
    * [get\_default\_model](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_model)
    * [get\_additional\_headers](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_additional_headers)
    * [initialize](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.initialize)
    * [chat](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat)
    * [chat\_stream](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_stream)
    * [completion](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_metadata)
    * [health\_check](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.health_check)
    * [cleanup](#spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.cleanup)
* [spoon\_ai.llm.providers.ollama\_provider](#spoon_ai.llm.providers.ollama_provider)
  * [OllamaProvider](#spoon_ai.llm.providers.ollama_provider.OllamaProvider)
* [spoon\_ai.llm.providers.openai\_provider](#spoon_ai.llm.providers.openai_provider)
  * [OpenAIProvider](#spoon_ai.llm.providers.openai_provider.OpenAIProvider)
    * [get\_metadata](#spoon_ai.llm.providers.openai_provider.OpenAIProvider.get_metadata)
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
* [spoon\_ai.llm.providers.openrouter\_provider](#spoon_ai.llm.providers.openrouter_provider)
  * [OpenRouterProvider](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider)
    * [get\_additional\_headers](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_additional_headers)
    * [get\_metadata](#spoon_ai.llm.providers.openrouter_provider.OpenRouterProvider.get_metadata)

<a id="spoon_ai.llm.providers"></a>

# Module `spoon_ai.llm.providers`

LLM Provider implementations.

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

<a id="spoon_ai.llm.providers.openai_compatible_provider"></a>

# Module `spoon_ai.llm.providers.openai_compatible_provider`

OpenAI Compatible Provider base class for providers that use OpenAI-compatible APIs.
This includes OpenAI, OpenRouter, DeepSeek, and other providers with similar interfaces.

<a id="spoon_ai.llm.providers.openai_compatible_provider.MAX_INLINE_FILE_SIZE"></a>

#### `MAX_INLINE_FILE_SIZE`

4MB in bytes

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider"></a>

## `OpenAICompatibleProvider` Objects

```python
class OpenAICompatibleProvider(LLMProviderInterface)
```

Base class for OpenAI-compatible providers.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_provider_name"></a>

#### `get_provider_name`

```python
def get_provider_name() -> str
```

Get the provider name. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_base_url"></a>

#### `get_default_base_url`

```python
def get_default_base_url() -> str
```

Get the default base URL. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_default_model"></a>

#### `get_default_model`

```python
def get_default_model() -> str
```

Get the default model. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_additional_headers"></a>

#### `get_additional_headers`

```python
def get_additional_headers(config: Dict[str, Any]) -> Dict[str, str]
```

Get additional headers for the provider. Can be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.initialize"></a>

#### `initialize`

```python
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the provider with configuration.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to the provider.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request with full callback support.

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to the provider.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tools to the provider.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.get_metadata"></a>

#### `get_metadata`

```python
def get_metadata() -> ProviderMetadata
```

Get provider metadata. Should be overridden by subclasses.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.health_check"></a>

#### `health_check`

```python
async def health_check() -> bool
```

Check if provider is healthy.

<a id="spoon_ai.llm.providers.openai_compatible_provider.OpenAICompatibleProvider.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Cleanup provider resources.

<a id="spoon_ai.llm.providers.ollama_provider"></a>

# Module `spoon_ai.llm.providers.ollama_provider`

Ollama Provider implementation for the unified LLM interface.

Ollama runs locally and exposes an HTTP API (default: http://localhost:11434).
This provider supports chat, completion, and streaming.

**Notes**:

  - Ollama does not require an API key; the configuration layer may still provide
  a placeholder api_key value for consistency.
  - Tool calling is supported via /api/chat (tools + tool_calls).

<a id="spoon_ai.llm.providers.ollama_provider.OllamaProvider"></a>

## `OllamaProvider` Objects

```python
@register_provider(
    "ollama",
    [
        ProviderCapability.CHAT,
        ProviderCapability.COMPLETION,
        ProviderCapability.TOOLS,
        ProviderCapability.STREAMING,
    ],
)
class OllamaProvider(LLMProviderInterface)
```

Local Ollama provider via HTTP.

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

