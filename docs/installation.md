---
sidebar_position: 2
---

# Installation

This guide walks you through setting up the **SpoonOS Core Developer Framework (SCDF)** on your development machine.

## Prerequisites

Before installing SpoonOS, ensure you have the following:

- **Python 3.10 or higher** - SpoonOS requires modern Python features
- **pip** - Python package manager (usually comes with Python)
- **Git** - For cloning the repository
- **Virtual environment tool** - `venv` (recommended) or `conda`

### Check Your Python Version

```bash
python --version
# Should output Python 3.10.x or higher
```

If you need to install or upgrade Python:
- **Windows**: Download from [python.org](https://www.python.org/downloads/)
- **macOS**: Use Homebrew: `brew install python@3.11`
- **Linux**: Use your package manager: `sudo apt install python3.11`

## Installation Methods

### Method 1: Install from PyPI (Recommended)

The easiest way to get started:

```bash
# Create a virtual environment
python -m venv spoon-env

# Activate the virtual environment
# On macOS/Linux:
source spoon-env/bin/activate
# On Windows:
spoon-env\Scripts\activate

# Install SpoonOS
pip install spoon-ai-sdk
```

### Method 2: Install from Source

For development or to get the latest features:

```bash
# Clone the repository
git clone https://github.com/XSpoonAi/spoon-core.git
cd spoon-core

# Create and activate virtual environment
python -m venv spoon-env
source spoon-env/bin/activate  # macOS/Linux
# spoon-env\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Install in editable mode (for development)
pip install -e .
```

### Method 3: Using uv (Faster Alternative)

If you prefer faster package management:

```bash
# Install uv first
pip install uv

# Clone and install
git clone https://github.com/XSpoonAi/spoon-core.git
cd spoon-core

# Create virtual environment with uv
uv venv spoon-env
source spoon-env/bin/activate  # macOS/Linux

# Install dependencies with uv
uv pip install -r requirements.txt
uv pip install -e .
```

## Verify Installation

After installation, verify everything is working:

```bash
# Check if SpoonOS is installed
python -c "import spoon_ai; print('SpoonOS installed successfully!')"

# Start the CLI to test
python main.py
```

You should see the SpoonOS CLI interface:

```
🥄 SpoonOS Core Developer Framework
Welcome to the interactive CLI!
Type 'help' for available commands.

> 
```

## Optional Dependencies

### For Web3 Features

If you plan to use Web3 functionality:

```bash
pip install web3 eth-account
```

### For Advanced Graph Features

For complex workflow orchestration:

```bash
pip install networkx matplotlib
```

### For Development

If you're contributing to SpoonOS:

```bash
pip install pytest black flake8 mypy
```

## Troubleshooting

### Common Issues

**Python Version Error**
```
ERROR: Python 3.9 is not supported
```
**Solution**: Upgrade to Python 3.10 or higher.

**Permission Denied**
```
ERROR: Could not install packages due to an EnvironmentError
```
**Solution**: Use a virtual environment or add `--user` flag.

**Import Error**
```
ModuleNotFoundError: No module named 'spoon_ai'
```
**Solution**: Ensure your virtual environment is activated.

### Getting Help

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/XSpoonAi/spoon-core/issues)
2. Join our [Discord community](https://discord.gg/spoonos)
3. Read the [troubleshooting guide](./troubleshooting)

## Next Steps

Now that SpoonOS is installed:

1. **[Configure your environment](./configuration)** - Set up API keys and settings
2. **[Quick start guide](./quick-start)** - Build your first agent
3. **[Explore examples](./examples/basic-agent)** - See SpoonOS in action

## Development Setup

For contributors and advanced users:

```bash
# Clone with development dependencies
git clone https://github.com/XSpoonAi/spoon-core.git
cd spoon-core

# Install development dependencies
pip install -r requirements-dev.txt

# Run tests
pytest

# Run linting
black . && flake8 . && mypy .
```

Ready to configure your environment? Let's move on to [Configuration](./configuration)! 🚀
