---
id: spoon_ai.llm.config
slug: /api-reference/spoon_ai/llm/config.md
title: spoon_ai.llm.config
---

# Table of Contents

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

