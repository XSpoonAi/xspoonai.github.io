---
id: spoon_ai.wallet.security
slug: /api-reference/spoon_ai/wallet/security
title: spoon_ai.wallet.security
---

# Table of Contents

* [spoon\_ai.wallet.security](#spoon_ai.wallet.security)
  * [ENCRYPTED\_PREFIX\_V2](#spoon_ai.wallet.security.ENCRYPTED_PREFIX_V2)
  * [ENCRYPTED\_PREFIX](#spoon_ai.wallet.security.ENCRYPTED_PREFIX)
  * [DecryptionError](#spoon_ai.wallet.security.DecryptionError)
  * [encrypt\_private\_key](#spoon_ai.wallet.security.encrypt_private_key)
  * [decrypt\_private\_key](#spoon_ai.wallet.security.decrypt_private_key)
  * [decrypt\_and\_store](#spoon_ai.wallet.security.decrypt_and_store)

<a id="spoon_ai.wallet.security"></a>

# Module `spoon_ai.wallet.security`

AES-GCM helpers for encrypting and decrypting private keys.

Security Features:
- AES-256-GCM authenticated encryption
- Argon2id key derivation (memory-hard, resistant to GPU/ASIC attacks)
- Random salt and IV per encryption
- Secure memory handling with bytearray zero-fill
- No plaintext returned; secrets stored directly in SecretVault

Dependencies:
- cryptography &gt;= 41.0.0 (for Argon2id support)

Encrypted format: ENC:v2:&lt;base64(salt || iv || ciphertext || tag)&gt;

<a id="spoon_ai.wallet.security.ENCRYPTED_PREFIX_V2"></a>

#### `ENCRYPTED_PREFIX_V2`

Argon2id

<a id="spoon_ai.wallet.security.ENCRYPTED_PREFIX"></a>

#### `ENCRYPTED_PREFIX`

Default for encryptions

<a id="spoon_ai.wallet.security.DecryptionError"></a>

## `DecryptionError` Objects

```python
class DecryptionError(ValueError)
```

Raised when decryption fails.

This is a generic error that does not reveal whether the failure was due to
an incorrect password, corrupted data, or authentication tag mismatch.

<a id="spoon_ai.wallet.security.encrypt_private_key"></a>

#### `encrypt_private_key`

```python
def encrypt_private_key(raw_private_key: str, password: str) -> str
```

Encrypt a private key using AES-256-GCM with Argon2id key derivation.

**Arguments**:

- `raw_private_key` - The plaintext private key to encrypt.
- `password` - Password used to derive the encryption key.
  

**Returns**:

  Encrypted payload: ENC:v2:&lt;base64(...)&gt;
  

**Raises**:

- `ValueError` - If inputs are invalid.
- `RuntimeError` - If Argon2id is not available.

<a id="spoon_ai.wallet.security.decrypt_private_key"></a>

#### `decrypt_private_key`

```python
def decrypt_private_key(enc_value: str, password: str) -> str
```

Decrypt a value produced by `encrypt_private_key`.

WARNING: This function returns a Python str, which cannot be securely wiped.
Prefer `decrypt_and_store()` for production use.

**Arguments**:

- `enc_value` - Encrypted value with ENC:v2 prefix.
- `password` - Password used to derive the key.
  

**Returns**:

  Decrypted private key as a string.
  

**Raises**:

- `DecryptionError` - If decryption fails (wrong password or corrupted data).

<a id="spoon_ai.wallet.security.decrypt_and_store"></a>

#### `decrypt_and_store`

```python
def decrypt_and_store(enc_value: str,
                      password: str,
                      vault_key: str,
                      *,
                      vault: Optional[SecretVault] = None) -> None
```

Decrypt a private key and store it directly in the SecretVault.

This is the RECOMMENDED way to decrypt secrets. Unlike `decrypt_private_key()`,
this function:
1. Never returns the plaintext (no risk of accidental exposure).
2. Stores the secret as a mutable bytearray that can be wiped later.
3. Zeros all intermediate key material before returning.

**Arguments**:

- `enc_value` - Encrypted value with ENC:v2 prefix.
- `password` - Password used to derive the key.
- `vault_key` - Key under which to store the decrypted secret in the vault.
- `vault` - Optional SecretVault instance (defaults to singleton).
  

**Raises**:

- `DecryptionError` - If decryption fails (wrong password or corrupted data).
  

**Example**:

  from spoon_ai.wallet.vault import SecretVault
  from spoon_ai.wallet.security import decrypt_and_store
  
  vault = SecretVault()
  decrypt_and_store(encrypted_key, password, "eth_private_key", vault=vault)
  
  # Later, when needed:
  with vault.get_decoded("eth_private_key") as pk:
  sign_transaction(pk)
  
  # On shutdown:
  vault.wipe_all()

