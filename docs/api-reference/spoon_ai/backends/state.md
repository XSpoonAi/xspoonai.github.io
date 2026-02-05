---
id: spoon_ai.backends.state
slug: /api-reference/spoon_ai/backends/state
title: spoon_ai.backends.state
---

# Table of Contents

* [spoon\_ai.backends.state](#spoon_ai.backends.state)
  * [StateBackend](#spoon_ai.backends.state.StateBackend)
    * [\_\_init\_\_](#spoon_ai.backends.state.StateBackend.__init__)
    * [ls\_info](#spoon_ai.backends.state.StateBackend.ls_info)
    * [read](#spoon_ai.backends.state.StateBackend.read)
    * [write](#spoon_ai.backends.state.StateBackend.write)
    * [edit](#spoon_ai.backends.state.StateBackend.edit)
    * [grep\_raw](#spoon_ai.backends.state.StateBackend.grep_raw)
    * [glob\_info](#spoon_ai.backends.state.StateBackend.glob_info)
  * [create\_state\_backend](#spoon_ai.backends.state.create_state_backend)

<a id="spoon_ai.backends.state"></a>

# Module `spoon_ai.backends.state`

StateBackend: Store files in agent state (ephemeral).

Files persist within a conversation thread but not across threads.
State is automatically checkpointed after each agent step.

<a id="spoon_ai.backends.state.StateBackend"></a>

## `StateBackend` Objects

```python
class StateBackend(BackendProtocol)
```

Backend that stores files in agent state (ephemeral).

Uses agent's state management and checkpointing. Files persist within
a conversation thread but not across threads. State is automatically
checkpointed after each agent step.

**Example**:

    ```python
    runtime = BackendRuntime(state={"files": {}})
    backend = StateBackend(runtime)

    # Write a file
    result = backend.write("/hello.txt", "Hello, World!")

    # Read the file
    content = backend.read("/hello.txt")
    ```

<a id="spoon_ai.backends.state.StateBackend.__init__"></a>

#### `__init__`

```python
def __init__(runtime: BackendRuntime)
```

Initialize StateBackend with runtime.

**Arguments**:

- `runtime` - BackendRuntime instance providing state access.

<a id="spoon_ai.backends.state.StateBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory (non-recursive).

**Arguments**:

- `path` - Absolute path to directory.
  

**Returns**:

  List of FileInfo dicts for files and directories in the directory.

<a id="spoon_ai.backends.state.StateBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

**Arguments**:

- `file_path` - Absolute file path.
- `offset` - Line offset to start reading from (0-indexed).
- `limit` - Maximum number of lines to read.
  

**Returns**:

  Formatted file content with line numbers, or error message.

<a id="spoon_ai.backends.state.StateBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file with content.

Returns WriteResult with files_update to update state.

<a id="spoon_ai.backends.state.StateBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences.

Returns EditResult with files_update and occurrences.

<a id="spoon_ai.backends.state.StateBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

<a id="spoon_ai.backends.state.StateBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Get FileInfo for files matching glob pattern.

<a id="spoon_ai.backends.state.create_state_backend"></a>

#### `create_state_backend`

```python
def create_state_backend(
    initial_files: Optional[dict[str, Any]] = None
) -> tuple[StateBackend, BackendRuntime]
```

Create a StateBackend with optional initial files.

**Arguments**:

- `initial_files` - Optional dict of file paths to FileData.
  

**Returns**:

  Tuple of (StateBackend, BackendRuntime).
  

**Example**:

    ```python
    backend, runtime = create_state_backend()
    backend.write("/hello.txt", "Hello!")
    ```

