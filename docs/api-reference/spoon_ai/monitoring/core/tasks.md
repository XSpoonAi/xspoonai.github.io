---
id: spoon_ai.monitoring.core.tasks
slug: /api-reference/spoon_ai/monitoring/core/tasks.md
title: spoon_ai.monitoring.core.tasks
---

# Table of Contents

* [spoon\_ai.monitoring.core.tasks](#spoon_ai.monitoring.core.tasks)
  * [TaskStatus](#spoon_ai.monitoring.core.tasks.TaskStatus)
  * [MonitoringTaskManager](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager)
    * [create\_task](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.create_task)
    * [extend\_task](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.extend_task)
    * [pause\_task](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.pause_task)
    * [resume\_task](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.resume_task)
    * [delete\_task](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.delete_task)
    * [get\_tasks](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.get_tasks)
    * [get\_task](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.get_task)
    * [test\_notification](#spoon_ai.monitoring.core.tasks.MonitoringTaskManager.test_notification)

<a id="spoon_ai.monitoring.core.tasks"></a>

# Module `spoon_ai.monitoring.core.tasks`

<a id="spoon_ai.monitoring.core.tasks.TaskStatus"></a>

## `TaskStatus` Objects

```python
class TaskStatus()
```

Task status enumeration

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager"></a>

## `MonitoringTaskManager` Objects

```python
class MonitoringTaskManager()
```

Monitoring task manager, handles task creation, deletion and execution

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.create_task"></a>

#### `create_task`

```python
def create_task(config: Dict[str, Any]) -> Dict[str, Any]
```

Create a new monitoring task

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.extend_task"></a>

#### `extend_task`

```python
def extend_task(task_id: str, hours: int = 24) -> Dict[str, Any]
```

Extend task expiration time

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.pause_task"></a>

#### `pause_task`

```python
def pause_task(task_id: str) -> bool
```

Pause task

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.resume_task"></a>

#### `resume_task`

```python
def resume_task(task_id: str) -> bool
```

Resume task

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.delete_task"></a>

#### `delete_task`

```python
def delete_task(task_id: str) -> bool
```

Delete monitoring task

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.get_tasks"></a>

#### `get_tasks`

```python
def get_tasks() -> Dict[str, Any]
```

Get all tasks, including status information

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.get_task"></a>

#### `get_task`

```python
def get_task(task_id: str) -> Optional[Dict[str, Any]]
```

Get specific task information

<a id="spoon_ai.monitoring.core.tasks.MonitoringTaskManager.test_notification"></a>

#### `test_notification`

```python
def test_notification(task_id: str) -> bool
```

Test task notification

