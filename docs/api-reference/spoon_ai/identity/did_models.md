---
id: spoon_ai.identity.did_models
slug: /api-reference/spoon_ai/identity/did_models
title: spoon_ai.identity.did_models
---

# Table of Contents

* [spoon\_ai.identity.did\_models](#spoon_ai.identity.did_models)
  * [VerificationMethodType](#spoon_ai.identity.did_models.VerificationMethodType)
  * [ServiceType](#spoon_ai.identity.did_models.ServiceType)
  * [VerificationMethod](#spoon_ai.identity.did_models.VerificationMethod)
  * [ServiceEndpoint](#spoon_ai.identity.did_models.ServiceEndpoint)
  * [ReputationScore](#spoon_ai.identity.did_models.ReputationScore)
  * [Attestation](#spoon_ai.identity.did_models.Attestation)
  * [AgentCard](#spoon_ai.identity.did_models.AgentCard)
  * [AgentDID](#spoon_ai.identity.did_models.AgentDID)
    * [to\_did\_document](#spoon_ai.identity.did_models.AgentDID.to_did_document)
    * [to\_agent\_card](#spoon_ai.identity.did_models.AgentDID.to_agent_card)
  * [DIDResolutionResult](#spoon_ai.identity.did_models.DIDResolutionResult)

<a id="spoon_ai.identity.did_models"></a>

# Module `spoon_ai.identity.did_models`

DID Data Models for SpoonOS Agents
Following W3C DID Core specification and ERC-8004 standard

<a id="spoon_ai.identity.did_models.VerificationMethodType"></a>

## `VerificationMethodType` Objects

```python
class VerificationMethodType(str, Enum)
```

Supported verification method types

<a id="spoon_ai.identity.did_models.ServiceType"></a>

## `ServiceType` Objects

```python
class ServiceType(str, Enum)
```

Agent service endpoint types

<a id="spoon_ai.identity.did_models.VerificationMethod"></a>

## `VerificationMethod` Objects

```python
class VerificationMethod(BaseModel)
```

Cryptographic verification method for DID authentication

<a id="spoon_ai.identity.did_models.ServiceEndpoint"></a>

## `ServiceEndpoint` Objects

```python
class ServiceEndpoint(BaseModel)
```

Service endpoint for agent interaction

<a id="spoon_ai.identity.did_models.ReputationScore"></a>

## `ReputationScore` Objects

```python
class ReputationScore(BaseModel)
```

Aggregated reputation score

<a id="spoon_ai.identity.did_models.Attestation"></a>

## `Attestation` Objects

```python
class Attestation(BaseModel)
```

Verifiable attestation about an agent

<a id="spoon_ai.identity.did_models.AgentCard"></a>

## `AgentCard` Objects

```python
class AgentCard(BaseModel)
```

Agent Card following Google's A2A protocol
Provides human-readable agent information

<a id="spoon_ai.identity.did_models.AgentDID"></a>

## `AgentDID` Objects

```python
class AgentDID(BaseModel)
```

Complete W3C DID Document for SpoonOS Agent

<a id="spoon_ai.identity.did_models.AgentDID.to_did_document"></a>

#### `to_did_document`

```python
def to_did_document() -> Dict[str, Any]
```

Export as standard W3C DID Document

<a id="spoon_ai.identity.did_models.AgentDID.to_agent_card"></a>

#### `to_agent_card`

```python
def to_agent_card() -> Dict[str, Any]
```

Export agent card separately

<a id="spoon_ai.identity.did_models.DIDResolutionResult"></a>

## `DIDResolutionResult` Objects

```python
class DIDResolutionResult(BaseModel)
```

Result of DID resolution

