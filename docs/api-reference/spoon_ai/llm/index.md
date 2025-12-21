---
id: spoon_ai.llm
slug: /api-reference/spoon_ai/llm//index
title: spoon_ai.llm
---

# Table of Contents

* [spoon\_ai.llm](#spoon_ai.llm)
* [spoon\_ai.llm.vlm\_provider.gemini](#spoon_ai.llm.vlm_provider.gemini)
  * [GeminiConfig](#spoon_ai.llm.vlm_provider.gemini.GeminiConfig)
    * [validate\_api\_key](#spoon_ai.llm.vlm_provider.gemini.GeminiConfig.validate_api_key)
  * [GeminiProvider](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider)
    * [\_\_init\_\_](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.__init__)
    * [chat](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat)
    * [completion](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.completion)
    * [chat\_with\_tools](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat_with_tools)
    * [generate\_content](#spoon_ai.llm.vlm_provider.gemini.GeminiProvider.generate_content)
* [spoon\_ai.llm.vlm\_provider.base](#spoon_ai.llm.vlm_provider.base)
  * [LLMConfig](#spoon_ai.llm.vlm_provider.base.LLMConfig)
  * [LLMResponse](#spoon_ai.llm.vlm_provider.base.LLMResponse)
    * [text](#spoon_ai.llm.vlm_provider.base.LLMResponse.text)
  * [LLMBase](#spoon_ai.llm.vlm_provider.base.LLMBase)
    * [\_\_init\_\_](#spoon_ai.llm.vlm_provider.base.LLMBase.__init__)
    * [chat](#spoon_ai.llm.vlm_provider.base.LLMBase.chat)
    * [completion](#spoon_ai.llm.vlm_provider.base.LLMBase.completion)
    * [chat\_with\_tools](#spoon_ai.llm.vlm_provider.base.LLMBase.chat_with_tools)
    * [generate\_image](#spoon_ai.llm.vlm_provider.base.LLMBase.generate_image)
    * [reset\_output\_handler](#spoon_ai.llm.vlm_provider.base.LLMBase.reset_output_handler)
* [spoon\_ai.llm.factory](#spoon_ai.llm.factory)
  * [LLMFactory](#spoon_ai.llm.factory.LLMFactory)
    * [register](#spoon_ai.llm.factory.LLMFactory.register)
    * [create](#spoon_ai.llm.factory.LLMFactory.create)
* [spoon\_ai.llm.monitoring](#spoon_ai.llm.monitoring)
  * [RequestMetrics](#spoon_ai.llm.monitoring.RequestMetrics)
  * [ProviderStats](#spoon_ai.llm.monitoring.ProviderStats)
    * [get](#spoon_ai.llm.monitoring.ProviderStats.get)
    * [success\_rate](#spoon_ai.llm.monitoring.ProviderStats.success_rate)
    * [avg\_response\_time](#spoon_ai.llm.monitoring.ProviderStats.avg_response_time)
  * [DebugLogger](#spoon_ai.llm.monitoring.DebugLogger)
    * [\_\_init\_\_](#spoon_ai.llm.monitoring.DebugLogger.__init__)
    * [log\_request](#spoon_ai.llm.monitoring.DebugLogger.log_request)
    * [log\_response](#spoon_ai.llm.monitoring.DebugLogger.log_response)
    * [log\_error](#spoon_ai.llm.monitoring.DebugLogger.log_error)
    * [log\_fallback](#spoon_ai.llm.monitoring.DebugLogger.log_fallback)
    * [get\_request\_history](#spoon_ai.llm.monitoring.DebugLogger.get_request_history)
    * [get\_active\_requests](#spoon_ai.llm.monitoring.DebugLogger.get_active_requests)
    * [clear\_history](#spoon_ai.llm.monitoring.DebugLogger.clear_history)
  * [MetricsCollector](#spoon_ai.llm.monitoring.MetricsCollector)
    * [\_\_init\_\_](#spoon_ai.llm.monitoring.MetricsCollector.__init__)
    * [record\_request](#spoon_ai.llm.monitoring.MetricsCollector.record_request)
    * [get\_provider\_stats](#spoon_ai.llm.monitoring.MetricsCollector.get_provider_stats)
    * [get\_all\_stats](#spoon_ai.llm.monitoring.MetricsCollector.get_all_stats)
    * [get\_rolling\_metrics](#spoon_ai.llm.monitoring.MetricsCollector.get_rolling_metrics)
    * [get\_summary](#spoon_ai.llm.monitoring.MetricsCollector.get_summary)
    * [reset\_stats](#spoon_ai.llm.monitoring.MetricsCollector.reset_stats)
  * [get\_debug\_logger](#spoon_ai.llm.monitoring.get_debug_logger)
  * [get\_metrics\_collector](#spoon_ai.llm.monitoring.get_metrics_collector)
* [spoon\_ai.llm.response\_normalizer](#spoon_ai.llm.response_normalizer)
  * [ResponseNormalizer](#spoon_ai.llm.response_normalizer.ResponseNormalizer)
    * [normalize\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.normalize_response)
    * [validate\_response](#spoon_ai.llm.response_normalizer.ResponseNormalizer.validate_response)
    * [add\_provider\_mapping](#spoon_ai.llm.response_normalizer.ResponseNormalizer.add_provider_mapping)
    * [get\_supported\_providers](#spoon_ai.llm.response_normalizer.ResponseNormalizer.get_supported_providers)
  * [get\_response\_normalizer](#spoon_ai.llm.response_normalizer.get_response_normalizer)
* [spoon\_ai.llm.cache](#spoon_ai.llm.cache)
  * [LLMResponseCache](#spoon_ai.llm.cache.LLMResponseCache)
    * [\_\_init\_\_](#spoon_ai.llm.cache.LLMResponseCache.__init__)
    * [get](#spoon_ai.llm.cache.LLMResponseCache.get)
    * [set](#spoon_ai.llm.cache.LLMResponseCache.set)
    * [clear](#spoon_ai.llm.cache.LLMResponseCache.clear)
    * [get\_stats](#spoon_ai.llm.cache.LLMResponseCache.get_stats)
  * [CachedLLMManager](#spoon_ai.llm.cache.CachedLLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.cache.CachedLLMManager.__init__)
    * [chat](#spoon_ai.llm.cache.CachedLLMManager.chat)
    * [chat\_stream](#spoon_ai.llm.cache.CachedLLMManager.chat_stream)
    * [clear\_cache](#spoon_ai.llm.cache.CachedLLMManager.clear_cache)
    * [get\_cache\_stats](#spoon_ai.llm.cache.CachedLLMManager.get_cache_stats)
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
* [spoon\_ai.llm.providers](#spoon_ai.llm.providers)
* [spoon\_ai.llm.manager](#spoon_ai.llm.manager)
  * [ProviderState](#spoon_ai.llm.manager.ProviderState)
    * [can\_retry\_initialization](#spoon_ai.llm.manager.ProviderState.can_retry_initialization)
    * [record\_initialization\_failure](#spoon_ai.llm.manager.ProviderState.record_initialization_failure)
    * [record\_initialization\_success](#spoon_ai.llm.manager.ProviderState.record_initialization_success)
  * [FallbackStrategy](#spoon_ai.llm.manager.FallbackStrategy)
    * [execute\_with\_fallback](#spoon_ai.llm.manager.FallbackStrategy.execute_with_fallback)
  * [LoadBalancer](#spoon_ai.llm.manager.LoadBalancer)
    * [select\_provider](#spoon_ai.llm.manager.LoadBalancer.select_provider)
    * [update\_provider\_health](#spoon_ai.llm.manager.LoadBalancer.update_provider_health)
    * [set\_provider\_weight](#spoon_ai.llm.manager.LoadBalancer.set_provider_weight)
  * [LLMManager](#spoon_ai.llm.manager.LLMManager)
    * [\_\_init\_\_](#spoon_ai.llm.manager.LLMManager.__init__)
    * [cleanup](#spoon_ai.llm.manager.LLMManager.cleanup)
    * [get\_provider\_status](#spoon_ai.llm.manager.LLMManager.get_provider_status)
    * [reset\_provider](#spoon_ai.llm.manager.LLMManager.reset_provider)
    * [chat](#spoon_ai.llm.manager.LLMManager.chat)
    * [chat\_stream](#spoon_ai.llm.manager.LLMManager.chat_stream)
    * [completion](#spoon_ai.llm.manager.LLMManager.completion)
    * [chat\_with\_tools](#spoon_ai.llm.manager.LLMManager.chat_with_tools)
    * [set\_fallback\_chain](#spoon_ai.llm.manager.LLMManager.set_fallback_chain)
    * [enable\_load\_balancing](#spoon_ai.llm.manager.LLMManager.enable_load_balancing)
    * [disable\_load\_balancing](#spoon_ai.llm.manager.LLMManager.disable_load_balancing)
    * [health\_check\_all](#spoon_ai.llm.manager.LLMManager.health_check_all)
    * [get\_stats](#spoon_ai.llm.manager.LLMManager.get_stats)
  * [get\_llm\_manager](#spoon_ai.llm.manager.get_llm_manager)
  * [set\_llm\_manager](#spoon_ai.llm.manager.set_llm_manager)
* [spoon\_ai.llm.registry](#spoon_ai.llm.registry)
  * [LLMProviderRegistry](#spoon_ai.llm.registry.LLMProviderRegistry)
    * [register](#spoon_ai.llm.registry.LLMProviderRegistry.register)
    * [get\_provider](#spoon_ai.llm.registry.LLMProviderRegistry.get_provider)
    * [list\_providers](#spoon_ai.llm.registry.LLMProviderRegistry.list_providers)
    * [get\_capabilities](#spoon_ai.llm.registry.LLMProviderRegistry.get_capabilities)
    * [is\_registered](#spoon_ai.llm.registry.LLMProviderRegistry.is_registered)
    * [unregister](#spoon_ai.llm.registry.LLMProviderRegistry.unregister)
    * [clear](#spoon_ai.llm.registry.LLMProviderRegistry.clear)
  * [register\_provider](#spoon_ai.llm.registry.register_provider)
  * [get\_global\_registry](#spoon_ai.llm.registry.get_global_registry)
* [spoon\_ai.llm.config](#spoon_ai.llm.config)
  * [ProviderConfig](#spoon_ai.llm.config.ProviderConfig)
    * [\_\_post\_init\_\_](#spoon_ai.llm.config.ProviderConfig.__post_init__)
    * [model\_dump](#spoon_ai.llm.config.ProviderConfig.model_dump)
  * [ConfigurationManager](#spoon_ai.llm.config.ConfigurationManager)
    * [\_\_init\_\_](#spoon_ai.llm.config.ConfigurationManager.__init__)
    * [load\_provider\_config](#spoon_ai.llm.config.ConfigurationManager.load_provider_config)
    * [validate\_config](#spoon_ai.llm.config.ConfigurationManager.validate_config)
    * [get\_default\_provider](#spoon_ai.llm.config.ConfigurationManager.get_default_provider)
    * [get\_fallback\_chain](#spoon_ai.llm.config.ConfigurationManager.get_fallback_chain)
    * [list\_configured\_providers](#spoon_ai.llm.config.ConfigurationManager.list_configured_providers)
    * [get\_available\_providers\_by\_priority](#spoon_ai.llm.config.ConfigurationManager.get_available_providers_by_priority)
    * [get\_provider\_info](#spoon_ai.llm.config.ConfigurationManager.get_provider_info)
    * [reload\_config](#spoon_ai.llm.config.ConfigurationManager.reload_config)
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
* [spoon\_ai.llm.base](#spoon_ai.llm.base)
  * [LLMBase](#spoon_ai.llm.base.LLMBase)
    * [\_\_init\_\_](#spoon_ai.llm.base.LLMBase.__init__)
    * [chat](#spoon_ai.llm.base.LLMBase.chat)
    * [completion](#spoon_ai.llm.base.LLMBase.completion)
    * [chat\_with\_tools](#spoon_ai.llm.base.LLMBase.chat_with_tools)
    * [generate\_image](#spoon_ai.llm.base.LLMBase.generate_image)
    * [reset\_output\_handler](#spoon_ai.llm.base.LLMBase.reset_output_handler)

<a id="spoon_ai.llm"></a>

# Module `spoon_ai.llm`

Unified LLM infrastructure package.

This package provides a unified interface for working with different LLM providers,
including comprehensive configuration management, monitoring, and error handling.

<a id="spoon_ai.llm.vlm_provider.gemini"></a>

# Module `spoon_ai.llm.vlm_provider.gemini`

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiConfig"></a>

## `GeminiConfig` Objects

```python
class GeminiConfig(LLMConfig)
```

Gemini Configuration

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiConfig.validate_api_key"></a>

#### `validate_api_key`

```python
@model_validator(mode='after')
def validate_api_key()
```

Validate that API key is provided

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider"></a>

## `GeminiProvider` Objects

```python
@LLMFactory.register("gemini")
class GeminiProvider(LLMBase)
```

Gemini Provider Implementation

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.__init__"></a>

#### `__init__`

```python
def __init__(config_path: str = "config/config.toml",
             config_name: str = "chitchat")
```

Initialize Gemini Provider

**Arguments**:

- `config_path` - Configuration file path
- `config_name` - Configuration name
  

**Raises**:

- `ValueError` - If GEMINI_API_KEY environment variable is not set

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               system_msgs: Optional[List[Message]] = None,
               response_modalities: Optional[List[str]] = None,
               **kwargs) -> LLMResponse
```

Send chat request to Gemini and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `response_modalities` - List of response modalities (optional, e.g. ['Text', 'Image'])
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.completion"></a>

#### `completion`

```python
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send text completion request to Gemini and get response

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message],
                          system_msgs: Optional[List[Message]] = None,
                          tools: Optional[List[Dict]] = None,
                          tool_choice: Literal["none", "auto",
                                               "required"] = "auto",
                          **kwargs) -> LLMResponse
```

Send chat request to Gemini that may contain tool calls and get response

Note: Gemini currently doesn't support tool calls, this method will use regular chat method

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `tools` - List of tools (not supported by Gemini)
- `tool_choice` - Tool choice mode (not supported by Gemini)
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.gemini.GeminiProvider.generate_content"></a>

#### `generate_content`

```python
async def generate_content(model: Optional[str] = None,
                           contents: Union[str, List, types.Content,
                                           types.Part] = None,
                           config: Optional[
                               types.GenerateContentConfig] = None,
                           **kwargs) -> LLMResponse
```

Directly call Gemini's generate_content interface

**Arguments**:

- `model` - Model name (optional, will override model in configuration)
- `contents` - Request content, can be string, list, or types.Content/types.Part object
- `config` - Generation configuration
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base"></a>

# Module `spoon_ai.llm.vlm_provider.base`

<a id="spoon_ai.llm.vlm_provider.base.LLMConfig"></a>

## `LLMConfig` Objects

```python
class LLMConfig(BaseModel)
```

Base class for LLM configuration

<a id="spoon_ai.llm.vlm_provider.base.LLMResponse"></a>

## `LLMResponse` Objects

```python
class LLMResponse(BaseModel)
```

Base class for LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMResponse.text"></a>

#### `text`

Original text response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase"></a>

## `LLMBase` Objects

```python
class LLMBase(ABC)
```

Base abstract class for LLM, defining interfaces that all LLM providers must implement

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.__init__"></a>

#### `__init__`

```python
def __init__(config_path: str = "config/config.toml",
             config_name: str = "llm")
```

Initialize LLM interface

**Arguments**:

- `config_path` - Configuration file path
- `config_name` - Configuration name

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.chat"></a>

#### `chat`

```python
@abstractmethod
async def chat(messages: List[Message],
               system_msgs: Optional[List[Message]] = None,
               **kwargs) -> LLMResponse
```

Send chat request to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.completion"></a>

#### `completion`

```python
@abstractmethod
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send text completion request to LLM and get response

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.chat_with_tools"></a>

#### `chat_with_tools`

```python
@abstractmethod
async def chat_with_tools(messages: List[Message],
                          system_msgs: Optional[List[Message]] = None,
                          tools: Optional[List[Dict]] = None,
                          tool_choice: Literal["none", "auto",
                                               "required"] = "auto",
                          **kwargs) -> LLMResponse
```

Send chat request that may contain tool calls to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `tools` - List of tools
- `tool_choice` - Tool selection mode
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.generate_image"></a>

#### `generate_image`

```python
async def generate_image(prompt: str, **kwargs) -> Union[str, List[str]]
```

Generate image (optional implementation)

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

  Union[str, List[str]]: Image URL or list of URLs

<a id="spoon_ai.llm.vlm_provider.base.LLMBase.reset_output_handler"></a>

#### `reset_output_handler`

```python
def reset_output_handler()
```

Reset output handler

<a id="spoon_ai.llm.factory"></a>

# Module `spoon_ai.llm.factory`

<a id="spoon_ai.llm.factory.LLMFactory"></a>

## `LLMFactory` Objects

```python
class LLMFactory()
```

LLM factory class, used to create different LLM instances

<a id="spoon_ai.llm.factory.LLMFactory.register"></a>

#### `register`

```python
@classmethod
def register(cls, provider_name: str)
```

Register LLM provider

**Arguments**:

- `provider_name` - Provider name
  

**Returns**:

  Decorator function

<a id="spoon_ai.llm.factory.LLMFactory.create"></a>

#### `create`

```python
@classmethod
def create(cls,
           provider: Optional[str] = None,
           config_path: str = "config/config.toml",
           config_name: str = "llm") -> LLMBase
```

Create LLM instance

**Arguments**:

- `provider` - Provider name, if None, read from configuration file
- `config_path` - Configuration file path
- `config_name` - Configuration name
  

**Returns**:

- `LLMBase` - LLM instance
  

**Raises**:

- `ValueError` - If provider does not exist

<a id="spoon_ai.llm.monitoring"></a>

# Module `spoon_ai.llm.monitoring`

Comprehensive monitoring, debugging, and metrics collection for LLM operations.

<a id="spoon_ai.llm.monitoring.RequestMetrics"></a>

## `RequestMetrics` Objects

```python
@dataclass
class RequestMetrics()
```

Metrics for a single LLM request.

<a id="spoon_ai.llm.monitoring.ProviderStats"></a>

## `ProviderStats` Objects

```python
@dataclass
class ProviderStats()
```

Aggregated statistics for a provider.

<a id="spoon_ai.llm.monitoring.ProviderStats.get"></a>

#### `get`

```python
def get(key: str, default=None)
```

Get attribute value with default fallback for dictionary-like access.

**Arguments**:

- `key` - Attribute name
- `default` - Default value if attribute doesn't exist
  

**Returns**:

  Attribute value or default

<a id="spoon_ai.llm.monitoring.ProviderStats.success_rate"></a>

#### `success_rate`

```python
@property
def success_rate() -> float
```

Calculate success rate as a percentage.

<a id="spoon_ai.llm.monitoring.ProviderStats.avg_response_time"></a>

#### `avg_response_time`

```python
@property
def avg_response_time() -> float
```

Get average response time.

<a id="spoon_ai.llm.monitoring.DebugLogger"></a>

## `DebugLogger` Objects

```python
class DebugLogger()
```

Comprehensive logging and debugging system for LLM operations.

<a id="spoon_ai.llm.monitoring.DebugLogger.__init__"></a>

#### `__init__`

```python
def __init__(max_history: int = 1000, enable_detailed_logging: bool = True)
```

Initialize debug logger.

**Arguments**:

- `max_history` - Maximum number of requests to keep in history
- `enable_detailed_logging` - Whether to enable detailed request/response logging

<a id="spoon_ai.llm.monitoring.DebugLogger.log_request"></a>

#### `log_request`

```python
def log_request(provider: str, method: str, params: Dict[str, Any]) -> str
```

Log request with unique ID.

**Arguments**:

- `provider` - Provider name
- `method` - Method being called (chat, completion, etc.)
- `params` - Request parameters
  

**Returns**:

- `str` - Unique request ID

<a id="spoon_ai.llm.monitoring.DebugLogger.log_response"></a>

#### `log_response`

```python
def log_response(request_id: str, response: LLMResponse,
                 duration: float) -> None
```

Log response with timing information.

**Arguments**:

- `request_id` - Request ID from log_request
- `response` - LLM response object
- `duration` - Request duration in seconds

<a id="spoon_ai.llm.monitoring.DebugLogger.log_error"></a>

#### `log_error`

```python
def log_error(request_id: str, error: Exception, context: Dict[str,
                                                               Any]) -> None
```

Log error with context.

**Arguments**:

- `request_id` - Request ID from log_request
- `error` - Exception that occurred
- `context` - Additional error context

<a id="spoon_ai.llm.monitoring.DebugLogger.log_fallback"></a>

#### `log_fallback`

```python
def log_fallback(from_provider: str, to_provider: str, reason: str) -> None
```

Log provider fallback event.

**Arguments**:

- `from_provider` - Provider that failed
- `to_provider` - Provider being used as fallback
- `reason` - Reason for fallback

<a id="spoon_ai.llm.monitoring.DebugLogger.get_request_history"></a>

#### `get_request_history`

```python
def get_request_history(provider: Optional[str] = None,
                        limit: Optional[int] = None) -> List[RequestMetrics]
```

Get request history.

**Arguments**:

- `provider` - Filter by provider (optional)
- `limit` - Maximum number of requests to return (optional)
  

**Returns**:

- `List[RequestMetrics]` - List of request metrics

<a id="spoon_ai.llm.monitoring.DebugLogger.get_active_requests"></a>

#### `get_active_requests`

```python
def get_active_requests() -> List[RequestMetrics]
```

Get currently active requests.

**Returns**:

- `List[RequestMetrics]` - List of active request metrics

<a id="spoon_ai.llm.monitoring.DebugLogger.clear_history"></a>

#### `clear_history`

```python
def clear_history() -> None
```

Clear request history.

<a id="spoon_ai.llm.monitoring.MetricsCollector"></a>

## `MetricsCollector` Objects

```python
class MetricsCollector()
```

Collects and aggregates performance metrics for LLM providers.

<a id="spoon_ai.llm.monitoring.MetricsCollector.__init__"></a>

#### `__init__`

```python
def __init__(window_size: int = 3600)
```

Initialize metrics collector.

**Arguments**:

- `window_size` - Time window in seconds for rolling metrics

<a id="spoon_ai.llm.monitoring.MetricsCollector.record_request"></a>

#### `record_request`

```python
def record_request(provider: str,
                   method: str,
                   duration: float,
                   success: bool,
                   tokens: int = 0,
                   model: str = '',
                   error: Optional[str] = None) -> None
```

Record request metrics.

**Arguments**:

- `provider` - Provider name
- `method` - Method called
- `duration` - Request duration in seconds
- `success` - Whether request was successful
- `tokens` - Number of tokens used
- `model` - Model name
- `error` - Error message if failed

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_provider_stats"></a>

#### `get_provider_stats`

```python
def get_provider_stats(provider: str) -> Optional[ProviderStats]
```

Get statistics for a specific provider.

**Arguments**:

- `provider` - Provider name
  

**Returns**:

- `Optional[ProviderStats]` - Provider statistics or None if not found

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_all_stats"></a>

#### `get_all_stats`

```python
def get_all_stats() -> Dict[str, ProviderStats]
```

Get statistics for all providers.

**Returns**:

  Dict[str, ProviderStats]: Dictionary of provider statistics

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_rolling_metrics"></a>

#### `get_rolling_metrics`

```python
def get_rolling_metrics(provider: Optional[str] = None,
                        method: Optional[str] = None) -> List[Dict[str, Any]]
```

Get rolling metrics with optional filtering.

**Arguments**:

- `provider` - Filter by provider (optional)
- `method` - Filter by method (optional)
  

**Returns**:

  List[Dict[str, Any]]: List of metrics

<a id="spoon_ai.llm.monitoring.MetricsCollector.get_summary"></a>

#### `get_summary`

```python
def get_summary() -> Dict[str, Any]
```

Get overall summary statistics.

**Returns**:

  Dict[str, Any]: Summary statistics

<a id="spoon_ai.llm.monitoring.MetricsCollector.reset_stats"></a>

#### `reset_stats`

```python
def reset_stats(provider: Optional[str] = None) -> None
```

Reset statistics.

**Arguments**:

- `provider` - Reset specific provider only (optional)

<a id="spoon_ai.llm.monitoring.get_debug_logger"></a>

#### `get_debug_logger`

```python
def get_debug_logger() -> DebugLogger
```

Get global debug logger instance.

**Returns**:

- `DebugLogger` - Global debug logger

<a id="spoon_ai.llm.monitoring.get_metrics_collector"></a>

#### `get_metrics_collector`

```python
def get_metrics_collector() -> MetricsCollector
```

Get global metrics collector instance.

**Returns**:

- `MetricsCollector` - Global metrics collector

<a id="spoon_ai.llm.response_normalizer"></a>

# Module `spoon_ai.llm.response_normalizer`

Response normalizer for ensuring consistent response formats across providers.

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer"></a>

## `ResponseNormalizer` Objects

```python
class ResponseNormalizer()
```

Normalizes responses from different providers to ensure consistency.

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.normalize_response"></a>

#### `normalize_response`

```python
def normalize_response(response: LLMResponse) -> LLMResponse
```

Normalize a response from any provider.

**Arguments**:

- `response` - Raw LLM response
  

**Returns**:

- `LLMResponse` - Normalized response
  

**Raises**:

- `ValidationError` - If response cannot be normalized

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.validate_response"></a>

#### `validate_response`

```python
def validate_response(response: LLMResponse) -> bool
```

Validate that a response meets minimum requirements.

**Arguments**:

- `response` - Response to validate
  

**Returns**:

- `bool` - True if response is valid
  

**Raises**:

- `ValidationError` - If response is invalid

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.add_provider_mapping"></a>

#### `add_provider_mapping`

```python
def add_provider_mapping(provider_name: str, normalizer_func) -> None
```

Add a custom normalizer for a new provider.

**Arguments**:

- `provider_name` - Name of the provider
- `normalizer_func` - Function that takes and returns LLMResponse

<a id="spoon_ai.llm.response_normalizer.ResponseNormalizer.get_supported_providers"></a>

#### `get_supported_providers`

```python
def get_supported_providers() -> List[str]
```

Get list of providers with custom normalizers.

**Returns**:

- `List[str]` - List of provider names

<a id="spoon_ai.llm.response_normalizer.get_response_normalizer"></a>

#### `get_response_normalizer`

```python
def get_response_normalizer() -> ResponseNormalizer
```

Get global response normalizer instance.

**Returns**:

- `ResponseNormalizer` - Global normalizer instance

<a id="spoon_ai.llm.cache"></a>

# Module `spoon_ai.llm.cache`

LLM Response Caching - Cache LLM responses to avoid redundant API calls.

<a id="spoon_ai.llm.cache.LLMResponseCache"></a>

## `LLMResponseCache` Objects

```python
class LLMResponseCache()
```

Cache for LLM responses to avoid redundant API calls.

<a id="spoon_ai.llm.cache.LLMResponseCache.__init__"></a>

#### `__init__`

```python
def __init__(default_ttl: int = 3600, max_size: int = 1000)
```

Initialize the cache.

**Arguments**:

- `default_ttl` - Default time-to-live in seconds (default: 1 hour)
- `max_size` - Maximum number of cached entries (default: 1000)

<a id="spoon_ai.llm.cache.LLMResponseCache.get"></a>

#### `get`

```python
def get(messages: List[Message],
        provider: Optional[str] = None,
        **kwargs) -> Optional[LLMResponse]
```

Get cached response if available.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Provider name (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `Optional[LLMResponse]` - Cached response if found and not expired, None otherwise

<a id="spoon_ai.llm.cache.LLMResponseCache.set"></a>

#### `set`

```python
def set(messages: List[Message],
        response: LLMResponse,
        provider: Optional[str] = None,
        ttl: Optional[int] = None,
        **kwargs) -> None
```

Store response in cache.

**Arguments**:

- `messages` - List of conversation messages
- `response` - LLM response to cache
- `provider` - Provider name (optional)
- `ttl` - Time-to-live in seconds (optional, uses default if not provided)
- `**kwargs` - Additional parameters

<a id="spoon_ai.llm.cache.LLMResponseCache.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all cached entries.

<a id="spoon_ai.llm.cache.LLMResponseCache.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics including size, max_size, etc.

<a id="spoon_ai.llm.cache.CachedLLMManager"></a>

## `CachedLLMManager` Objects

```python
class CachedLLMManager()
```

Wrapper around LLMManager that adds response caching.

<a id="spoon_ai.llm.cache.CachedLLMManager.__init__"></a>

#### `__init__`

```python
def __init__(llm_manager: LLMManager,
             cache: Optional[LLMResponseCache] = None)
```

Initialize cached LLM manager.

**Arguments**:

- `llm_manager` - The underlying LLMManager instance
- `cache` - Optional cache instance (creates new one if not provided)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               use_cache: bool = True,
               cache_ttl: Optional[int] = None,
               **kwargs) -> LLMResponse
```

Send chat request with caching support.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `use_cache` - Whether to use cache (default: True)
- `cache_ttl` - Custom TTL for this request (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - LLM response (from cache or API)

<a id="spoon_ai.llm.cache.CachedLLMManager.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      provider: Optional[str] = None,
                      callbacks: Optional[List] = None,
                      **kwargs)
```

Send streaming chat request (caching not supported for streaming).

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `callbacks` - Optional callback handlers
- `**kwargs` - Additional parameters
  

**Yields**:

- `LLMResponseChunk` - Streaming response chunks

<a id="spoon_ai.llm.cache.CachedLLMManager.clear_cache"></a>

#### `clear_cache`

```python
def clear_cache() -> None
```

Clear the response cache.

<a id="spoon_ai.llm.cache.CachedLLMManager.get_cache_stats"></a>

#### `get_cache_stats`

```python
def get_cache_stats() -> Dict[str, Any]
```

Get cache statistics.

**Returns**:

  Dict[str, Any]: Cache statistics

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

<a id="spoon_ai.llm.providers"></a>

# Module `spoon_ai.llm.providers`

LLM Provider implementations.

<a id="spoon_ai.llm.manager"></a>

# Module `spoon_ai.llm.manager`

LLM Manager - Central orchestrator for managing providers, fallback, and load balancing.

<a id="spoon_ai.llm.manager.ProviderState"></a>

## `ProviderState` Objects

```python
@dataclass
class ProviderState()
```

Track provider initialization and health state.

<a id="spoon_ai.llm.manager.ProviderState.can_retry_initialization"></a>

#### `can_retry_initialization`

```python
def can_retry_initialization() -> bool
```

Check if provider initialization can be retried.

<a id="spoon_ai.llm.manager.ProviderState.record_initialization_failure"></a>

#### `record_initialization_failure`

```python
def record_initialization_failure(error: Exception) -> None
```

Record initialization failure with exponential backoff.

<a id="spoon_ai.llm.manager.ProviderState.record_initialization_success"></a>

#### `record_initialization_success`

```python
def record_initialization_success() -> None
```

Record successful initialization.

<a id="spoon_ai.llm.manager.FallbackStrategy"></a>

## `FallbackStrategy` Objects

```python
class FallbackStrategy()
```

Handles fallback logic between providers.

<a id="spoon_ai.llm.manager.FallbackStrategy.execute_with_fallback"></a>

#### `execute_with_fallback`

```python
async def execute_with_fallback(providers: List[str], operation, *args,
                                **kwargs) -> LLMResponse
```

Execute operation with fallback chain.

**Arguments**:

- `providers` - List of provider names in fallback order
- `operation` - Async operation to execute
  *args, **kwargs: Arguments for the operation
  

**Returns**:

- `LLMResponse` - Response from successful provider
  

**Raises**:

- `ProviderError` - If all providers fail

<a id="spoon_ai.llm.manager.LoadBalancer"></a>

## `LoadBalancer` Objects

```python
class LoadBalancer()
```

Handles load balancing between multiple provider instances.

<a id="spoon_ai.llm.manager.LoadBalancer.select_provider"></a>

#### `select_provider`

```python
def select_provider(providers: List[str],
                    strategy: str = "round_robin") -> str
```

Select a provider based on load balancing strategy.

**Arguments**:

- `providers` - List of available providers
- `strategy` - Load balancing strategy ('round_robin', 'weighted', 'random')
  

**Returns**:

- `str` - Selected provider name

<a id="spoon_ai.llm.manager.LoadBalancer.update_provider_health"></a>

#### `update_provider_health`

```python
def update_provider_health(provider: str, is_healthy: bool) -> None
```

Update provider health status.

<a id="spoon_ai.llm.manager.LoadBalancer.set_provider_weight"></a>

#### `set_provider_weight`

```python
def set_provider_weight(provider: str, weight: float) -> None
```

Set provider weight for weighted load balancing.

<a id="spoon_ai.llm.manager.LLMManager"></a>

## `LLMManager` Objects

```python
class LLMManager()
```

Central orchestrator for LLM providers with fallback and load balancing.

<a id="spoon_ai.llm.manager.LLMManager.__init__"></a>

#### `__init__`

```python
def __init__(config_manager: Optional[ConfigurationManager] = None,
             debug_logger: Optional[DebugLogger] = None,
             metrics_collector: Optional[MetricsCollector] = None,
             response_normalizer: Optional[ResponseNormalizer] = None,
             registry: Optional[LLMProviderRegistry] = None)
```

Initialize LLM Manager with enhanced provider state tracking.

<a id="spoon_ai.llm.manager.LLMManager.cleanup"></a>

#### `cleanup`

```python
async def cleanup() -> None
```

Enhanced cleanup with proper resource management.

<a id="spoon_ai.llm.manager.LLMManager.get_provider_status"></a>

#### `get_provider_status`

```python
def get_provider_status() -> Dict[str, Dict[str, Any]]
```

Get detailed status of all providers.

<a id="spoon_ai.llm.manager.LLMManager.reset_provider"></a>

#### `reset_provider`

```python
async def reset_provider(provider_name: str) -> bool
```

Reset a provider's state and force reinitialization.

**Arguments**:

- `provider_name` - Name of provider to reset
  

**Returns**:

- `bool` - True if reset successful

<a id="spoon_ai.llm.manager.LLMManager.chat"></a>

#### `chat`

```python
async def chat(messages: List[Message],
               provider: Optional[str] = None,
               **kwargs) -> LLMResponse
```

Send chat request with automatic provider selection and fallback.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.chat_stream"></a>

#### `chat_stream`

```python
async def chat_stream(messages: List[Message],
                      provider: Optional[str] = None,
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      **kwargs) -> AsyncGenerator[LLMResponseChunk, None]
```

Send streaming chat request with callback support.

**Arguments**:

- `messages` - List of conversation messages
- `provider` - Specific provider to use (optional)
- `callbacks` - Optional callback handlers for monitoring
- `**kwargs` - Additional parameters
  

**Yields**:

- `LLMResponseChunk` - Structured streaming response chunks

<a id="spoon_ai.llm.manager.LLMManager.completion"></a>

#### `completion`

```python
async def completion(prompt: str,
                     provider: Optional[str] = None,
                     **kwargs) -> LLMResponse
```

Send completion request.

**Arguments**:

- `prompt` - Text prompt
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.chat_with_tools"></a>

#### `chat_with_tools`

```python
async def chat_with_tools(messages: List[Message],
                          tools: List[Dict],
                          provider: Optional[str] = None,
                          **kwargs) -> LLMResponse
```

Send tool-enabled chat request.

**Arguments**:

- `messages` - List of conversation messages
- `tools` - List of available tools
- `provider` - Specific provider to use (optional)
- `**kwargs` - Additional parameters
  

**Returns**:

- `LLMResponse` - Normalized response

<a id="spoon_ai.llm.manager.LLMManager.set_fallback_chain"></a>

#### `set_fallback_chain`

```python
def set_fallback_chain(providers: List[str]) -> None
```

Set fallback provider chain.

**Arguments**:

- `providers` - List of provider names in fallback order

<a id="spoon_ai.llm.manager.LLMManager.enable_load_balancing"></a>

#### `enable_load_balancing`

```python
def enable_load_balancing(strategy: str = "round_robin") -> None
```

Enable load balancing with specified strategy.

**Arguments**:

- `strategy` - Load balancing strategy ('round_robin', 'weighted', 'random')

<a id="spoon_ai.llm.manager.LLMManager.disable_load_balancing"></a>

#### `disable_load_balancing`

```python
def disable_load_balancing() -> None
```

Disable load balancing.

<a id="spoon_ai.llm.manager.LLMManager.health_check_all"></a>

#### `health_check_all`

```python
async def health_check_all() -> Dict[str, bool]
```

Check health of all registered providers.

**Returns**:

  Dict[str, bool]: Provider health status

<a id="spoon_ai.llm.manager.LLMManager.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get comprehensive statistics.

**Returns**:

  Dict[str, Any]: Manager and provider statistics

<a id="spoon_ai.llm.manager.get_llm_manager"></a>

#### `get_llm_manager`

```python
def get_llm_manager() -> LLMManager
```

Get global LLM manager instance.

**Returns**:

- `LLMManager` - Global manager instance

<a id="spoon_ai.llm.manager.set_llm_manager"></a>

#### `set_llm_manager`

```python
def set_llm_manager(manager: LLMManager) -> None
```

Set global LLM manager instance.

**Arguments**:

- `manager` - Manager instance to set as global

<a id="spoon_ai.llm.registry"></a>

# Module `spoon_ai.llm.registry`

LLM Provider Registry for dynamic provider registration and discovery.

<a id="spoon_ai.llm.registry.LLMProviderRegistry"></a>

## `LLMProviderRegistry` Objects

```python
class LLMProviderRegistry()
```

Registry for managing LLM provider classes and instances.

<a id="spoon_ai.llm.registry.LLMProviderRegistry.register"></a>

#### `register`

```python
def register(name: str, provider_class: Type[LLMProviderInterface]) -> None
```

Register a provider class.

**Arguments**:

- `name` - Unique provider name
- `provider_class` - Provider class implementing LLMProviderInterface
  

**Raises**:

- `ConfigurationError` - If provider name already exists or class is invalid

<a id="spoon_ai.llm.registry.LLMProviderRegistry.get_provider"></a>

#### `get_provider`

```python
def get_provider(
        name: str,
        config: Optional[Dict[str, Any]] = None) -> LLMProviderInterface
```

Get or create provider instance.

**Arguments**:

- `name` - Provider name
- `config` - Provider configuration (optional if already configured)
  

**Returns**:

- `LLMProviderInterface` - Provider instance
  

**Raises**:

- `ConfigurationError` - If provider not found or configuration invalid

<a id="spoon_ai.llm.registry.LLMProviderRegistry.list_providers"></a>

#### `list_providers`

```python
def list_providers() -> List[str]
```

List all registered provider names.

**Returns**:

- `List[str]` - List of provider names

<a id="spoon_ai.llm.registry.LLMProviderRegistry.get_capabilities"></a>

#### `get_capabilities`

```python
def get_capabilities(name: str) -> List[ProviderCapability]
```

Get provider capabilities.

**Arguments**:

- `name` - Provider name
  

**Returns**:

- `List[ProviderCapability]` - List of supported capabilities
  

**Raises**:

- `ConfigurationError` - If provider not found

<a id="spoon_ai.llm.registry.LLMProviderRegistry.is_registered"></a>

#### `is_registered`

```python
def is_registered(name: str) -> bool
```

Check if a provider is registered.

**Arguments**:

- `name` - Provider name
  

**Returns**:

- `bool` - True if provider is registered

<a id="spoon_ai.llm.registry.LLMProviderRegistry.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> None
```

Unregister a provider.

**Arguments**:

- `name` - Provider name

<a id="spoon_ai.llm.registry.LLMProviderRegistry.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all registered providers and instances.

<a id="spoon_ai.llm.registry.register_provider"></a>

#### `register_provider`

```python
def register_provider(name: str,
                      capabilities: Optional[List[ProviderCapability]] = None)
```

Decorator for automatic provider registration.

**Arguments**:

- `name` - Provider name
- `capabilities` - List of supported capabilities (optional)
  

**Returns**:

  Decorator function

<a id="spoon_ai.llm.registry.get_global_registry"></a>

#### `get_global_registry`

```python
def get_global_registry() -> LLMProviderRegistry
```

Get the global provider registry instance.

**Returns**:

- `LLMProviderRegistry` - Global registry instance

<a id="spoon_ai.llm.config"></a>

# Module `spoon_ai.llm.config`

Configuration management for LLM providers using environment variables.

<a id="spoon_ai.llm.config.ProviderConfig"></a>

## `ProviderConfig` Objects

```python
@dataclass
class ProviderConfig()
```

Configuration for a specific LLM provider.

<a id="spoon_ai.llm.config.ProviderConfig.__post_init__"></a>

#### `__post_init__`

```python
def __post_init__()
```

Validate configuration after initialization.

<a id="spoon_ai.llm.config.ProviderConfig.model_dump"></a>

#### `model_dump`

```python
def model_dump() -> Dict[str, Any]
```

Convert the configuration to a dictionary.

**Returns**:

  Dict[str, Any]: Configuration as dictionary

<a id="spoon_ai.llm.config.ConfigurationManager"></a>

## `ConfigurationManager` Objects

```python
class ConfigurationManager()
```

Manages environment-driven configuration for LLM providers.

<a id="spoon_ai.llm.config.ConfigurationManager.__init__"></a>

#### `__init__`

```python
def __init__() -> None
```

Initialize configuration manager and load environment variables.

<a id="spoon_ai.llm.config.ConfigurationManager.load_provider_config"></a>

#### `load_provider_config`

```python
def load_provider_config(provider_name: str) -> ProviderConfig
```

Load and validate provider configuration.

**Arguments**:

- `provider_name` - Name of the provider
  

**Returns**:

- `ProviderConfig` - Validated provider configuration
  

**Raises**:

- `ConfigurationError` - If configuration is invalid or missing

<a id="spoon_ai.llm.config.ConfigurationManager.validate_config"></a>

#### `validate_config`

```python
def validate_config(config: ProviderConfig) -> bool
```

Validate provider configuration.

**Arguments**:

- `config` - Provider configuration to validate
  

**Returns**:

- `bool` - True if configuration is valid
  

**Raises**:

- `ConfigurationError` - If configuration is invalid

<a id="spoon_ai.llm.config.ConfigurationManager.get_default_provider"></a>

#### `get_default_provider`

```python
def get_default_provider() -> str
```

Get default provider from configuration with intelligent selection.

**Returns**:

- `str` - Default provider name

<a id="spoon_ai.llm.config.ConfigurationManager.get_fallback_chain"></a>

#### `get_fallback_chain`

```python
def get_fallback_chain() -> List[str]
```

Get fallback chain from configuration.

**Returns**:

- `List[str]` - List of provider names in fallback order

<a id="spoon_ai.llm.config.ConfigurationManager.list_configured_providers"></a>

#### `list_configured_providers`

```python
def list_configured_providers() -> List[str]
```

List all configured providers.

**Returns**:

- `List[str]` - List of provider names that have configuration

<a id="spoon_ai.llm.config.ConfigurationManager.get_available_providers_by_priority"></a>

#### `get_available_providers_by_priority`

```python
def get_available_providers_by_priority() -> List[str]
```

Get available providers ordered by priority and quality.

**Returns**:

- `List[str]` - List of available provider names in priority order

<a id="spoon_ai.llm.config.ConfigurationManager.get_provider_info"></a>

#### `get_provider_info`

```python
def get_provider_info() -> Dict[str, Dict[str, Any]]
```

Get information about all providers and their availability.

**Returns**:

  Dict[str, Dict[str, Any]]: Provider information including availability

<a id="spoon_ai.llm.config.ConfigurationManager.reload_config"></a>

#### `reload_config`

```python
def reload_config() -> None
```

Reload configuration from file.

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

<a id="spoon_ai.llm.base"></a>

# Module `spoon_ai.llm.base`

<a id="spoon_ai.llm.base.LLMBase"></a>

## `LLMBase` Objects

```python
class LLMBase(ABC)
```

Base abstract class for LLM, defining interfaces that all LLM providers must implement

<a id="spoon_ai.llm.base.LLMBase.__init__"></a>

#### `__init__`

```python
def __init__(config_path: str = "config/config.toml",
             config_name: str = "llm")
```

Initialize LLM interface

**Arguments**:

- `config_path` - Configuration file path
- `config_name` - Configuration name

<a id="spoon_ai.llm.base.LLMBase.chat"></a>

#### `chat`

```python
@abstractmethod
async def chat(messages: List[Message],
               system_msgs: Optional[List[Message]] = None,
               **kwargs) -> LLMResponse
```

Send chat request to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.completion"></a>

#### `completion`

```python
@abstractmethod
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send text completion request to LLM and get response

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.chat_with_tools"></a>

#### `chat_with_tools`

```python
@abstractmethod
async def chat_with_tools(messages: List[Message],
                          system_msgs: Optional[List[Message]] = None,
                          tools: Optional[List[Dict]] = None,
                          tool_choice: Literal["none", "auto",
                                               "required"] = "auto",
                          **kwargs) -> LLMResponse
```

Send chat request that may contain tool calls to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `tools` - List of tools
- `tool_choice` - Tool selection mode
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.generate_image"></a>

#### `generate_image`

```python
async def generate_image(prompt: str, **kwargs) -> Union[str, List[str]]
```

Generate image (optional implementation)

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

  Union[str, List[str]]: Image URL or list of URLs

<a id="spoon_ai.llm.base.LLMBase.reset_output_handler"></a>

#### `reset_output_handler`

```python
def reset_output_handler()
```

Reset output handler

