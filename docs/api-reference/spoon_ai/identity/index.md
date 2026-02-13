---
id: spoon_ai.identity
slug: /api-reference/spoon_ai/identity//index
title: spoon_ai.identity
---

# Table of Contents

* [spoon\_ai.identity](#spoon_ai.identity)
* [spoon\_ai.identity.attestation](#spoon_ai.identity.attestation)
  * [AttestationManager](#spoon_ai.identity.attestation.AttestationManager)
    * [create\_attestation](#spoon_ai.identity.attestation.AttestationManager.create_attestation)
    * [verify\_attestation](#spoon_ai.identity.attestation.AttestationManager.verify_attestation)
    * [submit\_reputation\_on\_chain](#spoon_ai.identity.attestation.AttestationManager.submit_reputation_on_chain)
    * [submit\_validation\_on\_chain](#spoon_ai.identity.attestation.AttestationManager.submit_validation_on_chain)
  * [TrustScoreCalculator](#spoon_ai.identity.attestation.TrustScoreCalculator)
    * [calculate\_trust\_score](#spoon_ai.identity.attestation.TrustScoreCalculator.calculate_trust_score)
    * [get\_reputation\_breakdown](#spoon_ai.identity.attestation.TrustScoreCalculator.get_reputation_breakdown)
    * [get\_validation\_breakdown](#spoon_ai.identity.attestation.TrustScoreCalculator.get_validation_breakdown)
* [spoon\_ai.identity.storage\_client](#spoon_ai.identity.storage_client)
  * [DIDStorageClient](#spoon_ai.identity.storage_client.DIDStorageClient)
    * [publish\_did\_document](#spoon_ai.identity.storage_client.DIDStorageClient.publish_did_document)
    * [fetch\_did\_document](#spoon_ai.identity.storage_client.DIDStorageClient.fetch_did_document)
    * [publish\_credential](#spoon_ai.identity.storage_client.DIDStorageClient.publish_credential)
    * [close](#spoon_ai.identity.storage_client.DIDStorageClient.close)
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
* [spoon\_ai.identity.did\_resolver](#spoon_ai.identity.did_resolver)
  * [DIDResolver](#spoon_ai.identity.did_resolver.DIDResolver)
    * [resolve](#spoon_ai.identity.did_resolver.DIDResolver.resolve)
    * [resolve\_metadata\_only](#spoon_ai.identity.did_resolver.DIDResolver.resolve_metadata_only)
    * [verify\_did](#spoon_ai.identity.did_resolver.DIDResolver.verify_did)
* [spoon\_ai.identity.erc8004\_abi](#spoon_ai.identity.erc8004_abi)

<a id="spoon_ai.identity"></a>

# Module `spoon_ai.identity`

SpoonOS Agent DID Identity Module
Implements ERC-8004 compliant decentralized identity for agents

<a id="spoon_ai.identity.attestation"></a>

# Module `spoon_ai.identity.attestation`

Attestation and Trust Score Management
Handles verifiable credentials and reputation calculations

<a id="spoon_ai.identity.attestation.AttestationManager"></a>

## `AttestationManager` Objects

```python
class AttestationManager()
```

Manages verifiable attestations for agents

<a id="spoon_ai.identity.attestation.AttestationManager.create_attestation"></a>

#### `create_attestation`

```python
def create_attestation(issuer_did: str,
                       subject_did: str,
                       claim: Dict,
                       evidence: Optional[str] = None) -> Attestation
```

Create a verifiable attestation

**Arguments**:

- `issuer_did` - DID of the attestation issuer
- `subject_did` - DID of the agent being attested
- `claim` - Attestation claim data
- `evidence` - Optional supporting evidence
  

**Returns**:

  Signed Attestation object

<a id="spoon_ai.identity.attestation.AttestationManager.verify_attestation"></a>

#### `verify_attestation`

```python
def verify_attestation(attestation: Attestation) -> bool
```

Verify attestation signature

<a id="spoon_ai.identity.attestation.AttestationManager.submit_reputation_on_chain"></a>

#### `submit_reputation_on_chain`

```python
def submit_reputation_on_chain(subject_did: str, score: int,
                               evidence: str) -> str
```

Submit reputation score to on-chain registry

**Arguments**:

- `subject_did` - DID of agent being rated
- `score` - Score between -100 and 100
- `evidence` - Evidence for the score
  

**Returns**:

  Transaction hash

<a id="spoon_ai.identity.attestation.AttestationManager.submit_validation_on_chain"></a>

#### `submit_validation_on_chain`

```python
def submit_validation_on_chain(subject_did: str, is_valid: bool,
                               reason: str) -> str
```

Submit validation for an agent

**Arguments**:

- `subject_did` - DID of agent being validated
- `is_valid` - Whether agent is valid
- `reason` - Reason for validation decision
  

**Returns**:

  Transaction hash

<a id="spoon_ai.identity.attestation.TrustScoreCalculator"></a>

## `TrustScoreCalculator` Objects

```python
class TrustScoreCalculator()
```

Calculates trust scores for agents

<a id="spoon_ai.identity.attestation.TrustScoreCalculator.calculate_trust_score"></a>

#### `calculate_trust_score`

```python
def calculate_trust_score(did: str) -> Dict
```

Calculate comprehensive trust score

**Returns**:

  Dict with trust score components:
  - reputation_score: -100 to 100
  - validation_status: bool
  - trust_level: "high" | "medium" | "low" | "untrusted"
  - confidence: 0 to 1

<a id="spoon_ai.identity.attestation.TrustScoreCalculator.get_reputation_breakdown"></a>

#### `get_reputation_breakdown`

```python
def get_reputation_breakdown(did: str, limit: int = 10) -> List[Dict]
```

Get detailed reputation submissions

<a id="spoon_ai.identity.attestation.TrustScoreCalculator.get_validation_breakdown"></a>

#### `get_validation_breakdown`

```python
def get_validation_breakdown(did: str, limit: int = 10) -> List[Dict]
```

Get detailed validation submissions

<a id="spoon_ai.identity.storage_client"></a>

# Module `spoon_ai.identity.storage_client`

Storage clients for DID documents and agent cards
Supports NeoFS (primary) and IPFS (backup replication)

<a id="spoon_ai.identity.storage_client.DIDStorageClient"></a>

## `DIDStorageClient` Objects

```python
class DIDStorageClient()
```

Unified storage client for DID documents
NeoFS primary with IPFS replication

<a id="spoon_ai.identity.storage_client.DIDStorageClient.publish_did_document"></a>

#### `publish_did_document`

```python
def publish_did_document(agent_id: str, did_document: Dict,
                         agent_card: Dict) -> Tuple[str, str]
```

Publish DID document and agent card to storage
Returns (didDocURI, agentCardURI)

<a id="spoon_ai.identity.storage_client.DIDStorageClient.fetch_did_document"></a>

#### `fetch_did_document`

```python
def fetch_did_document(uri: str) -> Dict
```

Fetch DID document from URI (NeoFS or IPFS)

<a id="spoon_ai.identity.storage_client.DIDStorageClient.publish_credential"></a>

#### `publish_credential`

```python
def publish_credential(agent_id: str, credential: Dict) -> str
```

Publish verifiable credential

<a id="spoon_ai.identity.storage_client.DIDStorageClient.close"></a>

#### `close`

```python
def close()
```

Close HTTP clients

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

<a id="spoon_ai.identity.erc8004_abi"></a>

# Module `spoon_ai.identity.erc8004_abi`

Shared ERC-8004 ABI fragments (minimal, artifact-free).

These ABIs cover the common calls used by the Python SDK and demos.

