---
id: spoon_ai.llm.interface
slug: /api-reference/spoon_ai/llm/interface.md
title: spoon_ai.llm.interface
---

# Table of Contents

* [spoon\_ai.llm.interface](#spoon_ai.llm.interface)
  * [ProviderCapability](#spoon_ai.llm.interface.ProviderCapability)
  * [ProviderMetadata](#spoon_ai.llm.interface.ProviderMetadata)
  * [LLMResponse](#spoon_ai.llm.interface.LLMResponse)
  * [LLMProviderInterface](#spoon_ai.llm.interface.LLMProviderInterface)
    * [initialize](#spoon_ai.llm.interface.LLMProviderInterface.initialize)
    * [chat](#spoon_ai.llm.interface.LLMProviderInterface.chat)
    * [chat\_stream](#spoon_ai.llm.interface.LLMProviderInterface.chat_stream)
    * [completion](#spoon_ai.llm.interface.LLMProviderInterface.completion)
    * [chat\_with\_tools](#spoon_ai.llm.interface.LLMProviderInterface.chat_with_tools)
    * [get\_metadata](#spoon_ai.llm.interface.LLMProviderInterface.get_metadata)
    * [health\_check](#spoon_ai.llm.interface.LLMProviderInterface.health_check)
    * [cleanup](#spoon_ai.llm.interface.LLMProviderInterface.cleanup)

<a id="spoon_ai.llm.interface"></a>

# Module `spoon_ai.llm.interface`

LLM Provider Interface - Abstract base class defining the unified interface for all LLM providers.

<a id="spoon_ai.llm.interface.ProviderCapability"></a>

## `ProviderCapability` Objects

```python
class ProviderCapability(Enum)
```

Enumeration of capabilities that LLM providers can support.

<a id="spoon_ai.llm.interface.ProviderMetadata"></a>

## `ProviderMetadata` Objects

```python
@dataclass
class ProviderMetadata()
```

Metadata describing a provider's capabilities and limits.

<a id="spoon_ai.llm.interface.LLMResponse"></a>

## `LLMResponse` Objects

```python
@dataclass
class LLMResponse()
```

Enhanced LLM response with comprehensive metadata and debugging information.

<a id="spoon_ai.llm.interface.LLMProviderInterface"></a>

## `LLMProviderInterface` Objects

```python
class LLMProviderInterface(ABC)
```

Abstract base class defining the unified interface for all LLM providers.

<a id="spoon_ai.llm.interface.LLMProviderInterface.initialize"></a>

#### `initialize`

```python
@abstractmethod
async def initialize(config: Dict[str, Any]) -> None
```

Initialize the provider with configuration.

**Arguments**:

- `config` - Provider-specific configuration dictionary
  

**Raises**:

- `ConfigurationError` - If configuration is invalid

<a id="spoon_ai.llm.interface.LLMProviderInterface.chat"></a>

#### `chat`

```python
@abstractmethod
async def chat(messages: List[Message], **kwargs) -> LLMResponse
```

Send chat request to the provider.

**Arguments**:

- `messages` - List of conversation messages
- `**kwargs` - Additional provider-specific parameters
  

**Returns**:

- `LLMResponse` - Standardized response object
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.chat_stream"></a>

#### `chat_stream`

```python
@abstractmethod
async def chat_stream(messages: List[Message],
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      **kwargs) -> AsyncIterator[LLMResponseChunk]
```

Send streaming chat request to the provider with callback support.

**Arguments**:

- `messages` - List of conversation messages
- `callbacks` - Optional list of callback handlers for real-time events
- `**kwargs` - Additional provider-specific parameters
  

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.completion"></a>

#### `completion`

```python
@abstractmethod
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send completion request to the provider.

**Arguments**:

- `prompt` - Text prompt for completion
- `**kwargs` - Additional provider-specific parameters
  

**Returns**:

- `LLMResponse` - Standardized response object
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.chat_with_tools"></a>

#### `chat_with_tools`

```python
@abstractmethod
async def chat_with_tools(messages: List[Message], tools: List[Dict],
                          **kwargs) -> LLMResponse
```

Send chat request with tool support.

**Arguments**:

- `messages` - List of conversation messages
- `tools` - List of available tools
- `**kwargs` - Additional provider-specific parameters
  

**Returns**:

- `LLMResponse` - Standardized response object with potential tool calls
  

**Raises**:

- `ProviderError` - If the request fails

<a id="spoon_ai.llm.interface.LLMProviderInterface.get_metadata"></a>

#### `get_metadata`

```python
@abstractmethod
def get_metadata() -> ProviderMetadata
```

Get provider metadata and capabilities.

**Returns**:

- `ProviderMetadata` - Provider information and capabilities

<a id="spoon_ai.llm.interface.LLMProviderInterface.health_check"></a>

#### `health_check`

```python
@abstractmethod
async def health_check() -> bool
```

Check if provider is healthy and available.

**Returns**:

- `bool` - True if provider is healthy, False otherwise

<a id="spoon_ai.llm.interface.LLMProviderInterface.cleanup"></a>

#### `cleanup`

```python
@abstractmethod
async def cleanup() -> None
```

Cleanup resources and connections.

This method should be called when the provider is no longer needed.

