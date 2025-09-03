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

**📖 For detailed usage and configuration, see: [Built-in Tools Reference](../api-reference/tools/builtin-tools.md)**

### 2. MCP Tools

MCP (Model Context Protocol) tools enable dynamic tool loading from external servers. These tools provide:

- **Dynamic Discovery**: Tools loaded at runtime without restarts
- **Multiple Transports**: Support for stdio, HTTP, and SSE communication
- **Extensible Architecture**: Easy integration of third-party tools
- **Process Isolation**: Tools run in separate processes for stability

**📖 For detailed MCP protocol usage and configuration, see: [MCP Protocol Guide](./mcp-protocol.md)**

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

**📖 For detailed custom tool development, see: [How-To Guide: Add Custom Tools](../how-to-guides/add-custom-tools.md)**

## Next Steps

- **[Built-in Tools Reference](../api-reference/tools/builtin-tools.md)** - Complete guide to using spoon-toolkit built-in tools
- **[MCP Protocol Guide](./mcp-protocol.md)** - Detailed MCP tool configuration and usage
- **[Custom Tools Guide](../how-to-guides/add-custom-tools.md)** - Learn to create your own tools
- **[Examples](../examples/basic-chatbot/README.md)** - See tools in action

Ready to use tools? Start with the [Built-in Tools Reference](../api-reference/tools/builtin-tools.md)! 🔧
- **Access** real-time information

## Built-in Tools

### Crypto & Trading Tools

**CryptoTools** - Market data and price information
```python
from spoon_ai.tools.crypto_tools import CryptoTools

# Get current Bitcoin price
price = await crypto_tools.get_price("BTC")
```

**Web3Tools** - Blockchain interaction
```python
from spoon_ai.tools.web3_tools import Web3Tools

# Get wallet balance
balance = await web3_tools.get_balance("0x742d35Cc6634C0532925a3b8D4C9db96590e4265")
```

### Data & Analysis Tools

**ChainbaseTools** - Comprehensive blockchain data
```python
from spoon_toolkits.chainbase import ChainbaseTools

# Get token information
token_info = await chainbase_tools.get_token_info("0xA0b86a33E6441E6C8D3c8C7C5b998e7d8e4C8e8e")
```

**GoPlusLabsTools** - Security analysis
```python
from spoon_toolkits.gopluslabs import GoPlusLabsTools

# Check token security
security = await goplus_tools.token_security("0xA0b86a33E6441E6C8D3c8C7C5b998e7d8e4C8e8e")
```

### Storage Tools

**StorageTools** - Decentralized storage
```python
from spoon_toolkits.storage import StorageTools

# Upload file to IPFS
hash = await storage_tools.upload_file("document.pdf")
```

## Tool Manager

The Tool Manager handles tool registration, discovery, and execution:

```python
from spoon_ai.tools import ToolManager
from spoon_ai.tools.crypto_tools import CryptoTools

# Create tool manager
tool_manager = ToolManager([
    CryptoTools(),
    Web3Tools()
])

# Execute tool
result = await tool_manager.execute_tool("get_price", {"symbol": "BTC"})
```

## MCP (Model Context Protocol) Tools

MCP enables dynamic tool discovery and execution:

```python
from spoon_ai.tools.mcp_tools_collection import MCPToolsCollection

# Initialize MCP tools
mcp_tools = MCPToolsCollection()

# Discover available tools
tools = await mcp_tools.discover_tools()

# Execute MCP tool
result = await mcp_tools.execute("weather_tool", {"location": "New York"})
```

## Creating Custom Tools

### Basic Tool Structure

```python
from spoon_ai.tools.base import BaseTool
from typing import Dict, Any

class CustomTool(BaseTool):
    name: str = "custom_tool"
    description: str = "Description of what this tool does"
    parameters: dict = {
        "type": "object",
        "properties": {
            "param1": {"type": "string", "description": "Parameter description"}
        },
        "required": ["param1"]
    }

    async def execute(self, param1: str) -> str:
        # Tool implementation
        return f"Result: {param1}"
```

### Tool Registration

```python
# Register custom tool
from spoon_ai.tools import ToolManager

tool_manager = ToolManager([CustomTool()])

# Use in agent
agent = SpoonReactAI(
    llm=ChatBot(model_name="gpt-4.1", llm_provider="openai"),
    tools=[CustomTool()]
)
```

### Advanced Tool Features

**Async Operations**
```python
import aiohttp

class APITool(BaseTool):
    async def execute(self, endpoint: str) -> dict:
        async with aiohttp.ClientSession() as session:
            async with session.get(endpoint) as response:
                return await response.json()
```

**Error Handling**

```python
class RobustTool(BaseTool):
    async def execute(self, data: str) -> str:
        # Framework handles errors automatically with graceful degradation
        return self.process_data(data)
```

## Tool Configuration

### Environment Variables
```bash
# API Keys for tools
COINGECKO_API_KEY=your_key_here
CHAINBASE_API_KEY=your_key_here
GOPLUS_API_KEY=your_key_here
```

### Runtime Configuration
```json
{
  "tools": {
    "enabled": ["crypto_tools", "web3_tools"],
    "crypto_tools": {
      "default_currency": "USD",
      "cache_duration": 300
    }
  }
}
```

## Best Practices

### Tool Design

- **Single Responsibility** - Each tool should have one clear purpose
- **Clear Parameters** - Use descriptive parameter names and types
- **Error Handling** - Leverage framework's automatic error handling
- **Documentation** - Provide clear descriptions and examples

### Performance

- **Caching** - Cache expensive API calls when appropriate
- **Async Operations** - Use async/await for I/O operations
- **Rate Limiting** - Respect API rate limits

### Security

- **Input Validation** - Validate all input parameters
- **API Key Management** - Store keys securely in environment variables
- **Permission Checks** - Verify permissions before executing sensitive operations

## Tool Categories

### Data Sources

- Market data APIs (CoinGecko, CoinMarketCap)
- Blockchain data (Chainbase, Alchemy)
- Social media APIs (Twitter, Discord)

### Execution Tools

- Blockchain transactions (Web3, Solana)
- File operations (Storage, IPFS)
- Communication (Email, Slack)

### Analysis Tools

- Security scanning (GoPlus Labs)
- Technical analysis (Trading indicators)
- Data processing (Pandas, NumPy)

## Next Steps

- [MCP Protocol](./mcp-protocol.md) - Learn about dynamic tool discovery
- [Custom Tool Development](../how-to-guides/add-custom-tools.md) - Build your own tools
- [Tool Examples](../examples/custom-tools.md) - See practical examples