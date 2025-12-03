---
id: spoon_ai.payments.config
slug: /api-reference/spoon_ai/payments/config.md
title: spoon_ai.payments.config
---

# Table of Contents

* [spoon\_ai.payments.config](#spoon_ai.payments.config)
  * [X402ConfigurationError](#spoon_ai.payments.config.X402ConfigurationError)
  * [X402PaywallBranding](#spoon_ai.payments.config.X402PaywallBranding)
  * [X402ClientConfig](#spoon_ai.payments.config.X402ClientConfig)
  * [X402Settings](#spoon_ai.payments.config.X402Settings)
    * [amount\_in\_atomic\_units](#spoon_ai.payments.config.X402Settings.amount_in_atomic_units)
    * [build\_asset\_extra](#spoon_ai.payments.config.X402Settings.build_asset_extra)
    * [load](#spoon_ai.payments.config.X402Settings.load)

<a id="spoon_ai.payments.config"></a>

# Module `spoon_ai.payments.config`

<a id="spoon_ai.payments.config.X402ConfigurationError"></a>

## `X402ConfigurationError` Objects

```python
class X402ConfigurationError(Exception)
```

Raised when required x402 configuration is missing or invalid.

<a id="spoon_ai.payments.config.X402PaywallBranding"></a>

## `X402PaywallBranding` Objects

```python
class X402PaywallBranding(BaseModel)
```

Optional branding customisations for the embedded paywall template.

<a id="spoon_ai.payments.config.X402ClientConfig"></a>

## `X402ClientConfig` Objects

```python
class X402ClientConfig(BaseModel)
```

Holds client-side signing configuration used for outbound payments.

<a id="spoon_ai.payments.config.X402Settings"></a>

## `X402Settings` Objects

```python
class X402Settings(BaseModel)
```

Resolved configuration view for x402 payments inside SpoonOS.

<a id="spoon_ai.payments.config.X402Settings.amount_in_atomic_units"></a>

#### `amount_in_atomic_units`

```python
@property
def amount_in_atomic_units() -> str
```

Return the configured maximum amount encoded as atomic units (string).

<a id="spoon_ai.payments.config.X402Settings.build_asset_extra"></a>

#### `build_asset_extra`

```python
def build_asset_extra() -> Dict[str, Any]
```

Construct the `extra` payload for the payment requirements.

<a id="spoon_ai.payments.config.X402Settings.load"></a>

#### `load`

```python
@classmethod
def load(cls,
         config_manager: Optional[ConfigManager] = None) -> "X402Settings"
```

Load settings from config.json with .env fallbacks.

