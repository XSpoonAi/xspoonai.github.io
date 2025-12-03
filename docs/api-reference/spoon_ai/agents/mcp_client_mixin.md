---
id: spoon_ai.agents.mcp_client_mixin
slug: /api-reference/spoon_ai/agents/mcp_client_mixin.md
title: spoon_ai.agents.mcp_client_mixin
---

# Table of Contents

* [spoon\_ai.agents.mcp\_client\_mixin](#spoon_ai.agents.mcp_client_mixin)
  * [MCPClientMixin](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin)
    * [get\_session](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session)
    * [list\_mcp\_tools](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools)
    * [call\_mcp\_tool](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool)
    * [send\_mcp\_message](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message)
    * [cleanup](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup)
    * [get\_session\_stats](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats)

<a id="spoon_ai.agents.mcp_client_mixin"></a>

# Module `spoon_ai.agents.mcp_client_mixin`

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin"></a>

## `MCPClientMixin` Objects

```python
class MCPClientMixin()
```

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session"></a>

#### `get_session`

```python
@asynccontextmanager
async def get_session()
```

Get a session with robust resource management and cleanup.

Features:
- Automatic session reuse per task
- Resource limits to prevent exhaustion
- Proper cleanup on cancellation/failure
- Periodic cleanup of stale sessions

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools"></a>

#### `list_mcp_tools`

```python
async def list_mcp_tools()
```

Get the list of available tools from the MCP server

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool"></a>

#### `call_mcp_tool`

```python
async def call_mcp_tool(tool_name: str, **kwargs)
```

Call a tool on the MCP server

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message"></a>

#### `send_mcp_message`

```python
async def send_mcp_message(recipient: str,
                           message: Union[str, Dict[str, Any]],
                           topic: Optional[str] = None,
                           metadata: Optional[Dict[str, Any]] = None) -> bool
```

Send a message to the MCP system

**Arguments**:

- `recipient` - Recipient ID
- `message` - Message content (string or dictionary)
- `topic` - Message topic
- `metadata` - Additional metadata
  

**Returns**:

- `bool` - Whether the message was sent successfully

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup"></a>

#### `cleanup`

```python
async def cleanup()
```

Enhanced cleanup method with comprehensive resource cleanup.

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats"></a>

#### `get_session_stats`

```python
def get_session_stats() -> Dict[str, Any]
```

Get session statistics for monitoring.

