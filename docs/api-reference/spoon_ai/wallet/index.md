---
id: spoon_ai.wallet
slug: /api-reference/spoon_ai/wallet//index
title: spoon_ai.wallet
---

# Table of Contents

* [spoon\_ai.wallet](#spoon_ai.wallet)
* [spoon\_ai.wallet.security](#spoon_ai.wallet.security)
  * [ENCRYPTED\_PREFIX\_V2](#spoon_ai.wallet.security.ENCRYPTED_PREFIX_V2)
  * [ENCRYPTED\_PREFIX](#spoon_ai.wallet.security.ENCRYPTED_PREFIX)
  * [DecryptionError](#spoon_ai.wallet.security.DecryptionError)
  * [encrypt\_private\_key](#spoon_ai.wallet.security.encrypt_private_key)
  * [decrypt\_private\_key](#spoon_ai.wallet.security.decrypt_private_key)
  * [decrypt\_and\_store](#spoon_ai.wallet.security.decrypt_and_store)
* [spoon\_ai.wallet.vault](#spoon_ai.wallet.vault)
  * [SecretVault](#spoon_ai.wallet.vault.SecretVault)
    * [\_\_new\_\_](#spoon_ai.wallet.vault.SecretVault.__new__)
    * [store](#spoon_ai.wallet.vault.SecretVault.store)
    * [get\_raw](#spoon_ai.wallet.vault.SecretVault.get_raw)
    * [get\_decoded](#spoon_ai.wallet.vault.SecretVault.get_decoded)
    * [exists](#spoon_ai.wallet.vault.SecretVault.exists)
    * [keys](#spoon_ai.wallet.vault.SecretVault.keys)
    * [wipe](#spoon_ai.wallet.vault.SecretVault.wipe)
    * [wipe\_all](#spoon_ai.wallet.vault.SecretVault.wipe_all)
  * [get\_vault](#spoon_ai.wallet.vault.get_vault)
* [spoon\_ai.wallet.encrypt\_key](#spoon_ai.wallet.encrypt_key)

<a id="spoon_ai.wallet"></a>

# Module `spoon_ai.wallet`

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

<a id="spoon_ai.wallet.vault"></a>

# Module `spoon_ai.wallet.vault`

Thread-safe in-memory vault for sensitive secrets.

Security model:
- Secrets are stored as mutable `bytearray` objects, allowing explicit memory wiping.
- No secret is ever written to os.environ or any persistent storage.
- The `get_decoded` context manager provides temporary access to decoded strings
  with automatic cleanup of references (though Python str objects cannot be
  forcefully zeroed due to immutability).
- All operations are thread-safe via a reentrant lock.

Usage:
    vault = SecretVault()
    vault.store("my_key", b"secret_data")

    with vault.get_decoded("my_key") as secret_str:
        # Use secret_str briefly
        do_something(secret_str)
    # Reference released after context exit

    vault.wipe("my_key")  # Securely wipe when done

<a id="spoon_ai.wallet.vault.SecretVault"></a>

## `SecretVault` Objects

```python
class SecretVault()
```

Thread-safe singleton vault for storing sensitive secrets in memory.

Secrets are stored as `bytearray` objects, which can be explicitly zeroed
after use to minimize the window of exposure in memory.

Thread Safety:
    All public methods acquire a reentrant lock, making this class safe
    for concurrent access from multiple threads.

Memory Security:
    - Uses `bytearray` instead of `bytes` to allow in-place zeroing.
    - `wipe()` and `wipe_all()` zero-fill before deletion.
    - `get_decoded()` context manager limits the lifetime of decoded strings.

Limitations:
    - Python's garbage collector may not immediately reclaim memory.
    - Decoded `str` objects returned by `get_decoded()` are immutable and
      cannot be forcefully wiped; use them briefly and avoid storing references.
    - Memory may still be swapped to disk; consider using `mlock()` at OS level
      for high-security deployments.

<a id="spoon_ai.wallet.vault.SecretVault.__new__"></a>

#### `__new__`

```python
def __new__(cls) -> SecretVault
```

Ensure singleton pattern with thread-safe lazy initialization.

<a id="spoon_ai.wallet.vault.SecretVault.store"></a>

#### `store`

```python
def store(key: str, value: Union[bytes, bytearray, str]) -> None
```

Store a secret in the vault.

**Arguments**:

- `key` - Identifier for the secret.
- `value` - Secret data as bytes, bytearray, or str.
  Strings are encoded as UTF-8.
  

**Notes**:

  If a secret already exists under `key`, it will be wiped before
  being replaced.

<a id="spoon_ai.wallet.vault.SecretVault.get_raw"></a>

#### `get_raw`

```python
def get_raw(key: str) -> Optional[bytes]
```

Retrieve a secret as immutable bytes.

**Arguments**:

- `key` - Identifier for the secret.
  

**Returns**:

  Copy of the secret as bytes, or None if not found.
  

**Warnings**:

  The returned `bytes` object cannot be wiped. Prefer `get_decoded()`
  context manager for controlled access.

<a id="spoon_ai.wallet.vault.SecretVault.get_decoded"></a>

#### `get_decoded`

```python
@contextmanager
def get_decoded(key: str, encoding: str = "utf-8") -> Iterator[Optional[str]]
```

Context manager for temporary access to a decoded secret string.

This is the preferred way to access secrets when a string is needed.
The context manager ensures that:
1. The secret is decoded only within the `with` block.
2. Local references are explicitly deleted after the block exits.

**Arguments**:

- `key` - Identifier for the secret.
- `encoding` - Character encoding (default: UTF-8).
  

**Yields**:

  Decoded string, or None if the secret doesn't exist.
  

**Example**:

  with vault.get_decoded("private_key") as pk:
  if pk:
  sign_transaction(pk)
  # `pk` reference is now invalid
  

**Warnings**:

  Python strings are immutable and cannot be forcefully wiped from memory.
  Keep the usage window as short as possible and avoid copying the string
  to other variables or data structures.

<a id="spoon_ai.wallet.vault.SecretVault.exists"></a>

#### `exists`

```python
def exists(key: str) -> bool
```

Check if a secret exists in the vault.

<a id="spoon_ai.wallet.vault.SecretVault.keys"></a>

#### `keys`

```python
def keys() -> list[str]
```

Return a list of all secret keys (not the values).

<a id="spoon_ai.wallet.vault.SecretVault.wipe"></a>

#### `wipe`

```python
def wipe(key: str) -> bool
```

Securely wipe a secret from the vault.

This method:
1. Zero-fills the bytearray in-place.
2. Removes the key from the vault.

**Arguments**:

- `key` - Identifier for the secret to wipe.
  

**Returns**:

  True if the secret existed and was wiped, False otherwise.

<a id="spoon_ai.wallet.vault.SecretVault.wipe_all"></a>

#### `wipe_all`

```python
def wipe_all() -> int
```

Securely wipe all secrets from the vault.

**Returns**:

  Number of secrets that were wiped.

<a id="spoon_ai.wallet.vault.get_vault"></a>

#### `get_vault`

```python
def get_vault() -> SecretVault
```

Get the singleton SecretVault instance.

<a id="spoon_ai.wallet.encrypt_key"></a>

# Module `spoon_ai.wallet.encrypt_key`

Interactive helper to produce ENC:v2 payloads for PRIVATE_KEY (or any secret).

Uses AES-256-GCM encryption with Argon2id key derivation.

