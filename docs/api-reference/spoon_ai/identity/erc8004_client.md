---
id: spoon_ai.identity.erc8004_client
slug: /api-reference/spoon_ai/identity/erc8004_client
title: spoon_ai.identity.erc8004_client
---

# Table of Contents

* [spoon\_ai.identity.erc8004\_client](#spoon_ai.identity.erc8004_client)
  * [ERC8004Client](#spoon_ai.identity.erc8004_client.ERC8004Client)
    * [calculate\_did\_hash](#spoon_ai.identity.erc8004_client.ERC8004Client.calculate_did_hash)
    * [create\_eip712\_signature](#spoon_ai.identity.erc8004_client.ERC8004Client.create_eip712_signature)
    * [register\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.register_agent)
    * [resolve\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.resolve_agent)
    * [update\_capabilities](#spoon_ai.identity.erc8004_client.ERC8004Client.update_capabilities)
    * [build\_feedback\_auth](#spoon_ai.identity.erc8004_client.ERC8004Client.build_feedback_auth)
    * [give\_feedback](#spoon_ai.identity.erc8004_client.ERC8004Client.give_feedback)
    * [get\_reputation\_summary](#spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation_summary)
    * [get\_reputation](#spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation)
    * [validation\_request](#spoon_ai.identity.erc8004_client.ERC8004Client.validation_request)
    * [get\_validation\_status](#spoon_ai.identity.erc8004_client.ERC8004Client.get_validation_status)
    * [submit\_validation](#spoon_ai.identity.erc8004_client.ERC8004Client.submit_validation)
    * [register\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.register_agent)

<a id="spoon_ai.identity.erc8004_client"></a>

# Module `spoon_ai.identity.erc8004_client`

ERC-8004 Smart Contract Client
Handles on-chain interactions with agent registries

<a id="spoon_ai.identity.erc8004_client.ERC8004Client"></a>

## `ERC8004Client` Objects

```python
class ERC8004Client()
```

Client for interacting with ERC-8004 agent registries

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.calculate_did_hash"></a>

#### `calculate_did_hash`

```python
def calculate_did_hash(did: str) -> bytes
```

Calculate keccak256 hash of DID string

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.create_eip712_signature"></a>

#### `create_eip712_signature`

```python
def create_eip712_signature(did_hash: bytes, agent_card_uri: str,
                            did_doc_uri: str) -> str
```

Create EIP-712 signature for agent registration

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.register_agent"></a>

#### `register_agent`

```python
def register_agent(did: str, agent_card_uri: str, did_doc_uri: str) -> str
```

Register agent on-chain

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.resolve_agent"></a>

#### `resolve_agent`

```python
def resolve_agent(did: str) -> Dict
```

Resolve agent metadata from on-chain registry

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.update_capabilities"></a>

#### `update_capabilities`

```python
def update_capabilities(did: str, capabilities: List[str]) -> str
```

Update agent capabilities on-chain

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.build_feedback_auth"></a>

#### `build_feedback_auth`

```python
def build_feedback_auth(agent_id: Union[int, bytes],
                        client_address: str,
                        index_limit: int,
                        expiry: int,
                        signer_address: Optional[str] = None,
                        identity_registry: Optional[str] = None,
                        chain_id: Optional[int] = None) -> bytes
```

Build and sign feedbackAuth payload required by chaoschain ERC8004 reputation registry.
Returns abi.encode(struct) ++ signature (65 bytes).

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.give_feedback"></a>

#### `give_feedback`

```python
def give_feedback(did: str,
                  score: int,
                  tag1: bytes = b"",
                  tag2: bytes = b"",
                  fileuri: str = "",
                  filehash: bytes = b"\x00" * 32,
                  index_limit: int = 10,
                  expiry: Optional[int] = None,
                  client_address: Optional[str] = None) -> str
```

Submit feedback using ERC8004 giveFeedback with feedbackAuth.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation_summary"></a>

#### `get_reputation_summary`

```python
def get_reputation_summary(did: str,
                           client_addresses: Optional[List[str]] = None,
                           tag1: bytes = b"\x00" * 32,
                           tag2: bytes = b"\x00" * 32) -> Tuple[int, int]
```

Return (count, averageScore 0-100).

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.get_reputation"></a>

#### `get_reputation`

```python
def get_reputation(did: str) -> Tuple[int, int]
```

Backward compatible: (averageScore, count).

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.validation_request"></a>

#### `validation_request`

```python
def validation_request(
        did: str,
        validator: str,
        request_uri: str,
        request_hash: Optional[bytes] = None) -> Tuple[str, bytes]
```

Create validation request; returns tx hash and requestHash used.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.get_validation_status"></a>

#### `get_validation_status`

```python
def get_validation_status(request_hash: bytes) -> Dict
```

Get per-request validation status.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.submit_validation"></a>

#### `submit_validation`

```python
def submit_validation(did: str, is_valid: bool, reason: str = "") -> str
```

Map boolean into 0/100 scale response.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.register_agent"></a>

#### `register_agent`

```python
def register_agent(token_uri: str,
                   metadata: Optional[List[Tuple[str, bytes]]] = None) -> int
```

Register agent on IdentityRegistry; returns agentId.

