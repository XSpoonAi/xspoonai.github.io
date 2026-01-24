# Building Skill Agents

Learn how to build powerful AI agents using SpoonOS's skill system. This guide walks you through the complete workflow from creating your first skill to deploying production-ready skill agents.

:::tip Web3 Skills Available
Ready-to-use Web3 skills for cryptocurrency research, DeFi analysis, and blockchain development are available at **[spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill)**. Copy them to your workspace and start building!
:::

:::info Skill Specification Reference
For detailed SKILL.md schema, field definitions, and trigger system documentation, see the **[Skills Core Concepts](/docs/core-concepts/skills)** page.
:::

## Prerequisites

Before building skill agents, ensure you have:

1. **SpoonOS installed**: Follow the [Installation Guide](/docs/getting-started/installation)
2. **Python 3.9+**: Required for script execution
3. **LLM API access**: OpenAI, Anthropic, or other supported provider

## Quick Start: Your First Skill Agent

### Step 1: Create a Skill Directory

```bash
mkdir -p ./skills/my-assistant
```

### Step 2: Create SKILL.md

Create `./skills/my-assistant/SKILL.md`:

```markdown
---
name: my-assistant
description: A helpful research assistant
version: 1.0.0
tags:
  - research
  - assistant

triggers:
  - type: keyword
    keywords:
      - research
      - find
      - search
    priority: 80
---

# Research Assistant

You are now in **Research Mode**.

## Your Capabilities
- Search for information on any topic
- Analyze and summarize findings
- Provide citations and sources

## Guidelines
1. Always verify information from multiple perspectives
2. Cite your sources clearly
3. Present balanced, factual responses
```

### Step 3: Build Your Agent

```python
import asyncio
from spoon_ai.agents import SpoonReactSkill
from spoon_ai.chat import ChatBot

async def main():
    # Create the skill agent
    agent = SpoonReactSkill(
        llm=ChatBot(llm_provider="openai", model_name="gpt-4o-mini"),
        skill_paths=["./skills"],
        auto_trigger_skills=True
    )

    # Initialize and activate your skill
    await agent.initialize()
    await agent.activate_skill("my-assistant")

    # Run with skill-enhanced context
    response = await agent.run("Research the latest trends in AI")
    print(response)

asyncio.run(main())
```

**That's it!** Your agent now has the research assistant skill's context and capabilities.

## Adding Scripts to Skills

Scripts transform your skills from prompt-only modules into powerful tools.

### Step 1: Add Scripts Directory

```bash
mkdir -p ./skills/my-assistant/scripts
```

### Step 2: Create a Script

Create `./skills/my-assistant/scripts/web_search.py`:

```python
#!/usr/bin/env python3
import sys
import json

def search(query: str) -> dict:
    """Your search implementation here."""
    # Example: integrate with Tavily, SerpAPI, or custom search
    return {
        "status": "success",
        "query": query,
        "results": [
            {"title": "Example Result", "url": "https://example.com"}
        ]
    }

if __name__ == "__main__":
    query = sys.stdin.read().strip()
    result = search(query)
    print(json.dumps(result, indent=2))
```

### Step 3: Register Script in SKILL.md

Update the frontmatter:

```yaml
---
name: my-assistant
description: A helpful research assistant
version: 1.0.0

triggers:
  - type: keyword
    keywords: [research, find, search]
    priority: 80

scripts:
  enabled: true
  working_directory: ./scripts
  definitions:
    - name: web_search
      description: Search the web for information
      type: python
      file: web_search.py
      timeout: 30
---
```

### Step 4: Enable Scripts in Agent

```python
agent = SpoonReactSkill(
    llm=ChatBot(llm_provider="openai", model_name="gpt-4o-mini"),
    skill_paths=["./skills"],
    scripts_enabled=True,  # Enable script execution
    auto_trigger_skills=True
)
```

The agent now has access to `web_search` as a callable tool!

## Vibe Coding Workflow

Skills enable rapid prototyping through a "vibe coding" approach:

### 1. Clone Existing Skills

```bash
# Get production-ready Web3 skills
git clone https://github.com/XSpoonAi/spoon-awesome-skill.git

# Copy what you need
cp -r spoon-awesome-skill/web3-skills/defi ./skills/
```

### 2. Customize the Prompts

Edit `./skills/defi/SKILL.md` to match your use case. Focus on the Markdown instructions section—this is what shapes the agent's behavior.

### 3. Let the AI Figure It Out

```python
agent = SpoonReactSkill(
    skill_paths=["./skills"],
    scripts_enabled=True,
    auto_trigger_skills=True,
    max_auto_skills=3
)

await agent.initialize()

# The agent auto-activates relevant skills based on user input
response = await agent.run("Get a quote to swap 1 ETH for USDC on Uniswap")
```

### 4. Iterate and Ship

- Tweak prompts based on agent behavior
- Add or modify scripts as needed
- Ship without writing complex orchestration logic

## Using Web3 Skills

The [spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill) repository provides production-ready skills:

### Available Skills

| Skill | Description | Key Scripts |
|-------|-------------|-------------|
| **defi** | DeFi protocol interactions | `uniswap_quote.py`, `aave_positions.py` |
| **onchain-analysis** | On-chain data analysis | `etherscan_address.py`, `gas_tracker.py` |
| **nft** | NFT market analysis | `opensea_collection.py`, `nft_rarity.py` |
| **wallet** | Wallet operations | `wallet_balance.py`, `portfolio_tracker.py` |
| **solana** | Solana ecosystem | `jupiter_quote.py`, `solana_balance.py` |
| **neo** | Neo N3 ecosystem | `neo_balance.py`, `neo_transfer.py` |

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/XSpoonAi/spoon-awesome-skill.git

# Copy skills to your project
cp -r spoon-awesome-skill/web3-skills/defi ./skills/
cp -r spoon-awesome-skill/web3-skills/wallet ./skills/
```

### Environment Variables

Set up required API keys:

```bash
export ETHERSCAN_API_KEY="your_key"
export RPC_URL="https://eth.llamarpc.com"
```

### Web3 Agent Example

```python
from spoon_ai.agents import SpoonReactSkill
from spoon_ai.chat import ChatBot

class Web3Agent(SpoonReactSkill):
    """Web3 research agent using skills from spoon-awesome-skill."""

    def __init__(self, **kwargs):
        kwargs.setdefault('skill_paths', ['./skills'])
        kwargs.setdefault('scripts_enabled', True)
        kwargs.setdefault('auto_trigger_skills', True)
        kwargs.setdefault('max_auto_skills', 3)
        super().__init__(**kwargs)

    async def initialize(self, __context=None):
        await super().initialize(__context)

        # List available skills
        print(f"Available skills: {self.list_skills()}")

        # Pre-activate commonly used skills
        if "defi" in self.list_skills():
            await self.activate_skill("defi")

async def main():
    agent = Web3Agent(
        llm=ChatBot(llm_provider="openai", model_name="gpt-4o-mini")
    )
    await agent.initialize()

    # DeFi queries
    response = await agent.run("Get a quote to swap 1 ETH for USDC on Uniswap")
    print(response)
```

## Skill Manager API

The `SpoonReactSkill` agent provides comprehensive skill management:

### Listing and Discovery

```python
# List all available skills
skills = agent.list_skills()
print(f"Available: {skills}")

# Get detailed info about a skill
info = agent.skill_manager.get_skill_info("defi")
print(f"Description: {info['description']}")
print(f"Triggers: {info['triggers']}")
```

### Activation and Deactivation

```python
# Activate with optional context
await agent.activate_skill("defi", {"chain": "ethereum"})

# Check if active
is_active = agent.skill_manager.is_active("defi")

# Get all active skills
active = agent.skill_manager.get_active_skills()

# Deactivate when done
await agent.deactivate_skill("defi")
```

### Working with Tools

```python
# Get tools from all active skills
tools = agent.skill_manager.get_active_tools()
for tool in tools:
    print(f"Tool: {tool.name} - {tool.description}")

# Get combined prompt context from all active skills
context = agent.skill_manager.get_active_context()
```

### Direct Script Execution

```python
# Execute a specific script manually
result = await agent.skill_manager.execute_script(
    "defi",
    "uniswap_quote",
    input_text='{"token_in": "ETH", "token_out": "USDC", "amount": "1"}'
)

if result.success:
    print(f"Output: {result.stdout}")
else:
    print(f"Error: {result.error}")
```

### Statistics

```python
# Get skill system statistics
stats = agent.get_skill_stats()
print(f"Active skills: {stats['active_skills']}")
print(f"Scripts enabled: {stats['scripts_enabled']}")
print(f"Available skills: {stats['available_skills']}")
```

## Best Practices

### 1. Keep Skills Focused

Each skill should do one thing well. Compose multiple skills for complex tasks rather than creating monolithic skills.

```python
# Good: Compose focused skills
await agent.activate_skill("defi")
await agent.activate_skill("wallet")

# Bad: One giant "everything" skill
```

### 2. Use Appropriate Triggers

Set trigger priorities to avoid conflicts:

```yaml
triggers:
  # High priority for specific terms
  - type: keyword
    keywords: [uniswap, aave]
    priority: 90

  # Lower priority for general terms
  - type: keyword
    keywords: [swap, trade]
    priority: 70
```

### 3. Handle Errors Gracefully

```python
try:
    await agent.activate_skill("my-skill")
except ValueError as e:
    print(f"Skill activation failed: {e}")
    # Fallback to alternative skill or approach
```

### 4. Validate Script Inputs

In your scripts, always validate input:

```python
import json
import sys

def main():
    try:
        input_data = json.loads(sys.stdin.read())
    except json.JSONDecodeError:
        print(json.dumps({"error": "Invalid JSON input"}))
        sys.exit(1)

    # Validate required fields
    if "query" not in input_data:
        print(json.dumps({"error": "Missing required field: query"}))
        sys.exit(1)

    # Process...
```

### 5. Use Per-Skill Script Control

Disable scripts for skills that don't need them:

```yaml
scripts:
  enabled: false  # This skill only provides prompts
```

## Troubleshooting

### Skill Not Found

```
ValueError: Skill 'my-skill' not found
```

**Solution**: Check that:
1. The skill directory exists in one of your `skill_paths`
2. The directory contains a valid `SKILL.md` file
3. The `name` field in SKILL.md matches what you're activating

### Script Execution Failed

```
ScriptResult(success=False, error="Script timed out")
```

**Solution**:
1. Increase the `timeout` value in SKILL.md
2. Check that the script is executable
3. Verify the script runs correctly standalone

### Auto-Trigger Not Working

**Solution**: Check that:
1. `auto_trigger_skills=True` is set on the agent
2. The skill has valid triggers defined
3. The trigger priority is high enough
4. `max_auto_skills` hasn't been reached

## Next Steps

- **[Skills Core Concepts](/docs/core-concepts/skills)**: Deep dive into SKILL.md specification and trigger system
- **[spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill)**: Browse and use production Web3 skills
- **[Vibe Coding Guide](./vibe-coding)**: Learn more about rapid prototyping with skills
- **[API Reference](/docs/api-reference)**: Complete `SpoonReactSkill` API documentation
