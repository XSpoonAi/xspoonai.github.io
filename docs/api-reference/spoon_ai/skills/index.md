---
id: spoon_ai.skills
slug: /api-reference/spoon_ai/skills//index
title: spoon_ai.skills
---

# Table of Contents

* [spoon\_ai.skills](#spoon_ai.skills)
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
* [spoon\_ai.skills.script\_tool](#spoon_ai.skills.script_tool)
  * [ScriptTool](#spoon_ai.skills.script_tool.ScriptTool)
    * [\_\_init\_\_](#spoon_ai.skills.script_tool.ScriptTool.__init__)
    * [execute](#spoon_ai.skills.script_tool.ScriptTool.execute)
    * [to\_param](#spoon_ai.skills.script_tool.ScriptTool.to_param)
  * [create\_script\_tools](#spoon_ai.skills.script_tool.create_script_tools)
* [spoon\_ai.skills.executor](#spoon_ai.skills.executor)
  * [MAX\_OUTPUT\_SIZE](#spoon_ai.skills.executor.MAX_OUTPUT_SIZE)
  * [ScriptExecutionError](#spoon_ai.skills.executor.ScriptExecutionError)
  * [ScriptExecutor](#spoon_ai.skills.executor.ScriptExecutor)
    * [\_\_init\_\_](#spoon_ai.skills.executor.ScriptExecutor.__init__)
    * [is\_available](#spoon_ai.skills.executor.ScriptExecutor.is_available)
    * [get\_interpreter](#spoon_ai.skills.executor.ScriptExecutor.get_interpreter)
    * [execute](#spoon_ai.skills.executor.ScriptExecutor.execute)
    * [get\_stats](#spoon_ai.skills.executor.ScriptExecutor.get_stats)
    * [set\_enabled](#spoon_ai.skills.executor.ScriptExecutor.set_enabled)
  * [get\_executor](#spoon_ai.skills.executor.get_executor)
  * [configure\_executor](#spoon_ai.skills.executor.configure_executor)
  * [set\_scripts\_enabled](#spoon_ai.skills.executor.set_scripts_enabled)
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
* [spoon\_ai.skills.registry](#spoon_ai.skills.registry)
  * [SkillRegistry](#spoon_ai.skills.registry.SkillRegistry)
    * [register](#spoon_ai.skills.registry.SkillRegistry.register)
    * [unregister](#spoon_ai.skills.registry.SkillRegistry.unregister)
    * [get](#spoon_ai.skills.registry.SkillRegistry.get)
    * [list\_names](#spoon_ai.skills.registry.SkillRegistry.list_names)
    * [list\_skills](#spoon_ai.skills.registry.SkillRegistry.list_skills)
    * [find\_by\_tag](#spoon_ai.skills.registry.SkillRegistry.find_by_tag)
    * [find\_by\_keyword](#spoon_ai.skills.registry.SkillRegistry.find_by_keyword)
    * [find\_by\_pattern](#spoon_ai.skills.registry.SkillRegistry.find_by_pattern)
    * [find\_by\_intent](#spoon_ai.skills.registry.SkillRegistry.find_by_intent)
    * [find\_all\_matching](#spoon_ai.skills.registry.SkillRegistry.find_all_matching)
    * [get\_intent\_categories](#spoon_ai.skills.registry.SkillRegistry.get_intent_categories)
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

<a id="spoon_ai.skills"></a>

# Module `spoon_ai.skills`

Skill system for SpoonAI agents.

This module provides a Claude Skills-compatible system for defining and managing
agent capabilities through SKILL.md files and optional Python tools.

Key Components:
- Skill: Data model representing a skill with metadata and triggers
- SkillLoader: Discovers and parses SKILL.md files from configured paths
- SkillRegistry: Thread-safe registry with fast trigger matching
- SkillManager: Central lifecycle manager with LLM intent analysis
- ScriptExecutor: Async subprocess execution for skill scripts

Script Execution:
Skills can define scripts (Python, shell, bash) that agents can execute.
Users control whether scripts are allowed; AI decides how to use them.

Usage:
    from spoon_ai.skills import SkillManager, Skill

    # Create manager with auto-discovery and script support
    manager = SkillManager(auto_discover=True, scripts_enabled=True)

    # Activate a skill
    skill = await manager.activate("research", &#123;"topic": "AI"&#125;)

    # Get prompt injection for active skills
    context = manager.get_active_context()

    # Execute a skill script
    result = await manager.execute_script("data-processor", "analyze")

    # Find matching skills for user input
    matches = await manager.find_matching_skills("research quantum computing")

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
The AI decides what input to provide - there's no fixed parameter schema.

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

**Arguments**:

- `input` - Optional input text to pass to script via stdin
- `**kwargs` - Additional arguments (ignored)
  

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

<a id="spoon_ai.skills.executor"></a>

# Module `spoon_ai.skills.executor`

Script execution engine for skills.

Provides async subprocess management for executing skill scripts.
AI decides how to call scripts - users only control whether scripts are allowed.

<a id="spoon_ai.skills.executor.MAX_OUTPUT_SIZE"></a>

#### `MAX_OUTPUT_SIZE`

5MB

<a id="spoon_ai.skills.executor.ScriptExecutionError"></a>

## `ScriptExecutionError` Objects

```python
class ScriptExecutionError(Exception)
```

Raised when script execution fails.

<a id="spoon_ai.skills.executor.ScriptExecutor"></a>

## `ScriptExecutor` Objects

```python
class ScriptExecutor()
```

Async script executor for skill scripts.

Features:
- Async subprocess execution with timeout
- Support for Python, shell, bash scripts
- Environment variable passthrough
- Output capture and size limiting
- Global enable/disable control

<a id="spoon_ai.skills.executor.ScriptExecutor.__init__"></a>

#### `__init__`

```python
def __init__(enabled: bool = True,
             default_timeout: int = DEFAULT_TIMEOUT,
             max_output_size: int = MAX_OUTPUT_SIZE,
             env_passthrough: Optional[List[str]] = None)
```

Initialize script executor.

**Arguments**:

- `enabled` - Whether script execution is allowed
- `default_timeout` - Default timeout in seconds
- `max_output_size` - Max output capture size in bytes
- `env_passthrough` - Environment variables to pass through

<a id="spoon_ai.skills.executor.ScriptExecutor.is_available"></a>

#### `is_available`

```python
def is_available(script_type: ScriptType) -> bool
```

Check if a script type can be executed.

<a id="spoon_ai.skills.executor.ScriptExecutor.get_interpreter"></a>

#### `get_interpreter`

```python
def get_interpreter(script_type: ScriptType) -> Optional[str]
```

Get interpreter path for a script type.

<a id="spoon_ai.skills.executor.ScriptExecutor.execute"></a>

#### `execute`

```python
async def execute(script: SkillScript,
                  input_text: Optional[str] = None,
                  working_directory: Optional[str] = None,
                  extra_env: Optional[Dict[str, str]] = None,
                  timeout: Optional[int] = None) -> ScriptResult
```

Execute a script asynchronously.

**Arguments**:

- `script` - Script to execute
- `input_text` - Optional text to pass to script via stdin
- `working_directory` - Working directory for execution
- `extra_env` - Additional environment variables
- `timeout` - Timeout override (uses script.timeout or default)
  

**Returns**:

  ScriptResult with output and status

<a id="spoon_ai.skills.executor.ScriptExecutor.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, int]
```

Get execution statistics.

<a id="spoon_ai.skills.executor.ScriptExecutor.set_enabled"></a>

#### `set_enabled`

```python
def set_enabled(enabled: bool) -> None
```

Enable or disable script execution.

<a id="spoon_ai.skills.executor.get_executor"></a>

#### `get_executor`

```python
def get_executor() -> ScriptExecutor
```

Get or create the global script executor.

<a id="spoon_ai.skills.executor.configure_executor"></a>

#### `configure_executor`

```python
def configure_executor(**kwargs) -> ScriptExecutor
```

Configure and return the global executor.

<a id="spoon_ai.skills.executor.set_scripts_enabled"></a>

#### `set_scripts_enabled`

```python
def set_scripts_enabled(enabled: bool) -> None
```

Enable or disable script execution globally.

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

<a id="spoon_ai.skills.registry"></a>

# Module `spoon_ai.skills.registry`

Thread-safe skill registry with indexing.

Follows NodePluginSystem pattern from graph/builder.py.

<a id="spoon_ai.skills.registry.SkillRegistry"></a>

## `SkillRegistry` Objects

```python
class SkillRegistry()
```

Thread-safe registry for skills with fast trigger matching.

Maintains indexes for:
- Tags: O(1) lookup by tag
- Keywords: O(1) lookup by keyword
- Intents: O(1) lookup by intent category
- Patterns: Compiled regex patterns for matching

<a id="spoon_ai.skills.registry.SkillRegistry.register"></a>

#### `register`

```python
def register(skill: Skill) -> None
```

Register a skill and update indexes.

**Arguments**:

- `skill` - Skill to register

<a id="spoon_ai.skills.registry.SkillRegistry.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> bool
```

Remove a skill from the registry.

**Arguments**:

- `name` - Skill name to remove
  

**Returns**:

  True if removed, False if not found

<a id="spoon_ai.skills.registry.SkillRegistry.get"></a>

#### `get`

```python
def get(name: str) -> Optional[Skill]
```

Get a skill by name.

**Arguments**:

- `name` - Skill name
  

**Returns**:

  Skill or None if not found

<a id="spoon_ai.skills.registry.SkillRegistry.list_names"></a>

#### `list_names`

```python
def list_names() -> List[str]
```

Get all registered skill names.

<a id="spoon_ai.skills.registry.SkillRegistry.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[Skill]
```

Get all registered skills.

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_tag"></a>

#### `find_by_tag`

```python
def find_by_tag(tag: str) -> List[Skill]
```

Find skills by tag.

**Arguments**:

- `tag` - Tag to search for
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_keyword"></a>

#### `find_by_keyword`

```python
def find_by_keyword(text: str) -> List[Skill]
```

Find skills by keyword matching.

Extracts words from text and matches against keyword index.

**Arguments**:

- `text` - Text to match keywords against
  

**Returns**:

  List of matching skills (deduplicated)

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_pattern"></a>

#### `find_by_pattern`

```python
def find_by_pattern(text: str) -> List[Skill]
```

Find skills by regex pattern matching.

**Arguments**:

- `text` - Text to match patterns against
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_intent"></a>

#### `find_by_intent`

```python
def find_by_intent(intent_category: str) -> List[Skill]
```

Find skills by intent category.

**Arguments**:

- `intent_category` - Intent category to match
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_all_matching"></a>

#### `find_all_matching`

```python
def find_all_matching(text: str) -> List[Skill]
```

Find all skills matching by keywords or patterns.

Combines keyword and pattern matching, sorted by trigger priority.

**Arguments**:

- `text` - Text to match against
  

**Returns**:

  List of matching skills, sorted by priority (highest first)

<a id="spoon_ai.skills.registry.SkillRegistry.get_intent_categories"></a>

#### `get_intent_categories`

```python
def get_intent_categories() -> List[str]
```

Get all registered intent categories.

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

