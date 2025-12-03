---
id: spoon_ai.monitoring.core.alerts
slug: /api-reference/spoon_ai/monitoring/core/alerts.md
title: spoon_ai.monitoring.core.alerts
---

# Table of Contents

* [spoon\_ai.monitoring.core.alerts](#spoon_ai.monitoring.core.alerts)
  * [Comparator](#spoon_ai.monitoring.core.alerts.Comparator)
  * [Metric](#spoon_ai.monitoring.core.alerts.Metric)
  * [AlertManager](#spoon_ai.monitoring.core.alerts.AlertManager)
    * [check\_condition](#spoon_ai.monitoring.core.alerts.AlertManager.check_condition)
    * [get\_metric\_value](#spoon_ai.monitoring.core.alerts.AlertManager.get_metric_value)
    * [check\_alert](#spoon_ai.monitoring.core.alerts.AlertManager.check_alert)
    * [monitor\_task](#spoon_ai.monitoring.core.alerts.AlertManager.monitor_task)
    * [test\_notification](#spoon_ai.monitoring.core.alerts.AlertManager.test_notification)

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

