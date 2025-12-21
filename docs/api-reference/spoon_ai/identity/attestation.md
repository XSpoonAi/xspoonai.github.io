---
id: spoon_ai.identity.attestation
slug: /api-reference/spoon_ai/identity/attestation
title: spoon_ai.identity.attestation
---

# Table of Contents

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

