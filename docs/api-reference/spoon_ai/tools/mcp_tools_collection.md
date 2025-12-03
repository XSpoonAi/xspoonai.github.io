---
id: spoon_ai.tools.mcp_tools_collection
slug: /api-reference/spoon_ai/tools/mcp_tools_collection.md
title: spoon_ai.tools.mcp_tools_collection
---

# Table of Contents

* [spoon\_ai.tools.mcp\_tools\_collection](#spoon_ai.tools.mcp_tools_collection)
  * [MCPToolsCollection](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection)
    * [\_\_init\_\_](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.__init__)
    * [run](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.run)
    * [add\_tool](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.add_tool)

<a id="spoon_ai.tools.mcp_tools_collection"></a>

# Module `spoon_ai.tools.mcp_tools_collection`

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection"></a>

## `MCPToolsCollection` Objects

```python
class MCPToolsCollection()
```

Collection class that wraps existing tools as MCP tools

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.__init__"></a>

#### `__init__`

```python
def __init__()
```

Initialize MCP tools collection

**Arguments**:

- `name` - Name of the MCP server

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.run"></a>

#### `run`

```python
async def run(**kwargs)
```

Start the MCP server

**Arguments**:

- `**kwargs` - Parameters passed to FastMCP.run()

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.add_tool"></a>

#### `add_tool`

```python
async def add_tool(tool: BaseTool)
```

Add a tool to the MCP server

