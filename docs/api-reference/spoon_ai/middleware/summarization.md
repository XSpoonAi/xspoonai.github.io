---
id: spoon_ai.middleware.summarization
slug: /api-reference/spoon_ai/middleware/summarization
title: spoon_ai.middleware.summarization
---

# Table of Contents

* [spoon\_ai.middleware.summarization](#spoon_ai.middleware.summarization)
  * [ContextFraction](#spoon_ai.middleware.summarization.ContextFraction)
  * [ContextTokens](#spoon_ai.middleware.summarization.ContextTokens)
  * [ContextMessages](#spoon_ai.middleware.summarization.ContextMessages)
  * [ContextSize](#spoon_ai.middleware.summarization.ContextSize)
  * [count\_tokens\_approximately](#spoon_ai.middleware.summarization.count_tokens_approximately)
  * [RemoveMessage](#spoon_ai.middleware.summarization.RemoveMessage)
  * [SummarizationMiddleware](#spoon_ai.middleware.summarization.SummarizationMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.summarization.SummarizationMiddleware.__init__)
    * [awrap\_model\_call](#spoon_ai.middleware.summarization.SummarizationMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.summarization.SummarizationMiddleware.get_stats)
  * [create\_summarization\_middleware](#spoon_ai.middleware.summarization.create_summarization_middleware)

<a id="spoon_ai.middleware.summarization"></a>

# Module `spoon_ai.middleware.summarization`

Summarization Middleware - Context Compression for Long Conversations.

Automatically summarizes conversation history when token limits are approached,
preserving recent messages and maintaining context continuity by ensuring
AI/Tool message pairs remain together.

Compatible with LangChain DeepAgents SummarizationMiddleware interface.

Usage:
    from spoon_ai.middleware.summarization import SummarizationMiddleware

    agent = ToolCallAgent(
        middleware=[SummarizationMiddleware(
            model=llm,
            trigger=("fraction", 0.85),  # Trigger at 85% of max tokens
            keep=("messages", 20),       # Keep last 20 messages
        )],
        ...
    )

<a id="spoon_ai.middleware.summarization.ContextFraction"></a>

#### `ContextFraction`

Fraction of model's maximum input tokens.

**Example**:

  To specify 50% of the model's max input tokens:
    ```python
    ("fraction", 0.5)
    ```

<a id="spoon_ai.middleware.summarization.ContextTokens"></a>

#### `ContextTokens`

Absolute number of tokens.

**Example**:

  To specify 3000 tokens:
    ```python
    ("tokens", 3000)
    ```

<a id="spoon_ai.middleware.summarization.ContextMessages"></a>

#### `ContextMessages`

Absolute number of messages.

**Example**:

  To specify 50 messages:
    ```python
    ("messages", 50)
    ```

<a id="spoon_ai.middleware.summarization.ContextSize"></a>

#### `ContextSize`

Union type for context size specifications.

Can be either:
- ContextFraction: A fraction of the model's maximum input tokens.
- ContextTokens: An absolute number of tokens.
- ContextMessages: An absolute number of messages.

Depending on use with `trigger` or `keep` parameters, this type indicates either
when to trigger summarization or how much context to retain.

**Example**:

    ```python
    # ContextFraction
    context_size: ContextSize = ("fraction", 0.5)

    # ContextTokens
    context_size: ContextSize = ("tokens", 3000)

    # ContextMessages
    context_size: ContextSize = ("messages", 50)
    ```

<a id="spoon_ai.middleware.summarization.count_tokens_approximately"></a>

#### `count_tokens_approximately`

```python
def count_tokens_approximately(messages: Iterable[Message],
                               chars_per_token: float = 4.0) -> int
```

Approximate token counter aligned with LangChain semantics.

**Arguments**:

- `messages` - Iterable of messages to count tokens for.
- `chars_per_token` - Characters per token ratio (default: 4.0).
  

**Returns**:

  Estimated token count.

<a id="spoon_ai.middleware.summarization.RemoveMessage"></a>

## `RemoveMessage` Objects

```python
class RemoveMessage()
```

Marker class indicating a message should be removed.

Compatible with LangChain's RemoveMessage pattern.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware"></a>

## `SummarizationMiddleware` Objects

```python
class SummarizationMiddleware(AgentMiddleware)
```

Summarizes conversation history when token limits are approached.

This middleware monitors message token counts and automatically summarizes older
messages when a threshold is reached, preserving recent messages and maintaining
context continuity by ensuring AI/Tool message pairs remain together.

Compatible with LangChain DeepAgents SummarizationMiddleware interface.

**Example**:

    ```python
    from spoon_ai.middleware.summarization import SummarizationMiddleware

    # Basic usage with fraction trigger
    middleware = SummarizationMiddleware(
        model=llm,
        trigger=("fraction", 0.85),
        keep=("messages", 20),
    )

    # With multiple trigger conditions
    middleware = SummarizationMiddleware(
        model=llm,
        trigger=[("fraction", 0.8), ("messages", 100)],
        keep=("tokens", 3000),
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(
        model: Optional[ChatBot] = None,
        *,
        trigger: Optional[Union[ContextSize, List[ContextSize]]] = None,
        keep: ContextSize = ("messages", _DEFAULT_MESSAGES_TO_KEEP),
        token_counter: Optional[TokenCounter] = None,
        summary_prompt: str = DEFAULT_SUMMARY_PROMPT,
        trim_tokens_to_summarize: Optional[int] = _DEFAULT_TRIM_TOKEN_LIMIT,
        max_context_tokens: Optional[int] = None,
        **deprecated_kwargs: Any) -> None
```

Initialize summarization middleware.

**Arguments**:

- `model` - The language model to use for generating summaries.
  If None, uses agent's LLM.
- `trigger` - One or more thresholds that trigger summarization.
  Provide a single ContextSize tuple or a list of tuples.
  Summarization runs when any threshold is met.
  

**Examples**:

- `-` _"messages", 50_ - Trigger at 50 messages
- `-` _"tokens", 3000_ - Trigger at 3000 tokens
- `-` _"fraction", 0.8_ - Trigger at 80% of max input tokens
  - [("fraction", 0.8), ("messages", 100)]: Multiple conditions
  
- `keep` - Context retention policy applied after summarization.
  Provide a ContextSize tuple to specify how much history to preserve.
  Defaults to keeping the most recent 20 messages.
  

**Examples**:

- `-` _"messages", 20_ - Keep last 20 messages
- `-` _"tokens", 3000_ - Keep last 3000 tokens worth
- `-` _"fraction", 0.3_ - Keep last 30% of max input tokens
  
- `token_counter` - Function to count tokens in messages.
  Defaults to model-aware approximate counter.
- `summary_prompt` - Prompt template for generating summaries.
- `trim_tokens_to_summarize` - Maximum tokens to keep when preparing
  messages for summarization. Pass None to skip trimming.
- `max_context_tokens` - Maximum context tokens for fraction calculations.
  If None, attempts to get from model profile.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Process messages before model call, potentially triggering summarization.

<a id="spoon_ai.middleware.summarization.SummarizationMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get summarization statistics.

<a id="spoon_ai.middleware.summarization.create_summarization_middleware"></a>

#### `create_summarization_middleware`

```python
def create_summarization_middleware(
        model: Optional[ChatBot] = None,
        trigger: Optional[Union[ContextSize, List[ContextSize]]] = None,
        keep: ContextSize = ("messages", _DEFAULT_MESSAGES_TO_KEEP),
        max_context_tokens: Optional[int] = None,
        **kwargs: Any) -> SummarizationMiddleware
```

Create a summarization middleware.

**Arguments**:

- `model` - LLM for summarization
- `trigger` - When to trigger summarization
- `keep` - What to keep after summarization
- `max_context_tokens` - Maximum context tokens for fraction calculations
- `**kwargs` - Additional arguments passed to SummarizationMiddleware
  

**Returns**:

  Configured SummarizationMiddleware

