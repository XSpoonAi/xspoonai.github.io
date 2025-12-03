---
id: spoon_ai.llm.providers.openai_compatible_provider
slug: /api-reference/spoon_ai/llm/providers/openai_compatible_provider.md
title: spoon_ai.llm.providers.openai_compatible_provider
---

# Table of Contents

* [spoon\_ai.llm.providers.openai\_compatible\_provider](#spoon_ai.llm.providers.openai_compatible_provider)
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

<a id="spoon_ai.llm.providers.openai_compatible_provider"></a>

# Module `spoon_ai.llm.providers.openai_compatible_provider`

OpenAI Compatible Provider base class for providers that use OpenAI-compatible APIs.
This includes OpenAI, OpenRouter, DeepSeek, and other providers with similar interfaces.

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

