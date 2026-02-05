---
id: spoon_ai.wallet.vault
slug: /api-reference/spoon_ai/wallet/vault
title: spoon_ai.wallet.vault
---

# Table of Contents

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

