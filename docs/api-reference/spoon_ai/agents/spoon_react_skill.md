---
id: spoon_ai.agents.spoon_react_skill
slug: /api-reference/spoon_ai/agents/spoon_react_skill
title: spoon_ai.agents.spoon_react_skill
---

# Table of Contents

* [spoon\_ai.agents.spoon\_react\_skill](#spoon_ai.agents.spoon_react_skill)
  * [SpoonReactSkill](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill)
    * [\_\_init\_\_](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.__init__)
    * [run](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.run)
    * [initialize](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.initialize)
    * [add\_skill\_path](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.add_skill_path)
    * [discover\_skills](#spoon_ai.agents.spoon_react_skill.SpoonReactSkill.discover_skills)

<a id="spoon_ai.agents.spoon_react_skill"></a>

# Module `spoon_ai.agents.spoon_react_skill`

Skill-enabled production agent.

Combines SpoonReactAI with full skill system support.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill"></a>

## `SpoonReactSkill` Objects

```python
class SpoonReactSkill(SkillEnabledMixin, SpoonReactAI)
```

Production agent with full skill system support.

Combines:
- SpoonReactAI: Tool calling, MCP integration, x402 payment
- SkillEnabledMixin: Skill activation, context injection, auto-trigger

Usage:
    agent = SpoonReactSkill(name="my_agent")

    # Manual skill activation
    await agent.activate_skill("trading-analysis", &#123;"asset": "BTC"&#125;)

    # Run with auto-trigger
    result = await agent.run("Analyze ETH trading signals")
    # -&gt; Automatically activates matching skills

    # List skills
    print(agent.list_skills())
    print(agent.list_active_skills())

    # Deactivate
    await agent.deactivate_skill("trading-analysis")

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.__init__"></a>

#### `__init__`

```python
def __init__(**kwargs)
```

Initialize SpoonReactSkill agent.

Initializes both SpoonReactAI and skill system components.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.run"></a>

#### `run`

```python
async def run(request: Optional[str] = None) -> str
```

Execute agent with skill auto-activation.

Flow:
1. Auto-detect and activate relevant skills (if enabled)
2. Inject skill context into system prompt
3. Execute parent SpoonReactAI.run()

**Arguments**:

- `request` - User request/message
  

**Returns**:

  Agent response

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.initialize"></a>

#### `initialize`

```python
async def initialize(__context=None)
```

Initialize async components.

Extends SpoonReactAI.initialize() to also initialize skill system.

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.add_skill_path"></a>

#### `add_skill_path`

```python
def add_skill_path(path: str) -> None
```

Add a path to search for skills.

**Arguments**:

- `path` - Directory path to add

<a id="spoon_ai.agents.spoon_react_skill.SpoonReactSkill.discover_skills"></a>

#### `discover_skills`

```python
def discover_skills() -> int
```

Re-discover skills from all configured paths.

**Returns**:

  Number of skills discovered

