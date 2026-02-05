---
id: spoon_ai.backends.sandbox
slug: /api-reference/spoon_ai/backends/sandbox
title: spoon_ai.backends.sandbox
---

# Table of Contents

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

