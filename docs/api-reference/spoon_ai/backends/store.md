---
id: spoon_ai.backends.store
slug: /api-reference/spoon_ai/backends/store
title: spoon_ai.backends.store
---

# Table of Contents

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

