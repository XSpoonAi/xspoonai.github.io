---
id: spoon_ai.agents
slug: /api-reference/spoon_ai/agents//index
title: spoon_ai.agents
---

# Table of Contents

* [spoon\_ai.agents](#spoon_ai.agents)
* [spoon\_ai.agents.toolcall](#spoon_ai.agents.toolcall)
  * [ToolCallAgent](#spoon_ai.agents.toolcall.ToolCallAgent)
    * [tool\_choices](#spoon_ai.agents.toolcall.ToolCallAgent.tool_choices)
    * [mcp\_tools\_cache\_ttl](#spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl)
    * [run](#spoon_ai.agents.toolcall.ToolCallAgent.run)
    * [step](#spoon_ai.agents.toolcall.ToolCallAgent.step)
* [spoon\_ai.agents.react](#spoon_ai.agents.react)
* [spoon\_ai.agents.mcp\_client\_mixin](#spoon_ai.agents.mcp_client_mixin)
  * [MCPClientMixin](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin)
    * [get\_session](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session)
    * [list\_mcp\_tools](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools)
    * [call\_mcp\_tool](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool)
    * [send\_mcp\_message](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message)
    * [cleanup](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup)
    * [get\_session\_stats](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats)
* [spoon\_ai.agents.spoon\_react\_mcp](#spoon_ai.agents.spoon_react_mcp)
  * [SpoonReactMCP](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP)
    * [list\_mcp\_tools](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP.list_mcp_tools)
* [spoon\_ai.agents.monitor](#spoon_ai.agents.monitor)
* [spoon\_ai.agents.rag](#spoon_ai.agents.rag)
  * [RetrievalMixin](#spoon_ai.agents.rag.RetrievalMixin)
    * [initialize\_retrieval\_client](#spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client)
    * [add\_documents](#spoon_ai.agents.rag.RetrievalMixin.add_documents)
    * [retrieve\_relevant\_documents](#spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents)
    * [get\_context\_from\_query](#spoon_ai.agents.rag.RetrievalMixin.get_context_from_query)
* [spoon\_ai.agents.custom\_agent](#spoon_ai.agents.custom_agent)
  * [CustomAgent](#spoon_ai.agents.custom_agent.CustomAgent)
    * [add\_tool](#spoon_ai.agents.custom_agent.CustomAgent.add_tool)
    * [add\_tools](#spoon_ai.agents.custom_agent.CustomAgent.add_tools)
    * [remove\_tool](#spoon_ai.agents.custom_agent.CustomAgent.remove_tool)
    * [list\_tools](#spoon_ai.agents.custom_agent.CustomAgent.list_tools)
    * [get\_tool\_info](#spoon_ai.agents.custom_agent.CustomAgent.get_tool_info)
    * [validate\_tools](#spoon_ai.agents.custom_agent.CustomAgent.validate_tools)
    * [run](#spoon_ai.agents.custom_agent.CustomAgent.run)
    * [clear](#spoon_ai.agents.custom_agent.CustomAgent.clear)
* [spoon\_ai.agents.graph\_agent](#spoon_ai.agents.graph_agent)
  * [GraphAgent](#spoon_ai.agents.graph_agent.GraphAgent)
    * [\_\_init\_\_](#spoon_ai.agents.graph_agent.GraphAgent.__init__)
    * [validate\_graph](#spoon_ai.agents.graph_agent.GraphAgent.validate_graph)
    * [run](#spoon_ai.agents.graph_agent.GraphAgent.run)
    * [step](#spoon_ai.agents.graph_agent.GraphAgent.step)
    * [get\_execution\_history](#spoon_ai.agents.graph_agent.GraphAgent.get_execution_history)
    * [get\_execution\_metadata](#spoon_ai.agents.graph_agent.GraphAgent.get_execution_metadata)
    * [clear\_state](#spoon_ai.agents.graph_agent.GraphAgent.clear_state)
    * [update\_initial\_state](#spoon_ai.agents.graph_agent.GraphAgent.update_initial_state)
    * [set\_preserve\_state](#spoon_ai.agents.graph_agent.GraphAgent.set_preserve_state)
* [spoon\_ai.agents.spoon\_react](#spoon_ai.agents.spoon_react)
  * [create\_configured\_chatbot](#spoon_ai.agents.spoon_react.create_configured_chatbot)
  * [SpoonReactAI](#spoon_ai.agents.spoon_react.SpoonReactAI)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react.SpoonReactAI.__init__)
    * [initialize](#spoon_ai.agents.spoon_react.SpoonReactAI.initialize)
    * [run](#spoon_ai.agents.spoon_react.SpoonReactAI.run)
* [spoon\_ai.agents.base](#spoon_ai.agents.base)
  * [ThreadSafeOutputQueue](#spoon_ai.agents.base.ThreadSafeOutputQueue)
    * [get](#spoon_ai.agents.base.ThreadSafeOutputQueue.get)
  * [BaseAgent](#spoon_ai.agents.base.BaseAgent)
    * [add\_message](#spoon_ai.agents.base.BaseAgent.add_message)
    * [state\_context](#spoon_ai.agents.base.BaseAgent.state_context)
    * [run](#spoon_ai.agents.base.BaseAgent.run)
    * [step](#spoon_ai.agents.base.BaseAgent.step)
    * [is\_stuck](#spoon_ai.agents.base.BaseAgent.is_stuck)
    * [handle\_stuck\_state](#spoon_ai.agents.base.BaseAgent.handle_stuck_state)
    * [add\_documents](#spoon_ai.agents.base.BaseAgent.add_documents)
    * [save\_chat\_history](#spoon_ai.agents.base.BaseAgent.save_chat_history)
    * [stream](#spoon_ai.agents.base.BaseAgent.stream)
    * [process\_mcp\_message](#spoon_ai.agents.base.BaseAgent.process_mcp_message)
    * [shutdown](#spoon_ai.agents.base.BaseAgent.shutdown)
    * [get\_diagnostics](#spoon_ai.agents.base.BaseAgent.get_diagnostics)

<a id="spoon_ai.agents"></a>

# Module `spoon_ai.agents`

<a id="spoon_ai.agents.toolcall"></a>

# Module `spoon_ai.agents.toolcall`

<a id="spoon_ai.agents.toolcall.ToolCallAgent"></a>

## `ToolCallAgent` Objects

```python
class ToolCallAgent(ReActAgent)
```

<a id="spoon_ai.agents.toolcall.ToolCallAgent.tool_choices"></a>

#### `tool_choices`

type: ignore

<a id="spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl"></a>

#### `mcp_tools_cache_ttl`

5 minutes TTL

<a id="spoon_ai.agents.toolcall.ToolCallAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Override run method to handle finish_reason termination specially.

<a id="spoon_ai.agents.toolcall.ToolCallAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Override the step method to handle finish_reason termination properly.

<a id="spoon_ai.agents.react"></a>

# Module `spoon_ai.agents.react`

<a id="spoon_ai.agents.mcp_client_mixin"></a>

# Module `spoon_ai.agents.mcp_client_mixin`

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin"></a>

## `MCPClientMixin` Objects

```python
class MCPClientMixin()
```

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session"></a>

#### `get_session`

```python
@asynccontextmanager
async def get_session()
```

Get a session with robust resource management and cleanup.

Features:
- Automatic session reuse per task
- Resource limits to prevent exhaustion
- Proper cleanup on cancellation/failure
- Periodic cleanup of stale sessions

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools"></a>

#### `list_mcp_tools`

```python
async def list_mcp_tools()
```

Get the list of available tools from the MCP server

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool"></a>

#### `call_mcp_tool`

```python
async def call_mcp_tool(tool_name: str, **kwargs)
```

Call a tool on the MCP server

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message"></a>

#### `send_mcp_message`

```python
async def send_mcp_message(recipient: str,
                           message: Union[str, Dict[str, Any]],
                           topic: Optional[str] = None,
                           metadata: Optional[Dict[str, Any]] = None) -> bool
```

Send a message to the MCP system

**Arguments**:

- `recipient` - Recipient ID
- `message` - Message content (string or dictionary)
- `topic` - Message topic
- `metadata` - Additional metadata
  

**Returns**:

- `bool` - Whether the message was sent successfully

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup"></a>

#### `cleanup`

```python
async def cleanup()
```

Enhanced cleanup method with comprehensive resource cleanup.

<a id="spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats"></a>

#### `get_session_stats`

```python
def get_session_stats() -> Dict[str, Any]
```

Get session statistics for monitoring.

<a id="spoon_ai.agents.spoon_react_mcp"></a>

# Module `spoon_ai.agents.spoon_react_mcp`

<a id="spoon_ai.agents.spoon_react_mcp.SpoonReactMCP"></a>

## `SpoonReactMCP` Objects

```python
class SpoonReactMCP(SpoonReactAI)
```

<a id="spoon_ai.agents.spoon_react_mcp.SpoonReactMCP.list_mcp_tools"></a>

#### `list_mcp_tools`

```python
async def list_mcp_tools()
```

Return MCP tools from available_tools manager

<a id="spoon_ai.agents.monitor"></a>

# Module `spoon_ai.agents.monitor`

<a id="spoon_ai.agents.rag"></a>

# Module `spoon_ai.agents.rag`

<a id="spoon_ai.agents.rag.RetrievalMixin"></a>

## `RetrievalMixin` Objects

```python
class RetrievalMixin()
```

Mixin class for retrieval-augmented generation functionality

<a id="spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client"></a>

#### `initialize_retrieval_client`

```python
def initialize_retrieval_client(backend: str = 'chroma', **kwargs)
```

Initialize the retrieval client if it doesn't exist

<a id="spoon_ai.agents.rag.RetrievalMixin.add_documents"></a>

#### `add_documents`

```python
def add_documents(documents, backend: str = 'chroma', **kwargs)
```

Add documents to the retrieval system

<a id="spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents"></a>

#### `retrieve_relevant_documents`

```python
def retrieve_relevant_documents(query, k=5, backend: str = 'chroma', **kwargs)
```

Retrieve relevant documents for a query

<a id="spoon_ai.agents.rag.RetrievalMixin.get_context_from_query"></a>

#### `get_context_from_query`

```python
def get_context_from_query(query)
```

Get context string from relevant documents for a query

<a id="spoon_ai.agents.custom_agent"></a>

# Module `spoon_ai.agents.custom_agent`

<a id="spoon_ai.agents.custom_agent.CustomAgent"></a>

## `CustomAgent` Objects

```python
class CustomAgent(ToolCallAgent)
```

Custom Agent class allowing users to create their own agents and add custom tools

Usage:
Create custom agent and add tools:
   agent = CustomAgent(name="my_agent", description="My custom agent")
   agent.add_tool(MyCustomTool())
   result = await agent.run("Use my custom tool")

<a id="spoon_ai.agents.custom_agent.CustomAgent.add_tool"></a>

#### `add_tool`

```python
def add_tool(tool: BaseTool) -> None
```

Add a tool to the agent with validation.

**Arguments**:

- `tool` - Tool instance to add
  

**Raises**:

- `ValueError` - If tool is invalid or already exists

<a id="spoon_ai.agents.custom_agent.CustomAgent.add_tools"></a>

#### `add_tools`

```python
def add_tools(tools: List[BaseTool]) -> None
```

Add multiple tools to the agent with atomic operation.

**Arguments**:

- `tools` - List of tool instances to add
  

**Raises**:

- `ValueError` - If any tool is invalid

<a id="spoon_ai.agents.custom_agent.CustomAgent.remove_tool"></a>

#### `remove_tool`

```python
def remove_tool(tool_name: str) -> bool
```

Remove a tool from the agent.

**Arguments**:

- `tool_name` - Name of the tool to remove
  

**Returns**:

- `bool` - True if tool was removed, False if not found

<a id="spoon_ai.agents.custom_agent.CustomAgent.list_tools"></a>

#### `list_tools`

```python
def list_tools() -> List[str]
```

List all available tools in the agent.

**Returns**:

  List of tool names, empty list if no tools

<a id="spoon_ai.agents.custom_agent.CustomAgent.get_tool_info"></a>

#### `get_tool_info`

```python
def get_tool_info() -> Dict[str, Dict[str, Any]]
```

Get detailed information about all tools.

**Returns**:

  Dictionary with tool names as keys and tool info as values

<a id="spoon_ai.agents.custom_agent.CustomAgent.validate_tools"></a>

#### `validate_tools`

```python
def validate_tools() -> Dict[str, Any]
```

Validate all current tools and return validation report.

**Returns**:

  Dictionary with validation results

<a id="spoon_ai.agents.custom_agent.CustomAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Run the agent with enhanced tool validation.

**Arguments**:

- `request` - User request
  

**Returns**:

  Processing result

<a id="spoon_ai.agents.custom_agent.CustomAgent.clear"></a>

#### `clear`

```python
def clear()
```

Enhanced clear method with proper tool state management.

<a id="spoon_ai.agents.graph_agent"></a>

# Module `spoon_ai.agents.graph_agent`

Graph-based agent implementation for SpoonOS.

This module provides the GraphAgent class that executes StateGraph workflows,
integrating the graph execution system with the existing agent architecture.

<a id="spoon_ai.agents.graph_agent.GraphAgent"></a>

## `GraphAgent` Objects

```python
class GraphAgent(BaseAgent)
```

An agent that executes StateGraph workflows.

This agent provides a bridge between the existing SpoonOS agent architecture
and the new graph-based execution system. It allows complex, stateful workflows
to be defined as graphs and executed with proper state management.

Key Features:
- Executes StateGraph workflows
- Maintains compatibility with existing agent interfaces
- Provides detailed execution logging and error handling
- Supports both sync and async node functions

<a id="spoon_ai.agents.graph_agent.GraphAgent.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize the GraphAgent.

**Arguments**:

- `graph` - StateGraph instance to execute
- `**kwargs` - Additional arguments passed to BaseAgent
  

**Raises**:

- `ValueError` - If no graph is provided

<a id="spoon_ai.agents.graph_agent.GraphAgent.validate_graph"></a>

#### `validate_graph`

```python
@validator('graph')
def validate_graph(cls, v)
```

Validate that the provided graph is a StateGraph instance.

<a id="spoon_ai.agents.graph_agent.GraphAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Execute the graph workflow.

This method overrides the base run method to invoke the compiled graph
instead of the traditional step-based execution loop.

**Arguments**:

- `request` - Optional input request to include in initial state
  

**Returns**:

  String representation of the execution result
  

**Raises**:

- `RuntimeError` - If agent is not in IDLE state
- `GraphExecutionError` - If graph execution fails

<a id="spoon_ai.agents.graph_agent.GraphAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Step method for compatibility with BaseAgent.

Since GraphAgent uses graph execution instead of step-based execution,
this method is not used in normal operation but is required by the
BaseAgent interface.

**Returns**:

  Status message indicating graph-based execution

<a id="spoon_ai.agents.graph_agent.GraphAgent.get_execution_history"></a>

#### `get_execution_history`

```python
def get_execution_history() -> list
```

Get the execution history from the last graph run.

**Returns**:

  List of execution steps with metadata

<a id="spoon_ai.agents.graph_agent.GraphAgent.get_execution_metadata"></a>

#### `get_execution_metadata`

```python
def get_execution_metadata() -> Dict[str, Any]
```

Get metadata from the last execution.

**Returns**:

  Dictionary containing execution metadata

<a id="spoon_ai.agents.graph_agent.GraphAgent.clear_state"></a>

#### `clear_state`

```python
def clear_state()
```

Clear preserved state and execution history.

<a id="spoon_ai.agents.graph_agent.GraphAgent.update_initial_state"></a>

#### `update_initial_state`

```python
def update_initial_state(updates: Dict[str, Any])
```

Update the initial state for future executions.

**Arguments**:

- `updates` - Dictionary of state updates to merge

<a id="spoon_ai.agents.graph_agent.GraphAgent.set_preserve_state"></a>

#### `set_preserve_state`

```python
def set_preserve_state(preserve: bool)
```

Enable or disable state preservation between runs.

**Arguments**:

- `preserve` - Whether to preserve state between runs

<a id="spoon_ai.agents.spoon_react"></a>

# Module `spoon_ai.agents.spoon_react`

<a id="spoon_ai.agents.spoon_react.create_configured_chatbot"></a>

#### `create_configured_chatbot`

```python
def create_configured_chatbot()
```

Create a ChatBot instance with intelligent provider selection.

<a id="spoon_ai.agents.spoon_react.SpoonReactAI"></a>

## `SpoonReactAI` Objects

```python
class SpoonReactAI(ToolCallAgent)
```

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize SpoonReactAI with both ToolCallAgent and MCPClientMixin initialization

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.initialize"></a>

#### `initialize`

```python
async def initialize(__context: Any = None)
```

Initialize async components and subscribe to topics

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Ensure prompts reflect current tools before running.

<a id="spoon_ai.agents.base"></a>

# Module `spoon_ai.agents.base`

<a id="spoon_ai.agents.base.ThreadSafeOutputQueue"></a>

## `ThreadSafeOutputQueue` Objects

```python
class ThreadSafeOutputQueue()
```

Thread-safe output queue with fair access and timeout protection

<a id="spoon_ai.agents.base.ThreadSafeOutputQueue.get"></a>

#### `get`

```python
async def get(timeout: Optional[float] = 30.0) -> Any
```

Get item with timeout and fair access

<a id="spoon_ai.agents.base.BaseAgent"></a>

## `BaseAgent` Objects

```python
class BaseAgent(BaseModel, ABC)
```

Thread-safe base class for all agents with proper concurrency handling.

<a id="spoon_ai.agents.base.BaseAgent.add_message"></a>

#### `add_message`

```python
async def add_message(role: Literal["user", "assistant", "tool"],
                      content: str,
                      tool_call_id: Optional[str] = None,
                      tool_calls: Optional[List[ToolCall]] = None,
                      tool_name: Optional[str] = None,
                      timeout: Optional[float] = None) -> None
```

Thread-safe message addition with timeout protection

<a id="spoon_ai.agents.base.BaseAgent.state_context"></a>

#### `state_context`

```python
@asynccontextmanager
async def state_context(new_state: AgentState,
                        timeout: Optional[float] = None)
```

Thread-safe state context manager with deadlock prevention.
Acquires the state lock only to perform quick transitions, not for the
duration of the work inside the context, avoiding long-held locks and
false timeouts during network calls.

<a id="spoon_ai.agents.base.BaseAgent.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None,
              timeout: Optional[float] = None) -> str
```

Thread-safe run method with proper concurrency control and callback support.

<a id="spoon_ai.agents.base.BaseAgent.step"></a>

#### `step`

```python
async def step(run_id: Optional[uuid.UUID] = None) -> str
```

Override this method in subclasses - now with step-level locking and callback support.

<a id="spoon_ai.agents.base.BaseAgent.is_stuck"></a>

#### `is_stuck`

```python
async def is_stuck() -> bool
```

Thread-safe stuck detection

<a id="spoon_ai.agents.base.BaseAgent.handle_stuck_state"></a>

#### `handle_stuck_state`

```python
async def handle_stuck_state()
```

Thread-safe stuck state handling

<a id="spoon_ai.agents.base.BaseAgent.add_documents"></a>

#### `add_documents`

```python
def add_documents(documents) -> None
```

Store documents on the agent so CLI load-docs works without RAG mixin.

This default implementation keeps the documents in-memory under
self._loaded_documents. Agents that support retrieval should override
this method to index documents into their vector store.

<a id="spoon_ai.agents.base.BaseAgent.save_chat_history"></a>

#### `save_chat_history`

```python
def save_chat_history()
```

Thread-safe chat history saving

<a id="spoon_ai.agents.base.BaseAgent.stream"></a>

#### `stream`

```python
async def stream(timeout: Optional[float] = None)
```

Thread-safe streaming with proper cleanup and timeout

<a id="spoon_ai.agents.base.BaseAgent.process_mcp_message"></a>

#### `process_mcp_message`

```python
async def process_mcp_message(content: Any,
                              sender: str,
                              message: Dict[str, Any],
                              agent_id: str,
                              timeout: Optional[float] = None)
```

Thread-safe MCP message processing with timeout protection

<a id="spoon_ai.agents.base.BaseAgent.shutdown"></a>

#### `shutdown`

```python
async def shutdown(timeout: float = 30.0)
```

Graceful shutdown with cleanup of active operations

<a id="spoon_ai.agents.base.BaseAgent.get_diagnostics"></a>

#### `get_diagnostics`

```python
def get_diagnostics() -> Dict[str, Any]
```

Get diagnostic information about the agent's state

