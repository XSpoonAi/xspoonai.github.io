---
id: spoon_ai.tools.mcp_tool
slug: /api-reference/spoon_ai/tools/mcp_tool.md
title: spoon_ai.tools.mcp_tool
---

# Table of Contents

* [spoon\_ai.tools.mcp\_tool](#spoon_ai.tools.mcp_tool)
  * [MCPTool](#spoon_ai.tools.mcp_tool.MCPTool)
    * [call\_mcp\_tool](#spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool)
    * [list\_available\_tools](#spoon_ai.tools.mcp_tool.MCPTool.list_available_tools)

<a id="spoon_ai.tools.mcp_tool"></a>

# Module `spoon_ai.tools.mcp_tool`

<a id="spoon_ai.tools.mcp_tool.MCPTool"></a>

## `MCPTool` Objects

```python
class MCPTool(BaseTool, MCPClientMixin)
```

<a id="spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool"></a>

#### `call_mcp_tool`

```python
async def call_mcp_tool(tool_name: str, **kwargs)
```

Override the mixin method to add tool-specific error handling.

<a id="spoon_ai.tools.mcp_tool.MCPTool.list_available_tools"></a>

#### `list_available_tools`

```python
async def list_available_tools() -> list
```

List available tools from the MCP server.

