---
id: spoon_ai.graph.config
slug: /api-reference/spoon_ai/graph/config
title: spoon_ai.graph.config
---

# Table of Contents

* [spoon\_ai.graph.config](#spoon_ai.graph.config)
  * [RouterConfig](#spoon_ai.graph.config.RouterConfig)
  * [ParallelRetryPolicy](#spoon_ai.graph.config.ParallelRetryPolicy)
  * [ParallelGroupConfig](#spoon_ai.graph.config.ParallelGroupConfig)
    * [quorum](#spoon_ai.graph.config.ParallelGroupConfig.quorum)
    * [error\_strategy](#spoon_ai.graph.config.ParallelGroupConfig.error_strategy)
  * [GraphConfig](#spoon_ai.graph.config.GraphConfig)

<a id="spoon_ai.graph.config"></a>

# Module `spoon_ai.graph.config`

Configuration primitives for the SpoonAI graph engine.

<a id="spoon_ai.graph.config.RouterConfig"></a>

## `RouterConfig` Objects

```python
@dataclass
class RouterConfig()
```

Controls how the graph chooses the next node after each execution step.

<a id="spoon_ai.graph.config.ParallelRetryPolicy"></a>

## `ParallelRetryPolicy` Objects

```python
@dataclass
class ParallelRetryPolicy()
```

Retry policy for individual nodes inside a parallel group.

<a id="spoon_ai.graph.config.ParallelGroupConfig"></a>

## `ParallelGroupConfig` Objects

```python
@dataclass
class ParallelGroupConfig()
```

Controls how a parallel group executes and aggregates results.

<a id="spoon_ai.graph.config.ParallelGroupConfig.quorum"></a>

#### `quorum`

floats in (0, 1] treated as ratio, ints as absolute

<a id="spoon_ai.graph.config.ParallelGroupConfig.error_strategy"></a>

#### `error_strategy`

fail_fast, collect_errors, ignore_errors

<a id="spoon_ai.graph.config.GraphConfig"></a>

## `GraphConfig` Objects

```python
@dataclass
class GraphConfig()
```

Top-level configuration applied to an entire graph instance.

