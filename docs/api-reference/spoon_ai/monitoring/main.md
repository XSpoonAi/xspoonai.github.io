---
id: spoon_ai.monitoring.main
slug: /api-reference/spoon_ai/monitoring/main.md
title: spoon_ai.monitoring.main
---

# Table of Contents

* [spoon\_ai.monitoring.main](#spoon_ai.monitoring.main)
  * [startup\_event](#spoon_ai.monitoring.main.startup_event)
  * [shutdown\_event](#spoon_ai.monitoring.main.shutdown_event)

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

