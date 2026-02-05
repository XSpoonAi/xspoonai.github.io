---
id: spoon_ai.tools.base
slug: /api-reference/spoon_ai/tools/base
title: spoon_ai.tools.base
---

# Table of Contents

* [spoon\_ai.tools.base](#spoon_ai.tools.base)
  * [reset\_secrets\_initialization](#spoon_ai.tools.base.reset_secrets_initialization)
  * [ToolFailure](#spoon_ai.tools.base.ToolFailure)

<a id="spoon_ai.tools.base"></a>

# Module `spoon_ai.tools.base`

<a id="spoon_ai.tools.base.reset_secrets_initialization"></a>

#### `reset_secrets_initialization`

```python
def reset_secrets_initialization() -> None
```

Reset the initialization flag. Useful for testing.

<a id="spoon_ai.tools.base.ToolFailure"></a>

## `ToolFailure` Objects

```python
class ToolFailure(Exception)
```

Exception to indicate a tool execution failure.

