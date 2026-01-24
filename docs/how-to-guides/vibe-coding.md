# Vibe Coding / IDE AI Guide

Give Cursor, Codex, Claude Code, and similar assistants the right context to generate accurate XSpoonAi code. Pick **one** of the four methods below; they are independent, ordered from most guided to most manual.

## Method 1: Use MCP / online retrieval (no local clone)

- Configure MCP connectors (e.g., deepwiki/context7) to fetch files from GitHub or the web.
- Target upstream repos directly: `XSpoonAi/spoon-core` and `XSpoonAi/toolkit` (source + examples) plus this Cookbook site for docs.
- Instruct the assistant to: list relevant files, fetch the exact file contents it will mimic, then cite paths/lines. No need to mirror or clone locally.

## Method 2: Supply the bundled docs file (`cookbook/llm.txt`)

- The repo ships an auto-generated bundle of every Markdown doc at `cookbook/llm.txt` (CI keeps it fresh).
- Share that single file with your LLM to give it the full Cookbook context for Vibe Coding.
- GitHub copy (fallback): [`llm.txt`](https://github.com/XSpoonAi/xspoonai.github.io/blob/main/llm.txt).

## Method 3: Point to installed package paths

- If you installed editable/local packages, expose their locations instead of the repo:
  ```bash
  python -c "import importlib.util, os; spec = importlib.util.find_spec('spoon_ai'); print('spoon_ai:', os.path.dirname(spec.origin) if spec and spec.origin else 'not installed')"
  python -c "import importlib.util, os; spec = importlib.util.find_spec('spoon_toolkits'); print('spoon_toolkits:', os.path.dirname(spec.origin) if spec and spec.origin else 'not installed')"
  ```
- Provide those paths to the assistant as read-only references so it can scan the actual shipped code and examples inside the installed packages.
- If a package isn’t installed (output shows “not installed”), just share the corresponding repo directory (e.g., `core/spoon_ai` or `toolkit/spoon_toolkits`) instead.

## Method 4: Share the workspace directly

- Allow the assistant to read this repo (especially `core/`, `toolkit/`, `cookbook/docs/`). No extra cloning required.
- Need a local checkout first? From your working directory run:
  ```bash
  git clone https://github.com/XSpoonAi/spoon-core.git
  git clone https://github.com/XSpoonAi/spoon-toolkit.git
  ```
- Keep the repo up to date (`git pull`) so the assistant always sees current code and docs.
- Ask it to open real source first, e.g. `core/spoon_ai/**` and runnable samples in `core/examples/` and `toolkit/**/examples`.
- Tell the AI to derive function signatures and configs from code files or examples, not invented abstractions.

## Hallucination-reduction tips (tell the AI)

- "Read the source or examples you will copy from; cite file path and line range before coding."
- "Confirm tool/agent/LLM signatures from code, not from guesswork; show the imports you plan to use."
- "If unsure, fetch the specific file via MCP and restate the interface before implementing."

## Method 5: Vibe Code with Skills

Use SpoonOS Skills for the ultimate vibe coding experience. Skills provide ready-to-use prompts, tools, and scripts that you can drop into your project and customize.

### Quick Start with Skills

```bash
# Get Web3 skills from the awesome collection
git clone https://github.com/XSpoonAi/spoon-awesome-skill.git

# Copy skills to your project
cp -r spoon-awesome-skill/web3-skills/defi ./skills/
```

### Build Skill-Powered Agents

```python
from spoon_ai.agents import SpoonReactSkill
from spoon_ai.chat import ChatBot

agent = SpoonReactSkill(
    llm=ChatBot(llm_provider="openai", model_name="gpt-4o-mini"),
    skill_paths=["./skills"],
    scripts_enabled=True,
    auto_trigger_skills=True
)

await agent.initialize()
await agent.activate_skill("defi")

# The AI figures out how to use the skill's scripts and prompts
response = await agent.run("Get a quote to swap 1 ETH for USDC")
```

### Why Skills for Vibe Coding?

1. **Copy & Customize**: Drop SKILL.md files into your workspace, tweak the prompts
2. **AI Decides How**: Enable scripts and let the AI figure out tool usage
3. **Portable**: Skills are self-contained folders - easy to share and version
4. **Web3 Ready**: Get production skills from [spoon-awesome-skill](https://github.com/XSpoonAi/spoon-awesome-skill)

See the full [Building Skill Agents](./build-skill-agents) guide for detailed instructions.
