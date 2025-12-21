---
id: spoon_ai.schema
slug: /api-reference/spoon_ai/schema
title: spoon_ai.schema
---

# Table of Contents

* [spoon\_ai.schema](#spoon_ai.schema)
  * [Function](#spoon_ai.schema.Function)
    * [get\_arguments\_dict](#spoon_ai.schema.Function.get_arguments_dict)
    * [create](#spoon_ai.schema.Function.create)
  * [AgentState](#spoon_ai.schema.AgentState)
  * [ToolChoice](#spoon_ai.schema.ToolChoice)
  * [Role](#spoon_ai.schema.Role)
  * [ROLE\_TYPE](#spoon_ai.schema.ROLE_TYPE)
  * [Message](#spoon_ai.schema.Message)
    * [role](#spoon_ai.schema.Message.role)
  * [SystemMessage](#spoon_ai.schema.SystemMessage)
    * [role](#spoon_ai.schema.SystemMessage.role)
  * [TOOL\_CHOICE\_TYPE](#spoon_ai.schema.TOOL_CHOICE_TYPE)
  * [LLMConfig](#spoon_ai.schema.LLMConfig)
  * [LLMResponse](#spoon_ai.schema.LLMResponse)
    * [text](#spoon_ai.schema.LLMResponse.text)
  * [LLMResponseChunk](#spoon_ai.schema.LLMResponseChunk)

<a id="spoon_ai.schema"></a>

# Module `spoon_ai.schema`

<a id="spoon_ai.schema.Function"></a>

## `Function` Objects

```python
class Function(BaseModel)
```

<a id="spoon_ai.schema.Function.get_arguments_dict"></a>

#### `get_arguments_dict`

```python
def get_arguments_dict() -> dict
```

Parse arguments string to dictionary.

**Returns**:

- `dict` - Parsed arguments as dictionary

<a id="spoon_ai.schema.Function.create"></a>

#### `create`

```python
@classmethod
def create(cls, name: str, arguments: Union[str, dict]) -> "Function"
```

Create Function with arguments as string or dict.

**Arguments**:

- `name` - Function name
- `arguments` - Function arguments as string or dict
  

**Returns**:

- `Function` - Function instance with arguments as JSON string

<a id="spoon_ai.schema.AgentState"></a>

## `AgentState` Objects

```python
class AgentState(str, Enum)
```

The state of the agent.

<a id="spoon_ai.schema.ToolChoice"></a>

## `ToolChoice` Objects

```python
class ToolChoice(str, Enum)
```

Tool choice options

<a id="spoon_ai.schema.Role"></a>

## `Role` Objects

```python
class Role(str, Enum)
```

Message role options

<a id="spoon_ai.schema.ROLE_TYPE"></a>

#### `ROLE_TYPE`

type: ignore

<a id="spoon_ai.schema.Message"></a>

## `Message` Objects

```python
class Message(BaseModel)
```

Represents a chat message in the conversation

<a id="spoon_ai.schema.Message.role"></a>

#### `role`

type: ignore

<a id="spoon_ai.schema.SystemMessage"></a>

## `SystemMessage` Objects

```python
class SystemMessage(Message)
```

<a id="spoon_ai.schema.SystemMessage.role"></a>

#### `role`

type: ignore

<a id="spoon_ai.schema.TOOL_CHOICE_TYPE"></a>

#### `TOOL_CHOICE_TYPE`

type: ignore

<a id="spoon_ai.schema.LLMConfig"></a>

## `LLMConfig` Objects

```python
class LLMConfig(BaseModel)
```

Configuration for LLM providers

<a id="spoon_ai.schema.LLMResponse"></a>

## `LLMResponse` Objects

```python
class LLMResponse(BaseModel)
```

Unified LLM response model

<a id="spoon_ai.schema.LLMResponse.text"></a>

#### `text`

Original text response

<a id="spoon_ai.schema.LLMResponseChunk"></a>

## `LLMResponseChunk` Objects

```python
class LLMResponseChunk(BaseModel)
```

Enhanced LLM streaming response chunk.

