# Installation

## Prerequisites

- Python 3.11 or higher
- Git
- Virtual environment (recommended)

## Quick Installation

### 1. Clone the Repository

```bash
git clone https://github.com/XSpoonAi/spoon-core.git
cd spoon-core
```

### 2. Create Virtual Environment

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
> to target Python 3.10 or later.

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Install as Package (Optional)

```bash
pip install -e .
```

## Verification

Test your installation by creating a simple agent:

```python
# test_installation.py
import asyncio
from spoon_ai.chat import ChatBot

async def test_installation():
    # Test basic LLM functionality - framework handles errors automatically
    llm = ChatBot(
        llm_provider="openai",  # or your preferred provider
        model_name="gpt-4.1"  # Framework default
    )

    # Framework provides automatic validation and error handling
    return "✅ SpoonOS framework installed successfully!"

if __name__ == "__main__":
    result = asyncio.run(test_installation())
    print(result)
```

Run the test:

```bash
python test_installation.py
```

You should see success messages indicating the framework is ready.

## Framework Validation

The SpoonOS framework includes built-in validation that automatically:

- Checks API key configuration
- Validates provider connectivity
- Ensures proper dependency installation
- Provides clear error messages if issues are found

## Next Steps

- [Configuration](./configuration.md) - Set up API keys and configuration
- [Quick Start](./quick-start.md) - Build your first agent
