# Tools

Tools are **callable capabilities** that let agents interact with the outside world—APIs, databases, blockchains, file systems, and any other external service. Without tools, an LLM can only generate text. With tools, it can take action.

## Why Tools?

An LLM doesn't know today's Bitcoin price, can't send emails, and has no way to query your database. Tools bridge this gap:

```mermaid
graph LR
    A[Agent] -->|"call tool"| B[Tool: get_price]
    B -->|"API call"| C[Binance API]
    C -->|"$67,432"| B
    B -->|"return"| A
    A -->|"Bitcoin is $67,432"| D[User]
```

SpoonOS tools are:

- **Typed** — JSON-schema parameters prevent LLM hallucination of invalid inputs
- **Validated** — Runtime checks ensure data integrity before execution
- **Async** — Non-blocking I/O for high-performance agent loops
- **Composable** — Bundle tools into toolkits, share via MCP protocol

## Tool Anatomy

Every SpoonOS tool has three parts:

| Part | Purpose | Example |
|------|---------|---------|
| **name** | Unique identifier the LLM uses to call the tool | `"get_crypto_price"` |
| **description** | Natural language explanation of what the tool does | `"Get real-time price for a cryptocurrency"` |
| **parameters** | JSON-schema defining expected inputs | `{"symbol": {"type": "string"}}` |

The LLM reads the description to decide *when* to use a tool and the parameters to know *how* to call it.

## What Can You Build?

| Tool Type | Examples |
|-----------|----------|
| **Data retrieval** | Web search, database queries, API calls |
| **Crypto/Web3** | CEX trading, DEX swaps, on-chain reads, wallet operations |
| **File operations** | Read/write files, parse documents, generate reports |
| **Communication** | Send emails, post to Slack, create tickets |
| **Computation** | Run code, execute SQL, perform calculations |

## SpoonOS vs Other Tool Systems

| Feature | SpoonOS | LangChain | OpenAI Functions |
|---------|---------|-----------|------------------|
| **Definition** | `BaseTool` class | `@tool` decorator | JSON in API call |
| **Validation** | JSON-schema + runtime | Optional Pydantic | Server-side only |
| **Remote tools** | MCP protocol (stdio/SSE/WS) | API wrappers | N/A |
| **Discovery** | `ToolManager` + semantic search | `load_tools()` | Manual |
| **Crypto native** | Built-in CEX/DEX/on-chain | Third-party | N/A |

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
If you install `spoon-toolkits`, import the concrete tools you need:
```python
from spoon_toolkits import CryptoPowerDataPriceTool, CryptoPowerDataCEXTool
from spoon_ai.tools import ToolManager

crypto_tools = [
    CryptoPowerDataPriceTool(),
    CryptoPowerDataCEXTool(),
]
manager = ToolManager(crypto_tools)
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
