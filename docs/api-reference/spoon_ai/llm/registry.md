---
id: spoon_ai.llm.registry
slug: /api-reference/spoon_ai/llm/registry.md
title: spoon_ai.llm.registry
---

# Table of Contents

* [spoon\_ai.llm.registry](#spoon_ai.llm.registry)
  * [LLMProviderRegistry](#spoon_ai.llm.registry.LLMProviderRegistry)
    * [register](#spoon_ai.llm.registry.LLMProviderRegistry.register)
    * [get\_provider](#spoon_ai.llm.registry.LLMProviderRegistry.get_provider)
    * [list\_providers](#spoon_ai.llm.registry.LLMProviderRegistry.list_providers)
    * [get\_capabilities](#spoon_ai.llm.registry.LLMProviderRegistry.get_capabilities)
    * [is\_registered](#spoon_ai.llm.registry.LLMProviderRegistry.is_registered)
    * [unregister](#spoon_ai.llm.registry.LLMProviderRegistry.unregister)
    * [clear](#spoon_ai.llm.registry.LLMProviderRegistry.clear)
  * [register\_provider](#spoon_ai.llm.registry.register_provider)
  * [get\_global\_registry](#spoon_ai.llm.registry.get_global_registry)

<a id="spoon_ai.llm.registry"></a>

# Module `spoon_ai.llm.registry`

LLM Provider Registry for dynamic provider registration and discovery.

<a id="spoon_ai.llm.registry.LLMProviderRegistry"></a>

## `LLMProviderRegistry` Objects

```python
class LLMProviderRegistry()
```

Registry for managing LLM provider classes and instances.

<a id="spoon_ai.llm.registry.LLMProviderRegistry.register"></a>

#### `register`

```python
def register(name: str, provider_class: Type[LLMProviderInterface]) -> None
```

Register a provider class.

**Arguments**:

- `name` - Unique provider name
- `provider_class` - Provider class implementing LLMProviderInterface
  

**Raises**:

- `ConfigurationError` - If provider name already exists or class is invalid

<a id="spoon_ai.llm.registry.LLMProviderRegistry.get_provider"></a>

#### `get_provider`

```python
def get_provider(
        name: str,
        config: Optional[Dict[str, Any]] = None) -> LLMProviderInterface
```

Get or create provider instance.

**Arguments**:

- `name` - Provider name
- `config` - Provider configuration (optional if already configured)
  

**Returns**:

- `LLMProviderInterface` - Provider instance
  

**Raises**:

- `ConfigurationError` - If provider not found or configuration invalid

<a id="spoon_ai.llm.registry.LLMProviderRegistry.list_providers"></a>

#### `list_providers`

```python
def list_providers() -> List[str]
```

List all registered provider names.

**Returns**:

- `List[str]` - List of provider names

<a id="spoon_ai.llm.registry.LLMProviderRegistry.get_capabilities"></a>

#### `get_capabilities`

```python
def get_capabilities(name: str) -> List[ProviderCapability]
```

Get provider capabilities.

**Arguments**:

- `name` - Provider name
  

**Returns**:

- `List[ProviderCapability]` - List of supported capabilities
  

**Raises**:

- `ConfigurationError` - If provider not found

<a id="spoon_ai.llm.registry.LLMProviderRegistry.is_registered"></a>

#### `is_registered`

```python
def is_registered(name: str) -> bool
```

Check if a provider is registered.

**Arguments**:

- `name` - Provider name
  

**Returns**:

- `bool` - True if provider is registered

<a id="spoon_ai.llm.registry.LLMProviderRegistry.unregister"></a>

#### `unregister`

```python
def unregister(name: str) -> None
```

Unregister a provider.

**Arguments**:

- `name` - Provider name

<a id="spoon_ai.llm.registry.LLMProviderRegistry.clear"></a>

#### `clear`

```python
def clear() -> None
```

Clear all registered providers and instances.

<a id="spoon_ai.llm.registry.register_provider"></a>

#### `register_provider`

```python
def register_provider(name: str,
                      capabilities: Optional[List[ProviderCapability]] = None)
```

Decorator for automatic provider registration.

**Arguments**:

- `name` - Provider name
- `capabilities` - List of supported capabilities (optional)
  

**Returns**:

  Decorator function

<a id="spoon_ai.llm.registry.get_global_registry"></a>

#### `get_global_registry`

```python
def get_global_registry() -> LLMProviderRegistry
```

Get the global provider registry instance.

**Returns**:

- `LLMProviderRegistry` - Global registry instance

