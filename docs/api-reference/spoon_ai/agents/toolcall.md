---
id: spoon_ai.agents.toolcall
slug: /api-reference/spoon_ai/agents/toolcall
title: spoon_ai.agents.toolcall
---

# Table of Contents

* [spoon\_ai.agents.toolcall](#spoon_ai.agents.toolcall)
  * [ToolCallAgent](#spoon_ai.agents.toolcall.ToolCallAgent)
    * [tool\_choices](#spoon_ai.agents.toolcall.ToolCallAgent.tool_choices)
    * [mcp\_tools\_cache\_ttl](#spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl)
    * [run](#spoon_ai.agents.toolcall.ToolCallAgent.run)
    * [step](#spoon_ai.agents.toolcall.ToolCallAgent.step)
    * [execute\_tool](#spoon_ai.agents.toolcall.ToolCallAgent.execute_tool)

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
async def run(request: Optional[str] = None,
              timeout: Optional[float] = None) -> str
```

This ensures:
1. Thread-safe execution (no concurrent runs)
2. Proper timeout handling
3. Plan/Reflect/Finish phases are executed
4. Middleware hooks are called correctly

<a id="spoon_ai.agents.toolcall.ToolCallAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Override the step method to handle finish_reason termination properly.

<a id="spoon_ai.agents.toolcall.ToolCallAgent.execute_tool"></a>

#### `execute_tool`

```python
async def execute_tool(tool_call: ToolCall) -> str
```

Execute tool with middleware wrapping.

CRITICAL: This method now routes ALL tool executions through the middleware
pipeline, enabling HITL approval, observability, and other middleware features.

