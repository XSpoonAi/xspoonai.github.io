---
id: spoon_ai.agents
slug: /api-reference/spoon_ai/agents//index
title: spoon_ai.agents
---

# Table of Contents

* [spoon\_ai.agents](#spoon_ai.agents)
* [spoon\_ai.agents.rag](#spoon_ai.agents.rag)
  * [RetrievalMixin](#spoon_ai.agents.rag.RetrievalMixin)
    * [initialize\_retrieval\_client](#spoon_ai.agents.rag.RetrievalMixin.initialize_retrieval_client)
    * [add\_documents](#spoon_ai.agents.rag.RetrievalMixin.add_documents)
    * [retrieve\_relevant\_documents](#spoon_ai.agents.rag.RetrievalMixin.retrieve_relevant_documents)
    * [get\_context\_from\_query](#spoon_ai.agents.rag.RetrievalMixin.get_context_from_query)
* [spoon\_ai.agents.monitor](#spoon_ai.agents.monitor)
* [spoon\_ai.agents.spoon\_react\_skill](#spoon_ai.agents.spoon_react_skill)
  * [SpoonReactSkill](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.__init__)
    * [run](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.run)
    * [initialize](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.initialize)
    * [add\_skill\_path](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.add_skill_path)
    * [discover\_skills](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.discover_skills)
* [spoon\_ai.agents.base](#spoon_ai.agents.base)
  * [ThreadSafeOutputQueue](#spoon_ai.agents.base.ThreadSafeOutputQueue)
    * [get](#spoon_ai.agents.base.ThreadSafeOutputQueue.get)
  * [BaseAgent](#spoon_ai.agents.base.BaseAgent)
    * [add\_message](#spoon_ai.agents.base.BaseAgent.add_message)
    * [add\_message\_with\_image](#spoon_ai.agents.base.BaseAgent.add_message_with_image)
    * [add\_message\_with\_pdf](#spoon_ai.agents.base.BaseAgent.add_message_with_pdf)
    * [add\_message\_with\_document](#spoon_ai.agents.base.BaseAgent.add_message_with_document)
    * [add\_message\_with\_pdf\_file](#spoon_ai.agents.base.BaseAgent.add_message_with_pdf_file)
    * [add\_message\_with\_image\_file](#spoon_ai.agents.base.BaseAgent.add_message_with_image_file)
    * [add\_message\_with\_file](#spoon_ai.agents.base.BaseAgent.add_message_with_file)
    * [state\_context](#spoon_ai.agents.base.BaseAgent.state_context)
    * [run](#spoon_ai.agents.base.BaseAgent.run)
    * [step](#spoon_ai.agents.base.BaseAgent.step)
    * [is\_stuck](#spoon_ai.agents.base.BaseAgent.is_stuck)
    * [handle\_stuck\_state](#spoon_ai.agents.base.BaseAgent.handle_stuck_state)
    * [estimate\_token\_count](#spoon_ai.agents.base.BaseAgent.estimate_token_count)
    * [should\_trigger\_reflection](#spoon_ai.agents.base.BaseAgent.should_trigger_reflection)
    * [add\_documents](#spoon_ai.agents.base.BaseAgent.add_documents)
    * [save\_chat\_history](#spoon_ai.agents.base.BaseAgent.save_chat_history)
    * [stream](#spoon_ai.agents.base.BaseAgent.stream)
    * [process\_mcp\_message](#spoon_ai.agents.base.BaseAgent.process_mcp_message)
    * [shutdown](#spoon_ai.agents.base.BaseAgent.shutdown)
    * [get\_agent\_state](#spoon_ai.agents.base.BaseAgent.get_agent_state)
    * [set\_agent\_state](#spoon_ai.agents.base.BaseAgent.set_agent_state)
    * [update\_agent\_state](#spoon_ai.agents.base.BaseAgent.update_agent_state)
    * [get\_diagnostics](#spoon_ai.agents.base.BaseAgent.get_diagnostics)
* [spoon\_ai.agents.toolcall](#spoon_ai.agents.toolcall)
  * [ToolCallAgent](#spoon_ai.agents.toolcall.ToolCallAgent)
    * [tool\_choices](#spoon_ai.agents.toolcall.ToolCallAgent.tool_choices)
    * [mcp\_tools\_cache\_ttl](#spoon_ai.agents.toolcall.ToolCallAgent.mcp_tools_cache_ttl)
    * [run](#spoon_ai.agents.toolcall.ToolCallAgent.run)
    * [step](#spoon_ai.agents.toolcall.ToolCallAgent.step)
    * [execute\_tool](#spoon_ai.agents.toolcall.ToolCallAgent.execute_tool)
* [spoon\_ai.agents.skill\_mixin](#spoon_ai.agents.skill_mixin)
  * [SkillEnabledMixin](#spoon_ai.agents.skill_mixin.SkillEnabledMixin)
    * [activate\_skill](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.activate_skill)
    * [deactivate\_skill](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_skill)
    * [auto\_activate\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.auto_activate_skills)
    * [list\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_skills)
    * [list\_active\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_active_skills)
    * [get\_skill\_info](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_info)
    * [is\_skill\_active](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.is_skill_active)
    * [deactivate\_all\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_all_skills)
    * [get\_skill\_stats](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_stats)
* [spoon\_ai.agents.subagents](#spoon_ai.agents.subagents)
  * [Command](#spoon_ai.agents.subagents.Command)
    * [update](#spoon_ai.agents.subagents.Command.update)
    * [goto](#spoon_ai.agents.subagents.Command.goto)
    * [resume](#spoon_ai.agents.subagents.Command.resume)
    * [is\_resume](#spoon_ai.agents.subagents.Command.is_resume)
    * [get\_decisions](#spoon_ai.agents.subagents.Command.get_decisions)
  * [SubAgentSpec](#spoon_ai.agents.subagents.SubAgentSpec)
    * [description](#spoon_ai.agents.subagents.SubAgentSpec.description)
  * [CompiledSubAgent](#spoon_ai.agents.subagents.CompiledSubAgent)
    * [runnable](#spoon_ai.agents.subagents.CompiledSubAgent.runnable)
  * [SubAgentManager](#spoon_ai.agents.subagents.SubAgentManager)
    * [\_\_init\_\_](#spoon_ai.agents.subagents.SubAgentManager.__init__)
    * [get\_subagent](#spoon_ai.agents.subagents.SubAgentManager.get_subagent)
    * [delegate\_task](#spoon_ai.agents.subagents.SubAgentManager.delegate_task)
    * [create\_task\_tool](#spoon_ai.agents.subagents.SubAgentManager.create_task_tool)
  * [SubAgentMiddleware](#spoon_ai.agents.subagents.SubAgentMiddleware)
    * [\_\_init\_\_](#spoon_ai.agents.subagents.SubAgentMiddleware.__init__)
    * [before\_agent](#spoon_ai.agents.subagents.SubAgentMiddleware.before_agent)
  * [add\_subagent\_support](#spoon_ai.agents.subagents.add_subagent_support)
  * [create\_general\_purpose\_subagent](#spoon_ai.agents.subagents.create_general_purpose_subagent)
  * [create\_compiled\_subagent](#spoon_ai.agents.subagents.create_compiled_subagent)
* [spoon\_ai.agents.spoon\_react](#spoon_ai.agents.spoon_react)
  * [create\_configured\_chatbot](#spoon_ai.agents.spoon_react.create_configured_chatbot)
  * [SpoonReactAI](#spoon_ai.agents.spoon_react.SpoonReactAI)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react.SpoonReactAI.__init__)
    * [connect](#spoon_ai.agents.spoon_react.SpoonReactAI.connect)
    * [initialize](#spoon_ai.agents.spoon_react.SpoonReactAI.initialize)
    * [run](#spoon_ai.agents.spoon_react.SpoonReactAI.run)
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
* [spoon\_ai.agents.spoon\_react\_mcp](#spoon_ai.agents.spoon_react_mcp)
  * [SpoonReactMCP](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP)
    * [list\_mcp\_tools](#spoon_ai.agents.spoon_react_mcp.SpoonReactMCP.list_mcp_tools)
* [spoon\_ai.agents.mcp\_client\_mixin](#spoon_ai.agents.mcp_client_mixin)
  * [MCPClientMixin](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin)
    * [get\_session](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session)
    * [list\_mcp\_tools](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.list_mcp_tools)
    * [call\_mcp\_tool](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.call_mcp_tool)
    * [send\_mcp\_message](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.send_mcp_message)
    * [cleanup](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.cleanup)
    * [get\_session\_stats](#spoon_ai.agents.mcp_client_mixin.MCPClientMixin.get_session_stats)
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
* [spoon\_ai.agents.react](#spoon_ai.agents.react)

<a id="spoon_ai.agents"></a>

# Module `spoon_ai.agents`

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

<a id="spoon_ai.agents.monitor"></a>

# Module `spoon_ai.agents.monitor`

<a id="spoon_ai.agents.spoon_react_skill"></a>

# Module `spoon_ai.agents.spoon_react_skill`

Skill-enabled production agent.

Combines SpoonReactAI with full skill system support.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill"></a>

## `SpoonReactSkill` Objects

```python
class SpoonReactSkill(SkillEnabledMixin, SpoonReactAI)
```

Production agent with full skill system support.

Combines:
- SpoonReactAI: Tool calling, MCP integration, x402 payment
- SkillEnabledMixin: Skill activation, context injection, auto-trigger

Usage:
    agent = SpoonReactSkill(name="my_agent")

    # Manual skill activation
    await agent.activate_skill("trading-analysis", &#123;"asset": "BTC"&#125;)

    # Run with auto-trigger
    result = await agent.run("Analyze ETH trading signals")
    # -&gt; Automatically activates matching skills

    # List skills
    print(agent.list_skills())
    print(agent.list_active_skills())

    # Deactivate
    await agent.deactivate_skill("trading-analysis")

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize SpoonReactSkill agent.

Initializes both SpoonReactAI and skill system components.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Execute agent with skill auto-activation.

Flow:
1. Auto-detect and activate relevant skills (if enabled)
2. Inject skill context into system prompt
3. Execute parent SpoonReactAI.run()

**Arguments**:

- `request` - User request/message
  

**Returns**:

  Agent response

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.initialize"></a>

#### `initialize`

```python
async def initialize(__context=None)
```

Initialize async components.

Extends SpoonReactAI.initialize() to also initialize skill system.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.add_skill_path"></a>

#### `add_skill_path`

```python
def add_skill_path(path: str) -> None
```

Add a path to search for skills.

**Arguments**:

- `path` - Directory path to add

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.discover_skills"></a>

#### `discover_skills`

```python
def discover_skills() -> int
```

Re-discover skills from all configured paths.

**Returns**:

  Number of skills discovered

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
                      content: MessageContent,
                      tool_call_id: Optional[str] = None,
                      tool_calls: Optional[List[ToolCall]] = None,
                      tool_name: Optional[str] = None,
                      timeout: Optional[float] = None) -> None
```

Thread-safe message addition with timeout protection.

Supports both text-only and multimodal content:
- Text: content="Hello world"
- Multimodal: content=[TextContent(...), ImageUrlContent(...)]

**Arguments**:

- `role` - Message role (user, assistant, tool)
- `content` - Text string or list of content blocks for multimodal messages
- `tool_call_id` - ID for tool responses
- `tool_calls` - List of tool calls for assistant messages
- `tool_name` - Name of the tool for tool responses
- `timeout` - Operation timeout in seconds

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_image"></a>

#### `add_message_with_image`

```python
async def add_message_with_image(role: Literal["user", "assistant"],
                                 text: str,
                                 image_url: Optional[str] = None,
                                 image_data: Optional[str] = None,
                                 image_media_type: str = "image/png",
                                 detail: Literal["auto", "low",
                                                 "high"] = "auto",
                                 timeout: Optional[float] = None) -> None
```

Convenience method to add a message with an image.

Supports both URL-based and base64-encoded images.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the image
- `image_url` - URL of the image (including data URLs)
- `image_data` - Base64-encoded image data
- `image_media_type` - MIME type for base64 images (e.g., "image/png")
- `detail` - Image detail level for processing
- `timeout` - Operation timeout in seconds
  

**Example**:

  # With image URL
  await agent.add_message_with_image(
  "user",
  "What's in this image?",
  image_url="https://example.com/image.png"
  )
  
  # With base64 data
  await agent.add_message_with_image(
  "user",
  "Describe this diagram",
  image_data="&lt;base64_string&gt;",
  image_media_type="image/png"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_pdf"></a>

#### `add_message_with_pdf`

```python
async def add_message_with_pdf(role: Literal["user", "assistant"],
                               text: str,
                               pdf_data: str,
                               filename: Optional[str] = None,
                               timeout: Optional[float] = None) -> None
```

Convenience method to add a message with a PDF document.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the PDF
- `pdf_data` - Base64-encoded PDF data
- `filename` - Optional filename for the PDF
- `timeout` - Operation timeout in seconds
  

**Example**:

  # With base64 PDF data
  await agent.add_message_with_pdf(
  "user",
  "Summarize this document",
  pdf_data="&lt;base64_string&gt;",
  filename="report.pdf"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_document"></a>

#### `add_message_with_document`

```python
async def add_message_with_document(role: Literal["user", "assistant"],
                                    text: str,
                                    document_data: str,
                                    media_type: str = "application/pdf",
                                    filename: Optional[str] = None,
                                    timeout: Optional[float] = None) -> None
```

Convenience method to add a message with a document.

Supports various document types including PDF, text, etc.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the document
- `document_data` - Base64-encoded document data
- `media_type` - MIME type of the document (default: application/pdf)
- `filename` - Optional filename for the document
- `timeout` - Operation timeout in seconds
  

**Example**:

  # With PDF document
  await agent.add_message_with_document(
  "user",
  "Analyze this report",
  document_data="&lt;base64_string&gt;",
  media_type="application/pdf",
  filename="annual_report.pdf"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_pdf_file"></a>

#### `add_message_with_pdf_file`

```python
async def add_message_with_pdf_file(role: Literal["user", "assistant"],
                                    text: str,
                                    file_path: str,
                                    timeout: Optional[float] = None) -> None
```

Convenience method to add a message with a PDF file from disk.

Automatically handles base64 encoding.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the PDF
- `file_path` - Path to the PDF file on disk
- `timeout` - Operation timeout in seconds
  

**Example**:

  await agent.add_message_with_pdf_file(
  "user",
  "Summarize this document",
  file_path="./documents/report.pdf"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_image_file"></a>

#### `add_message_with_image_file`

```python
async def add_message_with_image_file(role: Literal["user", "assistant"],
                                      text: str,
                                      file_path: str,
                                      detail: str = "auto",
                                      timeout: Optional[float] = None) -> None
```

Convenience method to add a message with an image file from disk.

Automatically handles base64 encoding and MIME type detection.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the image
- `file_path` - Path to the image file on disk
- `detail` - Image detail level (auto, low, high)
- `timeout` - Operation timeout in seconds
  

**Example**:

  await agent.add_message_with_image_file(
  "user",
  "What's in this image?",
  file_path="./images/photo.jpg"
  )

<a id="spoon_ai.agents.base.BaseAgent.add_message_with_file"></a>

#### `add_message_with_file`

```python
async def add_message_with_file(role: Literal["user", "assistant"],
                                text: str,
                                file_path: str,
                                timeout: Optional[float] = None) -> None
```

Convenience method to add a message with any supported file from disk.

Automatically detects file type and handles base64 encoding.
Supports: PDF, images (png, jpg, gif, webp), text files.

**Arguments**:

- `role` - Message role (user or assistant)
- `text` - Text content accompanying the file
- `file_path` - Path to the file on disk
- `timeout` - Operation timeout in seconds
  

**Example**:

  # Works with any supported file type
  await agent.add_message_with_file("user", "Analyze this", "./report.pdf")
  await agent.add_message_with_file("user", "What's this?", "./photo.jpg")

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

Thread-safe run method with proper concurrency control, callback support, and Plan-Act-Reflect phases.

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

Thread-safe stuck detection.

Uses text_content property for comparison to handle both
text-only and multimodal messages.

<a id="spoon_ai.agents.base.BaseAgent.handle_stuck_state"></a>

#### `handle_stuck_state`

```python
async def handle_stuck_state()
```

Thread-safe stuck state handling

<a id="spoon_ai.agents.base.BaseAgent.estimate_token_count"></a>

#### `estimate_token_count`

```python
def estimate_token_count() -> int
```

Estimate the token count of current conversation context.

Uses a simple heuristic: ~4 characters per token (conservative estimate).
For more accurate counting, override this method with tiktoken or
model-specific tokenizers.

**Returns**:

  Estimated token count of all messages

<a id="spoon_ai.agents.base.BaseAgent.should_trigger_reflection"></a>

#### `should_trigger_reflection`

```python
def should_trigger_reflection() -> bool
```

Determine if reflection should be triggered based on token threshold.

LangChain-style token-based trigger:
Triggers when context tokens exceed reflect_token_threshold (default 85%)
of max_context_tokens.

**Returns**:

  True if reflection should be triggered

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

<a id="spoon_ai.agents.base.BaseAgent.get_agent_state"></a>

#### `get_agent_state`

```python
def get_agent_state(key: str, default: Any = None) -> Any
```

Get value from agent state (for middleware access).

**Arguments**:

- `key` - State key
- `default` - Default value if key not found
  

**Returns**:

  State value or default

<a id="spoon_ai.agents.base.BaseAgent.set_agent_state"></a>

#### `set_agent_state`

```python
def set_agent_state(key: str, value: Any) -> None
```

Set value in agent state (for middleware access).

**Arguments**:

- `key` - State key
- `value` - State value

<a id="spoon_ai.agents.base.BaseAgent.update_agent_state"></a>

#### `update_agent_state`

```python
def update_agent_state(updates: Dict[str, Any]) -> None
```

Bulk update agent state (for middleware access).

**Arguments**:

- `updates` - Dictionary of state updates

<a id="spoon_ai.agents.base.BaseAgent.get_diagnostics"></a>

#### `get_diagnostics`

```python
def get_diagnostics() -> Dict[str, Any]
```

Get diagnostic information about the agent's state

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
async def run(request: Optional[str] = None,
              timeout: Optional[float] = None) -> str
```

This ensures:
1. Thread-safe execution (no concurrent runs)
2. Proper timeout handling
3. Plan/Reflect/Finish phases are executed
4. Middleware hooks are called correctly

<a id="spoon_ai.agents.toolcall.ToolCallAgent.step"></a>

#### `step`

```python
async def step() -> str
```

Override the step method to handle finish_reason termination properly.

<a id="spoon_ai.agents.toolcall.ToolCallAgent.execute_tool"></a>

#### `execute_tool`

```python
async def execute_tool(tool_call: ToolCall) -> str
```

Execute tool with middleware wrapping.

CRITICAL: This method now routes ALL tool executions through the middleware
pipeline, enabling HITL approval, observability, and other middleware features.

<a id="spoon_ai.agents.skill_mixin"></a>

# Module `spoon_ai.agents.skill_mixin`

Skill-enabled agent mixin.

Follows MCPClientMixin pattern for composable agent integration.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin"></a>

## `SkillEnabledMixin` Objects

```python
class SkillEnabledMixin()
```

Mixin that adds skill capabilities to agents.

Integrates with ReAct cycle by:
1. Injecting active skill instructions into system prompt
2. Adding skill tools to available_tools
3. Auto-triggering skills based on user input

Usage:
    class MyAgent(SkillEnabledMixin, SpoonReactAI):
        pass

    agent = MyAgent()
    await agent.activate_skill("trading-analysis")
    result = await agent.run("Analyze BTC")

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.activate_skill"></a>

#### `activate_skill`

```python
async def activate_skill(name: str,
                         context: Optional[Dict[str, Any]] = None) -> Skill
```

Activate a skill and refresh agent state.

**Arguments**:

- `name` - Skill name to activate
- `context` - Optional context data
  

**Returns**:

  Activated Skill instance

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_skill"></a>

#### `deactivate_skill`

```python
async def deactivate_skill(name: str) -> bool
```

Deactivate a skill.

**Arguments**:

- `name` - Skill name to deactivate
  

**Returns**:

  True if deactivated, False if not active

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.auto_activate_skills"></a>

#### `auto_activate_skills`

```python
async def auto_activate_skills(user_input: str) -> List[Skill]
```

Automatically activate skills matching user input.

Uses both keyword/pattern matching and LLM intent analysis.

**Arguments**:

- `user_input` - User's message
  

**Returns**:

  List of activated skills

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[str]
```

List all available skill names.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_active_skills"></a>

#### `list_active_skills`

```python
def list_active_skills() -> List[str]
```

List currently active skill names.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_info"></a>

#### `get_skill_info`

```python
def get_skill_info(name: str) -> Optional[Dict[str, Any]]
```

Get detailed information about a skill.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.is_skill_active"></a>

#### `is_skill_active`

```python
def is_skill_active(name: str) -> bool
```

Check if a skill is currently active.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_all_skills"></a>

#### `deactivate_all_skills`

```python
async def deactivate_all_skills() -> int
```

Deactivate all active skills.

**Returns**:

  Number of skills deactivated

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_stats"></a>

#### `get_skill_stats`

```python
def get_skill_stats() -> Dict[str, Any]
```

Get skill system statistics.

<a id="spoon_ai.agents.subagents"></a>

# Module `spoon_ai.agents.subagents`

Subagent Orchestration System

Enables hierarchical agent delegation where a parent agent can create
and manage specialized child agents for complex tasks.

Compatible with LangChain DeepAgents SubAgentMiddleware interface.

Features:
- SubAgentSpec for defining subagents with tools and prompts
- CompiledSubAgent for using pre-built graphs as subagents
- Command return pattern for state updates
- State inheritance and isolation
- Hierarchical task delegation with recursion depth limits
- Automatic task tool generation
- General-purpose agent support

Usage:
    # Method 1: SubAgentSpec (simple cases)
    subagents = [
        SubAgentSpec(
            name="researcher",
            description="Specialized in research tasks",
            system_prompt="You are a research expert...",
            tools=[search_tool, summarize_tool]
        )
    ]

    # Method 2: CompiledSubAgent (complex cases with pre-built graph)
    custom_graph = StateGraph(...)
    custom_graph.add_node("analyze", analyze_node)
    compiled = custom_graph.compile()

    subagents = [
        CompiledSubAgent(
            name="complex_analyzer",
            description="Complex multi-step analysis",
            runnable=compiled
        )
    ]

    # Create parent agent with subagent support
    middleware = SubAgentMiddleware(subagents=subagents)
    agent = ToolCallAgent(middleware=[middleware], ...)

<a id="spoon_ai.agents.subagents.Command"></a>

## `Command` Objects

```python
@dataclass
class Command()
```

Command object for returning state updates and controlling execution flow.

Compatible with LangGraph Command interface. Used to:
1. Propagate state changes from subagent execution back to the parent agent
2. Resume from HITL interrupts with approval decisions

Example - State updates from subagent:
    ```python
    return Command(
        update={
            "messages": [tool_message],
            "some_state_key": new_value,
        }
    )
    ```

Example - Resume from HITL interrupt:
    ```python
    # After receiving interrupt with action_requests
    result = agent.invoke(
        Command(resume={
            "decisions": [
                {"type": "approve"},
                {"type": "edit", "args": {"path": "/new/path"}},
                {"type": "reject", "reason": "Too dangerous"},
            ]
        }),
        config=config
    )
    ```

<a id="spoon_ai.agents.subagents.Command.update"></a>

#### `update`

State updates to apply after subagent execution.

<a id="spoon_ai.agents.subagents.Command.goto"></a>

#### `goto`

Optional node to go to next (for graph-based agents).

<a id="spoon_ai.agents.subagents.Command.resume"></a>

#### `resume`

Resume data for HITL interrupts. Contains 'decisions' list.

<a id="spoon_ai.agents.subagents.Command.is_resume"></a>

#### `is_resume`

```python
@property
def is_resume() -> bool
```

Check if this is a resume command.

<a id="spoon_ai.agents.subagents.Command.get_decisions"></a>

#### `get_decisions`

```python
def get_decisions() -> List[Dict[str, Any]]
```

Get decisions from resume data.

**Returns**:

  List of decision dicts with 'type', optional 'args', optional 'reason'

<a id="spoon_ai.agents.subagents.SubAgentSpec"></a>

## `SubAgentSpec` Objects

```python
@dataclass
class SubAgentSpec()
```

Specification for a subagent.

This defines how a subagent should be configured and what
capabilities it has. When using SubAgentSpec, the middleware
will automatically create a ToolCallAgent instance.

Compatible with LangChain DeepAgents SubAgent interface.

<a id="spoon_ai.agents.subagents.SubAgentSpec.description"></a>

#### `description`

For parent agent to decide when to delegate

<a id="spoon_ai.agents.subagents.CompiledSubAgent"></a>

## `CompiledSubAgent` Objects

```python
@dataclass
class CompiledSubAgent()
```

A pre-compiled agent/graph specification.

Use this when you have a complex, pre-built graph (StateGraph/CompiledGraph)
that you want to use as a subagent. This is useful for:
- Complex multi-step workflows
- Custom graph topologies
- Reusing existing graph implementations

Compatible with LangChain DeepAgents CompiledSubAgent interface.

**Example**:

    ```python
    from spoon_ai.graph import StateGraph

    # Build custom graph
    graph = StateGraph(MyState)
    graph.add_node("analyze", analyze_node)
    graph.add_node("synthesize", synthesize_node)
    graph.add_edge("analyze", "synthesize")
    compiled = graph.compile()

    # Use as subagent
    subagent = CompiledSubAgent(
        name="analyzer",
        description="Complex multi-step analysis",
        runnable=compiled
    )
    ```

<a id="spoon_ai.agents.subagents.CompiledSubAgent.runnable"></a>

#### `runnable`

CompiledGraph or any Runnable-like object with invoke/ainvoke

<a id="spoon_ai.agents.subagents.SubAgentManager"></a>

## `SubAgentManager` Objects

```python
class SubAgentManager()
```

Manages subagent creation and task delegation with recursion safety.

Supports both SubAgentSpec (auto-compiled) and CompiledSubAgent (pre-built).
Returns Command objects for state updates.
Compatible with LangChain DeepAgents subagent management.

<a id="spoon_ai.agents.subagents.SubAgentManager.__init__"></a>

#### `__init__`

```python
def __init__(
        parent_agent: Any,
        subagent_specs: List[SubAgentType],
        default_middleware: Optional[List[AgentMiddleware]] = None,
        default_tools: Optional[List[BaseTool]] = None,
        default_interrupt_on: Optional[Dict[str,
                                            Union[bool,
                                                  InterruptOnConfig]]] = None,
        max_depth: int = 3,
        general_purpose_agent: bool = True)
```

Initialize subagent manager.

**Arguments**:

- `parent_agent` - The parent agent instance
- `subagent_specs` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `default_middleware` - Default middleware for all subagents
- `default_tools` - Default tools for general-purpose agent
- `default_interrupt_on` - Default HITL configuration for all subagents.
  This is also the fallback for any subagents that don't specify
  their own interrupt_on configuration.
- `max_depth` - Maximum recursion depth for subagent delegation (default: 3)
- `general_purpose_agent` - Whether to include a general-purpose subagent (default: True)

<a id="spoon_ai.agents.subagents.SubAgentManager.get_subagent"></a>

#### `get_subagent`

```python
def get_subagent(name: str) -> Optional[Any]
```

Get or create a subagent instance.

<a id="spoon_ai.agents.subagents.SubAgentManager.delegate_task"></a>

#### `delegate_task`

```python
async def delegate_task(
        subagent_name: str,
        task_description: str,
        inherit_state: bool = True,
        tool_call_id: Optional[str] = None) -> Union[str, Command]
```

Delegate a task to a subagent with recursion depth checking.

**Arguments**:

- `subagent_name` - Name of the subagent
- `task_description` - Task for the subagent
- `inherit_state` - Whether to inherit parent state
- `tool_call_id` - Tool call ID for Command return pattern
  

**Returns**:

  Subagent's final response as string, or Command with state updates

<a id="spoon_ai.agents.subagents.SubAgentManager.create_task_tool"></a>

#### `create_task_tool`

```python
def create_task_tool(task_description: Optional[str] = None) -> BaseTool
```

Create the 'task' tool for delegating to subagents.

**Arguments**:

- `task_description` - Custom description for the task tool.
  Supports &#123;available_agents&#125; placeholder.
  

**Returns**:

  Task delegation tool

<a id="spoon_ai.agents.subagents.SubAgentMiddleware"></a>

## `SubAgentMiddleware` Objects

```python
class SubAgentMiddleware(AgentMiddleware)
```

Middleware that adds subagent orchestration capabilities.

This middleware:
1. Injects the 'task' tool for delegation
2. Manages subagent lifecycle
3. Handles state inheritance
4. Enforces recursion depth limits
5. Returns Command objects for state updates
6. Propagates HITL configuration to subagents

Supports both SubAgentSpec (auto-compiled) and CompiledSubAgent (pre-built graphs).

Compatible with LangChain DeepAgents SubAgentMiddleware interface.

Usage:
    ```python
    # Method 1: SubAgentSpec (simple cases)
    middleware = SubAgentMiddleware(subagents=[
        SubAgentSpec(
            name="researcher",
            description="Research and gather information",
            system_prompt="You are a research expert...",
            tools=[search_tool]
        )
    ])

    # Method 2: CompiledSubAgent (complex cases)
    custom_graph = StateGraph(...)
    compiled = custom_graph.compile()

    middleware = SubAgentMiddleware(subagents=[
        CompiledSubAgent(
            name="analyzer",
            description="Complex analysis workflow",
            runnable=compiled
        )
    ])

    # Method 3: With HITL configuration inherited by subagents
    middleware = SubAgentMiddleware(
        subagents=[...],
        default_interrupt_on={
            "delete_file": True,
            "send_email": {"allowed_decisions": ["approve", "reject"]},
        },
        general_purpose_agent=True,
    )

    # Method 4: Subagent with custom interrupt_on (overrides default)
    middleware = SubAgentMiddleware(
        subagents=[
            SubAgentSpec(
                name="careful_agent",
                description="Agent that requires extra approval",
                interrupt_on={"all_tools": True},  # Overrides default
                ...
            )
        ],
        default_interrupt_on={"delete_file": True},
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.agents.subagents.SubAgentMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(
        subagents: Optional[List[SubAgentType]] = None,
        default_middleware: Optional[List[AgentMiddleware]] = None,
        default_tools: Optional[List[BaseTool]] = None,
        default_interrupt_on: Optional[Dict[str,
                                            Union[bool,
                                                  InterruptOnConfig]]] = None,
        max_depth: int = 3,
        general_purpose_agent: bool = True,
        task_description: Optional[str] = None)
```

Initialize subagent middleware.

**Arguments**:

- `subagents` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `default_middleware` - Default middleware for all subagents
- `default_tools` - Default tools for general-purpose agent
- `default_interrupt_on` - Default HITL configuration for all subagents.
  This is used for the general-purpose agent and as a fallback
  for any SubAgentSpec that doesn't specify its own interrupt_on.
- `max_depth` - Maximum recursion depth for subagent delegation
- `general_purpose_agent` - Whether to include a general-purpose subagent (default: True)
- `task_description` - Custom description for the task tool.
  If None, uses default template.
  Supports &#123;available_agents&#125; placeholder for dynamic agent list.

<a id="spoon_ai.agents.subagents.SubAgentMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Initialize subagent manager with parent agent reference.

<a id="spoon_ai.agents.subagents.add_subagent_support"></a>

#### `add_subagent_support`

```python
def add_subagent_support(
    agent: Any,
    subagents: List[SubAgentType],
    max_depth: int = 3,
    general_purpose_agent: bool = True,
    task_description: Optional[str] = None,
    default_interrupt_on: Optional[Dict[str, Union[bool,
                                                   InterruptOnConfig]]] = None
) -> Any
```

Add subagent support to an existing agent.

**Arguments**:

- `agent` - The agent instance
- `subagents` - List of subagent specifications (SubAgentSpec or CompiledSubAgent)
- `max_depth` - Maximum recursion depth for subagent delegation
- `general_purpose_agent` - Whether to include a general-purpose subagent
- `task_description` - Custom description for the task tool
- `default_interrupt_on` - Default HITL configuration for all subagents
  

**Returns**:

  The agent with subagent support

<a id="spoon_ai.agents.subagents.create_general_purpose_subagent"></a>

#### `create_general_purpose_subagent`

```python
def create_general_purpose_subagent(
        name: str = "general-purpose",
        description: str = DEFAULT_GENERAL_PURPOSE_DESCRIPTION,
        tools: Optional[List[BaseTool]] = None) -> SubAgentSpec
```

Create a general-purpose subagent specification.

<a id="spoon_ai.agents.subagents.create_compiled_subagent"></a>

#### `create_compiled_subagent`

```python
def create_compiled_subagent(name: str, description: str,
                             graph: Any) -> CompiledSubAgent
```

Create a CompiledSubAgent from a graph.

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
class SpoonReactAI(MCPClientMixin, ToolCallAgent)
```

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize SpoonReactAI with both ToolCallAgent and MCPClientMixin initialization

<a id="spoon_ai.agents.spoon_react.SpoonReactAI.connect"></a>

#### `connect`

```python
async def connect()
```

Establish connection to MCP server.

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

<a id="spoon_ai.agents.react"></a>

# Module `spoon_ai.agents.react`

