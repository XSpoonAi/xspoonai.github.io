---
id: spoon_ai.callbacks.skill_callback
slug: /api-reference/spoon_ai/callbacks/skill_callback
title: spoon_ai.callbacks.skill_callback
---

# Table of Contents

* [spoon\_ai.callbacks.skill\_callback](#spoon_ai.callbacks.skill_callback)
  * [SkillCallbackHandler](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler)
    * [on\_skill\_start](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_start)
    * [on\_skill\_end](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_end)
    * [on\_skill\_error](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_error)
    * [on\_skill\_match](#spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_match)
  * [LoggingSkillCallback](#spoon_ai.callbacks.skill_callback.LoggingSkillCallback)
  * [MetricsSkillCallback](#spoon_ai.callbacks.skill_callback.MetricsSkillCallback)
    * [get\_metrics](#spoon_ai.callbacks.skill_callback.MetricsSkillCallback.get_metrics)
    * [reset](#spoon_ai.callbacks.skill_callback.MetricsSkillCallback.reset)

<a id="spoon_ai.callbacks.skill_callback"></a>

# Module `spoon_ai.callbacks.skill_callback`

Skill-specific callback handler.

Extends BaseCallbackHandler with skill lifecycle hooks.

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler"></a>

## `SkillCallbackHandler` Objects

```python
class SkillCallbackHandler(BaseCallbackHandler)
```

Callback handler for skill lifecycle events.

Extends BaseCallbackHandler with skill-specific hooks:
- on_skill_start: Called when a skill is activated
- on_skill_end: Called when a skill is deactivated
- on_skill_error: Called when skill activation/execution fails

Usage:
    class MySkillHandler(SkillCallbackHandler):
        async def on_skill_start(self, skill_name, context, **kwargs):
            print(f"Skill activated: &#123;skill_name&#125;")

        async def on_skill_end(self, skill_name, result, **kwargs):
            print(f"Skill deactivated: &#123;skill_name&#125;")

    agent = SpoonReactSkill(callbacks=[MySkillHandler()])

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_start"></a>

#### `on_skill_start`

```python
async def on_skill_start(skill_name: str,
                         context: Dict[str, Any],
                         *,
                         run_id: Optional[str] = None,
                         **kwargs) -> None
```

Called when a skill is activated.

**Arguments**:

- `skill_name` - Name of the activated skill
- `context` - Skill activation context
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_end"></a>

#### `on_skill_end`

```python
async def on_skill_end(skill_name: str,
                       result: Any,
                       *,
                       run_id: Optional[str] = None,
                       **kwargs) -> None
```

Called when a skill is deactivated.

**Arguments**:

- `skill_name` - Name of the deactivated skill
- `result` - Result or state from the skill
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_error"></a>

#### `on_skill_error`

```python
async def on_skill_error(skill_name: str,
                         error: Exception,
                         *,
                         run_id: Optional[str] = None,
                         **kwargs) -> None
```

Called when a skill encounters an error.

**Arguments**:

- `skill_name` - Name of the skill that errored
- `error` - The exception that occurred
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.SkillCallbackHandler.on_skill_match"></a>

#### `on_skill_match`

```python
async def on_skill_match(query: str,
                         matched_skills: list,
                         *,
                         run_id: Optional[str] = None,
                         **kwargs) -> None
```

Called when skills are matched to a query.

**Arguments**:

- `query` - The user query that triggered matching
- `matched_skills` - List of skill names that matched
- `run_id` - Optional run identifier
- `**kwargs` - Additional metadata

<a id="spoon_ai.callbacks.skill_callback.LoggingSkillCallback"></a>

## `LoggingSkillCallback` Objects

```python
class LoggingSkillCallback(SkillCallbackHandler)
```

Skill callback that logs all events.

Useful for debugging and monitoring skill system activity.

<a id="spoon_ai.callbacks.skill_callback.MetricsSkillCallback"></a>

## `MetricsSkillCallback` Objects

```python
class MetricsSkillCallback(SkillCallbackHandler)
```

Skill callback that collects metrics.

Tracks:
- Number of skill activations/deactivations
- Error counts per skill
- Match counts

Usage:
    metrics = MetricsSkillCallback()
    agent = SpoonReactSkill(callbacks=[metrics])
    # ... use agent ...
    print(metrics.get_metrics())

<a id="spoon_ai.callbacks.skill_callback.MetricsSkillCallback.get_metrics"></a>

#### `get_metrics`

```python
def get_metrics() -> Dict[str, Any]
```

Get collected metrics.

<a id="spoon_ai.callbacks.skill_callback.MetricsSkillCallback.reset"></a>

#### `reset`

```python
def reset() -> None
```

Reset all metrics.

