---
id: spoon_ai.tools.mcp_tool
slug: /api-reference/spoon_ai/tools/mcp_tool
title: spoon_ai.tools.mcp_tool
---

# Table of Contents

* [spoon\_ai.tools.mcp\_tool](#spoon_ai.tools.mcp_tool)
  * [MCPTool](#spoon_ai.tools.mcp_tool.MCPTool)
    * [call\_mcp\_tool](#spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool)
    * [expand\_server\_tools](#spoon_ai.tools.mcp_tool.MCPTool.expand_server_tools)
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

<a id="spoon_ai.tools.mcp_tool.MCPTool.expand_server_tools"></a>

#### `expand_server_tools`

```python
async def expand_server_tools() -> List["MCPTool"]
```

Expand this single MCPTool (one-per-server) into one MCPTool per
real server tool.  Each returned tool shares the same MCP transport
config and delegates execution to ``call_mcp_tool(real_name)``.

If the server is unreachable or returns no tools, an empty list is
returned (callers should keep the original proxy as fallback).

**Returns**:

  List of MCPTool instances, one per discovered server tool.

<a id="spoon_ai.tools.mcp_tool.MCPTool.list_available_tools"></a>

#### `list_available_tools`

```python
async def list_available_tools() -> list
```

List available tools from the MCP server.

