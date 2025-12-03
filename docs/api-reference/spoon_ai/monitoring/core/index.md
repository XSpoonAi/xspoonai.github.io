---
id: spoon_ai.monitoring.core
slug: /api-reference/spoon_ai/monitoring/core/index.md/index
title: spoon_ai.monitoring.core
---

# Table of Contents

* [spoon\_ai.monitoring.core](#spoon_ai.monitoring.core)
* [spoon\_ai.monitoring.core.alerts](#spoon_ai.monitoring.core.alerts)
  * [Comparator](#spoon_ai.monitoring.core.alerts.Comparator)
  * [Metric](#spoon_ai.monitoring.core.alerts.Metric)
  * [AlertManager](#spoon_ai.monitoring.core.alerts.AlertManager)
    * [check\_condition](#spoon_ai.monitoring.core.alerts.AlertManager.check_condition)
    * [get\_metric\_value](#spoon_ai.monitoring.core.alerts.AlertManager.get_metric_value)
    * [check\_alert](#spoon_ai.monitoring.core.alerts.AlertManager.check_alert)
    * [monitor\_task](#spoon_ai.monitoring.core.alerts.AlertManager.monitor_task)
    * [test\_notification](#spoon_ai.monitoring.core.alerts.AlertManager.test_notification)
* [spoon\_ai.monitoring.core.scheduler](#spoon_ai.monitoring.core.scheduler)
  * [MonitoringScheduler](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler)
    * [start](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.start)
    * [stop](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.stop)
    * [add\_job](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.add_job)
    * [remove\_job](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.remove_job)
    * [get\_jobs](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.get_jobs)
    * [get\_job](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.get_job)
    * [run\_job\_once](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.run_job_once)
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

<a id="spoon_ai.monitoring.core"></a>

# Module `spoon_ai.monitoring.core`

Monitoring core functionality module

<a id="spoon_ai.monitoring.core.alerts"></a>

# Module `spoon_ai.monitoring.core.alerts`

<a id="spoon_ai.monitoring.core.alerts.Comparator"></a>

## `Comparator` Objects

```python
class Comparator(str, Enum)
```

Comparison operator enumeration

<a id="spoon_ai.monitoring.core.alerts.Metric"></a>

## `Metric` Objects

```python
class Metric(str, Enum)
```

Monitoring metric enumeration

<a id="spoon_ai.monitoring.core.alerts.AlertManager"></a>

## `AlertManager` Objects

```python
class AlertManager()
```

Alert manager, handles metric monitoring and notification sending

<a id="spoon_ai.monitoring.core.alerts.AlertManager.check_condition"></a>

#### `check_condition`

```python
def check_condition(value: float, threshold: float,
                    comparator: Comparator) -> bool
```

Check if condition is met

<a id="spoon_ai.monitoring.core.alerts.AlertManager.get_metric_value"></a>

#### `get_metric_value`

```python
def get_metric_value(market: str, provider: str, symbol: str,
                     metric: Metric) -> float
```

Get current value of the metric

<a id="spoon_ai.monitoring.core.alerts.AlertManager.check_alert"></a>

#### `check_alert`

```python
def check_alert(alert_config: Dict[str, Any], test_mode: bool = False) -> bool
```

Check if alert condition is triggered

<a id="spoon_ai.monitoring.core.alerts.AlertManager.monitor_task"></a>

#### `monitor_task`

```python
def monitor_task(alert_config: Dict[str, Any]) -> None
```

Monitoring task for scheduler execution

<a id="spoon_ai.monitoring.core.alerts.AlertManager.test_notification"></a>

#### `test_notification`

```python
def test_notification(alert_config: Dict[str, Any]) -> bool
```

Test notification functionality, ignores condition and sends directly

<a id="spoon_ai.monitoring.core.scheduler"></a>

# Module `spoon_ai.monitoring.core.scheduler`

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler"></a>

## `MonitoringScheduler` Objects

```python
class MonitoringScheduler()
```

Monitoring task scheduler, implemented as a singleton

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler.start"></a>

#### `start`

```python
def start()
```

Start the scheduler to run in a background thread

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler.stop"></a>

#### `stop`

```python
def stop()
```

Stop the scheduler

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler.add_job"></a>

#### `add_job`

```python
def add_job(job_id: str, task_func: Callable, interval_minutes: int, *args,
            **kwargs) -> str
```

Add a scheduled monitoring task

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler.remove_job"></a>

#### `remove_job`

```python
def remove_job(job_id: str) -> bool
```

Remove a scheduled task

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler.get_jobs"></a>

#### `get_jobs`

```python
def get_jobs() -> Dict[str, Any]
```

Get all tasks

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler.get_job"></a>

#### `get_job`

```python
def get_job(job_id: str) -> Dict[str, Any]
```

Get information for a specific task

<a id="spoon_ai.monitoring.core.scheduler.MonitoringScheduler.run_job_once"></a>

#### `run_job_once`

```python
def run_job_once(job_id: str) -> bool
```

Execute a task immediately once, for testing

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

