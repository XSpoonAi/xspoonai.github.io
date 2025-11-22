# BaseTool API Reference

`BaseTool` defines the minimal interface every tool must implement. It is an `ABC` plus a Pydantic `BaseModel` so name/description/parameters are validated.

## Class Definition

```python
from spoon_ai.tools.base import BaseTool

class BaseTool(ABC, BaseModel):
    name: str                     # tool name exposed to the model
    description: str              # human-readable summary
    parameters: dict              # JSON Schema describing arguments

    async def __call__(self, *args, **kwargs) -> Any: ...
    @abstractmethod
    async def execute(self, *args, **kwargs) -> Any: ...
    def to_param(self) -> dict: ...   # OpenAI-style function descriptor
```

### Execution
- `__call__` simply forwards to `execute`, so tools can be awaited directly or via managers.
- `execute` must be implemented by subclasses; it can be async or sync, but the base signature expects `await`.

### Schema Export
- `to_param()` returns:
  ```json
  {
    "type": "function",
    "function": {
      "name": "<name>",
      "description": "<description>",
      "parameters": <parameters>
    }
  }
  ```
  Use this when wiring tools to LLM providers that expect OpenAI-style tool specs.

## Minimal Example

```python
class CalculatorTool(BaseTool):
    name = "calculator"
    description = "Add two numbers"
    parameters = {
        "type": "object",
        "properties": {
            "a": {"type": "number"},
            "b": {"type": "number"},
        },
        "required": ["a", "b"],
    }

    async def execute(self, a: float, b: float) -> float:
        return a + b
```

## Notes
- There are no helper methods like `validate_parameters` or `configure` in the core class; add them in subclasses if needed.
- Tools should raise their own exceptions or `ToolFailure` when something goes wrong.

## See Also
- `spoon_ai.tools.tool_manager.ToolManager` for registering and invoking tools.
- `spoon_ai.tools.mcp_tool.MCPLLMTool` for MCP-aware wrappers.
