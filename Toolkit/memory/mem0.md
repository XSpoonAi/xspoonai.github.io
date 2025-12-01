# Memory Tools (Mem0)

Spoon-toolkit provides Mem0-powered tools that plug into spoon-core agents for long-term memory. They wrap `spoon_ai.memory.mem0_client.SpoonMem0` and expose a consistent tool interface. `ToolResult.output` carries the raw Mem0 response (not a formatted string); validation failures or an unready client return `ToolResult.error` (e.g., “Client not ready”, “No content provided.”) instead of raising.

## Available tools
- `AddMemoryTool` — store text or conversation snippets.
- `SearchMemoryTool` — semantic/natural-language search over stored memories.
- `GetAllMemoryTool` — list memories (with paging/filters).
- `UpdateMemoryTool` — update an existing memory by id.
- `DeleteMemoryTool` — delete a memory by id.

All tools accept `mem0_config` (api_key/user_id/collection/metadata/filters/etc.) or an injected `SpoonMem0` client. If `mem0ai` or `MEM0_API_KEY` is missing, client initialization may fail; otherwise an unready client yields `ToolResult.error` rather than an exception.

Parameter merging behavior:
- `user_id` defaults to `mem0_config.user_id`/`agent_id` (or the client’s user_id) and is also injected into filters if missing.
- `collection`, `metadata`, and `filters` from the injected client/config are merged into each call; per-call metadata/filters override on conflict.
- `async_mode` is only forwarded when passed to `AddMemoryTool.execute`; it is not auto-propagated from `mem0_config` by these wrappers (rely on `SpoonMem0` defaults if needed).

## Quick usage (agent-side)
```python
from spoon_ai.agents.spoon_react import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools.tool_manager import ToolManager
from spoon_toolkits.memory import (
    AddMemoryTool, SearchMemoryTool, GetAllMemoryTool, UpdateMemoryTool, DeleteMemoryTool
)

MEM0_CFG = {
    "user_id": "defi_user_001",
    "metadata": {"project": "demo"},
    "async_mode": False,   # sync writes to avoid read-after-write delays
    "collection": "demo_mem",
}

class MemoryAgent(SpoonReactAI):
    mem0_config = MEM0_CFG
    available_tools = ToolManager([
        AddMemoryTool(mem0_config=MEM0_CFG),
        SearchMemoryTool(mem0_config=MEM0_CFG),
        GetAllMemoryTool(mem0_config=MEM0_CFG),
        UpdateMemoryTool(mem0_config=MEM0_CFG),
        DeleteMemoryTool(mem0_config=MEM0_CFG),
    ])

agent = MemoryAgent(
    llm=ChatBot(llm_provider="openrouter", model_name="anthropic/claude-3.5-sonnet", enable_long_term_memory=False),
)
```

## Demo flow (from `spoon-core/examples/mem0_tool_agent.py`)
The example walks through capture → recall → update → delete:

1) **Capture**: `add_memory` with user preferences. Immediately verify with `get_all_memory` (same `user_id`) and then `search_memory` to show stored content.
2) **Recall**: Build a fresh agent with the same `mem0_config` and `search_memory` to retrieve prior preferences.
3) **Update**: `add_memory` new preference + `update_memory` a specific record (by id) to reflect the pivot; then `search_memory` again to confirm recency.
4) **Delete**: `delete_memory` the updated record; `get_all_memory` to show remaining memories.

Run the example:
```bash
python spoon-core/examples/mem0_tool_agent.py
```

## Tool parameters (summary)
- Shared: `user_id`, `metadata`, `filters`, `collection` inherited via `mem0_config` or passed per-call.
- Add: `content` or `messages`, `role` (default `user`), `async_mode`.
- Search: `query`, `limit`/`top_k`, optional filters.
- GetAll: `page`, `page_size`/`limit`/`top_k`, filters.
- Update: `memory_id` (required), `text`, `metadata`.
- Delete: `memory_id` (required).

## Best practices
- Keep a stable `user_id`/`collection` for scoping; pass it explicitly on each call for consistency.
- Use `async_mode=False` when you need immediate read-after-write in demos/tests.
- If you pass a custom `SpoonMem0` via `mem0_client`, you can reuse a single client across tools to avoid repeated pings/initialization.
