---
id: spoon_ai.llm.base
slug: /api-reference/spoon_ai/llm/base
title: spoon_ai.llm.base
---

# Table of Contents

* [spoon\_ai.llm.base](#spoon_ai.llm.base)
  * [LLMBase](#spoon_ai.llm.base.LLMBase)
    * [\_\_init\_\_](#spoon_ai.llm.base.LLMBase.__init__)
    * [chat](#spoon_ai.llm.base.LLMBase.chat)
    * [completion](#spoon_ai.llm.base.LLMBase.completion)
    * [chat\_with\_tools](#spoon_ai.llm.base.LLMBase.chat_with_tools)
    * [generate\_image](#spoon_ai.llm.base.LLMBase.generate_image)
    * [reset\_output\_handler](#spoon_ai.llm.base.LLMBase.reset_output_handler)

<a id="spoon_ai.llm.base"></a>

# Module `spoon_ai.llm.base`

<a id="spoon_ai.llm.base.LLMBase"></a>

## `LLMBase` Objects

```python
class LLMBase(ABC)
```

Base abstract class for LLM, defining interfaces that all LLM providers must implement

<a id="spoon_ai.llm.base.LLMBase.__init__"></a>

#### `__init__`

```python
def __init__(config_path: str = "config/config.toml",
             config_name: str = "llm")
```

Initialize LLM interface

**Arguments**:

- `config_path` - Configuration file path
- `config_name` - Configuration name

<a id="spoon_ai.llm.base.LLMBase.chat"></a>

#### `chat`

```python
@abstractmethod
async def chat(messages: List[Message],
               system_msgs: Optional[List[Message]] = None,
               **kwargs) -> LLMResponse
```

Send chat request to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.completion"></a>

#### `completion`

```python
@abstractmethod
async def completion(prompt: str, **kwargs) -> LLMResponse
```

Send text completion request to LLM and get response

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.chat_with_tools"></a>

#### `chat_with_tools`

```python
@abstractmethod
async def chat_with_tools(messages: List[Message],
                          system_msgs: Optional[List[Message]] = None,
                          tools: Optional[List[Dict]] = None,
                          tool_choice: Literal["none", "auto",
                                               "required"] = "auto",
                          **kwargs) -> LLMResponse
```

Send chat request that may contain tool calls to LLM and get response

**Arguments**:

- `messages` - List of messages
- `system_msgs` - List of system messages
- `tools` - List of tools
- `tool_choice` - Tool selection mode
- `**kwargs` - Other parameters
  

**Returns**:

- `LLMResponse` - LLM response

<a id="spoon_ai.llm.base.LLMBase.generate_image"></a>

#### `generate_image`

```python
async def generate_image(prompt: str, **kwargs) -> Union[str, List[str]]
```

Generate image (optional implementation)

**Arguments**:

- `prompt` - Prompt text
- `**kwargs` - Other parameters
  

**Returns**:

  Union[str, List[str]]: Image URL or list of URLs

<a id="spoon_ai.llm.base.LLMBase.reset_output_handler"></a>

#### `reset_output_handler`

```python
def reset_output_handler()
```

Reset output handler

