---
id: spoon_ai.graph.builder
slug: /api-reference/spoon_ai/graph/builder
title: spoon_ai.graph.builder
---

# Table of Contents

* [spoon\_ai.graph.builder](#spoon_ai.graph.builder)
  * [Intent](#spoon_ai.graph.builder.Intent)
  * [IntentAnalyzer](#spoon_ai.graph.builder.IntentAnalyzer)
  * [AdaptiveStateBuilder](#spoon_ai.graph.builder.AdaptiveStateBuilder)
  * [ParameterInferenceEngine](#spoon_ai.graph.builder.ParameterInferenceEngine)
  * [NodeSpec](#spoon_ai.graph.builder.NodeSpec)
  * [EdgeSpec](#spoon_ai.graph.builder.EdgeSpec)
    * [end](#spoon_ai.graph.builder.EdgeSpec.end)
  * [ParallelGroupSpec](#spoon_ai.graph.builder.ParallelGroupSpec)
  * [GraphTemplate](#spoon_ai.graph.builder.GraphTemplate)
  * [DeclarativeGraphBuilder](#spoon_ai.graph.builder.DeclarativeGraphBuilder)
  * [NodePlugin](#spoon_ai.graph.builder.NodePlugin)
  * [NodePluginSystem](#spoon_ai.graph.builder.NodePluginSystem)
  * [HighLevelGraphAPI](#spoon_ai.graph.builder.HighLevelGraphAPI)

<a id="spoon_ai.graph.builder"></a>

# Module `spoon_ai.graph.builder`

Declarative builders and helpers for SpoonAI graphs.

<a id="spoon_ai.graph.builder.Intent"></a>

## `Intent` Objects

```python
@dataclass
class Intent()
```

Result of intent analysis.

<a id="spoon_ai.graph.builder.IntentAnalyzer"></a>

## `IntentAnalyzer` Objects

```python
class IntentAnalyzer()
```

LLM-powered intent analyzer.

Core stays generic; concrete prompts/parsers are supplied by callers.

<a id="spoon_ai.graph.builder.AdaptiveStateBuilder"></a>

## `AdaptiveStateBuilder` Objects

```python
class AdaptiveStateBuilder()
```

Construct initial graph state using query intent and optional parameters.

<a id="spoon_ai.graph.builder.ParameterInferenceEngine"></a>

## `ParameterInferenceEngine` Objects

```python
class ParameterInferenceEngine()
```

LLM delegator for parameter extraction.

Core keeps this generic; applications provide formatting/parsing via options.

<a id="spoon_ai.graph.builder.NodeSpec"></a>

## `NodeSpec` Objects

```python
@dataclass
class NodeSpec()
```

Declarative node specification.

<a id="spoon_ai.graph.builder.EdgeSpec"></a>

## `EdgeSpec` Objects

```python
@dataclass
class EdgeSpec()
```

Declarative edge specification.

<a id="spoon_ai.graph.builder.EdgeSpec.end"></a>

#### `end`

target name or callable router

<a id="spoon_ai.graph.builder.ParallelGroupSpec"></a>

## `ParallelGroupSpec` Objects

```python
@dataclass
class ParallelGroupSpec()
```

Parallel group specification.

<a id="spoon_ai.graph.builder.GraphTemplate"></a>

## `GraphTemplate` Objects

```python
@dataclass
class GraphTemplate()
```

Complete declarative template for a graph.

<a id="spoon_ai.graph.builder.DeclarativeGraphBuilder"></a>

## `DeclarativeGraphBuilder` Objects

```python
class DeclarativeGraphBuilder()
```

Build StateGraph instances from declarative templates.

<a id="spoon_ai.graph.builder.NodePlugin"></a>

## `NodePlugin` Objects

```python
class NodePlugin()
```

Pluggable node provider.

<a id="spoon_ai.graph.builder.NodePluginSystem"></a>

## `NodePluginSystem` Objects

```python
class NodePluginSystem()
```

Registry and discovery for node plugins.

<a id="spoon_ai.graph.builder.HighLevelGraphAPI"></a>

## `HighLevelGraphAPI` Objects

```python
class HighLevelGraphAPI()
```

Convenience facade for building graphs per query.

