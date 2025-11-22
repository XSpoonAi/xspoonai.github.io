# ConfigurationManager API Reference

`ConfigurationManager` loads LLM provider settings from environment variables (optionally a `.env` file) and validates them. It is the sole source of provider config for `LLMManager`.

## Class Definition

```python
from spoon_ai.llm import ConfigurationManager, ProviderConfig

config = ConfigurationManager()
```

`__init__` automatically:
- loads `.env` (if `python-dotenv` is installed) from the current or parent directories,
- builds an in-memory cache of provider configs,
- populates defaults for known providers.

## ProviderConfig

```python
ProviderConfig(
    name: str,
    api_key: str,
    base_url: str | None = None,
    model: str = "",
    max_tokens: int = 4096,
    temperature: float = 0.3,
    timeout: int = 30,
    retry_attempts: int = 3,
    custom_headers: dict[str, str] = {},
    extra_params: dict[str, Any] = {},
)
```
Validation runs in `__post_init__` (non‑empty name/key, positive limits, temperature 0–2, etc.).

## Public Methods

- `load_provider_config(provider_name: str) -> ProviderConfig`  
  Reads environment variables (e.g., `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPENAI_BASE_URL`) and returns a validated `ProviderConfig`. Raises `ConfigurationError` on missing/placeholder values.

- `validate_config(config: dict) -> list[str]`  
  Returns validation errors for a config dict; empty list means valid.

- `get_default_provider() -> str | None`  
  Derived from `DEFAULT_LLM_PROVIDER` or the first configured provider.

- `get_fallback_chain() -> list[str]`  
  Parsed from `LLM_FALLBACK_CHAIN` (comma‑separated) when present.

- `list_configured_providers() -> list[str]`  
  Names that have usable API keys in the environment.

- `get_available_providers_by_priority() -> list[str]`  
  Combines default provider and fallback chain, preserving order and removing duplicates.

- `get_provider_info(provider_name: str) -> dict[str, Any]`  
  Returns a serializable view of a provider’s config (masking secrets).

- `reload_config() -> None`  
  Clears caches and reloads from environment (and `.env` if available).

## Environment Variables (examples)
- `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPENAI_BASE_URL`
- `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`
- `DEFAULT_LLM_PROVIDER=openai`
- `LLM_FALLBACK_CHAIN=anthropic,openai`

## Example

```python
import os
from spoon_ai.llm import ConfigurationManager

os.environ["OPENAI_API_KEY"] = "sk-..."
os.environ["OPENAI_MODEL"] = "gpt-4.1"

cfg = ConfigurationManager()
openai_cfg = cfg.load_provider_config("openai")
print(openai_cfg.model)  # gpt-4.1
```

## See Also
- `llm-manager.md` for how configs are consumed.
- `provider-interface.md` for provider capabilities.
