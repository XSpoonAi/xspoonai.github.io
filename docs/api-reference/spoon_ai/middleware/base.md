---
id: spoon_ai.middleware.base
slug: /api-reference/spoon_ai/middleware/base
title: spoon_ai.middleware.base
---

# Table of Contents

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

