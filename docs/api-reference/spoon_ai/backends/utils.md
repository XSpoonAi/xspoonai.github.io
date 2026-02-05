---
id: spoon_ai.backends.utils
slug: /api-reference/spoon_ai/backends/utils
title: spoon_ai.backends.utils
---

# Table of Contents

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

