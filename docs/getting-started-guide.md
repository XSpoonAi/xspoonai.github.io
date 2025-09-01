---
sidebar_position: 2
---

# 🚀 Getting Started Guide

This comprehensive guide will get you up and running with SpoonOS quickly. Follow these steps to install, configure, and create your first AI agent.

## Prerequisites

- Python 3.10 or higher
- Node.js 16+ (for MCP tools)
- Git (for cloning repositories)

## Step 1: Installation

### Option 1: Install from PyPI (Recommended)

```bash
pip install spoon-ai-sdk
```

### Option 2: Install from Source

```bash
git clone https://github.com/XSpoonAi/spoon-core.git
cd spoon-core
pip install -e .
```

### Verify Installation

```bash
python -c "import spoon_ai; print('SpoonOS installed successfully!')"
```

## Step 2: Environment Setup

Create a `.env` file in your project directory:

```bash
# Core LLM Provider (Required)
OPENAI_API_KEY=sk-your-openai-api-key

# Optional: Alternative LLM Providers
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
DEEPSEEK_API_KEY=your-deepseek-key
GEMINI_API_KEY=your-gemini-key

# Optional: MCP Tools
TAVILY_API_KEY=your-tavily-search-key
GITHUB_TOKEN=your-github-token

# Optional: Crypto Tools
OKX_API_KEY=your-okx-api-key
OKX_SECRET_KEY=your-okx-secret-key
OKX_API_PASSPHRASE=your-okx-passphrase
CHAINBASE_API_KEY=your-chainbase-key
```

## Step 3: Your First Agent

Create a simple agent in `my_first_agent.py`:

```python
import asyncio
import os
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

async def main():
    # Create a simple agent
    agent = SpoonReactAI()

    # Configure the agent
    agent.llm = ChatBot(model_name="gpt-4.1")
    agent.system_prompt = "You are a helpful AI assistant."
    agent.max_steps = 10

    # Test the agent
    response = await agent.run("Hello! What is SpoonOS?")
    print(f"Agent: {response}")

if __name__ == "__main__":
    asyncio.run(main())
```

Run your first agent:

```bash
python my_first_agent.py
```

## Step 4: Add Tools (Optional)

Enhance your agent with web search capabilities:

```python
import asyncio
import os
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_ai.tools.mcp_tool import MCPTool

async def main():
    # Create agent with tools
    agent = SpoonReactAI()
    agent.llm = ChatBot(model_name="gpt-4.1")
    agent.system_prompt = """
    You are a research assistant with web search capabilities.
    Use the web_search tool to find current information when needed.
    """

    # Add web search tool (requires TAVILY_API_KEY)
    if os.getenv("TAVILY_API_KEY"):
        search_tool = MCPTool(
            name="web_search",
            description="Search the web for current information",
            mcp_config={
                "command": "npx",
                "args": ["-y", "tavily-mcp"],
                "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
                "transport": "stdio"
            }
        )
        agent.available_tools = ToolManager([search_tool])

    # Test with search
    response = await agent.run("What are the latest developments in AI agents?")
    print(f"Agent: {response}")

if __name__ == "__main__":
    asyncio.run(main())
```

## Step 5: Use the CLI

SpoonOS includes a powerful CLI for interactive use:

```bash
# Start the CLI
python main.py

# In the CLI:
> help                    # Show available commands
> list-agents            # List available agents
> load-agent react       # Load the default agent
> action chat "Hello!"   # Chat with the agent
```

### CLI Configuration

Create a `config.json` file for custom agents:

```json
{
  "default_agent": "my_agent",
  "agents": {
    "my_agent": {
      "class": "SpoonReactAI",
      "description": "My custom agent",
      "config": {
        "max_steps": 15,
        "temperature": 0.3
      },
      "tools": []
    }
  }
}
```

## Step 6: Explore Advanced Features

### MCP Tools Integration

```python
# Add multiple MCP tools
tools = []

# GitHub tool
if os.getenv("GITHUB_TOKEN"):
    github_tool = MCPTool(
        name="github_tools",
        description="GitHub operations",
        mcp_config={
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-github"],
            "env": {"GITHUB_TOKEN": os.getenv("GITHUB_TOKEN")},
            "transport": "stdio"
        }
    )
    tools.append(github_tool)

# File system tool
filesystem_tool = MCPTool(
    name="filesystem",
    description="File operations",
    mcp_config={
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem"],
        "transport": "stdio"
    }
)
tools.append(filesystem_tool)

agent.available_tools = ToolManager(tools)
```

### Built-in Crypto Tools

```python
# Configure crypto tools via environment variables
os.environ["OKX_API_KEY"] = "your_okx_api_key"
os.environ["OKX_SECRET_KEY"] = "your_okx_secret_key"
os.environ["OKX_API_PASSPHRASE"] = "your_okx_passphrase"

# Crypto tools are then available through the built-in system
# See the Built-in Tools documentation for details
```

## Common Issues and Solutions

### Issue: "Module not found"
**Solution**: Ensure you've installed SpoonOS correctly:
```bash
pip install --upgrade spoon-ai-sdk
```

### Issue: "API key not found"
**Solution**: Check your environment variables:
```bash
echo $OPENAI_API_KEY
```

### Issue: "MCP tool connection failed"
**Solution**: Ensure Node.js is installed and MCP packages are available:
```bash
node --version
npx --version
```

### Issue: "Agent not responding"
**Solution**: Check your API key and network connection. Enable debug mode:
```bash
export DEBUG=true
python your_agent.py
```

## Next Steps

Now that you have SpoonOS running, explore these advanced topics:

1. **[Agents](./agents)** - Learn about different agent types and configurations
2. **[Tools](./tools)** - Understand the tool system and create custom tools
3. **[Built-in Tools](./builtin-tools)** - Explore available built-in tools
4. **[MCP Protocol](./mcp-protocol)** - Master dynamic tool loading
5. **[Examples](./examples/basic-agent)** - See complete working examples

## Community and Support

- **Documentation**: [SpoonOS Code Cook Book](https://spoonos.dev)
- **GitHub**: [XSpoonAi/spoon-core](https://github.com/XSpoonAi/spoon-core)
- **Issues**: [Report bugs and request features](https://github.com/XSpoonAi/spoon-core/issues)
- **Discussions**: [Community discussions](https://github.com/XSpoonAi/spoon-core/discussions)

Welcome to the SpoonOS community! 🎉
