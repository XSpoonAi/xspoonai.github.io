---
id: spoon_ai.callbacks.streaming_stdout
slug: /api-reference/spoon_ai/callbacks/streaming_stdout
title: spoon_ai.callbacks.streaming_stdout
---

# Table of Contents

* [spoon\_ai.callbacks.streaming\_stdout](#spoon_ai.callbacks.streaming_stdout)
  * [StreamingStdOutCallbackHandler](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler)
    * [on\_llm\_new\_token](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_new_token)
    * [on\_llm\_end](#spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_end)

<a id="spoon_ai.callbacks.streaming_stdout"></a>

# Module `spoon_ai.callbacks.streaming_stdout`

<a id="spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler"></a>

## `StreamingStdOutCallbackHandler` Objects

```python
class StreamingStdOutCallbackHandler(BaseCallbackHandler)
```

Callback handler that streams tokens to standard output.

<a id="spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_new_token"></a>

#### `on_llm_new_token`

```python
def on_llm_new_token(token: str, **kwargs: Any) -> None
```

Print token to stdout immediately.

**Arguments**:

- `token` - The new token to print
- `**kwargs` - Additional context (ignored)

<a id="spoon_ai.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.on_llm_end"></a>

#### `on_llm_end`

```python
def on_llm_end(response: Any, **kwargs: Any) -> None
```

Print newline after LLM completes.

**Arguments**:

- `response` - The complete LLM response (ignored)
- `**kwargs` - Additional context (ignored)

