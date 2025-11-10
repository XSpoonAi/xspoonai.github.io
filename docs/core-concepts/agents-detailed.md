---
sidebar_position: 5
---

# Agents

This guide provides a comprehensive walkthrough for developing and configuring agents in the SpoonOS Core Developer Framework (SCDF). We will use practical examples to illustrate key concepts, including agent definition, tool integration, and execution.

Agents are the core building blocks of SpoonOS. They combine language models with tools to create intelligent, autonomous systems that can reason, plan, and take actions.

## What is an Agent?

An agent in SpoonOS is an intelligent entity that:

- **Reasons** about problems and situations
- **Plans** sequences of actions to achieve goals
- **Executes** actions using available tools
- **Learns** from interactions and feedback
- **Adapts** to new situations and requirements

## Agent Architecture

SpoonOS agents follow the **ReAct (Reasoning + Acting)** pattern:

```
Thought → Action → Observation → Thought → Action → ...
```

### Core Components

#### Built-in Agent Classes

SpoonOS provides two main agent classes:

- **`SpoonReactAI`**: Standard agent for blockchain operations
- **`SpoonReactMCP`**: Enhanced agent with MCP protocol support

#### Tool Integration

Agents can use various types of tools:

- **Built-in Tools**: Python classes integrated directly into the framework
- **MCP Tools**: External tools accessed via Model Context Protocol
- **Custom Tools**: User-defined tools for specific functionality

### Technical Implementation

#### Creating Custom Agents

```python
from spoon_ai.agents import SpoonReactMCP
from spoon_ai.tools import ToolManager

class SpoonMacroAnalysisAgent(SpoonReactMCP):
    name: str = "SpoonMacroAnalysisAgent"
    system_prompt: str = (
        '''You are a cryptocurrency market analyst. Your task is to provide a comprehensive
        macroeconomic analysis of a given token.

        To do this, you will perform the following steps:
        1. Use the `crypto_power_data_cex` tool to get the latest candlestick data and
           technical indicators.
        2. Use the `tavily-search` tool to find the latest news and market sentiment.
        3. Synthesize the data from both tools to form a holistic analysis.'''
    )

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.available_tools = ToolManager([])
```

#### MCP Tool Configuration

**Stdio-based Transport:**
```python
from spoon_ai.tools import MCPTool

tavily_tool = MCPTool(
    name="tavily-search",
    description="Performs a web search using the Tavily API.",
    mcp_config={
        "command": "npx",
        "args": ["--yes", "tavily-mcp"],
        "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")}
    }
)
```

**HTTP Transport:**
```python
firecrawl_tool = MCPTool(
    name="firecrawl-scraper",
    description="Advanced web scraping tool",
    mcp_config={
        "url": "https://mcp.firecrawl.dev/scrape",
        "headers": {
            "Authorization": f"Bearer {os.getenv('FIRECRAWL_API_KEY')}",
            "Content-Type": "application/json"
        }
    }
)
```

1. **LLM (Language Model)** - The "brain" that provides reasoning capabilities
2. **Tools** - External capabilities the agent can use
3. **Memory** - Context and conversation history
4. **System Prompt** - Instructions that define the agent's behavior

#### Built-in Tools Integration

```python
from spoon_toolkits.crypto.crypto_powerdata.tools import CryptoPowerDataCEXTool
from spoon_toolkits.crypto.crypto_data_tools.price_data import GetTokenPriceTool

# Initialize built-in tools
crypto_tool = CryptoPowerDataCEXTool(
    exchange="binance",
    symbol="BTC/USDT",
    timeframe="1h",
    limit=100
)

price_tool = GetTokenPriceTool(
    exchange="uniswap"
)

# Add tools to agent
agent.available_tools.add_tools(crypto_tool, price_tool)
```
5. **Execution Loop** - The ReAct cycle that drives agent behavior

## Agent Types

### 1. SpoonReactAI

The standard ReAct agent for tool-enabled interactions:

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager

class MyAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Configure LLM
        self.llm = ChatBot(model_name="gpt-4.1")

        # Set system prompt
        self.system_prompt = "You are a helpful AI assistant."

        # Configure execution parameters
        self.max_steps = 10

        # Set up tools (if any)
        self.available_tools = ToolManager([])
```

### 2. SpoonReactMCP

MCP-enabled agent with dynamic tool loading:

```python
from spoon_ai.agents import SpoonReactMCP
from spoon_ai.chat import ChatBot

# Agent with MCP tool support
agent = SpoonReactMCP(
    llm=ChatBot(),
    system_prompt="You are an expert research assistant.",
    max_steps=15
)

# Agent can also load configuration from config.json
# The config.json file defines available MCP tools
```

## Creating Custom Agents

### Basic Custom Agent

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.tools.base import BaseTool
from spoon_ai.tools import ToolManager
from spoon_ai.chat import ChatBot

class WeatherTool(BaseTool):
    name: str = "get_weather"
    description: str = "Get current weather for a location"
    parameters: dict = {
        "type": "object",
        "properties": {
            "location": {"type": "string", "description": "City name"}
        },
        "required": ["location"]
    }

    async def execute(self, location: str) -> str:
        # Implement weather API call
        return f"Weather in {location}: Sunny, 72°F"

class WeatherAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Configure LLM
        self.llm = ChatBot()

        # Set system prompt
        self.system_prompt = """
        You are a weather assistant. Use the get_weather tool to provide
        accurate weather information for any location the user asks about.
        """

        # Set up tools
        weather_tool = WeatherTool()
        self.available_tools = ToolManager([weather_tool])
```

### Advanced Agent with Multiple Tools

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.tools import ToolManager
from spoon_ai.tools.mcp_tool import MCPTool
from spoon_ai.chat import ChatBot
import os

class ResearchAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Configure LLM
        self.llm = ChatBot(model_name="gpt-4.1")

        # Set up MCP tools
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

        self.available_tools = ToolManager(tools)
        self.system_prompt = """
        You are a research assistant with access to web search tools.

        When asked to research a topic:
        1. Search for current information using available tools
        2. Analyze and synthesize findings
        3. Provide well-structured summaries
        4. Always cite your sources

        Be thorough and accurate in your research.
        """
```

## Agent Configuration

### System Prompts

System prompts define your agent's personality and behavior:

```python
# Task-specific prompt
system_prompt = """
You are a crypto trading assistant. Your role is to:
- Analyze market data and trends
- Provide trading insights and recommendations
- Help users understand market conditions
- Always include risk warnings in trading advice
"""

# Personality-driven prompt
system_prompt = """
You are a friendly and enthusiastic coding mentor. You:
- Explain concepts clearly with examples
- Encourage learning and experimentation
- Provide constructive feedback
- Use emojis and positive language
"""
```

### Agent Parameters

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

class ConfigurableAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Configure LLM with specific parameters
        self.llm = ChatBot(
            model_name="gpt-4.1",
            temperature=0.7,        # Creativity level
            max_tokens=4096,        # Response length limit
            timeout=60              # Request timeout
        )

        # Execution settings
        self.max_steps = 20         # Maximum reasoning steps
        self.verbose = True         # Show reasoning steps

        # Agent behavior settings
        self.system_prompt = "You are a configurable AI assistant."
```

## Agent Lifecycle

### 1. Initialization

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

# Create agent instance
agent = SpoonReactAI(
    llm=ChatBot(model_name="gpt-4.1"),
    system_prompt="You are a helpful assistant.",
    max_steps=15
)
```

### 2. Execution

```python
# Single interaction
result = await agent.run("What's the weather in New York?")
print(result)

# Multiple interactions
questions = [
    "What is SpoonOS?",
    "How do I create an agent?",
    "What tools are available?"
]

for question in questions:
    response = await agent.run(question)
    print(f"Q: {question}")
    print(f"A: {response}
")
```

### 3. Configuration Management

```python
# Access agent configuration
print(f"Max steps: {agent.max_steps}")
print(f"System prompt: {agent.system_prompt}")

# Modify configuration
agent.max_steps = 20
agent.system_prompt = "You are an expert assistant."

# Check available tools
if hasattr(agent, 'available_tools'):
    tools = agent.available_tools.list_tools()
    print(f"Available tools: {tools}")
```

## Best Practices

### 1. Clear System Prompts

```python
# Good: Specific and actionable
system_prompt = """
You are a code review assistant. For each code submission:
1. Check for syntax errors and bugs
2. Suggest improvements for readability
3. Identify security vulnerabilities
4. Recommend best practices
5. Provide specific, actionable feedback
"""

# Avoid: Vague or generic
system_prompt = "You are a helpful assistant."
```

### 2. Appropriate Tool Selection

```python
# Match tools to agent purpose
class DataAnalysisAgent(ToolCallAgent):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Data-focused tools
        tools = [
            PandasTool(),      # Data manipulation
            PlotlyTool(),      # Visualization
            StatsTool(),       # Statistical analysis
            DatabaseTool(),    # Data access
        ]

        self.available_tools = ToolManager(tools)
```

### 3. Error Handling

```python
class RobustAgent(ToolCallAgent):
    async def run(self, user_input: str) -> str:
        try:
            return await super().run(user_input)
        except Exception as e:
            # Log error and provide graceful fallback
            self.logger.error(f"Agent execution failed: {e}")
            return "I encountered an error. Please try rephrasing your request."
```

### 4. Performance Optimization

```python
# Use appropriate model for task complexity
simple_agent = ToolCallAgent(
    llm=ChatBot(model_name="gpt-3.5-turbo")  # Faster, cheaper
)

complex_agent = ToolCallAgent(
    llm=ChatBot(model_name="gpt-4.1")        # More capable
)

# Set reasonable limits
agent.max_steps = 10        # Prevent infinite loops
agent.timeout = 60.0        # Prevent hanging
```

## Testing Agents

### Unit Testing

```python
import pytest
from unittest.mock import AsyncMock

@pytest.mark.asyncio
async def test_weather_agent():
    # Mock the LLM
    mock_llm = AsyncMock()
    mock_llm.chat.return_value = "The weather in Paris is sunny."

    # Create agent with mock
    agent = WeatherAgent(llm=mock_llm)

    # Test execution
    result = await agent.run("What's the weather in Paris?")
    assert "sunny" in result.lower()
```

### Integration Testing

```python
@pytest.mark.asyncio
async def test_agent_with_real_llm():
    # Test with actual LLM (requires API key)
    agent = WeatherAgent(llm=ChatBot())

    result = await agent.run("What's the weather in London?")
    assert len(result) > 0
    assert "weather" in result.lower()
```

## Monitoring and Debugging

### Logging

```python
import logging

# Enable agent logging
logging.basicConfig(level=logging.DEBUG)

# Agent will log reasoning steps
agent = MyAgent(llm=ChatBot(), verbose=True)
```

### Performance Metrics

```python
import time

start_time = time.time()
result = await agent.run("Complex query here")
execution_time = time.time() - start_time

print(f"Agent executed in {execution_time:.2f} seconds")
print(f"Used {agent.step_count} reasoning steps")
```

## Advanced Features

### MCP Tool Integration

#### Single MCP Tool Integration

```python
from spoon_ai.agents import SpoonReactMCP
from spoon_ai.tools.mcp_tool import MCPTool
from spoon_ai.tools import ToolManager
from spoon_ai.chat import ChatBot
import os

class MCPEnabledAgent(SpoonReactMCP):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Configure LLM
        self.llm = ChatBot(model_name="gpt-4.1")

        # Configure stdio MCP tool
        search_tool = MCPTool(
            name="tavily_search",
            description="Advanced web search capabilities",
            mcp_config={
                "command": "npx",
                "args": ["-y", "tavily-mcp"],
                "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")},
                "timeout": 30,
                "retry_attempts": 3
            }
        )

        # Configure HTTP MCP tool
        context7_tool = MCPTool(
            name="context7_docs",
            description="Access Context7 documentation and libraries",
            mcp_config={
                "url": "https://mcp.context7.com/mcp",
                "timeout": 30,
                "retry_attempts": 2,
                "headers": {
                    "User-Agent": "SpoonOS-Agent/1.0"
                }
            }
        )

        # Create tool manager
        self.available_tools = ToolManager([search_tool, context7_tool])

        self.system_prompt = """
        You are a research assistant with access to multiple MCP tools:
        - tavily_search: Web search functionality
        - context7_docs: Access Context7 documentation and library information

        When using tools:
        1. Choose the appropriate tool for the task
        2. Clearly define search objectives and keywords
        3. Analyze the reliability of search results
        4. Provide comprehensive analysis reports
        """

# Usage example
async def use_single_mcp():
    agent = MCPEnabledAgent()
    result = await agent.run("Search for the latest developments in SpoonOS framework and review related documentation")
    return result
```

#### Comprehensive MCP Tool Integration

```python
from spoon_ai.agents import SpoonReactMCP
from spoon_ai.tools.mcp_tool import MCPTool
from spoon_ai.tools import ToolManager

class ComprehensiveMCPAgent(SpoonReactMCP):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Configure multiple MCP tools
        mcp_tools = []

        # Web search tool
        if os.getenv("TAVILY_API_KEY"):
            mcp_tools.append(MCPTool(
                name="web_search",
                description="Web search and information gathering",
                mcp_config={
                    "command": "npx",
                    "args": ["-y", "tavily-mcp"],
                    "env": {"TAVILY_API_KEY": os.getenv("TAVILY_API_KEY")}
                }
            ))

        # GitHub tools
        if os.getenv("GITHUB_TOKEN"):
            mcp_tools.append(MCPTool(
                name="github_management",
                description="GitHub repository and code management",
                mcp_config={
                    "command": "npx",
                    "args": ["-y", "@modelcontextprotocol/server-github"],
                    "env": {"GITHUB_TOKEN": os.getenv("GITHUB_TOKEN")},
                    "transport": "stdio"
                }
            ))

        # Filesystem tools
        mcp_tools.append(MCPTool(
            name="file_operations",
            description="File and directory operations",
            mcp_config={
                "command": "npx",
                "args": ["-y", "@modelcontextprotocol/server-filesystem"],
                "transport": "stdio"
            }
        ))

        # Database tools
        mcp_tools.append(MCPTool(
            name="database_operations",
            description="SQLite database operations",
            mcp_config={
                "command": "npx",
                "args": ["-y", "@modelcontextprotocol/server-sqlite"],
                "env": {"DATABASE_PATH": "./agent_data.db"},
                "transport": "stdio"
            }
        ))

        # HTTP MCP tool - Context7 documentation service
        mcp_tools.append(MCPTool(
            name="context7_docs",
            description="Context7 documentation and library information access",
            mcp_config={
                "url": "https://mcp.context7.com/mcp",
                "transport": "http",
                "timeout": 30,
                "retry_attempts": 2,
                "headers": {
                    "User-Agent": "SpoonOS-ComprehensiveAgent/1.0"
                }
            }
        ))

        # SSE MCP tool - Firecrawl web scraping service
        if os.getenv("FIRECRAWL_API_KEY"):
            mcp_tools.append(MCPTool(
                name="firecrawl_scraper",
                description="Advanced web scraping and content extraction service",
                mcp_config={
                    "url": f"https://mcp.firecrawl.dev/{os.getenv('FIRECRAWL_API_KEY')}/sse",
                    "transport": "sse",
                    "timeout": 60,
                    "retry_attempts": 3,
                    "reconnect_interval": 5,
                    "max_reconnect_attempts": 10,
                    "headers": {
                        "Accept": "text/event-stream",
                        "User-Agent": "SpoonOS-ComprehensiveAgent/1.0",
                        "Cache-Control": "no-cache"
                    }
                }
            ))

        # Create tool manager
        self.available_tools = ToolManager(mcp_tools)

        self.system_prompt = """
        You are a comprehensive AI assistant with the following MCP tools:

        1. web_search: Search for latest information and resources
        2. github_management: Manage GitHub repositories and code
        3. file_operations: Handle files and directories
        4. database_operations: Operate SQLite databases
        5. context7_docs: Access Context7 documentation and library information
        6. firecrawl_scraper: Advanced web scraping and content extraction service

        Workflow:
        1. Analyze user requirements and determine which tools to use
        2. Use multiple tools in logical sequence to complete tasks
        3. Integrate results from all tools to provide comprehensive solutions

        Always ensure operation safety and accuracy.
        """

# Usage example
async def use_comprehensive_mcp():
    agent = ComprehensiveMCPAgent(llm=ChatBot())

    task = """
    Please help me complete a project analysis task:
    1. Search for the latest trends in 'AI agent frameworks'
    2. Review Context7 related documentation and library information
    3. Create project directory structure locally
    4. Create database to store analysis results
    5. If possible, review related GitHub projects
    """

    result = await agent.run(task)
    return result
```

### Advanced Parameter Configuration

#### Detailed Agent Parameter Configuration

```python
class AdvancedConfigAgent(SpoonReactMCP):
    def __init__(self, **kwargs):
        # Advanced LLM configuration
        llm_config = {
            "model_name": "gpt-4.1",
            "temperature": 0.3,          # Creativity control
            "max_tokens": 4096,          # Maximum response length
            "top_p": 0.9,               # Nucleus sampling parameter
            "frequency_penalty": 0.1,    # Frequency penalty
            "presence_penalty": 0.1,     # Presence penalty
            "timeout": 60,              # Request timeout
            "retry_attempts": 3,         # Retry attempts
            "stream": False             # Whether to stream responses
        }

        super().__init__(
            llm=ChatBot(**llm_config),
            **kwargs
        )

        # Agent execution parameters
        self.max_iterations = 20        # Maximum reasoning steps
        self.max_execution_time = 300   # Maximum execution time (seconds)
        self.enable_memory = True       # Enable conversation memory
        self.memory_window = 10         # Memory window size
        self.enable_reflection = True   # Enable reflection mechanism
        self.reflection_threshold = 5   # Reflection trigger threshold

        # Tool execution parameters
        self.tool_timeout = 30          # Tool execution timeout
        self.tool_retry_attempts = 2    # Tool retry attempts
        self.parallel_tool_execution = False  # Parallel tool execution
        self.tool_error_handling = "graceful"  # Tool error handling strategy

        # Security and limitation parameters
        self.enable_safety_checks = True      # Enable security checks
        self.max_tool_calls_per_iteration = 3 # Maximum tool calls per iteration
        self.restricted_operations = [        # Restricted operations
            "file_delete",
            "system_command",
            "network_access"
        ]

        self.system_prompt = """
        You are an advanced AI agent with the following configuration:

        Execution parameters:
        - Maximum reasoning steps: {max_iterations}
        - Memory enabled: {enable_memory}
        - Reflection enabled: {enable_reflection}

        Security settings:
        - Security checks: Enabled
        - Operation restrictions: Configured
        - Error handling: Graceful mode

        Please complete tasks efficiently within these parameter constraints.
        """.format(
            max_iterations=self.max_iterations,
            enable_memory=self.enable_memory,
            enable_reflection=self.enable_reflection
        )

# Dynamic parameter adjustment
class DynamicConfigAgent(SpoonReactMCP):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.performance_metrics = {
            "success_rate": 0.0,
            "avg_execution_time": 0.0,
            "tool_usage_efficiency": 0.0
        }

    async def run(self, user_input: str) -> str:
        """Execution with dynamic parameter adjustment"""
        # Adjust parameters based on historical performance
        self._adjust_parameters()

        # Execute task
        start_time = time.time()
        try:
            result = await super().run(user_input)
            success = True
        except Exception as e:
            result = f"Execution failed: {str(e)}"
            success = False

        # Update performance metrics
        execution_time = time.time() - start_time
        self._update_metrics(success, execution_time)

        return result

    def _adjust_parameters(self):
        """Adjust parameters based on performance metrics"""
        if self.performance_metrics["success_rate"] < 0.8:
            # Low success rate, increase retry attempts and timeout
            self.max_iterations = min(self.max_iterations + 2, 25)
            self.tool_timeout = min(self.tool_timeout + 10, 60)

        if self.performance_metrics["avg_execution_time"] > 120:
            # Execution time too long, reduce maximum steps
            self.max_iterations = max(self.max_iterations - 1, 10)

        if self.performance_metrics["tool_usage_efficiency"] < 0.6:
            # Low tool usage efficiency, enable parallel execution
            self.parallel_tool_execution = True

    def _update_metrics(self, success: bool, execution_time: float):
        """Update performance metrics"""
        # Simplified metric update logic
        alpha = 0.1  # Learning rate

        self.performance_metrics["success_rate"] = (
            (1 - alpha) * self.performance_metrics["success_rate"] +
            alpha * (1.0 if success else 0.0)
        )

        self.performance_metrics["avg_execution_time"] = (
            (1 - alpha) * self.performance_metrics["avg_execution_time"] +
            alpha * execution_time
        )
```

### Advanced Configuration File Settings

```json
{
  "agents": {
    "advanced_mcp_agent": {
      "class": "SpoonReactMCP",
      "description": "Advanced MCP agent configuration example",
      "config": {
        "max_steps": 20,
        "temperature": 0.3,
        "max_execution_time": 300,
        "enable_memory": true,
        "memory_window": 10,
        "enable_reflection": true,
        "reflection_threshold": 5,
        "safety_checks": true,
        "parallel_tool_execution": false,
        "tool_timeout": 30,
        "tool_retry_attempts": 2,
        "max_tool_calls_per_iteration": 3,
        "system_prompt": "You are an advanced AI agent..."
      },
      "llm_config": {
        "model_name": "gpt-4.1",
        "temperature": 0.3,
        "max_tokens": 4096,
        "top_p": 0.9,
        "frequency_penalty": 0.1,
        "presence_penalty": 0.1,
        "timeout": 60,
        "retry_attempts": 3
      },
      "tools": [
        {
          "name": "tavily_search",
          "type": "mcp",
          "enabled": true,
          "priority": "high",
          "config": {
            "timeout": 30,
            "retry_attempts": 3,
            "cache_duration": 300,
            "rate_limit": 100
          },
          "mcp_server": {
            "command": "npx",
            "args": ["-y", "tavily-mcp"],
            "env": {"TAVILY_API_KEY": "your-tavily-key"},
            "transport": "stdio",
            "health_check_interval": 60,
            "auto_restart": true
          }
        },
        {
          "name": "github_tools",
          "type": "mcp",
          "enabled": true,
          "priority": "medium",
          "config": {
            "timeout": 45,
            "retry_attempts": 2,
            "default_branch": "main",
            "max_file_size": "10MB"
          },
          "mcp_server": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-github"],
            "env": {"GITHUB_TOKEN": "your-github-token"},
            "transport": "stdio"
          }
        },
        {
          "name": "context7_docs",
          "type": "mcp",
          "enabled": true,
          "priority": "medium",
          "config": {
            "timeout": 30,
            "retry_attempts": 2,
            "rate_limit": 50,
            "cache_duration": 600
          },
          "mcp_server": {
            "url": "https://mcp.context7.com/mcp",
            "transport": "http",
            "headers": {
              "User-Agent": "SpoonOS-Agent/1.0"
            }
          }
        },
        {
          "name": "firecrawl_scraper",
          "type": "mcp",
          "enabled": true,
          "priority": "high",
          "config": {
            "timeout": 60,
            "retry_attempts": 3,
            "reconnect_interval": 5,
            "max_reconnect_attempts": 10,
            "rate_limit": 30,
            "cache_duration": 300
          },
          "mcp_server": {
            "url": "https://mcp.firecrawl.dev/{FIRECRAWL_API_KEY}/sse",
            "transport": "sse",
            "headers": {
              "Accept": "text/event-stream",
              "User-Agent": "SpoonOS-Agent/1.0",
              "Cache-Control": "no-cache"
            }
          }
        },
        {
          "name": "crypto_powerdata_cex",
          "type": "builtin",
          "enabled": true,
          "priority": "high",
          "config": {
            "timeout": 30,
            "max_retries": 3,
            "cache_duration": 300,
            "rate_limit": 200,
            "default_currency": "USD",
            "precision": 8
          },
          "env": {
            "OKX_API_KEY": "your_okx_api_key",
            "OKX_SECRET_KEY": "your_okx_secret_key",
            "OKX_API_PASSPHRASE": "your_okx_passphrase"
          }
        }
      ],
      "monitoring": {
        "enable_metrics": true,
        "log_level": "INFO",
        "performance_tracking": true,
        "error_reporting": true,
        "health_checks": true
      },
      "security": {
        "restricted_operations": [
          "file_delete",
          "system_command",
          "network_access"
        ],
        "api_rate_limits": {
          "requests_per_minute": 100,
          "tokens_per_hour": 50000
        },
        "data_privacy": {
          "log_user_inputs": false,
          "encrypt_sensitive_data": true,
          "data_retention_days": 30
        }
      }
    }
  }
}
```

## Next Steps

### 📚 **Agent Implementation Examples**

#### 🎯 [Intent Graph Demo](../examples/intent-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/intent_graph_demo.py)

**Advanced agent patterns demonstrated:**
- Long-lived agent architecture with persistent memory
- Intelligent routing and decision-making workflows
- Advanced state management and context preservation
- Production-ready error handling and monitoring

#### 🔍 [MCP Spoon Search Agent](../examples/mcp-spoon-search-agent.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/mcp/spoon_search_agent.py)

**MCP integration patterns:**
- Dynamic tool discovery and loading
- Multi-tool orchestration and coordination
- Real-time web search integration
- Advanced error handling for distributed systems

#### 📊 [Graph Crypto Analysis](../examples/graph-crypto-analysis.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)

**Domain-specific agent development:**
- Cryptocurrency market analysis workflows
- Real-time data processing and technical indicators
- LLM-driven investment recommendations
- Financial data validation and error handling

### 🛠️ **Development Resources**

- **[Tools System](./tools.md)** - Complete tool integration guide
- **[Custom Tools](../how-to-guides/add-custom-tools.md)** - Build specialized tools
- **[MCP Protocol](./mcp-protocol.md)** - Dynamic tool loading and execution
- **[Graph System](./graph-system.md)** - Advanced workflow orchestration

### 📖 **Additional Documentation**

- **[API Reference](../api-reference/agents/base-agent.md)** - Complete agent API documentation
- **[Performance Optimization](../troubleshooting/performance.md)** - Agent performance tuning
- **[Troubleshooting](../troubleshooting/common-issues.md)** - Common issues and solutions

Ready to build more sophisticated agents? Check out the [Tools](./tools.md) documentation! 🛠️
