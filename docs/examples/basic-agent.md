---
sidebar_position: 1
---

# Basic Agent Example

This example demonstrates how to create a simple but functional SpoonOS agent with basic tools and capabilities.

## Overview

We'll build a basic research assistant agent that can:
- Search the web for information
- Perform calculations
- Analyze data
- Provide structured responses

## Complete Example

```python
import asyncio
import os
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_ai.tools.mcp_tool import MCPTool

class BasicResearchAgent(SpoonReactAI):
    def __init__(self):
        # Configure LLM
        llm = ChatBot(
            model_name="gpt-4.1",
            temperature=0.3,
            max_tokens=4096
        )

        # Set up tools
        tools = self._setup_tools()

        # Initialize parent class
        super().__init__(
            llm=llm,
            system_prompt=self._get_system_prompt(),
            max_steps=10
        )

        # Set available tools
        self.avaliable_tools = tools

    def _setup_tools(self) -> ToolManager:
        """Set up tools for the agent"""
        tools = []

        # Web search tool (requires TAVILY_API_KEY)
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
            tools.append(search_tool)

        # Context7 documentation tool (HTTP transport)
        context7_tool = MCPTool(
            name="context7_docs",
            description="Access Context7 documentation and library information",
            mcp_config={
                "url": "https://mcp.context7.com/mcp",
                "transport": "http",
                "timeout": 30,
                "headers": {
                    "User-Agent": "SpoonOS-BasicAgent/1.0"
                }
            }
        )
        tools.append(context7_tool)

        # Firecrawl web scraper (SSE transport)
        if os.getenv("FIRECRAWL_API_KEY"):
            firecrawl_tool = MCPTool(
                name="firecrawl_scraper",
                description="Advanced web scraping and content extraction",
                mcp_config={
                    "url": f"https://mcp.firecrawl.dev/{os.getenv('FIRECRAWL_API_KEY')}/sse",
                    "transport": "sse",
                    "timeout": 60,
                    "reconnect_interval": 5,
                    "headers": {
                        "Accept": "text/event-stream",
                        "User-Agent": "SpoonOS-BasicAgent/1.0",
                        "Cache-Control": "no-cache"
                    }
                }
            )
            tools.append(firecrawl_tool)

        return ToolManager(tools)

    def _get_system_prompt(self) -> str:
        """Define the agent's behavior and capabilities"""
        return """
        You are a helpful research assistant with access to web search, documentation, and web scraping capabilities.

        Your role is to:
        1. Help users find accurate, up-to-date information
        2. Provide well-structured, comprehensive responses
        3. Cite sources when using web search results
        4. Break down complex topics into understandable explanations
        5. Access technical documentation when needed
        6. Extract content from websites when required

        When responding:
        - Always search for current information when needed
        - Use documentation tools for technical references
        - Use web scraping for detailed content extraction
        - Provide clear, organized answers
        - Include relevant examples and context
        - Acknowledge limitations or uncertainties

        Available tools:
        - web_search: Use this to find current information on any topic
        - context7_docs: Use this to access Context7 documentation and libraries
        - firecrawl_scraper: Use this to scrape and extract content from websites
        """

    async def chat(self, message: str) -> str:
        """Chat with the agent"""
        try:
            response = await self.run(message)
            return response
        except Exception as e:
            return f"Sorry, I encountered an error: {str(e)}"

    async def research_topic(self, topic: str) -> str:
        """Perform comprehensive research on a topic"""
        research_prompt = f"""
        Please research the topic: "{topic}"

        Provide a comprehensive overview including:
        1. Current status and recent developments
        2. Key facts and statistics
        3. Important players or organizations involved
        4. Future outlook or trends
        5. Relevant sources and references

        Make sure to search for the most current information available.
        """

        return await self.chat(research_prompt)

# Usage example
async def main():
    # Set up environment variables
    if not os.getenv("OPENAI_API_KEY"):
        print("Please set OPENAI_API_KEY environment variable")
        return

    if not os.getenv("TAVILY_API_KEY"):
        print("Note: TAVILY_API_KEY not set - web search will be limited")
        print("Set TAVILY_API_KEY environment variable for web search capabilities")

    if not os.getenv("FIRECRAWL_API_KEY"):
        print("Note: FIRECRAWL_API_KEY not set - web scraping will not be available")
        print("Set FIRECRAWL_API_KEY environment variable for web scraping capabilities")

    # Create agent
    agent = BasicResearchAgent()

    # Example 1: Simple question
    print("=== Example 1: Simple Question ===")
    response = await agent.chat("What is SpoonOS?")
    print(response)
    print("
" + "="*50 + "
")

    # Example 2: Documentation lookup
    print("=== Example 2: Documentation Lookup ===")
    response = await agent.chat("Look up React hooks documentation using Context7")
    print(response)
    print("
" + "="*50 + "
")

    # Example 3: Research request
    print("=== Example 3: Research Request ===")
    response = await agent.research_topic("Latest developments in AI agents")
    print(response)
    print("
" + "="*50 + "
")

    # Example 4: Interactive conversation
    print("=== Example 4: Interactive Chat ===")
    print("Chat with the agent (type 'quit' to exit):")

    while True:
        user_input = input("
You: ")
        if user_input.lower() in ['quit', 'exit', 'bye']:
            break

        response = await agent.chat(user_input)
        print(f"
Agent: {response}")

if __name__ == "__main__":
    asyncio.run(main())
```

## Step-by-Step Breakdown

### 1. Environment Setup

First, set up your environment variables:

```bash
# Required for LLM functionality
export OPENAI_API_KEY="sk-your-openai-api-key"

# Required for web search
export TAVILY_API_KEY="your-tavily-api-key"

# Required for web scraping
export FIRECRAWL_API_KEY="your-firecrawl-api-key"

# Optional: Enable debug logging
export DEBUG=true
```

### 2. Basic Agent Structure

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

# Create a simple agent
agent = SpoonReactAI()

# Configure the agent
agent.llm = ChatBot(model_name="gpt-4o")
agent.system_prompt = "You are a helpful assistant."
agent.max_steps = 5

# Use the agent
response = await agent.run("Hello, how are you?")
print(response)
```

### 3. Adding Tools

```python
from spoon_ai.tools import ToolManager
from spoon_ai.tools.mcp_tool import MCPTool
import os

# Create tools
tools = []

# Create web search tool
if os.getenv("TAVILY_API_KEY"):
    search_tool = MCPTool(
        name="web_search",
        description="Search the web for information",
        mcp_config={
            "command": "npx",
            "args": ["-y", "tavily-mcp"],
            "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
            "transport": "stdio"
        }
    )
    tools.append(search_tool)

# Create Context7 documentation tool (HTTP transport)
context7_tool = MCPTool(
    name="context7_docs",
    description="Access Context7 documentation",
    mcp_config={
        "url": "https://mcp.context7.com/mcp",
        "transport": "http",
        "timeout": 30,
        "headers": {
            "User-Agent": "SpoonOS-Example/1.0"
        }
    }
)
tools.append(context7_tool)

# Create Firecrawl web scraper tool (SSE transport)
if os.getenv("FIRECRAWL_API_KEY"):
    firecrawl_tool = MCPTool(
        name="firecrawl_scraper",
        description="Advanced web scraping and content extraction",
        mcp_config={
            "url": f"https://mcp.firecrawl.dev/{os.getenv('FIRECRAWL_API_KEY')}/sse",
            "transport": "sse",
            "timeout": 60,
            "reconnect_interval": 5,
            "headers": {
                "Accept": "text/event-stream",
                "User-Agent": "SpoonOS-Example/1.0",
                "Cache-Control": "no-cache"
            }
        }
    )
    tools.append(firecrawl_tool)

# Add tools to agent
if tools:
    tool_manager = ToolManager(tools)
    agent.avaliable_tools = tool_manager
```

### 4. Custom System Prompt

```python
system_prompt = """
You are a research assistant with web search, documentation, and web scraping capabilities.

Guidelines:
- Always search for current information when needed
- Use documentation tools for technical references
- Use web scraping for detailed content extraction
- Provide accurate, well-sourced responses
- Structure your answers clearly
- Cite sources when using search results

Available tools:
- web_search: For current events and general information
- context7_docs: For technical documentation and library references
- firecrawl_scraper: For web scraping and content extraction

When a user asks about current events, use web_search. For technical
documentation, use context7_docs. For detailed website content extraction,
use firecrawl_scraper.
"""

agent = SpoonReactAI()
agent.llm = ChatBot()
agent.system_prompt = system_prompt
agent.avaliable_tools = tools
```

## Advanced Features

### Error Handling

```python
class RobustAgent(BasicResearchAgent):
    async def chat(self, message: str) -> str:
        """Chat with enhanced error handling"""
        max_retries = 3

        for attempt in range(max_retries):
            try:
                response = await self.run(message)
                return response
            except Exception as e:
                if attempt < max_retries - 1:
                    print(f"Attempt {attempt + 1} failed, retrying...")
                    await asyncio.sleep(1)
                else:
                    return f"I apologize, but I'm having technical difficulties: {str(e)}"
```

### Conversation Memory

```python
from datetime import datetime

class MemoryAgent(BasicResearchAgent):
    def __init__(self):
        super().__init__()
        self.conversation_history = []

    async def chat(self, message: str) -> str:
        """Chat with conversation memory"""
        # Add user message to history
        self.conversation_history.append({
            "role": "user",
            "content": message,
            "timestamp": datetime.now()
        })

        # Get response
        response = await super().chat(message)

        # Add agent response to history
        self.conversation_history.append({
            "role": "assistant",
            "content": response,
            "timestamp": datetime.now()
        })

        return response

    def get_conversation_summary(self) -> str:
        """Get a summary of the conversation"""
        if not self.conversation_history:
            return "No conversation history."

        summary = f"Conversation with {len(self.conversation_history)} messages:
"
        for msg in self.conversation_history[-6:]:  # Last 6 messages
            role = msg["role"].title()
            content = msg["content"][:100] + "..." if len(msg["content"]) > 100 else msg["content"]
            summary += f"- {role}: {content}
"

        return summary
```

### Performance Monitoring

```python
import time

class MonitoredAgent(BasicResearchAgent):
    def __init__(self):
        super().__init__()
        self.metrics = {
            "total_requests": 0,
            "successful_requests": 0,
            "failed_requests": 0,
            "total_response_time": 0,
            "tool_usage": {}
        }

    async def chat(self, message: str) -> str:
        """Chat with performance monitoring"""
        start_time = time.time()
        self.metrics["total_requests"] += 1

        try:
            response = await super().chat(message)
            self.metrics["successful_requests"] += 1
            return response
        except Exception as e:
            self.metrics["failed_requests"] += 1
            raise
        finally:
            response_time = time.time() - start_time
            self.metrics["total_response_time"] += response_time

    def get_performance_stats(self) -> dict:
        """Get performance statistics"""
        total_requests = self.metrics["total_requests"]
        if total_requests == 0:
            return {"message": "No requests processed yet"}

        return {
            "total_requests": total_requests,
            "success_rate": self.metrics["successful_requests"] / total_requests,
            "average_response_time": self.metrics["total_response_time"] / total_requests,
            "failed_requests": self.metrics["failed_requests"]
        }
```

## Testing the Agent

```python
import pytest

@pytest.mark.asyncio
async def test_basic_agent():
    """Test basic agent functionality"""
    agent = BasicResearchAgent()

    # Test simple response
    response = await agent.chat("Hello")
    assert len(response) > 0
    assert isinstance(response, str)

@pytest.mark.asyncio
async def test_agent_with_search():
    """Test agent with web search capability"""
    if not os.getenv("TAVILY_API_KEY"):
        pytest.skip("TAVILY_API_KEY not set")

    agent = BasicResearchAgent()

    # Test search functionality
    response = await agent.chat("What's the latest news about AI?")
    assert len(response) > 0
    # Should contain recent information
    assert any(keyword in response.lower() for keyword in ["recent", "latest", "today", "2024", "2025"])

if __name__ == "__main__":
    # Run tests
    pytest.main([__file__])
```

## Next Steps

This basic agent provides a foundation for more advanced functionality:

1. **Add More Tools** - Integrate additional tools like calculators, file operations, or APIs
2. **Enhance Memory** - Implement persistent conversation memory
3. **Add Specialization** - Create domain-specific versions (crypto, research, coding)
4. **Improve Error Handling** - Add more robust error recovery
5. **Add Monitoring** - Implement comprehensive performance tracking

## Related Examples

- **[Trading Bot](./trading-bot)** - Crypto trading agent
- **[Web3 Agent](./web3-agent)** - Blockchain interactions
- **[Custom Tools](./custom-tools)** - Creating custom tools
- **[Graph Workflows](./graph-workflows)** - Complex workflows
