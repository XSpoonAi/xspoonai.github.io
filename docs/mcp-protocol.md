---
sidebar_position: 12
---

# MCP Protocol

The Model Context Protocol (MCP) is a powerful system that enables dynamic tool loading and execution in SpoonOS. It allows agents to discover and use tools at runtime without hardcoding or restarts.

## What is MCP?

MCP (Model Context Protocol) is a protocol-driven tool invocation system that provides:

- **Dynamic Tool Discovery**: Tools can be loaded and discovered at runtime
- **Transport Agnostic**: Supports stdio, HTTP, and SSE (Server-Sent Events) transports
- **Automatic Lifecycle Management**: SpoonOS manages tool server lifecycles
- **Extensible Architecture**: Easy to add new tools and services

## Transport Types

### 1. Stdio Transport (Recommended)

Stdio tools run as subprocesses and communicate via stdin/stdout. This is the recommended approach for most MCP integrations.

```python
from spoon_ai.tools.mcp_tool import MCPTool

tavily_tool = MCPTool(
    name="tavily-search",
    description="Performs a web search using the Tavily API.",
    mcp_config={
        "command": "npx",
        "args": ["--yes", "tavily-mcp"],
        "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
        "transport": "stdio"
    }
)
```

**Benefits of Stdio Transport:**

- No server management required
- Auto-managed lifecycle by SpoonOS
- Always up to date with latest tool versions
- Automatic restart on failures

### 2. HTTP Transport

For HTTP-based MCP servers, SpoonOS supports standard HTTP communication:

```python
# DeepWiki HTTP MCP Server Example
deepwiki_tool = MCPTool(
    name="deepwiki_http",
    description="DeepWiki HTTP MCP tool for repository analysis",
    mcp_config={
        "url": "https://mcp.deepwiki.com/mcp",
        "transport": "http",
        "timeout": 30,
        "headers": {
            "User-Agent": "SpoonOS-HTTP-MCP/1.0",
            "Accept": "application/json"
        }
    }
)
```

**Benefits of HTTP Transport:**

- Standard HTTP protocol
- Easy to deploy and scale
- Works through firewalls and proxies
- RESTful API compatibility
- No persistent connection management needed

**HTTP MCP Server Requirements:**

- Must implement MCP protocol over HTTP
- Should handle standard MCP methods (initialize, list_tools, call_tool)
- Supports JSON-RPC 2.0 over HTTP POST requests

### 3. SSE Transport (Server-Sent Events)

For real-time MCP servers using Server-Sent Events, SpoonOS provides streaming communication:

```python
# Firecrawl MCP Server Example (requires FIRECRAWL_API_KEY)
firecrawl_tool = MCPTool(
    name="firecrawl_web_scraper",
    description="Advanced web scraping and crawling using Firecrawl API",
    mcp_config={
        "url": f"https://mcp.firecrawl.dev/{os.getenv('FIRECRAWL_API_KEY')}/sse",
        "transport": "sse",
        "timeout": 60,
        "headers": {
            "User-Agent": "SpoonOS-MCP-Client/1.0",
            "Accept": "text/event-stream",
            "Cache-Control": "no-cache"
        }
    }
)

# Custom SSE MCP Server
custom_sse_tool = MCPTool(
    name="custom_sse_tool",
    description="Custom SSE MCP server for real-time data",
    mcp_config={
        "url": "http://localhost:8765/sse",
        "transport": "sse",
        "timeout": 30,
        "reconnect_interval": 5,
        "max_retries": 3
    }
)
```

**Benefits of SSE Transport:**

- Real-time streaming communication
- Persistent connection with automatic reconnection
- Server-initiated communication
- Built-in event handling and buffering
- Efficient for continuous data streams
- Standard HTTP-based protocol

**SSE MCP Server Requirements:**

- Must implement MCP protocol over Server-Sent Events
- Should send proper SSE formatted messages (data:, event:, id:)
- Must handle connection management and reconnection
- Should support standard MCP methods via SSE events

## Common MCP Tools

### Web Search Tools

```python
# Tavily Search
tavily_tool = MCPTool(
    name="tavily-search",
    description="Web search using Tavily API",
    mcp_config={
        "command": "npx",
        "args": ["-y", "tavily-mcp"],
        "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
        "transport": "stdio"
    }
)

# Brave Search
brave_tool = MCPTool(
    name="brave_search",
    description="Web search using Brave Search API",
    mcp_config={
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-brave-search"],
        "env": {"BRAVE_API_KEY": os.getenv("BRAVE_API_KEY")},
        "transport": "stdio"
    }
)
```

### Development Tools

```python
# GitHub integration
github_tool = MCPTool(
    name="github_tools",
    description="GitHub repository and issue management",
    mcp_config={
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"],
        "env": {"GITHUB_TOKEN": os.getenv("GITHUB_TOKEN")},
        "transport": "stdio"
    }
)

# File system operations
filesystem_tool = MCPTool(
    name="filesystem",
    description="File system operations",
    mcp_config={
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem"],
        "transport": "stdio"
    }
)
```

### Database Tools

```python
# SQLite database
sqlite_tool = MCPTool(
    name="sqlite",
    description="SQLite database operations",
    mcp_config={
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-sqlite"],
        "env": {"DATABASE_PATH": "/path/to/database.db"},
        "transport": "stdio"
    }
)

# PostgreSQL database
postgres_tool = MCPTool(
    name="postgres",
    description="PostgreSQL database operations",
    mcp_config={
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-postgres"],
        "env": {"DATABASE_URL": os.getenv("DATABASE_URL")},
        "transport": "stdio"
    }
)
```

## Configuration in config.json

You can configure MCP tools in your `config.json` file:

```json
{
  "agents": {
    "my_agent": {
      "class": "SpoonReactMCP",
      "tools": [
        {
          "name": "tavily-search",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["--yes", "tavily-mcp"],
            "env": {"TAVILY_API_KEY": "your-tavily-key"},
            "transport": "stdio"
          }
        },
        {
          "name": "deepwiki-docs",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "url": "https://mcp.deepwiki.com/mcp",
            "transport": "http",
            "timeout": 30
          }
        },
        {
          "name": "firecrawl-scraper",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "url": "https://mcp.firecrawl.dev/{FIRECRAWL_API_KEY}/sse",
            "transport": "sse",
            "timeout": 60
          }
        },
        {
          "name": "github_tools",
          "type": "mcp",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-github"],
            "env": {"GITHUB_TOKEN": "your-github-token"},
            "transport": "stdio"
          }
        }
      ]
    }
  }
}
```

## Transport Selection Guide

| Transport | Use Case | Pros | Cons |
|-----------|----------|------|------|
| **Stdio** | Most MCP tools (Tavily, GitHub, Brave) | Auto-managed, reliable, up-to-date | Limited to command-line tools |
| **HTTP** | Remote MCP servers, cloud services | Standard protocol, scalable, firewall-friendly | Requires running HTTP server, stateless |
| **SSE** | Real-time data streaming, live updates | Persistent connection, server push, event-driven | Complex connection management, server required |

## Best Practices

### 1. Choose the Right Transport

Use stdio transport for well-established MCP tools, HTTP for remote services, and SSE for real-time streaming:

```python
# Good: Using stdio for standard tools
tavily_tool = MCPTool(
    name="tavily-search",
    mcp_config={
        "command": "npx",
        "args": ["-y", "tavily-mcp"],
        "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
        "transport": "stdio"
    }
)

# Good: Using HTTP for remote MCP servers
deepwiki_tool = MCPTool(
    name="deepwiki-docs",
    mcp_config={
        "url": "https://mcp.deepwiki.com/mcp",
        "transport": "http",
        "timeout": 30
    }
)

# Good: Using SSE for real-time streaming services
firecrawl_tool = MCPTool(
    name="firecrawl-scraper",
    mcp_config={
        "url": f"https://mcp.firecrawl.dev/{os.getenv('FIRECRAWL_API_KEY')}/sse",
        "transport": "sse",
        "timeout": 60,
        "headers": {
            "Accept": "text/event-stream"
        }
    }
)
```

### 2. Environment Variable Management

Store API keys in environment variables, not in code:

```python
# Good: Using environment variables
mcp_config = {
    "command": "npx",
    "args": ["-y", "tavily-mcp"],
    "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
    "transport": "stdio"
}

# Bad: Hardcoding API keys
mcp_config = {
    "command": "npx",
    "args": ["-y", "tavily-mcp"],
    "env": {"TAVILY_API_KEY": "your-actual-api-key"},  # Don't do this!
    "transport": "stdio"
}
```

### 3. Error Handling

Set appropriate timeouts and retry attempts for all transport types:

```python
# Stdio transport with error handling
tavily_tool = MCPTool(
    name="tavily-search",
    mcp_config={
        "command": "npx",
        "args": ["-y", "tavily-mcp"],
        "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
        "transport": "stdio",
        "timeout": 30,
        "retry_attempts": 3
    }
)

# HTTP transport with error handling
http_tool = MCPTool(
    name="deepwiki-docs",
    mcp_config={
        "url": "https://mcp.deepwiki.com/mcp",
        "transport": "http",
        "timeout": 30,
        "headers": {
            "User-Agent": "SpoonOS-Agent/1.0"
        }
    }
)

# SSE transport with error handling
sse_tool = MCPTool(
    name="firecrawl-scraper",
    mcp_config={
        "url": f"https://mcp.firecrawl.dev/{os.getenv('FIRECRAWL_API_KEY')}/sse",
        "transport": "sse",
        "timeout": 60,
        "retry_attempts": 3,
        "reconnect_interval": 5,
        "max_reconnect_attempts": 10,
        "headers": {
            "Accept": "text/event-stream",
            "User-Agent": "SpoonOS-Agent/1.0"
        }
    }
)
```

### 4. Production-Ready Configuration

```python
def initialize_tools():
    """Initialize tools with production-ready configuration"""
    tools = []

    # Stdio transport tool
    tavily_tool = MCPTool(
        name="tavily-search",
        description="Web search using Tavily API",
        mcp_config={
            "command": "npx",
            "args": ["-y", "tavily-mcp"],
            "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
            "transport": "stdio",
            "timeout": 30
        }
    )
    tools.append(tavily_tool)

    # HTTP transport tool
    deepwiki_tool = MCPTool(
        name="deepwiki-docs",
        description="Access DeepWiki documentation",
        mcp_config={
            "url": "https://mcp.deepwiki.com/mcp",
            "transport": "http",
            "timeout": 30,
            "headers": {
                "User-Agent": "SpoonOS-Agent/1.0"
            }
        }
    )
    tools.append(deepwiki_tool)

    # SSE transport tool (if API key available)
    if os.getenv("FIRECRAWL_API_KEY"):
        firecrawl_tool = MCPTool(
            name="firecrawl-scraper",
            description="Web scraping using Firecrawl API",
            mcp_config={
                "url": f"https://mcp.firecrawl.dev/{os.getenv('FIRECRAWL_API_KEY')}/sse",
                "transport": "sse",
                "timeout": 60
            }
        )
        tools.append(firecrawl_tool)

    return tools
```

## Troubleshooting

### Common Issues

#### Stdio Tool Issues

**Problem**: Tool command not found

```bash
Error: Command 'npx' not found
```

**Solution**: Ensure Node.js and npm are installed and in PATH

**Problem**: Environment variables not loaded

```bash
Error: TAVILY_API_KEY is required
```

**Solution**: Check environment variable configuration in mcp_config

#### HTTP Tool Issues

**Problem**: Connection refused

```bash
Error: Connection refused to https://mcp.context7.com/mcp
```

**Solution**: Check network connectivity and ensure the HTTP server is accessible

**Problem**: Timeout errors

```bash
Error: Request timeout after 30 seconds
```

**Solution**: Increase timeout in mcp_config or check server performance

**Problem**: Authentication errors

```bash
Error: 401 Unauthorized
```

**Solution**: Verify API keys and authorization headers are correctly configured

#### SSE Tool Issues

**Problem**: Connection lost during streaming

```bash
Error: SSE connection lost after 30 seconds
```

**Solution**: Check `reconnect_interval` and `max_reconnect_attempts` settings, ensure stable network connection

**Problem**: Invalid event format

```bash
Error: Invalid SSE event format
```

**Solution**: Verify the SSE server sends proper formatted events (data:, event:, id: fields)

**Problem**: Timeout on initial connection

```bash
Error: SSE connection timeout
```

**Solution**: Increase timeout value, check server availability and network connectivity

**Problem**: API key invalid or expired

```bash
Error: Invalid or expired FIRECRAWL_API_KEY
```

**Solution**: Verify your Firecrawl API key is correct and active: `echo $FIRECRAWL_API_KEY`

### Debugging

1. **Enable debug logging**:

   ```python
   import logging
   logging.basicConfig(level=logging.DEBUG)
   ```

2. **Check tool availability**:

   ```python
   print(f"Available tools: {list(tool_manager.tool_map.keys())}")
   ```

3. **Test tool connectivity**:

   ```python
   result = await tool.execute("test_function", {})
   ```

## Creating Custom MCP Servers

You can create your own MCP servers using the MCP SDK. Here are examples from the actual SpoonOS codebase:

### Basic MCP Server Structure

```python
from fastmcp import FastMCP
from spoon_toolkits import GetContractEventsFromThirdwebInsight

mcp = FastMCP("SpoonAI MCP Tools")

@mcp.tool("get_contract_events")
async def get_contract_events(contract_address: str, event_name: str) -> str:
    """Get contract events from Thirdweb Insight API"""
    tool = GetContractEventsFromThirdwebInsight()
    result = await tool.execute(
        contract_address=contract_address,
        event_name=event_name
    )
    return result.output

if __name__ == "__main__":
    import asyncio
    asyncio.run(mcp.run_async(transport="sse", port=8765))
```

### Using MCP Tools in SpoonOS Agents

#### Single MCP Tool Integration

```python
from spoon_ai.agents.spoon_react_mcp import SpoonReactMCP
from spoon_ai.tools.mcp_tool import MCPTool
from spoon_ai.chat import ChatBot

# Create MCP tool
tavily_tool = MCPTool(
    name="tavily-search",
    description="Web search using Tavily API",
    mcp_config={
        "command": "npx",
        "args": ["-y", "tavily-mcp"],
        "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")}
    }
)

# Create agent with MCP tool
agent = SpoonReactMCP(
    llm=ChatBot(),
    tools=[tavily_tool],
    system_prompt="You are a research assistant with access to web search."
)

# Use the agent
async def main():
    result = await agent.run("Search for latest SpoonOS developments")
    print(result)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

#### Multiple MCP Tools Integration

```python
from spoon_ai.agents.spoon_react_mcp import SpoonReactMCP
from spoon_ai.tools.mcp_tool import MCPTool
from spoon_ai.chat import ChatBot

# Create multiple MCP tools
tools = [
    MCPTool(
        name="deepwiki_http",
        description="DeepWiki HTTP MCP tool",
        mcp_config={
            "url": "https://mcp.deepwiki.com/mcp",
            "transport": "http",
            "timeout": 30
        }
    ),
    MCPTool(
        name="deepwiki_sse",
        description="DeepWiki SSE MCP tool",
        mcp_config={
            "url": "https://mcp.deepwiki.com/sse",
            "transport": "sse",
            "timeout": 30
        }
    )
]

# Create agent with multiple MCP tools
agent = SpoonReactMCP(
    llm=ChatBot(),
    tools=tools,
    system_prompt="You have access to both HTTP and SSE MCP tools for comprehensive analysis."
)

# Use the agent
async def main():
    result = await agent.run("Analyze the XSpoonAi/spoon-core project using available tools")
    print(result)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

## Agent Configuration with MCP Tools

### Using MCP Tools in Agents

MCP tools can be configured in agents through the unified configuration system. Here's how to set up an agent with MCP tools:

#### 1. Configuration File Setup

Create or update your `config.json` file with MCP tool configurations:

```json
{
  "agents": {
    "research_agent": {
      "class": "SpoonReactMCP",
      "description": "Research agent with MCP search capabilities",
      "aliases": ["researcher", "search"],
      "config": {
        "max_steps": 12,
        "tool_choice": "auto"
      },
      "tools": [
        {
          "name": "tavily-search",
          "type": "mcp",
          "description": "Real-time web search powered by Tavily AI",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["--yes", "tavily-mcp"],
            "env": {
              "TAVILY_API_KEY": "your_tavily_api_key"
            },
            "transport": "stdio",
            "timeout": 30,
            "retry_attempts": 3,
            "autoApprove": ["tavily-search", "tavily-extract"]
          },
          "config": {
            "search_depth": "comprehensive",
            "include_images": false
          }
        },
        {
          "name": "github-mcp",
          "type": "mcp",
          "description": "GitHub repository and issue management",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-github"],
            "env": {
              "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token"
            },
            "transport": "stdio",
            "timeout": 45,
            "autoApprove": ["github-search", "github-issue-create"]
          }
        },
        {
          "name": "filesystem-mcp",
          "type": "mcp",
          "description": "Local filesystem operations",
          "enabled": true,
          "mcp_server": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
            "transport": "stdio",
            "timeout": 30,
            "autoApprove": ["read_file", "list_dir"]
          },
          "config": {
            "allowed_paths": ["/tmp", "/home/user/documents"],
            "max_file_size": "10MB"
          }
        }
      ]
    }
  }
}
```

#### 2. Programmatic Agent Setup

You can also configure agents with MCP tools programmatically:

```python
from spoon_ai.agents.spoon_react_mcp import SpoonReactMCP
from spoon_ai.tools.mcp_tool import MCPTool
from spoon_ai.chat import ChatBot
import os

# Create MCP tool instances
tavily_tool = MCPTool(
    name="tavily-search",
    description="Web search via Tavily MCP",
    mcp_config={
        "command": "npx",
        "args": ["--yes", "tavily-mcp"],
        "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
        "transport": "stdio",
        "timeout": 30,
        "autoApprove": ["tavily-search"]
    }
)

github_tool = MCPTool(
    name="github-tools",
    description="GitHub operations via MCP",
    mcp_config={
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"],
        "env": {"GITHUB_PERSONAL_ACCESS_TOKEN": os.getenv("GITHUB_TOKEN")},
        "transport": "stdio",
        "timeout": 45
    }
)

# Configure agent with MCP tools
agent = SpoonReactMCP(
    llm=ChatBot(),
    tools=[tavily_tool, github_tool],
    system_prompt="You are a research assistant with access to web search and GitHub operations."
)

# Use the agent
async def main():
    result = await agent.run("Search for SpoonOS repositories on GitHub and analyze recent activity")
    print(result)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

#### 3. Using ConfigManager for MCP Agent Initialization

For more advanced configuration management with MCP tools:

```python
from spoon_ai.config import ConfigManager
from spoon_ai.agents.spoon_react_mcp import SpoonReactMCP

async def create_mcp_agent_from_config(agent_name: str):
    # Initialize config manager
    config_manager = ConfigManager("config.json")

    # Load configuration
    config = config_manager.load_config()

    # Load agent tools from configuration (includes MCP tools)
    tools = await config_manager.load_agent_tools(agent_name)

    # Create MCP agent
    agent = SpoonReactMCP(
        llm=ChatBot(),
        tools=tools
    )

    # Apply agent-specific configuration
    agent_config = config.agents[agent_name]
    if agent_config.config:
        for key, value in agent_config.config.items():
            setattr(agent, key, value)

    return agent

# Usage
agent = await create_mcp_agent_from_config("research_agent")
result = await agent.run("Search for latest developments in AI agents")
```

### MCP Server Configuration Options

#### Stdio Transport Configuration

```json
{
  "mcp_server": {
    "command": "npx",
    "args": ["--yes", "tavily-mcp"],
    "env": {
      "TAVILY_API_KEY": "your_api_key"
    },
    "cwd": "/optional/working/directory",
    "transport": "stdio",
    "timeout": 30,
    "retry_attempts": 3,
    "autoApprove": ["tool1", "tool2"],
    "disabled": false
  }
}
```

#### HTTP/SSE Transport Configuration

```json
{
  "mcp_server": {
    "url": "https://api.example.com/mcp",
    "headers": {
      "Authorization": "Bearer your_token",
      "Content-Type": "application/json"
    },
    "transport": "http",
    "timeout": 60,
    "retry_attempts": 5,
    "reconnect_interval": 30,
    "autoApprove": ["all"]
  }
}
```

#### WebSocket Transport Configuration

```json
{
  "mcp_server": {
    "url": "wss://api.example.com/mcp",
    "headers": {
      "Authorization": "Bearer your_token"
    },
    "transport": "websocket",
    "timeout": 45,
    "retry_attempts": 3,
    "reconnect_interval": 60,
    "autoApprove": ["read", "write"]
  }
}
```

### MCP Tool Validation and Monitoring

```python
from spoon_ai.config import ConfigManager
from spoon_ai.tools.mcp_tool import MCPTool

async def validate_mcp_tools(agent_name: str):
    config_manager = ConfigManager("config.json")

    # Load tools
    tools = await config_manager.load_agent_tools(agent_name)

    # Validate MCP tools specifically
    for tool in tools:
        if isinstance(tool, MCPTool):
            try:
                # Check if MCP server is accessible
                await tool.validate_connection()
                print(f"✅ MCP Tool {tool.name}: Connected")
            except Exception as e:
                print(f"❌ MCP Tool {tool.name}: {e}")

# Validate MCP tools
await validate_mcp_tools("research_agent")
```

### MCP Tool Auto-Approval

```python
# Configure auto-approval for specific tools
mcp_config = {
    "autoApprove": [
        "tavily-search",        # Always approve search
        "github-search",        # Always approve GitHub search
        "read_file"            # Always approve file reading
    ]
}

# Or approve all tools from a server
mcp_config = {
    "autoApprove": ["all"]  # Approve all tools
}
```

### Best Practices for MCP Configuration

1. **Use appropriate timeouts**: Set reasonable timeouts based on tool complexity
2. **Configure auto-approval**: Use `autoApprove` for trusted, safe operations
3. **Monitor connections**: Regularly validate MCP server connectivity
4. **Handle failures gracefully**: Implement retry logic and fallback mechanisms
5. **Secure credentials**: Use environment variables for API keys and tokens

## Next Steps

- **[Built-in Tools](./builtin-tools)** - Learn about native SpoonOS tools
- **[Custom Tools](./custom-tools)** - Create your own tools
- **[Examples](./examples/custom-tools)** - See MCP tools in action
- **[MCP Protocol Documentation](https://modelcontextprotocol.io/)** - Official MCP docs
