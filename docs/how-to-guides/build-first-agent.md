# Build Your First Agent

This quickstart takes you from a simple setup to a fully functional AI agent in just a few minutes.

> **💡 New to AI-assisted development?**
>
> Check out the [Vibe Coding Guide](./vibe-coding.md) to learn how to use AI coding tools like Cursor or Windsurf to build SpoonOS agents more efficiently.

## Requirements

For these examples, you will need to:

- Install the SpoonOS SDK packages
- Set up an API key for your chosen LLM provider (OpenAI, Anthropic, Google, etc.)
- Set the appropriate environment variables:

```bash
# LLM Provider (choose one)
export OPENAI_API_KEY="your-openai-key"
# or export ANTHROPIC_API_KEY="your-anthropic-key"

# For Desearch tools (required for search examples)
export DESEARCH_API_KEY="your-desearch-key"
```

Although these examples use OpenAI by default, you can use any supported provider by changing the `llm_provider` parameter and setting up the appropriate API key.

### Installation

```bash
# Using uv (recommended)
uv venv .venv
source .venv/bin/activate            # macOS/Linux
# .\.venv\Scripts\Activate.ps1       # Windows (PowerShell)

uv pip install spoon-ai-sdk          # Core SDK
uv pip install spoon-toolkits        # Tools (web search, blockchain, etc.)

# Or using pip
pip install spoon-ai-sdk spoon-toolkits
```

## Build a Basic Agent

Start by creating a simple agent that can scrape web pages and answer questions. The agent uses the `WebScraperTool` to fetch real content from any URL.

> **Note:** This basic example only requires `OPENAI_API_KEY` - no additional API keys needed.

```python
import asyncio
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_toolkits import WebScraperTool

# Create your agent with web scraping capability
agent = SpoonReactAI(
    llm=ChatBot(llm_provider="openai", model_name="gpt-5.1-chat-latest"),
    tools=[WebScraperTool()],
    system_prompt="You are a helpful assistant that can read web pages."
)

# Run the agent
async def main():
    response = await agent.run(
        "Scrape https://news.ycombinator.com and tell me the top 3 stories"
    )
    print(response)

if __name__ == "__main__":
    asyncio.run(main())
```

## Build a Real-World Agent

Next, build a practical research assistant agent that demonstrates key production concepts:

1. **Detailed system prompts** for better agent behavior
2. **Multiple tools** that fetch real data from the web
3. **Model configuration** with built-in conversational memory
4. **Create and run the agent** as a fully functional assistant

Let's walk through each step:

### Step 1: Define the System Prompt

The system prompt defines your agent's role and behavior. Keep it specific and actionable:

```python
SYSTEM_PROMPT = """You are an expert research assistant who helps users find and analyze information.

You have access to these tools:
- desearch_web_search: Search the web for general information
- desearch_ai_search: Search across web, Reddit, Wikipedia, YouTube, and arXiv
- web_scraper: Fetch and read full content from any URL

When a user asks for information:
1. Use the appropriate search tool to find relevant sources
2. If needed, use web_scraper to read full articles
3. Synthesize the information and provide clear, cited answers

Always cite your sources with URLs when providing information."""
```

### Step 2: Create Tools

[Tools](/how-to-guides/add-custom-tools) let a model interact with external systems by calling functions you define.

SpoonOS provides pre-built tools that fetch real data:

```python
from spoon_toolkits import DesearchWebSearchTool, DesearchAISearchTool, WebScraperTool

# Web search - searches the web and returns real results
web_search = DesearchWebSearchTool()

# AI search - searches across multiple platforms (web, Reddit, Wikipedia, YouTube, arXiv)
ai_search = DesearchAISearchTool()

# Web scraper - fetches and cleans content from any URL
scraper = WebScraperTool()
```

> **💡 Tip**
>
> Tools should be well-documented: their name, description, and argument names become part of the model's prompt. Use clear, descriptive names and comprehensive parameter descriptions.

### Step 3: Configure Your Model

Set up your language model with built-in memory management:

```python
from spoon_ai.chat import ChatBot

llm = ChatBot(
    llm_provider="openai",
    model_name="gpt-5.1-chat-latest",
    enable_short_term_memory=True,
    short_term_memory_config={
        "max_tokens": 8000,
        "strategy": "summarize",  # or "trim"
        "messages_to_keep": 6,
    }
)
```

The `enable_short_term_memory=True` option automatically manages conversation history:

- **summarize**: Summarizes older messages when token limit is reached
- **trim**: Removes older messages to stay within token limits

SpoonOS supports multiple providers out of the box:

| Provider | Example Models | Documentation |
|----------|---------------|---------------|
| `openai` | gpt-5.1-chat-latest, gpt-5-mini, gpt-4.1, o3, o4-mini | [OpenAI Models](https://platform.openai.com/docs/models) |
| `anthropic` | claude-opus-4-5, claude-sonnet-4-5, claude-haiku-4-5 | [Anthropic Models](https://docs.anthropic.com/en/docs/about-claude/models) |
| `gemini` | gemini-3-pro-preview, gemini-2.5-flash | [Gemini Models](https://ai.google.dev/gemini-api/docs/models/gemini) |
| `deepseek` | deepseek-chat, deepseek-reasoner | [DeepSeek Models](https://api-docs.deepseek.com/quick_start/pricing) |
| `openrouter` | 100+ models | [OpenRouter Models](https://openrouter.ai/models) |

### Step 4: Create and Run the Agent

Now assemble your agent with all the components and run it!

```python
import asyncio
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_toolkits import DesearchWebSearchTool, DesearchAISearchTool, WebScraperTool

# System prompt
SYSTEM_PROMPT = """You are an expert research assistant who helps users find and analyze information.

You have access to these tools:
- desearch_web_search: Search the web for general information
- desearch_ai_search: Search across web, Reddit, Wikipedia, YouTube, and arXiv
- web_scraper: Fetch and read full content from any URL

Always cite your sources with URLs when providing information."""

# Configure model with memory
llm = ChatBot(
    llm_provider="openai",
    model_name="gpt-5.1-chat-latest",
    enable_short_term_memory=True,
    short_term_memory_config={
        "max_tokens": 8000,
        "strategy": "summarize",
        "messages_to_keep": 6,
    }
)

# Create agent with real data tools
agent = SpoonReactAI(
    llm=llm,
    system_prompt=SYSTEM_PROMPT,
    tools=[
        DesearchWebSearchTool(),
        DesearchAISearchTool(),
        WebScraperTool(),
    ],
    max_steps=10,
)

# Run agent with conversation
async def main():
    # First query - searches the web for real data
    response = await agent.run(
        "What are the latest developments in AI agents?"
    )
    print("Agent:", response)

    # Follow-up query - agent remembers context
    response = await agent.run(
        "Can you find academic papers about that topic on arXiv?"
    )
    print("Agent:", response)

if __name__ == "__main__":
    asyncio.run(main())
```

### Optional: Stream Responses

If you want token-by-token output for a more interactive experience:

```python
async def stream_demo():
    llm = ChatBot(
        llm_provider="openai",
        model_name="gpt-5.1-chat-latest"
    )

    messages = [
        {"role": "user", "content": "Explain machine learning in 3 sentences"}
    ]

    async for chunk in llm.astream(messages=messages):
        print(chunk.delta or "", end="", flush=True)
    print()  # New line at end
```

## Full Example Code

<details>
<summary>Click to expand complete production-ready example</summary>

```python
"""
Production-ready SpoonOS research assistant agent.

This example demonstrates:
- Real-time web search via Desearch tools
- Web page scraping for full content
- Conversation memory with automatic summarization
"""
import asyncio
import logging

from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_toolkits import DesearchWebSearchTool, DesearchAISearchTool, WebScraperTool

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define system prompt
SYSTEM_PROMPT = """You are an expert research assistant who helps users find and analyze information.

You have access to these tools:
- desearch_web_search: Search the web for general information
- desearch_ai_search: Search across web, Reddit, Wikipedia, YouTube, and arXiv platforms
- web_scraper: Fetch and read full content from any URL

When a user asks for information:
1. Use the appropriate search tool to find relevant sources
2. If needed, use web_scraper to read full articles for deeper analysis
3. Synthesize the information and provide clear, cited answers

Always cite your sources with URLs when providing information.
Be thorough but concise in your analysis."""


def create_agent() -> SpoonReactAI:
    """Create and configure the research assistant agent."""

    # Configure model with memory management
    llm = ChatBot(
        llm_provider="openai",
        model_name="gpt-5.1-chat-latest",
        enable_short_term_memory=True,
        short_term_memory_config={
            "max_tokens": 8000,
            "strategy": "summarize",
            "messages_to_keep": 6,
        }
    )

    # Assemble real data tools
    tools = [
        DesearchWebSearchTool(),
        DesearchAISearchTool(),
        WebScraperTool(),
    ]

    # Create agent
    agent = SpoonReactAI(
        llm=llm,
        system_prompt=SYSTEM_PROMPT,
        tools=tools,
        max_steps=10,
    )

    logger.info("Agent created with %d tools", len(tools))
    return agent


async def interactive_session():
    """Run an interactive chat session with the agent."""
    agent = create_agent()

    print("\nResearch Assistant Agent Ready!")
    print("Type 'quit' or 'exit' to end the session.\n")

    while True:
        try:
            user_input = input("You: ").strip()

            if not user_input:
                continue

            if user_input.lower() in ['quit', 'exit', 'bye']:
                print("Goodbye!")
                break

            # Run agent and get response
            response = await agent.run(user_input)
            print(f"\nAgent: {response}\n")

        except KeyboardInterrupt:
            print("\nSession ended.")
            break
        except Exception as e:
            logger.error("Error: %s", e)
            print(f"Error occurred: {e}")


async def demo_queries():
    """Demonstrate agent capabilities with sample queries."""
    agent = create_agent()

    queries = [
        "Search for the latest news about large language models",
        "Find academic papers about transformer architectures on arXiv",
        "Scrape https://news.ycombinator.com and summarize the top stories",
    ]

    print("\nRunning Demo Queries\n" + "=" * 50)

    for query in queries:
        print(f"\nUser: {query}")
        response = await agent.run(query)
        print(f"Agent: {response}")

    print("\n" + "=" * 50 + "\nDemo Complete!")


if __name__ == "__main__":
    import sys

    if "--demo" in sys.argv:
        asyncio.run(demo_queries())
    else:
        asyncio.run(interactive_session())
```

</details>

## What You've Built

Congratulations! You now have an AI agent that can:

- **Search the web** in real-time using Desearch tools
- **Read full web pages** with the WebScraper tool
- **Find academic papers** across platforms like arXiv
- **Remember conversations** via short-term memory
- **Use multiple tools** intelligently based on user queries
- **Stream responses** for real-time output

## Next Steps

Now that you've built your first agent, explore these advanced topics:

- [Add Custom Tools](./add-custom-tools.md) - Create specialized tools for your domain
- [Graph-Based Workflows](./graph-based-workflows.md) - Build complex multi-agent systems
- [MCP Integration](./mcp-integration.md) - Connect to external tool servers
- [Long-Term Memory](./long-term-memory.md) - Integrate Mem0 for persistent knowledge

---

**📝 Edit this page** — Found an issue? [Edit the source on GitHub](https://github.com/XSpoonAi/spoon-ai/edit/main/cookbook/docs/how-to-guides/build-first-agent.md).
