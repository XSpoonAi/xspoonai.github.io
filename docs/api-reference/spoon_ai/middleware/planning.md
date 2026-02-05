---
id: spoon_ai.middleware.planning
slug: /api-reference/spoon_ai/middleware/planning
title: spoon_ai.middleware.planning
---

# Table of Contents

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

