---
sidebar_position: 4
---

# Quick Start

Get up and running with SpoonOS in just a few minutes! This guide will walk you through creating your first intelligent agent.

## Prerequisites

Before starting, make sure you have:

- ✅ [Installed SpoonOS](./installation)
- ✅ [Configured your API keys](./configuration)
- ✅ Python 3.10+ environment activated

## Step 1: Start the CLI

Launch the SpoonOS interactive CLI:

```bash
python main.py
```

You should see:

```
🥄 SpoonOS Core Developer Framework
Welcome to the interactive CLI!
Type 'help' for available commands.

>
```

## Step 2: Load a Pre-built Agent

SpoonOS comes with several pre-configured agents. Let's start with the trading agent:

```bash
# List available agents
> list-agents

# Load the trading agent (includes web search + crypto tools)
> load-agent trading_agent
```

## Step 3: Your First Conversation

Now let's chat with your agent:

```bash
# Simple greeting
> action chat "Hello! What can you help me with?"

# Ask for capabilities
> action chat "What tools do you have access to?"

# Try a web search
> action chat "Search for the latest Bitcoin news"

# Get crypto market data
> action chat "What's the current price of Bitcoin?"
```

## Step 4: Explore Available Commands

```bash
# View all available commands
> help

# Check current configuration
> config

# List available tools
> action list_mcp_tools

# View chat history
> history
```

## Step 5: Create Your First Custom Agent

Let's create a simple custom agent. Create a new file `my_first_agent.py`:

```python
import asyncio
from spoon_ai.agents import ToolCallAgent
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_ai.tools.base import BaseTool

# Define a custom tool
class GreetingTool(BaseTool):
    name: str = "greeting_tool"
    description: str = "Generate personalized greetings"
    parameters: dict = {
        "type": "object",
        "properties": {
            "name": {"type": "string", "description": "Person's name"}
        },
        "required": ["name"]
    }

    async def execute(self, name: str) -> str:
        return f"Hello {name}! Welcome to SpoonOS! 🥄"

# Define your custom agent
class MyFirstAgent(ToolCallAgent):
    name: str = "my_first_agent"
    description: str = "A friendly greeting agent"
    system_prompt: str = """
    You are a helpful assistant that specializes in greeting people.
    Use the greeting_tool to create personalized greetings.
    Be friendly and enthusiastic!
    """
    max_steps: int = 5

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.avaliable_tools = ToolManager([GreetingTool()])

# Run the agent
async def main():
    # Initialize the agent
    agent = MyFirstAgent(llm=ChatBot())

    # Have a conversation
    result = await agent.run("Please greet me! My name is Alice.")
    print("Agent Response:", result)

if __name__ == "__main__":
    asyncio.run(main())
```

Run your custom agent:

```bash
python my_first_agent.py
```

## Step 6: Add Your Agent to the CLI

To use your custom agent in the CLI, add it to your `config.json`:

```json
{
  "agents": {
    "my_first_agent": {
      "class": "MyFirstAgent",
      "module": "my_first_agent",
      "tools": []
    }
  }
}
```

Then load it in the CLI:

```bash
> load-agent my_first_agent
> action chat "Hi! My name is Bob."
```

## Common Use Cases

### Web Research Agent

```bash
# Load web researcher
> load-agent web_researcher

# Research a topic
> action chat "Research the latest developments in AI agents and summarize the key trends"
```

### Crypto Trading Assistant

```bash
# Load trading agent
> load-agent trading_agent

# Get market analysis
> action chat "Analyze the current crypto market conditions and suggest trading opportunities"
```

### Code Assistant

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

# Create a code-focused agent
code_agent = SpoonReactAI(
    llm=ChatBot(),
    system_prompt="You are an expert Python developer. Help users with coding questions and provide clean, well-documented code examples."
)

# Ask for coding help
result = await code_agent.run("How do I create a REST API with FastAPI?")
```

## Next Steps

Now that you've created your first agent, explore more advanced features:

### Learn Core Concepts
- **[Agents](./agents)** - Deep dive into agent architecture
- **[Tools](./tools)** - Understanding the tool system
- **[LLM Providers](./llm-providers)** - Working with different language models

### Build Advanced Features
- **[Custom Tools](./custom-tools)** - Create powerful custom tools
- **[Graph System](./graph-system)** - Build complex workflows
- **[Web3 Integration](./web3-integration)** - Add blockchain capabilities

### Explore Examples
- **[Basic Agent](./examples/basic-agent)** - Simple agent examples
- **[Trading Bot](./examples/trading-bot)** - Crypto trading automation
- **[Web3 Agent](./examples/web3-agent)** - Blockchain interactions

## Troubleshooting

### Agent Won't Load
```
Error: Agent 'my_agent' not found
```
**Solution**: Check your `config.json` and ensure the agent is properly defined.

### Tool Execution Failed
```
Error: Tool execution failed
```
**Solution**: Verify your API keys and tool configurations.

### Import Errors
```
ModuleNotFoundError: No module named 'spoon_ai'
```
**Solution**: Ensure your virtual environment is activated and SpoonOS is installed.

## Tips for Success

1. **Start Simple** - Begin with basic agents and gradually add complexity
2. **Test Incrementally** - Test each component before combining them
3. **Use the CLI** - The interactive CLI is great for experimentation
4. **Read the Logs** - Check console output for debugging information
5. **Explore Examples** - Learn from the provided example agents

## Community Resources

- 📚 **[Documentation](/)** - Complete guides and references
- 💬 **[GitHub Discussions](https://github.com/XSpoonAi/spoon-core/discussions)** - Community support
- 🐛 **[Issues](https://github.com/XSpoonAi/spoon-core/issues)** - Bug reports and feature requests
- 🌟 **[Examples](https://github.com/XSpoonAi/spoon-core/tree/main/examples)** - Real-world use cases

Congratulations! You've successfully created your first SpoonOS agent. Ready to build something amazing? 🚀
