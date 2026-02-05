---
id: spoon_ai.skills.loader
slug: /api-reference/spoon_ai/skills/loader
title: spoon_ai.skills.loader
---

# Table of Contents

* [spoon\_ai.skills.loader](#spoon_ai.skills.loader)
  * [SkillLoader](#spoon_ai.skills.loader.SkillLoader)
    * [\_\_init\_\_](#spoon_ai.skills.loader.SkillLoader.__init__)
    * [paths](#spoon_ai.skills.loader.SkillLoader.paths)
    * [add\_path](#spoon_ai.skills.loader.SkillLoader.add_path)
    * [discover](#spoon_ai.skills.loader.SkillLoader.discover)
    * [parse](#spoon_ai.skills.loader.SkillLoader.parse)
    * [load\_tools](#spoon_ai.skills.loader.SkillLoader.load_tools)
    * [load](#spoon_ai.skills.loader.SkillLoader.load)
    * [load\_all](#spoon_ai.skills.loader.SkillLoader.load_all)
    * [get\_skill](#spoon_ai.skills.loader.SkillLoader.get_skill)
    * [get\_tools](#spoon_ai.skills.loader.SkillLoader.get_tools)
    * [clear\_cache](#spoon_ai.skills.loader.SkillLoader.clear_cache)
    * [reload](#spoon_ai.skills.loader.SkillLoader.reload)

<a id="spoon_ai.skills.loader"></a>

# Module `spoon_ai.skills.loader`

Skill loader for parsing SKILL.md files.

Discovers and loads skills from multiple paths:
1. ~/.spoon/skills/ - Global user skills
2. ./skills/ - Project-local skills
3. Additional user-specified paths

Note: No built-in skills are included by default.
Use additional_paths to specify skill directories.

<a id="spoon_ai.skills.loader.SkillLoader"></a>

## `SkillLoader` Objects

```python
class SkillLoader()
```

Loads skills from SKILL.md files with optional Python tool modules.

SKILL.md Format:
---
name: my-skill
description: What this skill does
version: 1.0.0
triggers:
  - type: keyword
    keywords: [analyze, review]
---

__Skill Instructions__


Markdown content here...

<a id="spoon_ai.skills.loader.SkillLoader.__init__"></a>

#### `__init__`

```python
def __init__(additional_paths: Optional[List[Path]] = None)
```

Initialize loader with skill search paths.

**Arguments**:

- `additional_paths` - Additional directories to search for skills

<a id="spoon_ai.skills.loader.SkillLoader.paths"></a>

#### `paths`

```python
@property
def paths() -> List[Path]
```

Get configured skill paths.

<a id="spoon_ai.skills.loader.SkillLoader.add_path"></a>

#### `add_path`

```python
def add_path(path: Path) -> None
```

Add a path to search for skills.

<a id="spoon_ai.skills.loader.SkillLoader.discover"></a>

#### `discover`

```python
def discover() -> List[Path]
```

Discover all SKILL.md files in configured paths.

**Returns**:

  List of paths to SKILL.md files

<a id="spoon_ai.skills.loader.SkillLoader.parse"></a>

#### `parse`

```python
def parse(file_path: Path) -> Tuple[SkillMetadata, str]
```

Parse a SKILL.md file into metadata and instructions.

**Arguments**:

- `file_path` - Path to SKILL.md file
  

**Returns**:

  Tuple of (SkillMetadata, instructions_markdown)
  

**Raises**:

- `ValueError` - If file format is invalid

<a id="spoon_ai.skills.loader.SkillLoader.load_tools"></a>

#### `load_tools`

```python
def load_tools(skill_dir: Path) -> List[BaseTool]
```

Load Python tools from a skill directory.

Looks for tools.py containing BaseTool subclasses.

**Arguments**:

- `skill_dir` - Directory containing the skill
  

**Returns**:

  List of loaded tool instances

<a id="spoon_ai.skills.loader.SkillLoader.load"></a>

#### `load`

```python
def load(file_path: Path) -> Skill
```

Load a complete skill from SKILL.md and optional modules.

**Arguments**:

- `file_path` - Path to SKILL.md file
  

**Returns**:

  Loaded Skill instance

<a id="spoon_ai.skills.loader.SkillLoader.load_all"></a>

#### `load_all`

```python
def load_all() -> Dict[str, Skill]
```

Discover and load all skills from configured paths.

**Returns**:

  Dictionary mapping skill names to Skill instances

<a id="spoon_ai.skills.loader.SkillLoader.get_skill"></a>

#### `get_skill`

```python
def get_skill(name: str) -> Optional[Skill]
```

Get a loaded skill by name.

<a id="spoon_ai.skills.loader.SkillLoader.get_tools"></a>

#### `get_tools`

```python
def get_tools(skill_name: str) -> List[BaseTool]
```

Get loaded tools for a skill.

<a id="spoon_ai.skills.loader.SkillLoader.clear_cache"></a>

#### `clear_cache`

```python
def clear_cache() -> None
```

Clear all cached skills and tools.

<a id="spoon_ai.skills.loader.SkillLoader.reload"></a>

#### `reload`

```python
def reload(name: str) -> Optional[Skill]
```

Reload a specific skill from disk.

**Arguments**:

- `name` - Skill name to reload
  

**Returns**:

  Reloaded Skill or None if not found

