# Adding Custom Tools to SpoonOS

This guide shows you how to create and integrate custom tools into the SpoonOS framework. Tools extend agent capabilities by providing specific functionality like API integrations, data processing, or blockchain interactions.

## Tool Architecture Overview

SpoonOS uses a modular tool system where:

- **BaseTool**: Abstract base class defining the tool interface
- **ToolManager**: Manages tool collections and execution
- **MCP Integration**: Exposes tools via Model Context Protocol
- **Dynamic Loading**: Tools can be added at runtime

## Creating a Basic Tool

### Step 1: Define Your Tool Class

Create a new tool by inheriting from `BaseTool`:

```python
from spoon_ai.tools.base import BaseTool, ToolResult
from typing import Any, Dict

class MyCustomTool(BaseTool):
    name: str = "my_custom_tool"
    description: str = "A custom tool that processes data"
    parameters: dict = {
        "type": "object",
        "properties": {
            "input_data": {
                "type": "string",
                "description": "The data to process"
            },
            "options": {
                "type": "object",
                "description": "Optional processing parameters",
                "properties": {
                    "format": {"type": "string", "default": "json"}
                }
            }
        },
        "required": ["input_data"]
    }

    async def execute(self, input_data: str, options: Dict[str, Any] = None) -> ToolResult:
        """Execute the tool logic - framework handles errors automatically"""
        # Your tool logic here
        processed_data = self.process_data(input_data, options or {})

        return ToolResult(
            output=processed_data,
            system=f"Successfully processed {len(input_data)} characters"
        )

    def process_data(self, data: str, options: Dict[str, Any]) -> str:
        """Your custom processing logic"""
        # Example: simple data transformation
        format_type = options.get("format", "json")
        if format_type == "uppercase":
            return data.upper()
        return f'{{"processed": "{data}"}}'
```

### Step 2: Tool Parameters Schema

The `parameters` field defines the JSON schema for tool inputs:

```python
parameters: dict = {
    "type": "object",
    "properties": {
        "required_param": {
            "type": "string",
            "description": "A required parameter"
        },
        "optional_param": {
            "type": "integer",
            "description": "An optional parameter",
            "default": 42
        },
        "enum_param": {
            "type": "string",
            "enum": ["option1", "option2", "option3"],
            "description": "Choose from predefined options"
        }
    },
    "required": ["required_param"]
}
```

## Advanced Tool Examples

### API Integration Tool

```python
import aiohttp
from spoon_ai.tools.base import BaseTool, ToolResult

class APITool(BaseTool):
    name: str = "api_fetcher"
    description: str = "Fetches data from external APIs"
    parameters: dict = {
        "type": "object",
        "properties": {
            "url": {"type": "string", "description": "API endpoint URL"},
            "method": {"type": "string", "enum": ["GET", "POST"], "default": "GET"},
            "headers": {"type": "object", "description": "HTTP headers"}
        },
        "required": ["url"]
    }

    async def execute(self, url: str, method: str = "GET", headers: dict = None) -> ToolResult:
        # Framework provides automatic error handling and retry logic
        async with aiohttp.ClientSession() as session:
            async with session.request(method, url, headers=headers) as response:
                data = await response.json()
                return ToolResult(
                    output=data,
                    system=f"API call successful: {response.status}"
                )
```

### Blockchain Tool Example

```python
from web3 import Web3
from spoon_ai.tools.base import BaseTool, ToolResult

class BlockchainTool(BaseTool):
    name: str = "get_eth_balance"
    description: str = "Gets Ethereum balance for an address"
    parameters: dict = {
        "type": "object",
        "properties": {
            "address": {
                "type": "string",
                "description": "Ethereum address to check"
            },
            "network": {
                "type": "string",
                "enum": ["mainnet", "goerli", "sepolia"],
                "default": "mainnet"
            }
        },
        "required": ["address"]
    }

    def __init__(self):
        super().__init__()
        self.w3 = Web3(Web3.HTTPProvider("https://eth-mainnet.alchemyapi.io/v2/YOUR_KEY"))

    async def execute(self, address: str, network: str = "mainnet") -> ToolResult:
        # Framework handles validation and error cases automatically
        if not self.w3.is_address(address):
            return ToolResult(error="Invalid Ethereum address")

        balance_wei = self.w3.eth.get_balance(address)
        balance_eth = self.w3.from_wei(balance_wei, 'ether')

        return ToolResult(
            output={
                "address": address,
                "balance_eth": str(balance_eth),
                "balance_wei": str(balance_wei),
                "network": network
            }
        )
```

## Integrating Tools

### Method 1: Add to Tool Manager

```python
from spoon_ai.tools.tool_manager import ToolManager
from your_module import MyCustomTool

# Create tool manager with existing tools
tool_manager = ToolManager([])

# Add your custom tool
custom_tool = MyCustomTool()
tool_manager.add_tool(custom_tool)

# Or add multiple tools at once
tool_manager.add_tools(
    MyCustomTool(),
    APITool(),
    BlockchainTool()
)
```

### Method 2: Create Tool Collection

```python
# tools/my_tools.py
from typing import List
from spoon_ai.tools.base import BaseTool
from .my_custom_tool import MyCustomTool
from .api_tool import APITool

def get_my_tools() -> List[BaseTool]:
    """Return collection of custom tools"""
    return [
        MyCustomTool(),
        APITool(),
        # Add more tools here
    ]

def create_my_tool_manager() -> ToolManager:
    """Create tool manager with custom tools"""
    from spoon_ai.tools.tool_manager import ToolManager
    return ToolManager(get_my_tools())
```

### Method 3: MCP Integration

```python
# mcp_server.py
from fastmcp import FastMCP
from spoon_ai.tools.tool_manager import ToolManager
from your_tools import get_my_tools

mcp = FastMCP("My Custom Tools")

# Add tools to MCP server
tools = get_my_tools()
tool_manager = ToolManager(tools)

for tool in tools:
    mcp.add_tool(
        tool.execute,
        name=tool.name,
        description=tool.description
    )

if __name__ == "__main__":
    import asyncio
    asyncio.run(mcp.run_async(transport="sse", port=8766))
```

## Tool Configuration

### Environment Variables

```python
import os
from spoon_ai.tools.base import BaseTool, ToolResult

class ConfigurableTool(BaseTool):
    name: str = "configurable_tool"
    description: str = "Tool that uses environment configuration"

    def __init__(self):
        super().__init__()
        self.api_key = os.getenv("MY_API_KEY")
        self.base_url = os.getenv("MY_API_URL", "https://api.example.com")

        if not self.api_key:
            raise ValueError("MY_API_KEY environment variable required")

    async def execute(self, query: str) -> ToolResult:
        # Use self.api_key and self.base_url
        pass
```

### Configuration Class

```python
from pydantic import BaseModel
from typing import Optional

class ToolConfig(BaseModel):
    api_key: str
    base_url: str = "https://api.example.com"
    timeout: int = 30
    retries: int = 3

class ConfigurableTool(BaseTool):
    def __init__(self, config: ToolConfig):
        super().__init__()
        self.config = config

    async def execute(self, **kwargs) -> ToolResult:
        # Use self.config.api_key, etc.
        pass
```

## Error Handling Best Practices

### Framework Error Handling

```python
async def execute(self, **kwargs) -> ToolResult:
    # Framework provides automatic input validation and error handling
    if not kwargs.get("required_param"):
        return ToolResult(error="Missing required parameter")

    # Execute tool logic - framework handles network errors, timeouts, etc.
    result = await self.do_work(**kwargs)

    return ToolResult(
        output=result,
        system="Operation completed successfully"
    )
```

### Framework Monitoring

```python
from spoon_ai.tools.base import BaseTool, ToolResult

class MonitoredTool(BaseTool):
    async def execute(self, **kwargs) -> ToolResult:
        # Framework provides automatic logging and monitoring
        result = await self.do_work(**kwargs)

        # Framework tracks:
        # - Execution time and performance metrics
        # - Success/failure rates
        # - Parameter usage patterns
        # - Error frequencies and types
        return ToolResult(output=result)
```

## Testing Your Tools

### Unit Testing

```python
import pytest
from your_tools import MyCustomTool

@pytest.mark.asyncio
async def test_my_custom_tool():
    tool = MyCustomTool()

    # Test successful execution
    result = await tool.execute(input_data="test data")
    assert result.output is not None
    assert result.error is None

    # Test error handling
    result = await tool.execute(input_data="")
    assert result.error is not None

@pytest.mark.asyncio
async def test_tool_parameters():
    tool = MyCustomTool()

    # Test with optional parameters
    result = await tool.execute(
        input_data="test",
        options={"format": "uppercase"}
    )
    assert "TEST" in result.output
```

### Integration Testing

```python
from spoon_ai.tools.tool_manager import ToolManager
from your_tools import MyCustomTool

@pytest.mark.asyncio
async def test_tool_manager_integration():
    tool_manager = ToolManager([MyCustomTool()])

    # Test tool execution through manager
    result = await tool_manager.execute(
        name="my_custom_tool",
        tool_input={"input_data": "test"}
    )

    assert result.output is not None
```

## Tool Discovery and Documentation

### Auto-generating Tool Docs

```python
def generate_tool_docs(tools: List[BaseTool]) -> str:
    """Generate markdown documentation for tools"""
    docs = "# Available Tools

"

    for tool in tools:
        docs += f"## {tool.name}

"
        docs += f"{tool.description}

"
        docs += "### Parameters

"

        for param, config in tool.parameters.get("properties", {}).items():
            required = param in tool.parameters.get("required", [])
            docs += f"- **{param}** ({'required' if required else 'optional'}): {config.get('description', '')}
"

        docs += "
"

    return docs
```

### Tool Registry

```python
class ToolRegistry:
    """Central registry for tool discovery"""

    def __init__(self):
        self._tools = {}

    def register(self, tool_class: type):
        """Register a tool class"""
        tool = tool_class()
        self._tools[tool.name] = tool_class
        return tool_class

    def get_tool(self, name: str) -> BaseTool:
        """Get tool instance by name"""
        if name not in self._tools:
            raise ValueError(f"Tool {name} not found")
        return self._tools[name]()

    def list_tools(self) -> List[str]:
        """List all registered tool names"""
        return list(self._tools.keys())

# Usage
registry = ToolRegistry()

@registry.register
class MyTool(BaseTool):
    # Tool implementation
    pass
```

## Best Practices

### 1. Tool Naming

- Use descriptive, action-oriented names
- Follow snake_case convention
- Avoid generic names like "tool" or "helper"

### 2. Parameter Design

- Provide clear descriptions for all parameters
- Use appropriate data types and validation
- Set sensible defaults for optional parameters

### 3. Error Messages

- Be specific about what went wrong
- Include suggestions for fixing issues
- Don't expose sensitive information in errors

### 4. Performance

- Use async/await for I/O operations
- Leverage framework's built-in timeout handling
- Cache results when appropriate

### 5. Security

- Validate all inputs thoroughly
- Use environment variables for secrets
- Rely on framework's rate limiting features

## Next Steps

### 📚 **Custom Tool Examples**

#### 🔍 [MCP Spoon Search Agent](../examples/mcp-spoon-search-agent.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/mcp/spoon_search_agent.py)

**Custom tool integration demonstrated:**
- MCP server integration with custom search tools
- Web search capabilities using Tavily MCP
- Custom error handling for external API calls
- Real-world custom tool deployment patterns

**Key learning points:**
- How to wrap external APIs as custom tools
- MCP server integration patterns
- Error handling for unreliable external services
- Tool validation and testing strategies

#### 📊 [Graph Crypto Analysis](../examples/graph-crypto-analysis.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)

**Financial tool development:**
- Custom cryptocurrency data processing tools
- Real-time technical indicator calculations
- Multi-source data aggregation and validation
- Financial data error handling and recovery

**Key learning points:**
- Domain-specific tool development patterns
- Financial data validation techniques
- Multi-API integration strategies
- Performance optimization for data-intensive tools

#### 🎯 [Comprehensive Graph Demo](../examples/comprehensive-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/comprehensive_graph_demo.py)

**Advanced tool orchestration:**
- Custom routing and decision-making tools
- Memory management and context preservation tools
- Parallel processing coordination tools
- Performance monitoring and metrics tools

**Key learning points:**
- Complex tool interaction patterns
- State management in custom tools
- Performance optimization techniques
- Error recovery in multi-tool workflows

### 🛠️ **Development Resources**

- **[Core Concepts: Tools](../core-concepts/tools.md)** - Complete tool system understanding
- **[MCP Protocol](../core-concepts/mcp-protocol.md)** - Advanced integration patterns
- **[Tool API Reference](../api-reference/tools/base-tool.md)** - Complete development documentation

### 📖 **Additional Resources**

- **[Built-in Tools Reference](../api-reference/tools/builtin-tools.md)** - Explore existing tool implementations
- **[Graph System](../core-concepts/graph-system.md)** - Advanced workflow orchestration
- **[Agent Architecture](../core-concepts/agents.md)** - Tool-agent integration patterns

## Troubleshooting

### Common Issues

**Tool not found in manager:**

- Ensure tool is properly added to ToolManager
- Check tool name matches exactly
- Verify tool class inherits from BaseTool

**Parameter validation errors:**

- Check JSON schema syntax in parameters
- Ensure required parameters are marked correctly
- Validate parameter types match schema

**Execution failures:**

- Leverage framework's automatic error handling
- Check for missing dependencies or API keys
- Use framework's built-in debugging features
**Key learning points:**
- Domain-specific tool development patterns
- Financial data validation techniques
- Multi-API integration strategies
- Performance optimization for data-intensive tools

#### 🎯 [Comprehensive Graph Demo](../examples/comprehensive-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-ai/tree/main/spoon-cookbook/example/comprehensive_graph_demo.py)

**Advanced tool orchestration:**
- Custom routing and decision-making tools
- Memory management and context preservation tools
- Parallel processing coordination tools
- Performance monitoring and metrics tools

**Key learning points:**
- Complex tool interaction patterns
- State management in custom tools
- Performance optimization techniques
- Error recovery in multi-tool workflows

### 🛠️ **Development Resources**

- **[Core Concepts: Tools](../core-concepts/tools.md)** - Complete tool system understanding
- **[MCP Protocol](../core-concepts/mcp-protocol.md)** - Advanced integration patterns
- **[Tool API Reference](../api-reference/tools/base-tool.md)** - Complete development documentation

### 📖 **Additional Resources**

- **[Built-in Tools Reference](../api-reference/tools/builtin-tools.md)** - Explore existing tool implementations
- **[Graph System](../core-concepts/graph-system.md)** - Advanced workflow orchestration
- **[Agent Architecture](../core-concepts/agents.md)** - Tool-agent integration patterns

## Troubleshooting

### Common Issues

**Tool not found in manager:**

- Ensure tool is properly added to ToolManager
- Check tool name matches exactly
- Verify tool class inherits from BaseTool

**Parameter validation errors:**

- Check JSON schema syntax in parameters
- Ensure required parameters are marked correctly
- Validate parameter types match schema

**Execution failures:**

- Leverage framework's automatic error handling
- Check for missing dependencies or API keys
- Use framework's built-in debugging features