---
id: spoon_ai.turnkey
slug: /api-reference/spoon_ai/turnkey/index.md/index
title: spoon_ai.turnkey
---

# Table of Contents

* [spoon\_ai.turnkey](#spoon_ai.turnkey)
* [spoon\_ai.turnkey.client](#spoon_ai.turnkey.client)
  * [Turnkey](#spoon_ai.turnkey.client.Turnkey)
    * [\_\_init\_\_](#spoon_ai.turnkey.client.Turnkey.__init__)
    * [whoami](#spoon_ai.turnkey.client.Turnkey.whoami)
    * [import\_private\_key](#spoon_ai.turnkey.client.Turnkey.import_private_key)
    * [sign\_evm\_transaction](#spoon_ai.turnkey.client.Turnkey.sign_evm_transaction)
    * [sign\_typed\_data](#spoon_ai.turnkey.client.Turnkey.sign_typed_data)
    * [sign\_message](#spoon_ai.turnkey.client.Turnkey.sign_message)
    * [get\_activity](#spoon_ai.turnkey.client.Turnkey.get_activity)
    * [list\_activities](#spoon_ai.turnkey.client.Turnkey.list_activities)
    * [get\_policy\_evaluations](#spoon_ai.turnkey.client.Turnkey.get_policy_evaluations)
    * [get\_private\_key](#spoon_ai.turnkey.client.Turnkey.get_private_key)
    * [create\_wallet](#spoon_ai.turnkey.client.Turnkey.create_wallet)
    * [create\_wallet\_accounts](#spoon_ai.turnkey.client.Turnkey.create_wallet_accounts)
    * [get\_wallet](#spoon_ai.turnkey.client.Turnkey.get_wallet)
    * [get\_wallet\_account](#spoon_ai.turnkey.client.Turnkey.get_wallet_account)
    * [list\_wallets](#spoon_ai.turnkey.client.Turnkey.list_wallets)
    * [list\_wallet\_accounts](#spoon_ai.turnkey.client.Turnkey.list_wallet_accounts)
    * [init\_import\_wallet](#spoon_ai.turnkey.client.Turnkey.init_import_wallet)
    * [encrypt\_wallet](#spoon_ai.turnkey.client.Turnkey.encrypt_wallet)
    * [encrypt\_private\_key](#spoon_ai.turnkey.client.Turnkey.encrypt_private_key)
    * [init\_import\_private\_key](#spoon_ai.turnkey.client.Turnkey.init_import_private_key)
    * [import\_wallet](#spoon_ai.turnkey.client.Turnkey.import_wallet)

<a id="spoon_ai.turnkey"></a>

# Module `spoon_ai.turnkey`

Turnkey client integration for SpoonAI.

Provides `Turnkey` for secure signing via Turnkey API.

<a id="spoon_ai.turnkey.client"></a>

# Module `spoon_ai.turnkey.client`

<a id="spoon_ai.turnkey.client.Turnkey"></a>

## `Turnkey` Objects

```python
class Turnkey()
```

Turnkey API client class for managing blockchain private keys and wallet operations.

<a id="spoon_ai.turnkey.client.Turnkey.__init__"></a>

#### `__init__`

```python
def __init__(base_url=None,
             api_public_key=None,
             api_private_key=None,
             org_id=None)
```

Initialize Turnkey client.

**Arguments**:

- `base_url` _str_ - Turnkey API base URL (defaults from .env or default value).
- `api_public_key` _str_ - Turnkey API public key.
- `api_private_key` _str_ - Turnkey API private key.
- `org_id` _str_ - Turnkey organization ID.
  

**Raises**:

- `ValueError` - If required configuration parameters are missing.

<a id="spoon_ai.turnkey.client.Turnkey.whoami"></a>

#### `whoami`

```python
def whoami()
```

Call whoami API to get organization information.

**Returns**:

- `dict` - JSON response containing organization information.

<a id="spoon_ai.turnkey.client.Turnkey.import_private_key"></a>

#### `import_private_key`

```python
def import_private_key(user_id,
                       private_key_name,
                       encrypted_bundle,
                       curve="CURVE_SECP256K1",
                       address_formats=["ADDRESS_FORMAT_ETHEREUM"])
```

Import private key to Turnkey.

**Arguments**:

- `user_id` _str_ - User ID.
- `private_key_name` _str_ - Private key name.
- `encrypted_bundle` _str_ - Encrypted private key bundle.
- `curve` _str_ - Elliptic curve type, defaults to CURVE_SECP256K1.
- `address_formats` _list_ - Address format list, defaults to ["ADDRESS_FORMAT_ETHEREUM"].
  

**Returns**:

- `dict` - JSON response containing imported private key information.

<a id="spoon_ai.turnkey.client.Turnkey.sign_evm_transaction"></a>

#### `sign_evm_transaction`

```python
def sign_evm_transaction(sign_with, unsigned_tx)
```

Sign EVM transaction using Turnkey.

**Arguments**:

- `sign_with` _str_ - Signing identity (wallet account address / private key address / private key ID).
- `unsigned_tx` _str_ - Raw unsigned transaction (hex string).
  

**Returns**:

- `dict` - JSON response containing signing result, see signTransactionResult.signedTransaction.
  
  Reference:
  https://docs.turnkey.com/api-reference/activities/sign-transaction

<a id="spoon_ai.turnkey.client.Turnkey.sign_typed_data"></a>

#### `sign_typed_data`

```python
def sign_typed_data(sign_with, typed_data)
```

Sign EIP-712 structured data.

**Arguments**:

- `sign_with` _str_ - Signing identity (wallet account address / private key address / private key ID).
- `typed_data` _dict|str_ - EIP-712 structure (domain/types/message) or its JSON string.
  

**Returns**:

- `dict` - Activity response, result contains r/s/v.
  

**Notes**:

  - encoding uses PAYLOAD_ENCODING_EIP712
  - hashFunction uses HASH_FUNCTION_NOT_APPLICABLE (server completes EIP-712 spec hashing)

<a id="spoon_ai.turnkey.client.Turnkey.sign_message"></a>

#### `sign_message`

```python
def sign_message(sign_with, message, use_keccak256=True)
```

Sign arbitrary message (defaults to KECCAK256 following Ethereum convention).

**Arguments**:

- `sign_with` _str_ - Signing identity (wallet account address / private key address / private key ID).
- `message` _str|bytes_ - Text to be signed; bytes will be decoded as UTF-8.
- `use_keccak256` _bool_ - Whether to use KECCAK256 as hash function (default True).
  

**Returns**:

- `dict` - Activity response, result contains r/s/v.

<a id="spoon_ai.turnkey.client.Turnkey.get_activity"></a>

#### `get_activity`

```python
def get_activity(activity_id)
```

Query Activity details.

**Arguments**:

- `activity_id` _str_ - Activity ID.
  

**Returns**:

- `dict` - Activity details.
  
  Reference:
  https://docs.turnkey.com/api-reference/queries/get-activity

<a id="spoon_ai.turnkey.client.Turnkey.list_activities"></a>

#### `list_activities`

```python
def list_activities(limit=None,
                    before=None,
                    after=None,
                    filter_by_status=None,
                    filter_by_type=None)
```

List activities within organization (paginated).

**Arguments**:

- `limit` _str|None_ - Number per page.
- `before` _str|None_ - Pagination cursor (before).
- `after` _str|None_ - Pagination cursor (after).
- `filter_by_status` _list|None_ - Filter by activity status (e.g., ['ACTIVITY_STATUS_COMPLETED']).
- `filter_by_type` _list|None_ - Filter by activity type (e.g., ['ACTIVITY_TYPE_SIGN_TRANSACTION_V2']).
  

**Returns**:

- `dict` - Activity list.
  
  Reference:
  https://docs.turnkey.com/api-reference/queries/list-activities

<a id="spoon_ai.turnkey.client.Turnkey.get_policy_evaluations"></a>

#### `get_policy_evaluations`

```python
def get_policy_evaluations(activity_id)
```

Query policy evaluation results for an Activity (if available).

**Arguments**:

- `activity_id` _str_ - Activity ID.
  

**Returns**:

- `dict` - Policy evaluation details.
  
  Reference:
  https://docs.turnkey.com/api-reference/queries/get-policy-evaluations

<a id="spoon_ai.turnkey.client.Turnkey.get_private_key"></a>

#### `get_private_key`

```python
def get_private_key(private_key_id)
```

Query information for specified private key.

**Arguments**:

- `private_key_id` _str_ - Private key ID.
  

**Returns**:

- `dict` - JSON response containing private key information.

<a id="spoon_ai.turnkey.client.Turnkey.create_wallet"></a>

#### `create_wallet`

```python
def create_wallet(wallet_name, accounts, mnemonic_length=24)
```

Create new wallet.

**Arguments**:

- `wallet_name` _str_ - Wallet name.
- `accounts` _list_ - Account configuration list, each account contains curve, pathFormat, path, addressFormat.
- `mnemonic_length` _int_ - Mnemonic length (default 24).
  

**Returns**:

- `dict` - JSON response containing new wallet information.

<a id="spoon_ai.turnkey.client.Turnkey.create_wallet_accounts"></a>

#### `create_wallet_accounts`

```python
def create_wallet_accounts(wallet_id, accounts)
```

Add accounts to existing wallet.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
- `accounts` _list_ - New account configuration list, each account contains curve, pathFormat, path, addressFormat.
  

**Returns**:

- `dict` - JSON response containing new account information.

<a id="spoon_ai.turnkey.client.Turnkey.get_wallet"></a>

#### `get_wallet`

```python
def get_wallet(wallet_id)
```

Query information for specified wallet.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
  

**Returns**:

- `dict` - JSON response containing wallet information.

<a id="spoon_ai.turnkey.client.Turnkey.get_wallet_account"></a>

#### `get_wallet_account`

```python
def get_wallet_account(wallet_id, address=None, path=None)
```

Query information for specified wallet account.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
- `address` _str, optional_ - Account address.
- `path` _str, optional_ - Account path (e.g., m/44'/60'/0'/0/0).
  

**Returns**:

- `dict` - JSON response containing account information.
  

**Raises**:

- `ValueError` - If neither address nor path is provided.

<a id="spoon_ai.turnkey.client.Turnkey.list_wallets"></a>

#### `list_wallets`

```python
def list_wallets()
```

List all wallets in the organization.

**Returns**:

- `dict` - JSON response containing wallet list.

<a id="spoon_ai.turnkey.client.Turnkey.list_wallet_accounts"></a>

#### `list_wallet_accounts`

```python
def list_wallet_accounts(wallet_id, limit=None, before=None, after=None)
```

List account list for specified wallet.

**Arguments**:

- `wallet_id` _str_ - Wallet ID.
- `limit` _str, optional_ - Number of accounts returned per page.
- `before` _str, optional_ - Pagination cursor, returns accounts before this ID.
- `after` _str, optional_ - Pagination cursor, returns accounts after this ID.
  

**Returns**:

- `dict` - JSON response containing account list.

<a id="spoon_ai.turnkey.client.Turnkey.init_import_wallet"></a>

#### `init_import_wallet`

```python
def init_import_wallet(user_id)
```

Initialize wallet import process, generate import_bundle.

**Arguments**:

- `user_id` _str_ - User ID.
  

**Returns**:

- `dict` - JSON response containing import_bundle.

<a id="spoon_ai.turnkey.client.Turnkey.encrypt_wallet"></a>

#### `encrypt_wallet`

```python
def encrypt_wallet(mnemonic,
                   user_id,
                   import_bundle,
                   encryption_key_name="demo-encryption-key")
```

Encrypt mnemonic using Turnkey CLI, generate encrypted_bundle.

**Arguments**:

- `mnemonic` _str_ - Mnemonic phrase (12/15/18/21/24 words).
- `user_id` _str_ - User ID.
- `import_bundle` _str_ - import_bundle obtained from init_import_wallet.
- `encryption_key_name` _str_ - Encryption key name, defaults to demo-encryption-key.
  

**Returns**:

- `str` - Encrypted encrypted_bundle.
  

**Raises**:

- `RuntimeError` - If CLI command fails or turnkey CLI is not installed.

<a id="spoon_ai.turnkey.client.Turnkey.encrypt_private_key"></a>

#### `encrypt_private_key`

```python
def encrypt_private_key(private_key,
                        user_id,
                        import_bundle,
                        key_format="hexadecimal",
                        encryption_key_name="demo-encryption-key")
```

Encrypt private key using Turnkey CLI, generate encrypted_bundle, equivalent to:
`turnkey encrypt --import-bundle-input "./import_bundle.txt" --plaintext-input /dev/fd/3 --key-format "hexadecimal" --encrypted-bundle-output "./encrypted_bundle.txt"`

**Arguments**:

- `private_key` _str_ - Private key string (hexadecimal or Solana format).
- `user_id` _str_ - User ID.
- `import_bundle` _str_ - import_bundle obtained from init_import_private_key.
- `key_format` _str_ - Private key format, defaults to "hexadecimal" (supports "hexadecimal", "solana").
- `encryption_key_name` _str_ - Encryption key name, defaults to "demo-encryption-key".
  

**Returns**:

- `str` - Encrypted encrypted_bundle (Base64 encoded string).
  

**Raises**:

- `ValueError` - If private_key, user_id, import_bundle is empty or key_format is invalid.
- `RuntimeError` - If CLI command fails or turnkey CLI is not installed.

<a id="spoon_ai.turnkey.client.Turnkey.init_import_private_key"></a>

#### `init_import_private_key`

```python
def init_import_private_key(user_id)
```

Initialize private key import process, generate import_bundle.

**Arguments**:

- `user_id` _str_ - User ID.
  

**Returns**:

- `dict` - JSON response containing import_bundle.

<a id="spoon_ai.turnkey.client.Turnkey.import_wallet"></a>

#### `import_wallet`

```python
def import_wallet(user_id, wallet_name, encrypted_bundle, accounts=None)
```

Import wallet to Turnkey.

**Arguments**:

- `user_id` _str_ - User ID.
- `wallet_name` _str_ - Wallet name.
- `encrypted_bundle` _str_ - Encrypted mnemonic bundle.
- `accounts` _list, optional_ - Account configuration list, each account contains curve, pathFormat, path, addressFormat.
  

**Returns**:

- `dict` - JSON response containing imported wallet information.

