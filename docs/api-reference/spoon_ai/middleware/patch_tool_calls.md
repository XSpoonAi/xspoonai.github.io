---
id: spoon_ai.middleware.patch_tool_calls
slug: /api-reference/spoon_ai/middleware/patch_tool_calls
title: spoon_ai.middleware.patch_tool_calls
---

# Table of Contents

* [spoon\_ai.middleware.patch\_tool\_calls](#spoon_ai.middleware.patch_tool_calls)
  * [PatchToolCallsMiddleware](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.__init__)
    * [before\_agent](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.before_agent)
    * [awrap\_model\_call](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.get_stats)
  * [create\_patch\_tool\_calls\_middleware](#spoon_ai.middleware.patch_tool_calls.create_patch_tool_calls_middleware)

<a id="spoon_ai.middleware.patch_tool_calls"></a>

# Module `spoon_ai.middleware.patch_tool_calls`

PatchToolCalls Middleware - Fix Dangling Tool Calls.

Patches message history to handle dangling tool calls that occur when:
- HITL (Human-in-the-Loop) interrupts tool execution
- Errors cause tool execution to be skipped
- Agent is resumed from a checkpoint mid-execution

Compatible with LangChain DeepAgents PatchToolCallsMiddleware interface.

Usage:
    from spoon_ai.middleware.patch_tool_calls import PatchToolCallsMiddleware

    agent = ToolCallAgent(
        middleware=[PatchToolCallsMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware"></a>

## `PatchToolCallsMiddleware` Objects

```python
class PatchToolCallsMiddleware(AgentMiddleware)
```

Middleware to patch dangling tool calls in message history.

A "dangling tool call" occurs when an AI message contains tool_calls
but there's no corresponding tool response message. This violates
the OpenAI/Anthropic API requirements and causes errors.

This middleware:
1. Scans message history for AI messages with tool_calls
2. Checks if each tool call has a corresponding tool response
3. Injects synthetic tool response messages for any missing ones

Common causes of dangling tool calls:
- HITL approval flow rejects or edits a tool call
- Error during tool execution before response is added
- Agent resumed from checkpoint mid-execution
- Network timeout during tool execution

**Example**:

    ```python
    from spoon_ai.middleware.patch_tool_calls import PatchToolCallsMiddleware

    middleware = PatchToolCallsMiddleware()

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(cancelled_message_template: Optional[str] = None,
             log_patches: bool = True)
```

Initialize PatchToolCalls middleware.

**Arguments**:

- `cancelled_message_template` - Custom message template for cancelled tools.
  Must contain &#123;tool_name&#125; and &#123;tool_call_id&#125; placeholders.
- `log_patches` - Whether to log when patches are applied (default: True)

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Patch dangling tool calls when agent starts.

This handles cases where agent is resumed from a checkpoint
with incomplete tool execution.

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Patch dangling tool calls before model call.

<a id="spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, int]
```

Get patching statistics.

<a id="spoon_ai.middleware.patch_tool_calls.create_patch_tool_calls_middleware"></a>

#### `create_patch_tool_calls_middleware`

```python
def create_patch_tool_calls_middleware(
        log_patches: bool = True) -> PatchToolCallsMiddleware
```

Create a PatchToolCalls middleware.

**Arguments**:

- `log_patches` - Whether to log when patches are applied
  

**Returns**:

  Configured PatchToolCallsMiddleware

