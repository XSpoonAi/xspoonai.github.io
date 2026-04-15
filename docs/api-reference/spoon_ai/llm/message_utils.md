---
id: spoon_ai.llm.message_utils
slug: /api-reference/spoon_ai/llm/message_utils
title: spoon_ai.llm.message_utils
---

# Table of Contents

* [spoon\_ai.llm.message\_utils](#spoon_ai.llm.message_utils)
  * [drop\_orphaned\_tool\_messages](#spoon_ai.llm.message_utils.drop_orphaned_tool_messages)

<a id="spoon_ai.llm.message_utils"></a>

# Module `spoon_ai.llm.message_utils`

Shared utilities for sanitising Message sequences before provider conversion.

Every provider that sends tool-role messages to an API should call
``drop_orphaned_tool_messages`` **before** provider-specific conversion so
that malformed / orphaned tool messages never reach the remote API.

<a id="spoon_ai.llm.message_utils.drop_orphaned_tool_messages"></a>

#### `drop_orphaned_tool_messages`

```python
def drop_orphaned_tool_messages(messages: List[Message]) -> List[Message]
```

Return *messages* with orphaned tool messages removed.

A tool message is considered **orphaned** (and dropped) when any of the
following is true:

1. It has no ``tool_call_id`` at all.
2. There is no preceding assistant message that contains ``tool_calls``.
3. Its ``tool_call_id`` does not match any ``tool_calls[].id`` in the
   nearest preceding assistant message that carries tool calls.

The function preserves the original ordering of all non-orphaned messages.

