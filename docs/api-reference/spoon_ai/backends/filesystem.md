---
id: spoon_ai.backends.filesystem
slug: /api-reference/spoon_ai/backends/filesystem
title: spoon_ai.backends.filesystem
---

# Table of Contents

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

