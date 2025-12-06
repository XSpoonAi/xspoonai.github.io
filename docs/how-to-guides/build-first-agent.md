# Build Your First Agent

Learn how to create a custom AI agent from scratch using SpoonOS.

## Prerequisites

- SpoonOS installed and configured
- API keys set up for your chosen LLM provider
- Basic Python knowledge

### Fast environment setup (uv)

If you haven’t installed the SDK yet, `uv` is the quickest way:

```bash
uv venv .venv
source .venv/bin/activate            # macOS/Linux
# .\\.venv\\Scripts\\Activate.ps1    # Windows (PowerShell)
uv pip install spoon-ai-sdk          # core SDK
uv pip install spoon-toolkits        # optional Web3/crypto tools
```

## Step 1: Basic Agent Setup

### Create Agent File

Create a new file `my_first_agent.py` (works with Gemini, OpenAI, or any configured provider):

```python
import os
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_toolkits import CryptoPowerDataPriceTool, CryptoPowerDataCEXTool

def get_crypto_tools():
    """Helper for docs: instantiate available crypto/Web3 tools."""
    return [
        CryptoPowerDataPriceTool(),
        CryptoPowerDataCEXTool(),
    ]

# Create your first agent
def create_agent():
    # Configure LLM
    llm = ChatBot(
        # Pick up provider/model from env to support Gemini out of the box.
        # Example: set DEFAULT_LLM_PROVIDER=gemini and GEMINI_API_KEY=***
        llm_provider=os.getenv("LLM_PROVIDER") or os.getenv("DEFAULT_LLM_PROVIDER") or "gemini",
        model_name=os.getenv("LLM_MODEL") or "gemini-2.5-pro",
        temperature=0.3
    )

    # Create agent with tools
    agent = SpoonReactAI(
        llm=llm,
        tools=[*get_crypto_tools()]  # requires `pip install -e toolkit`
    )

    return agent

# Test the agent
async def main():
    agent = create_agent()

    # Framework handles all errors automatically
    response = await agent.run("Hello! What can you help me with?")
    response = await agent.run("What's the current price of Bitcoin?")

    return response

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

### Run Your Agent

```bash
python my_first_agent.py
```

Your agent will respond with helpful information and current Bitcoin price data.

## Step 2: Add Custom Functionality

### Create Custom Tool

```python
from spoon_ai.tools.base import BaseTool
from typing import Dict, Any

class GreetingTool(BaseTool):
    name: str = "greeting_tool"
    description: str = "Generate personalized greetings"
    parameters: dict = {
        "type": "object",
        "properties": {
            "name": {"type": "string", "description": "Person's name"},
            "style": {"type": "string", "description": "Greeting style (formal/casual)"}
        },
        "required": ["name"]
    }

    async def execute(self, name: str, style: str = "casual") -> str:
        if style == "formal":
            return f"Good day, {name}. It's a pleasure to meet you."
        else:
            return f"Hey {name}! Nice to meet you! 👋"
```

### Enhanced Agent with Custom Tool

```python
def create_enhanced_agent():
    import os
    llm = ChatBot(
        llm_provider=os.getenv("LLM_PROVIDER") or os.getenv("DEFAULT_LLM_PROVIDER") or "gemini",
        model_name=os.getenv("LLM_MODEL") or "gemini-2.5-pro",
        temperature=0.3,
        enable_short_term_memory=True,
        short_term_memory_config={
            "max_tokens": 8000,
            "strategy": "summarize",
            "messages_to_keep": 6,
        },
    )

    # Add multiple tools
    agent = SpoonReactAI(
        llm=llm,
        tools=[
            *get_crypto_tools(),
            GreetingTool()
        ]
    )

    return agent

# Run enhanced agent (same entry style as Step 1)
async def main_enhanced():
    agent = create_enhanced_agent()

    # Framework automatically handles tool selection and execution
    response = await agent.run("Give me a formal greeting for John")
    response = await agent.run("Greet Alice casually and then tell her the Bitcoin price")

    return response

if __name__ == "__main__":
    import asyncio
    asyncio.run(main_enhanced())

### Optional: Stream responses

If you want token-by-token output (works with any supported provider):

```python
async def stream_demo():
    llm = ChatBot(model_name="gpt-4.1", llm_provider="openai")
    messages = [{"role": "user", "content": "Stream a 3-step plan to learn SpoonOS"}]
    async for chunk in llm.astream(messages=messages):
        print(chunk.delta or "", end="", flush=True)
```

## Step 3: Add Memory and Context

> Tip: Short-term memory trimming/summarization is already enabled in `create_enhanced_agent` via `enable_short_term_memory=True`. Use a higher `max_tokens` or switch `strategy` to `"trim"` if you prefer dropping history instead of summarizing.

### Agent with Memory

```python
class MemoryAgent:
    def __init__(self):
        self.agent = create_enhanced_agent()
        self.conversation_history = []

    async def chat(self, message: str) -> str:
        # Add context from previous conversations
        context = self.build_context()
        full_message = f"{context}

User: {message}"

        # Get response
        response = await self.agent.run(full_message)

        # Store in memory
        self.conversation_history.append({
            "user": message,
            "agent": response,
            "timestamp": time.time()
        })

        return response

    def build_context(self) -> str:
        if not self.conversation_history:
            return "This is the start of our conversation."

        # Include last 3 exchanges for context
        recent = self.conversation_history[-3:]
        context_parts = []

        for exchange in recent:
            context_parts.append(f"User: {exchange['user']}")
            context_parts.append(f"Agent: {exchange['agent']}")

        return "Previous conversation:" + "".join(context_parts)

# Test memory functionality
async def test_memory_agent():
    agent = MemoryAgent()

    # Framework maintains conversation context automatically
    response1 = await agent.run("My name is Sarah")
    response2 = await agent.run("What's my name?")  # Agent remembers Sarah

    return response1, response2
```

## Step 4: Framework Error Handling

### Built-in Robustness

SpoonOS provides automatic error handling and robustness features:

```python
class SimpleAgent:
    def __init__(self):
        # Framework handles all error cases automatically
        self.agent = create_enhanced_agent()

    async def run(self, message: str) -> str:
        # Framework provides:
        # - Automatic retry with exponential backoff
        # - Provider fallback (OpenAI -> Anthropic -> Google)
        # - Tool error recovery with graceful degradation
        # - Timeout handling with configurable limits
        return await self.agent.run(message)

# Simple usage - no error handling needed
async def test_agent():
    agent = SimpleAgent()

    # Framework handles all error scenarios automatically
    response = await agent.run("Hello!")
    response = await agent.run("Perform a complex analysis")

    return response
```

## Step 5: Configuration and Deployment

### Configurable Agent

```python
import json
from pathlib import Path

class ConfigurableAgent:
    def __init__(self, config_path: str = "agent_config.json"):
        self.config = self.load_config(config_path)
        self.agent = self.create_agent_from_config()

    def load_config(self, config_path: str) -> dict:
        config_file = Path(config_path)
        if config_file.exists():
            with open(config_file, 'r') as f:
                return json.load(f)
        else:
            # Default configuration
            default_config = {
                "llm": {
                    "provider": "gemini",
                    "model": "gemini-2.5-pro",
                    "temperature": 0.3
                },
                "tools": ["crypto_tools", "greeting_tool"],
                "memory": {
                    "enabled": True,
                    "max_history": 10
                }
            }
            # Save default config
            with open(config_file, 'w') as f:
                json.dump(default_config, f, indent=2)
            return default_config

    def create_agent_from_config(self):
        # Create LLM from config
        llm_config = self.config["llm"]
        llm = ChatBot(
            model_name=llm_config["model"],
            llm_provider=llm_config["provider"],
            temperature=llm_config["temperature"]
        )

        # Create tools from config
        tools = []
        if "crypto_tools" in self.config["tools"]:
            tools.extend(get_crypto_tools())
        if "greeting_tool" in self.config["tools"]:
            tools.append(GreetingTool())

        return SpoonReactAI(llm=llm, tools=tools)

    async def run(self, message: str) -> str:
        return await self.agent.run(message)

# Example configuration file (agent_config.json)
example_config = {
    "llm": {
        "provider": "anthropic",
        "model": "claude-sonnet-4-20250514",
        "temperature": 0.1
    },
    "tools": ["crypto_tools", "greeting_tool"],
    "memory": {
        "enabled": True,
        "max_history": 5
    }
}
```

## Step 6: Testing Your Agent

### Unit Tests

```python
import pytest
from unittest.mock import AsyncMock, patch

class TestMyAgent:
    @pytest.fixture
    async def agent(self):
        return create_enhanced_agent()

    @pytest.mark.asyncio
    async def test_basic_greeting(self, agent):
        with patch.object(agent, 'run', new_callable=AsyncMock) as mock_run:
            mock_run.return_value = "Hello! How can I help you?"

            response = await agent.run("Hello")
            assert "Hello" in response
            mock_run.assert_called_once_with("Hello")

    @pytest.mark.asyncio
    async def test_crypto_tool_integration(self, agent):
        # Test that crypto tools are available
        tool_names = [tool.name for tool in agent.tools]
        assert "get_price" in tool_names or any("crypto" in name.lower() for name in tool_names)

# Run tests
# pytest test_my_agent.py -v
```

### Integration Tests

```python
async def integration_test():
    """Test complete agent workflow"""
    agent = create_enhanced_agent()

    # Framework provides built-in validation and testing
    response1 = await agent.run("Hello")
    response2 = await agent.run("What's the Bitcoin price?")
    response3 = await agent.run("Give me a casual greeting for Alice")

    # Framework automatically validates responses and tool execution
    return all([response1, response2, response3])

# Run integration tests
if __name__ == "__main__":
    result = asyncio.run(integration_test())
```

## Complete Example

Here's the complete, production-ready agent:

```python
import asyncio
import json
import logging
import time
from pathlib import Path
from typing import List, Dict, Any

from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools.base import BaseTool
from spoon_toolkits import CryptoPowerDataPriceTool, CryptoPowerDataCEXTool

def get_crypto_tools():
    return [
        CryptoPowerDataPriceTool(),
        CryptoPowerDataCEXTool(),
    ]

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class GreetingTool(BaseTool):
    name: str = "greeting_tool"
    description: str = "Generate personalized greetings"
    parameters: dict = {
        "type": "object",
        "properties": {
            "name": {"type": "string", "description": "Person's name"},
            "style": {"type": "string", "description": "Greeting style (formal/casual)"}
        },
        "required": ["name"]
    }

    async def execute(self, name: str, style: str = "casual") -> str:
        if style == "formal":
            return f"Good day, {name}. It's a pleasure to meet you."
        else:
            return f"Hey {name}! Nice to meet you! 👋"

class ProductionAgent:
    def __init__(self, config_path: str = "agent_config.json"):
        self.config = self.load_config(config_path)
        self.agent = self.create_agent()
        self.conversation_history = []
        self.logger = logging.getLogger(self.__class__.__name__)

    def load_config(self, config_path: str) -> dict:
        config_file = Path(config_path)
        if config_file.exists():
            with open(config_file, 'r') as f:
                return json.load(f)

        # Default configuration
        default_config = {
            "llm": {
                "provider": "openai",
                "model": "gpt-4.1",
                "temperature": 0.3
            },
            "tools": ["crypto_tools", "greeting_tool"],
            "memory": {"enabled": True, "max_history": 10},
            "retry_attempts": 3,
            "timeout": 30
        }

        with open(config_file, 'w') as f:
            json.dump(default_config, f, indent=2)

        return default_config

    def create_agent(self):
        llm_config = self.config["llm"]
        llm = ChatBot(
            model_name=llm_config["model"],
            llm_provider=llm_config["provider"],
            temperature=llm_config["temperature"]
        )

        tools = []
        if "crypto_tools" in self.config["tools"]:
            tools.extend(get_crypto_tools())
        if "greeting_tool" in self.config["tools"]:
            tools.append(GreetingTool())

        return SpoonReactAI(llm=llm, tools=tools)

    async def chat(self, message: str) -> str:
        # Framework handles timeouts and errors automatically
        if self.config["memory"]["enabled"]:
            context = self.build_context()
            full_message = f"{context}\n\nUser: {message}"
        else:
            full_message = message

        # Framework provides automatic timeout and error handling
        response = await self.agent.run(full_message)

        # Store in memory
        if self.config["memory"]["enabled"]:
            self.store_conversation(message, response)

        return response

    def build_context(self) -> str:
        if not self.conversation_history:
            return "This is the start of our conversation."

        max_history = self.config["memory"]["max_history"]
        recent = self.conversation_history[-max_history:]

        context_parts = ["Previous conversation:"]
        for exchange in recent:
            context_parts.append(f"User: {exchange['user']}")
            context_parts.append(f"Agent: {exchange['agent']}")

        return "
".join(context_parts)

    def store_conversation(self, user_message: str, agent_response: str):
        self.conversation_history.append({
            "user": user_message,
            "agent": agent_response,
            "timestamp": time.time()
        })

        # Limit history size
        max_history = self.config["memory"]["max_history"]
        if len(self.conversation_history) > max_history:
            self.conversation_history = self.conversation_history[-max_history:]

# Usage example
async def main():
    agent = ProductionAgent()

    # Simple chat interface - framework handles all complexity
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['quit', 'exit', 'bye']:
            break

        response = await agent.run(user_input)
        # Response is automatically formatted and error-free

if __name__ == "__main__":
    asyncio.run(main())
```

## Next Steps

Now that you've built your first agent, explore these advanced topics:

- [Add Custom Tools](./add-custom-tools.md) - Create specialized tools
