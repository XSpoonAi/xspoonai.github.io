---
id: spoon_ai.neofs.client
slug: /api-reference/spoon_ai/neofs/client.md
title: spoon_ai.neofs.client
---

# Table of Contents

* [spoon\_ai.neofs.client](#spoon_ai.neofs.client)
  * [NeoFSClient](#spoon_ai.neofs.client.NeoFSClient)
    * [set\_container\_eacl](#spoon_ai.neofs.client.NeoFSClient.set_container_eacl)
    * [download\_object\_by\_id](#spoon_ai.neofs.client.NeoFSClient.download_object_by_id)
    * [get\_object\_header\_by\_id](#spoon_ai.neofs.client.NeoFSClient.get_object_header_by_id)
    * [download\_object\_by\_attribute](#spoon_ai.neofs.client.NeoFSClient.download_object_by_attribute)
    * [get\_object\_header\_by\_attribute](#spoon_ai.neofs.client.NeoFSClient.get_object_header_by_attribute)
    * [search\_objects](#spoon_ai.neofs.client.NeoFSClient.search_objects)
  * [NeoFSException](#spoon_ai.neofs.client.NeoFSException)
  * [NeoFSAPIException](#spoon_ai.neofs.client.NeoFSAPIException)

<a id="spoon_ai.neofs.client"></a>

# Module `spoon_ai.neofs.client`

<a id="spoon_ai.neofs.client.NeoFSClient"></a>

## `NeoFSClient` Objects

```python
class NeoFSClient()
```

<a id="spoon_ai.neofs.client.NeoFSClient.set_container_eacl"></a>

#### `set_container_eacl`

```python
def set_container_eacl(container_id: str,
                       eacl: Eacl,
                       *,
                       bearer_token: Optional[str] = None,
                       wallet_connect: bool = True) -> SuccessResponse
```

Set container eACL.

**Arguments**:

- `container_id` - Container ID
- `eacl` - eACL object
- `bearer_token` - Optional Bearer Token (recommended for eACL operations)
- `wallet_connect` - Whether to use wallet_connect mode (default True)

<a id="spoon_ai.neofs.client.NeoFSClient.download_object_by_id"></a>

#### `download_object_by_id`

```python
def download_object_by_id(container_id: str,
                          object_id: str,
                          *,
                          bearer_token: Optional[str] = None,
                          download: bool | None = None,
                          range_header: str | None = None) -> httpx.Response
```

Download object by ID. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.get_object_header_by_id"></a>

#### `get_object_header_by_id`

```python
def get_object_header_by_id(container_id: str,
                            object_id: str,
                            *,
                            bearer_token: Optional[str] = None,
                            range_header: str | None = None) -> httpx.Response
```

Get object header by ID. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.download_object_by_attribute"></a>

#### `download_object_by_attribute`

```python
def download_object_by_attribute(
        container_id: str,
        attr_key: str,
        attr_val: str,
        *,
        bearer_token: Optional[str] = None,
        download: bool | None = None,
        range_header: str | None = None) -> httpx.Response
```

Download object by attribute. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.get_object_header_by_attribute"></a>

#### `get_object_header_by_attribute`

```python
def get_object_header_by_attribute(
        container_id: str,
        attr_key: str,
        attr_val: str,
        *,
        bearer_token: Optional[str] = None,
        range_header: str | None = None) -> httpx.Response
```

Get object header by attribute. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSClient.search_objects"></a>

#### `search_objects`

```python
def search_objects(container_id: str,
                   search_request: SearchRequest,
                   *,
                   bearer_token: Optional[str] = None,
                   cursor: str = "",
                   limit: int = 100) -> ObjectListV2
```

Search objects. Bearer token is optional for public containers.

<a id="spoon_ai.neofs.client.NeoFSException"></a>

## `NeoFSException` Objects

```python
class NeoFSException(Exception)
```

Base exception for the NeoFS client.

<a id="spoon_ai.neofs.client.NeoFSAPIException"></a>

## `NeoFSAPIException` Objects

```python
class NeoFSAPIException(NeoFSException)
```

Raised when the API returns an error.

