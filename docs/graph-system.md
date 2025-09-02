---
sidebar_position: 9
---

# Graph System Documentation

## Overview

The Graph System is a powerful workflow orchestration framework that enables you to create complex, multi-step AI workflows using a graph-based approach. It provides advanced state management, dynamic routing, parallel execution, monitoring, and robust error handling with enterprise-grade features.

## Table of Contents

1. [Graph Creation and Basic Usage](#graph-creation-and-basic-usage)
2. [State Management](#state-management)
3. [Node Development](#node-development)
4. [Edge Configuration and Flow Control](#edge-configuration-and-flow-control)
5. [Advanced Execution Patterns](#advanced-execution-patterns)
6. [LLM Integration](#llm-integration)
7. [Error Handling and Recovery](#error-handling-and-recovery)
8. [Streaming and Monitoring](#streaming-and-monitoring)
9. [Complex Workflows](#complex-workflows)

## Quick Start

### Basic Graph Example

```python
from spoon_ai.graph import StateGraph
from typing import TypedDict, Dict, Any

class MyState(TypedDict):
    counter: int
    messages: list
    completed: bool

# Create graph with state schema
graph = StateGraph(MyState)

# Define node functions
async def process_input(state, context: NodeContext):
    """Process the input text"""
    processed = state["input_text"].upper()

    return NodeResult(
        updates={
            "processed_text": processed,
            "timestamp": datetime.now().isoformat()
        },
        confidence=0.9,
        metadata={"processing_method": "uppercase"}
    )

async def generate_result(state, context: NodeContext):
    """Generate the final result"""
    result = f"Result: {state['processed_text']} (processed at {state['timestamp']})"

    return NodeResult(
        updates={"final_result": result},
        confidence=0.95
    )

# Add nodes to graph
graph.add_node("process", process_input)
graph.add_node("generate", generate_result)

# Add edges
graph.add_edge("process", "generate")
graph.set_entry_point("process")

# Compile and execute
compiled = graph.compile()
result = await compiled.invoke({"input_text": "hello world"})

print(f"Final result: {result['final_result']}")
print(f"Confidence: {result.get('confidence', 0):.1%}")

# Get execution metrics
metrics = compiled.get_execution_metrics()
print(f"Total executions: {metrics['total_executions']}")
print(f"Success rate: {metrics['success_rate']:.1%}")
```

## Core Concepts

### StateGraph Architecture

The `StateGraph` is the main building block for creating workflows:

```python
from spoon_ai.graph import StateGraph, NodeContext, NodeResult, RouterResult
from spoon_ai.graph.checkpointer import InMemoryCheckpointer

# Define state schema
class MyState:
    input_data: str = ""
    processed_data: str = ""
    results: list = []
    confidence: float = 0.0
    metadata: dict = {}

# Create graph with advanced configuration
graph = StateGraph(MyState)

# Configure checkpointing with memory management
checkpointer = InMemoryCheckpointer(
    max_checkpoints_per_thread=10,
    max_threads=100,
    ttl_seconds=3600  # 1 hour TTL
)
graph.set_checkpointer(checkpointer)

# Enable monitoring
graph.enable_monitoring(["execution_time", "success_rate", "memory_usage"])

# Set automatic state cleanup
graph.set_default_state_cleanup()
```

### State Reducers

Use reducers to control how state updates are merged:

```python
from typing import Annotated
from spoon_ai.graph import add_messages, merge_dicts, append_history

class WorkflowState(TypedDict):
    # List operations
    messages: Annotated[List[Dict], add_messages]  # Append new messages
    execution_log: Annotated[List[str], append_history]  # Add to history

    # Dictionary operations
    analysis_results: Annotated[Dict[str, Any], merge_dicts]  # Deep merge

    # Simple replacement (default behavior)
    current_step: str
    status: str
```

### Command Objects for Fine Control

Use `Command` objects for advanced state control:

```python
from spoon_ai.graph import Command

def advanced_node(state: MyState) -> Command:
    """Node with advanced control over execution"""
    if state["counter"] >= 5:
        return Command(
            update={"completed": True},
            goto="END"
        )
    else:
        return Command(
            update={"counter": state["counter"] + 1},
            goto="increment"
        )
```

## Node Development

### Basic Node Structure

```python
def process_data(state: MyState) -> Dict[str, Any]:
    """Standard node function"""
    # Process state data
    input_data = state.get("input_data", [])

    # Perform computation
    processed = [item.upper() for item in input_data]

    # Return state updates
    return {
        "processed_data": processed,
        "step_count": state.get("step_count", 0) + 1
    }
```

### Async Node Functions

```python
import asyncio

async def fetch_external_data(state: MyState) -> Dict[str, Any]:
    """Async node for external API calls"""
    # Simulate API call
    await asyncio.sleep(1)

    # Fetch data
    api_data = {"source": "external", "data": [1, 2, 3]}

    return {"external_data": api_data}
```

### Error Handling in Nodes

```python
def safe_node(state: MyState) -> Dict[str, Any]:
    """Node with error handling"""
    try:
        # Potentially failing operation
        result = risky_operation(state["input"])
        return {"result": result, "error": None}
    except Exception as e:
        return {
            "result": None,
            "error": str(e),
            "status": "failed"
        }
```

## Edge Configuration and Flow Control

### Conditional Edges

Route execution based on state conditions:

```python
def route_based_on_count(state: MyState) -> str:
    """Conditional routing function"""
    if state["counter"] < 3:
        return "continue"
    elif state["counter"] < 5:
        return "warning"
    else:
        return "stop"

# Add conditional edge
graph.add_conditional_edges(
    "increment",
    route_based_on_count,
    {
        "continue": "increment",
        "warning": "warning_node",
        "stop": "END"
    }
)
```

### Complex Routing Logic

```python
def intelligent_router(state: ChatState) -> str:
    """Multi-condition routing"""
    messages = state["messages"]

    # Check for specific conditions
    if not messages:
        return "greeting"

    last_message = messages[-1]["content"].lower()

    if "help" in last_message:
        return "help"
    elif "data" in last_message:
        return "data_processing"
    elif "exit" in last_message:
        return "END"
    else:
        return "conversation"
```

## Advanced Execution Patterns

### Parallel Execution

Execute multiple nodes simultaneously:

```python
from spoon_ai.graph import StateGraph

class ParallelState(TypedDict):
    results: Dict[str, Any]
    execution_time: float

async def task_a(state: ParallelState) -> Dict[str, Any]:
    await asyncio.sleep(1)
    return {"results": {"task_a": "done"}}

async def task_b(state: ParallelState) -> Dict[str, Any]:
    await asyncio.sleep(1)
    return {"results": {"task_b": "done"}}

# Create graph with parallel execution
graph = StateGraph(ParallelState)
graph.add_node("task_a", task_a, parallel_group="parallel_tasks")
graph.add_node("task_b", task_b, parallel_group="parallel_tasks")

# Aggregation node
def aggregate_results(state: ParallelState) -> Dict[str, Any]:
    return {"execution_time": 1.0}

graph.add_node("aggregate", aggregate_results)
graph.add_edge("task_a", "aggregate")
graph.add_edge("task_b", "aggregate")
```

### Loop Patterns

Create iterative workflows:

```python
def loop_condition(state: MyState) -> str:
    """Determine if loop should continue"""
    if state["counter"] >= 10:
        return "END"
    elif state["counter"] % 2 == 0:
        return "even_processing"
    else:
        return "odd_processing"

# Set up loop
graph.add_conditional_edges(
    "process",
    loop_condition,
    {
        "even_processing": "even_node",
        "odd_processing": "odd_node",
        "END": "END"
    }
)
```

## LLM Integration

### Basic LLM Node

```python
async def llm_chat_node(state: ChatState) -> Dict[str, Any]:
    """Node that uses LLM for response generation"""
    from spoon_ai.llm.manager import LLMManager

    llm_manager = LLMManager()

    # Prepare messages for LLM
    messages = state["messages"]

    # Get LLM response
    response = await llm_manager.chat(messages)

    # Add response to state
    return {
        "messages": [{"role": "assistant", "content": response["content"]}]
    }
```

### LLM-Driven Routing

```python
from spoon_ai.graph import RouterResult, router_decorator

@router_decorator
async def llm_router(state: ChatState, context) -> RouterResult:
    """LLM decides next action"""
    from spoon_ai.llm.manager import LLMManager

    llm_manager = LLMManager()

    # Create decision prompt
    prompt = f"""
    Based on the conversation, what should we do next?

    Messages: {state['messages']}

    Options:
    - continue_chat: Keep talking
    - data_analysis: Analyze data
    - end_conversation: End chat
    """

    response = await llm_manager.chat([{"role": "user", "content": prompt}])

    # Parse decision
    content = response["content"].lower()
    if "data_analysis" in content:
        return RouterResult(next_node="data_analysis", confidence=0.8)
    elif "end" in content:
        return RouterResult(next_node="END", confidence=0.9)
    else:
        return RouterResult(next_node="continue_chat", confidence=0.7)
```

## Best Practices

### 1. State Design
- Use clear state schemas with TypedDict
- Keep state minimal and focused
- Use appropriate reducers for different data types

### 2. Node Development
- Make nodes pure functions when possible
- Handle errors gracefully within nodes
- Use NodeResult for rich return values
- Leverage NodeContext for execution metadata

### 3. Parallel Execution
- Group related operations in parallel groups
- Choose appropriate join strategies (all_complete, any_first, quorum)
- Configure timeouts and error handling
- Use custom join conditions when needed

### 4. Memory Management
- Enable automatic state cleanup with `set_default_state_cleanup()`
- Configure checkpointer limits (max_threads, ttl_seconds)
- Monitor memory usage in long-running workflows

### 5. Error Handling
- Use appropriate error strategies for parallel groups
- Implement recovery patterns with RouterResult
- Leverage checkpoint resume for fault tolerance

### 6. Monitoring
- Enable execution monitoring for production workflows
- Track node performance metrics with `get_execution_metrics()`
- Use streaming for real-time monitoring

## Summary

The Graph System provides a comprehensive framework for building complex AI workflows with:

- **Advanced State Management**: Robust state handling with automatic merging and cleanup
- **Parallel Execution**: Sophisticated parallel processing with multiple strategies
- **Dynamic Routing**: RouterResult-based intelligent flow control
- **Memory Management**: Automatic garbage collection and resource optimization
- **Error Handling**: Comprehensive error collection and recovery mechanisms
- **Monitoring**: Real-time execution metrics and performance tracking
- **Checkpointing**: Reliable state persistence and resume capabilities
- **Streaming**: Real-time execution monitoring and state streaming

For complex real-world implementations, refer to the complete crypto analysis example at `spoon-core/examples/graph_crypto_analysis.py`.

## Next Steps

- **[Examples](./examples/graph-workflows)** - See graph workflows in action
- **[Advanced Guides](./building-agents)** - Build complex agent architectures
- **[Custom Tools](./custom-tools)** - Create tools for your workflows
