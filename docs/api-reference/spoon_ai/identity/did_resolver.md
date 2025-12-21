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
    * [verify\_did](#spoon_ai.identity.did_resolver.DIDResolver.verify_did)

<a id="spoon_ai.identity.did_resolver"></a>

# Module `spoon_ai.identity.did_resolver`

DID Resolver for SpoonOS Agents
Implements unified DID resolution with NeoFS-first policy

<a id="spoon_ai.identity.did_resolver.DIDResolver"></a>

## `DIDResolver` Objects

```python
class DIDResolver()
```

Unified DID resolver for SpoonOS agents
Resolution flow: On-chain anchor → NeoFS (primary) → IPFS (fallback)

<a id="spoon_ai.identity.did_resolver.DIDResolver.resolve"></a>

#### `resolve`

```python
def resolve(did: str) -> DIDResolutionResult
```

Resolve DID to complete DID document

**Arguments**:

- `did` - DID string (did:spoon:agent:&lt;identifier&gt;)
  

**Returns**:

  DIDResolutionResult with document and metadata

<a id="spoon_ai.identity.did_resolver.DIDResolver.resolve_metadata_only"></a>

#### `resolve_metadata_only`

```python
def resolve_metadata_only(did: str) -> Dict
```

Resolve only on-chain metadata (fast path)

<a id="spoon_ai.identity.did_resolver.DIDResolver.verify_did"></a>

#### `verify_did`

```python
def verify_did(did: str) -> bool
```

Verify DID exists and is resolvable

