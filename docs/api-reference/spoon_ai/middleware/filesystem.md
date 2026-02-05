---
id: spoon_ai.middleware.filesystem
slug: /api-reference/spoon_ai/middleware/filesystem
title: spoon_ai.middleware.filesystem
---

# Table of Contents

* [spoon\_ai.middleware.filesystem](#spoon_ai.middleware.filesystem)
  * [validate\_path](#spoon_ai.middleware.filesystem.validate_path)
  * [LsTool](#spoon_ai.middleware.filesystem.LsTool)
  * [ReadFileTool](#spoon_ai.middleware.filesystem.ReadFileTool)
  * [WriteFileTool](#spoon_ai.middleware.filesystem.WriteFileTool)
  * [EditFileTool](#spoon_ai.middleware.filesystem.EditFileTool)
  * [GlobTool](#spoon_ai.middleware.filesystem.GlobTool)
  * [GrepTool](#spoon_ai.middleware.filesystem.GrepTool)
  * [ExecuteTool](#spoon_ai.middleware.filesystem.ExecuteTool)
  * [get\_filesystem\_tools](#spoon_ai.middleware.filesystem.get_filesystem_tools)
  * [FilesystemMiddleware](#spoon_ai.middleware.filesystem.FilesystemMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.filesystem.FilesystemMiddleware.__init__)
    * [tools](#spoon_ai.middleware.filesystem.FilesystemMiddleware.tools)
    * [system\_prompt](#spoon_ai.middleware.filesystem.FilesystemMiddleware.system_prompt)
    * [backend](#spoon_ai.middleware.filesystem.FilesystemMiddleware.backend)
    * [awrap\_model\_call](#spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_model_call)
    * [awrap\_tool\_call](#spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_tool_call)
  * [create\_filesystem\_middleware](#spoon_ai.middleware.filesystem.create_filesystem_middleware)
  * [create\_sandbox\_backend](#spoon_ai.middleware.filesystem.create_sandbox_backend)
  * [LocalSandboxBackend](#spoon_ai.middleware.filesystem.LocalSandboxBackend)
    * [execute](#spoon_ai.middleware.filesystem.LocalSandboxBackend.execute)
    * [aexecute](#spoon_ai.middleware.filesystem.LocalSandboxBackend.aexecute)

<a id="spoon_ai.middleware.filesystem"></a>

# Module `spoon_ai.middleware.filesystem`

Filesystem Middleware - 7 Built-in Tools for File Operations.

Provides filesystem tools to agents:
1. ls - List files in directory
2. read_file - Read file content
3. write_file - Write new file
4. edit_file - Edit existing file (string replacement)
5. glob - Find files by pattern
6. grep - Search content in files
7. execute - Run shell commands (if backend supports)

Compatible with LangChain DeepAgents filesystem middleware interface.

Usage:
    from spoon_ai.middleware.filesystem import FilesystemMiddleware
    from spoon_ai.backends import create_state_backend

    backend, runtime = create_state_backend()
    middleware = FilesystemMiddleware(backend=backend)

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )

<a id="spoon_ai.middleware.filesystem.validate_path"></a>

#### `validate_path`

```python
def validate_path(path: str,
                  allowed_prefixes: Optional[List[str]] = None) -> str
```

Validate and normalize file path for security.

**Arguments**:

- `path` - The path to validate
- `allowed_prefixes` - Optional list of allowed path prefixes
  

**Returns**:

  Normalized canonical path starting with /
  

**Raises**:

- `ValueError` - If path contains traversal sequences or invalid format

<a id="spoon_ai.middleware.filesystem.LsTool"></a>

## `LsTool` Objects

```python
class LsTool(BaseTool)
```

List files in a directory.

<a id="spoon_ai.middleware.filesystem.ReadFileTool"></a>

## `ReadFileTool` Objects

```python
class ReadFileTool(BaseTool)
```

Read file content.

<a id="spoon_ai.middleware.filesystem.WriteFileTool"></a>

## `WriteFileTool` Objects

```python
class WriteFileTool(BaseTool)
```

Write to a new file.

<a id="spoon_ai.middleware.filesystem.EditFileTool"></a>

## `EditFileTool` Objects

```python
class EditFileTool(BaseTool)
```

Edit existing file with string replacement.

<a id="spoon_ai.middleware.filesystem.GlobTool"></a>

## `GlobTool` Objects

```python
class GlobTool(BaseTool)
```

Find files by glob pattern.

<a id="spoon_ai.middleware.filesystem.GrepTool"></a>

## `GrepTool` Objects

```python
class GrepTool(BaseTool)
```

Search for pattern in files.

<a id="spoon_ai.middleware.filesystem.ExecuteTool"></a>

## `ExecuteTool` Objects

```python
class ExecuteTool(BaseTool)
```

Execute shell command in sandbox.

<a id="spoon_ai.middleware.filesystem.get_filesystem_tools"></a>

#### `get_filesystem_tools`

```python
def get_filesystem_tools(backend: BackendProtocol) -> List[BaseTool]
```

Get all filesystem tools for a backend.

**Arguments**:

- `backend` - Backend to use for file operations
  

**Returns**:

  List of 7 filesystem tools

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware"></a>

## `FilesystemMiddleware` Objects

```python
class FilesystemMiddleware(AgentMiddleware)
```

Middleware for providing filesystem and execution tools to an agent.

Adds 7 filesystem tools to the agent:
- ls: list files in directory
- read_file: read file content
- write_file: write new file
- edit_file: edit existing file
- glob: find files by pattern
- grep: search content in files
- execute: run shell commands (if backend supports)

**Example**:

    ```python
    from spoon_ai.middleware.filesystem import FilesystemMiddleware
    from spoon_ai.backends import create_state_backend, create_composite_backend

    # With ephemeral storage (default)
    middleware = FilesystemMiddleware()

    # With custom backend
    backend, runtime = create_state_backend()
    middleware = FilesystemMiddleware(backend=backend)

    # With composite backend (mixed storage)
    composite = create_composite_backend(
        default=state_backend,
        routes={"/persistent/": store_backend}
    )
    middleware = FilesystemMiddleware(backend=composite)

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(backend: Optional[BackendProtocol] = None,
             system_prompt: Optional[str] = None,
             include_execute: bool = True,
             tool_token_limit: int = TOOL_TOKEN_LIMIT)
```

Initialize filesystem middleware.

**Arguments**:

- `backend` - Backend for file operations. Defaults to StateBackend.
- `system_prompt` - Optional custom system prompt override.
- `include_execute` - Whether to include execute tool (default: True)
- `tool_token_limit` - Token limit before truncating tool results

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.tools"></a>

#### `tools`

```python
@property
def tools() -> List[BaseTool]
```

Get filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.system_prompt"></a>

#### `system_prompt`

```python
@property
def system_prompt() -> str
```

Get system prompt for filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.backend"></a>

#### `backend`

```python
@property
def backend() -> BackendProtocol
```

Get the backend.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Inject system prompt for filesystem tools.

<a id="spoon_ai.middleware.filesystem.FilesystemMiddleware.awrap_tool_call"></a>

#### `awrap_tool_call`

```python
async def awrap_tool_call(request: ToolCallRequest,
                          handler: Callable) -> ToolCallResult
```

Handle large tool results by truncating.

<a id="spoon_ai.middleware.filesystem.create_filesystem_middleware"></a>

#### `create_filesystem_middleware`

```python
def create_filesystem_middleware(
        backend: Optional[BackendProtocol] = None,
        include_execute: bool = True) -> FilesystemMiddleware
```

Create a filesystem middleware.

**Arguments**:

- `backend` - Backend for file operations
- `include_execute` - Whether to include execute tool
  

**Returns**:

  FilesystemMiddleware instance
  

**Example**:

    ```python
    middleware = create_filesystem_middleware()
    agent = ToolCallAgent(middleware=[middleware], ...)
    ```

<a id="spoon_ai.middleware.filesystem.create_sandbox_backend"></a>

#### `create_sandbox_backend`

```python
def create_sandbox_backend(root_dir: Optional[str] = None,
                           timeout: int = 30) -> "LocalSandboxBackend"
```

Create a local sandbox backend that supports command execution.

**Arguments**:

- `root_dir` - Root directory for sandbox
- `timeout` - Command execution timeout in seconds
  

**Returns**:

  LocalSandboxBackend instance

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend"></a>

## `LocalSandboxBackend` Objects

```python
class LocalSandboxBackend(SandboxBackendProtocol)
```

Local sandbox backend with command execution support.

Wraps FilesystemBackend and adds execute capability.

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend.execute"></a>

#### `execute`

```python
def execute(command: str) -> ExecuteResponse
```

Execute a shell command.

<a id="spoon_ai.middleware.filesystem.LocalSandboxBackend.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async execute a shell command.

