# Long-Term Memory with Mem0

Spoon-core ships a lightweight Mem0 wrapper (`SpoonMem0`) that lets agents persist and recall user context across sessions. This page shows the key API and a minimal end-to-end demo.

## What SpoonMem0 does
- Wraps `mem0.MemoryClient` with safe defaults and fallbacks.
- Builds metadata/filters with `user_id`/`agent_id` so memories stay scoped per user (injects `user_id` into filters/metadata if absent, and passes collection when set).
- Provides sync/async helpers to add, search, and list memories.
- Gracefully disables itself if `mem0ai` or `MEM0_API_KEY` is missing; when the client isn’t ready or a call fails, helpers return empty results rather than raising.

Core class: `spoon_ai.memory.mem0_client.SpoonMem0`

### Initialization
```python
from spoon_ai.memory.mem0_client import SpoonMem0

mem0 = SpoonMem0(
    {
        "api_key": "YOUR_MEM0_API_KEY",        # or set MEM0_API_KEY env var
        "user_id": "user_123",                 # or agent_id
        "collection": "my_namespace",          # optional namespace/collection
        "metadata": {"project": "demo"},       # merged into every write
        "filters": {"project": "demo"},        # merged into every query
        "async_mode": False,                   # sync writes by default
    }
)
if not mem0.is_ready():
    print("Mem0 not available")
```

### Add memory
```python
# add a conversation (sync)
mem0.add_memory([
    {"role": "user", "content": "I love Solana meme coins"},
    {"role": "assistant", "content": "Got it, will focus on Solana"},
], user_id="user_123")  # async_mode is taken from mem0_config (defaults to False)

# add a single text helper
mem0.add_text("Prefers low gas fees")  # same async_mode default applies
```

Async variant: `await mem0.aadd_memory(messages, user_id=...)`

### Search memory
```python
results = mem0.search_memory(
    "Solana meme coins high risk",
    user_id="user_123",
    limit=5,
)
for r in results:  # results is a list of strings extracted from Mem0 responses
    print("-", r)
```

Async variant: `await mem0.asearch_memory(query, user_id=...)`

### Get all memory
```python
all_memories = mem0.get_all_memory(user_id="user_123", limit=20)  # returns [] if client is not ready or call fails
```

## Demo: Intelligent Web3 Portfolio Assistant
Path: `examples/mem0_agent_demo.py`

Key idea: The agent (ChatBot) is configured with Mem0 so it can recall user preferences after restart.

```python
from spoon_ai.chat import ChatBot

USER_ID = "crypto_whale_001"
SYSTEM_PROMPT = "...portfolio assistant..."

mem0_config = {
    "user_id": USER_ID,
    "metadata": {"project": "web3-portfolio-assistant"},
    "async_mode": False,  # sync writes so next query sees the data
}

# Create an LLM with long-term memory enabled
llm = ChatBot(
    llm_provider="openrouter",
    model_name="openai/gpt-5.1",
    enable_long_term_memory=True,
    mem0_config=mem0_config,
)
```

Flow:
1) **Session 1** – capture preferences: user says they are a high-risk Solana meme trader; model replies; Mem0 stores the interaction.
2) **Session 2** – reload a fresh ChatBot with the same `mem0_config`; the agent recalls past preferences (via Mem0 search) before answering.
3) **Session 3** – user pivots to safe Arbitrum yield; new info is stored; subsequent queries reflect updated preferences.

Run the demo:
```bash
python examples/mem0_agent_demo.py
```

## Notes & Best Practices
- Always set `MEM0_API_KEY` or pass `api_key` in `mem0_config`.
- Use a stable `user_id` (or `agent_id`) so memories stay scoped; include `collection`/`filters` if you want stricter isolation. The wrapper injects `user_id` into filters and metadata if missing.
- Keep `async_mode=False` during demos/tests to avoid read-after-write delays; the wrapper always uses `mem0_config.get("async_mode", False)` for adds (no per-call override).
- Handle absence gracefully: `SpoonMem0.is_ready()` lets you disable LTM if Mem0 isn’t installed or configured; helpers will otherwise return empty results when the client is unavailable.
