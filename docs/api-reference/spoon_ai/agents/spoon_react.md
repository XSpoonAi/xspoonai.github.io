---
id: spoon_ai.agents.spoon_react
slug: /api-reference/spoon_ai/agents/spoon_react
title: spoon_ai.agents.spoon_react
---

# Table of Contents

* [spoon\_ai.agents.spoon\_react](#spoon_ai.agents.spoon_react)
  * [create\_configured\_chatbot](#spoon_ai.agents.spoon_react.create_configured_chatbot)
  * [SpoonReactAI](#spoon_ai.agents.spoon_react.SpoonReactAI)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react.SpoonReactAI.__init__)
    * [initialize](#spoon_ai.agents.spoon_react.SpoonReactAI.initialize)
    * [run](#spoon_ai.agents.spoon_react.SpoonReactAI.run)

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

