---
id: spoon_ai.payments.x402_service
slug: /api-reference/spoon_ai/payments/x402_service.md
title: spoon_ai.payments.x402_service
---

# Table of Contents

* [spoon\_ai.payments.x402\_service](#spoon_ai.payments.x402_service)
  * [X402PaymentService](#spoon_ai.payments.x402_service.X402PaymentService)
    * [discover\_resources](#spoon_ai.payments.x402_service.X402PaymentService.discover_resources)
    * [render\_paywall\_html](#spoon_ai.payments.x402_service.X402PaymentService.render_paywall_html)
    * [build\_payment\_header](#spoon_ai.payments.x402_service.X402PaymentService.build_payment_header)
    * [decode\_payment\_response](#spoon_ai.payments.x402_service.X402PaymentService.decode_payment_response)

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

