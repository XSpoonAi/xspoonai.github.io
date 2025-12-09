---
id: spoon_ai.payments.models
slug: /api-reference/spoon_ai/payments/models
title: spoon_ai.payments.models
---

# Table of Contents

* [spoon\_ai.payments.models](#spoon_ai.payments.models)
  * [X402PaymentRequest](#spoon_ai.payments.models.X402PaymentRequest)
  * [X402VerifyResult](#spoon_ai.payments.models.X402VerifyResult)
  * [X402SettleResult](#spoon_ai.payments.models.X402SettleResult)
  * [X402PaymentOutcome](#spoon_ai.payments.models.X402PaymentOutcome)
  * [X402PaymentReceipt](#spoon_ai.payments.models.X402PaymentReceipt)

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

