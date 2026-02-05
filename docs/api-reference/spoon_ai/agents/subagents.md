---
id: spoon_ai.agents.subagents
slug: /api-reference/spoon_ai/agents/subagents
title: spoon_ai.agents.subagents
---

# Table of Contents

* [spoon\_ai.agents.subagents](#spoon_ai.agents.subagents)
  * [Command](#spoon_ai.agents.subagents.Command)
    * [update](#spoon_ai.agents.subagents.Command.update)
    * [goto](#spoon_ai.agents.subagents.Command.goto)
    * [resume](#spoon_ai.agents.subagents.Command.resume)
    * [is\_resume](#spoon_ai.agents.subagents.Command.is_resume)
    * [get\_decisions](#spoon_ai.agents.subagents.Command.get_decisions)
  * [SubAgentSpec](#spoon_ai.agents.subagents.SubAgentSpec)
    * [description](#spoon_ai.agents.subagents.SubAgentSpec.description)
  * [CompiledSubAgent](#spoon_ai.agents.subagents.CompiledSubAgent)
    * [runnable](#spoon_ai.agents.subagents.CompiledSubAgent.runnable)
  * [SubAgentManager](#spoon_ai.agents.subagents.SubAgentManager)
    * [\_\_init\_\_](#spoon_ai.agents.subagents.SubAgentManager.__init__)
    * [get\_subagent](#spoon_ai.agents.subagents.SubAgentManager.get_subagent)
    * [delegate\_task](#spoon_ai.agents.subagents.SubAgentManager.delegate_task)
    * [create\_task\_tool](#spoon_ai.agents.subagents.SubAgentManager.create_task_tool)
  * [SubAgentMiddleware](#spoon_ai.agents.subagents.SubAgentMiddleware)
    * [\_\_init\_\_](#spoon_ai.agents.subagents.SubAgentMiddleware.__init__)
    * [before\_agent](#spoon_ai.agents.subagents.SubAgentMiddleware.before_agent)
  * [add\_subagent\_support](#spoon_ai.agents.subagents.add_subagent_support)
  * [create\_general\_purpose\_subagent](#spoon_ai.agents.subagents.create_general_purpose_subagent)
  * [create\_compiled\_subagent](#spoon_ai.agents.subagents.create_compiled_subagent)

<a id="spoon_ai.agents.subagents"></a>

# Module `spoon_ai.agents.subagents`

Subagent Orchestration System

Enables hierarchical agent delegation where a parent agent can create
and manage specialized child agents for complex tasks.

Compatible with LangChain DeepAgents SubAgentMiddleware interface.

Features:
- SubAgentSpec for defining subagents with tools and prompts
- CompiledSubAgent for using pre-built graphs as subagents
- Command return pattern for state updates
- State inheritance and isolation
- Hierarchical task delegation with recursion depth limits
- Automatic task tool generation
- General-purpose agent support

Usage:
    # Method 1: SubAgentSpec (simple cases)
    subagents = [
        SubAgentSpec(
            name="researcher",
            description="Specialized in research tasks",
            system_prompt="You are a research expert...",
            tools=[search_tool, summarize_tool]
        )
    ]

    # Method 2: CompiledSubAgent (complex cases with pre-built graph)
    custom_graph = StateGraph(...)
    custom_graph.add_node("analyze", analyze_node)
    compiled = custom_graph.compile()

    subagents = [
        CompiledSubAgent(
            name="complex_analyzer",
            description="Complex multi-step analysis",
            runnable=compiled
        )
    ]

    # Create parent agent with subagent support
    middleware = SubAgentMiddleware(subagents=subagents)
    agent = ToolCallAgent(middleware=[middleware], ...)

<a id="spoon_ai.agents.subagents.Command"></a>

## `Command` Objects

```python
@dataclass
class Command()
```

Command object for returning state updates and controlling execution flow.

Compatible with LangGraph Command interface. Used to:
1. Propagate state changes from subagent execution back to the parent agent
2. Resume from HITL interrupts with approval decisions

Example - State updates from subagent:
    ```python
    return Command(
        update={
            "messages": [tool_message],
            "some_state_key": new_value,
        }
    )
    ```

Example - Resume from HITL interrupt:
    ```python
    # After receiving interrupt with action_requests
    result = agent.invoke(
        Command(resume={
            "decisions": [
                {"type": "approve"},
                {"type": "edit", "args": {"path": "/new/path"}},
                {"type": "reject", "reason": "Too dangerous"},
            ]
        }),
        config=config
    )
    ```

<a id="spoon_ai.agents.subagents.Command.update"></a>

#### `update`

State updates to apply after subagent execution.

<a id="spoon_ai.agents.subagents.Command.goto"></a>

#### `goto`

Optional node to go to next (for graph-based agents).

<a id="spoon_ai.agents.subagents.Command.resume"></a>

#### `resume`

Resume data for HITL interrupts. Contains 'decisions' list.

<a id="spoon_ai.agents.subagents.Command.is_resume"></a>

#### `is_resume`

```python
@property
def is_resume() -> bool
```

Check if this is a resume command.

<a id="spoon_ai.agents.subagents.Command.get_decisions"></a>

#### `get_decisions`

```python
def get_decisions() -> List[Dict[str, Any]]
```

Get decisions from resume data.

**Returns**:

  List of decision dicts with 'type', optional 'args', optional 'reason'

<a id="spoon_ai.agents.subagents.SubAgentSpec"></a>

## `SubAgentSpec` Objects

```python
@dataclass
class SubAgentSpec()
```

Specification for a subagent.

This defines how a subagent should be configured and what
capabilities it has. When using SubAgentSpec, the middleware
will automatically create a ToolCallAgent instance.

Compatible with LangChain DeepAgents SubAgent interface.

<a id="spoon_ai.agents.subagents.SubAgentSpec.description"></a>

#### `description`

For parent agent to decide when to delegate

<a id="spoon_ai.agents.subagents.CompiledSubAgent"></a>

## `CompiledSubAgent` Objects

```python
@dataclass
class CompiledSubAgent()
```

A pre-compiled agent/graph specification.

Use this when you have a complex, pre-built graph (StateGraph/CompiledGraph)
that you want to use as a subagent. This is useful for:
- Complex multi-step workflows
- Custom graph topologies
- Reusing existing graph implementations

Compatible with LangChain DeepAgents CompiledSubAgent interface.

**Example**:

    ```python
    from spoon_ai.graph import StateGraph

    # Build custom graph
    graph = StateGraph(MyState)
    graph.add_node("analyze", analyze_node)
    graph.add_node("synthesize", synthesize_node)
    graph.add_edge("analyze", "synthesize")
    compiled = graph.compile()

    # Use as subagent
    subagent = CompiledSubAgent(
        name="analyzer",
        description="Complex multi-step analysis",
        runnable=compiled
    )
    ```

<a id="spoon_ai.agents.subagents.CompiledSubAgent.runnable"></a>

#### `runnable`

CompiledGraph or any Runnable-like object with invoke/ainvoke

<a id="spoon_ai.agents.subagents.SubAgentManager"></a>

## `SubAgentManager` Objects

```python
class SubAgentManager()
```

Manages subagent creation and task delegation with recursion safety.

Supports both SubAgentSpec (auto-compiled) and CompiledSubAgent (pre-built).
Returns Command objects for state updates.
Compatible with LangChain DeepAgents subagent management.

<a id="spoon_ai.agents.subagents.SubAgentManager.__init__"></a>

#### `__init__`

```python
def __init__(
        parent_agent: Any,
        subagent_specs: List[SubAgentType],
        default_middleware: Optional[List[AgentMiddleware]] = None,
        default_tools: Optional[List[BaseTool]] = None,
        default_interrupt_on: Optional[Dict[str,
                                            Union[bool,
                                                  InterruptOnConfig]]] = None,
        max_depth: int = 3,
        general_purpose_agent: bool = True)
```

Initialize subagent manager.

**Arguments**:

- `parent_agent` - The parent agent instance
- `subagent_specs` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `default_middleware` - Default middleware for all subagents
- `default_tools` - Default tools for general-purpose agent
- `default_interrupt_on` - Default HITL configuration for all subagents.
  This is also the fallback for any subagents that don't specify
  their own interrupt_on configuration.
- `max_depth` - Maximum recursion depth for subagent delegation (default: 3)
- `general_purpose_agent` - Whether to include a general-purpose subagent (default: True)

<a id="spoon_ai.agents.subagents.SubAgentManager.get_subagent"></a>

#### `get_subagent`

```python
def get_subagent(name: str) -> Optional[Any]
```

Get or create a subagent instance.

<a id="spoon_ai.agents.subagents.SubAgentManager.delegate_task"></a>

#### `delegate_task`

```python
async def delegate_task(
        subagent_name: str,
        task_description: str,
        inherit_state: bool = True,
        tool_call_id: Optional[str] = None) -> Union[str, Command]
```

Delegate a task to a subagent with recursion depth checking.

**Arguments**:

- `subagent_name` - Name of the subagent
- `task_description` - Task for the subagent
- `inherit_state` - Whether to inherit parent state
- `tool_call_id` - Tool call ID for Command return pattern
  

**Returns**:

  Subagent's final response as string, or Command with state updates

<a id="spoon_ai.agents.subagents.SubAgentManager.create_task_tool"></a>

#### `create_task_tool`

```python
def create_task_tool(task_description: Optional[str] = None) -> BaseTool
```

Create the 'task' tool for delegating to subagents.

**Arguments**:

- `task_description` - Custom description for the task tool.
  Supports &#123;available_agents&#125; placeholder.
  

**Returns**:

  Task delegation tool

<a id="spoon_ai.agents.subagents.SubAgentMiddleware"></a>

## `SubAgentMiddleware` Objects

```python
class SubAgentMiddleware(AgentMiddleware)
```

Middleware that adds subagent orchestration capabilities.

This middleware:
1. Injects the 'task' tool for delegation
2. Manages subagent lifecycle
3. Handles state inheritance
4. Enforces recursion depth limits
5. Returns Command objects for state updates
6. Propagates HITL configuration to subagents

Supports both SubAgentSpec (auto-compiled) and CompiledSubAgent (pre-built graphs).

Compatible with LangChain DeepAgents SubAgentMiddleware interface.

Usage:
    ```python
    # Method 1: SubAgentSpec (simple cases)
    middleware = SubAgentMiddleware(subagents=[
        SubAgentSpec(
            name="researcher",
            description="Research and gather information",
            system_prompt="You are a research expert...",
            tools=[search_tool]
        )
    ])

    # Method 2: CompiledSubAgent (complex cases)
    custom_graph = StateGraph(...)
    compiled = custom_graph.compile()

    middleware = SubAgentMiddleware(subagents=[
        CompiledSubAgent(
            name="analyzer",
            description="Complex analysis workflow",
            runnable=compiled
        )
    ])

    # Method 3: With HITL configuration inherited by subagents
    middleware = SubAgentMiddleware(
        subagents=[...],
        default_interrupt_on={
            "delete_file": True,
            "send_email": {"allowed_decisions": ["approve", "reject"]},
        },
        general_purpose_agent=True,
    )

    # Method 4: Subagent with custom interrupt_on (overrides default)
    middleware = SubAgentMiddleware(
        subagents=[
            SubAgentSpec(
                name="careful_agent",
                description="Agent that requires extra approval",
                interrupt_on={"all_tools": True},  # Overrides default
                ...
            )
        ],
        default_interrupt_on={"delete_file": True},
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.agents.subagents.SubAgentMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(
        subagents: Optional[List[SubAgentType]] = None,
        default_middleware: Optional[List[AgentMiddleware]] = None,
        default_tools: Optional[List[BaseTool]] = None,
        default_interrupt_on: Optional[Dict[str,
                                            Union[bool,
                                                  InterruptOnConfig]]] = None,
        max_depth: int = 3,
        general_purpose_agent: bool = True,
        task_description: Optional[str] = None)
```

Initialize subagent middleware.

**Arguments**:

- `subagents` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `default_middleware` - Default middleware for all subagents
- `default_tools` - Default tools for general-purpose agent
- `default_interrupt_on` - Default HITL configuration for all subagents.
  This is used for the general-purpose agent and as a fallback
  for any SubAgentSpec that doesn't specify its own interrupt_on.
- `max_depth` - Maximum recursion depth for subagent delegation
- `general_purpose_agent` - Whether to include a general-purpose subagent (default: True)
- `task_description` - Custom description for the task tool.
  If None, uses default template.
  Supports &#123;available_agents&#125; placeholder for dynamic agent list.

<a id="spoon_ai.agents.subagents.SubAgentMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Initialize subagent manager with parent agent reference.

<a id="spoon_ai.agents.subagents.add_subagent_support"></a>

#### `add_subagent_support`

```python
def add_subagent_support(
    agent: Any,
    subagents: List[SubAgentType],
    max_depth: int = 3,
    general_purpose_agent: bool = True,
    task_description: Optional[str] = None,
    default_interrupt_on: Optional[Dict[str, Union[bool,
                                                   InterruptOnConfig]]] = None
) -> Any
```

Add subagent support to an existing agent.

**Arguments**:

- `agent` - The agent instance
- `subagents` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `max_depth` - Maximum recursion depth for subagent delegation
- `general_purpose_agent` - Whether to include a general-purpose subagent
- `task_description` - Custom description for the task tool
- `default_interrupt_on` - Default HITL configuration for all subagents
  

**Returns**:

  The agent with subagent support

<a id="spoon_ai.agents.subagents.create_general_purpose_subagent"></a>

#### `create_general_purpose_subagent`

```python
def create_general_purpose_subagent(
        name: str = "general-purpose",
        description: str = DEFAULT_GENERAL_PURPOSE_DESCRIPTION,
        tools: Optional[List[BaseTool]] = None) -> SubAgentSpec
```

Create a general-purpose subagent specification.

<a id="spoon_ai.agents.subagents.create_compiled_subagent"></a>

#### `create_compiled_subagent`

```python
def create_compiled_subagent(name: str, description: str,
                             graph: Any) -> CompiledSubAgent
```

Create a CompiledSubAgent from a graph.

