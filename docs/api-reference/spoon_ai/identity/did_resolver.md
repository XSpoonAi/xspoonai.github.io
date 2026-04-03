---
id: spoon_ai.identity.did_resolver
slug: /api-reference/spoon_ai/identity/did_resolver
title: spoon_ai.identity.did_resolver
---

# Table of Contents

* [spoon\_ai.identity.did\_resolver](#spoon_ai.identity.did_resolver)
  * [DIDResolver](#spoon_ai.identity.did_resolver.DIDResolver)
    * [resolve](#spoon_ai.identity.did_resolver.DIDResolver.resolve)
    * [resolve\_metadata\_only](#spoon_ai.identity.did_resolver.DIDResolver.resolve_metadata_only)
    * [verify\_agent](#spoon_ai.identity.did_resolver.DIDResolver.verify_agent)

<a id="spoon_ai.identity.did_resolver"></a>

# Module `spoon_ai.identity.did_resolver`

DID Resolver for SpoonOS Agents
Implements unified DID resolution via IdentityRegistry with NeoFS-first policy

<a id="spoon_ai.identity.did_resolver.DIDResolver"></a>

## `DIDResolver` Objects

```python
class DIDResolver()
```

Unified DID resolver for SpoonOS agents.
Resolution flow: IdentityRegistry (agentId) → NeoFS (primary) → IPFS (fallback)

<a id="spoon_ai.identity.did_resolver.DIDResolver.resolve"></a>

#### `resolve`

```python
def resolve(agent_id: int) -> DIDResolutionResult
```

Resolve agent identity to complete DID document.

**Arguments**:

- `agent_id` - On-chain agent token ID from IdentityRegistry
  

**Returns**:

  DIDResolutionResult with document and metadata

<a id="spoon_ai.identity.did_resolver.DIDResolver.resolve_metadata_only"></a>

#### `resolve_metadata_only`

```python
def resolve_metadata_only(agent_id: int) -> Dict
```

Resolve only on-chain metadata (fast path)

<a id="spoon_ai.identity.did_resolver.DIDResolver.verify_agent"></a>

#### `verify_agent`

```python
def verify_agent(agent_id: int) -> bool
```

Verify agent exists and is resolvable

