---
id: spoon_ai.agents.base
slug: /api-reference/spoon_ai/agents/base
title: spoon_ai.agents.base
---

# Table of Contents

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

