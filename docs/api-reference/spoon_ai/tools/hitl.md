---
id: spoon_ai.tools.hitl
slug: /api-reference/spoon_ai/tools/hitl
title: spoon_ai.tools.hitl
---

# Table of Contents

* [spoon\_ai.tools.hitl](#spoon_ai.tools.hitl)
  * [InterruptOnConfig](#spoon_ai.tools.hitl.InterruptOnConfig)
  * [ApprovalDecision](#spoon_ai.tools.hitl.ApprovalDecision)
  * [DecisionInput](#spoon_ai.tools.hitl.DecisionInput)
    * [args](#spoon_ai.tools.hitl.DecisionInput.args)
    * [reason](#spoon_ai.tools.hitl.DecisionInput.reason)
    * [from\_dict](#spoon_ai.tools.hitl.DecisionInput.from_dict)
  * [ActionRequest](#spoon_ai.tools.hitl.ActionRequest)
    * [name](#spoon_ai.tools.hitl.ActionRequest.name)
    * [args](#spoon_ai.tools.hitl.ActionRequest.args)
    * [id](#spoon_ai.tools.hitl.ActionRequest.id)
    * [to\_dict](#spoon_ai.tools.hitl.ActionRequest.to_dict)
  * [ApprovalRequest](#spoon_ai.tools.hitl.ApprovalRequest)
    * [from\_action\_request](#spoon_ai.tools.hitl.ApprovalRequest.from_action_request)
  * [ReviewConfig](#spoon_ai.tools.hitl.ReviewConfig)
    * [to\_dict](#spoon_ai.tools.hitl.ReviewConfig.to_dict)
  * [InterruptValue](#spoon_ai.tools.hitl.InterruptValue)
    * [\_\_len\_\_](#spoon_ai.tools.hitl.InterruptValue.__len__)
    * [\_\_iter\_\_](#spoon_ai.tools.hitl.InterruptValue.__iter__)
    * [\_\_getitem\_\_](#spoon_ai.tools.hitl.InterruptValue.__getitem__)
    * [to\_dict](#spoon_ai.tools.hitl.InterruptValue.to_dict)
  * [InterruptInfo](#spoon_ai.tools.hitl.InterruptInfo)
    * [to\_dict](#spoon_ai.tools.hitl.InterruptInfo.to_dict)
  * [ResumeData](#spoon_ai.tools.hitl.ResumeData)
    * [from\_dict](#spoon_ai.tools.hitl.ResumeData.from_dict)
  * [HITLInterrupt](#spoon_ai.tools.hitl.HITLInterrupt)
  * [ParsedInterruptConfig](#spoon_ai.tools.hitl.ParsedInterruptConfig)
    * [from\_config](#spoon_ai.tools.hitl.ParsedInterruptConfig.from_config)
    * [get\_description](#spoon_ai.tools.hitl.ParsedInterruptConfig.get_description)
  * [HITLManager](#spoon_ai.tools.hitl.HITLManager)
    * [\_\_init\_\_](#spoon_ai.tools.hitl.HITLManager.__init__)
    * [should\_interrupt](#spoon_ai.tools.hitl.HITLManager.should_interrupt)
    * [get\_config](#spoon_ai.tools.hitl.HITLManager.get_config)
    * [add\_pending\_action](#spoon_ai.tools.hitl.HITLManager.add_pending_action)
    * [has\_pending\_actions](#spoon_ai.tools.hitl.HITLManager.has_pending_actions)
    * [create\_interrupt](#spoon_ai.tools.hitl.HITLManager.create_interrupt)
    * [clear\_pending](#spoon_ai.tools.hitl.HITLManager.clear_pending)
    * [apply\_decisions](#spoon_ai.tools.hitl.HITLManager.apply_decisions)
  * [HumanInTheLoopMiddleware](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware)
    * [\_\_init\_\_](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.__init__)
    * [set\_resume\_data](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.set_resume_data)
    * [before\_agent](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.before_agent)
    * [awrap\_model\_call](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.awrap_model_call)
    * [get\_interrupt\_config](#spoon_ai.tools.hitl.HumanInTheLoopMiddleware.get_interrupt_config)
  * [create\_hitl\_middleware](#spoon_ai.tools.hitl.create_hitl_middleware)
  * [format\_tool\_call\_description](#spoon_ai.tools.hitl.format_tool_call_description)

<a id="spoon_ai.tools.hitl"></a>

# Module `spoon_ai.tools.hitl`

Human-in-the-Loop (HITL) System

Provides approval workflows for critical tool executions:
- Tool-level approval configuration with dynamic descriptions
- Multiple approval strategies (approve, edit, reject)
- Batch interrupt/resume support for parallel tool calls
- State preservation for pause/resume via Command pattern
- Integration with checkpointing

Compatible with LangChain DeepAgents HumanInTheLoopMiddleware interface.

Usage:
    from spoon_ai.tools.hitl import HumanInTheLoopMiddleware, InterruptOnConfig

    # Simple configuration
    agent = ToolCallAgent(
        tools=[dangerous_tool],
        middleware=[HumanInTheLoopMiddleware(interrupt_on=&#123;
            "delete_file": True,
            "send_email": &#123;"allowed_decisions": ["approve", "reject"]&#125;
        &#125;)]
    )

    # With dynamic description function
    def format_delete_description(tool_call, state, runtime):
        return f"Delete file: &#123;tool_call['args'].get('path', 'unknown')&#125;"

    middleware = HumanInTheLoopMiddleware(interrupt_on=&#123;
        "delete_file": &#123;
            "allowed_decisions": ["approve", "reject"],
            "description": format_delete_description,
        &#125;
    &#125;)

    # Resume after interrupt
    result = agent.invoke(Command(resume=&#123;"decisions": [
        &#123;"type": "approve"&#125;,
        &#123;"type": "edit", "args": &#123;"path": "/new/path"&#125;&#125;,
    ]&#125;), config=config)

<a id="spoon_ai.tools.hitl.InterruptOnConfig"></a>

## `InterruptOnConfig` Objects

```python
class InterruptOnConfig(TypedDict)
```

Configuration for tool interruption.

Compatible with LangChain DeepAgents InterruptOnConfig.

**Attributes**:

- `allowed_decisions` - List of allowed approval decisions.
  Defaults to ["approve", "edit", "reject"].
- `description` - Either a static string or a callable that generates
  a dynamic description based on the tool call context.
- `Signature` - (tool_call: ToolCall, state: AgentState, runtime: Runtime) -&gt; str
  

**Example**:

  # Static description
- `config` - InterruptOnConfig = &#123;
- `"allowed_decisions"` - ["approve", "reject"],
- `"description"` - "This action will delete files permanently.",
  &#125;
  
  # Dynamic description
  def format_description(tool_call, state, runtime):
  path = tool_call["args"].get("path", "unknown")
  return f"Delete file: &#123;path&#125;"
  
- `config` - InterruptOnConfig = &#123;
- `"allowed_decisions"` - ["approve", "reject"],
- `"description"` - format_description,
  &#125;

<a id="spoon_ai.tools.hitl.ApprovalDecision"></a>

## `ApprovalDecision` Objects

```python
class ApprovalDecision(str, Enum)
```

Possible approval decisions.

<a id="spoon_ai.tools.hitl.DecisionInput"></a>

## `DecisionInput` Objects

```python
@dataclass
class DecisionInput()
```

Input for a single approval decision.

Used in Command(resume=&#123;"decisions": [...]&#125;) pattern.

<a id="spoon_ai.tools.hitl.DecisionInput.args"></a>

#### `args`

For edit decision

<a id="spoon_ai.tools.hitl.DecisionInput.reason"></a>

#### `reason`

For reject decision

<a id="spoon_ai.tools.hitl.DecisionInput.from_dict"></a>

#### `from_dict`

```python
@classmethod
def from_dict(cls, data: Dict[str, Any]) -> "DecisionInput"
```

Create from dictionary.

<a id="spoon_ai.tools.hitl.ActionRequest"></a>

## `ActionRequest` Objects

```python
@dataclass
class ActionRequest()
```

A pending action request.

Compatible with LangChain's action_request format.

<a id="spoon_ai.tools.hitl.ActionRequest.name"></a>

#### `name`

Tool name

<a id="spoon_ai.tools.hitl.ActionRequest.args"></a>

#### `args`

Tool arguments

<a id="spoon_ai.tools.hitl.ActionRequest.id"></a>

#### `id`

Tool call ID

<a id="spoon_ai.tools.hitl.ActionRequest.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary for serialization.

<a id="spoon_ai.tools.hitl.ApprovalRequest"></a>

## `ApprovalRequest` Objects

```python
@dataclass
class ApprovalRequest()
```

Request object passed to approval_callback.

Provides a simple interface for approval callbacks.

<a id="spoon_ai.tools.hitl.ApprovalRequest.from_action_request"></a>

#### `from_action_request`

```python
@classmethod
def from_action_request(cls, action: ActionRequest) -> "ApprovalRequest"
```

Create from ActionRequest.

<a id="spoon_ai.tools.hitl.ReviewConfig"></a>

## `ReviewConfig` Objects

```python
@dataclass
class ReviewConfig()
```

Review configuration for a pending action.

Compatible with LangChain's review_config format.

<a id="spoon_ai.tools.hitl.ReviewConfig.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary for serialization.

<a id="spoon_ai.tools.hitl.InterruptValue"></a>

## `InterruptValue` Objects

```python
@dataclass
class InterruptValue()
```

Value returned in __interrupt__ for batch interrupts.

Compatible with LangChain's interrupt value format.
Contains both action_requests and review_configs.

<a id="spoon_ai.tools.hitl.InterruptValue.__len__"></a>

#### `__len__`

```python
def __len__() -> int
```

Return number of pending actions (for compatibility).

<a id="spoon_ai.tools.hitl.InterruptValue.__iter__"></a>

#### `__iter__`

```python
def __iter__()
```

Iterate over keys (for compatibility).

<a id="spoon_ai.tools.hitl.InterruptValue.__getitem__"></a>

#### `__getitem__`

```python
def __getitem__(key: str) -> Any
```

Get item by key (for compatibility).

<a id="spoon_ai.tools.hitl.InterruptValue.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary for serialization.

<a id="spoon_ai.tools.hitl.InterruptInfo"></a>

## `InterruptInfo` Objects

```python
@dataclass
class InterruptInfo()
```

Wrapper for interrupt information.

Compatible with LangChain's __interrupt__[0] format.

<a id="spoon_ai.tools.hitl.InterruptInfo.to_dict"></a>

#### `to_dict`

```python
def to_dict() -> Dict[str, Any]
```

Convert to dictionary.

<a id="spoon_ai.tools.hitl.ResumeData"></a>

## `ResumeData` Objects

```python
@dataclass
class ResumeData()
```

Data for resuming from an interrupt.

Compatible with LangChain Command(resume=...) pattern.

<a id="spoon_ai.tools.hitl.ResumeData.from_dict"></a>

#### `from_dict`

```python
@classmethod
def from_dict(cls, data: Dict[str, Any]) -> "ResumeData"
```

Create from dictionary.

<a id="spoon_ai.tools.hitl.HITLInterrupt"></a>

## `HITLInterrupt` Objects

```python
class HITLInterrupt(Exception)
```

Exception raised when tool execution requires batch approval.

This signals to the agent that execution should pause and return
an __interrupt__ with action_requests and review_configs.

<a id="spoon_ai.tools.hitl.ParsedInterruptConfig"></a>

## `ParsedInterruptConfig` Objects

```python
@dataclass
class ParsedInterruptConfig()
```

Parsed and normalized interrupt configuration.

<a id="spoon_ai.tools.hitl.ParsedInterruptConfig.from_config"></a>

#### `from_config`

```python
@classmethod
def from_config(
    cls,
    config: Union[bool,
                  InterruptOnConfig]) -> Optional["ParsedInterruptConfig"]
```

Parse configuration from various formats.

<a id="spoon_ai.tools.hitl.ParsedInterruptConfig.get_description"></a>

#### `get_description`

```python
def get_description(tool_call: ToolCall, state: AgentState,
                    runtime: Runtime) -> Optional[str]
```

Get description, calling function if needed.

<a id="spoon_ai.tools.hitl.HITLManager"></a>

## `HITLManager` Objects

```python
class HITLManager()
```

Manages human-in-the-loop approval workflows.

Supports batch interrupts for parallel tool calls.

<a id="spoon_ai.tools.hitl.HITLManager.__init__"></a>

#### `__init__`

```python
def __init__(interrupt_on: Dict[str, Union[bool, InterruptOnConfig]])
```

Initialize HITL manager.

**Arguments**:

- `interrupt_on` - Tool interruption configuration.
  - Dict[str, bool]: Simple approval (True = require approval)
  - Dict[str, InterruptOnConfig]: Detailed configuration with
  allowed_decisions and description

<a id="spoon_ai.tools.hitl.HITLManager.should_interrupt"></a>

#### `should_interrupt`

```python
def should_interrupt(tool_name: str) -> bool
```

Check if tool requires approval.

<a id="spoon_ai.tools.hitl.HITLManager.get_config"></a>

#### `get_config`

```python
def get_config(tool_name: str) -> Optional[ParsedInterruptConfig]
```

Get parsed configuration for a tool.

<a id="spoon_ai.tools.hitl.HITLManager.add_pending_action"></a>

#### `add_pending_action`

```python
def add_pending_action(tool_call: ToolCall, state: AgentState,
                       runtime: Runtime) -> None
```

Add a pending action for batch interrupt.

**Arguments**:

- `tool_call` - The tool call dict or Pydantic object with name, args, id
- `state` - Current agent state
- `runtime` - Agent runtime

<a id="spoon_ai.tools.hitl.HITLManager.has_pending_actions"></a>

#### `has_pending_actions`

```python
def has_pending_actions() -> bool
```

Check if there are pending actions.

<a id="spoon_ai.tools.hitl.HITLManager.create_interrupt"></a>

#### `create_interrupt`

```python
def create_interrupt() -> InterruptInfo
```

Create an interrupt with all pending actions.

**Returns**:

  InterruptInfo with action_requests and review_configs

<a id="spoon_ai.tools.hitl.HITLManager.clear_pending"></a>

#### `clear_pending`

```python
def clear_pending() -> None
```

Clear all pending actions.

<a id="spoon_ai.tools.hitl.HITLManager.apply_decisions"></a>

#### `apply_decisions`

```python
def apply_decisions(decisions: List[DecisionInput],
                    tool_calls: List[ToolCall]) -> List[ToolCall]
```

Apply decisions to tool calls.

**Arguments**:

- `decisions` - List of decisions from Command(resume=...)
- `tool_calls` - Original tool calls
  

**Returns**:

  Modified tool calls with edits applied, rejected calls removed

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware"></a>

## `HumanInTheLoopMiddleware` Objects

```python
class HumanInTheLoopMiddleware(AgentMiddleware)
```

Middleware that implements Human-in-the-Loop approval workflows.

Compatible with LangChain DeepAgents HumanInTheLoopMiddleware.

This middleware intercepts tool calls that require approval and creates
an __interrupt__ with action_requests and review_configs for batch approval.

Features:
- Per-tool approval configuration
- Dynamic description functions
- Batch interrupt/resume for parallel tool calls
- Command(resume=...) pattern for resuming

Usage:
    # Simple approval
    middleware = HumanInTheLoopMiddleware(interrupt_on=&#123;
        "delete_file": True,
        "send_email": True
    &#125;)

    # With dynamic description
    def format_shell_description(tool_call, state, runtime):
        command = tool_call["args"].get("command", "N/A")
        return f"Execute Command: &#123;command&#125;"

    middleware = HumanInTheLoopMiddleware(interrupt_on=&#123;
        "shell": &#123;
            "allowed_decisions": ["approve", "reject"],
            "description": format_shell_description,
        &#125;,
        "write_file": &#123;
            "allowed_decisions": ["approve", "edit", "reject"],
        &#125;,
    &#125;)

    # Resume from interrupt
    result = agent.invoke(
        Command(resume=&#123;"decisions": [
            &#123;"type": "approve"&#125;,
            &#123;"type": "edit", "args": &#123;"path": "/new/path"&#125;&#125;,
        ]&#125;),
        config=config
    )

Interrupt Format (returned in result["__interrupt__"]):
    [
        &#123;
            "value": &#123;
                "action_requests": [
                    &#123;"name": "shell", "args": &#123;"command": "rm -rf"&#125;, "id": "..."&#125;,
                ],
                "review_configs": [
                    &#123;
                        "action_name": "shell",
                        "action_id": "...",
                        "allowed_decisions": ["approve", "reject"],
                        "description": "Execute Command: rm -rf",
                    &#125;,
                ],
            &#125;,
            "interrupt_id": "...",
        &#125;
    ]

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(interrupt_on: Dict[str, Union[bool, InterruptOnConfig]],
             approval_callback: Optional[Callable[["ApprovalRequest"],
                                                  ApprovalDecision]] = None)
```

Initialize HITL middleware.

**Arguments**:

- `interrupt_on` - Tool interruption configuration.
  Keys are tool names, values can be:
  - True: Require approval with default allowed_decisions
  - False: No approval needed (tool is skipped)
  - InterruptOnConfig dict with:
  - allowed_decisions: List of ["approve", "edit", "reject"]
  - description: Static string or callable for dynamic description
- `approval_callback` - Optional callback function for automatic approval.
  If provided, this callback is called instead of raising HITLInterrupt.
  The callback receives an ApprovalRequest and returns an ApprovalDecision.

**Example**:

  def auto_approve(request):
  print(f"Approving &#123;request.tool_name&#125;")
  return ApprovalDecision.APPROVE

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.set_resume_data"></a>

#### `set_resume_data`

```python
def set_resume_data(resume: Dict[str, Any]) -> None
```

Set resume data from Command(resume=...).

Called by the agent when resuming from interrupt.

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Initialize state for HITL tracking.

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(
        request: ModelRequest,
        handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse
```

Intercept model response to collect tool calls requiring approval.

This processes the model response and identifies tool calls that
need approval, then raises an HITLInterrupt if any are found.

<a id="spoon_ai.tools.hitl.HumanInTheLoopMiddleware.get_interrupt_config"></a>

#### `get_interrupt_config`

```python
def get_interrupt_config(tool_name: str) -> Optional[Dict[str, Any]]
```

Get interrupt configuration for a tool.

**Returns**:

  Dict with allowed_decisions, or None if tool doesn't require approval

<a id="spoon_ai.tools.hitl.create_hitl_middleware"></a>

#### `create_hitl_middleware`

```python
def create_hitl_middleware(
        *tool_names: str,
        allowed_decisions: Optional[List[str]] = None
) -> HumanInTheLoopMiddleware
```

Create HITL middleware for specified tools.

**Arguments**:

- `*tool_names` - Names of tools that require approval
- `allowed_decisions` - Allowed decisions for all tools
  

**Returns**:

  Configured HumanInTheLoopMiddleware
  

**Example**:

  middleware = create_hitl_middleware(
  "delete_file",
  "send_email",
  "shutdown_server",
  allowed_decisions=["approve", "reject"]
  )

<a id="spoon_ai.tools.hitl.format_tool_call_description"></a>

#### `format_tool_call_description`

```python
def format_tool_call_description(tool_call: ToolCall, state: AgentState,
                                 runtime: Runtime) -> str
```

Default description formatter for tool calls.

Can be used as a base for custom description functions.

