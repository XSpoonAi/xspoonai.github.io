# Tools

## Introduction

Tools are the interface between AI agents and external systems—APIs, databases, blockchains, file systems, and other services. In SpoonOS, tools are strongly-typed callable units with JSON-schema parameter definitions, enabling LLMs to invoke them reliably with automatic input validation and structured output.

### Core Capabilities

- **Type Safety**: JSON-schema parameter definitions with runtime validation prevent malformed inputs from reaching execution
- **Unified Interface**: `BaseTool` abstract class provides consistent `execute()` method across all tool types
- **Orchestration**: `ToolManager` handles tool registration, lookup by name, parameter extraction for LLM function calling, and batch execution
- **MCP Integration**: Tools can be exposed as MCP servers or consumed from remote MCP servers for federated tool ecosystems
- **Semantic Search**: Optional Pinecone-based tool indexing for semantic tool discovery when tool sets are large
- **Crypto/Web3 Native**: Pre-built toolkits for CEX trading, DEX operations, on-chain data, and blockchain interactions

### Comparison with Other Tool Systems

| Aspect | SpoonOS Tools | LangChain Tools | OpenAI Function Calling |
|--------|--------------|-----------------|------------------------|
| **Definition** | `BaseTool` class with `execute()` method | `Tool` or `@tool` decorator | JSON schema in API request |
| **Validation** | JSON-schema + runtime type checking | Pydantic models optional | Server-side only |
| **Discovery** | `ToolManager` + optional semantic search | `load_tools()` for known tools | N/A (manual) |
| **Remote Tools** | MCP protocol (stdio, SSE, WebSocket) | Via API wrappers | N/A |
| **Bundling** | Toolkit packages (`spoon-toolkits`) | Community integrations | N/A |
| **Async Support** | Native `async execute()` | Mixed sync/async | N/A |

**When to choose SpoonOS Tools:**

- You need MCP protocol support for exposing or consuming remote tools
- You're building crypto/Web3 agents that need CEX, DEX, or on-chain toolkits
- You want semantic tool search for large tool collections
- You need consistent async execution across all tools

---

## Quick Start

```bash
pip install spoon-ai
```

```python
import asyncio
from spoon_ai.tools.base import BaseTool
from spoon_ai.tools import ToolManager

# Define a tool with JSON-schema parameters
class GreetTool(BaseTool):
    name = "greet"
    description = "Greet someone by name"
    parameters = {
        "type": "object",
        "properties": {"name": {"type": "string"}},
        "required": ["name"]
    }

    async def execute(self, name: str) -> str:
        return f"Hello, {name}!"

# Register and execute
manager = ToolManager([GreetTool()])

async def main():
    result = await manager.execute(name="greet", tool_input={"name": "World"})
    print(result)  # Hello, World!

asyncio.run(main())
```

---

## Tool Types

### Local Tools (`BaseTool`)

All tools inherit from `BaseTool` with three required attributes and one method:

```python
from spoon_ai.tools.base import BaseTool

class MyTool(BaseTool):
    name = "my_tool"                    # Unique identifier
    description = "What this tool does" # LLM reads this to decide when to use it
    parameters = {                      # JSON-schema for input validation
        "type": "object",
        "properties": {
            "arg1": {"type": "string", "description": "First argument"},
            "arg2": {"type": "integer", "default": 10}
        },
        "required": ["arg1"]
    }

    async def execute(self, arg1: str, arg2: int = 10) -> str:
        return f"Result: {arg1}, {arg2}"
```

The `__call__` method forwards to `execute()`, so `await tool(arg1="value")` works.

### ToolManager

Orchestrates tool registration, lookup, and execution:

```python
from spoon_ai.tools import ToolManager

manager = ToolManager([MyTool(), AnotherTool()])

# Execute by name
result = await manager.execute(name="my_tool", tool_input={"arg1": "hello"})

# Get tool specs for LLM function calling
specs = manager.to_params()  # List of OpenAI-compatible tool definitions
```

**Key methods:**

- `add_tool(tool)` / `add_tools([...])` — Register tools
- `remove_tool(name)` — Unregister by name
- `get_tool(name)` — Retrieve tool instance
- `to_params()` — Export OpenAI-compatible tool definitions
- `index_tools()` / `query_tools(query)` — Semantic search (requires Pinecone + OpenAI)

### Crypto toolkit (optional)
If `spoon-toolkits` is installed, you can load its crypto tools:
```python
from spoon_ai.tools.crypto_tools import get_crypto_tools, create_crypto_tool_manager

tools = get_crypto_tools()              # returns instantiated toolkit tools
manager = create_crypto_tool_manager()  # ToolManager with all crypto tools
```
Environment variables for these tools depend on the specific provider (e.g., `OKX_API_KEY`, `BITQUERY_API_KEY`, `RPC_URL`, etc.).

### MCP client tools (`MCPTool`)
`MCPTool` lets an agent call tools hosted on an MCP server.
```python
from spoon_ai.tools.mcp_tool import MCPTool

mcp_tool = MCPTool(
    mcp_config={
        "url": "http://localhost:8765",      # or ws://..., or command/args for stdio
        "transport": "sse",                  # optional: "sse" (default) | "http"
        "timeout": 30,
        "max_retries": 3,
    }
)
# The tool’s schema/description is fetched dynamically from the MCP server.
```
`MCPTool.execute(...)` will fetch the server’s tool list, align the name/parameters, and perform retries and health checks.

### MCP server (`MCPToolsCollection`)
You can expose local or toolkit tools as an MCP server:
```python
from spoon_ai.tools.mcp_tools_collection import MCPToolsCollection
import asyncio

mcp_tools = MCPToolsCollection()  # wraps spoon-toolkits tools if installed
asyncio.run(mcp_tools.run(port=8765))  # SSE server by default
```
This uses `fastmcp` under the hood and auto-registers each tool as an MCP `FunctionTool`.

## Configuration
- **Core**: none required for basic tools.
- **Embedding index (optional)**: `OPENAI_API_KEY`, `PINECONE_API_KEY`.
- **Crypto/toolkit tools**: provider-specific keys (e.g., `OKX_API_KEY`, `BITQUERY_API_KEY`, `RPC_URL`, `GOPLUSLABS_API_KEY`).
- **MCP**: set transport target via `mcp_config` (`url` or `command` + `args`/`env`).

## Best Practices
- Keep tools single-purpose with clear `parameters` JSON schema.
- Validate inputs inside `execute`; raise rich errors for better agent feedback.
- Prefer async I/O in `execute` to avoid blocking the event loop.
- Reuse `ToolManager` for name-based dispatch and tool metadata generation.
- When using toolkit or MCP tools, fail gracefully if optional dependencies or servers are missing.

## See Also
- API reference: `../api-reference/tools/base-tool.md`
- MCP protocol details: `./mcp-protocol.md`
- Custom tool guide: `../how-to-guides/add-custom-tools.md`
