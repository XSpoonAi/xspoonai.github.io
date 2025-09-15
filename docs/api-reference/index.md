# API Reference

Complete API documentation for all SpoonOS components and modules.

## Core Components

### [Graph System](graph/index.md)
Powerful workflow orchestration engine for complex multi-step processes.

- **[StateGraph](graph/state-graph.md)**: Main graph execution engine with routing and parallel processing
- **[GraphAgent](graph/graph-agent.md)**: High-level agent interface with memory management
- **[Base Nodes](graph/base-node.md)**: Building blocks for graph execution (RunnableNode, ToolNode, ConditionNode)

**Key Features:**
- Deterministic control flow with explicit nodes and edges
- Intelligent routing (LLM-powered, rule-based, conditional)
- Parallel execution with configurable join strategies
- Type-safe state management with reducer-based merging
- Memory integration and persistence

```python
from spoon_ai.graph import StateGraph, GraphAgent

# Build a graph
graph = StateGraph(MyState)
graph.add_node("analyze", analyze_node)
graph.set_entry_point("analyze")

# Create agent with memory
agent = GraphAgent("analyzer", graph, preserve_state=True)
result = await agent.run("Analyze this data")
```

### [Agents](agents/base-agent.md)
Intelligent conversation and task execution systems.

- **[BaseAgent](agents/base-agent.md)**: Foundation class for all agents with LLM integration

**Key Features:**
- LLM manager integration for natural language processing
- Tool management and execution
- Conversation handling with message history
- System prompt management
- Extensible architecture for custom agent types

```python
from spoon_ai.agents import BaseAgent

agent = BaseAgent(
    name="assistant",
    system_prompt="You are a helpful assistant"
)
response = await agent.run("Hello, how can I help?")
```

### [Tools](tools/base-tool.md)
Extensible capability system for external integrations and computations.

- **[BaseTool](tools/base-tool.md)**: Abstract base class for all tools
- **[Built-in Tools](tools/builtin-tools.md)**: Pre-implemented tools for common tasks

**Key Features:**
- Standardized tool interface with async execution
- Parameter validation and error handling
- Tool discovery and management
- Integration with agent systems

```python
from spoon_ai.tools import BaseTool

class CustomTool(BaseTool):
    name = "custom_tool"
    description = "My custom tool"

    async def execute(self, param: str) -> str:
        return f"Processed: {param}"
```

### [CLI](cli/commands.md)
Command-line interface for SpoonOS management and operations.

- **[Commands](cli/commands.md)**: Available CLI commands and usage

**Key Features:**
- Project initialization and configuration
- Agent and tool management
- Development server controls
- Deployment and monitoring tools

```bash
# Initialize a new SpoonOS project
spoon init my-project

# Run development server
spoon dev

# Deploy to production
spoon deploy
```

## Integration Patterns

### Graph + Agent Integration

```python
from spoon_ai.graph import StateGraph, GraphAgent
from spoon_ai.agents import BaseAgent

# Create graph-based agent
graph = StateGraph(MyState)
# ... configure graph ...

agent = GraphAgent("graph_agent", graph)

# Use like regular agent
result = await agent.run("Execute complex workflow")
```

### Tool + Graph Integration

```python
from spoon_ai.graph import StateGraph, ToolNode
from spoon_ai.tools import CalculatorTool

# Add tools to graph
tools = [CalculatorTool()]
tool_node = ToolNode("calculator", tools)

graph = StateGraph(MyState)
graph.add_node("calculate", tool_node)
```

### Multi-Component Architecture

```python
# Complete SpoonOS application
from spoon_ai.agents import BaseAgent
from spoon_ai.tools import ToolManager
from spoon_ai.llm import LLMManager
from spoon_ai.graph import StateGraph

# Orchestrate all components
llm_manager = LLMManager()
tool_manager = ToolManager()
agent = BaseAgent(
    name="full_agent",
    llm_manager=llm_manager,
    tool_manager=tool_manager
)

# Add graph capabilities
graph = StateGraph(ComplexState)
graph_agent = GraphAgent("workflow", graph)
```

## Error Handling

All SpoonOS components use consistent error handling:

```python
from spoon_ai.graph.exceptions import GraphExecutionError
from spoon_ai.tools.exceptions import ToolError
from spoon_ai.agents.exceptions import AgentError

try:
    result = await agent.run("Complex task")
except GraphExecutionError as e:
    print(f"Graph execution failed: {e}")
except ToolError as e:
    print(f"Tool execution failed: {e}")
except AgentError as e:
    print(f"Agent execution failed: {e}")
```

## Configuration

### Environment Variables

```bash
# LLM Configuration
export SPOON_LLM_PROVIDER=openai
export SPOON_OPENAI_API_KEY=your_key

# Database Configuration
export SPOON_DATABASE_URL=postgresql://...

# Memory Configuration
export SPOON_MEMORY_PATH=./memory
```

### Configuration Files

```json
{
  "llm": {
    "provider": "openai",
    "model": "gpt-4",
    "temperature": 0.7
  },
  "tools": {
    "enabled": ["calculator", "search", "web"],
    "custom_path": "./tools"
  },
  "graph": {
    "monitoring": true,
    "max_parallel": 5
  }
}
```

## Performance Optimization

### Graph Optimization

```python
# Enable monitoring
graph.enable_monitoring(["execution_time", "memory_usage"])

# Use parallel execution
graph.add_parallel_group("parallel_ops", ["task1", "task2"])

# Optimize state size
class OptimizedState(TypedDict):
    essential_data: str  # Keep minimal state
```

### Agent Optimization

```python
# Configure memory limits
agent = BaseAgent(
    name="optimized",
    max_memory_items=1000,
    memory_cleanup_interval=3600
)

# Use streaming for large responses
response = await agent.run("Large analysis", stream=True)
```

## Migration Guides

### From LangChain

```python
# LangChain style
# chain = LLMChain(llm=llm, prompt=prompt)

# SpoonOS equivalent
agent = BaseAgent(name="migrated")
agent.set_system_prompt("Your prompt here")
response = await agent.run("Query")
```

### From Custom Frameworks

```python
# Custom workflow engine
# workflow.add_step(step1).add_step(step2)

# SpoonOS equivalent
graph = StateGraph(State)
graph.add_node("step1", step1_func)
graph.add_node("step2", step2_func)
graph.add_edge("step1", "step2")
```

## See Also

- **[Getting Started](../../getting-started/quick-start.md)**: Quick start guide
- **[Core Concepts](../../core-concepts/)**: Understanding SpoonOS architecture
- **[Examples](../../examples/)**: Complete working examples
- **[Troubleshooting](../../troubleshooting/)**: Common issues and solutions

