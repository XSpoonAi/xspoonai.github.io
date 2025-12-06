---
id: spoon_ai.tools
slug: /api-reference/spoon_ai/tools//index
title: spoon_ai.tools
---

# Table of Contents

* [spoon\_ai.tools](#spoon_ai.tools)
* [spoon\_ai.tools.turnkey\_tools](#spoon_ai.tools.turnkey_tools)
  * [TurnkeyBaseTool](#spoon_ai.tools.turnkey_tools.TurnkeyBaseTool)
    * [client](#spoon_ai.tools.turnkey_tools.TurnkeyBaseTool.client)
  * [SignEVMTransactionTool](#spoon_ai.tools.turnkey_tools.SignEVMTransactionTool)
    * [execute](#spoon_ai.tools.turnkey_tools.SignEVMTransactionTool.execute)
  * [SignMessageTool](#spoon_ai.tools.turnkey_tools.SignMessageTool)
    * [execute](#spoon_ai.tools.turnkey_tools.SignMessageTool.execute)
  * [SignTypedDataTool](#spoon_ai.tools.turnkey_tools.SignTypedDataTool)
    * [execute](#spoon_ai.tools.turnkey_tools.SignTypedDataTool.execute)
  * [BroadcastTransactionTool](#spoon_ai.tools.turnkey_tools.BroadcastTransactionTool)
    * [execute](#spoon_ai.tools.turnkey_tools.BroadcastTransactionTool.execute)
  * [ListWalletsTool](#spoon_ai.tools.turnkey_tools.ListWalletsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListWalletsTool.execute)
  * [ListWalletAccountsTool](#spoon_ai.tools.turnkey_tools.ListWalletAccountsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListWalletAccountsTool.execute)
  * [GetActivityTool](#spoon_ai.tools.turnkey_tools.GetActivityTool)
    * [execute](#spoon_ai.tools.turnkey_tools.GetActivityTool.execute)
  * [ListActivitiesTool](#spoon_ai.tools.turnkey_tools.ListActivitiesTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListActivitiesTool.execute)
  * [WhoAmITool](#spoon_ai.tools.turnkey_tools.WhoAmITool)
    * [execute](#spoon_ai.tools.turnkey_tools.WhoAmITool.execute)
  * [BuildUnsignedEIP1559TxTool](#spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool)
    * [execute](#spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool.execute)
  * [ListAllAccountsTool](#spoon_ai.tools.turnkey_tools.ListAllAccountsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.ListAllAccountsTool.execute)
  * [BatchSignTransactionsTool](#spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool.execute)
  * [CreateWalletTool](#spoon_ai.tools.turnkey_tools.CreateWalletTool)
    * [execute](#spoon_ai.tools.turnkey_tools.CreateWalletTool.execute)
  * [GetWalletTool](#spoon_ai.tools.turnkey_tools.GetWalletTool)
    * [execute](#spoon_ai.tools.turnkey_tools.GetWalletTool.execute)
  * [CreateWalletAccountsTool](#spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool)
    * [execute](#spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool.execute)
  * [CompleteTransactionWorkflowTool](#spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool)
    * [execute](#spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool.execute)
  * [get\_turnkey\_tools](#spoon_ai.tools.turnkey_tools.get_turnkey_tools)
* [spoon\_ai.tools.tool\_manager](#spoon_ai.tools.tool_manager)
  * [ToolManager](#spoon_ai.tools.tool_manager.ToolManager)
    * [reindex](#spoon_ai.tools.tool_manager.ToolManager.reindex)
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
* [spoon\_ai.tools.x402\_payment](#spoon_ai.tools.x402_payment)
  * [X402PaymentHeaderTool](#spoon_ai.tools.x402_payment.X402PaymentHeaderTool)
  * [X402PaywalledRequestTool](#spoon_ai.tools.x402_payment.X402PaywalledRequestTool)
* [spoon\_ai.tools.mcp\_tool](#spoon_ai.tools.mcp_tool)
  * [MCPTool](#spoon_ai.tools.mcp_tool.MCPTool)
    * [call\_mcp\_tool](#spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool)
    * [list\_available\_tools](#spoon_ai.tools.mcp_tool.MCPTool.list_available_tools)
* [spoon\_ai.tools.base](#spoon_ai.tools.base)
  * [ToolFailure](#spoon_ai.tools.base.ToolFailure)

<a id="spoon_ai.tools"></a>

# Module `spoon_ai.tools`

<a id="spoon_ai.tools.turnkey_tools"></a>

# Module `spoon_ai.tools.turnkey_tools`

Turnkey Tools - Secure Blockchain Operations

This module provides Turnkey SDK tools for secure blockchain operations including:
- Transaction signing and broadcasting
- Message and EIP-712 signing
- Multi-account management
- Activity audit and monitoring
- Wallet and account operations

<a id="spoon_ai.tools.turnkey_tools.TurnkeyBaseTool"></a>

## `TurnkeyBaseTool` Objects

```python
class TurnkeyBaseTool(BaseTool)
```

Base class for Turnkey tools with shared client initialization

<a id="spoon_ai.tools.turnkey_tools.TurnkeyBaseTool.client"></a>

#### `client`

```python
@property
def client()
```

Lazy initialization of Turnkey client

<a id="spoon_ai.tools.turnkey_tools.SignEVMTransactionTool"></a>

## `SignEVMTransactionTool` Objects

```python
class SignEVMTransactionTool(TurnkeyBaseTool)
```

Sign EVM transaction using Turnkey

<a id="spoon_ai.tools.turnkey_tools.SignEVMTransactionTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str, unsigned_tx: str, **kwargs) -> str
```

Sign EVM transaction

<a id="spoon_ai.tools.turnkey_tools.SignMessageTool"></a>

## `SignMessageTool` Objects

```python
class SignMessageTool(TurnkeyBaseTool)
```

Sign arbitrary message using Turnkey

<a id="spoon_ai.tools.turnkey_tools.SignMessageTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str,
                  message: str,
                  use_keccak256: bool = True,
                  **kwargs) -> str
```

Sign message

<a id="spoon_ai.tools.turnkey_tools.SignTypedDataTool"></a>

## `SignTypedDataTool` Objects

```python
class SignTypedDataTool(TurnkeyBaseTool)
```

Sign EIP-712 structured data using Turnkey

<a id="spoon_ai.tools.turnkey_tools.SignTypedDataTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str, typed_data: dict, **kwargs) -> str
```

Sign EIP-712 typed data

<a id="spoon_ai.tools.turnkey_tools.BroadcastTransactionTool"></a>

## `BroadcastTransactionTool` Objects

```python
class BroadcastTransactionTool(TurnkeyBaseTool)
```

Broadcast signed transaction to blockchain

<a id="spoon_ai.tools.turnkey_tools.BroadcastTransactionTool.execute"></a>

#### `execute`

```python
async def execute(signed_tx: str, rpc_url: str = None, **kwargs) -> str
```

Broadcast transaction

<a id="spoon_ai.tools.turnkey_tools.ListWalletsTool"></a>

## `ListWalletsTool` Objects

```python
class ListWalletsTool(TurnkeyBaseTool)
```

List all wallets in the organization

<a id="spoon_ai.tools.turnkey_tools.ListWalletsTool.execute"></a>

#### `execute`

```python
async def execute(**kwargs) -> str
```

List wallets

<a id="spoon_ai.tools.turnkey_tools.ListWalletAccountsTool"></a>

## `ListWalletAccountsTool` Objects

```python
class ListWalletAccountsTool(TurnkeyBaseTool)
```

List accounts for a specific wallet

<a id="spoon_ai.tools.turnkey_tools.ListWalletAccountsTool.execute"></a>

#### `execute`

```python
async def execute(wallet_id: str,
                  limit: str = None,
                  before: str = None,
                  after: str = None,
                  **kwargs) -> str
```

List wallet accounts

<a id="spoon_ai.tools.turnkey_tools.GetActivityTool"></a>

## `GetActivityTool` Objects

```python
class GetActivityTool(TurnkeyBaseTool)
```

Get activity details by ID

<a id="spoon_ai.tools.turnkey_tools.GetActivityTool.execute"></a>

#### `execute`

```python
async def execute(activity_id: str, **kwargs) -> str
```

Get activity details

<a id="spoon_ai.tools.turnkey_tools.ListActivitiesTool"></a>

## `ListActivitiesTool` Objects

```python
class ListActivitiesTool(TurnkeyBaseTool)
```

List recent activities in the organization

<a id="spoon_ai.tools.turnkey_tools.ListActivitiesTool.execute"></a>

#### `execute`

```python
async def execute(limit: str = "10",
                  before: str = None,
                  after: str = None,
                  filter_by_status: list = None,
                  filter_by_type: list = None,
                  **kwargs) -> str
```

List activities

<a id="spoon_ai.tools.turnkey_tools.WhoAmITool"></a>

## `WhoAmITool` Objects

```python
class WhoAmITool(TurnkeyBaseTool)
```

Get organization information

<a id="spoon_ai.tools.turnkey_tools.WhoAmITool.execute"></a>

#### `execute`

```python
async def execute(**kwargs) -> str
```

Get organization info

<a id="spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool"></a>

## `BuildUnsignedEIP1559TxTool` Objects

```python
class BuildUnsignedEIP1559TxTool(BaseTool)
```

Build unsigned EIP-1559 transaction (supports NeoX)

<a id="spoon_ai.tools.turnkey_tools.BuildUnsignedEIP1559TxTool.execute"></a>

#### `execute`

```python
async def execute(from_addr: str,
                  to_addr: str = None,
                  value_wei: str = "0",
                  data_hex: str = "0x",
                  priority_gwei: str = "1",
                  max_fee_gwei: str = None,
                  gas_limit: str = None,
                  rpc_url: str = None,
                  **kwargs) -> str
```

Build unsigned transaction (auto-detects NeoX)

<a id="spoon_ai.tools.turnkey_tools.ListAllAccountsTool"></a>

## `ListAllAccountsTool` Objects

```python
class ListAllAccountsTool(TurnkeyBaseTool)
```

List all accounts across all wallets in the organization

<a id="spoon_ai.tools.turnkey_tools.ListAllAccountsTool.execute"></a>

#### `execute`

```python
async def execute(limit: str = "50", **kwargs) -> str
```

List all accounts across all wallets

<a id="spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool"></a>

## `BatchSignTransactionsTool` Objects

```python
class BatchSignTransactionsTool(TurnkeyBaseTool)
```

Batch sign transactions for multiple accounts

<a id="spoon_ai.tools.turnkey_tools.BatchSignTransactionsTool.execute"></a>

#### `execute`

```python
async def execute(to_address: str,
                  value_wei: str,
                  data_hex: str = "0x",
                  max_accounts: str = "3",
                  enable_broadcast: bool = False,
                  rpc_url: str = None,
                  **kwargs) -> str
```

Batch sign transactions for multiple accounts

<a id="spoon_ai.tools.turnkey_tools.CreateWalletTool"></a>

## `CreateWalletTool` Objects

```python
class CreateWalletTool(TurnkeyBaseTool)
```

Create a new wallet

<a id="spoon_ai.tools.turnkey_tools.CreateWalletTool.execute"></a>

#### `execute`

```python
async def execute(wallet_name: str,
                  accounts_json: str = None,
                  mnemonic_length: str = "24",
                  **kwargs) -> str
```

Create a new wallet

<a id="spoon_ai.tools.turnkey_tools.GetWalletTool"></a>

## `GetWalletTool` Objects

```python
class GetWalletTool(TurnkeyBaseTool)
```

Get wallet information by wallet ID

<a id="spoon_ai.tools.turnkey_tools.GetWalletTool.execute"></a>

#### `execute`

```python
async def execute(wallet_id: str, **kwargs) -> str
```

Get wallet information

<a id="spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool"></a>

## `CreateWalletAccountsTool` Objects

```python
class CreateWalletAccountsTool(TurnkeyBaseTool)
```

Add accounts to an existing wallet

<a id="spoon_ai.tools.turnkey_tools.CreateWalletAccountsTool.execute"></a>

#### `execute`

```python
async def execute(wallet_id: str, accounts_json: str, **kwargs) -> str
```

Add accounts to existing wallet

<a id="spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool"></a>

## `CompleteTransactionWorkflowTool` Objects

```python
class CompleteTransactionWorkflowTool(TurnkeyBaseTool)
```

Complete transaction workflow: build, sign, and optionally broadcast

<a id="spoon_ai.tools.turnkey_tools.CompleteTransactionWorkflowTool.execute"></a>

#### `execute`

```python
async def execute(sign_with: str,
                  to_address: str,
                  value_wei: str,
                  data_hex: str = "0x",
                  enable_broadcast: bool = False,
                  rpc_url: str = None,
                  **kwargs) -> str
```

Complete transaction workflow

<a id="spoon_ai.tools.turnkey_tools.get_turnkey_tools"></a>

#### `get_turnkey_tools`

```python
def get_turnkey_tools() -> List[BaseTool]
```

Get all Turnkey tools

<a id="spoon_ai.tools.tool_manager"></a>

# Module `spoon_ai.tools.tool_manager`

<a id="spoon_ai.tools.tool_manager.ToolManager"></a>

## `ToolManager` Objects

```python
class ToolManager()
```

<a id="spoon_ai.tools.tool_manager.ToolManager.reindex"></a>

#### `reindex`

```python
def reindex() -> None
```

Rebuild the internal name-&gt;tool mapping. Useful if tools have been renamed dynamically.

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

<a id="spoon_ai.tools.x402_payment"></a>

# Module `spoon_ai.tools.x402_payment`

<a id="spoon_ai.tools.x402_payment.X402PaymentHeaderTool"></a>

## `X402PaymentHeaderTool` Objects

```python
class X402PaymentHeaderTool(BaseTool)
```

Create a signed X-PAYMENT header for a given resource.

<a id="spoon_ai.tools.x402_payment.X402PaywalledRequestTool"></a>

## `X402PaywalledRequestTool` Objects

```python
class X402PaywalledRequestTool(BaseTool)
```

Fetch a paywalled resource, handling the x402 402 negotiation automatically.

<a id="spoon_ai.tools.mcp_tool"></a>

# Module `spoon_ai.tools.mcp_tool`

<a id="spoon_ai.tools.mcp_tool.MCPTool"></a>

## `MCPTool` Objects

```python
class MCPTool(BaseTool, MCPClientMixin)
```

<a id="spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool"></a>

#### `call_mcp_tool`

```python
async def call_mcp_tool(tool_name: str, **kwargs)
```

Override the mixin method to add tool-specific error handling.

<a id="spoon_ai.tools.mcp_tool.MCPTool.list_available_tools"></a>

#### `list_available_tools`

```python
async def list_available_tools() -> list
```

List available tools from the MCP server.

<a id="spoon_ai.tools.base"></a>

# Module `spoon_ai.tools.base`

<a id="spoon_ai.tools.base.ToolFailure"></a>

## `ToolFailure` Objects

```python
class ToolFailure(Exception)
```

Exception to indicate a tool execution failure.

