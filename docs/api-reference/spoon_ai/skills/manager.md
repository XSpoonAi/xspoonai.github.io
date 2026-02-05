---
id: spoon_ai.skills.manager
slug: /api-reference/spoon_ai/skills/manager
title: spoon_ai.skills.manager
---

# Table of Contents

* [spoon\_ai.skills.manager](#spoon_ai.skills.manager)
  * [SkillManager](#spoon_ai.skills.manager.SkillManager)
    * [\_\_init\_\_](#spoon_ai.skills.manager.SkillManager.__init__)
    * [discover](#spoon_ai.skills.manager.SkillManager.discover)
    * [add\_skill\_path](#spoon_ai.skills.manager.SkillManager.add_skill_path)
    * [register](#spoon_ai.skills.manager.SkillManager.register)
    * [unregister](#spoon_ai.skills.manager.SkillManager.unregister)
    * [get](#spoon_ai.skills.manager.SkillManager.get)
    * [list](#spoon_ai.skills.manager.SkillManager.list)
    * [list\_skills](#spoon_ai.skills.manager.SkillManager.list_skills)
    * [match\_triggers](#spoon_ai.skills.manager.SkillManager.match_triggers)
    * [match\_intent](#spoon_ai.skills.manager.SkillManager.match_intent)
    * [find\_matching\_skills](#spoon_ai.skills.manager.SkillManager.find_matching_skills)
    * [activate](#spoon_ai.skills.manager.SkillManager.activate)
    * [deactivate](#spoon_ai.skills.manager.SkillManager.deactivate)
    * [deactivate\_all](#spoon_ai.skills.manager.SkillManager.deactivate_all)
    * [get\_active\_context](#spoon_ai.skills.manager.SkillManager.get_active_context)
    * [get\_active\_tools](#spoon_ai.skills.manager.SkillManager.get_active_tools)
    * [get\_active\_skill\_names](#spoon_ai.skills.manager.SkillManager.get_active_skill_names)
    * [is\_active](#spoon_ai.skills.manager.SkillManager.is_active)
    * [execute\_script](#spoon_ai.skills.manager.SkillManager.execute_script)
    * [set\_scripts\_enabled](#spoon_ai.skills.manager.SkillManager.set_scripts_enabled)
    * [get\_script\_tools](#spoon_ai.skills.manager.SkillManager.get_script_tools)
    * [get\_skill\_info](#spoon_ai.skills.manager.SkillManager.get_skill_info)
    * [get\_stats](#spoon_ai.skills.manager.SkillManager.get_stats)

<a id="spoon_ai.skills.manager"></a>

# Module `spoon_ai.skills.manager`

Central skill manager for lifecycle, discovery, and activation.

Reuses:
- IntentAnalyzer from graph/builder.py for LLM-powered matching
- InMemoryCheckpointer from graph/checkpointer.py for state persistence

Script execution support:
- Runs activation/deactivation scripts automatically
- Creates ScriptTool instances for agent access
- Global and per-skill script enable/disable

<a id="spoon_ai.skills.manager.SkillManager"></a>

## `SkillManager` Objects

```python
class SkillManager()
```

Central manager for skill lifecycle, discovery, and activation.

Features:
- Multi-path skill discovery
- Keyword and pattern-based trigger matching
- LLM-powered intent matching (via IntentAnalyzer)
- State persistence (via InMemoryCheckpointer)
- Skill composition (prerequisite activation)

<a id="spoon_ai.skills.manager.SkillManager.__init__"></a>

#### `__init__`

```python
def __init__(skill_paths: Optional[List[str]] = None,
             llm: Optional["LLMManager"] = None,
             auto_discover: bool = True,
             scripts_enabled: bool = True)
```

Initialize the skill manager.

**Arguments**:

- `skill_paths` - Additional directories to search for skills
- `llm` - LLM manager for intent-based matching
- `auto_discover` - Whether to auto-discover skills on init
- `scripts_enabled` - Whether to allow script execution globally

<a id="spoon_ai.skills.manager.SkillManager.discover"></a>

#### `discover`

```python
def discover() -> int
```

Discover and register all skills from configured paths.

**Returns**:

  Number of skills discovered

<a id="spoon_ai.skills.manager.SkillManager.add_skill_path"></a>

#### `add_skill_path`

```python
def add_skill_path(path: str) -> None
```

Add a path to search for skills.

**Arguments**:

- `path` - Directory path to add

<a id="spoon_ai.skills.manager.SkillManager.register"></a>

#### `register`

```python
def register(skill: Skill) -> None
```

Register a skill manually.

<a id="spoon_ai.skills.manager.SkillManager.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> bool
```

Unregister a skill by name.

Also deactivates if currently active.

<a id="spoon_ai.skills.manager.SkillManager.get"></a>

#### `get`

```python
def get(name: str) -> Optional[Skill]
```

Get a skill by name.

<a id="spoon_ai.skills.manager.SkillManager.list"></a>

#### `list`

```python
def list() -> List[str]
```

List all registered skill names.

<a id="spoon_ai.skills.manager.SkillManager.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[Skill]
```

List all registered skills.

<a id="spoon_ai.skills.manager.SkillManager.match_triggers"></a>

#### `match_triggers`

```python
def match_triggers(text: str) -> List[Skill]
```

Match skills by keywords and patterns (fast, no LLM).

**Arguments**:

- `text` - User input to match against
  

**Returns**:

  List of matching skills, sorted by priority

<a id="spoon_ai.skills.manager.SkillManager.match_intent"></a>

#### `match_intent`

```python
async def match_intent(text: str) -> List[Skill]
```

Match skills by LLM-powered intent analysis.

**Arguments**:

- `text` - User input to analyze
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.manager.SkillManager.find_matching_skills"></a>

#### `find_matching_skills`

```python
async def find_matching_skills(text: str,
                               use_intent: bool = True) -> List[Skill]
```

Find all matching skills using both trigger and intent matching.

**Arguments**:

- `text` - User input to match
- `use_intent` - Whether to also use LLM intent matching
  

**Returns**:

  Combined list of matching skills (deduplicated)

<a id="spoon_ai.skills.manager.SkillManager.activate"></a>

#### `activate`

```python
async def activate(name: str,
                   context: Optional[Dict[str, Any]] = None) -> Skill
```

Activate a skill with prerequisite checking.

**Arguments**:

- `name` - Skill name to activate
- `context` - Optional context data for the skill
  

**Returns**:

  Activated Skill instance
  

**Raises**:

- `ValueError` - If skill not found or prerequisites not met

<a id="spoon_ai.skills.manager.SkillManager.deactivate"></a>

#### `deactivate`

```python
async def deactivate(name: str) -> bool
```

Deactivate an active skill.

Persists state if configured. Runs deactivation scripts.

**Arguments**:

- `name` - Skill name to deactivate
  

**Returns**:

  True if deactivated, False if not active

<a id="spoon_ai.skills.manager.SkillManager.deactivate_all"></a>

#### `deactivate_all`

```python
async def deactivate_all() -> int
```

Deactivate all active skills.

**Returns**:

  Number of skills deactivated

<a id="spoon_ai.skills.manager.SkillManager.get_active_context"></a>

#### `get_active_context`

```python
def get_active_context() -> str
```

Generate combined prompt content for all active skills.

**Returns**:

  Formatted skill instructions for injection into system prompt

<a id="spoon_ai.skills.manager.SkillManager.get_active_tools"></a>

#### `get_active_tools`

```python
def get_active_tools() -> List[BaseTool]
```

Get all tools from active skills.

Includes both Python tools (from tools.py) and script tools.

**Returns**:

  List of tool instances from active skills

<a id="spoon_ai.skills.manager.SkillManager.get_active_skill_names"></a>

#### `get_active_skill_names`

```python
def get_active_skill_names() -> List[str]
```

Get names of all active skills.

<a id="spoon_ai.skills.manager.SkillManager.is_active"></a>

#### `is_active`

```python
def is_active(name: str) -> bool
```

Check if a skill is currently active.

<a id="spoon_ai.skills.manager.SkillManager.execute_script"></a>

#### `execute_script`

```python
async def execute_script(skill_name: str,
                         script_name: str,
                         input_text: Optional[str] = None) -> ScriptResult
```

Execute a specific script from a skill.

**Arguments**:

- `skill_name` - Name of the skill containing the script
- `script_name` - Name of the script to execute
- `input_text` - Optional input to pass to the script
  

**Returns**:

  ScriptResult with execution details
  

**Raises**:

- `ValueError` - If skill or script not found

<a id="spoon_ai.skills.manager.SkillManager.set_scripts_enabled"></a>

#### `set_scripts_enabled`

```python
def set_scripts_enabled(enabled: bool) -> None
```

Enable or disable script execution globally.

**Arguments**:

- `enabled` - Whether to enable script execution

<a id="spoon_ai.skills.manager.SkillManager.get_script_tools"></a>

#### `get_script_tools`

```python
def get_script_tools(skill_name: str) -> List[ScriptTool]
```

Get script tools for a specific skill.

**Arguments**:

- `skill_name` - Name of the skill
  

**Returns**:

  List of ScriptTool instances for the skill

<a id="spoon_ai.skills.manager.SkillManager.get_skill_info"></a>

#### `get_skill_info`

```python
def get_skill_info(name: str) -> Optional[Dict[str, Any]]
```

Get detailed information about a skill.

**Arguments**:

- `name` - Skill name
  

**Returns**:

  Dictionary with skill details or None if not found

<a id="spoon_ai.skills.manager.SkillManager.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, Any]
```

Get statistics about the skill system.

