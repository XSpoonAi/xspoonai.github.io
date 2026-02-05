---
id: spoon_ai.skills.registry
slug: /api-reference/spoon_ai/skills/registry
title: spoon_ai.skills.registry
---

# Table of Contents

* [spoon\_ai.skills.registry](#spoon_ai.skills.registry)
  * [SkillRegistry](#spoon_ai.skills.registry.SkillRegistry)
    * [register](#spoon_ai.skills.registry.SkillRegistry.register)
    * [unregister](#spoon_ai.skills.registry.SkillRegistry.unregister)
    * [get](#spoon_ai.skills.registry.SkillRegistry.get)
    * [list\_names](#spoon_ai.skills.registry.SkillRegistry.list_names)
    * [list\_skills](#spoon_ai.skills.registry.SkillRegistry.list_skills)
    * [find\_by\_tag](#spoon_ai.skills.registry.SkillRegistry.find_by_tag)
    * [find\_by\_keyword](#spoon_ai.skills.registry.SkillRegistry.find_by_keyword)
    * [find\_by\_pattern](#spoon_ai.skills.registry.SkillRegistry.find_by_pattern)
    * [find\_by\_intent](#spoon_ai.skills.registry.SkillRegistry.find_by_intent)
    * [find\_all\_matching](#spoon_ai.skills.registry.SkillRegistry.find_all_matching)
    * [get\_intent\_categories](#spoon_ai.skills.registry.SkillRegistry.get_intent_categories)

<a id="spoon_ai.skills.registry"></a>

# Module `spoon_ai.skills.registry`

Thread-safe skill registry with indexing.

Follows NodePluginSystem pattern from graph/builder.py.

<a id="spoon_ai.skills.registry.SkillRegistry"></a>

## `SkillRegistry` Objects

```python
class SkillRegistry()
```

Thread-safe registry for skills with fast trigger matching.

Maintains indexes for:
- Tags: O(1) lookup by tag
- Keywords: O(1) lookup by keyword
- Intents: O(1) lookup by intent category
- Patterns: Compiled regex patterns for matching

<a id="spoon_ai.skills.registry.SkillRegistry.register"></a>

#### `register`

```python
def register(skill: Skill) -> None
```

Register a skill and update indexes.

**Arguments**:

- `skill` - Skill to register

<a id="spoon_ai.skills.registry.SkillRegistry.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> bool
```

Remove a skill from the registry.

**Arguments**:

- `name` - Skill name to remove
  

**Returns**:

  True if removed, False if not found

<a id="spoon_ai.skills.registry.SkillRegistry.get"></a>

#### `get`

```python
def get(name: str) -> Optional[Skill]
```

Get a skill by name.

**Arguments**:

- `name` - Skill name
  

**Returns**:

  Skill or None if not found

<a id="spoon_ai.skills.registry.SkillRegistry.list_names"></a>

#### `list_names`

```python
def list_names() -> List[str]
```

Get all registered skill names.

<a id="spoon_ai.skills.registry.SkillRegistry.list_skills"></a>

#### `list_skills`

```python
def list_skills() -> List[Skill]
```

Get all registered skills.

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_tag"></a>

#### `find_by_tag`

```python
def find_by_tag(tag: str) -> List[Skill]
```

Find skills by tag.

**Arguments**:

- `tag` - Tag to search for
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_keyword"></a>

#### `find_by_keyword`

```python
def find_by_keyword(text: str) -> List[Skill]
```

Find skills by keyword matching.

Extracts words from text and matches against keyword index.

**Arguments**:

- `text` - Text to match keywords against
  

**Returns**:

  List of matching skills (deduplicated)

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_pattern"></a>

#### `find_by_pattern`

```python
def find_by_pattern(text: str) -> List[Skill]
```

Find skills by regex pattern matching.

**Arguments**:

- `text` - Text to match patterns against
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_by_intent"></a>

#### `find_by_intent`

```python
def find_by_intent(intent_category: str) -> List[Skill]
```

Find skills by intent category.

**Arguments**:

- `intent_category` - Intent category to match
  

**Returns**:

  List of matching skills

<a id="spoon_ai.skills.registry.SkillRegistry.find_all_matching"></a>

#### `find_all_matching`

```python
def find_all_matching(text: str) -> List[Skill]
```

Find all skills matching by keywords or patterns.

Combines keyword and pattern matching, sorted by trigger priority.

**Arguments**:

- `text` - Text to match against
  

**Returns**:

  List of matching skills, sorted by priority (highest first)

<a id="spoon_ai.skills.registry.SkillRegistry.get_intent_categories"></a>

#### `get_intent_categories`

```python
def get_intent_categories() -> List[str]
```

Get all registered intent categories.

