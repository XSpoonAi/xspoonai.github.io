---
id: spoon_ai.skills.models
slug: /api-reference/spoon_ai/skills/models
title: spoon_ai.skills.models
---

# Table of Contents

* [spoon\_ai.skills.models](#spoon_ai.skills.models)
  * [SkillState](#spoon_ai.skills.models.SkillState)
  * [ScriptType](#spoon_ai.skills.models.ScriptType)
  * [SkillScript](#spoon_ai.skills.models.SkillScript)
    * [validate\_source](#spoon_ai.skills.models.SkillScript.validate_source)
  * [ScriptConfig](#spoon_ai.skills.models.ScriptConfig)
    * [get\_script](#spoon_ai.skills.models.ScriptConfig.get_script)
    * [get\_activation\_scripts](#spoon_ai.skills.models.ScriptConfig.get_activation_scripts)
    * [get\_deactivation\_scripts](#spoon_ai.skills.models.ScriptConfig.get_deactivation_scripts)
  * [ScriptResult](#spoon_ai.skills.models.ScriptResult)
    * [to\_string](#spoon_ai.skills.models.ScriptResult.to_string)
  * [SkillTrigger](#spoon_ai.skills.models.SkillTrigger)
  * [SkillParameter](#spoon_ai.skills.models.SkillParameter)
  * [SkillPrerequisite](#spoon_ai.skills.models.SkillPrerequisite)
  * [SkillMetadata](#spoon_ai.skills.models.SkillMetadata)
    * [has\_scripts](#spoon_ai.skills.models.SkillMetadata.has_scripts)
    * [scripts\_enabled](#spoon_ai.skills.models.SkillMetadata.scripts_enabled)
  * [Skill](#spoon_ai.skills.models.Skill)
    * [name](#spoon_ai.skills.models.Skill.name)
    * [description](#spoon_ai.skills.models.Skill.description)
    * [get\_prompt\_injection](#spoon_ai.skills.models.Skill.get_prompt_injection)

<a id="spoon_ai.skills.models"></a>

# Module `spoon_ai.skills.models`

Skill system data models.

Pydantic schemas for skill definition, following Anthropic Skills specification
with XSpoonAi extensions.

<a id="spoon_ai.skills.models.SkillState"></a>

## `SkillState` Objects

```python
class SkillState(str, Enum)
```

Skill activation state.

<a id="spoon_ai.skills.models.ScriptType"></a>

## `ScriptType` Objects

```python
class ScriptType(str, Enum)
```

Supported script execution types.

<a id="spoon_ai.skills.models.SkillScript"></a>

## `SkillScript` Objects

```python
class SkillScript(BaseModel)
```

Script definition within a skill.

Scripts are executed by the agent when needed. The AI decides
how to call scripts - users only control whether scripts are allowed.

Example in SKILL.md:
    scripts:
      - name: fetch_data
        description: Fetch latest market data
        type: python
        file: scripts/fetch_data.py

<a id="spoon_ai.skills.models.SkillScript.validate_source"></a>

#### `validate_source`

```python
@model_validator(mode='after')
def validate_source()
```

Ensure either file or inline is provided.

<a id="spoon_ai.skills.models.ScriptConfig"></a>

## `ScriptConfig` Objects

```python
class ScriptConfig(BaseModel)
```

Script configuration section in skill metadata.

Example in SKILL.md:
    scripts:
      enabled: true
      working_directory: ./scripts
      definitions:
        - name: analyze
          type: python
          file: analyze.py

<a id="spoon_ai.skills.models.ScriptConfig.get_script"></a>

#### `get_script`

```python
def get_script(name: str) -> Optional[SkillScript]
```

Get script by name.

<a id="spoon_ai.skills.models.ScriptConfig.get_activation_scripts"></a>

#### `get_activation_scripts`

```python
def get_activation_scripts() -> List[SkillScript]
```

Get scripts to run on activation.

<a id="spoon_ai.skills.models.ScriptConfig.get_deactivation_scripts"></a>

#### `get_deactivation_scripts`

```python
def get_deactivation_scripts() -> List[SkillScript]
```

Get scripts to run on deactivation.

<a id="spoon_ai.skills.models.ScriptResult"></a>

## `ScriptResult` Objects

```python
class ScriptResult(BaseModel)
```

Result of script execution.

<a id="spoon_ai.skills.models.ScriptResult.to_string"></a>

#### `to_string`

```python
def to_string() -> str
```

Convert to string for agent context.

<a id="spoon_ai.skills.models.SkillTrigger"></a>

## `SkillTrigger` Objects

```python
class SkillTrigger(BaseModel)
```

Trigger configuration for skill activation.

<a id="spoon_ai.skills.models.SkillParameter"></a>

## `SkillParameter` Objects

```python
class SkillParameter(BaseModel)
```

Parameter definition for skills.

<a id="spoon_ai.skills.models.SkillPrerequisite"></a>

## `SkillPrerequisite` Objects

```python
class SkillPrerequisite(BaseModel)
```

Prerequisites for skill execution.

<a id="spoon_ai.skills.models.SkillMetadata"></a>

## `SkillMetadata` Objects

```python
class SkillMetadata(BaseModel)
```

Skill metadata from YAML frontmatter.

Required fields (Anthropic-compatible):
- name: Unique skill identifier
- description: Human-readable description

Optional fields (XSpoonAi extensions):
- triggers, parameters, prerequisites, composes, etc.

<a id="spoon_ai.skills.models.SkillMetadata.has_scripts"></a>

#### `has_scripts`

```python
def has_scripts() -> bool
```

Check if skill has scripts defined.

<a id="spoon_ai.skills.models.SkillMetadata.scripts_enabled"></a>

#### `scripts_enabled`

```python
def scripts_enabled() -> bool
```

Check if scripts are enabled for this skill.

<a id="spoon_ai.skills.models.Skill"></a>

## `Skill` Objects

```python
class Skill(BaseModel)
```

Complete skill definition.

Combines metadata from YAML frontmatter with markdown instructions.

<a id="spoon_ai.skills.models.Skill.name"></a>

#### `name`

```python
@property
def name() -> str
```

Convenience property for skill name.

<a id="spoon_ai.skills.models.Skill.description"></a>

#### `description`

```python
@property
def description() -> str
```

Convenience property for skill description.

<a id="spoon_ai.skills.models.Skill.get_prompt_injection"></a>

#### `get_prompt_injection`

```python
def get_prompt_injection() -> str
```

Generate prompt content to inject into agent's system prompt.

**Returns**:

  Formatted skill instructions with metadata

