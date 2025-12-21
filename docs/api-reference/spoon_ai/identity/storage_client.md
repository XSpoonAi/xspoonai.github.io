---
id: spoon_ai.identity.storage_client
slug: /api-reference/spoon_ai/identity/storage_client
title: spoon_ai.identity.storage_client
---

# Table of Contents

* [spoon\_ai.identity.storage\_client](#spoon_ai.identity.storage_client)
  * [DIDStorageClient](#spoon_ai.identity.storage_client.DIDStorageClient)
    * [publish\_did\_document](#spoon_ai.identity.storage_client.DIDStorageClient.publish_did_document)
    * [fetch\_did\_document](#spoon_ai.identity.storage_client.DIDStorageClient.fetch_did_document)
    * [publish\_credential](#spoon_ai.identity.storage_client.DIDStorageClient.publish_credential)
    * [close](#spoon_ai.identity.storage_client.DIDStorageClient.close)

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

