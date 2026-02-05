---
id: spoon_ai.security
slug: /api-reference/spoon_ai/security
title: spoon_ai.security
---

# Table of Contents

* [spoon\_ai.security](#spoon_ai.security)
  * [init\_security](#spoon_ai.security.init_security)
  * [decrypted\_secrets](#spoon_ai.security.decrypted_secrets)
  * [async\_decrypted\_secrets](#spoon_ai.security.async_decrypted_secrets)
  * [decrypted\_environ](#spoon_ai.security.decrypted_environ)
  * [async\_decrypted\_environ](#spoon_ai.security.async_decrypted_environ)

<a id="spoon_ai.security"></a>

# Module `spoon_ai.security`

Environment security helpers for ENC:v2 encrypted secrets.

Security model:
- Decrypted secrets are stored in SecretVault, NOT in os.environ.
- The `decrypted_secrets` context manager provides scoped access to secrets
  via the vault, automatically wiping them when the context exits.
- Legacy `decrypted_environ` is DEPRECATED and will emit a warning.

This avoids the critical security issue where secrets remain in os.environ
(readable via /proc/&#123;pid&#125;/environ, inherited by subprocesses, etc.).

<a id="spoon_ai.security.init_security"></a>

#### `init_security`

```python
def init_security(*, vault: Optional[SecretVault] = None) -> SecretVault
```

Initialize env security features and return the vault.

Behaviour:
- Load `.env` files (if python-dotenv is installed).
- Detect presence of ENC:v2 encrypted values.
- If `SPOON_SECURITY_DECRYPT_ON_IMPORT` is truthy, decrypt all encrypted
env vars and store in SecretVault (NOT os.environ).
- Register atexit handler to wipe vault on shutdown.

**Returns**:

  The SecretVault instance containing decrypted secrets.
  

**Raises**:

- `RuntimeError` - If encrypted vars found but no password provided.
- `DecryptionError` - If decryption fails.

<a id="spoon_ai.security.decrypted_secrets"></a>

#### `decrypted_secrets`

```python
@contextmanager
def decrypted_secrets(
        keys: Optional[Iterable[str]] = None,
        *,
        password: Optional[str] = None,
        prompt: bool = True,
        vault: Optional[SecretVault] = None) -> Iterator[SecretVault]
```

Context manager for scoped access to decrypted secrets via SecretVault.

This is the RECOMMENDED way to access encrypted secrets. Secrets are:
1. Decrypted and stored in the vault on context entry.
2. Accessible via `vault.get_decoded(key)` within the context.
3. Automatically wiped from the vault on context exit.

**Arguments**:

- `keys` - Specific env var names to decrypt. If None, all encrypted vars.
- `password` - Master password. If None, resolved from env or prompt.
- `prompt` - Whether to prompt for password if not in env.
- `vault` - Optional vault instance (defaults to singleton).
  

**Yields**:

  SecretVault instance with decrypted secrets.
  

**Example**:

  with decrypted_secrets(["PRIVATE_KEY"]) as vault:
  with vault.get_decoded("PRIVATE_KEY") as pk:
  account = Account.from_key(pk)
  # Use account...
  # Secrets wiped automatically

<a id="spoon_ai.security.async_decrypted_secrets"></a>

#### `async_decrypted_secrets`

```python
@asynccontextmanager
async def async_decrypted_secrets(
        keys: Optional[Iterable[str]] = None,
        *,
        password: Optional[str] = None,
        prompt: bool = True,
        vault: Optional[SecretVault] = None) -> Iterator[SecretVault]
```

Async version of `decrypted_secrets()` with per-event-loop locking.

This prevents race conditions when multiple async tasks attempt to
decrypt/wipe secrets concurrently.

**Arguments**:

- `keys` - Specific env var names to decrypt. If None, all encrypted vars.
- `password` - Master password. If None, resolved from env or prompt.
- `prompt` - Whether to prompt for password if not in env.
- `vault` - Optional vault instance (defaults to singleton).
  

**Yields**:

  SecretVault instance with decrypted secrets.

<a id="spoon_ai.security.decrypted_environ"></a>

#### `decrypted_environ`

```python
@contextmanager
def decrypted_environ(keys: Optional[Iterable[str]] = None,
                      *,
                      password: Optional[str] = None,
                      prompt: bool = True) -> Iterator[None]
```

DEPRECATED: Use `decrypted_secrets()` instead.

This function modifies os.environ, which is a security risk.
Secrets in os.environ can be read via /proc/&#123;pid&#125;/environ.

<a id="spoon_ai.security.async_decrypted_environ"></a>

#### `async_decrypted_environ`

```python
@asynccontextmanager
async def async_decrypted_environ(keys: Optional[Iterable[str]] = None,
                                  *,
                                  password: Optional[str] = None,
                                  prompt: bool = True) -> Iterator[None]
```

DEPRECATED: Use `async_decrypted_secrets()` instead.

This function modifies os.environ, which is a security risk.

