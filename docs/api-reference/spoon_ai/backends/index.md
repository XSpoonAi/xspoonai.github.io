---
id: spoon_ai.backends
slug: /api-reference/spoon_ai/backends//index
title: spoon_ai.backends
---

# Table of Contents

* [spoon\_ai.backends](#spoon_ai.backends)
* [spoon\_ai.backends.sandbox](#spoon_ai.backends.sandbox)
  * [BaseSandbox](#spoon_ai.backends.sandbox.BaseSandbox)
    * [execute](#spoon_ai.backends.sandbox.BaseSandbox.execute)
    * [aexecute](#spoon_ai.backends.sandbox.BaseSandbox.aexecute)
    * [id](#spoon_ai.backends.sandbox.BaseSandbox.id)
    * [ls\_info](#spoon_ai.backends.sandbox.BaseSandbox.ls_info)
    * [read](#spoon_ai.backends.sandbox.BaseSandbox.read)
    * [write](#spoon_ai.backends.sandbox.BaseSandbox.write)
    * [edit](#spoon_ai.backends.sandbox.BaseSandbox.edit)
    * [grep\_raw](#spoon_ai.backends.sandbox.BaseSandbox.grep_raw)
    * [glob\_info](#spoon_ai.backends.sandbox.BaseSandbox.glob_info)
    * [upload\_files](#spoon_ai.backends.sandbox.BaseSandbox.upload_files)
    * [download\_files](#spoon_ai.backends.sandbox.BaseSandbox.download_files)
    * [als\_info](#spoon_ai.backends.sandbox.BaseSandbox.als_info)
    * [aread](#spoon_ai.backends.sandbox.BaseSandbox.aread)
    * [awrite](#spoon_ai.backends.sandbox.BaseSandbox.awrite)
    * [aedit](#spoon_ai.backends.sandbox.BaseSandbox.aedit)
    * [agrep\_raw](#spoon_ai.backends.sandbox.BaseSandbox.agrep_raw)
    * [aglob\_info](#spoon_ai.backends.sandbox.BaseSandbox.aglob_info)
    * [aupload\_files](#spoon_ai.backends.sandbox.BaseSandbox.aupload_files)
    * [adownload\_files](#spoon_ai.backends.sandbox.BaseSandbox.adownload_files)
* [spoon\_ai.backends.utils](#spoon_ai.backends.utils)
  * [sanitize\_tool\_call\_id](#spoon_ai.backends.utils.sanitize_tool_call_id)
  * [validate\_path](#spoon_ai.backends.utils.validate_path)
  * [format\_content\_with\_line\_numbers](#spoon_ai.backends.utils.format_content_with_line_numbers)
  * [check\_empty\_content](#spoon_ai.backends.utils.check_empty_content)
  * [file\_data\_to\_string](#spoon_ai.backends.utils.file_data_to_string)
  * [create\_file\_data](#spoon_ai.backends.utils.create_file_data)
  * [update\_file\_data](#spoon_ai.backends.utils.update_file_data)
  * [format\_read\_response](#spoon_ai.backends.utils.format_read_response)
  * [perform\_string\_replacement](#spoon_ai.backends.utils.perform_string_replacement)
  * [glob\_match](#spoon_ai.backends.utils.glob_match)
  * [glob\_search\_files](#spoon_ai.backends.utils.glob_search_files)
  * [grep\_matches\_from\_files](#spoon_ai.backends.utils.grep_matches_from_files)
  * [format\_grep\_results](#spoon_ai.backends.utils.format_grep_results)
  * [truncate\_if\_too\_long](#spoon_ai.backends.utils.truncate_if_too_long)
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
* [spoon\_ai.backends.protocol](#spoon_ai.backends.protocol)
  * [FileOperationError](#spoon_ai.backends.protocol.FileOperationError)
  * [FileDownloadResponse](#spoon_ai.backends.protocol.FileDownloadResponse)
  * [FileUploadResponse](#spoon_ai.backends.protocol.FileUploadResponse)
  * [FileInfo](#spoon_ai.backends.protocol.FileInfo)
  * [GrepMatch](#spoon_ai.backends.protocol.GrepMatch)
  * [WriteResult](#spoon_ai.backends.protocol.WriteResult)
  * [EditResult](#spoon_ai.backends.protocol.EditResult)
  * [ExecuteResponse](#spoon_ai.backends.protocol.ExecuteResponse)
    * [output](#spoon_ai.backends.protocol.ExecuteResponse.output)
    * [exit\_code](#spoon_ai.backends.protocol.ExecuteResponse.exit_code)
    * [truncated](#spoon_ai.backends.protocol.ExecuteResponse.truncated)
  * [BackendRuntime](#spoon_ai.backends.protocol.BackendRuntime)
    * [store](#spoon_ai.backends.protocol.BackendRuntime.store)
    * [get\_state](#spoon_ai.backends.protocol.BackendRuntime.get_state)
    * [set\_state](#spoon_ai.backends.protocol.BackendRuntime.set_state)
  * [BackendProtocol](#spoon_ai.backends.protocol.BackendProtocol)
    * [ls\_info](#spoon_ai.backends.protocol.BackendProtocol.ls_info)
    * [als\_info](#spoon_ai.backends.protocol.BackendProtocol.als_info)
    * [read](#spoon_ai.backends.protocol.BackendProtocol.read)
    * [aread](#spoon_ai.backends.protocol.BackendProtocol.aread)
    * [write](#spoon_ai.backends.protocol.BackendProtocol.write)
    * [awrite](#spoon_ai.backends.protocol.BackendProtocol.awrite)
    * [edit](#spoon_ai.backends.protocol.BackendProtocol.edit)
    * [aedit](#spoon_ai.backends.protocol.BackendProtocol.aedit)
    * [grep\_raw](#spoon_ai.backends.protocol.BackendProtocol.grep_raw)
    * [agrep\_raw](#spoon_ai.backends.protocol.BackendProtocol.agrep_raw)
    * [glob\_info](#spoon_ai.backends.protocol.BackendProtocol.glob_info)
    * [aglob\_info](#spoon_ai.backends.protocol.BackendProtocol.aglob_info)
    * [upload\_files](#spoon_ai.backends.protocol.BackendProtocol.upload_files)
    * [aupload\_files](#spoon_ai.backends.protocol.BackendProtocol.aupload_files)
    * [download\_files](#spoon_ai.backends.protocol.BackendProtocol.download_files)
    * [adownload\_files](#spoon_ai.backends.protocol.BackendProtocol.adownload_files)
  * [SandboxBackendProtocol](#spoon_ai.backends.protocol.SandboxBackendProtocol)
    * [execute](#spoon_ai.backends.protocol.SandboxBackendProtocol.execute)
    * [aexecute](#spoon_ai.backends.protocol.SandboxBackendProtocol.aexecute)
    * [id](#spoon_ai.backends.protocol.SandboxBackendProtocol.id)
  * [BackendFactory](#spoon_ai.backends.protocol.BackendFactory)
  * [BACKEND\_TYPES](#spoon_ai.backends.protocol.BACKEND_TYPES)
* [spoon\_ai.backends.composite](#spoon_ai.backends.composite)
  * [CompositeBackend](#spoon_ai.backends.composite.CompositeBackend)
    * [\_\_init\_\_](#spoon_ai.backends.composite.CompositeBackend.__init__)
    * [ls\_info](#spoon_ai.backends.composite.CompositeBackend.ls_info)
    * [als\_info](#spoon_ai.backends.composite.CompositeBackend.als_info)
    * [read](#spoon_ai.backends.composite.CompositeBackend.read)
    * [aread](#spoon_ai.backends.composite.CompositeBackend.aread)
    * [write](#spoon_ai.backends.composite.CompositeBackend.write)
    * [awrite](#spoon_ai.backends.composite.CompositeBackend.awrite)
    * [edit](#spoon_ai.backends.composite.CompositeBackend.edit)
    * [aedit](#spoon_ai.backends.composite.CompositeBackend.aedit)
    * [grep\_raw](#spoon_ai.backends.composite.CompositeBackend.grep_raw)
    * [agrep\_raw](#spoon_ai.backends.composite.CompositeBackend.agrep_raw)
    * [glob\_info](#spoon_ai.backends.composite.CompositeBackend.glob_info)
    * [aglob\_info](#spoon_ai.backends.composite.CompositeBackend.aglob_info)
    * [execute](#spoon_ai.backends.composite.CompositeBackend.execute)
    * [aexecute](#spoon_ai.backends.composite.CompositeBackend.aexecute)
    * [upload\_files](#spoon_ai.backends.composite.CompositeBackend.upload_files)
    * [aupload\_files](#spoon_ai.backends.composite.CompositeBackend.aupload_files)
    * [download\_files](#spoon_ai.backends.composite.CompositeBackend.download_files)
    * [adownload\_files](#spoon_ai.backends.composite.CompositeBackend.adownload_files)
  * [create\_composite\_backend](#spoon_ai.backends.composite.create_composite_backend)
* [spoon\_ai.backends.store](#spoon_ai.backends.store)
  * [BaseStore](#spoon_ai.backends.store.BaseStore)
    * [get](#spoon_ai.backends.store.BaseStore.get)
    * [put](#spoon_ai.backends.store.BaseStore.put)
    * [delete](#spoon_ai.backends.store.BaseStore.delete)
    * [search](#spoon_ai.backends.store.BaseStore.search)
  * [InMemoryStore](#spoon_ai.backends.store.InMemoryStore)
  * [SQLiteStore](#spoon_ai.backends.store.SQLiteStore)
  * [StoreBackend](#spoon_ai.backends.store.StoreBackend)
    * [\_\_init\_\_](#spoon_ai.backends.store.StoreBackend.__init__)
    * [ls\_info](#spoon_ai.backends.store.StoreBackend.ls_info)
    * [read](#spoon_ai.backends.store.StoreBackend.read)
    * [write](#spoon_ai.backends.store.StoreBackend.write)
    * [edit](#spoon_ai.backends.store.StoreBackend.edit)
    * [grep\_raw](#spoon_ai.backends.store.StoreBackend.grep_raw)
    * [glob\_info](#spoon_ai.backends.store.StoreBackend.glob_info)
    * [upload\_files](#spoon_ai.backends.store.StoreBackend.upload_files)
    * [download\_files](#spoon_ai.backends.store.StoreBackend.download_files)
  * [create\_store\_backend](#spoon_ai.backends.store.create_store_backend)
* [spoon\_ai.backends.filesystem](#spoon_ai.backends.filesystem)
  * [FilesystemBackend](#spoon_ai.backends.filesystem.FilesystemBackend)
    * [\_\_init\_\_](#spoon_ai.backends.filesystem.FilesystemBackend.__init__)
    * [ls\_info](#spoon_ai.backends.filesystem.FilesystemBackend.ls_info)
    * [read](#spoon_ai.backends.filesystem.FilesystemBackend.read)
    * [write](#spoon_ai.backends.filesystem.FilesystemBackend.write)
    * [edit](#spoon_ai.backends.filesystem.FilesystemBackend.edit)
    * [grep\_raw](#spoon_ai.backends.filesystem.FilesystemBackend.grep_raw)
    * [glob\_info](#spoon_ai.backends.filesystem.FilesystemBackend.glob_info)
    * [upload\_files](#spoon_ai.backends.filesystem.FilesystemBackend.upload_files)
    * [download\_files](#spoon_ai.backends.filesystem.FilesystemBackend.download_files)
  * [create\_filesystem\_backend](#spoon_ai.backends.filesystem.create_filesystem_backend)

<a id="spoon_ai.backends"></a>

# Module `spoon_ai.backends`

Pluggable Memory Backends for Deep Agents.

This module provides a unified interface for file operations across different
storage backends. Compatible with LangChain DeepAgents backend architecture.

Backend Types:
- StateBackend: Ephemeral in-memory storage (per-thread)
- FilesystemBackend: Real filesystem access (optionally sandboxed)
- StoreBackend: Persistent key-value storage (cross-thread)
- CompositeBackend: Route operations to multiple backends by path prefix
- BaseSandbox: Abstract base class for remote sandboxes (Docker, Modal, etc.)

Example Usage:
    ```python
    from spoon_ai.backends import (
        StateBackend,
        FilesystemBackend,
        StoreBackend,
        CompositeBackend,
        BaseSandbox,
        BackendRuntime,
        create_state_backend,
        create_filesystem_backend,
        create_store_backend,
        create_composite_backend,
    )

    # 1. Simple ephemeral storage
    backend, runtime = create_state_backend()
    backend.write("/notes.txt", "Hello!")
    print(backend.read("/notes.txt"))

    # 2. Real filesystem access
    backend = create_filesystem_backend(
        root_dir="/workspace",
        virtual_mode=True  # Sandbox to root_dir
    )

    # 3. Persistent database storage
    backend = create_store_backend(db_path="agent.db")

    # 4. Mixed storage with routing
    state_backend, _ = create_state_backend()
    store_backend = create_store_backend()
    fs_backend = create_filesystem_backend()

    backend = create_composite_backend(
        default=state_backend,
        routes={
            "/persistent/": store_backend,
            "/local/": fs_backend,
        }
    )

    # Operations route automatically
    backend.write("/temp.txt", "Ephemeral")         # -> state
    backend.write("/persistent/note.txt", "Saved")  # -> database
    backend.write("/local/code.py", "# Code")       # -> filesystem

    # 5. Remote sandbox (Docker, Modal, etc.)
    class DockerSandbox(BaseSandbox):
        def __init__(self, container_id: str):
            self._container_id = container_id

        @property
        def id(self) -> str:
            return f"docker-{self._container_id}"

        def execute(self, command: str) -> ExecuteResponse:
            # Run command in Docker container
            result = docker_exec(self._container_id, command)
            return ExecuteResponse(output=result.output, exit_code=result.exit_code)

    sandbox = DockerSandbox("my-container")
    sandbox.write("/app/config.json", '{"key": "value"}')
    content = sandbox.read("/app/config.json")
    ```

<a id="spoon_ai.backends.sandbox"></a>

# Module `spoon_ai.backends.sandbox`

Base sandbox implementation with execute() as the only required abstract method.

This module provides a base class that implements all SandboxBackendProtocol
methods using shell commands executed via execute(). Concrete implementations
only need to implement the execute() method.

This design allows for remote sandboxes (Docker, Modal, Daytona, etc.) where
you just implement execute() to run commands remotely.

Compatible with LangChain DeepAgents BaseSandbox interface.

Usage:
    # For local execution
    class LocalSandbox(BaseSandbox):
        def execute(self, command: str) -&gt; ExecuteResponse:
            # Run locally
            result = subprocess.run(command, shell=True, ...)
            return ExecuteResponse(output=result.stdout, exit_code=result.returncode)

    # For remote execution (Docker, Modal, etc.)
    class DockerSandbox(BaseSandbox):
        def execute(self, command: str) -&gt; ExecuteResponse:
            # Run in Docker container
            result = docker_client.containers.run(self.image, command, ...)
            return ExecuteResponse(output=result, exit_code=0)

<a id="spoon_ai.backends.sandbox.BaseSandbox"></a>

## `BaseSandbox` Objects

```python
class BaseSandbox(SandboxBackendProtocol, ABC)
```

Base sandbox implementation with execute() as abstract method.

This class provides default implementations for all protocol methods
using shell commands. Subclasses only need to implement:
- execute(): Run a shell command and return output
- id: Unique identifier property
- upload_files(): Upload files to sandbox (optional, has default)
- download_files(): Download files from sandbox (optional, has default)

The default implementations use Python commands executed via execute()
to perform file operations, making this suitable for remote sandboxes
where you only have shell access.

**Example**:

    ```python
    class DockerSandbox(BaseSandbox):
        def __init__(self, container_id: str):
            self._container_id = container_id

        @property
        def id(self) -> str:
            return f"docker-{self._container_id}"

        def execute(self, command: str) -> ExecuteResponse:
            result = docker_exec(self._container_id, command)
            return ExecuteResponse(
                output=result.output,
                exit_code=result.exit_code
            )
    ```

<a id="spoon_ai.backends.sandbox.BaseSandbox.execute"></a>

#### `execute`

```python
@abstractmethod
def execute(command: str) -> ExecuteResponse
```

Execute a command in the sandbox and return ExecuteResponse.

This is the core method that subclasses must implement.
All other file operations are built on top of this.

**Arguments**:

- `command` - Full shell command string to execute.
  

**Returns**:

  ExecuteResponse with combined output, exit code, and truncation flag.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async version of execute.

<a id="spoon_ai.backends.sandbox.BaseSandbox.id"></a>

#### `id`

```python
@property
@abstractmethod
def id() -> str
```

Unique identifier for the sandbox backend.

<a id="spoon_ai.backends.sandbox.BaseSandbox.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> List[FileInfo]
```

List directory contents using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences using shell command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> List[GrepMatch]
```

Search for pattern in files using grep command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Find files matching pattern using glob command.

<a id="spoon_ai.backends.sandbox.BaseSandbox.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Upload multiple files to the sandbox.

Default implementation uses base64 encoding via execute().
Override for more efficient implementations.

**Arguments**:

- `files` - List of (path, content) tuples
  

**Returns**:

  List of FileUploadResponse for each file

<a id="spoon_ai.backends.sandbox.BaseSandbox.download_files"></a>

#### `download_files`

```python
def download_files(paths: List[str]) -> List[FileDownloadResponse]
```

Download multiple files from the sandbox.

Default implementation uses base64 encoding via execute().
Override for more efficient implementations.

**Arguments**:

- `paths` - List of file paths to download
  

**Returns**:

  List of FileDownloadResponse for each file

<a id="spoon_ai.backends.sandbox.BaseSandbox.als_info"></a>

#### `als_info`

```python
async def als_info(path: str) -> List[FileInfo]
```

Async version of ls_info.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aread"></a>

#### `aread`

```python
async def aread(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Async version of read.

<a id="spoon_ai.backends.sandbox.BaseSandbox.awrite"></a>

#### `awrite`

```python
async def awrite(file_path: str, content: str) -> WriteResult
```

Async version of write.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aedit"></a>

#### `aedit`

```python
async def aedit(file_path: str,
                old_string: str,
                new_string: str,
                replace_all: bool = False) -> EditResult
```

Async version of edit.

<a id="spoon_ai.backends.sandbox.BaseSandbox.agrep_raw"></a>

#### `agrep_raw`

```python
async def agrep_raw(pattern: str,
                    path: Optional[str] = None,
                    glob: Optional[str] = None) -> List[GrepMatch]
```

Async version of grep_raw.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aglob_info"></a>

#### `aglob_info`

```python
async def aglob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Async version of glob_info.

<a id="spoon_ai.backends.sandbox.BaseSandbox.aupload_files"></a>

#### `aupload_files`

```python
async def aupload_files(
        files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Async version of upload_files.

<a id="spoon_ai.backends.sandbox.BaseSandbox.adownload_files"></a>

#### `adownload_files`

```python
async def adownload_files(paths: List[str]) -> List[FileDownloadResponse]
```

Async version of download_files.

<a id="spoon_ai.backends.utils"></a>

# Module `spoon_ai.backends.utils`

Shared utility functions for memory backend implementations.

This module contains both user-facing string formatters and structured
helpers used by backends and the composite router.

<a id="spoon_ai.backends.utils.sanitize_tool_call_id"></a>

#### `sanitize_tool_call_id`

```python
def sanitize_tool_call_id(tool_call_id: str) -> str
```

Sanitize tool_call_id to prevent path traversal.

Replaces dangerous characters (., /, \) with underscores.

<a id="spoon_ai.backends.utils.validate_path"></a>

#### `validate_path`

```python
def validate_path(path: Optional[str]) -> str
```

Validate and normalize a path.

**Arguments**:

- `path` - Path to validate
  

**Returns**:

  Normalized path starting with /
  

**Raises**:

- `ValueError` - If path is invalid

<a id="spoon_ai.backends.utils.format_content_with_line_numbers"></a>

#### `format_content_with_line_numbers`

```python
def format_content_with_line_numbers(content: str | list[str],
                                     start_line: int = 1) -> str
```

Format file content with line numbers (cat -n style).

**Arguments**:

- `content` - File content as string or list of lines
- `start_line` - Starting line number (default: 1)
  

**Returns**:

  Formatted content with line numbers

<a id="spoon_ai.backends.utils.check_empty_content"></a>

#### `check_empty_content`

```python
def check_empty_content(content: str) -> Optional[str]
```

Check if content is empty and return warning message.

**Arguments**:

- `content` - Content to check
  

**Returns**:

  Warning message if empty, None otherwise

<a id="spoon_ai.backends.utils.file_data_to_string"></a>

#### `file_data_to_string`

```python
def file_data_to_string(file_data: dict[str, Any]) -> str
```

Convert FileData to plain string content.

**Arguments**:

- `file_data` - FileData dict with 'content' key
  

**Returns**:

  Content as string with lines joined by newlines

<a id="spoon_ai.backends.utils.create_file_data"></a>

#### `create_file_data`

```python
def create_file_data(content: str,
                     created_at: Optional[str] = None) -> dict[str, Any]
```

Create a FileData object with timestamps.

**Arguments**:

- `content` - File content as string
- `created_at` - Optional creation timestamp (ISO format)
  

**Returns**:

  FileData dict with content and timestamps

<a id="spoon_ai.backends.utils.update_file_data"></a>

#### `update_file_data`

```python
def update_file_data(file_data: dict[str, Any],
                     content: str) -> dict[str, Any]
```

Update FileData with new content, preserving creation timestamp.

**Arguments**:

- `file_data` - Existing FileData dict
- `content` - New content as string
  

**Returns**:

  Updated FileData dict

<a id="spoon_ai.backends.utils.format_read_response"></a>

#### `format_read_response`

```python
def format_read_response(file_data: dict[str, Any], offset: int,
                         limit: int) -> str
```

Format file data for read response with line numbers.

**Arguments**:

- `file_data` - FileData dict
- `offset` - Line offset (0-indexed)
- `limit` - Maximum number of lines
  

**Returns**:

  Formatted content or error message

<a id="spoon_ai.backends.utils.perform_string_replacement"></a>

#### `perform_string_replacement`

```python
def perform_string_replacement(content: str, old_string: str, new_string: str,
                               replace_all: bool) -> tuple[str, int] | str
```

Perform string replacement with occurrence validation.

**Arguments**:

- `content` - Original content
- `old_string` - String to replace
- `new_string` - Replacement string
- `replace_all` - Whether to replace all occurrences
  

**Returns**:

  Tuple of (new_content, occurrences) on success, or error message string

<a id="spoon_ai.backends.utils.glob_match"></a>

#### `glob_match`

```python
def glob_match(path: str, pattern: str) -> bool
```

Match a path against a glob pattern.

**Arguments**:

- `path` - File path to match
- `pattern` - Glob pattern
  

**Returns**:

  True if path matches pattern

<a id="spoon_ai.backends.utils.glob_search_files"></a>

#### `glob_search_files`

```python
def glob_search_files(files: dict[str, Any],
                      pattern: str,
                      path: str = "/") -> str
```

Search files dict for paths matching glob pattern.

**Arguments**:

- `files` - Dictionary of file paths to FileData.
- `pattern` - Glob pattern (e.g., "*.py", "**/*.ts").
- `path` - Base path to search from.
  

**Returns**:

  Newline-separated file paths, sorted by modification time.
  Returns "No files found" if no matches.

<a id="spoon_ai.backends.utils.grep_matches_from_files"></a>

#### `grep_matches_from_files`

```python
def grep_matches_from_files(
        files: dict[str, Any],
        pattern: str,
        path: Optional[str] = None,
        glob_pattern: Optional[str] = None) -> list[GrepMatch] | str
```

Return structured grep matches from an in-memory files mapping.

**Arguments**:

- `files` - Dictionary of file paths to FileData.
- `pattern` - Regex pattern to search for.
- `path` - Base path to search from.
- `glob_pattern` - Optional glob pattern to filter files.
  

**Returns**:

  List of GrepMatch on success, or error string.

<a id="spoon_ai.backends.utils.format_grep_results"></a>

#### `format_grep_results`

```python
def format_grep_results(
        results: dict[str, list[tuple[int, str]]],
        output_mode: Literal["files_with_matches", "content", "count"]) -> str
```

Format grep search results based on output mode.

**Arguments**:

- `results` - Dictionary mapping file paths to list of (line_num, line_content) tuples
- `output_mode` - Output format
  

**Returns**:

  Formatted string output

<a id="spoon_ai.backends.utils.truncate_if_too_long"></a>

#### `truncate_if_too_long`

```python
def truncate_if_too_long(result: list[str] | str) -> list[str] | str
```

Truncate result if it exceeds token limit.

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

<a id="spoon_ai.backends.protocol"></a>

# Module `spoon_ai.backends.protocol`

Protocol definition for pluggable memory backends.

This module defines the BackendProtocol that all backend implementations
must follow. Backends can store files in different locations (state, filesystem,
database, etc.) and provide a uniform interface for file operations.

Compatible with LangChain DeepAgents backend interface.

Backend Types:
- StateBackend: Ephemeral in-memory storage (per-thread)
- FilesystemBackend: Real filesystem access (optionally sandboxed)
- StoreBackend: Persistent key-value storage (cross-thread)
- CompositeBackend: Route operations to multiple backends by path prefix
- BaseSandbox: Abstract base for remote sandboxes (Docker, Modal, etc.)

**Example**:

    ```python
    from spoon_ai.backends import (
        StateBackend,
        FilesystemBackend,
        create_state_backend,
    )

    # Create a state backend
    backend, runtime = create_state_backend()

    # Write a file
    result = backend.write("/notes.txt", "Hello, World!")
    if result.error:
        print(f"Error: {result.error}")
    else:
        print(f"Created: {result.path}")

    # Read it back
    content = backend.read("/notes.txt")
    print(content)
    ```

<a id="spoon_ai.backends.protocol.FileOperationError"></a>

#### `FileOperationError`

Standardized error codes for file upload/download operations.

These represent common, recoverable errors that an LLM can understand and potentially fix:

- ``file_not_found``: The requested file doesn't exist (download)
- ``permission_denied``: Access denied for the operation
- ``is_directory``: Attempted to download a directory as a file
- ``invalid_path``: Path syntax is malformed or contains invalid characters

**Example**:

    ```python
    response = backend.download_files(["/nonexistent.txt"])
    if response[0].error == "file_not_found":
        print("File does not exist")
    ```

<a id="spoon_ai.backends.protocol.FileDownloadResponse"></a>

## `FileDownloadResponse` Objects

```python
@dataclass
class FileDownloadResponse()
```

Result of a single file download operation.

The response is designed to allow partial success in batch operations.
The errors are standardized using FileOperationError literals
for certain recoverable conditions for use cases that involve
LLMs performing file operations.

**Attributes**:

- `path` - The file path that was requested. Included for easy correlation
  when processing batch results, especially useful for error messages.
- `content` - File contents as bytes on success, None on failure.
- `error` - Standardized error code on failure, None on success.
  Uses FileOperationError literal for structured, LLM-actionable error reporting.
  

**Examples**:

  &gt;&gt;&gt; # Success
  &gt;&gt;&gt; FileDownloadResponse(path="/app/config.json", content=b"&#123;...&#125;", error=None)
  &gt;&gt;&gt; # Failure
  &gt;&gt;&gt; FileDownloadResponse(path="/wrong/path.txt", content=None, error="file_not_found")

<a id="spoon_ai.backends.protocol.FileUploadResponse"></a>

## `FileUploadResponse` Objects

```python
@dataclass
class FileUploadResponse()
```

Result of a single file upload operation.

The response is designed to allow partial success in batch operations.
The errors are standardized using FileOperationError literals
for certain recoverable conditions for use cases that involve
LLMs performing file operations.

**Attributes**:

- `path` - The file path that was requested. Included for easy correlation
  when processing batch results and for clear error messages.
- `error` - Standardized error code on failure, None on success.
  Uses FileOperationError literal for structured, LLM-actionable error reporting.
  

**Examples**:

  &gt;&gt;&gt; # Success
  &gt;&gt;&gt; FileUploadResponse(path="/app/data.txt", error=None)
  &gt;&gt;&gt; # Failure
  &gt;&gt;&gt; FileUploadResponse(path="/readonly/file.txt", error="permission_denied")

<a id="spoon_ai.backends.protocol.FileInfo"></a>

## `FileInfo` Objects

```python
class FileInfo(TypedDict)
```

Structured file listing info.

Minimal contract used across backends. Only "path" is required.
Other fields are best-effort and may be absent depending on backend.

**Attributes**:

- `path` - Absolute file path (required)
- `is_dir` - True if directory (optional)
- `size` - File size in bytes (optional, approximate)
- `modified_at` - ISO 8601 timestamp if known (optional)
  

**Example**:

    ```python
    files = backend.ls_info("/workspace")
    for f in files:
        print(f"Path: {f['path']}, Is Dir: {f.get('is_dir', False)}")
    ```

<a id="spoon_ai.backends.protocol.GrepMatch"></a>

## `GrepMatch` Objects

```python
class GrepMatch(TypedDict)
```

Structured grep match entry.

Represents a single match from a grep search operation.

**Attributes**:

- `path` - Absolute file path where match was found
- `line` - Line number (1-indexed)
- `text` - Full line content containing the match
  

**Example**:

    ```python
    matches = backend.grep_raw("TODO", path="/src")
    for m in matches:
        print(f"{m['path']}:{m['line']}: {m['text']}")
    ```

<a id="spoon_ai.backends.protocol.WriteResult"></a>

## `WriteResult` Objects

```python
@dataclass
class WriteResult()
```

Result from backend write operations.

**Attributes**:

- `error` - Error message on failure, None on success.
- `path` - Absolute path of written file, None on failure.
- `files_update` - State update dict for checkpoint backends, None for external storage.
  Checkpoint backends populate this with &#123;file_path: file_data&#125; for state sync.
  External backends set None (already persisted to disk/S3/database/etc).
  

**Examples**:

  &gt;&gt;&gt; # Checkpoint storage (state backend)
  &gt;&gt;&gt; WriteResult(path="/f.txt", files_update=&#123;"/f.txt": &#123;...&#125;&#125;)
  &gt;&gt;&gt; # External storage (filesystem backend)
  &gt;&gt;&gt; WriteResult(path="/f.txt", files_update=None)
  &gt;&gt;&gt; # Error
  &gt;&gt;&gt; WriteResult(error="File '/f.txt' already exists")

<a id="spoon_ai.backends.protocol.EditResult"></a>

## `EditResult` Objects

```python
@dataclass
class EditResult()
```

Result from backend edit operations.

**Attributes**:

- `error` - Error message on failure, None on success.
- `path` - Absolute path of edited file, None on failure.
- `files_update` - State update dict for checkpoint backends, None for external storage.
  Checkpoint backends populate this with &#123;file_path: file_data&#125; for state sync.
  External backends set None (already persisted to disk/S3/database/etc).
- `occurrences` - Number of replacements made, None on failure.
  

**Examples**:

  &gt;&gt;&gt; # Checkpoint storage with single replacement
  &gt;&gt;&gt; EditResult(path="/f.txt", files_update=&#123;"/f.txt": &#123;...&#125;&#125;, occurrences=1)
  &gt;&gt;&gt; # External storage with replace_all
  &gt;&gt;&gt; EditResult(path="/f.txt", files_update=None, occurrences=5)
  &gt;&gt;&gt; # Error - string not found
  &gt;&gt;&gt; EditResult(error="String not found in file")
  &gt;&gt;&gt; # Error - multiple occurrences without replace_all
  &gt;&gt;&gt; EditResult(error="String appears 3 times. Use replace_all=True")

<a id="spoon_ai.backends.protocol.ExecuteResponse"></a>

## `ExecuteResponse` Objects

```python
@dataclass
class ExecuteResponse()
```

Result of code execution.

Simplified schema optimized for LLM consumption.

**Attributes**:

- `output` - Combined stdout and stderr output of the executed command.
- `exit_code` - The process exit code. 0 indicates success, non-zero indicates failure.
- `truncated` - Whether the output was truncated due to backend limitations.
  

**Example**:

    ```python
    result = sandbox.execute("ls -la /workspace")
    if result.exit_code == 0:
        print(result.output)
    else:
        print(f"Command failed with exit code {result.exit_code}")
    ```

<a id="spoon_ai.backends.protocol.ExecuteResponse.output"></a>

#### `output`

Combined stdout and stderr output of the executed command.

<a id="spoon_ai.backends.protocol.ExecuteResponse.exit_code"></a>

#### `exit_code`

The process exit code. 0 indicates success, non-zero indicates failure.

<a id="spoon_ai.backends.protocol.ExecuteResponse.truncated"></a>

#### `truncated`

Whether the output was truncated due to backend limitations.

<a id="spoon_ai.backends.protocol.BackendRuntime"></a>

## `BackendRuntime` Objects

```python
@dataclass
class BackendRuntime()
```

Runtime context for backend operations.

Provides access to agent state and configuration without
exposing the entire agent instance. This is an independent
implementation that doesn't depend on LangChain's ToolRuntime.

**Attributes**:

- `state` - Mutable state dictionary for the current execution.
- `config` - Immutable configuration dictionary.
- `store` - Optional persistent store for cross-session data.
  

**Example**:

    ```python
    runtime = BackendRuntime(
        state={"files": {}},
        config={"max_file_size": 1024 * 1024},
    )

    # Access state
    files = runtime.get_state("files", {})

    # Update state
    runtime.set_state("last_read", "/notes.txt")
    ```

<a id="spoon_ai.backends.protocol.BackendRuntime.store"></a>

#### `store`

Optional persistent store

<a id="spoon_ai.backends.protocol.BackendRuntime.get_state"></a>

#### `get_state`

```python
def get_state(key: str, default: Any = None) -> Any
```

Get state value by key.

**Arguments**:

- `key` - State key to retrieve.
- `default` - Default value if key not found.
  

**Returns**:

  State value or default.

<a id="spoon_ai.backends.protocol.BackendRuntime.set_state"></a>

#### `set_state`

```python
def set_state(key: str, value: Any) -> None
```

Set state value.

**Arguments**:

- `key` - State key to set.
- `value` - Value to store.

<a id="spoon_ai.backends.protocol.BackendProtocol"></a>

## `BackendProtocol` Objects

```python
class BackendProtocol(abc.ABC)
```

Protocol for pluggable memory backends (single, unified).

Backends can store files in different locations (state, filesystem, database, etc.)
and provide a uniform interface for file operations.

All file data is represented as dicts with the following structure::

    &#123;
        "content": list[str],      # Lines of text content
        "created_at": str,         # ISO format timestamp
        "modified_at": str,        # ISO format timestamp
    &#125;

Implementing a Backend:
    To create a custom backend, subclass BackendProtocol and implement
    all abstract methods::

        class MyBackend(BackendProtocol):
            def ls_info(self, path: str) -&gt; list[FileInfo]:
                # List directory contents
                ...

            def read(self, file_path: str, offset: int = 0, limit: int = 2000) -&gt; str:
                # Read file with line numbers
                ...

            # ... implement other abstract methods

<a id="spoon_ai.backends.protocol.BackendProtocol.ls_info"></a>

#### `ls_info`

```python
@abc.abstractmethod
def ls_info(path: str) -> List[FileInfo]
```

List all files in a directory with metadata.

**Arguments**:

- `path` - Absolute path to the directory to list. Must start with '/'.
  

**Returns**:

  List of FileInfo dicts containing file metadata:
  
  - ``path`` (required): Absolute file path
  - ``is_dir`` (optional): True if directory
  - ``size`` (optional): File size in bytes
  - ``modified_at`` (optional): ISO 8601 timestamp
  

**Example**:

    ```python
    files = backend.ls_info("/workspace/src")
    for f in files:
        if f.get("is_dir"):
            print(f"📁 {f['path']}")
        else:
            print(f"📄 {f['path']} ({f.get('size', '?')} bytes)")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.als_info"></a>

#### `als_info`

```python
async def als_info(path: str) -> List[FileInfo]
```

Async version of ls_info.

<a id="spoon_ai.backends.protocol.BackendProtocol.read"></a>

#### `read`

```python
@abc.abstractmethod
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

**Arguments**:

- `file_path` - Absolute path to the file to read. Must start with '/'.
- `offset` - Line number to start reading from (0-indexed). Default: 0.
- `limit` - Maximum number of lines to read. Default: 2000.
  

**Returns**:

  String containing file content formatted with line numbers (cat -n format),
  starting at line 1. Lines longer than 2000 characters are truncated.
  
  Returns an error string if the file doesn't exist or can't be read.
  

**Notes**:

  - Use pagination (offset/limit) for large files to avoid context overflow
  - First scan: ``read(path, limit=100)`` to see file structure
  - Read more: ``read(path, offset=100, limit=200)`` for next section
  - ALWAYS read a file before editing it
  - If file exists but is empty, you'll receive a system reminder warning
  

**Example**:

    ```python
    # Read first 100 lines
    content = backend.read("/workspace/main.py", limit=100)
    print(content)
    # Output:
    #      1	import os
    #      2	import sys
    #      3
    #      4	def main():
    #      ...
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aread"></a>

#### `aread`

```python
async def aread(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Async version of read.

<a id="spoon_ai.backends.protocol.BackendProtocol.write"></a>

#### `write`

```python
@abc.abstractmethod
def write(file_path: str, content: str) -> WriteResult
```

Write content to a new file in the filesystem, error if file exists.

**Arguments**:

- `file_path` - Absolute path where the file should be created.
  Must start with '/'.
- `content` - String content to write to the file.
  

**Returns**:

  WriteResult with:
  - ``path``: Absolute path of created file (on success)
  - ``error``: Error message (on failure)
  - ``files_update``: State dict for checkpoint backends
  

**Notes**:

  This method creates NEW files only. To modify existing files,
  use the ``edit()`` method instead.
  

**Example**:

    ```python
    result = backend.write("/workspace/hello.txt", "Hello, World!")
    if result.error:
        print(f"Failed: {result.error}")
    else:
        print(f"Created: {result.path}")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.awrite"></a>

#### `awrite`

```python
async def awrite(file_path: str, content: str) -> WriteResult
```

Async version of write.

<a id="spoon_ai.backends.protocol.BackendProtocol.edit"></a>

#### `edit`

```python
@abc.abstractmethod
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Perform exact string replacements in an existing file.

**Arguments**:

- `file_path` - Absolute path to the file to edit. Must start with '/'.
- `old_string` - Exact string to search for and replace.
  Must match exactly including whitespace and indentation.
- `new_string` - String to replace old_string with.
  Must be different from old_string.
- `replace_all` - If True, replace all occurrences. If False (default),
  old_string must be unique in the file or the edit fails.
  

**Returns**:

  EditResult with:
  - ``path``: Absolute path of edited file (on success)
  - ``occurrences``: Number of replacements made (on success)
  - ``error``: Error message (on failure)
  - ``files_update``: State dict for checkpoint backends
  

**Notes**:

  - ALWAYS read the file first to understand its current content
  - The old_string must match EXACTLY, including whitespace
  - If old_string appears multiple times and replace_all=False, the edit fails
  

**Example**:

    ```python
    # Replace a single occurrence
    result = backend.edit(
        "/workspace/config.py",
        old_string="DEBUG = False",
        new_string="DEBUG = True"
    )

    # Replace all occurrences
    result = backend.edit(
        "/workspace/code.py",
        old_string="old_function",
        new_string="new_function",
        replace_all=True
    )
    print(f"Replaced {result.occurrences} occurrences")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aedit"></a>

#### `aedit`

```python
async def aedit(file_path: str,
                old_string: str,
                new_string: str,
                replace_all: bool = False) -> EditResult
```

Async version of edit.

<a id="spoon_ai.backends.protocol.BackendProtocol.grep_raw"></a>

#### `grep_raw`

```python
@abc.abstractmethod
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> List[GrepMatch] | str
```

Search for a literal text pattern in files.

**Arguments**:

- `pattern` - Literal string to search for (NOT regex).
  Performs exact substring matching within file content.
- `Example` - "TODO" matches any line containing "TODO"
  
- `path` - Optional directory path to search in.
  If None, searches in current working directory.
- `Example` - "/workspace/src"
  
- `glob` - Optional glob pattern to filter which FILES to search.
  Filters by filename/path, not content.
  Supports standard glob wildcards:
  
  - ``*`` matches any characters in filename
  - ``**`` matches any directories recursively
  - ``?`` matches single character
  - ``[abc]`` matches one character from set
  

**Examples**:

  - ``"*.py"`` - only search Python files
  - ``"**/*.txt"`` - search all .txt files recursively
  - ``"src/**/*.js"`` - search JS files under src/
  - ``"test[0-9].txt"`` - search test0.txt, test1.txt, etc.
  

**Returns**:

  On success: list[GrepMatch] with structured results containing:
  - path: Absolute file path
  - line: Line number (1-indexed)
  - text: Full line content containing the match
  
  On error: str with error message (e.g., invalid path, permission denied)
  

**Example**:

    ```python
    # Search for TODOs in Python files
    matches = backend.grep_raw("TODO", path="/workspace", glob="*.py")
    for m in matches:
        print(f"{m['path']}:{m['line']}: {m['text']}")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.agrep_raw"></a>

#### `agrep_raw`

```python
async def agrep_raw(pattern: str,
                    path: Optional[str] = None,
                    glob: Optional[str] = None) -> List[GrepMatch] | str
```

Async version of grep_raw.

<a id="spoon_ai.backends.protocol.BackendProtocol.glob_info"></a>

#### `glob_info`

```python
@abc.abstractmethod
def glob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Find files matching a glob pattern.

**Arguments**:

- `pattern` - Glob pattern with wildcards to match file paths.
  Supports standard glob syntax:
  
  - ``*`` matches any characters within a filename/directory
  - ``**`` matches any directories recursively
  - ``?`` matches a single character
  - ``[abc]`` matches one character from set
  
- `path` - Base directory to search from. Default: "/" (root).
  The pattern is applied relative to this path.
  

**Returns**:

  List of FileInfo dicts for matching files.
  

**Example**:

    ```python
    # Find all Python files
    py_files = backend.glob_info("**/*.py", path="/workspace")

    # Find config files in root
    configs = backend.glob_info("*.json", path="/workspace")

    # Find test files
    tests = backend.glob_info("**/test_*.py", path="/workspace")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aglob_info"></a>

#### `aglob_info`

```python
async def aglob_info(pattern: str, path: str = "/") -> List[FileInfo]
```

Async version of glob_info.

<a id="spoon_ai.backends.protocol.BackendProtocol.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Upload multiple files to the backend.

This API is designed to allow developers to use it either directly or
by exposing it to LLMs via custom tools. Default implementation uses
write() for each file.

**Arguments**:

- `files` - List of (path, content) tuples to upload.
  

**Returns**:

  List of FileUploadResponse objects, one per input file.
  Response order matches input order (response[i] for files[i]).
  Check the error field to determine success/failure per file.
  

**Example**:

    ```python
    responses = backend.upload_files([
        ("/app/config.json", b'{"key": "value"}'),
        ("/app/data.txt", b"content here"),
    ])
    for resp in responses:
        if resp.error:
            print(f"Failed {resp.path}: {resp.error}")
        else:
            print(f"Uploaded {resp.path}")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.aupload_files"></a>

#### `aupload_files`

```python
async def aupload_files(
        files: List[Tuple[str, bytes]]) -> List[FileUploadResponse]
```

Async version of upload_files.

<a id="spoon_ai.backends.protocol.BackendProtocol.download_files"></a>

#### `download_files`

```python
def download_files(paths: List[str]) -> List[FileDownloadResponse]
```

Download multiple files from the backend.

This API is designed to allow developers to use it either directly or
by exposing it to LLMs via custom tools. Default implementation uses
read() for each file.

**Arguments**:

- `paths` - List of file paths to download.
  

**Returns**:

  List of FileDownloadResponse objects, one per input path.
  Response order matches input order (response[i] for paths[i]).
  Check the error field to determine success/failure per file.
  

**Example**:

    ```python
    responses = backend.download_files([
        "/app/config.json",
        "/app/data.txt",
    ])
    for resp in responses:
        if resp.error:
            print(f"Failed {resp.path}: {resp.error}")
        else:
            print(f"Downloaded {resp.path}: {len(resp.content)} bytes")
    ```

<a id="spoon_ai.backends.protocol.BackendProtocol.adownload_files"></a>

#### `adownload_files`

```python
async def adownload_files(paths: List[str]) -> List[FileDownloadResponse]
```

Async version of download_files.

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol"></a>

## `SandboxBackendProtocol` Objects

```python
class SandboxBackendProtocol(BackendProtocol)
```

Protocol for sandboxed backends with isolated runtime.

Sandboxed backends run in isolated environments (e.g., separate processes,
containers) and communicate via defined interfaces. This extends
BackendProtocol with command execution capabilities.

Use Cases:
- Docker containers for isolated code execution
- Modal/Daytona for cloud-based sandboxes
- Local subprocess sandboxes
- Remote SSH execution

**Example**:

    ```python
    class DockerSandbox(SandboxBackendProtocol):
        def __init__(self, container_id: str):
            self._container_id = container_id

        @property
        def id(self) -> str:
            return f"docker-{self._container_id}"

        def execute(self, command: str) -> ExecuteResponse:
            result = docker.exec_run(self._container_id, command)
            return ExecuteResponse(
                output=result.output.decode(),
                exit_code=result.exit_code
            )

        # ... implement other methods using execute()
    ```

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol.execute"></a>

#### `execute`

```python
@abc.abstractmethod
def execute(command: str) -> ExecuteResponse
```

Execute a command in the sandbox.

Simplified interface optimized for LLM consumption.

**Arguments**:

- `command` - Full shell command string to execute.
  

**Returns**:

  ExecuteResponse with:
  - ``output``: Combined stdout and stderr
  - ``exit_code``: Process exit code (0 = success)
  - ``truncated``: Whether output was truncated
  

**Example**:

            ```python
            result = sandbox.execute("python3 -c 'print(1+1)'")
            if result.exit_code == 0:
                print(f"Output: {result.output}")  # "2
"
            else:
                print(f"Failed: {result.output}")
            ```

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async version of execute.

<a id="spoon_ai.backends.protocol.SandboxBackendProtocol.id"></a>

#### `id`

```python
@property
@abc.abstractmethod
def id() -> str
```

Unique identifier for this sandbox instance.

Used for tracking, logging, and distinguishing between
multiple sandbox instances.

**Returns**:

  Unique string identifier (e.g., "docker-abc123", "modal-xyz789")

<a id="spoon_ai.backends.protocol.BackendFactory"></a>

#### `BackendFactory`

Factory function that creates a backend from a runtime context.

**Example**:

    ```python
    def my_backend_factory(runtime: BackendRuntime) -> BackendProtocol:
        return StateBackend(runtime)

    # Use with agent
    agent = ToolCallAgent(backend=my_backend_factory, ...)
    ```

<a id="spoon_ai.backends.protocol.BACKEND_TYPES"></a>

#### `BACKEND_TYPES`

Union type for backend specification.

Can be either:
- A BackendProtocol instance (pre-created backend)
- A BackendFactory callable (creates backend from runtime)

<a id="spoon_ai.backends.composite"></a>

# Module `spoon_ai.backends.composite`

CompositeBackend: Route operations to different backends based on path prefix.

Enables mixing multiple storage backends, e.g.:
- /ephemeral/* -&gt; StateBackend (in-memory)
- /persistent/* -&gt; StoreBackend (database)
- /local/* -&gt; FilesystemBackend (filesystem)

<a id="spoon_ai.backends.composite.CompositeBackend"></a>

## `CompositeBackend` Objects

```python
class CompositeBackend()
```

Route file operations to different backends based on path prefix.

The CompositeBackend dispatches operations to specialized backends based
on path prefixes. This allows mixing ephemeral, persistent, and filesystem
storage in a single agent.

**Example**:

    ```python
    from spoon_ai.backends import (
        CompositeBackend,
        StateBackend,
        StoreBackend,
        FilesystemBackend,
        BackendRuntime,
    )

    # Create backends
    runtime = BackendRuntime(state={"files": {}})
    state_backend = StateBackend(runtime)
    store_backend = StoreBackend(SQLiteStore("agent.db"))
    fs_backend = FilesystemBackend(root_dir="/workspace", virtual_mode=True)

    # Create composite with routes
    backend = CompositeBackend(
        default=state_backend,
        routes={
            "/persistent/": store_backend,
            "/local/": fs_backend,
        }
    )

    # Operations route automatically
    backend.write("/temp.txt", "Ephemeral")      # -> state_backend
    backend.write("/persistent/note.txt", "DB")  # -> store_backend
    backend.write("/local/code.py", "File")      # -> fs_backend
    ```

<a id="spoon_ai.backends.composite.CompositeBackend.__init__"></a>

#### `__init__`

```python
def __init__(default: BackendProtocol, routes: dict[str,
                                                    BackendProtocol]) -> None
```

Initialize CompositeBackend.

**Arguments**:

- `default` - Default backend for unmatched paths.
- `routes` - Dict mapping path prefixes to backends.
  Prefixes should end with '/' (e.g., "/persistent/").

<a id="spoon_ai.backends.composite.CompositeBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory.

<a id="spoon_ai.backends.composite.CompositeBackend.als_info"></a>

#### `als_info`

```python
async def als_info(path: str) -> list[FileInfo]
```

Async version of ls_info.

<a id="spoon_ai.backends.composite.CompositeBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content, routing to appropriate backend.

<a id="spoon_ai.backends.composite.CompositeBackend.aread"></a>

#### `aread`

```python
async def aread(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Async version of read.

<a id="spoon_ai.backends.composite.CompositeBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file, routing to appropriate backend.

<a id="spoon_ai.backends.composite.CompositeBackend.awrite"></a>

#### `awrite`

```python
async def awrite(file_path: str, content: str) -> WriteResult
```

Async version of write.

<a id="spoon_ai.backends.composite.CompositeBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file, routing to appropriate backend.

<a id="spoon_ai.backends.composite.CompositeBackend.aedit"></a>

#### `aedit`

```python
async def aedit(file_path: str,
                old_string: str,
                new_string: str,
                replace_all: bool = False) -> EditResult
```

Async version of edit.

<a id="spoon_ai.backends.composite.CompositeBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

<a id="spoon_ai.backends.composite.CompositeBackend.agrep_raw"></a>

#### `agrep_raw`

```python
async def agrep_raw(pattern: str,
                    path: Optional[str] = None,
                    glob: Optional[str] = None) -> list[GrepMatch] | str
```

Async version of grep_raw.

<a id="spoon_ai.backends.composite.CompositeBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Find files matching glob pattern.

<a id="spoon_ai.backends.composite.CompositeBackend.aglob_info"></a>

#### `aglob_info`

```python
async def aglob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Async version of glob_info.

<a id="spoon_ai.backends.composite.CompositeBackend.execute"></a>

#### `execute`

```python
def execute(command: str) -> ExecuteResponse
```

Execute a command via the default backend.

Only works if default backend implements SandboxBackendProtocol.

<a id="spoon_ai.backends.composite.CompositeBackend.aexecute"></a>

#### `aexecute`

```python
async def aexecute(command: str) -> ExecuteResponse
```

Async version of execute.

<a id="spoon_ai.backends.composite.CompositeBackend.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Upload multiple files, batching by backend.

<a id="spoon_ai.backends.composite.CompositeBackend.aupload_files"></a>

#### `aupload_files`

```python
async def aupload_files(
        files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Async version of upload_files.

<a id="spoon_ai.backends.composite.CompositeBackend.download_files"></a>

#### `download_files`

```python
def download_files(paths: list[str]) -> list[FileDownloadResponse]
```

Download multiple files, batching by backend.

<a id="spoon_ai.backends.composite.CompositeBackend.adownload_files"></a>

#### `adownload_files`

```python
async def adownload_files(paths: list[str]) -> list[FileDownloadResponse]
```

Async version of download_files.

<a id="spoon_ai.backends.composite.create_composite_backend"></a>

#### `create_composite_backend`

```python
def create_composite_backend(
        default: BackendProtocol,
        routes: dict[str, BackendProtocol]) -> CompositeBackend
```

Create a CompositeBackend.

**Arguments**:

- `default` - Default backend for unmatched paths.
- `routes` - Dict mapping path prefixes to backends.
  

**Returns**:

  CompositeBackend instance.
  

**Example**:

    ```python
    backend = create_composite_backend(
        default=state_backend,
        routes={
            "/db/": store_backend,
            "/files/": fs_backend,
        }
    )
    ```

<a id="spoon_ai.backends.store"></a>

# Module `spoon_ai.backends.store`

StoreBackend: Persistent key-value store backend (cross-thread).

Uses a simple key-value store interface for persistent, cross-conversation storage.
Files persist across all threads and sessions.

<a id="spoon_ai.backends.store.BaseStore"></a>

## `BaseStore` Objects

```python
class BaseStore(abc.ABC)
```

Abstract base class for persistent stores.

Implementations can use SQLite, Redis, S3, or any other storage backend.

<a id="spoon_ai.backends.store.BaseStore.get"></a>

#### `get`

```python
@abc.abstractmethod
def get(namespace: tuple[str, ...], key: str) -> Optional[dict[str, Any]]
```

Get a value by key.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `key` - The key to retrieve.
  

**Returns**:

  The stored value dict, or None if not found.

<a id="spoon_ai.backends.store.BaseStore.put"></a>

#### `put`

```python
@abc.abstractmethod
def put(namespace: tuple[str, ...], key: str, value: dict[str, Any]) -> None
```

Store a value by key.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `key` - The key to store under.
- `value` - The value dict to store.

<a id="spoon_ai.backends.store.BaseStore.delete"></a>

#### `delete`

```python
@abc.abstractmethod
def delete(namespace: tuple[str, ...], key: str) -> None
```

Delete a value by key.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `key` - The key to delete.

<a id="spoon_ai.backends.store.BaseStore.search"></a>

#### `search`

```python
@abc.abstractmethod
def search(namespace: tuple[str, ...],
           query: Optional[str] = None,
           filter: Optional[dict[str, Any]] = None,
           limit: int = 100,
           offset: int = 0) -> list[dict[str, Any]]
```

Search for values in a namespace.

**Arguments**:

- `namespace` - Hierarchical namespace tuple.
- `query` - Optional search query.
- `filter` - Optional key-value filter.
- `limit` - Maximum results to return.
- `offset` - Number of results to skip.
  

**Returns**:

  List of matching items with 'key' and 'value' fields.

<a id="spoon_ai.backends.store.InMemoryStore"></a>

## `InMemoryStore` Objects

```python
class InMemoryStore(BaseStore)
```

Simple in-memory store implementation.

Useful for testing and development. Data is lost when process exits.

<a id="spoon_ai.backends.store.SQLiteStore"></a>

## `SQLiteStore` Objects

```python
class SQLiteStore(BaseStore)
```

SQLite-based persistent store.

Data persists across process restarts.

<a id="spoon_ai.backends.store.StoreBackend"></a>

## `StoreBackend` Objects

```python
class StoreBackend(BackendProtocol)
```

Backend that stores files in a persistent store (cross-thread).

Uses a key-value store for persistent, cross-conversation storage.
Files are organized via namespaces and persist across all threads.

**Example**:

    ```python
    store = SQLiteStore("agent_files.db")
    backend = StoreBackend(store)

    # Write persists across sessions
    backend.write("/notes.txt", "Important notes")

    # Read from any thread
    content = backend.read("/notes.txt")
    ```

<a id="spoon_ai.backends.store.StoreBackend.__init__"></a>

#### `__init__`

```python
def __init__(store: BaseStore,
             namespace: Optional[tuple[str, ...]] = None,
             assistant_id: Optional[str] = None)
```

Initialize StoreBackend.

**Arguments**:

- `store` - BaseStore implementation.
- `namespace` - Optional namespace tuple. Defaults to ("filesystem",).
- `assistant_id` - Optional assistant ID for multi-agent isolation.

<a id="spoon_ai.backends.store.StoreBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory.

<a id="spoon_ai.backends.store.StoreBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

<a id="spoon_ai.backends.store.StoreBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file with content.

<a id="spoon_ai.backends.store.StoreBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences.

<a id="spoon_ai.backends.store.StoreBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

<a id="spoon_ai.backends.store.StoreBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Find files matching glob pattern.

<a id="spoon_ai.backends.store.StoreBackend.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Upload multiple files to the store.

<a id="spoon_ai.backends.store.StoreBackend.download_files"></a>

#### `download_files`

```python
def download_files(paths: list[str]) -> list[FileDownloadResponse]
```

Download multiple files from the store.

<a id="spoon_ai.backends.store.create_store_backend"></a>

#### `create_store_backend`

```python
def create_store_backend(store: Optional[BaseStore] = None,
                         db_path: str = "store.db",
                         use_sqlite: bool = True,
                         namespace: Optional[tuple[str, ...]] = None,
                         assistant_id: Optional[str] = None) -> StoreBackend
```

Create a StoreBackend.

**Arguments**:

- `store` - Optional BaseStore instance. If not provided, creates one.
- `db_path` - Path to SQLite database (if using SQLite).
- `use_sqlite` - If True, use SQLite. Otherwise, use in-memory store.
- `namespace` - Optional namespace tuple.
- `assistant_id` - Optional assistant ID for isolation.
  

**Returns**:

  StoreBackend instance.
  

**Example**:

    ```python
    # Use SQLite for persistence
    backend = create_store_backend(db_path="agent.db")

    # Use in-memory store for testing
    backend = create_store_backend(use_sqlite=False)

    # With assistant isolation
    backend = create_store_backend(assistant_id="agent-001")
    ```

<a id="spoon_ai.backends.filesystem"></a>

# Module `spoon_ai.backends.filesystem`

FilesystemBackend: Read and write files directly from the filesystem.

Security features:
- Secure path resolution with root containment when in virtual_mode
- Prevent symlink-following on file I/O using O_NOFOLLOW when available
- Max file size enforcement

<a id="spoon_ai.backends.filesystem.FilesystemBackend"></a>

## `FilesystemBackend` Objects

```python
class FilesystemBackend(BackendProtocol)
```

Backend that reads and writes files directly from the filesystem.

Files are accessed using their actual filesystem paths. Relative paths are
resolved relative to the current working directory or root_dir.

**Example**:

    ```python
    # Real filesystem access
    backend = FilesystemBackend()
    content = backend.read("/path/to/file.txt")

    # Sandboxed to a directory
    backend = FilesystemBackend(
        root_dir="/workspace",
        virtual_mode=True
    )
    # "/file.txt" maps to "/workspace/file.txt"
    ```

<a id="spoon_ai.backends.filesystem.FilesystemBackend.__init__"></a>

#### `__init__`

```python
def __init__(root_dir: Optional[str | Path] = None,
             virtual_mode: bool = False,
             max_file_size_mb: int = 10) -> None
```

Initialize filesystem backend.

**Arguments**:

- `root_dir` - Optional root directory. If provided, all paths are
  resolved relative to this directory.
- `virtual_mode` - If True, treat paths as virtual absolute paths under
  root_dir. Disallows path traversal.
- `max_file_size_mb` - Maximum file size in MB for operations.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.ls_info"></a>

#### `ls_info`

```python
def ls_info(path: str) -> list[FileInfo]
```

List files and directories in the specified directory (non-recursive).

**Arguments**:

- `path` - Absolute directory path.
  

**Returns**:

  List of FileInfo dicts for files and directories.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.read"></a>

#### `read`

```python
def read(file_path: str, offset: int = 0, limit: int = 2000) -> str
```

Read file content with line numbers.

**Arguments**:

- `file_path` - Absolute or relative file path.
- `offset` - Line offset to start reading from (0-indexed).
- `limit` - Maximum number of lines to read.
  

**Returns**:

  Formatted file content with line numbers, or error message.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.write"></a>

#### `write`

```python
def write(file_path: str, content: str) -> WriteResult
```

Create a new file with content.

Returns WriteResult. External storage sets files_update=None.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.edit"></a>

#### `edit`

```python
def edit(file_path: str,
         old_string: str,
         new_string: str,
         replace_all: bool = False) -> EditResult
```

Edit a file by replacing string occurrences.

Returns EditResult. External storage sets files_update=None.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.grep_raw"></a>

#### `grep_raw`

```python
def grep_raw(pattern: str,
             path: Optional[str] = None,
             glob: Optional[str] = None) -> list[GrepMatch] | str
```

Search for pattern in files.

Uses ripgrep if available, falls back to Python search.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.glob_info"></a>

#### `glob_info`

```python
def glob_info(pattern: str, path: str = "/") -> list[FileInfo]
```

Find files matching glob pattern.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.upload_files"></a>

#### `upload_files`

```python
def upload_files(files: list[tuple[str, bytes]]) -> list[FileUploadResponse]
```

Upload multiple files to the filesystem.

<a id="spoon_ai.backends.filesystem.FilesystemBackend.download_files"></a>

#### `download_files`

```python
def download_files(paths: list[str]) -> list[FileDownloadResponse]
```

Download multiple files from the filesystem.

<a id="spoon_ai.backends.filesystem.create_filesystem_backend"></a>

#### `create_filesystem_backend`

```python
def create_filesystem_backend(root_dir: Optional[str | Path] = None,
                              virtual_mode: bool = False,
                              max_file_size_mb: int = 10) -> FilesystemBackend
```

Create a FilesystemBackend.

**Arguments**:

- `root_dir` - Root directory for file operations.
- `virtual_mode` - If True, sandbox paths to root_dir.
- `max_file_size_mb` - Maximum file size for operations.
  

**Returns**:

  FilesystemBackend instance.
  

**Example**:

    ```python
    # Access real filesystem
    backend = create_filesystem_backend()

    # Sandboxed to workspace
    backend = create_filesystem_backend(
        root_dir="/workspace",
        virtual_mode=True
    )
    ```

