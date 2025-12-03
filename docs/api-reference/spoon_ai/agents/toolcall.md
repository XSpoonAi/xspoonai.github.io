---
id: spoon_ai.agents.toolcall
slug: /api-reference/spoon_ai/agents/toolcall.md
title: spoon_ai.agents.toolcall
---

# Table of Contents

* [spoon\_ai.agents.toolcall](#spoon_ai.agents.toolcall)
  * [ToolCallAgent](#spoon_ai.agents.toolcall.ToolCallAgent)
    * [tool\_choices](#spoon_ai.agents.toolcall.ToolCallAgent.tool_choices)
    * [mcp\_tools\_cache\_ttl](#spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl)
    * [run](#spoon_ai.agents.toolcall.ToolCallAgent.run)
    * [step](#spoon_ai.agents.toolcall.ToolCallAgent.step)

<a id="spoon_ai.agents.toolcall"></a>

# Module `spoon_ai.agents.toolcall`

<a id="spoon_ai.agents.toolcall.ToolCallAgent"></a>

## `ToolCallAgent` Objects

```python
class ToolCallAgent(ReActAgent)
```

<a id="spoon_ai.agents.toolcall.ToolCallAgent.tool_choices"></a>

#### `tool_choices`

type: ignore

<a id="spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl"></a>

#### `mcp_tools_cache_ttl`

5 minutes TTL

<a id="spoon_ai.agents.toolcall.ToolCallAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Override run method to handle finish_reason termination specially.

<a id="spoon_ai.agents.toolcall.ToolCallAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Override the step method to handle finish_reason termination properly.

