# Quick Start

Get up and running with SpoonOS framework in under 5 minutes.

## Prerequisites

- [Installation](./installation.md) completed
- [Configuration](./configuration.md) set up with API keys

## Your First Agent

### 1. Create a Simple Agent

Create a new Python file `my_first_agent.py`:

```python
import asyncio
from spoon_ai.agents.toolcall import ToolCallAgent
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_ai.tools.base import BaseTool

# Define a custom tool
class GreetingTool(BaseTool):
    name: str = "greeting"
    description: str = "Generate personalized greetings"
    parameters: dict = {
        "type": "object",
        "properties": {
            "name": {"type": "string", "description": "Person's name"}
        },
        "required": ["name"]
    }

    async def execute(self, name: str) -> str:
        return f"Hello {name}! Welcome to SpoonOS! 🚀"

# Create your agent
class MyFirstAgent(ToolCallAgent):
    name: str = "my_first_agent"
    description: str = "A friendly assistant with greeting capabilities"

    system_prompt: str = """
    You are a helpful AI assistant built with SpoonOS framework.
    You can greet users and help with various tasks.
    """

    avaliable_tools: ToolManager = ToolManager([GreetingTool()])

async def main():
    # Initialize agent with LLM
    agent = MyFirstAgent(
        llm=ChatBot(
            llm_provider="openai",
            model_name="gpt-4.1"  # Framework default
        )
    )

    # Run the agent - framework handles all error cases automatically
    response = await agent.run("Please greet me, my name is Alice")
    return response

if __name__ == "__main__":
    result = asyncio.run(main())
    # Agent response will be returned directly
```

### 2. Run Your Agent

```bash
python my_first_agent.py
```

The agent will respond with a personalized greeting and offer to help with various tasks.

### 3. Add Web3 Capabilities

Enhance your agent with blockchain tools:

```python
from spoon_ai.tools.crypto_tools import CryptoTool

class Web3Agent(ToolCallAgent):
    name: str = "web3_agent"
    description: str = "AI agent with Web3 and crypto capabilities"

    system_prompt: str = """
    You are a Web3-native AI assistant with access to blockchain data.
    You can help with crypto prices, DeFi operations, and blockchain analysis.
    """

    avaliable_tools: ToolManager = ToolManager([
        GreetingTool(),
        CryptoTool()
    ])

# Usage
async def web3_demo():
    agent = Web3Agent(
        llm=ChatBot(
            llm_provider="anthropic",
            model_name="claude-sonnet-4-20250514"  # Framework default
        )
    )

    # Framework automatically handles crypto data fetching and error cases
    response = await agent.run("What's the current price of Bitcoin?")
    return response
```

### 4. Framework Features Overview

The SpoonOS framework provides:

- **Multiple LLM Providers**: OpenAI, Anthropic, Google, DeepSeek
- **Built-in Tools**: Crypto, DeFi, social media, data analysis
- **Agent Types**: ReAct, ToolCall, Graph-based agents
- **MCP Integration**: Dynamic tool discovery and execution

### Framework Simplicity

SpoonOS eliminates common development complexity:

```python
# Simple agent creation - no error handling needed
agent = ToolCallAgent(
    llm=ChatBot(llm_provider="openai", model_name="gpt-4.1"),
    avaliable_tools=ToolManager([CryptoTool(), Web3Tool()])
)


response = await agent.run("Analyze Bitcoin trends and suggest trades")
```

## Framework Development Patterns

### Agent Composition

```python
# Combine multiple agents for complex workflows
from spoon_ai.agents.graph import GraphAgent

class MultiAgentSystem(GraphAgent):
    def __init__(self):
        super().__init__()
        self.add_agent("researcher", ResearchAgent())
        self.add_agent("analyst", AnalysisAgent())
        self.add_agent("trader", TradingAgent())
```

### Custom Tool Development

```python
# Create domain-specific tools
class BlockchainAnalysisTool(BaseTool):
    name: str = "blockchain_analysis"
    description: str = "Analyze blockchain transactions and patterns"

    async def execute(self, address: str, chain: str = "ethereum") -> str:
        # Your custom blockchain analysis logic
        return f"Analysis results for {address} on {chain}"
```

### MCP Integration

```python
# Use Model Context Protocol for dynamic tools
from spoon_ai.tools.mcp_tools_collection import MCPToolsCollection

agent = ToolCallAgent(
    llm=ChatBot(llm_provider="anthropic", model_name="claude-sonnet-4-20250514"),
    avaliable_tools=ToolManager([
        MCPToolsCollection()  # Automatically discovers MCP tools
    ])
)
```

## Next Steps

Now that you understand the framework basics:

- [Core Concepts](../core-concepts/agents.md) - Deep dive into agent architecture
- [Built-in Tools](../core-concepts/tools.md) - Explore Web3 and crypto tools
- [How-To Guides](../how-to-guides/build-first-agent.md) - Advanced agent patterns