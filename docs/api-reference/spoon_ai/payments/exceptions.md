---
id: spoon_ai.payments.exceptions
slug: /api-reference/spoon_ai/payments/exceptions
title: spoon_ai.payments.exceptions
---

# Table of Contents

* [spoon\_ai.payments.exceptions](#spoon_ai.payments.exceptions)
  * [X402PaymentError](#spoon_ai.payments.exceptions.X402PaymentError)
  * [X402ConfigurationError](#spoon_ai.payments.exceptions.X402ConfigurationError)
  * [X402VerificationError](#spoon_ai.payments.exceptions.X402VerificationError)
  * [X402SettlementError](#spoon_ai.payments.exceptions.X402SettlementError)

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

