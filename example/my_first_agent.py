import asyncio
import os

from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_ai.tools.mcp_tool import MCPTool


async def main():
    agent = SpoonReactAI()
    agent.llm = ChatBot()
    agent.system_prompt = "You are a helpful AI assistant."

    # Optional: add Tavily search tool if key present
    if os.getenv("TAVILY_API_KEY"):
        search_tool = MCPTool(
            name="tavily-search",
            description="Web search via Tavily MCP",
            mcp_config={
                "command": "npx",
                "args": ["--yes", "tavily-mcp"],
                "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
            },
        )
        agent.avaliable_tools = ToolManager([search_tool])

    res = await agent.run("Hello! What is SpoonOS?")
    print(res)


if __name__ == "__main__":
    asyncio.run(main())
