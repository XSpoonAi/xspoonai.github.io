---
id: spoon_ai.middleware
slug: /api-reference/spoon_ai/middleware//index
title: spoon_ai.middleware
---

# Table of Contents

* [spoon\_ai.middleware](#spoon_ai.middleware)
* [spoon\_ai.middleware.prompt\_caching](#spoon_ai.middleware.prompt_caching)
  * [is\_anthropic\_model](#spoon_ai.middleware.prompt_caching.is_anthropic_model)
  * [add\_cache\_control](#spoon_ai.middleware.prompt_caching.add_cache_control)
  * [should\_cache\_content](#spoon_ai.middleware.prompt_caching.should_cache_content)
  * [AnthropicPromptCachingMiddleware](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.__init__)
    * [awrap\_model\_call](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.get_stats)
  * [create\_prompt\_caching\_middleware](#spoon_ai.middleware.prompt_caching.create_prompt_caching_middleware)
* [spoon\_ai.middleware.patch\_tool\_calls](#spoon_ai.middleware.patch_tool_calls)
  * [PatchToolCallsMiddleware](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.__init__)
    * [before\_agent](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.before_agent)
    * [awrap\_model\_call](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.patch_tool_calls.PatchToolCallsMiddleware.get_stats)
  * [create\_patch\_tool\_calls\_middleware](#spoon_ai.middleware.patch_tool_calls.create_patch_tool_calls_middleware)
* [spoon\_ai.middleware.todolist](#spoon_ai.middleware.todolist)
  * [TodoStatus](#spoon_ai.middleware.todolist.TodoStatus)
  * [TodoItem](#spoon_ai.middleware.todolist.TodoItem)
  * [TodoList](#spoon_ai.middleware.todolist.TodoList)
    * [format\_display](#spoon_ai.middleware.todolist.TodoList.format_display)
  * [WriteTodosTool](#spoon_ai.middleware.todolist.WriteTodosTool)
    * [execute](#spoon_ai.middleware.todolist.WriteTodosTool.execute)
  * [ReadTodosTool](#spoon_ai.middleware.todolist.ReadTodosTool)
    * [execute](#spoon_ai.middleware.todolist.ReadTodosTool.execute)
  * [TodoListMiddleware](#spoon_ai.middleware.todolist.TodoListMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.todolist.TodoListMiddleware.__init__)
    * [tools](#spoon_ai.middleware.todolist.TodoListMiddleware.tools)
    * [system\_prompt](#spoon_ai.middleware.todolist.TodoListMiddleware.system_prompt)
    * [todo\_list](#spoon_ai.middleware.todolist.TodoListMiddleware.todo_list)
    * [get\_todos\_state](#spoon_ai.middleware.todolist.TodoListMiddleware.get_todos_state)
    * [restore\_todos\_state](#spoon_ai.middleware.todolist.TodoListMiddleware.restore_todos_state)
    * [awrap\_model\_call](#spoon_ai.middleware.todolist.TodoListMiddleware.awrap_model_call)
    * [before\_agent](#spoon_ai.middleware.todolist.TodoListMiddleware.before_agent)
    * [after\_agent](#spoon_ai.middleware.todolist.TodoListMiddleware.after_agent)
* [spoon\_ai.middleware.summarization](#spoon_ai.middleware.summarization)
  * [ContextFraction](#spoon_ai.middleware.summarization.ContextFraction)
  * [ContextTokens](#spoon_ai.middleware.summarization.ContextTokens)
  * [ContextMessages](#spoon_ai.middleware.summarization.ContextMessages)
  * [ContextSize](#spoon_ai.middleware.summarization.ContextSize)
  * [count\_tokens\_approximately](#spoon_ai.middleware.summarization.count_tokens_approximately)
  * [RemoveMessage](#spoon_ai.middleware.summarization.RemoveMessage)
  * [SummarizationMiddleware](#spoon_ai.middleware.summarization.SummarizationMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.summarization.SummarizationMiddleware.__init__)
    * [awrap\_model\_call](#spoon_ai.middleware.summarization.SummarizationMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.summarization.SummarizationMiddleware.get_stats)
  * [create\_summarization\_middleware](#spoon_ai.middleware.summarization.create_summarization_middleware)
* [spoon\_ai.middleware.planning](#spoon_ai.middleware.planning)
  * [PlanStep](#spoon_ai.middleware.planning.PlanStep)
    * [status](#spoon_ai.middleware.planning.PlanStep.status)
    * [mark\_started](#spoon_ai.middleware.planning.PlanStep.mark_started)
    * [mark\_completed](#spoon_ai.middleware.planning.PlanStep.mark_completed)
    * [mark\_skipped](#spoon_ai.middleware.planning.PlanStep.mark_skipped)
  * [Plan](#spoon_ai.middleware.planning.Plan)
    * [add\_step](#spoon_ai.middleware.planning.Plan.add_step)
    * [get\_current\_step](#spoon_ai.middleware.planning.Plan.get_current_step)
    * [advance](#spoon_ai.middleware.planning.Plan.advance)
    * [is\_complete](#spoon_ai.middleware.planning.Plan.is_complete)
    * [get\_progress](#spoon_ai.middleware.planning.Plan.get_progress)
    * [to\_string](#spoon_ai.middleware.planning.Plan.to_string)
  * [PlanningMiddleware](#spoon_ai.middleware.planning.PlanningMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.planning.PlanningMiddleware.__init__)
    * [before\_agent](#spoon_ai.middleware.planning.PlanningMiddleware.before_agent)
    * [on\_plan\_phase](#spoon_ai.middleware.planning.PlanningMiddleware.on_plan_phase)
    * [awrap\_model\_call](#spoon_ai.middleware.planning.PlanningMiddleware.awrap_model_call)
    * [on\_reflect\_phase](#spoon_ai.middleware.planning.PlanningMiddleware.on_reflect_phase)
    * [on\_finish\_phase](#spoon_ai.middleware.planning.PlanningMiddleware.on_finish_phase)
    * [get\_current\_plan](#spoon_ai.middleware.planning.PlanningMiddleware.get_current_plan)
    * [set\_plan](#spoon_ai.middleware.planning.PlanningMiddleware.set_plan)
  * [create\_planning\_middleware](#spoon_ai.middleware.planning.create_planning_middleware)
* [spoon\_ai.middleware.filesystem](#spoon_ai.middleware.filesystem)
  * [validate\_path](#spoon_ai.middleware.filesystem.validate_path)
  * [LsTool](#spoon_ai.middleware.filesystem.LsTool)
  * [ReadFileTool](#spoon_ai.middleware.filesystem.ReadFileTool)
  * [WriteFileTool](#spoon_ai.middleware.filesystem.WriteFileTool)
  * [EditFileTool](#spoon_ai.middleware.filesystem.EditFileTool)
  * [GlobTool](#spoon_ai.middleware.filesystem.GlobTool)
  * [GrepTool](#spoon_ai.middleware.filesystem.GrepTool)
  * [ExecuteTool](#spoon_ai.middleware.filesystem.ExecuteTool)
  * [get\_filesystem\_tools](#spoon_ai.middleware.filesystem.get_filesystem_tools)
  * [FilesystemMiddleware](#spoon_ai.middleware.filesystem.FilesystemMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.filesystem.FilesystemMiddleware.__init__)
    * [tools](#spoon_ai.middleware.filesystem.FilesystemMiddleware.tools)
    * [system\_prompt](#spoon_ai.middleware.filesystem.FilesystemMiddleware.system_prompt)
    * [backend](#spoon_ai.middleware.filesystem.FilesystemMiddleware.backend)
    * [awrap\_model\_call](#spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_model_call)
    * [awrap\_tool\_call](#spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_tool_call)
  * [create\_filesystem\_middleware](#spoon_ai.middleware.filesystem.create_filesystem_middleware)
  * [create\_sandbox\_backend](#spoon_ai.middleware.filesystem.create_sandbox_backend)
  * [LocalSandboxBackend](#spoon_ai.middleware.filesystem.LocalSandboxBackend)
    * [execute](#spoon_ai.middleware.filesystem.LocalSandboxBackend.execute)
    * [aexecute](#spoon_ai.middleware.filesystem.LocalSandboxBackend.aexecute)
* [spoon\_ai.middleware.base](#spoon_ai.middleware.base)
  * [AgentPhase](#spoon_ai.middleware.base.AgentPhase)
    * [PLAN](#spoon_ai.middleware.base.AgentPhase.PLAN)
    * [THINK](#spoon_ai.middleware.base.AgentPhase.THINK)
    * [ACT](#spoon_ai.middleware.base.AgentPhase.ACT)
    * [OBSERVE](#spoon_ai.middleware.base.AgentPhase.OBSERVE)
    * [REFLECT](#spoon_ai.middleware.base.AgentPhase.REFLECT)
    * [FINISH](#spoon_ai.middleware.base.AgentPhase.FINISH)
  * [AgentRuntime](#spoon_ai.middleware.base.AgentRuntime)
    * [get\_state](#spoon_ai.middleware.base.AgentRuntime.get_state)
    * [set\_state](#spoon_ai.middleware.base.AgentRuntime.set_state)
    * [update\_state](#spoon_ai.middleware.base.AgentRuntime.update_state)
    * [get\_last\_message](#spoon_ai.middleware.base.AgentRuntime.get_last_message)
  * [ModelRequest](#spoon_ai.middleware.base.ModelRequest)
    * [override](#spoon_ai.middleware.base.ModelRequest.override)
    * [append\_to\_system\_prompt](#spoon_ai.middleware.base.ModelRequest.append_to_system_prompt)
    * [add\_tool](#spoon_ai.middleware.base.ModelRequest.add_tool)
  * [ModelResponse](#spoon_ai.middleware.base.ModelResponse)
  * [ToolCallRequest](#spoon_ai.middleware.base.ToolCallRequest)
  * [ToolCallResult](#spoon_ai.middleware.base.ToolCallResult)
    * [success](#spoon_ai.middleware.base.ToolCallResult.success)
    * [from\_string](#spoon_ai.middleware.base.ToolCallResult.from_string)
    * [from\_error](#spoon_ai.middleware.base.ToolCallResult.from_error)
  * [PhaseHook](#spoon_ai.middleware.base.PhaseHook)
    * [\_\_call\_\_](#spoon_ai.middleware.base.PhaseHook.__call__)
  * [AgentMiddleware](#spoon_ai.middleware.base.AgentMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.base.AgentMiddleware.__init__)
    * [wrap\_model\_call](#spoon_ai.middleware.base.AgentMiddleware.wrap_model_call)
    * [awrap\_model\_call](#spoon_ai.middleware.base.AgentMiddleware.awrap_model_call)
    * [wrap\_tool\_call](#spoon_ai.middleware.base.AgentMiddleware.wrap_tool_call)
    * [awrap\_tool\_call](#spoon_ai.middleware.base.AgentMiddleware.awrap_tool_call)
    * [before\_agent](#spoon_ai.middleware.base.AgentMiddleware.before_agent)
    * [after\_agent](#spoon_ai.middleware.base.AgentMiddleware.after_agent)
    * [on\_plan\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_plan_phase)
    * [on\_think\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_think_phase)
    * [on\_act\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_act_phase)
    * [on\_observe\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_observe_phase)
    * [on\_reflect\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_reflect_phase)
    * [on\_finish\_phase](#spoon_ai.middleware.base.AgentMiddleware.on_finish_phase)
    * [register\_phase\_hook](#spoon_ai.middleware.base.AgentMiddleware.register_phase_hook)
    * [get\_phase\_hook](#spoon_ai.middleware.base.AgentMiddleware.get_phase_hook)
  * [MiddlewarePipeline](#spoon_ai.middleware.base.MiddlewarePipeline)
    * [\_\_init\_\_](#spoon_ai.middleware.base.MiddlewarePipeline.__init__)
    * [wrap\_model\_call](#spoon_ai.middleware.base.MiddlewarePipeline.wrap_model_call)
    * [awrap\_model\_call](#spoon_ai.middleware.base.MiddlewarePipeline.awrap_model_call)
    * [wrap\_tool\_call](#spoon_ai.middleware.base.MiddlewarePipeline.wrap_tool_call)
    * [awrap\_tool\_call](#spoon_ai.middleware.base.MiddlewarePipeline.awrap_tool_call)
    * [execute\_before\_agent](#spoon_ai.middleware.base.MiddlewarePipeline.execute_before_agent)
    * [execute\_after\_agent](#spoon_ai.middleware.base.MiddlewarePipeline.execute_after_agent)
    * [execute\_phase\_hook](#spoon_ai.middleware.base.MiddlewarePipeline.execute_phase_hook)
    * [collect\_tools](#spoon_ai.middleware.base.MiddlewarePipeline.collect_tools)
    * [build\_system\_prompt](#spoon_ai.middleware.base.MiddlewarePipeline.build_system_prompt)
  * [create\_middleware\_pipeline](#spoon_ai.middleware.base.create_middleware_pipeline)

<a id="spoon_ai.middleware"></a>

# Module `spoon_ai.middleware`

Middleware System for Deep Agents

Provides flexible middleware architecture for:
- Plan-Act-Reflect execution cycles
- Model and tool call interception
- Agent lifecycle hooks
- Declarative tool and state injection
- Filesystem operations with 7 built-in tools
- Todo list task tracking
- Context summarization
- Dangling tool call patching
- Anthropic prompt caching

<a id="spoon_ai.middleware.prompt_caching"></a>

# Module `spoon_ai.middleware.prompt_caching`

Anthropic Prompt Caching Middleware.

Adds cache_control markers to system prompts and messages for Anthropic models,
enabling prompt caching to reduce costs and latency for repeated content.

How Anthropic Prompt Caching Works:
- Content marked with cache_control: &#123;"type": "ephemeral"&#125; is cached for ~5 minutes
- Subsequent requests within the cache window reuse the cached content
- This reduces input token costs and speeds up responses
- Only works with Claude models (claude-3-*, claude-2-*, etc.)

Compatible with LangChain DeepAgents AnthropicPromptCachingMiddleware interface.

Usage:
    from spoon_ai.middleware.prompt_caching import AnthropicPromptCachingMiddleware

    agent = ToolCallAgent(
        middleware=[AnthropicPromptCachingMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.prompt_caching.is_anthropic_model"></a>

#### `is_anthropic_model`

```python
def is_anthropic_model(model_name: Optional[str]) -> bool
```

Check if a model name indicates an Anthropic Claude model.

**Arguments**:

- `model_name` - Model identifier string
  

**Returns**:

  True if this is an Anthropic model that supports caching

<a id="spoon_ai.middleware.prompt_caching.add_cache_control"></a>

#### `add_cache_control`

```python
def add_cache_control(content: Any) -> Any
```

Add cache_control marker to content.

Anthropic expects content to be a list of content blocks, where each
block can have a cache_control field.

**Arguments**:

- `content` - Content to add cache control to (string or list of blocks)
  

**Returns**:

  Content with cache_control added

<a id="spoon_ai.middleware.prompt_caching.should_cache_content"></a>

#### `should_cache_content`

```python
def should_cache_content(content: Any) -> bool
```

Determine if content is worth caching based on length.

**Arguments**:

- `content` - Content to evaluate
  

**Returns**:

  True if content should be cached

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware"></a>

## `AnthropicPromptCachingMiddleware` Objects

```python
class AnthropicPromptCachingMiddleware(AgentMiddleware)
```

Middleware that adds cache control markers for Anthropic prompt caching.

When using Anthropic Claude models, this middleware:
1. Adds cache_control to system prompts (if long enough)
2. Optionally adds cache_control to tool definitions
3. Skips caching for non-Anthropic models

Benefits:
- Reduces input token costs for repeated content
- Speeds up response time for cached prompts
- Automatic cache invalidation after ~5 minutes

**Example**:

    ```python
    from spoon_ai.middleware.prompt_caching import AnthropicPromptCachingMiddleware

    # Basic usage - caches system prompt
    middleware = AnthropicPromptCachingMiddleware()

    # With options
    middleware = AnthropicPromptCachingMiddleware(
        cache_system_prompt=True,
        cache_tools=True,
        min_cache_length=1024,
        unsupported_model_behavior="ignore",  # or "warn"
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(cache_system_prompt: bool = True,
             cache_tools: bool = True,
             min_cache_length: int = MIN_CACHE_LENGTH,
             unsupported_model_behavior: Literal["ignore", "warn"] = "ignore")
```

Initialize Anthropic prompt caching middleware.

**Arguments**:

- `cache_system_prompt` - Whether to cache the system prompt (default: True)
- `cache_tools` - Whether to cache tool definitions (default: True)
- `min_cache_length` - Minimum content length to cache (default: 1024 chars)
- `unsupported_model_behavior` - What to do for non-Anthropic models:
  - "ignore": Silently skip caching
  - "warn": Log a warning and skip caching

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Add cache control markers before model call.

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, int]
```

Get caching statistics.

<a id="spoon_ai.middleware.prompt_caching.create_prompt_caching_middleware"></a>

#### `create_prompt_caching_middleware`

```python
def create_prompt_caching_middleware(
    cache_system_prompt: bool = True,
    cache_tools: bool = True,
    min_cache_length: int = MIN_CACHE_LENGTH,
    unsupported_model_behavior: Literal["ignore", "warn"] = "ignore"
) -> AnthropicPromptCachingMiddleware
```

Create an Anthropic prompt caching middleware.

**Arguments**:

- `cache_system_prompt` - Whether to cache system prompts
- `cache_tools` - Whether to cache tool definitions
- `min_cache_length` - Minimum content length to cache
- `unsupported_model_behavior` - How to handle non-Anthropic models
  

**Returns**:

  Configured AnthropicPromptCachingMiddleware

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

<a id="spoon_ai.middleware.todolist"></a>

# Module `spoon_ai.middleware.todolist`

TodoList Middleware - Task Planning and Progress Tracking.

Provides todo list tools to agents for structured task management:
- write_todos: Create/update todo list with tasks
- read_todos: Read current todo list state

Compatible with LangChain DeepAgents TodoListMiddleware interface.

Usage:
    from spoon_ai.middleware.todolist import TodoListMiddleware

    agent = ToolCallAgent(
        middleware=[TodoListMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.todolist.TodoStatus"></a>

## `TodoStatus` Objects

```python
class TodoStatus(str, Enum)
```

Status of a todo item.

<a id="spoon_ai.middleware.todolist.TodoItem"></a>

## `TodoItem` Objects

```python
@dataclass
class TodoItem()
```

A single todo item.

<a id="spoon_ai.middleware.todolist.TodoList"></a>

## `TodoList` Objects

```python
@dataclass
class TodoList()
```

Container for todo items.

<a id="spoon_ai.middleware.todolist.TodoList.format_display"></a>

#### `format_display`

```python
def format_display() -> str
```

Format todo list for display.

<a id="spoon_ai.middleware.todolist.WriteTodosTool"></a>

## `WriteTodosTool` Objects

```python
class WriteTodosTool(BaseTool)
```

Tool to create/update todo list.

<a id="spoon_ai.middleware.todolist.WriteTodosTool.execute"></a>

#### `execute`

```python
async def execute(todos: List[Dict[str, Any]], **kwargs) -> str
```

Update the todo list.

<a id="spoon_ai.middleware.todolist.ReadTodosTool"></a>

## `ReadTodosTool` Objects

```python
class ReadTodosTool(BaseTool)
```

Tool to read current todo list.

<a id="spoon_ai.middleware.todolist.ReadTodosTool.execute"></a>

#### `execute`

```python
async def execute(**kwargs) -> str
```

Read the current todo list.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware"></a>

## `TodoListMiddleware` Objects

```python
class TodoListMiddleware(AgentMiddleware)
```

Middleware for providing todo list tools to an agent.

Provides two tools:
- write_todos: Create/update todo list
- read_todos: Read current todo list

**Example**:

    ```python
    from spoon_ai.middleware.todolist import TodoListMiddleware

    middleware = TodoListMiddleware()

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(system_prompt: Optional[str] = None,
             auto_inject_prompt: bool = True)
```

Initialize TodoList middleware.

**Arguments**:

- `system_prompt` - Optional custom system prompt override.
- `auto_inject_prompt` - Whether to auto-inject system prompt (default: True)

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.tools"></a>

#### `tools`

```python
@property
def tools() -> List[BaseTool]
```

Get todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.system_prompt"></a>

#### `system_prompt`

```python
@property
def system_prompt() -> str
```

Get system prompt for todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.todo_list"></a>

#### `todo_list`

```python
@property
def todo_list() -> TodoList
```

Get current todo list.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.get_todos_state"></a>

#### `get_todos_state`

```python
def get_todos_state() -> Dict[str, Any]
```

Get todo list as state dict (for checkpointing).

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.restore_todos_state"></a>

#### `restore_todos_state`

```python
def restore_todos_state(state: Dict[str, Any]) -> None
```

Restore todo list from state dict.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Inject system prompt for todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Restore todo list from agent state if available.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.after_agent"></a>

#### `after_agent`

```python
def after_agent(state: Dict[str, Any],
                runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Save todo list to agent state.

<a id="spoon_ai.middleware.summarization"></a>

# Module `spoon_ai.middleware.summarization`

Summarization Middleware - Context Compression for Long Conversations.

Automatically summarizes conversation history when token limits are approached,
preserving recent messages and maintaining context continuity by ensuring
AI/Tool message pairs remain together.

Compatible with LangChain DeepAgents SummarizationMiddleware interface.

Usage:
    from spoon_ai.middleware.summarization import SummarizationMiddleware

    agent = ToolCallAgent(
        middleware=[SummarizationMiddleware(
            model=llm,
            trigger=("fraction", 0.85),  # Trigger at 85% of max tokens
            keep=("messages", 20),       # Keep last 20 messages
        )],
        ...
    )

<a id="spoon_ai.middleware.summarization.ContextFraction"></a>

#### `ContextFraction`

Fraction of model's maximum input tokens.

**Example**:

  To specify 50% of the model's max input tokens:
    ```python
    ("fraction", 0.5)
    ```

<a id="spoon_ai.middleware.summarization.ContextTokens"></a>

#### `ContextTokens`

Absolute number of tokens.

**Example**:

  To specify 3000 tokens:
    ```python
    ("tokens", 3000)
    ```

<a id="spoon_ai.middleware.summarization.ContextMessages"></a>

#### `ContextMessages`

Absolute number of messages.

**Example**:

  To specify 50 messages:
    ```python
    ("messages", 50)
    ```

<a id="spoon_ai.middleware.summarization.ContextSize"></a>

#### `ContextSize`

Union type for context size specifications.

Can be either:
- ContextFraction: A fraction of the model's maximum input tokens.
- ContextTokens: An absolute number of tokens.
- ContextMessages: An absolute number of messages.

Depending on use with `trigger` or `keep` parameters, this type indicates either
when to trigger summarization or how much context to retain.

**Example**:

    ```python
    # ContextFraction
    context_size: ContextSize = ("fraction", 0.5)

    # ContextTokens
    context_size: ContextSize = ("tokens", 3000)

    # ContextMessages
    context_size: ContextSize = ("messages", 50)
    ```

<a id="spoon_ai.middleware.summarization.count_tokens_approximately"></a>

#### `count_tokens_approximately`

```python
def count_tokens_approximately(messages: Iterable[Message],
                               chars_per_token: float = 4.0) -> int
```

Approximate token counter aligned with LangChain semantics.

**Arguments**:

- `messages` - Iterable of messages to count tokens for.
- `chars_per_token` - Characters per token ratio (default: 4.0).
  

**Returns**:

  Estimated token count.

<a id="spoon_ai.middleware.summarization.RemoveMessage"></a>

## `RemoveMessage` Objects

```python
class RemoveMessage()
```

Marker class indicating a message should be removed.

Compatible with LangChain's RemoveMessage pattern.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware"></a>

## `SummarizationMiddleware` Objects

```python
class SummarizationMiddleware(AgentMiddleware)
```

Summarizes conversation history when token limits are approached.

This middleware monitors message token counts and automatically summarizes older
messages when a threshold is reached, preserving recent messages and maintaining
context continuity by ensuring AI/Tool message pairs remain together.

Compatible with LangChain DeepAgents SummarizationMiddleware interface.

**Example**:

    ```python
    from spoon_ai.middleware.summarization import SummarizationMiddleware

    # Basic usage with fraction trigger
    middleware = SummarizationMiddleware(
        model=llm,
        trigger=("fraction", 0.85),
        keep=("messages", 20),
    )

    # With multiple trigger conditions
    middleware = SummarizationMiddleware(
        model=llm,
        trigger=[("fraction", 0.8), ("messages", 100)],
        keep=("tokens", 3000),
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(
        model: Optional[ChatBot] = None,
        *,
        trigger: Optional[Union[ContextSize, List[ContextSize]]] = None,
        keep: ContextSize = ("messages", _DEFAULT_MESSAGES_TO_KEEP),
        token_counter: Optional[TokenCounter] = None,
        summary_prompt: str = DEFAULT_SUMMARY_PROMPT,
        trim_tokens_to_summarize: Optional[int] = _DEFAULT_TRIM_TOKEN_LIMIT,
        max_context_tokens: Optional[int] = None,
        **deprecated_kwargs: Any) -> None
```

Initialize summarization middleware.

**Arguments**:

- `model` - The language model to use for generating summaries.
  If None, uses agent's LLM.
- `trigger` - One or more thresholds that trigger summarization.
  Provide a single ContextSize tuple or a list of tuples.
  Summarization runs when any threshold is met.
  

**Examples**:

- `-` _"messages", 50_ - Trigger at 50 messages
- `-` _"tokens", 3000_ - Trigger at 3000 tokens
- `-` _"fraction", 0.8_ - Trigger at 80% of max input tokens
  - [("fraction", 0.8), ("messages", 100)]: Multiple conditions
  
- `keep` - Context retention policy applied after summarization.
  Provide a ContextSize tuple to specify how much history to preserve.
  Defaults to keeping the most recent 20 messages.
  

**Examples**:

- `-` _"messages", 20_ - Keep last 20 messages
- `-` _"tokens", 3000_ - Keep last 3000 tokens worth
- `-` _"fraction", 0.3_ - Keep last 30% of max input tokens
  
- `token_counter` - Function to count tokens in messages.
  Defaults to model-aware approximate counter.
- `summary_prompt` - Prompt template for generating summaries.
- `trim_tokens_to_summarize` - Maximum tokens to keep when preparing
  messages for summarization. Pass None to skip trimming.
- `max_context_tokens` - Maximum context tokens for fraction calculations.
  If None, attempts to get from model profile.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Process messages before model call, potentially triggering summarization.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get summarization statistics.

<a id="spoon_ai.middleware.summarization.create_summarization_middleware"></a>

#### `create_summarization_middleware`

```python
def create_summarization_middleware(
        model: Optional[ChatBot] = None,
        trigger: Optional[Union[ContextSize, List[ContextSize]]] = None,
        keep: ContextSize = ("messages", _DEFAULT_MESSAGES_TO_KEEP),
        max_context_tokens: Optional[int] = None,
        **kwargs: Any) -> SummarizationMiddleware
```

Create a summarization middleware.

**Arguments**:

- `model` - LLM for summarization
- `trigger` - When to trigger summarization
- `keep` - What to keep after summarization
- `max_context_tokens` - Maximum context tokens for fraction calculations
- `**kwargs` - Additional arguments passed to SummarizationMiddleware
  

**Returns**:

  Configured SummarizationMiddleware

<a id="spoon_ai.middleware.planning"></a>

# Module `spoon_ai.middleware.planning`

Planning Middleware for Deep Agents

Provides automatic planning capabilities for agents:
- Auto-plan generation at the start of tasks
- Plan tracking and execution
- Integration with Plan-Act-Reflect loop

Usage:
    agent = ToolCallAgent(
        middleware=[PlanningMiddleware(auto_plan=True)],
        enable_plan_phase=True,
    )

<a id="spoon_ai.middleware.planning.PlanStep"></a>

## `PlanStep` Objects

```python
@dataclass
class PlanStep()
```

A single step in a plan.

<a id="spoon_ai.middleware.planning.PlanStep.status"></a>

#### `status`

pending, in_progress, completed, skipped

<a id="spoon_ai.middleware.planning.PlanStep.mark_started"></a>

#### `mark_started`

```python
def mark_started() -> None
```

Mark step as started.

<a id="spoon_ai.middleware.planning.PlanStep.mark_completed"></a>

#### `mark_completed`

```python
def mark_completed(result: Optional[str] = None) -> None
```

Mark step as completed.

<a id="spoon_ai.middleware.planning.PlanStep.mark_skipped"></a>

#### `mark_skipped`

```python
def mark_skipped(reason: Optional[str] = None) -> None
```

Mark step as skipped.

<a id="spoon_ai.middleware.planning.Plan"></a>

## `Plan` Objects

```python
@dataclass
class Plan()
```

A plan for completing a task.

<a id="spoon_ai.middleware.planning.Plan.add_step"></a>

#### `add_step`

```python
def add_step(description: str) -> PlanStep
```

Add a step to the plan.

<a id="spoon_ai.middleware.planning.Plan.get_current_step"></a>

#### `get_current_step`

```python
def get_current_step() -> Optional[PlanStep]
```

Get the current step.

<a id="spoon_ai.middleware.planning.Plan.advance"></a>

#### `advance`

```python
def advance() -> bool
```

Advance to the next step. Returns True if there are more steps.

<a id="spoon_ai.middleware.planning.Plan.is_complete"></a>

#### `is_complete`

```python
def is_complete() -> bool
```

Check if plan is complete.

<a id="spoon_ai.middleware.planning.Plan.get_progress"></a>

#### `get_progress`

```python
def get_progress() -> str
```

Get progress summary.

<a id="spoon_ai.middleware.planning.Plan.to_string"></a>

#### `to_string`

```python
def to_string() -> str
```

Convert plan to string representation.

<a id="spoon_ai.middleware.planning.PlanningMiddleware"></a>

## `PlanningMiddleware` Objects

```python
class PlanningMiddleware(AgentMiddleware)
```

Middleware that provides automatic planning capabilities.

This middleware can automatically generate a plan at the start of a task
and track plan execution progress.

Features:
- Auto-plan generation based on task description
- Plan step tracking
- Integration with agent's enable_plan_phase

Usage:
    middleware = PlanningMiddleware(auto_plan=True)

    agent = ToolCallAgent(
        middleware=[middleware],
        enable_plan_phase=True,
    )

<a id="spoon_ai.middleware.planning.PlanningMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(auto_plan: bool = False,
             max_steps: int = 10,
             plan_prompt: Optional[str] = None)
```

Initialize planning middleware.

**Arguments**:

- `auto_plan` - If True, automatically generate a plan at task start
- `max_steps` - Maximum number of steps in auto-generated plans
- `plan_prompt` - Custom prompt for plan generation

<a id="spoon_ai.middleware.planning.PlanningMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Initialize planning state before agent runs.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.on_plan_phase"></a>

#### `on_plan_phase`

```python
def on_plan_phase(runtime: AgentRuntime,
                  phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Handle the plan phase of the agent loop.

This is called when enable_plan_phase=True on the agent.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Wrap model calls to inject planning context.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.on_reflect_phase"></a>

#### `on_reflect_phase`

```python
def on_reflect_phase(runtime: AgentRuntime,
                     phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Handle the reflect phase to update plan progress.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.on_finish_phase"></a>

#### `on_finish_phase`

```python
def on_finish_phase(runtime: AgentRuntime,
                    phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Handle the finish phase.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.get_current_plan"></a>

#### `get_current_plan`

```python
def get_current_plan() -> Optional[Plan]
```

Get the current plan.

<a id="spoon_ai.middleware.planning.PlanningMiddleware.set_plan"></a>

#### `set_plan`

```python
def set_plan(goal: str, steps: List[str]) -> Plan
```

Manually set a plan.

**Arguments**:

- `goal` - The goal of the plan
- `steps` - List of step descriptions
  

**Returns**:

  The created Plan object

<a id="spoon_ai.middleware.planning.create_planning_middleware"></a>

#### `create_planning_middleware`

```python
def create_planning_middleware(auto_plan: bool = True,
                               max_steps: int = 10) -> PlanningMiddleware
```

Create a planning middleware with common settings.

**Arguments**:

- `auto_plan` - Enable automatic plan generation
- `max_steps` - Maximum steps in auto-generated plans
  

**Returns**:

  Configured PlanningMiddleware

<a id="spoon_ai.middleware.filesystem"></a>

# Module `spoon_ai.middleware.filesystem`

Filesystem Middleware - 7 Built-in Tools for File Operations.

Provides filesystem tools to agents:
1. ls - List files in directory
2. read_file - Read file content
3. write_file - Write new file
4. edit_file - Edit existing file (string replacement)
5. glob - Find files by pattern
6. grep - Search content in files
7. execute - Run shell commands (if backend supports)

Compatible with LangChain DeepAgents filesystem middleware interface.

Usage:
    from spoon_ai.middleware.filesystem import FilesystemMiddleware
    from spoon_ai.backends import create_state_backend

    backend, runtime = create_state_backend()
    middleware = FilesystemMiddleware(backend=backend)

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )

<a id="spoon_ai.middleware.filesystem.validate_path"></a>

#### `validate_path`

```python
def validate_path(path: str,
                  allowed_prefixes: Optional[List[str]] = None) -> str
```

Validate and normalize file path for security.

**Arguments**:

- `path` - The path to validate
- `allowed_prefixes` - Optional list of allowed path prefixes
  

**Returns**:

  Normalized canonical path starting with /
  

**Raises**:

- `ValueError` - If path contains traversal sequences or invalid format

<a id="spoon_ai.middleware.filesystem.LsTool"></a>

## `LsTool` Objects

```python
class LsTool(BaseTool)
```

List files in a directory.

<a id="spoon_ai.middleware.filesystem.ReadFileTool"></a>

## `ReadFileTool` Objects

```python
class ReadFileTool(BaseTool)
```

Read file content.

<a id="spoon_ai.middleware.filesystem.WriteFileTool"></a>

## `WriteFileTool` Objects

```python
class WriteFileTool(BaseTool)
```

Write to a new file.

<a id="spoon_ai.middleware.filesystem.EditFileTool"></a>

## `EditFileTool` Objects

```python
class EditFileTool(BaseTool)
```

Edit existing file with string replacement.

<a id="spoon_ai.middleware.filesystem.GlobTool"></a>

## `GlobTool` Objects

```python
class GlobTool(BaseTool)
```

Find files by glob pattern.

<a id="spoon_ai.middleware.filesystem.GrepTool"></a>

## `GrepTool` Objects

```python
class GrepTool(BaseTool)
```

Search for pattern in files.

<a id="spoon_ai.middleware.filesystem.ExecuteTool"></a>

## `ExecuteTool` Objects

```python
class ExecuteTool(BaseTool)
```

Execute shell command in sandbox.

<a id="spoon_ai.middleware.filesystem.get_filesystem_tools"></a>

#### `get_filesystem_tools`

```python
def get_filesystem_tools(backend: BackendProtocol) -> List[BaseTool]
```

Get all filesystem tools for a backend.

**Arguments**:

- `backend` - Backend to use for file operations
  

**Returns**:

  List of 7 filesystem tools

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware"></a>

## `FilesystemMiddleware` Objects

```python
class FilesystemMiddleware(AgentMiddleware)
```

Middleware for providing filesystem and execution tools to an agent.

Adds 7 filesystem tools to the agent:
- ls: list files in directory
- read_file: read file content
- write_file: write new file
- edit_file: edit existing file
- glob: find files by pattern
- grep: search content in files
- execute: run shell commands (if backend supports)

**Example**:

    ```python
    from spoon_ai.middleware.filesystem import FilesystemMiddleware
    from spoon_ai.backends import create_state_backend, create_composite_backend

    # With ephemeral storage (default)
    middleware = FilesystemMiddleware()

    # With custom backend
    backend, runtime = create_state_backend()
    middleware = FilesystemMiddleware(backend=backend)

    # With composite backend (mixed storage)
    composite = create_composite_backend(
        default=state_backend,
        routes={"/persistent/": store_backend}
    )
    middleware = FilesystemMiddleware(backend=composite)

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(backend: Optional[BackendProtocol] = None,
             system_prompt: Optional[str] = None,
             include_execute: bool = True,
             tool_token_limit: int = TOOL_TOKEN_LIMIT)
```

Initialize filesystem middleware.

**Arguments**:

- `backend` - Backend for file operations. Defaults to StateBackend.
- `system_prompt` - Optional custom system prompt override.
- `include_execute` - Whether to include execute tool (default: True)
- `tool_token_limit` - Token limit before truncating tool results

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.tools"></a>

#### `tools`

```python
@property
def tools() -> List[BaseTool]
```

Get filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.system_prompt"></a>

#### `system_prompt`

```python
@property
def system_prompt() -> str
```

Get system prompt for filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.backend"></a>

#### `backend`

```python
@property
def backend() -> BackendProtocol
```

Get the backend.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Inject system prompt for filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_tool_call"></a>

#### `awrap_tool_call`

```python
async def awrap_tool_call(request: ToolCallRequest,
                          handler: Callable) -> ToolCallResult
```

Handle large tool results by truncating.

<a id="spoon_ai.middleware.filesystem.create_filesystem_middleware"></a>

#### `create_filesystem_middleware`

```python
def create_filesystem_middleware(
        backend: Optional[BackendProtocol] = None,
        include_execute: bool = True) -> FilesystemMiddleware
```

Create a filesystem middleware.

**Arguments**:

- `backend` - Backend for file operations
- `include_execute` - Whether to include execute tool
  

**Returns**:

  FilesystemMiddleware instance
  

**Example**:

    ```python
    middleware = create_filesystem_middleware()
    agent = ToolCallAgent(middleware=[middleware], ...)
    ```

<a id="spoon_ai.middleware.filesystem.create_sandbox_backend"></a>

#### `create_sandbox_backend`

```python
def create_sandbox_backend(root_dir: Optional[str] = None,
                           timeout: int = 30) -> "LocalSandboxBackend"
```

Create a local sandbox backend that supports command execution.

**Arguments**:

- `root_dir` - Root directory for sandbox
- `timeout` - Command execution timeout in seconds
  

**Returns**:

  LocalSandboxBackend instance

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend"></a>

## `LocalSandboxBackend` Objects

```python
class LocalSandboxBackend(SandboxBackendProtocol)
```

Local sandbox backend with command execution support.

Wraps FilesystemBackend and adds execute capability.

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend.execute"></a>

#### `execute`

```python
def execute(command: str) -> ExecuteResponse
```

Execute a shell command.

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async execute a shell command.

<a id="spoon_ai.middleware.base"></a>

# Module `spoon_ai.middleware.base`

Middleware System for Deep Agents - Plan-Act-Reflect Support

This module provides a flexible middleware architecture that enables:
1. Plan-Act-Reflect cycles for deep reasoning
2. Model call interception and modification
3. Tool call wrapping and result transformation
4. Agent lifecycle hooks for state management
5. Declarative tool and state injection

<a id="spoon_ai.middleware.base.AgentPhase"></a>

## `AgentPhase` Objects

```python
class AgentPhase(str, Enum)
```

Distinct phases in the agent execution cycle.

This enables middleware to inject logic at specific thinking stages,
supporting Plan-Act-Reflect and other deliberative patterns.

<a id="spoon_ai.middleware.base.AgentPhase.PLAN"></a>

#### `PLAN`

Initial planning phase (before action loop)

<a id="spoon_ai.middleware.base.AgentPhase.THINK"></a>

#### `THINK`

LLM reasoning phase (selecting actions)

<a id="spoon_ai.middleware.base.AgentPhase.ACT"></a>

#### `ACT`

Tool execution phase

<a id="spoon_ai.middleware.base.AgentPhase.OBSERVE"></a>

#### `OBSERVE`

Observation/result processing phase

<a id="spoon_ai.middleware.base.AgentPhase.REFLECT"></a>

#### `REFLECT`

Reflection/evaluation phase

<a id="spoon_ai.middleware.base.AgentPhase.FINISH"></a>

#### `FINISH`

Completion phase

<a id="spoon_ai.middleware.base.AgentRuntime"></a>

## `AgentRuntime` Objects

```python
@dataclass
class AgentRuntime()
```

Runtime context passed to middleware for state access.

Provides safe access to agent state, configuration, and execution context
without exposing the entire agent instance.

<a id="spoon_ai.middleware.base.AgentRuntime.get_state"></a>

#### `get_state`

```python
def get_state(key: str, default: Any = None) -> Any
```

Safely get state value.

<a id="spoon_ai.middleware.base.AgentRuntime.set_state"></a>

#### `set_state`

```python
def set_state(key: str, value: Any) -> None
```

Set state value.

<a id="spoon_ai.middleware.base.AgentRuntime.update_state"></a>

#### `update_state`

```python
def update_state(updates: Dict[str, Any]) -> None
```

Bulk update state.

<a id="spoon_ai.middleware.base.AgentRuntime.get_last_message"></a>

#### `get_last_message`

```python
def get_last_message(role: Optional[Role] = None) -> Optional[Message]
```

Get last message, optionally filtered by role.

<a id="spoon_ai.middleware.base.ModelRequest"></a>

## `ModelRequest` Objects

```python
@dataclass
class ModelRequest()
```

Request to LLM with full context.

<a id="spoon_ai.middleware.base.ModelRequest.override"></a>

#### `override`

```python
def override(**kwargs) -> "ModelRequest"
```

Create a modified copy with updated fields.

**Example**:

  new_req = request.override(
  system_prompt="Updated prompt",
  temperature=0.7
  )

<a id="spoon_ai.middleware.base.ModelRequest.append_to_system_prompt"></a>

#### `append_to_system_prompt`

```python
def append_to_system_prompt(text: str) -> "ModelRequest"
```

Convenience method to append text to system prompt.

<a id="spoon_ai.middleware.base.ModelRequest.add_tool"></a>

#### `add_tool`

```python
def add_tool(tool: Union[BaseTool, dict]) -> "ModelRequest"
```

Add a tool to the request.

<a id="spoon_ai.middleware.base.ModelResponse"></a>

## `ModelResponse` Objects

```python
@dataclass
class ModelResponse()
```

Response from LLM.

<a id="spoon_ai.middleware.base.ToolCallRequest"></a>

## `ToolCallRequest` Objects

```python
@dataclass
class ToolCallRequest()
```

Request to execute a tool.

<a id="spoon_ai.middleware.base.ToolCallResult"></a>

## `ToolCallResult` Objects

```python
@dataclass
class ToolCallResult()
```

Result of tool execution.

<a id="spoon_ai.middleware.base.ToolCallResult.success"></a>

#### `success`

```python
@property
def success() -> bool
```

Check if tool call was successful.

<a id="spoon_ai.middleware.base.ToolCallResult.from_string"></a>

#### `from_string`

```python
@staticmethod
def from_string(output: str) -> "ToolCallResult"
```

Create result from simple string output.

<a id="spoon_ai.middleware.base.ToolCallResult.from_error"></a>

#### `from_error`

```python
@staticmethod
def from_error(error: str) -> "ToolCallResult"
```

Create error result.

<a id="spoon_ai.middleware.base.PhaseHook"></a>

## `PhaseHook` Objects

```python
class PhaseHook(Protocol)
```

Protocol for phase-specific hooks.

Middleware can implement phase hooks to inject logic at specific
points in the agent's execution cycle (Plan, Act, Reflect, etc.)

<a id="spoon_ai.middleware.base.PhaseHook.__call__"></a>

#### `__call__`

```python
def __call__(runtime: AgentRuntime,
             phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Execute phase hook.

**Arguments**:

- `runtime` - Agent runtime context
- `phase_data` - Phase-specific data (e.g., plan, observations, reflections)
  

**Returns**:

  Optional state updates to merge into agent state

<a id="spoon_ai.middleware.base.AgentMiddleware"></a>

## `AgentMiddleware` Objects

```python
class AgentMiddleware(ABC)
```

Base class for agent middleware with Plan-Act-Reflect support.

Middleware can:
1. Inject tools and extend agent capabilities
2. Modify system prompts
3. Intercept and transform model calls
4. Wrap tool executions
5. Hook into agent lifecycle events
6. Implement Plan-Act-Reflect phases

**Example**:

  class TaskTrackingMiddleware(AgentMiddleware):
  tools = [create_todo_tool(), update_todo_tool()]
  system_prompt = "You track tasks using a todo list."
  
  def on_plan_phase(self, runtime, phase_data):
  # Initialize task list before action loop
  return &#123;"todos": []&#125;
  
  def on_reflect_phase(self, runtime, phase_data):
  # Evaluate progress and update tasks
  return None

<a id="spoon_ai.middleware.base.AgentMiddleware.__init__"></a>

#### `__init__`

```python
def __init__()
```

Initialize middleware with instance-specific phase hooks registry.

<a id="spoon_ai.middleware.base.AgentMiddleware.wrap_model_call"></a>

#### `wrap_model_call`

```python
def wrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Intercept LLM call (synchronous).

Override to modify requests/responses or inject side effects.

**Arguments**:

- `request` - Model request with full context
- `handler` - Next handler in the middleware chain
  

**Returns**:

  Model response (potentially modified)
  

**Example**:

  def wrap_model_call(self, request, handler):
  # Log request
  logger.info(f"Calling model with &#123;len(request.messages)&#125; messages")
  
  # Modify request
  if request.phase == AgentPhase.PLAN:
  request = request.append_to_system_prompt(
  "Create a detailed step-by-step plan."
  )
  
  # Execute
  response = handler(request)
  
  # Post-process response
  if request.phase == AgentPhase.REFLECT:
  self._store_reflection(response.content)
  
  return response

<a id="spoon_ai.middleware.base.AgentMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Intercept LLM call (asynchronous).

IMPORTANT: In async pipelines, override this method instead of wrap_model_call.
If you override wrap_model_call, the handler will be async and return a coroutine.

Default implementation: pass through to handler.

<a id="spoon_ai.middleware.base.AgentMiddleware.wrap_tool_call"></a>

#### `wrap_tool_call`

```python
def wrap_tool_call(
        request: ToolCallRequest,
        handler: Callable[[ToolCallRequest],
                          ToolCallResult]) -> ToolCallResult
```

Intercept tool execution (synchronous).

Override to:
- Log tool usage
- Modify tool arguments
- Transform tool results
- Implement approval flows (HITL)
- Handle large results (save to filesystem)

**Arguments**:

- `request` - Tool call request
- `handler` - Next handler in the middleware chain
  

**Returns**:

  Tool call result (potentially modified)
  

**Example**:

  def wrap_tool_call(self, request, handler):
  # Approval for dangerous tools
  if request.tool_name in self.require_approval:
  if not self._get_approval(request):
  return ToolCallResult.from_error("User rejected tool call")
  
  # Execute
  result = handler(request)
  
  # Handle large results
  if len(result.output) &gt; 20000:
  path = self._save_to_file(result.output)
  return ToolCallResult(
  output=f"Result saved to &#123;path&#125; (too large to display)",
- `metadata=&#123;"saved_path"` - path&#125;
  )
  
  return result

<a id="spoon_ai.middleware.base.AgentMiddleware.awrap_tool_call"></a>

#### `awrap_tool_call`

```python
async def awrap_tool_call(
        request: ToolCallRequest,
        handler: Callable[[ToolCallRequest],
                          ToolCallResult]) -> ToolCallResult
```

Intercept tool execution (asynchronous).

Default implementation delegates to sync version and handles async handlers.

<a id="spoon_ai.middleware.base.AgentMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Called before agent starts processing.

Use for:
- State initialization
- Message preprocessing
- Context setup

**Arguments**:

- `state` - Current agent state
- `runtime` - Runtime context
  

**Returns**:

  Optional state updates to merge
  

**Example**:

  def before_agent(self, state, runtime):
  # Initialize planning state
  if "plan" not in state:
  return &#123;"plan": None, "plan_steps": []&#125;
  return None

<a id="spoon_ai.middleware.base.AgentMiddleware.after_agent"></a>

#### `after_agent`

```python
def after_agent(state: Dict[str, Any],
                runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Called after agent finishes processing.

Use for:
- State cleanup
- Result post-processing
- Logging/metrics

**Arguments**:

- `state` - Current agent state
- `runtime` - Runtime context
  

**Returns**:

  Optional state updates to merge

<a id="spoon_ai.middleware.base.AgentMiddleware.on_plan_phase"></a>

#### `on_plan_phase`

```python
def on_plan_phase(runtime: AgentRuntime,
                  phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during PLAN phase (before action loop).

Override to implement planning logic:
- Generate initial plan from user request
- Break down complex tasks
- Set up execution strategy

**Arguments**:

- `runtime` - Runtime context with user message
- `phase_data` - Phase-specific data (may contain previous plan)
  

**Returns**:

  State updates (e.g., &#123;"plan": plan_object, "steps": [...]&#125;)
  

**Example**:

  def on_plan_phase(self, runtime, phase_data):
  user_request = runtime.get_last_message(Role.USER)
  plan = self._create_plan(user_request.content)
  return &#123;
- `"plan"` - plan,
- `"plan_steps"` - plan.steps,
- `"plan_created_at"` - datetime.now().isoformat()
  &#125;

<a id="spoon_ai.middleware.base.AgentMiddleware.on_think_phase"></a>

#### `on_think_phase`

```python
def on_think_phase(runtime: AgentRuntime,
                   phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during THINK phase (before LLM reasoning).

Override to:
- Inject planning context into prompts
- Filter available tools based on plan
- Add think-aloud prompts

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (may contain current plan step)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.on_act_phase"></a>

#### `on_act_phase`

```python
def on_act_phase(runtime: AgentRuntime,
                 phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during ACT phase (before tool execution).

Override to:
- Validate actions against plan
- Log action decisions
- Update plan progress

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (contains selected tool calls)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.on_observe_phase"></a>

#### `on_observe_phase`

```python
def on_observe_phase(runtime: AgentRuntime,
                     phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during OBSERVE phase (after tool execution).

Override to:
- Process tool results
- Update world model
- Extract key observations

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (contains tool results)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.on_reflect_phase"></a>

#### `on_reflect_phase`

```python
def on_reflect_phase(runtime: AgentRuntime,
                     phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during REFLECT phase (after N steps or on completion).

Override to:
- Evaluate progress against plan
- Decide if plan needs revision
- Identify stuck states
- Trigger replanning

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (progress, observations, current plan)
  

**Returns**:

  State updates (e.g., &#123;"plan": revised_plan, "needs_replan": False&#125;)
  

**Example**:

  def on_reflect_phase(self, runtime, phase_data):
  plan = runtime.get_state("plan")
  progress = phase_data.get("progress", &#123;&#125;)
  
  if not self._is_making_progress(progress):
  new_plan = self._revise_plan(plan, progress)
  return &#123;
- `"plan"` - new_plan,
- `"plan_revision"` - runtime.get_state("plan_revision", 0) + 1
  &#125;
  
  return None

<a id="spoon_ai.middleware.base.AgentMiddleware.on_finish_phase"></a>

#### `on_finish_phase`

```python
def on_finish_phase(runtime: AgentRuntime,
                    phase_data: Dict[str, Any]) -> Optional[Dict[str, Any]]
```

Called during FINISH phase (before agent returns).

Override to:
- Validate completion
- Generate final report
- Clean up temporary state

**Arguments**:

- `runtime` - Runtime context
- `phase_data` - Phase data (final result, statistics)
  

**Returns**:

  State updates

<a id="spoon_ai.middleware.base.AgentMiddleware.register_phase_hook"></a>

#### `register_phase_hook`

```python
def register_phase_hook(phase: AgentPhase, hook: PhaseHook) -> None
```

Register a custom phase hook dynamically.

**Arguments**:

- `phase` - Target phase
- `hook` - Callable hook function

<a id="spoon_ai.middleware.base.AgentMiddleware.get_phase_hook"></a>

#### `get_phase_hook`

```python
def get_phase_hook(phase: AgentPhase) -> Optional[PhaseHook]
```

Get registered hook for a phase.

Returns the method (on_plan_phase, etc.) or custom registered hook.

<a id="spoon_ai.middleware.base.MiddlewarePipeline"></a>

## `MiddlewarePipeline` Objects

```python
class MiddlewarePipeline()
```

Composes multiple middleware into an execution pipeline.

Handles:
- Onion wrapping of model/tool calls
- Sequential execution of lifecycle hooks
- Phase hook orchestration
- Tool aggregation
- System prompt composition

<a id="spoon_ai.middleware.base.MiddlewarePipeline.__init__"></a>

#### `__init__`

```python
def __init__(middleware_list: List[AgentMiddleware])
```

Initialize pipeline with middleware list.

**Arguments**:

- `middleware_list` - List of middleware in application order

<a id="spoon_ai.middleware.base.MiddlewarePipeline.wrap_model_call"></a>

#### `wrap_model_call`

```python
def wrap_model_call(
        request: ModelRequest,
        base_handler: Callable[[ModelRequest],
                               ModelResponse]) -> ModelResponse
```

Build onion of middleware around base model handler.

Execution order: last middleware wraps first (reverse order).

<a id="spoon_ai.middleware.base.MiddlewarePipeline.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        base_handler: Callable[[ModelRequest],
                               ModelResponse]) -> ModelResponse
```

Async version of model call pipeline.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.wrap_tool_call"></a>

#### `wrap_tool_call`

```python
def wrap_tool_call(
    request: ToolCallRequest,
    base_handler: Callable[[ToolCallRequest],
                           ToolCallResult]) -> ToolCallResult
```

Build onion of middleware around base tool handler.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.awrap_tool_call"></a>

#### `awrap_tool_call`

```python
async def awrap_tool_call(
    request: ToolCallRequest,
    base_handler: Callable[[ToolCallRequest],
                           ToolCallResult]) -> ToolCallResult
```

Async version of tool call pipeline.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.execute_before_agent"></a>

#### `execute_before_agent`

```python
def execute_before_agent(state: Dict[str, Any],
                         runtime: AgentRuntime) -> Dict[str, Any]
```

Execute before_agent hooks in middleware order.

Returns merged state updates from all middleware.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.execute_after_agent"></a>

#### `execute_after_agent`

```python
def execute_after_agent(state: Dict[str, Any],
                        runtime: AgentRuntime) -> Dict[str, Any]
```

Execute after_agent hooks in reverse middleware order.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.execute_phase_hook"></a>

#### `execute_phase_hook`

```python
def execute_phase_hook(phase: AgentPhase, runtime: AgentRuntime,
                       phase_data: Dict[str, Any]) -> Dict[str, Any]
```

Execute phase hooks from all middleware.

**Arguments**:

- `phase` - Current execution phase
- `runtime` - Runtime context
- `phase_data` - Phase-specific data
  

**Returns**:

  Merged state updates from all middleware

<a id="spoon_ai.middleware.base.MiddlewarePipeline.collect_tools"></a>

#### `collect_tools`

```python
def collect_tools() -> List[BaseTool]
```

Aggregate tools from all middleware.

<a id="spoon_ai.middleware.base.MiddlewarePipeline.build_system_prompt"></a>

#### `build_system_prompt`

```python
def build_system_prompt(base_prompt: Optional[str] = None) -> str
```

Build composed system prompt from base + middleware prompts.

**Arguments**:

- `base_prompt` - Agent's base system prompt
  

**Returns**:

  Composed prompt with middleware additions

<a id="spoon_ai.middleware.base.create_middleware_pipeline"></a>

#### `create_middleware_pipeline`

```python
def create_middleware_pipeline(
        middleware: List[Union[AgentMiddleware, type]]) -> MiddlewarePipeline
```

Create middleware pipeline from middleware classes or instances.

**Arguments**:

- `middleware` - List of AgentMiddleware instances or classes
  

**Returns**:

  Configured middleware pipeline
  

**Example**:

  pipeline = create_middleware_pipeline([
  TodoListMiddleware(),
  FilesystemMiddleware(),
  SummarizationMiddleware(),
  ])

