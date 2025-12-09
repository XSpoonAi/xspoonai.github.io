---
id: spoon_ai.utils.config_manager
slug: /api-reference/spoon_ai/utils/config_manager
title: spoon_ai.utils.config_manager
---

# Table of Contents

* [spoon\_ai.utils.config\_manager](#spoon_ai.utils.config_manager)
  * [ConfigManager](#spoon_ai.utils.config_manager.ConfigManager)
    * [\_\_init\_\_](#spoon_ai.utils.config_manager.ConfigManager.__init__)
    * [refresh](#spoon_ai.utils.config_manager.ConfigManager.refresh)
    * [get](#spoon_ai.utils.config_manager.ConfigManager.get)
    * [set](#spoon_ai.utils.config_manager.ConfigManager.set)
    * [list\_config](#spoon_ai.utils.config_manager.ConfigManager.list_config)
    * [get\_api\_key](#spoon_ai.utils.config_manager.ConfigManager.get_api_key)
    * [set\_api\_key](#spoon_ai.utils.config_manager.ConfigManager.set_api_key)
    * [get\_model\_name](#spoon_ai.utils.config_manager.ConfigManager.get_model_name)
    * [get\_base\_url](#spoon_ai.utils.config_manager.ConfigManager.get_base_url)
    * [get\_llm\_provider](#spoon_ai.utils.config_manager.ConfigManager.get_llm_provider)

<a id="spoon_ai.utils.config_manager"></a>

# Module `spoon_ai.utils.config_manager`

<a id="spoon_ai.utils.config_manager.ConfigManager"></a>

## `ConfigManager` Objects

```python
class ConfigManager()
```

Environment-based configuration helper for core usage.

<a id="spoon_ai.utils.config_manager.ConfigManager.__init__"></a>

#### `__init__`

```python
def __init__() -> None
```

Initialize manager with environment-backed cache.

<a id="spoon_ai.utils.config_manager.ConfigManager.refresh"></a>

#### `refresh`

```python
def refresh() -> None
```

Reload configuration snapshot from environment variables.

<a id="spoon_ai.utils.config_manager.ConfigManager.get"></a>

#### `get`

```python
def get(key: str, default: Any = None) -> Any
```

Get configuration item from environment snapshot.

<a id="spoon_ai.utils.config_manager.ConfigManager.set"></a>

#### `set`

```python
def set(key: str, value: Any) -> None
```

Set configuration item by exporting to environment variables.

<a id="spoon_ai.utils.config_manager.ConfigManager.list_config"></a>

#### `list_config`

```python
def list_config() -> Dict[str, Any]
```

List configuration snapshot without persisting secrets.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_api_key"></a>

#### `get_api_key`

```python
def get_api_key(provider: str) -> Optional[str]
```

Get API key for specified provider with environment priority.

<a id="spoon_ai.utils.config_manager.ConfigManager.set_api_key"></a>

#### `set_api_key`

```python
def set_api_key(provider: str, api_key: str) -> None
```

Set API key by exporting to environment variables.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_model_name"></a>

#### `get_model_name`

```python
def get_model_name() -> Optional[str]
```

Get model name override from environment.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_base_url"></a>

#### `get_base_url`

```python
def get_base_url() -> Optional[str]
```

Get base URL override from environment.

<a id="spoon_ai.utils.config_manager.ConfigManager.get_llm_provider"></a>

#### `get_llm_provider`

```python
def get_llm_provider() -> Optional[str]
```

Determine LLM provider from environment variables.

