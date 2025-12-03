---
id: spoon_ai.monitoring.core.scheduler
slug: /api-reference/spoon_ai/monitoring/core/scheduler.md
title: spoon_ai.monitoring.core.scheduler
---

# Table of Contents

* [spoon\_ai.monitoring.core.scheduler](#spoon_ai.monitoring.core.scheduler)
  * [MonitoringScheduler](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler)
    * [start](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.start)
    * [stop](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.stop)
    * [add\_job](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.add_job)
    * [remove\_job](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.remove_job)
    * [get\_jobs](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.get_jobs)
    * [get\_job](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.get_job)
    * [run\_job\_once](#spoon_ai.monitoring.core.scheduler.MonitoringScheduler.run_job_once)

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

