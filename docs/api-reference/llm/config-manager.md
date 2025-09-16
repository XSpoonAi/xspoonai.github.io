# Configuration Manager API Reference

The `ConfigurationManager` handles loading, validation, and management of LLM provider configurations from various sources including environment variables, configuration files, and runtime settings.

## Class Definition

```python
from spoon_ai.llm import ConfigurationManager, ProviderConfig
from typing import Optional, Dict, Any, List

class ConfigurationManager:
    def __init__(self, config_path: Optional[str] = None)
```

## Constructor Parameters

### Optional Parameters

- **config_path** (`Optional[str]`): Path to configuration file (JSON/TOML)

## ProviderConfig Class

```python
from dataclasses import dataclass, field
from typing import Optional, Dict, Any

@dataclass
class ProviderConfig:
    name: str                                    # Provider name
    api_key: str                                 # API key
    base_url: Optional[str] = None              # Custom base URL
    model: str = ""                              # Default model
    max_tokens: int = 4096                       # Max tokens
    temperature: float = 0.3                     # Temperature setting
    timeout: int = 30                            # Request timeout
    retry_attempts: int = 3                      # Retry attempts
    custom_headers: Dict[str, str] = field(default_factory=dict)
    extra_params: Dict[str, Any] = field(default_factory=dict)

    def model_dump(self) -> Dict[str, Any]: ...  # Convert to dict
```

## Configuration Loading

### `load_from_file(file_path: str) -> Dict[str, Any]`

Load configuration from a JSON or TOML file.

**Parameters:**
- `file_path` (`str`): Path to configuration file

**Returns:**
- `Dict[str, Any]`: Loaded configuration

**Raises:**
- `ConfigurationError`: If file format is invalid or file not found

**Example:**
```python
config_manager = ConfigurationManager()
config = config_manager.load_from_file("config.json")
```

### `load_from_env() -> Dict[str, Any]`

Load configuration from environment variables.

**Returns:**
- `Dict[str, Any]`: Configuration from environment

**Example:**
```python
# Environment variables:
# OPENAI_API_KEY=sk-...
# ANTHROPIC_API_KEY=sk-ant-...
# DEFAULT_LLM_PROVIDER=openai

config = config_manager.load_from_env()
```

### `merge_configs(base_config: Dict, override_config: Dict) -> Dict[str, Any]`

Merge two configurations with override priority.

**Parameters:**
- `base_config` (`Dict`): Base configuration
- `override_config` (`Dict`): Override configuration

**Returns:**
- `Dict[str, Any]`: Merged configuration

**Example:**
```python
base = {"provider": "openai", "model": "gpt-4"}
override = {"model": "gpt-4.1", "temperature": 0.7}

merged = config_manager.merge_configs(base, override)
# Result: {"provider": "openai", "model": "gpt-4.1", "temperature": 0.7}
```

## Provider Management

### `get_provider_config(provider_name: str) -> Optional[ProviderConfig]`

Get configuration for a specific provider.

**Parameters:**
- `provider_name` (`str`): Name of the provider

**Returns:**
- `Optional[ProviderConfig]`: Provider configuration or None

**Example:**
```python
openai_config = config_manager.get_provider_config("openai")
if openai_config:
    print(f"Model: {openai_config.model}")
```

### `set_provider_config(provider_name: str, config: Dict[str, Any]) -> None`

Set configuration for a specific provider.

**Parameters:**
- `provider_name` (`str`): Name of the provider
- `config` (`Dict[str, Any]`): Provider configuration

**Example:**
```python
config_manager.set_provider_config("openai", {
    "api_key": "sk-...",
    "model": "gpt-4.1",
    "temperature": 0.7
})
```

### `list_providers() -> List[str]`

List all configured providers.

**Returns:**
- `List[str]`: List of provider names

**Example:**
```python
providers = config_manager.list_providers()
print(f"Configured providers: {providers}")
# Output: ["openai", "anthropic", "gemini"]
```

### `validate_provider_config(provider_name: str, config: Dict[str, Any]) -> bool`

Validate configuration for a provider.

**Parameters:**
- `provider_name` (`str`): Name of the provider
- `config` (`Dict[str, Any]`): Configuration to validate

**Returns:**
- `bool`: True if valid, False otherwise

**Example:**
```python
is_valid = config_manager.validate_provider_config("openai", {
    "api_key": "sk-...",
    "model": "gpt-4.1"
})
```

## Global Settings

### `get_global_config() -> Dict[str, Any]`

Get global LLM configuration settings.

**Returns:**
- `Dict[str, Any]`: Global configuration

**Example:**
```python
global_config = config_manager.get_global_config()
print(f"Default provider: {global_config.get('default_provider')}")
```

### `set_global_config(config: Dict[str, Any]) -> None`

Set global LLM configuration settings.

**Parameters:**
- `config` (`Dict[str, Any]`): Global configuration

**Example:**
```python
config_manager.set_global_config({
    "default_provider": "openai",
    "default_model": "gpt-4.1",
    "timeout": 30,
    "retry_attempts": 3
})
```

## Configuration Files

### JSON Configuration Format

```json
{
  "llm": {
    "default_provider": "openai",
    "default_model": "gpt-4.1",
    "timeout": 30,
    "providers": {
      "openai": {
        "api_key": "sk-your_openai_key_here",
        "model": "gpt-4.1",
        "temperature": 0.7,
        "max_tokens": 4096
      },
      "anthropic": {
        "api_key": "sk-ant-your_anthropic_key_here",
        "model": "claude-sonnet-4-20250514",
        "temperature": 0.1
      },
      "gemini": {
        "api_key": "your_google_key_here",
        "model": "gemini-2.5-pro",
        "temperature": 0.1
      },
      "deepseek": {
        "api_key": "your_deepseek_key_here",
        "model": "deepseek-reasoner",
        "temperature": 0.2
      }
    }
  }
}
```

### TOML Configuration Format

```toml
[llm]
default_provider = "openai"
default_model = "gpt-4.1"
timeout = 30

[llm.providers.openai]
api_key = "sk-your_openai_key_here"
model = "gpt-4.1"
temperature = 0.7
max_tokens = 4096

[llm.providers.anthropic]
api_key = "sk-ant-your_anthropic_key_here"
model = "claude-sonnet-4-20250514"
temperature = 0.1

[llm.providers.gemini]
api_key = "your_google_key_here"
model = "gemini-2.5-pro"
temperature = 0.1

[llm.providers.deepseek]
api_key = "your_deepseek_key_here"
model = "deepseek-reasoner"
temperature = 0.2
```

### Environment Variables

```bash
# Provider API Keys
OPENAI_API_KEY=sk-your_openai_key_here
ANTHROPIC_API_KEY=sk-ant-your_anthropic_key_here
GOOGLE_API_KEY=your_google_key_here
DEEPSEEK_API_KEY=your_deepseek_key_here
OPENROUTER_API_KEY=sk-or-your_openrouter_key_here

# Global Settings
DEFAULT_LLM_PROVIDER=openai
DEFAULT_MODEL=gpt-4.1
DEFAULT_TEMPERATURE=0.3
LLM_TIMEOUT=30
LLM_RETRY_ATTEMPTS=3

# Provider-specific overrides
OPENAI_MODEL=gpt-4.1
ANTHROPIC_MODEL=claude-sonnet-4-20250514
GEMINI_MODEL=gemini-2.5-pro
```

## Configuration Priority

Configuration sources are loaded in the following priority order (highest to lowest):

1. **Runtime configuration** (set via API calls)
2. **Environment variables** (current process)
3. **Configuration file** (JSON/TOML)
4. **Default values** (built-in defaults)

## Validation and Error Handling

### `validate_config(config: Dict[str, Any]) -> List[str]`

Validate a complete configuration and return errors.

**Parameters:**
- `config` (`Dict[str, Any]`): Configuration to validate

**Returns:**
- `List[str]`: List of validation errors (empty if valid)

**Example:**
```python
errors = config_manager.validate_config(config)
if errors:
    for error in errors:
        print(f"Configuration error: {error}")
else:
    print("Configuration is valid")
```

### Error Types

```python
from spoon_ai.llm.errors import ConfigurationError

try:
    config = config_manager.load_from_file("invalid.json")
except ConfigurationError as e:
    print(f"Configuration error: {e}")
```

## Advanced Features

### Dynamic Configuration Updates

```python
# Update configuration at runtime
config_manager.set_provider_config("openai", {
    "model": "gpt-4.1",  # Switch model
    "temperature": 0.5   # Adjust temperature
})

# Changes take effect immediately for new requests
response = await llm_manager.chat(messages)
```

### Configuration Templates

```python
# Define configuration templates for different environments
templates = {
    "development": {
        "timeout": 60,
        "retry_attempts": 5,
        "providers": {
            "openai": {"model": "gpt-3.5-turbo"}  # Cost-effective for dev
        }
    },
    "production": {
        "timeout": 30,
        "retry_attempts": 3,
        "providers": {
            "openai": {"model": "gpt-4.1"}  # High-quality for prod
        }
    }
}

# Apply template
config_manager.apply_template(templates["production"])
```

### Configuration Encryption

```python
# Encrypt sensitive configuration values
encrypted_config = config_manager.encrypt_config({
    "api_key": "sk-very-secret-key"
})

# Decrypt when needed
decrypted = config_manager.decrypt_config(encrypted_config)
```

## Security Best Practices

### API Key Management

```python
# Never hardcode API keys
# Use environment variables or secure key management

import os
from spoon_ai.llm import ConfigurationManager

config_manager = ConfigurationManager()

# Secure: Load from environment
config_manager.set_provider_config("openai", {
    "api_key": os.getenv("OPENAI_API_KEY"),
    "model": "gpt-4.1"
})

# Avoid: Hardcoded keys (NEVER DO THIS)
# config_manager.set_provider_config("openai", {
#     "api_key": "sk-1234567890abcdef",  # SECURITY RISK!
# })
```

### Configuration Validation

```python
# Always validate configurations before use
config = {
    "providers": {
        "openai": {
            "api_key": os.getenv("OPENAI_API_KEY"),
            "model": "gpt-4.1",
            "temperature": 0.7
        }
    }
}

errors = config_manager.validate_config(config)
if errors:
    raise ValueError(f"Invalid configuration: {errors}")

# Only proceed if configuration is valid
llm_manager = LLMManager(config_manager=config_manager)
```

## Integration Examples

### With LLMManager

```python
from spoon_ai.llm import ConfigurationManager, LLMManager

# Initialize configuration
config_manager = ConfigurationManager("config.json")

# Create LLM manager with configuration
llm_manager = LLMManager(config_manager=config_manager)

# Configuration changes are automatically picked up
response = await llm_manager.chat(messages)
```

### Programmatic Configuration

```python
from spoon_ai.llm import ConfigurationManager

config_manager = ConfigurationManager()

# Configure providers programmatically
providers = {
    "openai": {
        "api_key": os.getenv("OPENAI_API_KEY"),
        "model": "gpt-4.1",
        "temperature": 0.7
    },
    "anthropic": {
        "api_key": os.getenv("ANTHROPIC_API_KEY"),
        "model": "claude-sonnet-4-20250514",
        "temperature": 0.1
    }
}

for name, config in providers.items():
    config_manager.set_provider_config(name, config)

# Set global preferences
config_manager.set_global_config({
    "default_provider": "openai",
    "fallback_providers": ["anthropic"],
    "timeout": 30
})
```

## Best Practices

### Configuration Organization
- Use configuration files for complex setups
- Store sensitive data in environment variables
- Validate configurations before deployment

### Environment-Specific Configs
- Use different configurations for dev/staging/production
- Override settings via environment variables
- Use configuration templates for consistency

### Security
- Never commit API keys to version control
- Use secure key management systems
- Rotate API keys regularly
- Validate all configuration inputs

### Performance
- Cache configuration when possible
- Avoid loading configuration on every request
- Use efficient configuration formats (JSON preferred)

## See Also

- [LLMManager](llm-manager.md) - LLM orchestration layer
- [Provider Interface](provider-interface.md) - Provider abstraction
- [LLM Providers](../../core-concepts/llm-providers.md) - Supported providers overview
