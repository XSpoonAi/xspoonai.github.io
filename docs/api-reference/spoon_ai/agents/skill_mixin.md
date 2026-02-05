---
id: spoon_ai.agents.skill_mixin
slug: /api-reference/spoon_ai/agents/skill_mixin
title: spoon_ai.agents.skill_mixin
---

# Table of Contents

* [spoon\_ai.agents.skill\_mixin](#spoon_ai.agents.skill_mixin)
  * [SkillEnabledMixin](#spoon_ai.agents.skill_mixin.SkillEnabledMixin)
    * [activate\_skill](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.activate_skill)
    * [deactivate\_skill](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_skill)
    * [auto\_activate\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.auto_activate_skills)
    * [list\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_skills)
    * [list\_active\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_active_skills)
    * [get\_skill\_info](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_info)
    * [is\_skill\_active](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.is_skill_active)
    * [deactivate\_all\_skills](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_all_skills)
    * [get\_skill\_stats](#spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_stats)

<a id="spoon_ai.agents.skill_mixin"></a>

# Module `spoon_ai.agents.skill_mixin`

Skill-enabled agent mixin.

Follows MCPClientMixin pattern for composable agent integration.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin"></a>

## `SkillEnabledMixin` Objects

```python
class SkillEnabledMixin()
```

Mixin that adds skill capabilities to agents.

Integrates with ReAct cycle by:
1. Injecting active skill instructions into system prompt
2. Adding skill tools to available_tools
3. Auto-triggering skills based on user input

Usage:
    class MyAgent(SkillEnabledMixin, SpoonReactAI):
        pass

    agent = MyAgent()
    await agent.activate_skill("trading-analysis")
    result = await agent.run("Analyze BTC")

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.activate_skill"></a>

#### `activate_skill`

```python
async def activate_skill(name: str,
                         context: Optional[Dict[str, Any]] = None) -> Skill
```

Activate a skill and refresh agent state.

**Arguments**:

- `name` - Skill name to activate
- `context` - Optional context data
  

**Returns**:

  Activated Skill instance

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_skill"></a>

#### `deactivate_skill`

```python
async def deactivate_skill(name: str) -> bool
```

Deactivate a skill.

**Arguments**:

- `name` - Skill name to deactivate
  

**Returns**:

  True if deactivated, False if not active

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.auto_activate_skills"></a>

#### `auto_activate_skills`

```python
async def auto_activate_skills(user_input: str) -> List[Skill]
```

Automatically activate skills matching user input.

Uses both keyword/pattern matching and LLM intent analysis.

**Arguments**:

- `user_input` - User's message
  

**Returns**:

  List of activated skills

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[str]
```

List all available skill names.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.list_active_skills"></a>

#### `list_active_skills`

```python
def list_active_skills() -> List[str]
```

List currently active skill names.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_info"></a>

#### `get_skill_info`

```python
def get_skill_info(name: str) -> Optional[Dict[str, Any]]
```

Get detailed information about a skill.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.is_skill_active"></a>

#### `is_skill_active`

```python
def is_skill_active(name: str) -> bool
```

Check if a skill is currently active.

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.deactivate_all_skills"></a>

#### `deactivate_all_skills`

```python
async def deactivate_all_skills() -> int
```

Deactivate all active skills.

**Returns**:

  Number of skills deactivated

<a id="spoon_ai.agents.skill_mixin.SkillEnabledMixin.get_skill_stats"></a>

#### `get_skill_stats`

```python
def get_skill_stats() -> Dict[str, Any]
```

Get skill system statistics.

