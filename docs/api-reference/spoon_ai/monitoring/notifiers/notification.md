---
id: spoon_ai.monitoring.notifiers.notification
slug: /api-reference/spoon_ai/monitoring/notifiers/notification.md
title: spoon_ai.monitoring.notifiers.notification
---

# Table of Contents

* [spoon\_ai.monitoring.notifiers.notification](#spoon_ai.monitoring.notifiers.notification)
  * [NotificationManager](#spoon_ai.monitoring.notifiers.notification.NotificationManager)
    * [send](#spoon_ai.monitoring.notifiers.notification.NotificationManager.send)
    * [get\_available\_channels](#spoon_ai.monitoring.notifiers.notification.NotificationManager.get_available_channels)
    * [send\_to\_all](#spoon_ai.monitoring.notifiers.notification.NotificationManager.send_to_all)

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

