---
id: spoon_ai.identity.erc8004_client
slug: /api-reference/spoon_ai/identity/erc8004_client
title: spoon_ai.identity.erc8004_client
---

# Table of Contents

* [spoon\_ai.identity.erc8004\_client](#spoon_ai.identity.erc8004_client)
  * [ERC8004Client](#spoon_ai.identity.erc8004_client.ERC8004Client)
    * [get\_agent\_id\_for\_address](#spoon_ai.identity.erc8004_client.ERC8004Client.get_agent_id_for_address)
    * [register\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.register_agent)
    * [resolve\_agent](#spoon_ai.identity.erc8004_client.ERC8004Client.resolve_agent)

<a id="spoon_ai.identity.erc8004_client"></a>

# Module `spoon_ai.identity.erc8004_client`

ERC-8004 Smart Contract Client
Handles on-chain interactions with agent registries (IdentityRegistry only)

<a id="spoon_ai.identity.erc8004_client.ERC8004Client"></a>

## `ERC8004Client` Objects

```python
class ERC8004Client()
```

Client for interacting with ERC-8004 agent registries

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.get_agent_id_for_address"></a>

#### `get_agent_id_for_address`

```python
def get_agent_id_for_address(address: str) -> int
```

Look up the agent ID (ERC-721 token) owned by *address*.

Returns 0 if the address has no registered agent identity.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.register_agent"></a>

#### `register_agent`

```python
def register_agent(token_uri: str,
                   metadata: Optional[List[Tuple[str, bytes]]] = None) -> int
```

Register agent on IdentityRegistry; returns agentId.

<a id="spoon_ai.identity.erc8004_client.ERC8004Client.resolve_agent"></a>

#### `resolve_agent`

```python
def resolve_agent(agent_id: int) -> Dict
```

Resolve agent metadata from IdentityRegistry by agentId.

Returns dict with owner, tokenURI, and common metadata fields.

