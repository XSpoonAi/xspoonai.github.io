---
id: spoon_ai.backends.protocol
slug: /api-reference/spoon_ai/backends/protocol
title: spoon_ai.backends.protocol
---

# Table of Contents

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

