# Base Agent API Reference

The `BaseAgent` class is the foundation for all agents in SpoonOS, providing core functionality for LLM interaction, tool management, and conversation handling.

## Class Definition

```python
from spoon_ai.agents.base import BaseAgent
from spoon_ai.tools import ToolManager
from spoon_ai.llm import LLMManager

class BaseAgent:
    def __init__(
        self,
        name: str,
        system_prompt: str = None,
        llm_manager: LLMManager = None,
        tool_manager: ToolManager = None,
        **kwargs
    )
```

## Parameters

### Required Parameters

- **name** (`str`): Unique identifier for the agent

### Optional Parameters

- **system_prompt** (`str`, optional): System prompt that defines agent behavior
- **llm_manager** (`LLMManager`, optional): LLM manager instance for model interactions
- **tool_manager** (`ToolManager`, optional): Tool manager for available tools
- **kwargs**: Additional configuration options

## Methods

### Core Methods

#### `async run(message: str, **kwargs) -> str`

Execute the agent with a user message.

**Parameters:**
- `message` (str): User input message
- `**kwargs`: Additional execution parameters

**Returns:**
- `str`: Agent response

**Example:**
```python
agent = BaseAgent(name="assistant")
response = await agent.run("Hello, how are you?")
print(response)
```

#### `async chat(messages: List[Dict], **kwargs) -> Dict`

Process a conversation with multiple messages.

**Parameters:**
- `messages` (List[Dict]): List of conversation messages
- `**kwargs`: Additional chat parameters

**Returns:**
- `Dict`: Chat response with metadata

**Example:**
```python
messages = [
    {"role": "user", "content": "What's the weather like?"}
]
response = await agent.chat(messages)
```

### Configuration Methods

#### `set_system_prompt(prompt: str)`

Update the agent's system prompt.

**Parameters:**
- `prompt` (str): New system prompt

**Example:**
```python
agent.set_system_prompt("You are a helpful coding assistant.")
```

#### `add_tool(tool: BaseTool)`

Add a tool to the agent's tool manager.

**Parameters:**
- `tool` (BaseTool): Tool instance to add

**Example:**
```python
from spoon_ai.tools import CustomTool

custom_tool = CustomTool()
agent.add_tool(custom_tool)
```

#### `remove_tool(tool_name: str)`

Remove a tool from the agent's tool manager.

**Parameters:**
- `tool_name` (str): Name of the tool to remove

**Example:**
```python
agent.remove_tool("custom_tool")
```

### Information Methods

#### `get_available_tools() -> List[str]`

Get list of available tool names.

**Returns:**
- `List[str]`: List of tool names

**Example:**
```python
tools = agent.get_available_tools()
print(f"Available tools: {tools}")
```

#### `get_config() -> Dict`

Get current agent configuration.

**Returns:**
- `Dict`: Agent configuration dictionary

**Example:**
```python
config = agent.get_config()
print(f"Agent config: {config}")
```

## Properties

### `name: str`
Agent's unique identifier (read-only)

### `system_prompt: str`
Current system prompt

### `llm_manager: LLMManager`
LLM manager instance

### `tool_manager: ToolManager`
Tool manager instance

### `config: Dict`
Agent configuration dictionary

## Events

### `on_message_received(message: str)`
Triggered when agent receives a message

### `on_response_generated(response: str)`
Triggered when agent generates a response

### `on_tool_executed(tool_name: str, result: Any)`
Triggered when a tool is executed

### `on_error(error: Exception)`
Triggered when an error occurs

## Configuration Schema

```json
{
  "name": "string",
  "system_prompt": "string",
  "config": {
    "max_steps": "integer",
    "temperature": "float",
    "max_tokens": "integer",
    "timeout": "integer"
  },
  "tools": [
    {
      "name": "string",
      "type": "builtin|custom|mcp",
      "enabled": "boolean",
      "config": {}
    }
  ]
}
```

## Error Handling

### Common Exceptions

#### `AgentError`
Base exception for agent-related errors

#### `ConfigurationError`
Raised when agent configuration is invalid

#### `ToolError`
Raised when tool execution fails

#### `LLMError`
Raised when LLM interaction fails

### Error Handling Example

```python
from spoon_ai.agents.base import BaseAgent
from spoon_ai.agents.errors import AgentError, ToolError

try:
    agent = BaseAgent(name="test_agent")
    response = await agent.run("Hello")
except ConfigurationError as e:
    print(f"Configuration error: {e}")
except ToolError as e:
    print(f"Tool execution error: {e}")
except AgentError as e:
    print(f"Agent error: {e}")
```

## Best Practices

### Initialization
- Always provide a unique name for each agent
- Set appropriate system prompts for your use case
- Configure tools before first use
- Validate configuration before deployment

### Performance
- Reuse agent instances when possible
- Configure appropriate timeouts
- Monitor tool execution times
- Use caching for expensive operations

### Security
- Validate all user inputs
- Sanitize system prompts
- Limit tool permissions
- Monitor agent behavior

### Debugging
- Enable debug logging for troubleshooting
- Use event handlers to monitor agent behavior
- Test with simple inputs first
- Validate tool configurations

## Examples

### Basic Agent Setup

```python
from spoon_ai.agents.base import BaseAgent
from spoon_ai.llm import LLMManager
from spoon_ai.tools import ToolManager

# Create LLM manager
llm_manager = LLMManager(
    provider="openai",
    model="gpt-4"
)

# Create tool manager
tool_manager = ToolManager()

# Create agent
agent = BaseAgent(
    name="my_assistant",
    system_prompt="You are a helpful assistant.",
    llm_manager=llm_manager,
    tool_manager=tool_manager
)

# Use agent
response = await agent.run("What can you help me with?")
print(response)
```

### Agent with Custom Configuration

```python
from spoon_ai.agents.base import BaseAgent

agent = BaseAgent(
    name="custom_agent",
    system_prompt="You are a specialized assistant.",
    config={
        "max_steps": 10,
        "temperature": 0.7,
        "max_tokens": 2000,
        "timeout": 30
    }
)

# Add event handlers
def on_message(message):
    print(f"Received: {message}")

def on_response(response):
    print(f"Generated: {response}")

agent.on_message_received = on_message
agent.on_response_generated = on_response

# Use agent
response = await agent.run("Hello, world!")
```

### Multi-turn Conversation

```python
from spoon_ai.agents.base import BaseAgent

agent = BaseAgent(name="conversational_agent")

# Start conversation
messages = [
    {"role": "user", "content": "Hello, I need help with Python."}
]

response1 = await agent.chat(messages)
messages.append({"role": "assistant", "content": response1["content"]})

# Continue conversation
messages.append({"role": "user", "content": "Can you show me a simple example?"})
response2 = await agent.chat(messages)

print(f"Final response: {response2['content']}")
```

## See Also

- [Agent Types](../../core-concepts/agents.md)
- [Tool Manager API](../tools/base-tool.md)
- [LLM Providers](../../core-concepts/llm-providers.md)
- [Agent Development Guide](../../how-to-guides/build-first-agent.md)"}