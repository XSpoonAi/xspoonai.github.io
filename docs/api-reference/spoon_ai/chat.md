---
id: spoon_ai.chat
slug: /api-reference/spoon_ai/chat
title: spoon_ai.chat
---

# Table of Contents

* [spoon\_ai.chat](#spoon_ai.chat)
  * [ShortTermMemoryConfig](#spoon_ai.chat.ShortTermMemoryConfig)
    * [enabled](#spoon_ai.chat.ShortTermMemoryConfig.enabled)
    * [max\_tokens](#spoon_ai.chat.ShortTermMemoryConfig.max_tokens)
    * [strategy](#spoon_ai.chat.ShortTermMemoryConfig.strategy)
    * [messages\_to\_keep](#spoon_ai.chat.ShortTermMemoryConfig.messages_to_keep)
    * [trim\_strategy](#spoon_ai.chat.ShortTermMemoryConfig.trim_strategy)
    * [keep\_system\_messages](#spoon_ai.chat.ShortTermMemoryConfig.keep_system_messages)
    * [auto\_checkpoint](#spoon_ai.chat.ShortTermMemoryConfig.auto_checkpoint)
    * [checkpoint\_thread\_id](#spoon_ai.chat.ShortTermMemoryConfig.checkpoint_thread_id)
    * [summary\_model](#spoon_ai.chat.ShortTermMemoryConfig.summary_model)
  * [ChatBot](#spoon_ai.chat.ChatBot)
    * [\_\_init\_\_](#spoon_ai.chat.ChatBot.__init__)
    * [update\_mem0\_config](#spoon_ai.chat.ChatBot.update_mem0_config)
    * [ask](#spoon_ai.chat.ChatBot.ask)
    * [ask\_tool](#spoon_ai.chat.ChatBot.ask_tool)
    * [trim\_messages](#spoon_ai.chat.ChatBot.trim_messages)
    * [remove\_message](#spoon_ai.chat.ChatBot.remove_message)
    * [remove\_all\_messages](#spoon_ai.chat.ChatBot.remove_all_messages)
    * [summarize\_messages](#spoon_ai.chat.ChatBot.summarize_messages)
    * [latest\_summary](#spoon_ai.chat.ChatBot.latest_summary)
    * [latest\_removals](#spoon_ai.chat.ChatBot.latest_removals)
    * [save\_checkpoint](#spoon_ai.chat.ChatBot.save_checkpoint)
    * [restore\_checkpoint](#spoon_ai.chat.ChatBot.restore_checkpoint)
    * [list\_checkpoints](#spoon_ai.chat.ChatBot.list_checkpoints)
    * [clear\_checkpoints](#spoon_ai.chat.ChatBot.clear_checkpoints)
    * [astream](#spoon_ai.chat.ChatBot.astream)
    * [astream\_events](#spoon_ai.chat.ChatBot.astream_events)
    * [astream\_log](#spoon_ai.chat.ChatBot.astream_log)

<a id="spoon_ai.chat"></a>

# Module `spoon_ai.chat`

<a id="spoon_ai.chat.ShortTermMemoryConfig"></a>

## `ShortTermMemoryConfig` Objects

```python
class ShortTermMemoryConfig(BaseModel)
```

Configuration for short-term memory management.

<a id="spoon_ai.chat.ShortTermMemoryConfig.enabled"></a>

#### `enabled`

Enable automatic short-term memory management.

<a id="spoon_ai.chat.ShortTermMemoryConfig.max_tokens"></a>

#### `max_tokens`

Maximum token count before triggering trimming/summarization.

<a id="spoon_ai.chat.ShortTermMemoryConfig.strategy"></a>

#### `strategy`

Strategy to use when exceeding max_tokens: 'summarize' or 'trim'.

<a id="spoon_ai.chat.ShortTermMemoryConfig.messages_to_keep"></a>

#### `messages_to_keep`

Number of recent messages to keep when summarizing.

<a id="spoon_ai.chat.ShortTermMemoryConfig.trim_strategy"></a>

#### `trim_strategy`

Trimming strategy when using 'trim' mode.

<a id="spoon_ai.chat.ShortTermMemoryConfig.keep_system_messages"></a>

#### `keep_system_messages`

Always keep system messages during trimming.

<a id="spoon_ai.chat.ShortTermMemoryConfig.auto_checkpoint"></a>

#### `auto_checkpoint`

Automatically save checkpoints before trimming/summarization.

<a id="spoon_ai.chat.ShortTermMemoryConfig.checkpoint_thread_id"></a>

#### `checkpoint_thread_id`

Thread ID for checkpoint management.

<a id="spoon_ai.chat.ShortTermMemoryConfig.summary_model"></a>

#### `summary_model`

Model to use for summarization (defaults to ChatBot's model).

<a id="spoon_ai.chat.ChatBot"></a>

## `ChatBot` Objects

```python
class ChatBot()
```

<a id="spoon_ai.chat.ChatBot.__init__"></a>

#### `__init__`

```python
def __init__(use_llm_manager: bool = True,
             model_name: str = None,
             llm_provider: str = None,
             api_key: str = None,
             base_url: str = None,
             enable_short_term_memory: bool = True,
             short_term_memory_config: Optional[Union[Dict[
                 str, Any], ShortTermMemoryConfig]] = None,
             token_counter: Optional[MessageTokenCounter] = None,
             enable_long_term_memory: bool = False,
             mem0_config: Optional[Dict[str, Any]] = None,
             callbacks: Optional[List[BaseCallbackHandler]] = None,
             **kwargs)
```

Initialize ChatBot with hierarchical configuration priority system.

Configuration Priority System:
1. Full manual override (highest priority) - all params provided
2. Partial override with config fallback - llm_provider provided, credentials pulled from environment (or config files if explicitly enabled)
3. Full environment-based loading - only use_llm_manager=True, reads from environment variables

**Arguments**:

- `use_llm_manager` - Enable LLM manager architecture (default: True)
- `model_name` - Model name override
- `llm_provider` - Provider name override
- `api_key` - API key override
- `base_url` - Base URL override
- `enable_short_term_memory` - Enable short-term memory management (default: True)
- `short_term_memory_config` - Configuration dict or ShortTermMemoryConfig instance
- `token_counter` - Optional custom token counter instance
- `enable_long_term_memory` - Enable Mem0-backed long-term memory retrieval/storage
- `mem0_config` - Configuration dict for Mem0 (api_key, user_id/agent_id, collection, etc.)
- `callbacks` - Optional list of callback handlers for monitoring
- `**kwargs` - Additional parameters

<a id="spoon_ai.chat.ChatBot.update_mem0_config"></a>

#### `update_mem0_config`

```python
def update_mem0_config(config: Optional[Dict[str, Any]] = None,
                       enable: Optional[bool] = None) -> None
```

Update Mem0 configuration and re-initialize the client if needed.

<a id="spoon_ai.chat.ChatBot.ask"></a>

#### `ask`

```python
async def ask(messages: List[Union[dict, Message]],
              system_msg: Optional[str] = None,
              output_queue: Optional[asyncio.Queue] = None) -> str
```

Ask method using the LLM manager architecture.

Automatically applies short-term memory strategy if enabled.

<a id="spoon_ai.chat.ChatBot.ask_tool"></a>

#### `ask_tool`

```python
async def ask_tool(messages: List[Union[dict, Message]],
                   system_msg: Optional[str] = None,
                   tools: Optional[List[dict]] = None,
                   tool_choice: Optional[str] = None,
                   output_queue: Optional[asyncio.Queue] = None,
                   **kwargs) -> LLMResponse
```

Ask tool method using the LLM manager architecture.

Automatically applies short-term memory strategy if enabled.

<a id="spoon_ai.chat.ChatBot.trim_messages"></a>

#### `trim_messages`

```python
async def trim_messages(messages: List[Message],
                        max_tokens: int,
                        strategy: TrimStrategy = TrimStrategy.FROM_END,
                        keep_system: bool = True,
                        model: Optional[str] = None) -> List[Message]
```

Trim messages to stay within the token budget.

**Arguments**:

- `messages` - List of messages to trim
- `max_tokens` - Maximum token count to retain
- `strategy` - Trimming strategy (from_start or from_end)
- `keep_system` - Whether to always keep the leading system message
- `model` - Model name for token counting
  

**Returns**:

- `List[Message]` - Trimmed messages list

<a id="spoon_ai.chat.ChatBot.remove_message"></a>

#### `remove_message`

```python
def remove_message(message_id: str, **kwargs: Any) -> "RemoveMessage"
```

Construct a removal instruction for the message with the given ID.

<a id="spoon_ai.chat.ChatBot.remove_all_messages"></a>

#### `remove_all_messages`

```python
def remove_all_messages() -> "RemoveMessage"
```

Construct a removal instruction that clears the entire history.

<a id="spoon_ai.chat.ChatBot.summarize_messages"></a>

#### `summarize_messages`

```python
async def summarize_messages(
    messages: List[Message],
    max_tokens_before_summary: int,
    messages_to_keep: int = 5,
    summary_model: Optional[str] = None,
    existing_summary: str = ""
) -> Tuple[List[Message], List[RemoveMessage], Optional[str]]
```

Summarize earlier messages and emit removal directives.

Returns a tuple ``(messages_for_llm, removals, summary_text)`` where
``messages_for_llm`` are the messages that should be sent to the language
model for the next turn, ``removals`` contains ``RemoveMessage``
directives that should be applied to the stored history, and
``summary_text`` is the newly generated summary (if any).

**Arguments**:

- `messages` - List of messages to process
- `max_tokens_before_summary` - Token threshold for triggering summary
- `messages_to_keep` - Number of recent messages to keep uncompressed
- `summary_model` - Model to use for summarization
- `existing_summary` - Previously stored summary text

<a id="spoon_ai.chat.ChatBot.latest_summary"></a>

#### `latest_summary`

```python
@property
def latest_summary() -> Optional[str]
```

Return the most recent summary generated by short-term memory.

<a id="spoon_ai.chat.ChatBot.latest_removals"></a>

#### `latest_removals`

```python
@property
def latest_removals() -> List[RemoveMessage]
```

Return the most recent removal directives emitted by summarization.

<a id="spoon_ai.chat.ChatBot.save_checkpoint"></a>

#### `save_checkpoint`

```python
def save_checkpoint(thread_id: str,
                    messages: List[Message],
                    metadata: Optional[dict] = None) -> str
```

Save current message state to checkpoint.

**Arguments**:

- `thread_id` - Thread identifier
- `messages` - Messages to save
- `metadata` - Optional metadata to store
  

**Returns**:

- `str` - Checkpoint ID

<a id="spoon_ai.chat.ChatBot.restore_checkpoint"></a>

#### `restore_checkpoint`

```python
def restore_checkpoint(
        thread_id: str,
        checkpoint_id: Optional[str] = None) -> Optional[List[Message]]
```

Restore messages from checkpoint.

**Arguments**:

- `thread_id` - Thread identifier
- `checkpoint_id` - Optional specific checkpoint ID
  

**Returns**:

- `Optional[List[Message]]` - Restored messages, or None if checkpoint not found

<a id="spoon_ai.chat.ChatBot.list_checkpoints"></a>

#### `list_checkpoints`

```python
def list_checkpoints(thread_id: str) -> List[dict]
```

List all checkpoints for a thread.

**Arguments**:

- `thread_id` - Thread identifier
  

**Returns**:

- `List[dict]` - List of checkpoint metadata

<a id="spoon_ai.chat.ChatBot.clear_checkpoints"></a>

#### `clear_checkpoints`

```python
def clear_checkpoints(thread_id: str) -> None
```

Clear all checkpoints for a thread.

**Arguments**:

- `thread_id` - Thread identifier

<a id="spoon_ai.chat.ChatBot.astream"></a>

#### `astream`

```python
async def astream(messages: List[Union[dict, Message]],
                  system_msg: Optional[str] = None,
                  callbacks: Optional[List[BaseCallbackHandler]] = None,
                  **kwargs: Any) -> AsyncIterator[LLMResponseChunk]
```

Stream LLM responses chunk by chunk.

<a id="spoon_ai.chat.ChatBot.astream_events"></a>

#### `astream_events`

```python
async def astream_events(messages: List[Union[dict, Message]],
                         system_msg: Optional[str] = None,
                         callbacks: Optional[List[BaseCallbackHandler]] = None,
                         **kwargs) -> AsyncIterator[dict]
```

Stream structured events during LLM execution.

This method yields detailed events tracking the execution flow,
useful for monitoring and debugging.

**Arguments**:

- `messages` - List of messages or dicts
- `system_msg` - Optional system message
- `callbacks` - Optional callback handlers
- `**kwargs` - Additional provider parameters
  

**Yields**:

  Event dictionaries with structure:
  &#123;
- `"event"` - event_type,
- `"run_id"` - str,
- `"timestamp"` - ISO datetime string,
- `"data"` - &#123;event-specific data&#125;
  &#125;

<a id="spoon_ai.chat.ChatBot.astream_log"></a>

#### `astream_log`

```python
async def astream_log(messages: List[Union[dict, Message]],
                      system_msg: Optional[str] = None,
                      callbacks: Optional[List[BaseCallbackHandler]] = None,
                      *,
                      diff: bool = True,
                      **kwargs: Any) -> AsyncIterator[RunLogPatch]
```

Stream run log patches describing ChatBot execution.

