---
id: spoon_ai.agents.graph_agent
slug: /api-reference/spoon_ai/agents/graph_agent.md
title: spoon_ai.agents.graph_agent
---

# Table of Contents

* [spoon\_ai.agents.graph\_agent](#spoon_ai.agents.graph_agent)
  * [GraphAgent](#spoon_ai.agents.graph_agent.GraphAgent)
    * [\_\_init\_\_](#spoon_ai.agents.graph_agent.GraphAgent.__init__)
    * [validate\_graph](#spoon_ai.agents.graph_agent.GraphAgent.validate_graph)
    * [run](#spoon_ai.agents.graph_agent.GraphAgent.run)
    * [step](#spoon_ai.agents.graph_agent.GraphAgent.step)
    * [get\_execution\_history](#spoon_ai.agents.graph_agent.GraphAgent.get_execution_history)
    * [get\_execution\_metadata](#spoon_ai.agents.graph_agent.GraphAgent.get_execution_metadata)
    * [clear\_state](#spoon_ai.agents.graph_agent.GraphAgent.clear_state)
    * [update\_initial\_state](#spoon_ai.agents.graph_agent.GraphAgent.update_initial_state)
    * [set\_preserve\_state](#spoon_ai.agents.graph_agent.GraphAgent.set_preserve_state)

<a id="spoon_ai.agents.graph_agent"></a>

# Module `spoon_ai.agents.graph_agent`

Graph-based agent implementation for SpoonOS.

This module provides the GraphAgent class that executes StateGraph workflows,
integrating the graph execution system with the existing agent architecture.

<a id="spoon_ai.agents.graph_agent.GraphAgent"></a>

## `GraphAgent` Objects

```python
class GraphAgent(BaseAgent)
```

An agent that executes StateGraph workflows.

This agent provides a bridge between the existing SpoonOS agent architecture
and the new graph-based execution system. It allows complex, stateful workflows
to be defined as graphs and executed with proper state management.

Key Features:
- Executes StateGraph workflows
- Maintains compatibility with existing agent interfaces
- Provides detailed execution logging and error handling
- Supports both sync and async node functions

<a id="spoon_ai.agents.graph_agent.GraphAgent.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize the GraphAgent.

**Arguments**:

- `graph` - StateGraph instance to execute
- `**kwargs` - Additional arguments passed to BaseAgent
  

**Raises**:

- `ValueError` - If no graph is provided

<a id="spoon_ai.agents.graph_agent.GraphAgent.validate_graph"></a>

#### `validate_graph`

```python
@validator('graph')
def validate_graph(cls, v)
```

Validate that the provided graph is a StateGraph instance.

<a id="spoon_ai.agents.graph_agent.GraphAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Execute the graph workflow.

This method overrides the base run method to invoke the compiled graph
instead of the traditional step-based execution loop.

**Arguments**:

- `request` - Optional input request to include in initial state
  

**Returns**:

  String representation of the execution result
  

**Raises**:

- `RuntimeError` - If agent is not in IDLE state
- `GraphExecutionError` - If graph execution fails

<a id="spoon_ai.agents.graph_agent.GraphAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Step method for compatibility with BaseAgent.

Since GraphAgent uses graph execution instead of step-based execution,
this method is not used in normal operation but is required by the
BaseAgent interface.

**Returns**:

  Status message indicating graph-based execution

<a id="spoon_ai.agents.graph_agent.GraphAgent.get_execution_history"></a>

#### `get_execution_history`

```python
def get_execution_history() -> list
```

Get the execution history from the last graph run.

**Returns**:

  List of execution steps with metadata

<a id="spoon_ai.agents.graph_agent.GraphAgent.get_execution_metadata"></a>

#### `get_execution_metadata`

```python
def get_execution_metadata() -> Dict[str, Any]
```

Get metadata from the last execution.

**Returns**:

  Dictionary containing execution metadata

<a id="spoon_ai.agents.graph_agent.GraphAgent.clear_state"></a>

#### `clear_state`

```python
def clear_state()
```

Clear preserved state and execution history.

<a id="spoon_ai.agents.graph_agent.GraphAgent.update_initial_state"></a>

#### `update_initial_state`

```python
def update_initial_state(updates: Dict[str, Any])
```

Update the initial state for future executions.

**Arguments**:

- `updates` - Dictionary of state updates to merge

<a id="spoon_ai.agents.graph_agent.GraphAgent.set_preserve_state"></a>

#### `set_preserve_state`

```python
def set_preserve_state(preserve: bool)
```

Enable or disable state preservation between runs.

**Arguments**:

- `preserve` - Whether to preserve state between runs

