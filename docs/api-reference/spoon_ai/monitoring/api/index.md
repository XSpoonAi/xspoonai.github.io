---
id: spoon_ai.monitoring.api
slug: /api-reference/spoon_ai/monitoring/api/index.md/index
title: spoon_ai.monitoring.api
---

# Table of Contents

* [spoon\_ai.monitoring.api](#spoon_ai.monitoring.api)
* [spoon\_ai.monitoring.api.routes](#spoon_ai.monitoring.api.routes)
  * [MonitoringTaskCreate](#spoon_ai.monitoring.api.routes.MonitoringTaskCreate)
  * [TaskExtendRequest](#spoon_ai.monitoring.api.routes.TaskExtendRequest)
  * [MonitoringTaskResponse](#spoon_ai.monitoring.api.routes.MonitoringTaskResponse)
  * [MonitoringChannelsResponse](#spoon_ai.monitoring.api.routes.MonitoringChannelsResponse)
  * [create\_monitoring\_task](#spoon_ai.monitoring.api.routes.create_monitoring_task)
  * [list\_monitoring\_tasks](#spoon_ai.monitoring.api.routes.list_monitoring_tasks)
  * [get\_monitoring\_task](#spoon_ai.monitoring.api.routes.get_monitoring_task)
  * [delete\_monitoring\_task](#spoon_ai.monitoring.api.routes.delete_monitoring_task)
  * [pause\_monitoring\_task](#spoon_ai.monitoring.api.routes.pause_monitoring_task)
  * [resume\_monitoring\_task](#spoon_ai.monitoring.api.routes.resume_monitoring_task)
  * [extend\_monitoring\_task](#spoon_ai.monitoring.api.routes.extend_monitoring_task)
  * [get\_notification\_channels](#spoon_ai.monitoring.api.routes.get_notification_channels)
  * [test\_notification](#spoon_ai.monitoring.api.routes.test_notification)

<a id="spoon_ai.monitoring.api"></a>

# Module `spoon_ai.monitoring.api`

API routes for the monitoring module

<a id="spoon_ai.monitoring.api.routes"></a>

# Module `spoon_ai.monitoring.api.routes`

<a id="spoon_ai.monitoring.api.routes.MonitoringTaskCreate"></a>

## `MonitoringTaskCreate` Objects

```python
class MonitoringTaskCreate(BaseModel)
```

Request model for creating monitoring task

<a id="spoon_ai.monitoring.api.routes.TaskExtendRequest"></a>

## `TaskExtendRequest` Objects

```python
class TaskExtendRequest(BaseModel)
```

Request model for extending task validity period

<a id="spoon_ai.monitoring.api.routes.MonitoringTaskResponse"></a>

## `MonitoringTaskResponse` Objects

```python
class MonitoringTaskResponse(BaseModel)
```

Response model for monitoring task

<a id="spoon_ai.monitoring.api.routes.MonitoringChannelsResponse"></a>

## `MonitoringChannelsResponse` Objects

```python
class MonitoringChannelsResponse(BaseModel)
```

Response model for available notification channels

<a id="spoon_ai.monitoring.api.routes.create_monitoring_task"></a>

#### `create_monitoring_task`

```python
@router.post("/tasks", response_model=MonitoringTaskResponse)
async def create_monitoring_task(task: MonitoringTaskCreate)
```

Create a new monitoring task

<a id="spoon_ai.monitoring.api.routes.list_monitoring_tasks"></a>

#### `list_monitoring_tasks`

```python
@router.get("/tasks", response_model=Dict[str, Any])
async def list_monitoring_tasks()
```

Get all monitoring tasks

<a id="spoon_ai.monitoring.api.routes.get_monitoring_task"></a>

#### `get_monitoring_task`

```python
@router.get("/tasks/{task_id}", response_model=Dict[str, Any])
async def get_monitoring_task(task_id: str)
```

Get a specific monitoring task

<a id="spoon_ai.monitoring.api.routes.delete_monitoring_task"></a>

#### `delete_monitoring_task`

```python
@router.delete("/tasks/{task_id}")
async def delete_monitoring_task(task_id: str)
```

Delete a monitoring task

<a id="spoon_ai.monitoring.api.routes.pause_monitoring_task"></a>

#### `pause_monitoring_task`

```python
@router.post("/tasks/{task_id}/pause")
async def pause_monitoring_task(task_id: str)
```

Pause a monitoring task

<a id="spoon_ai.monitoring.api.routes.resume_monitoring_task"></a>

#### `resume_monitoring_task`

```python
@router.post("/tasks/{task_id}/resume")
async def resume_monitoring_task(task_id: str)
```

Resume a monitoring task

<a id="spoon_ai.monitoring.api.routes.extend_monitoring_task"></a>

#### `extend_monitoring_task`

```python
@router.post("/tasks/{task_id}/extend", response_model=Dict[str, Any])
async def extend_monitoring_task(task_id: str, request: TaskExtendRequest)
```

Extend monitoring task validity period

<a id="spoon_ai.monitoring.api.routes.get_notification_channels"></a>

#### `get_notification_channels`

```python
@router.get("/channels", response_model=MonitoringChannelsResponse)
async def get_notification_channels()
```

Get available notification channels

<a id="spoon_ai.monitoring.api.routes.test_notification"></a>

#### `test_notification`

```python
@router.post("/tasks/{task_id}/test")
async def test_notification(task_id: str)
```

Test notification for a specific task

