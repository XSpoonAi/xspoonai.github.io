---
id: spoon_ai.tools.toolkit_integration
slug: /api-reference/spoon_ai/tools/toolkit_integration.md
title: spoon_ai.tools.toolkit_integration
---

# Table of Contents

* [spoon\_ai.tools.toolkit\_integration](#spoon_ai.tools.toolkit_integration)
  * [get\_all\_toolkit\_tools](#spoon_ai.tools.toolkit_integration.get_all_toolkit_tools)
  * [get\_crypto\_tools](#spoon_ai.tools.toolkit_integration.get_crypto_tools)
  * [get\_security\_tools](#spoon_ai.tools.toolkit_integration.get_security_tools)
  * [get\_data\_platform\_tools](#spoon_ai.tools.toolkit_integration.get_data_platform_tools)
  * [get\_storage\_tools](#spoon_ai.tools.toolkit_integration.get_storage_tools)
  * [get\_social\_media\_tools](#spoon_ai.tools.toolkit_integration.get_social_media_tools)
  * [create\_comprehensive\_tool\_manager](#spoon_ai.tools.toolkit_integration.create_comprehensive_tool_manager)
  * [add\_all\_toolkit\_tools\_to\_manager](#spoon_ai.tools.toolkit_integration.add_all_toolkit_tools_to_manager)
  * [ToolkitConfig](#spoon_ai.tools.toolkit_integration.ToolkitConfig)
    * [get\_tools\_by\_category](#spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_by_category)
    * [get\_all\_categories](#spoon_ai.tools.toolkit_integration.ToolkitConfig.get_all_categories)
    * [get\_tools\_requiring\_config](#spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_requiring_config)

<a id="spoon_ai.tools.toolkit_integration"></a>

# Module `spoon_ai.tools.toolkit_integration`

Comprehensive Toolkit Integration Module

This module provides integration of all spoon-toolkit tools as core tools
for the spoon-core chat functionality, including crypto, security, data platforms,
storage, and social media tools.

<a id="spoon_ai.tools.toolkit_integration.get_all_toolkit_tools"></a>

#### `get_all_toolkit_tools`

```python
def get_all_toolkit_tools() -> List[BaseTool]
```

Import and return all available tools from spoon-toolkit.

**Returns**:

- `List[BaseTool]` - List of instantiated tools from all modules

<a id="spoon_ai.tools.toolkit_integration.get_crypto_tools"></a>

#### `get_crypto_tools`

```python
def get_crypto_tools() -> List[BaseTool]
```

Import crypto tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_security_tools"></a>

#### `get_security_tools`

```python
def get_security_tools() -> List[BaseTool]
```

Import security tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_data_platform_tools"></a>

#### `get_data_platform_tools`

```python
def get_data_platform_tools() -> List[BaseTool]
```

Import data platform tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_storage_tools"></a>

#### `get_storage_tools`

```python
def get_storage_tools() -> List[BaseTool]
```

Import storage tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_social_media_tools"></a>

#### `get_social_media_tools`

```python
def get_social_media_tools() -> List[BaseTool]
```

Import social media tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.create_comprehensive_tool_manager"></a>

#### `create_comprehensive_tool_manager`

```python
def create_comprehensive_tool_manager() -> ToolManager
```

Create a ToolManager instance with all toolkit tools loaded.

**Returns**:

- `ToolManager` - Tool manager with all toolkit tools

<a id="spoon_ai.tools.toolkit_integration.add_all_toolkit_tools_to_manager"></a>

#### `add_all_toolkit_tools_to_manager`

```python
def add_all_toolkit_tools_to_manager(tool_manager: ToolManager) -> ToolManager
```

Add all toolkit tools to an existing ToolManager instance.

**Arguments**:

- `tool_manager` _ToolManager_ - Existing tool manager
  

**Returns**:

- `ToolManager` - Updated tool manager with all toolkit tools

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig"></a>

## `ToolkitConfig` Objects

```python
class ToolkitConfig()
```

Configuration class for comprehensive toolkit integration

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_by_category"></a>

#### `get_tools_by_category`

```python
@classmethod
def get_tools_by_category(cls, category: str) -> List[str]
```

Get list of tools in a specific category

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig.get_all_categories"></a>

#### `get_all_categories`

```python
@classmethod
def get_all_categories(cls) -> List[str]
```

Get list of all available tool categories

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_requiring_config"></a>

#### `get_tools_requiring_config`

```python
@classmethod
def get_tools_requiring_config(cls) -> List[str]
```

Get list of tools that require additional configuration

