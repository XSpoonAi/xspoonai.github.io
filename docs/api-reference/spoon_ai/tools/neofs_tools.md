---
id: spoon_ai.tools.neofs_tools
slug: /api-reference/spoon_ai/tools/neofs_tools
title: spoon_ai.tools.neofs_tools
---

# Table of Contents

* [spoon\_ai.tools.neofs\_tools](#spoon_ai.tools.neofs_tools)
  * [get\_shared\_neofs\_client](#spoon_ai.tools.neofs_tools.get_shared_neofs_client)
  * [CreateBearerTokenTool](#spoon_ai.tools.neofs_tools.CreateBearerTokenTool)
  * [CreateContainerTool](#spoon_ai.tools.neofs_tools.CreateContainerTool)
  * [UploadObjectTool](#spoon_ai.tools.neofs_tools.UploadObjectTool)
  * [DownloadObjectByIdTool](#spoon_ai.tools.neofs_tools.DownloadObjectByIdTool)
  * [GetObjectHeaderByIdTool](#spoon_ai.tools.neofs_tools.GetObjectHeaderByIdTool)
  * [DownloadObjectByAttributeTool](#spoon_ai.tools.neofs_tools.DownloadObjectByAttributeTool)
  * [GetObjectHeaderByAttributeTool](#spoon_ai.tools.neofs_tools.GetObjectHeaderByAttributeTool)
  * [DeleteObjectTool](#spoon_ai.tools.neofs_tools.DeleteObjectTool)
  * [SearchObjectsTool](#spoon_ai.tools.neofs_tools.SearchObjectsTool)
  * [SetContainerEaclTool](#spoon_ai.tools.neofs_tools.SetContainerEaclTool)
  * [GetContainerEaclTool](#spoon_ai.tools.neofs_tools.GetContainerEaclTool)
  * [ListContainersTool](#spoon_ai.tools.neofs_tools.ListContainersTool)
  * [GetContainerInfoTool](#spoon_ai.tools.neofs_tools.GetContainerInfoTool)
  * [DeleteContainerTool](#spoon_ai.tools.neofs_tools.DeleteContainerTool)
  * [GetNetworkInfoTool](#spoon_ai.tools.neofs_tools.GetNetworkInfoTool)
  * [GetBalanceTool](#spoon_ai.tools.neofs_tools.GetBalanceTool)

<a id="spoon_ai.tools.neofs_tools"></a>

# Module `spoon_ai.tools.neofs_tools`

NeoFS Tools for spoon_ai framework

Simple wrappers around NeoFS client methods.
Tools do NOT auto-create bearer tokens - Agent manages tokens.
All parameters map directly to client method parameters.

<a id="spoon_ai.tools.neofs_tools.get_shared_neofs_client"></a>

#### `get_shared_neofs_client`

```python
def get_shared_neofs_client() -> NeoFSClient
```

Get shared NeoFSClient instance for all NeoFS tools.

Returns the same client instance across all tool calls to ensure
bearer token authentication works correctly.

<a id="spoon_ai.tools.neofs_tools.CreateBearerTokenTool"></a>

## `CreateBearerTokenTool` Objects

```python
class CreateBearerTokenTool(BaseTool)
```

Create a bearer token for NeoFS operations

<a id="spoon_ai.tools.neofs_tools.CreateContainerTool"></a>

## `CreateContainerTool` Objects

```python
class CreateContainerTool(BaseTool)
```

Create a NeoFS container

<a id="spoon_ai.tools.neofs_tools.UploadObjectTool"></a>

## `UploadObjectTool` Objects

```python
class UploadObjectTool(BaseTool)
```

Upload object to container

<a id="spoon_ai.tools.neofs_tools.DownloadObjectByIdTool"></a>

## `DownloadObjectByIdTool` Objects

```python
class DownloadObjectByIdTool(BaseTool)
```

Download object by ID

<a id="spoon_ai.tools.neofs_tools.GetObjectHeaderByIdTool"></a>

## `GetObjectHeaderByIdTool` Objects

```python
class GetObjectHeaderByIdTool(BaseTool)
```

Get object header by ID

<a id="spoon_ai.tools.neofs_tools.DownloadObjectByAttributeTool"></a>

## `DownloadObjectByAttributeTool` Objects

```python
class DownloadObjectByAttributeTool(BaseTool)
```

Download object by attribute

<a id="spoon_ai.tools.neofs_tools.GetObjectHeaderByAttributeTool"></a>

## `GetObjectHeaderByAttributeTool` Objects

```python
class GetObjectHeaderByAttributeTool(BaseTool)
```

Get object header by attribute

<a id="spoon_ai.tools.neofs_tools.DeleteObjectTool"></a>

## `DeleteObjectTool` Objects

```python
class DeleteObjectTool(BaseTool)
```

Delete an object

<a id="spoon_ai.tools.neofs_tools.SearchObjectsTool"></a>

## `SearchObjectsTool` Objects

```python
class SearchObjectsTool(BaseTool)
```

Search objects in container

<a id="spoon_ai.tools.neofs_tools.SetContainerEaclTool"></a>

## `SetContainerEaclTool` Objects

```python
class SetContainerEaclTool(BaseTool)
```

Set eACL for container

<a id="spoon_ai.tools.neofs_tools.GetContainerEaclTool"></a>

## `GetContainerEaclTool` Objects

```python
class GetContainerEaclTool(BaseTool)
```

Get eACL for container

<a id="spoon_ai.tools.neofs_tools.ListContainersTool"></a>

## `ListContainersTool` Objects

```python
class ListContainersTool(BaseTool)
```

List all containers

<a id="spoon_ai.tools.neofs_tools.GetContainerInfoTool"></a>

## `GetContainerInfoTool` Objects

```python
class GetContainerInfoTool(BaseTool)
```

Get container info

<a id="spoon_ai.tools.neofs_tools.DeleteContainerTool"></a>

## `DeleteContainerTool` Objects

```python
class DeleteContainerTool(BaseTool)
```

Delete container

<a id="spoon_ai.tools.neofs_tools.GetNetworkInfoTool"></a>

## `GetNetworkInfoTool` Objects

```python
class GetNetworkInfoTool(BaseTool)
```

Get network info

<a id="spoon_ai.tools.neofs_tools.GetBalanceTool"></a>

## `GetBalanceTool` Objects

```python
class GetBalanceTool(BaseTool)
```

Get balance for an address

