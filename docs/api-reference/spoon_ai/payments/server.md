---
id: spoon_ai.payments.server
slug: /api-reference/spoon_ai/payments/server.md
title: spoon_ai.payments.server
---

# Table of Contents

* [spoon\_ai.payments.server](#spoon_ai.payments.server)
  * [create\_paywalled\_router](#spoon_ai.payments.server.create_paywalled_router)

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

