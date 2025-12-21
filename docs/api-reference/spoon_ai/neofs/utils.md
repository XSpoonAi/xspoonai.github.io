---
id: spoon_ai.neofs.utils
slug: /api-reference/spoon_ai/neofs/utils
title: spoon_ai.neofs.utils
---

# Table of Contents

* [spoon\_ai.neofs.utils](#spoon_ai.neofs.utils)
  * [SignatureError](#spoon_ai.neofs.utils.SignatureError)
  * [sign\_bearer\_token](#spoon_ai.neofs.utils.sign_bearer_token)

<a id="spoon_ai.neofs.utils"></a>

# Module `spoon_ai.neofs.utils`

<a id="spoon_ai.neofs.utils.SignatureError"></a>

## `SignatureError` Objects

```python
class SignatureError(Exception)
```

Raised when signature payload construction fails.

<a id="spoon_ai.neofs.utils.sign_bearer_token"></a>

#### `sign_bearer_token`

```python
def sign_bearer_token(bearer_token: str,
                      private_key_wif: str,
                      *,
                      wallet_connect: bool = True) -> tuple[str, str]
```

Returns (signature_hex, compressed_pubkey_hex)

- wallet_connect=True:
    msg = WC format (with prefix/len/salt/postfix), hash=SHA-256
    X-Bearer-Signature = &lt;DER signature hex&gt; + &lt;16B salt hex&gt;
    X-Bearer-Signature-Key = &lt;compressed public key hex&gt;
    URL needs to append ?walletConnect=true

