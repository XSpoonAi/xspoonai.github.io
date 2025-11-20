# Vibe Coding / IDE AI Guide

Give Cursor, Codex, Claude Code, and similar assistants the right context to generate accurate XSpoonAi code. Pick **one** of the three methods below; they are independent.

## Method 1: Share the workspace directly

- Allow the assistant to read this repo (especially `core/`, `toolkit/`, `cookbook/docs/`). No extra cloning required.
- Need a local checkout first? From your working directory run:
  ```bash
  git clone https://github.com/XSpoonAi/spoon-core.git
  git clone https://github.com/XSpoonAi/spoon-toolkit.git
  ```
- Keep the repo up to date (`git pull`) so the assistant always sees current code and docs.
- Ask it to open real source first, e.g. `core/spoon_ai/**` and runnable samples in `core/examples/` and `toolkit/**/examples`.
- Tell the AI to derive function signatures and configs from code files or examples, not invented abstractions.

## Method 2: Point to installed package paths

- If you installed editable/local packages, expose their locations instead of the repo:
  ```bash
  python -c "import importlib.util, os; spec = importlib.util.find_spec('spoon_ai'); print('spoon_ai:', os.path.dirname(spec.origin) if spec and spec.origin else 'not installed')"
  python -c "import importlib.util, os; spec = importlib.util.find_spec('spoon_toolkits'); print('spoon_toolkits:', os.path.dirname(spec.origin) if spec and spec.origin else 'not installed')"
  ```
- Provide those paths to the assistant as read-only references so it can scan the actual shipped code and examples inside the installed packages.
- If a package isn’t installed (output shows “not installed”), just share the corresponding repo directory (e.g., `core/spoon_ai` or `toolkit/spoon_toolkits`) instead.

## Method 3: Use MCP for online retrieval (no local clone)

- Configure MCP connectors (e.g., deepwiki/context7) that can fetch files from GitHub or the web.
- Target upstream repos directly: `XSpoonAi/spoon-core` and `XSpoonAi/toolkit` (source + examples) plus this Cookbook site for docs.
- Instruct the assistant to: list relevant files, fetch the exact file contents it will mimic, then cite paths/lines. No need to mirror or clone locally.

## Hallucination-reduction tips (tell the AI)

- "Read the source or examples you will copy from; cite file path and line range before coding."
- "Confirm tool/agent/LLM signatures from code, not from guesswork; show the imports you plan to use."
- "If unsure, fetch the specific file via MCP and restate the interface before implementing."
