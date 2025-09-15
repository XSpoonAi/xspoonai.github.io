# Base Node API Reference

The node system in SpoonOS provides the building blocks for graph execution. All nodes inherit from `BaseNode` and implement specific execution patterns.

## BaseNode Class

```python
from spoon_ai.graph import BaseNode
from abc import ABC
from typing import Generic, TypeVar, Dict, Any, Optional

State = TypeVar('State')

class BaseNode(ABC, Generic[State]):
    def __init__(self, name: str)
    self.name = name

    @abstractmethod
    async def __call__(self, state: State, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Execute the node logic"""
        pass

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}(name='{self.name}')"
```

## BaseNode Methods

### Constructor

#### `__init__(name: str)`

Initialize a node with a unique name.

**Parameters:**
- `name` (`str`): Unique identifier for the node

### Abstract Methods

#### `async __call__(state: State, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]`

Execute the node's logic. Must be implemented by subclasses.

**Parameters:**
- `state` (`State`): Current graph state
- `config` (`Optional[Dict[str, Any]]`): Optional configuration parameters

**Returns:**
- `Dict[str, Any]`: State updates from node execution

**Raises:**
- `NodeExecutionError`: When node execution fails

## RunnableNode Class

```python
from spoon_ai.graph import RunnableNode
from typing import Callable, Any

class RunnableNode(BaseNode[State]):
    def __init__(self, name: str, func: Callable[[State], Any])
    self.func = func

    async def __call__(self, state: State, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        # Execute wrapped function
```

### RunnableNode Features

- Wraps any callable (sync or async) function
- Handles multiple return types automatically
- Provides consistent error handling
- Supports both dict and tuple return formats

### Usage Examples

```python
# Simple function node
async def analyze_sentiment(state: MyState) -> Dict[str, Any]:
    text = state.get("text", "")
    sentiment = "positive" if "good" in text.lower() else "negative"
    return {"sentiment": sentiment, "confidence": 0.85}

node = RunnableNode("sentiment_analyzer", analyze_sentiment)

# Function returning tuple (updates, next_node)
def process_with_routing(state: MyState) -> tuple:
    result = {"processed": True}
    next_node = "success" if result["processed"] else "retry"
    return result, next_node

node = RunnableNode("processor", process_with_routing)
```

## ToolNode Class

```python
from spoon_ai.graph import ToolNode
from typing import List, Any

class ToolNode(BaseNode[State]):
    def __init__(self, name: str, tools: List[Any])
    self.tools = tools

    async def __call__(self, state: State, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        # Execute tools based on state
```

### ToolNode Features

- Executes multiple tools in sequence
- Extracts tool calls from state automatically
- Supports both sync and async tool execution
- Provides comprehensive error handling per tool

### Usage Examples

```python
from spoon_ai.tools import CalculatorTool, SearchTool

# Create tools
calculator = CalculatorTool()
search = SearchTool()
tools = [calculator, search]

# Create tool node
tool_node = ToolNode("tool_executor", tools)

# State with tool calls
state = {
    "tool_calls": [
        {"name": "calculator", "args": {"operation": "add", "a": 10, "b": 5}},
        {"name": "search", "args": {"query": "python tutorial", "limit": 5}}
    ]
}

# Execute tools
result = await tool_node(state)
# result["tool_results"] contains execution results
```

### Tool Call Format

```python
# Expected tool call format in state
{
    "tool_calls": [
        {
            "name": "tool_name",
            "args": {
                "param1": "value1",
                "param2": "value2"
            }
        }
    ]
}

# Tool result format
{
    "tool_results": [
        {
            "tool_call": {...},  # Original call
            "result": {...},     # Tool execution result
            "success": True,     # Execution success flag
            "error": None        # Error message if failed
        }
    ]
}
```

## ConditionNode Class

```python
from spoon_ai.graph import ConditionNode
from typing import Callable

class ConditionNode(BaseNode[State]):
    def __init__(self, name: str, condition_func: Callable[[State], str])
    self.condition_func = condition_func

    async def __call__(self, state: State, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        # Execute condition and return routing decision
```

### ConditionNode Features

- Evaluates conditions for routing decisions
- Supports both sync and async condition functions
- Returns routing decision in standardized format
- Provides clear error messages for condition failures

### Usage Examples

```python
# Simple condition function
def route_by_complexity(state: MyState) -> str:
    query = state.get("query", "")
    return "complex" if len(query) > 100 else "simple"

condition_node = ConditionNode("router", route_by_complexity)

# Async condition function
async def route_by_llm(state: MyState) -> str:
    # Use LLM to decide routing
    decision = await llm_manager.classify(state["query"])
    return decision

condition_node = ConditionNode("llm_router", route_by_llm)
```

### Condition Result Format

```python
# Condition node result
{
    "condition_result": "complex",  # The routing decision
    "next_node": "complex"         # Same as condition_result
}
```

## Custom Node Implementation

### Basic Custom Node

```python
from spoon_ai.graph import BaseNode

class CustomAnalysisNode(BaseNode[MyState]):
    def __init__(self, name: str, model_config: Dict[str, Any]):
        super().__init__(name)
        self.model_config = model_config

    async def __call__(self, state: MyState, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        # Custom logic here
        data = state.get("data", [])

        # Process data
        analysis = await self._analyze_data(data)

        # Return state updates
        return {
            "analysis_result": analysis,
            "processed_at": datetime.now().isoformat(),
            "model_used": self.model_config.get("model")
        }

    async def _analyze_data(self, data: List[Any]) -> Dict[str, Any]:
        # Implementation details
        pass
```

### Node with Configuration

```python
class ConfigurableNode(BaseNode[MyState]):
    def __init__(self, name: str, api_key: str, timeout: int = 30):
        super().__init__(name)
        self.api_key = api_key
        self.timeout = timeout

    async def __call__(self, state: MyState, config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        # Merge instance config with call config
        effective_config = {**self.__dict__, **(config or {})}

        # Use configuration in execution
        result = await self._call_external_api(
            state["query"],
            api_key=effective_config["api_key"],
            timeout=effective_config["timeout"]
        )

        return {"api_result": result}
```

## Node Patterns and Best Practices

### State Transformation Pattern

```python
class TransformerNode(BaseNode[MyState]):
    async def __call__(self, state: MyState, config=None) -> Dict[str, Any]:
        # Transform input data
        raw_data = state.get("raw_data", [])
        transformed = [self._transform_item(item) for item in raw_data]

        return {
            "transformed_data": transformed,
            "transformation_count": len(transformed),
            "transformation_timestamp": datetime.now().isoformat()
        }
```

### Validation Node Pattern

```python
class ValidationNode(BaseNode[MyState]):
    def __init__(self, name: str, validators: List[Callable]):
        super().__init__(name)
        self.validators = validators

    async def __call__(self, state: MyState, config=None) -> Dict[str, Any]:
        errors = []
        for validator in self.validators:
            try:
                validator(state)
            except Exception as e:
                errors.append(str(e))

        return {
            "validation_passed": len(errors) == 0,
            "validation_errors": errors,
            "validated_at": datetime.now().isoformat()
        }
```

### Aggregation Node Pattern

```python
class AggregationNode(BaseNode[MyState]):
    async def __call__(self, state: MyState, config=None) -> Dict[str, Any]:
        # Aggregate results from parallel branches
        branch_results = state.get("branch_results", [])
        aggregated = self._aggregate_results(branch_results)

        return {
            "aggregated_result": aggregated,
            "branch_count": len(branch_results),
            "aggregation_method": "weighted_average"
        }
```

## Error Handling

### Node-Level Error Handling

```python
class ResilientNode(BaseNode[MyState]):
    async def __call__(self, state: MyState, config=None) -> Dict[str, Any]:
        try:
            result = await self._execute_logic(state)
            return {
                "result": result,
                "success": True,
                "error": None
            }
        except Exception as e:
            logger.error(f"Node {self.name} failed: {e}")
            return {
                "result": None,
                "success": False,
                "error": str(e),
                "error_type": type(e).__name__
            }
```

### Retry Logic

```python
class RetryNode(BaseNode[MyState]):
    def __init__(self, name: str, max_retries: int = 3):
        super().__init__(name)
        self.max_retries = max_retries

    async def __call__(self, state: MyState, config=None) -> Dict[str, Any]:
        for attempt in range(self.max_retries):
            try:
                return await self._execute_with_retry(state)
            except Exception as e:
                if attempt == self.max_retries - 1:
                    raise NodeExecutionError(
                        f"Failed after {self.max_retries} attempts",
                        node_name=self.name,
                        original_error=e,
                        state=state
                    ) from e
                await asyncio.sleep(2 ** attempt)  # Exponential backoff
```

## Testing Nodes

### Unit Testing Pattern

```python
import pytest
from unittest.mock import AsyncMock

@pytest.mark.asyncio
async def test_custom_node():
    node = CustomAnalysisNode("test_node", {"model": "test"})

    # Mock the internal method
    node._analyze_data = AsyncMock(return_value={"score": 0.95})

    state = {"data": [1, 2, 3]}
    result = await node(state)

    assert result["analysis_result"]["score"] == 0.95
    assert result["success"] is True
```

### Integration Testing

```python
@pytest.mark.asyncio
async def test_node_in_graph():
    # Create a simple graph with the node
    graph = StateGraph(MyState)
    graph.add_node("test_node", CustomAnalysisNode("test", {}))
    graph.set_entry_point("test_node")
    graph.add_edge("test_node", END)

    compiled = graph.compile()
    result = await compiled.invoke({"data": [1, 2, 3]})

    assert "analysis_result" in result
```

## Performance Considerations

### Async Best Practices

```python
class OptimizedNode(BaseNode[MyState]):
    async def __call__(self, state: MyState, config=None) -> Dict[str, Any]:
        # Use asyncio.gather for concurrent operations
        results = await asyncio.gather(
            self._fetch_data_a(state),
            self._fetch_data_b(state),
            self._process_data(state)
        )

        return {
            "combined_result": self._combine_results(results)
        }
```

### Memory Management

```python
class MemoryEfficientNode(BaseNode[MyState]):
    async def __call__(self, state: MyState, config=None) -> Dict[str, Any]:
        # Process data in chunks to manage memory
        data = state.get("large_dataset", [])
        chunk_size = 1000

        results = []
        for i in range(0, len(data), chunk_size):
            chunk = data[i:i + chunk_size]
            chunk_result = await self._process_chunk(chunk)
            results.extend(chunk_result)

            # Allow other tasks to run
            await asyncio.sleep(0)

        return {"processed_data": results}
```

## See Also

- [StateGraph API](state-graph.md) - How to use nodes in graphs
- [Graph Agent API](graph-agent.md) - Agent-level node execution
- [Graph System Overview](../../core-concepts/graph-system.md) - Node concepts and patterns

