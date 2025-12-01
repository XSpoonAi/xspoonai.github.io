# Tools

Tools are callable capabilities that agents use to interact with external systems—data sources, APIs, blockchains, and utilities. In SpoonOS, a tool is any `BaseTool` subclass with JSON-schema parameters and runtime validation. Tools are orchestrated through `ToolManager` locally or exposed/consumed via MCP (Model Context Protocol) for federated discovery.

**Key characteristics:**

- **Typed + validated** — JSON-schema parameters reduce LLM misuse
- **Pluggable** — ToolManager handles registration, lookup, and metadata
- **Extensible** — Works locally, with toolkit bundles, or over MCP

## Tool Types

### Local tools (`BaseTool`)

```python
from spoon_ai.tools.base import BaseTool

class HelloTool(BaseTool):
    name = "hello"
    description = "Return a greeting"
    parameters = {
        "type": "object",
        "properties": {
            "name": {"type": "string", "description": "Who to greet"}
        },
        "required": ["name"]
    }

    async def execute(self, name: str) -> str:
        return f"Hello, {name}!"
```
`__call__` forwards to `execute`, so `await tool(name="Ricky")` works.

### Tool Manager
`ToolManager` registers tools and executes them by name.
```python
from spoon_ai.tools import ToolManager
manager = ToolManager([HelloTool()])

result = await manager.execute(name="hello", tool_input={"name": "Ricky"})
```
Utility helpers:
- `to_params()` → list of OpenAI/JSON‑schema tool specs
- `add_tool(s)`, `remove_tool`, `get_tool`
- Optional semantic indexing (`index_tools`, `query_tools`) uses Pinecone + OpenAI embeddings (needs `PINECONE_API_KEY`, `OPENAI_API_KEY`).

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
