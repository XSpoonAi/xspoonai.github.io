---
id: spoon_ai.tools.crypto_tools
slug: /api-reference/spoon_ai/tools/crypto_tools.md
title: spoon_ai.tools.crypto_tools
---

# Table of Contents

* [spoon\_ai.tools.crypto\_tools](#spoon_ai.tools.crypto_tools)
  * [get\_crypto\_tools](#spoon_ai.tools.crypto_tools.get_crypto_tools)
  * [create\_crypto\_tool\_manager](#spoon_ai.tools.crypto_tools.create_crypto_tool_manager)
  * [get\_crypto\_tool\_names](#spoon_ai.tools.crypto_tools.get_crypto_tool_names)
  * [add\_crypto\_tools\_to\_manager](#spoon_ai.tools.crypto_tools.add_crypto_tools_to_manager)
  * [CryptoToolsConfig](#spoon_ai.tools.crypto_tools.CryptoToolsConfig)
    * [get\_available\_tools](#spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_available_tools)
    * [get\_tools\_requiring\_config](#spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_tools_requiring_config)

<a id="spoon_ai.tools.crypto_tools"></a>

# Module `spoon_ai.tools.crypto_tools`

Crypto Tools Integration Module

This module provides integration of spoon-toolkit crypto tools as core tools
for the spoon-core chat functionality.

<a id="spoon_ai.tools.crypto_tools.get_crypto_tools"></a>

#### `get_crypto_tools`

```python
def get_crypto_tools() -> List[BaseTool]
```

Import and return all available crypto tools from spoon-toolkit.

**Returns**:

- `List[BaseTool]` - List of instantiated crypto tools

<a id="spoon_ai.tools.crypto_tools.create_crypto_tool_manager"></a>

#### `create_crypto_tool_manager`

```python
def create_crypto_tool_manager() -> ToolManager
```

Create a ToolManager instance with all crypto tools loaded.

**Returns**:

- `ToolManager` - Tool manager with crypto tools

<a id="spoon_ai.tools.crypto_tools.get_crypto_tool_names"></a>

#### `get_crypto_tool_names`

```python
def get_crypto_tool_names() -> List[str]
```

Get list of available crypto tool names.

**Returns**:

- `List[str]` - List of crypto tool names

<a id="spoon_ai.tools.crypto_tools.add_crypto_tools_to_manager"></a>

#### `add_crypto_tools_to_manager`

```python
def add_crypto_tools_to_manager(tool_manager: ToolManager) -> ToolManager
```

Add crypto tools to an existing ToolManager instance.

**Arguments**:

- `tool_manager` _ToolManager_ - Existing tool manager
  

**Returns**:

- `ToolManager` - Updated tool manager with crypto tools

<a id="spoon_ai.tools.crypto_tools.CryptoToolsConfig"></a>

## `CryptoToolsConfig` Objects

```python
class CryptoToolsConfig()
```

Configuration class for crypto tools integration

<a id="spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_available_tools"></a>

#### `get_available_tools`

```python
@classmethod
def get_available_tools(cls) -> List[str]
```

Get list of available crypto tool names

<a id="spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_tools_requiring_config"></a>

#### `get_tools_requiring_config`

```python
@classmethod
def get_tools_requiring_config(cls) -> List[str]
```

Get list of tools that may require additional configuration

