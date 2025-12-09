---
id: spoon_ai.callbacks.base
slug: /api-reference/spoon_ai/callbacks/base
title: spoon_ai.callbacks.base
---

# Table of Contents

* [spoon\_ai.callbacks.base](#spoon_ai.callbacks.base)
  * [RetrieverManagerMixin](#spoon_ai.callbacks.base.RetrieverManagerMixin)
    * [on\_retriever\_start](#spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_start)
    * [on\_retriever\_end](#spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_end)
    * [on\_retriever\_error](#spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_error)
  * [LLMManagerMixin](#spoon_ai.callbacks.base.LLMManagerMixin)
    * [on\_llm\_start](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_start)
    * [on\_llm\_new\_token](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_new_token)
    * [on\_llm\_end](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_end)
    * [on\_llm\_error](#spoon_ai.callbacks.base.LLMManagerMixin.on_llm_error)
  * [ChainManagerMixin](#spoon_ai.callbacks.base.ChainManagerMixin)
    * [on\_chain\_start](#spoon_ai.callbacks.base.ChainManagerMixin.on_chain_start)
    * [on\_chain\_end](#spoon_ai.callbacks.base.ChainManagerMixin.on_chain_end)
    * [on\_chain\_error](#spoon_ai.callbacks.base.ChainManagerMixin.on_chain_error)
  * [ToolManagerMixin](#spoon_ai.callbacks.base.ToolManagerMixin)
    * [on\_tool\_start](#spoon_ai.callbacks.base.ToolManagerMixin.on_tool_start)
    * [on\_tool\_end](#spoon_ai.callbacks.base.ToolManagerMixin.on_tool_end)
    * [on\_tool\_error](#spoon_ai.callbacks.base.ToolManagerMixin.on_tool_error)
  * [PromptManagerMixin](#spoon_ai.callbacks.base.PromptManagerMixin)
    * [on\_prompt\_start](#spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_start)
    * [on\_prompt\_end](#spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_end)
    * [on\_prompt\_error](#spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_error)
  * [BaseCallbackHandler](#spoon_ai.callbacks.base.BaseCallbackHandler)
    * [raise\_error](#spoon_ai.callbacks.base.BaseCallbackHandler.raise_error)
    * [run\_inline](#spoon_ai.callbacks.base.BaseCallbackHandler.run_inline)
    * [ignore\_llm](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_llm)
    * [ignore\_chain](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_chain)
    * [ignore\_tool](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_tool)
    * [ignore\_retriever](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_retriever)
    * [ignore\_prompt](#spoon_ai.callbacks.base.BaseCallbackHandler.ignore_prompt)
  * [AsyncCallbackHandler](#spoon_ai.callbacks.base.AsyncCallbackHandler)

<a id="spoon_ai.callbacks.base"></a>

# Module `spoon_ai.callbacks.base`

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin"></a>

## `RetrieverManagerMixin` Objects

```python
class RetrieverManagerMixin()
```

Mixin providing retriever callback hooks.

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_start"></a>

#### `on_retriever_start`

```python
def on_retriever_start(run_id: UUID, query: Any, **kwargs: Any) -> Any
```

Run when a retriever begins execution.

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_end"></a>

#### `on_retriever_end`

```python
def on_retriever_end(run_id: UUID, documents: Any, **kwargs: Any) -> Any
```

Run when a retriever finishes successfully.

<a id="spoon_ai.callbacks.base.RetrieverManagerMixin.on_retriever_error"></a>

#### `on_retriever_error`

```python
def on_retriever_error(error: BaseException, *, run_id: UUID,
                       **kwargs: Any) -> Any
```

Run when a retriever raises an error.

<a id="spoon_ai.callbacks.base.LLMManagerMixin"></a>

## `LLMManagerMixin` Objects

```python
class LLMManagerMixin()
```

Mixin providing large language model callback hooks.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_start"></a>

#### `on_llm_start`

```python
def on_llm_start(run_id: UUID, messages: List[Message], **kwargs: Any) -> Any
```

Run when an LLM or chat model begins execution.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_new_token"></a>

#### `on_llm_new_token`

```python
def on_llm_new_token(token: str,
                     *,
                     chunk: Optional[LLMResponseChunk] = None,
                     run_id: Optional[UUID] = None,
                     **kwargs: Any) -> Any
```

Run for each streamed token emitted by an LLM.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_end"></a>

#### `on_llm_end`

```python
def on_llm_end(response: LLMResponse, *, run_id: UUID, **kwargs: Any) -> Any
```

Run when an LLM finishes successfully.

<a id="spoon_ai.callbacks.base.LLMManagerMixin.on_llm_error"></a>

#### `on_llm_error`

```python
def on_llm_error(error: BaseException, *, run_id: UUID, **kwargs: Any) -> Any
```

Run when an LLM raises an error.

<a id="spoon_ai.callbacks.base.ChainManagerMixin"></a>

## `ChainManagerMixin` Objects

```python
class ChainManagerMixin()
```

Mixin providing chain-level callback hooks.

<a id="spoon_ai.callbacks.base.ChainManagerMixin.on_chain_start"></a>

#### `on_chain_start`

```python
def on_chain_start(run_id: UUID, inputs: Any, **kwargs: Any) -> Any
```

Run when a chain (Runnable) starts executing.

<a id="spoon_ai.callbacks.base.ChainManagerMixin.on_chain_end"></a>

#### `on_chain_end`

```python
def on_chain_end(run_id: UUID, outputs: Any, **kwargs: Any) -> Any
```

Run when a chain finishes successfully.

<a id="spoon_ai.callbacks.base.ChainManagerMixin.on_chain_error"></a>

#### `on_chain_error`

```python
def on_chain_error(error: BaseException, *, run_id: UUID,
                   **kwargs: Any) -> Any
```

Run when a chain raises an error.

<a id="spoon_ai.callbacks.base.ToolManagerMixin"></a>

## `ToolManagerMixin` Objects

```python
class ToolManagerMixin()
```

Mixin providing tool callback hooks.

<a id="spoon_ai.callbacks.base.ToolManagerMixin.on_tool_start"></a>

#### `on_tool_start`

```python
def on_tool_start(tool_name: str, tool_input: Any, *, run_id: UUID,
                  **kwargs: Any) -> Any
```

Run when a tool invocation begins.

<a id="spoon_ai.callbacks.base.ToolManagerMixin.on_tool_end"></a>

#### `on_tool_end`

```python
def on_tool_end(tool_name: str, tool_output: Any, *, run_id: UUID,
                **kwargs: Any) -> Any
```

Run when a tool invocation succeeds.

<a id="spoon_ai.callbacks.base.ToolManagerMixin.on_tool_error"></a>

#### `on_tool_error`

```python
def on_tool_error(error: BaseException,
                  *,
                  run_id: UUID,
                  tool_name: Optional[str] = None,
                  **kwargs: Any) -> Any
```

Run when a tool invocation raises an error.

<a id="spoon_ai.callbacks.base.PromptManagerMixin"></a>

## `PromptManagerMixin` Objects

```python
class PromptManagerMixin()
```

Mixin providing prompt template callback hooks.

<a id="spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_start"></a>

#### `on_prompt_start`

```python
def on_prompt_start(run_id: UUID, inputs: Any, **kwargs: Any) -> Any
```

Run when a prompt template begins formatting.

<a id="spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_end"></a>

#### `on_prompt_end`

```python
def on_prompt_end(run_id: UUID, output: Any, **kwargs: Any) -> Any
```

Run when a prompt template finishes formatting.

<a id="spoon_ai.callbacks.base.PromptManagerMixin.on_prompt_error"></a>

#### `on_prompt_error`

```python
def on_prompt_error(error: BaseException, *, run_id: UUID,
                    **kwargs: Any) -> Any
```

Run when prompt formatting raises an error.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler"></a>

## `BaseCallbackHandler` Objects

```python
class BaseCallbackHandler(LLMManagerMixin, ChainManagerMixin, ToolManagerMixin,
                          RetrieverManagerMixin, PromptManagerMixin, ABC)
```

Base class for SpoonAI callback handlers.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.raise_error"></a>

#### `raise_error`

Whether to re-raise exceptions originating from callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.run_inline"></a>

#### `run_inline`

Whether the callback prefers to run on the caller's event loop.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_llm"></a>

#### `ignore_llm`

```python
@property
def ignore_llm() -> bool
```

Return True to skip LLM callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_chain"></a>

#### `ignore_chain`

```python
@property
def ignore_chain() -> bool
```

Return True to skip chain callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_tool"></a>

#### `ignore_tool`

```python
@property
def ignore_tool() -> bool
```

Return True to skip tool callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_retriever"></a>

#### `ignore_retriever`

```python
@property
def ignore_retriever() -> bool
```

Return True to skip retriever callbacks.

<a id="spoon_ai.callbacks.base.BaseCallbackHandler.ignore_prompt"></a>

#### `ignore_prompt`

```python
@property
def ignore_prompt() -> bool
```

Return True to skip prompt callbacks.

<a id="spoon_ai.callbacks.base.AsyncCallbackHandler"></a>

## `AsyncCallbackHandler` Objects

```python
class AsyncCallbackHandler(BaseCallbackHandler)
```

Async version of the callback handler base class.

