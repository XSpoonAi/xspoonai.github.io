# Installation

## Prerequisites

- Python 3.12 or higher
- Git
- Virtual environment (recommended)

## Quick Installation

### Option A: Install from PyPI (recommended)

You can use the published PyPI packages without cloning the repository:

1. Create and activate a virtual environment

```bash
# macOS/Linux
python3 -m venv spoon-env
source spoon-env/bin/activate

# Windows (PowerShell)
python -m venv spoon-env
.\spoon-env\Scripts\Activate.ps1
```

2. Install the core SDK (and optionally the toolkits package)

```bash
pip install spoon-ai-sdk        # core framework
pip install spoon-toolkits      # optional: extended blockchain & data toolkits
```

### Option B: Use a local repository checkout

If you are working inside this monorepo (for example you already opened it in your IDE), you can install directly from the local folders without needing to `git clone` again.

1. Create Virtual Environment

```bash
# macOS/Linux
python3 -m venv spoon-env
source spoon-env/bin/activate

# Windows (PowerShell)
python -m venv spoon-env
.\spoon-env\Scripts\Activate.ps1
```

> 💡 On newer Apple Silicon Macs the `python` shim may not point to Python 3.
> Use `python3` for all commands unless you have explicitly configured `python`
> to target Python 3.12 or 3.13.

2. Install core package in editable mode

```bash
git clone https://github.com/XSpoonAi/spoon-core.git
cd spoon-core
pip install -e .
```

3. (Optional) Install Toolkits Package from local repo

If you want to use the extended blockchain and data tools from `spoon_toolkits`, install the **spoon-toolkits** package from the `spoon-toolkit` folder:

```bash
git clone https://github.com/XSpoonAi/spoon-toolkit.git
cd spoon-toolkit
pip install -e .
```

## Framework Validation

The SpoonOS framework includes built-in validation that automatically:

- Checks API key configuration
- Validates provider connectivity
- Ensures proper dependency installation
- Provides clear error messages if issues are found

## Next Steps

- [Configuration](./configuration.md) - Set up API keys and configuration
- [Quick Start](./quick-start.md) - Build your first agent
