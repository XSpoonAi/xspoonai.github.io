# Skills

Skills are modular, reusable AI capabilities that can be dynamically activated to enhance your agents. They provide a powerful way to organize prompts, tools, and scripts into portable packages.

:::tip Web3 Skills Collection
Production-ready Web3 skills for cryptocurrency research, DeFi analysis, and blockchain development are available at **[spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill)**. Clone and customize them for your projects!
:::

## Overview

A skill is a self-contained module defined by a `SKILL.md` file. Each skill encapsulates:

| Component | Description |
|-----------|-------------|
| **Metadata** | Name, description, version, tags, and triggers |
| **Instructions** | Markdown prompts injected into the agent's context |
| **Scripts** | Executable Python/Shell scripts exposed as tools |
| **Triggers** | Keywords, patterns, or intents for auto-activation |

## Design Philosophy

### Portability

Skills are self-contained folders that can be shared by simply copying directories:

```
skills/
└── defi/
    ├── SKILL.md           # Metadata + instructions
    └── scripts/
        └── uniswap_quote.py
```

No external dependencies or complex setup required—just copy and use.

### Dynamic Activation

Skills support multiple activation modes:

| Mode | Description | Example |
|------|-------------|---------|
| **Manual** | Explicitly activated via code | `await agent.activate_skill("defi")` |
| **Auto-triggered** | Activated based on user input patterns | User says "swap ETH" → triggers `defi` skill |
| **Composed** | Skills that require or include other skills | `advanced-trading` includes `defi` |

### Vibe Coding Experience

Skills enable a **"vibe coding"** workflow where you:

1. **Copy** existing skills from [spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill)
2. **Customize** the SKILL.md prompts for your use case
3. **Enable scripts** and let the AI figure out how to use them
4. **Ship** without writing complex agent logic

## SKILL.md Specification

The `SKILL.md` file is the heart of every skill. It uses YAML frontmatter for metadata followed by Markdown instructions.

### Complete Schema

```yaml
---
# ===== Required Fields =====
name: skill-name                    # Unique identifier (lowercase, hyphens)
description: What the skill does    # Human-readable description

# ===== Optional Metadata =====
version: 1.0.0                      # Semantic version
author: Your Name                   # Skill author
tags:                               # Categorization tags
  - research
  - web3
  - defi

# ===== Trigger Configuration =====
triggers:
  - type: keyword                   # Trigger type: keyword | pattern | intent
    keywords:                       # Words that activate the skill
      - research
      - analyze
      - investigate
    priority: 80                    # 0-100, higher = more likely to activate

  - type: pattern                   # Regex-based triggers
    patterns:
      - "(?i)analyze.*data"
      - "(?i)research.*topic"
    priority: 70

  - type: intent                    # LLM-classified intent triggers
    intent_category: research
    priority: 90

# ===== Parameters =====
parameters:                         # Input parameters the skill accepts
  - name: topic
    type: string                    # string | integer | boolean | float
    required: true
    default: null
    description: Research topic

# ===== Script Configuration =====
scripts:
  enabled: true                     # Enable/disable all scripts for this skill
  working_directory: ./scripts      # Base directory for script files

  definitions:
    - name: web_search              # Script identifier
      description: Search the web   # Tool description shown to agent
      type: python                  # python | shell | bash
      file: search.py               # Relative to working_directory
      timeout: 30                   # Execution timeout in seconds
      run_on_activation: false      # Auto-run when skill activates
      run_on_deactivation: false    # Auto-run when skill deactivates
      working_directory: ./custom   # Override skill-level working_directory

    - name: inline_script
      type: bash
      inline: |                     # Inline script (alternative to file)
        echo "Hello from inline script"
      timeout: 10
---

# Skill Instructions

Your prompt content here. This Markdown content is injected into
the agent's system prompt when the skill is activated.

## Capabilities
- List what the agent can do with this skill

## Guidelines
1. Behavioral instructions for the agent
2. How to use the available tools
3. Output format expectations
```

### Field Reference

#### Core Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✓ | Unique skill identifier. Use lowercase with hyphens. |
| `description` | string | ✓ | Human-readable description of the skill's purpose. |
| `version` | string | | Semantic version (e.g., `1.0.0`). |
| `author` | string | | Skill author name or organization. |
| `tags` | string[] | | Categorization tags for discovery and filtering. |

#### Trigger Fields

| Field | Type | Description |
|-------|------|-------------|
| `triggers[].type` | enum | `keyword`, `pattern`, or `intent` |
| `triggers[].keywords` | string[] | Words that trigger activation (for `keyword` type) |
| `triggers[].patterns` | string[] | Regex patterns (for `pattern` type) |
| `triggers[].intent_category` | string | Intent label (for `intent` type) |
| `triggers[].priority` | number | 0-100 priority score. Higher values take precedence. |

#### Parameter Fields

| Field | Type | Description |
|-------|------|-------------|
| `parameters[].name` | string | Parameter identifier |
| `parameters[].type` | enum | `string`, `integer`, `boolean`, or `float` |
| `parameters[].required` | boolean | Whether the parameter is required |
| `parameters[].default` | any | Default value if not provided |
| `parameters[].description` | string | Human-readable description |

#### Script Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `scripts.enabled` | boolean | `true` | Master switch for all scripts in this skill |
| `scripts.working_directory` | string | `./scripts` | Base directory for script files |
| `scripts.definitions[].name` | string | | Script identifier (exposed as tool name) |
| `scripts.definitions[].description` | string | | Tool description shown to the agent |
| `scripts.definitions[].type` | enum | `python` | `python`, `shell`, or `bash` |
| `scripts.definitions[].file` | string | | Script file path (relative to working_directory) |
| `scripts.definitions[].inline` | string | | Inline script content (alternative to file) |
| `scripts.definitions[].timeout` | number | `30` | Execution timeout in seconds |
| `scripts.definitions[].working_directory` | string | | Override skill-level working_directory |
| `scripts.definitions[].run_on_activation` | boolean | `false` | Auto-run when skill activates |
| `scripts.definitions[].run_on_deactivation` | boolean | `false` | Auto-run when skill deactivates |

## Trigger System

Triggers determine when a skill should be automatically activated based on user input.

### Keyword Triggers

Match specific words in user input:

```yaml
triggers:
  - type: keyword
    keywords:
      - uniswap
      - swap
      - defi
    priority: 80
```

**Matching behavior**: Case-insensitive word boundary matching. "I want to swap tokens" matches `swap`.

### Pattern Triggers

Use regular expressions for complex matching:

```yaml
triggers:
  - type: pattern
    patterns:
      - "(?i)swap.*for.*"           # "swap ETH for USDC"
      - "(?i)liquidity.*pool"       # "add liquidity to pool"
    priority: 70
```

**Matching behavior**: Full regex support with flags (e.g., `(?i)` for case-insensitive).

### Intent Triggers

Use LLM classification for semantic matching:

```yaml
triggers:
  - type: intent
    intent_category: defi_trading
    priority: 90
```

**Matching behavior**: The agent's LLM classifies user intent and matches against the category.

### Priority Resolution

When multiple skills match, priority determines activation order:

1. Higher priority values win (0-100 scale)
2. Equal priorities: first match wins
3. `max_auto_skills` limits concurrent auto-activated skills

## Script Execution

Scripts are executable files that become agent tools when a skill is activated.

### Script Types

| Type | Interpreter | Use Case |
|------|-------------|----------|
| `python` | Python 3 | Complex logic, API calls, data processing |
| `shell` | System shell | Simple commands, file operations |
| `bash` | Bash | Bash-specific features, scripting |

### Input/Output Protocol

Scripts receive input via **stdin** and return output via **stdout**:

```python
#!/usr/bin/env python3
import sys
import json

def main():
    # Read input from stdin
    input_data = sys.stdin.read().strip()

    # Parse JSON input (optional)
    try:
        params = json.loads(input_data)
    except json.JSONDecodeError:
        params = {"query": input_data}

    # Process and return result
    result = {"status": "success", "data": process(params)}

    # Output JSON to stdout
    print(json.dumps(result, indent=2))

if __name__ == "__main__":
    main()
```

### Lifecycle Scripts

Scripts can run automatically during skill lifecycle:

```yaml
scripts:
  definitions:
    - name: setup
      type: python
      file: setup.py
      run_on_activation: true      # Runs when skill activates

    - name: cleanup
      type: bash
      inline: "rm -rf /tmp/cache_*"
      run_on_deactivation: true    # Runs when skill deactivates
```

## MCP vs Skills

SpoonOS supports both MCP-based and skill-based agents:

| Feature | MCP Tools | Skills |
|---------|-----------|--------|
| Tool source | External MCP servers | SKILL.md scripts |
| Prompts | Manual configuration | Auto-injected from SKILL.md |
| Auto-activation | No | Yes (via triggers) |
| Portability | Requires MCP server setup | Copy folder |
| Best for | External services (databases, APIs) | Self-contained capabilities |

**Choose MCP** when integrating external services that have MCP servers.

**Choose Skills** for portable, self-contained AI capabilities with custom prompts.

## Security Considerations

### Script Execution Risks

- Scripts run with your Python process permissions
- No sandboxing by default—scripts have full system access
- Input from the agent is passed directly to scripts

### Mitigation Strategies

1. **Disable scripts in production** if not needed:
   ```python
   agent = SpoonReactSkill(scripts_enabled=False)
   ```

2. **Validate inputs** in your scripts:
   ```python
   def validate_input(data):
       if not isinstance(data, dict):
           raise ValueError("Invalid input format")
       # Additional validation...
   ```

3. **Review third-party skills** before using them

4. **Use per-skill disable** for untrusted skills:
   ```yaml
   scripts:
     enabled: false  # Disable scripts for this skill
   ```

## Web3 Skills Collection

The [spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill) repository provides production-ready skills:

| Skill | Description |
|-------|-------------|
| **defi** | DeFi protocol interactions (Uniswap, Aave, Compound) |
| **onchain-analysis** | On-chain data analysis (Etherscan, gas tracking) |
| **nft** | NFT market analysis (OpenSea, rarity calculations) |
| **wallet** | Wallet operations and portfolio tracking |
| **solana** | Solana ecosystem (Jupiter, Raydium) |
| **neo** | Neo N3 ecosystem (NeoX, NeoFS) |

## Next Steps

- **[Building Skill Agents](/docs/how-to-guides/build-skill-agents)**: Step-by-step tutorial for building skill-powered agents
- **[spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill)**: Ready-to-use Web3 skills
- **[Vibe Coding](/docs/how-to-guides/vibe-coding)**: Rapid prototyping workflow with skills
