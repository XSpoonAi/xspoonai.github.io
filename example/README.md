# SpoonOS Examples

This folder contains runnable examples referenced by the docs.

## Quick start

1. Create and activate a virtual environment (Windows PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
# From the repo root, install spoon-core in editable mode for local dev
cd ..\..\spoon-core
pip install -e .
cd ..\spoonos-cookbook\example
```

3. Configure API keys:

```powershell
copy .env.example .env
# Edit .env and fill keys as needed
```

4. Run the basic agent:

```powershell
python my_first_agent.py
```

Notes:
- Tavily search is optional; set `TAVILY_API_KEY` to enable.
- Requires Python 3.10+ (matches `pyproject.toml`).
