---
id: spoon_ai.agents.custom_agent
slug: /api-reference/spoon_ai/agents/custom_agent.md
title: spoon_ai.agents.custom_agent
---

# Table of Contents

* [spoon\_ai.agents.custom\_agent](#spoon_ai.agents.custom_agent)
  * [CustomAgent](#spoon_ai.agents.custom_agent.CustomAgent)
    * [add\_tool](#spoon_ai.agents.custom_agent.CustomAgent.add_tool)
    * [add\_tools](#spoon_ai.agents.custom_agent.CustomAgent.add_tools)
    * [remove\_tool](#spoon_ai.agents.custom_agent.CustomAgent.remove_tool)
    * [list\_tools](#spoon_ai.agents.custom_agent.CustomAgent.list_tools)
    * [get\_tool\_info](#spoon_ai.agents.custom_agent.CustomAgent.get_tool_info)
    * [validate\_tools](#spoon_ai.agents.custom_agent.CustomAgent.validate_tools)
    * [run](#spoon_ai.agents.custom_agent.CustomAgent.run)
    * [clear](#spoon_ai.agents.custom_agent.CustomAgent.clear)

<a id="spoon_ai.agents.custom_agent"></a>

# Module `spoon_ai.agents.custom_agent`

<a id="spoon_ai.agents.custom_agent.CustomAgent"></a>

## `CustomAgent` Objects

```python
class CustomAgent(ToolCallAgent)
```

Custom Agent class allowing users to create their own agents and add custom tools

Usage:
Create custom agent and add tools:
   agent = CustomAgent(name="my_agent", description="My custom agent")
   agent.add_tool(MyCustomTool())
   result = await agent.run("Use my custom tool")

<a id="spoon_ai.agents.custom_agent.CustomAgent.add_tool"></a>

#### `add_tool`

```python
def add_tool(tool: BaseTool) -> None
```

Add a tool to the agent with validation.

**Arguments**:

- `tool` - Tool instance to add
  

**Raises**:

- `ValueError` - If tool is invalid or already exists

<a id="spoon_ai.agents.custom_agent.CustomAgent.add_tools"></a>

#### `add_tools`

```python
def add_tools(tools: List[BaseTool]) -> None
```

Add multiple tools to the agent with atomic operation.

**Arguments**:

- `tools` - List of tool instances to add
  

**Raises**:

- `ValueError` - If any tool is invalid

<a id="spoon_ai.agents.custom_agent.CustomAgent.remove_tool"></a>

#### `remove_tool`

```python
def remove_tool(tool_name: str) -> bool
```

Remove a tool from the agent.

**Arguments**:

- `tool_name` - Name of the tool to remove
  

**Returns**:

- `bool` - True if tool was removed, False if not found

<a id="spoon_ai.agents.custom_agent.CustomAgent.list_tools"></a>

#### `list_tools`

```python
def list_tools() -> List[str]
```

List all available tools in the agent.

**Returns**:

  List of tool names, empty list if no tools

<a id="spoon_ai.agents.custom_agent.CustomAgent.get_tool_info"></a>

#### `get_tool_info`

```python
def get_tool_info() -> Dict[str, Dict[str, Any]]
```

Get detailed information about all tools.

**Returns**:

  Dictionary with tool names as keys and tool info as values

<a id="spoon_ai.agents.custom_agent.CustomAgent.validate_tools"></a>

#### `validate_tools`

```python
def validate_tools() -> Dict[str, Any]
```

Validate all current tools and return validation report.

**Returns**:

  Dictionary with validation results

<a id="spoon_ai.agents.custom_agent.CustomAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Run the agent with enhanced tool validation.

**Arguments**:

- `request` - User request
  

**Returns**:

  Processing result

<a id="spoon_ai.agents.custom_agent.CustomAgent.clear"></a>

#### `clear`

```python
def clear()
```

Enhanced clear method with proper tool state management.

