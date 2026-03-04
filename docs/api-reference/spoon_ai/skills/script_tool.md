---
id: spoon_ai.skills.script_tool
slug: /api-reference/spoon_ai/skills/script_tool
title: spoon_ai.skills.script_tool
---

# Table of Contents

* [spoon\_ai.skills.script\_tool](#spoon_ai.skills.script_tool)
  * [ScriptTool](#spoon_ai.skills.script_tool.ScriptTool)
    * [\_\_init\_\_](#spoon_ai.skills.script_tool.ScriptTool.__init__)
    * [execute](#spoon_ai.skills.script_tool.ScriptTool.execute)
    * [to\_param](#spoon_ai.skills.script_tool.ScriptTool.to_param)
  * [create\_script\_tools](#spoon_ai.skills.script_tool.create_script_tools)

<a id="spoon_ai.skills.script_tool"></a>

# Module `spoon_ai.skills.script_tool`

Script-based tool for agent integration.

Wraps SkillScript as a BaseTool that agents can call.
AI decides how to use scripts - users only control whether scripts are allowed.

<a id="spoon_ai.skills.script_tool.ScriptTool"></a>

## `ScriptTool` Objects

```python
class ScriptTool(BaseTool)
```

Tool wrapper for skill scripts.

Exposes a SkillScript as a callable tool that agents can invoke.
When the script defines an ``input_schema``, the tool parameters are
derived from that schema so the LLM receives a structured contract.
Otherwise a generic ``input`` string parameter is used for backward
compatibility.

<a id="spoon_ai.skills.script_tool.ScriptTool.__init__"></a>

#### `__init__`

```python
def __init__(script: SkillScript,
             skill_name: str,
             working_directory: Optional[str] = None)
```

Create a tool from a script definition.

**Arguments**:

- `script` - SkillScript to wrap
- `skill_name` - Parent skill name
- `working_directory` - Base working directory

<a id="spoon_ai.skills.script_tool.ScriptTool.execute"></a>

#### `execute`

```python
async def execute(input: Optional[str] = None, **kwargs) -> str
```

Execute the script.

When the script declares an ``input_schema``, the LLM's structured
kwargs are serialized to JSON and piped to stdin.  For legacy scripts
that only declare a generic ``input`` string, the raw value is passed
through as-is.

**Arguments**:

- `input` - Optional input text (legacy path)
- `**kwargs` - Structured arguments matching input_schema
  

**Returns**:

  Script output as string

<a id="spoon_ai.skills.script_tool.ScriptTool.to_param"></a>

#### `to_param`

```python
def to_param() -> dict
```

Generate OpenAI-compatible function definition.

<a id="spoon_ai.skills.script_tool.create_script_tools"></a>

#### `create_script_tools`

```python
def create_script_tools(
        skill_name: str,
        scripts: List[SkillScript],
        working_directory: Optional[str] = None) -> List[ScriptTool]
```

Create ScriptTool instances from script definitions.

**Arguments**:

- `skill_name` - Parent skill name
- `scripts` - List of script definitions
- `working_directory` - Base working directory (fallback if script has none)
  

**Returns**:

  List of ScriptTool instances

