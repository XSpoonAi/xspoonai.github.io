---
id: spoon_ai.payments
slug: /api-reference/spoon_ai/payments
title: spoon_ai.payments
---

# Table of Contents

* [spoon\_ai.payments](#spoon_ai.payments)
* [spoon\_ai.payments.models](#spoon_ai.payments.models)
  * [X402PaymentRequest](#spoon_ai.payments.models.X402PaymentRequest)
  * [X402VerifyResult](#spoon_ai.payments.models.X402VerifyResult)
  * [X402SettleResult](#spoon_ai.payments.models.X402SettleResult)
  * [X402PaymentOutcome](#spoon_ai.payments.models.X402PaymentOutcome)
  * [X402PaymentReceipt](#spoon_ai.payments.models.X402PaymentReceipt)
* [spoon\_ai.payments.cli](#spoon_ai.payments.cli)
* [spoon\_ai.payments.x402\_service](#spoon_ai.payments.x402_service)
  * [X402PaymentService](#spoon_ai.payments.x402_service.X402PaymentService)
    * [discover\_resources](#spoon_ai.payments.x402_service.X402PaymentService.discover_resources)
    * [render\_paywall\_html](#spoon_ai.payments.x402_service.X402PaymentService.render_paywall_html)
    * [build\_payment\_header](#spoon_ai.payments.x402_service.X402PaymentService.build_payment_header)
    * [decode\_payment\_response](#spoon_ai.payments.x402_service.X402PaymentService.decode_payment_response)
* [spoon\_ai.payments.config](#spoon_ai.payments.config)
  * [X402ConfigurationError](#spoon_ai.payments.config.X402ConfigurationError)
  * [X402PaywallBranding](#spoon_ai.payments.config.X402PaywallBranding)
  * [X402ClientConfig](#spoon_ai.payments.config.X402ClientConfig)
  * [X402Settings](#spoon_ai.payments.config.X402Settings)
    * [amount\_in\_atomic\_units](#spoon_ai.payments.config.X402Settings.amount_in_atomic_units)
    * [build\_asset\_extra](#spoon_ai.payments.config.X402Settings.build_asset_extra)
    * [load](#spoon_ai.payments.config.X402Settings.load)
* [spoon\_ai.payments.facilitator\_client](#spoon_ai.payments.facilitator_client)
  * [X402FacilitatorClient](#spoon_ai.payments.facilitator_client.X402FacilitatorClient)
* [spoon\_ai.payments.app](#spoon_ai.payments.app)
* [spoon\_ai.payments.exceptions](#spoon_ai.payments.exceptions)
  * [X402PaymentError](#spoon_ai.payments.exceptions.X402PaymentError)
  * [X402ConfigurationError](#spoon_ai.payments.exceptions.X402ConfigurationError)
  * [X402VerificationError](#spoon_ai.payments.exceptions.X402VerificationError)
  * [X402SettlementError](#spoon_ai.payments.exceptions.X402SettlementError)
* [spoon\_ai.payments.server](#spoon_ai.payments.server)
  * [create\_paywalled\_router](#spoon_ai.payments.server.create_paywalled_router)

<a id="spoon_ai.payments"></a>

# Module `spoon_ai.payments`

Payment utilities for integrating the SpoonOS core with the x402 payments protocol.

This package wraps the upstream `x402` Python SDK with configuration and service
abstractions that align to SpoonOS conventions (config.json priority, .env overrides,
and async-friendly helper utilities).

<a id="spoon_ai.payments.models"></a>

# Module `spoon_ai.payments.models`

<a id="spoon_ai.payments.models.X402PaymentRequest"></a>

## `X402PaymentRequest` Objects

```python
class X402PaymentRequest(BaseModel)
```

Describes a payment requirement that should be issued for a resource.

<a id="spoon_ai.payments.models.X402VerifyResult"></a>

## `X402VerifyResult` Objects

```python
class X402VerifyResult(BaseModel)
```

Captures the facilitator verification response.

<a id="spoon_ai.payments.models.X402SettleResult"></a>

## `X402SettleResult` Objects

```python
class X402SettleResult(BaseModel)
```

Captures settlement details.

<a id="spoon_ai.payments.models.X402PaymentOutcome"></a>

## `X402PaymentOutcome` Objects

```python
class X402PaymentOutcome(BaseModel)
```

Aggregates verification and settlement outcomes.

<a id="spoon_ai.payments.models.X402PaymentReceipt"></a>

## `X402PaymentReceipt` Objects

```python
class X402PaymentReceipt(BaseModel)
```

Decoded representation of the X-PAYMENT-RESPONSE header.

<a id="spoon_ai.payments.cli"></a>

# Module `spoon_ai.payments.cli`

<a id="spoon_ai.payments.x402_service"></a>

# Module `spoon_ai.payments.x402_service`

<a id="spoon_ai.payments.x402_service.X402PaymentService"></a>

## `X402PaymentService` Objects

```python
class X402PaymentService()
```

High level service that aligns the x402 SDK with SpoonOS conventions.

<a id="spoon_ai.payments.x402_service.X402PaymentService.discover_resources"></a>

#### `discover_resources`

```python
async def discover_resources(
        *,
        resource_type: Optional[str] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None) -> ListDiscoveryResourcesResponse
```

Query the facilitator discovery endpoint for registered paywalled resources.

<a id="spoon_ai.payments.x402_service.X402PaymentService.render_paywall_html"></a>

#### `render_paywall_html`

```python
def render_paywall_html(error: str,
                        request: Optional[X402PaymentRequest] = None,
                        headers: Optional[Dict[str, Any]] = None) -> str
```

Render the embedded paywall HTML with payment requirements.

<a id="spoon_ai.payments.x402_service.X402PaymentService.build_payment_header"></a>

#### `build_payment_header`

```python
def build_payment_header(requirements: PaymentRequirements,
                         *,
                         max_value: Optional[int] = None) -> str
```

Create a signed X-PAYMENT header for outbound requests.

<a id="spoon_ai.payments.x402_service.X402PaymentService.decode_payment_response"></a>

#### `decode_payment_response`

```python
def decode_payment_response(header_value: str) -> X402PaymentReceipt
```

Decode an X-PAYMENT-RESPONSE header into a structured receipt.

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

<a id="spoon_ai.payments.facilitator_client"></a>

# Module `spoon_ai.payments.facilitator_client`

<a id="spoon_ai.payments.facilitator_client.X402FacilitatorClient"></a>

## `X402FacilitatorClient` Objects

```python
class X402FacilitatorClient()
```

Thin wrapper over the upstream facilitator client with async header hooks.

<a id="spoon_ai.payments.app"></a>

# Module `spoon_ai.payments.app`

<a id="spoon_ai.payments.exceptions"></a>

# Module `spoon_ai.payments.exceptions`

<a id="spoon_ai.payments.exceptions.X402PaymentError"></a>

## `X402PaymentError` Objects

```python
class X402PaymentError(Exception)
```

Base exception for x402 payment operations.

<a id="spoon_ai.payments.exceptions.X402ConfigurationError"></a>

## `X402ConfigurationError` Objects

```python
class X402ConfigurationError(X402PaymentError)
```

Raised when integration configuration is invalid or incomplete.

<a id="spoon_ai.payments.exceptions.X402VerificationError"></a>

## `X402VerificationError` Objects

```python
class X402VerificationError(X402PaymentError)
```

Raised when a payment header fails verification against the facilitator.

<a id="spoon_ai.payments.exceptions.X402SettlementError"></a>

## `X402SettlementError` Objects

```python
class X402SettlementError(X402PaymentError)
```

Raised when settlement fails or returns an error response.

<a id="spoon_ai.payments.server"></a>

# Module `spoon_ai.payments.server`

<a id="spoon_ai.payments.server.create_paywalled_router"></a>

#### `create_paywalled_router`

```python
def create_paywalled_router(
    service: Optional[X402PaymentService] = None,
    agent_factory: AgentFactory = _default_agent_factory,
    payment_message: str = "Payment required to invoke this agent."
) -> APIRouter
```

Build a FastAPI router that protects agent invocations behind an x402 paywall.

**Arguments**:

- `service` - Optional pre-configured payment service.
- `agent_factory` - Coroutine that returns an initialized agent given its name.
- `payment_message` - Message displayed when payment is required.
  

**Returns**:

- `APIRouter` - Router with `/invoke/&#123;agent_name&#125;` endpoint ready to mount.

