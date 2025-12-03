---
id: spoon_ai.monitoring
slug: /api-reference/spoon_ai/monitoring/index.md/index
title: spoon_ai.monitoring
---

# Table of Contents

* [spoon\_ai.monitoring](#spoon_ai.monitoring)
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
* [spoon\_ai.monitoring.api](#spoon_ai.monitoring.api)
* [spoon\_ai.monitoring.clients.base](#spoon_ai.monitoring.clients.base)
  * [DataClient](#spoon_ai.monitoring.clients.base.DataClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.base.DataClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.base.DataClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.base.DataClient.get_klines)
    * [get\_client](#spoon_ai.monitoring.clients.base.DataClient.get_client)
* [spoon\_ai.monitoring.clients.binance](#spoon_ai.monitoring.clients.binance)
  * [BinanceClient](#spoon_ai.monitoring.clients.binance.BinanceClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.binance.BinanceClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.binance.BinanceClient.get_server_time)
* [spoon\_ai.monitoring.clients.cex.base](#spoon_ai.monitoring.clients.cex.base)
  * [CEXClient](#spoon_ai.monitoring.clients.cex.base.CEXClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.cex.base.CEXClient.get_server_time)
* [spoon\_ai.monitoring.clients.cex.binance](#spoon_ai.monitoring.clients.cex.binance)
  * [BinanceClient](#spoon_ai.monitoring.clients.cex.binance.BinanceClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_klines)
    * [get\_server\_time](#spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_server_time)
* [spoon\_ai.monitoring.clients.cex](#spoon_ai.monitoring.clients.cex)
  * [get\_cex\_client](#spoon_ai.monitoring.clients.cex.get_cex_client)
* [spoon\_ai.monitoring.clients.dex.base](#spoon_ai.monitoring.clients.dex.base)
  * [DEXClient](#spoon_ai.monitoring.clients.dex.base.DEXClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.dex.base.DEXClient.get_klines)
* [spoon\_ai.monitoring.clients.dex.raydium](#spoon_ai.monitoring.clients.dex.raydium)
  * [RaydiumClient](#spoon_ai.monitoring.clients.dex.raydium.RaydiumClient)
    * [\_\_init\_\_](#spoon_ai.monitoring.clients.dex.raydium.RaydiumClient.__init__)
* [spoon\_ai.monitoring.clients.dex.uniswap](#spoon_ai.monitoring.clients.dex.uniswap)
  * [UniswapClient](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient)
    * [get\_ticker\_price](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_price)
    * [get\_ticker\_24h](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_24h)
    * [get\_klines](#spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_klines)
* [spoon\_ai.monitoring.clients.dex](#spoon_ai.monitoring.clients.dex)
  * [get\_dex\_client](#spoon_ai.monitoring.clients.dex.get_dex_client)
* [spoon\_ai.monitoring.clients](#spoon_ai.monitoring.clients)
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
* [spoon\_ai.monitoring.core](#spoon_ai.monitoring.core)
* [spoon\_ai.monitoring.main](#spoon_ai.monitoring.main)
  * [startup\_event](#spoon_ai.monitoring.main.startup_event)
  * [shutdown\_event](#spoon_ai.monitoring.main.shutdown_event)
* [spoon\_ai.monitoring.notifiers.notification](#spoon_ai.monitoring.notifiers.notification)
  * [NotificationManager](#spoon_ai.monitoring.notifiers.notification.NotificationManager)
    * [send](#spoon_ai.monitoring.notifiers.notification.NotificationManager.send)
    * [get\_available\_channels](#spoon_ai.monitoring.notifiers.notification.NotificationManager.get_available_channels)
    * [send\_to\_all](#spoon_ai.monitoring.notifiers.notification.NotificationManager.send_to_all)
* [spoon\_ai.monitoring.notifiers](#spoon_ai.monitoring.notifiers)

<a id="spoon_ai.monitoring"></a>

# Module `spoon_ai.monitoring`

Cryptocurrency Monitoring Module
Provides cryptocurrency price and metrics monitoring, alerts and notification functionality

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

<a id="spoon_ai.monitoring.api"></a>

# Module `spoon_ai.monitoring.api`

API routes for the monitoring module

<a id="spoon_ai.monitoring.clients.base"></a>

# Module `spoon_ai.monitoring.clients.base`

<a id="spoon_ai.monitoring.clients.base.DataClient"></a>

## `DataClient` Objects

```python
class DataClient(ABC)
```

Base class for data clients

<a id="spoon_ai.monitoring.clients.base.DataClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
@abstractmethod
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.base.DataClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
@abstractmethod
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour statistics

<a id="spoon_ai.monitoring.clients.base.DataClient.get_klines"></a>

#### `get_klines`

```python
@abstractmethod
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[Any]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.base.DataClient.get_client"></a>

#### `get_client`

```python
@classmethod
def get_client(cls, market: str, provider: str)
```

Get appropriate client based on market and provider

<a id="spoon_ai.monitoring.clients.binance"></a>

# Module `spoon_ai.monitoring.clients.binance`

<a id="spoon_ai.monitoring.clients.binance.BinanceClient"></a>

## `BinanceClient` Objects

```python
class BinanceClient()
```

Binance API client

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get single trading pair price

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour price change statistics

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_klines"></a>

#### `get_klines`

```python
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[List]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.binance.BinanceClient.get_server_time"></a>

#### `get_server_time`

```python
def get_server_time() -> int
```

Get server time

<a id="spoon_ai.monitoring.clients.cex.base"></a>

# Module `spoon_ai.monitoring.clients.cex.base`

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient"></a>

## `CEXClient` Objects

```python
class CEXClient(DataClient)
```

Centralized exchange client base class

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
@abstractmethod
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
@abstractmethod
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour statistics

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_klines"></a>

#### `get_klines`

```python
@abstractmethod
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[Any]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.cex.base.CEXClient.get_server_time"></a>

#### `get_server_time`

```python
@abstractmethod
def get_server_time() -> int
```

Get server time

<a id="spoon_ai.monitoring.clients.cex.binance"></a>

# Module `spoon_ai.monitoring.clients.cex.binance`

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient"></a>

## `BinanceClient` Objects

```python
class BinanceClient(CEXClient)
```

Binance API client

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get single trading pair price

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour price change statistics

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_klines"></a>

#### `get_klines`

```python
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[List]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.cex.binance.BinanceClient.get_server_time"></a>

#### `get_server_time`

```python
def get_server_time() -> int
```

Get server time

<a id="spoon_ai.monitoring.clients.cex"></a>

# Module `spoon_ai.monitoring.clients.cex`

<a id="spoon_ai.monitoring.clients.cex.get_cex_client"></a>

#### `get_cex_client`

```python
def get_cex_client(provider: str) -> CEXClient
```

Get appropriate CEX client based on provider name

**Arguments**:

- `provider` - Provider code (e.g., 'bn' for Binance)
  

**Returns**:

- `CEXClient` - Corresponding exchange client instance
  

**Raises**:

- `ValueError` - If provider is not supported

<a id="spoon_ai.monitoring.clients.dex.base"></a>

# Module `spoon_ai.monitoring.clients.dex.base`

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient"></a>

## `DEXClient` Objects

```python
class DEXClient(DataClient)
```

Decentralized exchange client base class

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
@abstractmethod
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
@abstractmethod
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour statistics

<a id="spoon_ai.monitoring.clients.dex.base.DEXClient.get_klines"></a>

#### `get_klines`

```python
@abstractmethod
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[Any]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.dex.raydium"></a>

# Module `spoon_ai.monitoring.clients.dex.raydium`

<a id="spoon_ai.monitoring.clients.dex.raydium.RaydiumClient"></a>

## `RaydiumClient` Objects

```python
class RaydiumClient(DEXClient)
```

Raydium (Solana) DEX client with V3 API support

<a id="spoon_ai.monitoring.clients.dex.raydium.RaydiumClient.__init__"></a>

#### `__init__`

```python
def __init__(rpc_url: Optional[str] = None)
```

Initialize Raydium client with optional RPC URL

<a id="spoon_ai.monitoring.clients.dex.uniswap"></a>

# Module `spoon_ai.monitoring.clients.dex.uniswap`

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient"></a>

## `UniswapClient` Objects

```python
class UniswapClient(DEXClient)
```

Uniswap API client

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_price"></a>

#### `get_ticker_price`

```python
def get_ticker_price(symbol: str) -> Dict[str, Any]
```

Get trading pair price

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_ticker_24h"></a>

#### `get_ticker_24h`

```python
def get_ticker_24h(symbol: str) -> Dict[str, Any]
```

Get 24-hour price change statistics

<a id="spoon_ai.monitoring.clients.dex.uniswap.UniswapClient.get_klines"></a>

#### `get_klines`

```python
def get_klines(symbol: str, interval: str, limit: int = 500) -> List[List]
```

Get K-line data

<a id="spoon_ai.monitoring.clients.dex"></a>

# Module `spoon_ai.monitoring.clients.dex`

<a id="spoon_ai.monitoring.clients.dex.get_dex_client"></a>

#### `get_dex_client`

```python
def get_dex_client(provider: str) -> DEXClient
```

Get appropriate DEX client based on provider name

**Arguments**:

- `provider` - Provider code (e.g., 'uni' for Uniswap)
  

**Returns**:

- `DEXClient` - Corresponding exchange client instance
  

**Raises**:

- `ValueError` - If provider is not supported

<a id="spoon_ai.monitoring.clients"></a>

# Module `spoon_ai.monitoring.clients`

API client module

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

<a id="spoon_ai.monitoring.core"></a>

# Module `spoon_ai.monitoring.core`

Monitoring core functionality module

<a id="spoon_ai.monitoring.main"></a>

# Module `spoon_ai.monitoring.main`

<a id="spoon_ai.monitoring.main.startup_event"></a>

#### `startup_event`

```python
@app.on_event("startup")
async def startup_event()
```

Event handler for service startup

<a id="spoon_ai.monitoring.main.shutdown_event"></a>

#### `shutdown_event`

```python
@app.on_event("shutdown")
async def shutdown_event()
```

Event handler for service shutdown

<a id="spoon_ai.monitoring.notifiers.notification"></a>

# Module `spoon_ai.monitoring.notifiers.notification`

<a id="spoon_ai.monitoring.notifiers.notification.NotificationManager"></a>

## `NotificationManager` Objects

```python
class NotificationManager()
```

Notification manager, manages multiple notification channels, calls notification classes in the social_media directory

<a id="spoon_ai.monitoring.notifiers.notification.NotificationManager.send"></a>

#### `send`

```python
def send(channel: str, message: str, **kwargs) -> bool
```

Send notification through specified channel

<a id="spoon_ai.monitoring.notifiers.notification.NotificationManager.get_available_channels"></a>

#### `get_available_channels`

```python
def get_available_channels() -> List[str]
```

Get all available notification channels

<a id="spoon_ai.monitoring.notifiers.notification.NotificationManager.send_to_all"></a>

#### `send_to_all`

```python
def send_to_all(message: str,
                channels: Optional[List[str]] = None,
                **kwargs) -> Dict[str, bool]
```

Send the same notification to multiple channels

**Arguments**:

- `message` - Notification content
- `channels` - List of channels to use, if None, use all available channels
- `**kwargs` - Channel-specific parameters
  

**Returns**:

  Dict[str, bool]: Send result for each channel

<a id="spoon_ai.monitoring.notifiers"></a>

# Module `spoon_ai.monitoring.notifiers`

Notification delivery module

