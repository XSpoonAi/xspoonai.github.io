---
sidebar_position: 6
---

# Tools

Tools are the hands and eyes of your agents - they provide the capabilities to interact with the external world. SpoonOS supports both built-in tools and custom tools through a flexible, extensible architecture.

## What are Tools?

Tools in SpoonOS are discrete capabilities that agents can use to:

- **Access external APIs** (web search, databases, APIs)
- **Perform calculations** (math, data analysis, statistics)
- **Manipulate data** (file operations, data processing)
- **Interact with services** (blockchain, social media, messaging)
- **Execute code** (Python, shell commands, scripts)

## Tool Types

### 1. Built-in Tools

Built-in tools are core capabilities provided by the **spoon-toolkit** package. These tools are directly integrated into SpoonOS and include:

- **Crypto Data Tools**: Price data, trading history, wallet analysis, liquidity analysis
- **Data Platform Tools**: AI-powered search, academic research, social media analysis
- **ThirdWeb Tools**: Blockchain data and transaction analysis
- **Neo Blockchain Tools**: Complete Neo ecosystem tools (addresses, assets, contracts, transactions)
- **Crypto PowerData Tools**: Advanced market data and technical analysis

**📖 For detailed usage and configuration, see: [Built-in Tools Reference](./builtin-tools)**

### 2. MCP Tools

MCP (Model Context Protocol) tools enable dynamic tool loading from external servers. These tools provide:

- **Dynamic Discovery**: Tools loaded at runtime without restarts
- **Multiple Transports**: Support for stdio, HTTP, and SSE communication
- **Extensible Architecture**: Easy integration of third-party tools
- **Process Isolation**: Tools run in separate processes for stability

**📖 For detailed MCP protocol usage and configuration, see: [MCP Protocol Guide](./mcp-protocol)**

### 3. Custom Tools

Tools you create for specific use cases:

```python
from spoon_ai.tools.base import BaseTool

class CustomTool(BaseTool):
    name: str = "my_custom_tool"
    description: str = "Does something specific"

    async def execute(self, **kwargs) -> str:
        # Your custom logic here
        return "Tool result"
```

**📖 For detailed custom tool development, see: [Custom Tools Guide](./custom-tools)**

## Next Steps

- **[Built-in Tools Reference](./builtin-tools)** - Complete guide to using spoon-toolkit built-in tools
- **[MCP Protocol Guide](./mcp-protocol)** - Detailed MCP tool configuration and usage
- **[Custom Tools Guide](./custom-tools)** - Learn to create your own tools
- **[Examples](./examples/custom-tools)** - See tools in action

Ready to use tools? Start with the [Built-in Tools Reference](./builtin-tools)! 🔧
