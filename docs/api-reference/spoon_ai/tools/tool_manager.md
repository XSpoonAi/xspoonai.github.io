---
id: spoon_ai.tools.tool_manager
slug: /api-reference/spoon_ai/tools/tool_manager
title: spoon_ai.tools.tool_manager
---

# Table of Contents

* [spoon\_ai.tools.tool\_manager](#spoon_ai.tools.tool_manager)
  * [ToolManager](#spoon_ai.tools.tool_manager.ToolManager)
    * [reindex](#spoon_ai.tools.tool_manager.ToolManager.reindex)

<a id="spoon_ai.tools.tool_manager"></a>

# Module `spoon_ai.tools.tool_manager`

<a id="spoon_ai.tools.tool_manager.ToolManager"></a>

## `ToolManager` Objects

```python
class ToolManager()
```

<a id="spoon_ai.tools.tool_manager.ToolManager.reindex"></a>

#### `reindex`

```python
def reindex() -> None
```

Rebuild the internal name-&gt;tool mapping. Useful if tools have been renamed dynamically.

