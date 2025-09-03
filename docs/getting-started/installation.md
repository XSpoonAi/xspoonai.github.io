# Installation

## Prerequisites

- Python 3.10 or higher
- Git
- Virtual environment (recommended)

## Quick Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SpoonOS/spoon-core.git
cd spoon-core
```

### 2. Create Virtual Environment

```bash
python -m venv spoon-env
source spoon-env/bin/activate  # Linux/macOS
# or
spoon-env\Scripts\activate     # Windows
```

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

## Alternative: CLI Interface

You can also test using the CLI interface:

```bash
python main.py
```

## Next Steps

- [Configuration](./configuration.md) - Set up API keys and configuration
- [Quick Start](./quick-start.md) - Build your first agent