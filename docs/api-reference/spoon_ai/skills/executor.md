---
id: spoon_ai.skills.executor
slug: /api-reference/spoon_ai/skills/executor
title: spoon_ai.skills.executor
---

# Table of Contents

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

