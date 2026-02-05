---
id: spoon_ai.middleware.todolist
slug: /api-reference/spoon_ai/middleware/todolist
title: spoon_ai.middleware.todolist
---

# Table of Contents

* [spoon\_ai.middleware.todolist](#spoon_ai.middleware.todolist)
  * [TodoStatus](#spoon_ai.middleware.todolist.TodoStatus)
  * [TodoItem](#spoon_ai.middleware.todolist.TodoItem)
  * [TodoList](#spoon_ai.middleware.todolist.TodoList)
    * [format\_display](#spoon_ai.middleware.todolist.TodoList.format_display)
  * [WriteTodosTool](#spoon_ai.middleware.todolist.WriteTodosTool)
    * [execute](#spoon_ai.middleware.todolist.WriteTodosTool.execute)
  * [ReadTodosTool](#spoon_ai.middleware.todolist.ReadTodosTool)
    * [execute](#spoon_ai.middleware.todolist.ReadTodosTool.execute)
  * [TodoListMiddleware](#spoon_ai.middleware.todolist.TodoListMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.todolist.TodoListMiddleware.__init__)
    * [tools](#spoon_ai.middleware.todolist.TodoListMiddleware.tools)
    * [system\_prompt](#spoon_ai.middleware.todolist.TodoListMiddleware.system_prompt)
    * [todo\_list](#spoon_ai.middleware.todolist.TodoListMiddleware.todo_list)
    * [get\_todos\_state](#spoon_ai.middleware.todolist.TodoListMiddleware.get_todos_state)
    * [restore\_todos\_state](#spoon_ai.middleware.todolist.TodoListMiddleware.restore_todos_state)
    * [awrap\_model\_call](#spoon_ai.middleware.todolist.TodoListMiddleware.awrap_model_call)
    * [before\_agent](#spoon_ai.middleware.todolist.TodoListMiddleware.before_agent)
    * [after\_agent](#spoon_ai.middleware.todolist.TodoListMiddleware.after_agent)

<a id="spoon_ai.middleware.todolist"></a>

# Module `spoon_ai.middleware.todolist`

TodoList Middleware - Task Planning and Progress Tracking.

Provides todo list tools to agents for structured task management:
- write_todos: Create/update todo list with tasks
- read_todos: Read current todo list state

Compatible with LangChain DeepAgents TodoListMiddleware interface.

Usage:
    from spoon_ai.middleware.todolist import TodoListMiddleware

    agent = ToolCallAgent(
        middleware=[TodoListMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.todolist.TodoStatus"></a>

## `TodoStatus` Objects

```python
class TodoStatus(str, Enum)
```

Status of a todo item.

<a id="spoon_ai.middleware.todolist.TodoItem"></a>

## `TodoItem` Objects

```python
@dataclass
class TodoItem()
```

A single todo item.

<a id="spoon_ai.middleware.todolist.TodoList"></a>

## `TodoList` Objects

```python
@dataclass
class TodoList()
```

Container for todo items.

<a id="spoon_ai.middleware.todolist.TodoList.format_display"></a>

#### `format_display`

```python
def format_display() -> str
```

Format todo list for display.

<a id="spoon_ai.middleware.todolist.WriteTodosTool"></a>

## `WriteTodosTool` Objects

```python
class WriteTodosTool(BaseTool)
```

Tool to create/update todo list.

<a id="spoon_ai.middleware.todolist.WriteTodosTool.execute"></a>

#### `execute`

```python
async def execute(todos: List[Dict[str, Any]], **kwargs) -> str
```

Update the todo list.

<a id="spoon_ai.middleware.todolist.ReadTodosTool"></a>

## `ReadTodosTool` Objects

```python
class ReadTodosTool(BaseTool)
```

Tool to read current todo list.

<a id="spoon_ai.middleware.todolist.ReadTodosTool.execute"></a>

#### `execute`

```python
async def execute(**kwargs) -> str
```

Read the current todo list.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware"></a>

## `TodoListMiddleware` Objects

```python
class TodoListMiddleware(AgentMiddleware)
```

Middleware for providing todo list tools to an agent.

Provides two tools:
- write_todos: Create/update todo list
- read_todos: Read current todo list

**Example**:

    ```python
    from spoon_ai.middleware.todolist import TodoListMiddleware

    middleware = TodoListMiddleware()

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(system_prompt: Optional[str] = None,
             auto_inject_prompt: bool = True)
```

Initialize TodoList middleware.

**Arguments**:

- `system_prompt` - Optional custom system prompt override.
- `auto_inject_prompt` - Whether to auto-inject system prompt (default: True)

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.tools"></a>

#### `tools`

```python
@property
def tools() -> List[BaseTool]
```

Get todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.system_prompt"></a>

#### `system_prompt`

```python
@property
def system_prompt() -> str
```

Get system prompt for todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.todo_list"></a>

#### `todo_list`

```python
@property
def todo_list() -> TodoList
```

Get current todo list.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.get_todos_state"></a>

#### `get_todos_state`

```python
def get_todos_state() -> Dict[str, Any]
```

Get todo list as state dict (for checkpointing).

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.restore_todos_state"></a>

#### `restore_todos_state`

```python
def restore_todos_state(state: Dict[str, Any]) -> None
```

Restore todo list from state dict.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Inject system prompt for todo list tools.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.before_agent"></a>

#### `before_agent`

```python
def before_agent(state: Dict[str, Any],
                 runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Restore todo list from agent state if available.

<a id="spoon_ai.middleware.todolist.TodoListMiddleware.after_agent"></a>

#### `after_agent`

```python
def after_agent(state: Dict[str, Any],
                runtime: AgentRuntime) -> Optional[Dict[str, Any]]
```

Save todo list to agent state.

