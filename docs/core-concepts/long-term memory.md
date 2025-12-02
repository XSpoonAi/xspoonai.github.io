# Long-Term Memory

## Introduction

Long-term memory enables AI agents to retain and recall information across sessions, building persistent knowledge about users, preferences, and past interactions. SpoonOS integrates with [Mem0](https://mem0.ai) through the `SpoonMem0` wrapper, providing automatic memory scoping, safe defaults, and graceful degradation when the service is unavailable.

### Core Capabilities

- **Cross-Session Persistence**: Memories survive agent restarts and are available across different conversation threads
- **Automatic Scoping**: User and agent IDs are automatically injected into queries and storage operations
- **Semantic Search**: Natural language queries retrieve relevant memories based on meaning, not just keywords
- **Collection Namespacing**: Organize memories into logical collections for multi-tenant or multi-domain applications
- **Graceful Fallback**: Operations return empty results rather than throwing exceptions when Mem0 is unavailable

### Comparison with Other Memory Systems

| Aspect | SpoonOS + Mem0 | LangChain Memory | Custom Vector DB |
|--------|---------------|------------------|------------------|
| **Persistence** | Cloud-hosted, managed | Requires external setup | Self-managed |
| **Search** | Semantic (built-in) | Depends on backend | Manual embedding |
| **Scoping** | Automatic user/agent IDs | Manual key management | Manual |
| **Setup** | API key only | Code + infrastructure | Infrastructure heavy |
| **Cost** | Pay-per-use | Infrastructure costs | Infrastructure costs |

**When to use long-term memory:**

- You're building personalized agents that should remember user preferences
- You need to maintain context about entities (users, projects, topics) across sessions
- You want semantic memory search without managing vector databases
- You're building multi-user applications where each user needs isolated memory

---

## Quick Start

```bash
pip install spoon-ai mem0ai
export MEM0_API_KEY="your-mem0-key"
```

```python
from spoon_ai.memory.mem0_client import SpoonMem0

mem0 = SpoonMem0({"user_id": "user_123"})

# Store and search
mem0.add_text("User prefers dark mode")
results = mem0.search("UI preferences")
print(results)
```

---

**Core class:** `spoon_ai.memory.mem0_client.SpoonMem0`

### Initialization

```python
from spoon_ai.memory.mem0_client import SpoonMem0

mem0 = SpoonMem0({
    "api_key": "YOUR_MEM0_API_KEY",   # or MEM0_API_KEY env var
    "user_id": "user_123",            # scope all operations to this user
    "collection": "my_namespace",     # optional namespace isolation
    "metadata": {"project": "demo"},  # auto-attached to writes
    "filters": {"project": "demo"},   # auto-applied to queries
    "async_mode": False,              # sync writes (default)
})

if not mem0.is_ready():
    print("Mem0 service unavailable")
```

### Add Memory

Store conversation history or individual text:

```python
# Add conversation messages
mem0.add_memory([
    {"role": "user", "content": "I love Solana meme coins"},
    {"role": "assistant", "content": "Got it, focusing on Solana"},
], user_id="user_123")

# Add single text (shorthand)
mem0.add_text("User prefers low gas fees")
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
