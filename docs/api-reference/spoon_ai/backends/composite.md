---
id: spoon_ai.backends.composite
slug: /api-reference/spoon_ai/backends/composite
title: spoon_ai.backends.composite
---

# Table of Contents

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

