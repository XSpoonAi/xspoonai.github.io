---
id: spoon_ai.tools
slug: /api-reference/spoon_ai/tools/index.md/index
title: spoon_ai.tools
---

# Table of Contents

* [spoon\_ai.tools](#spoon_ai.tools)
* [spoon\_ai.tools.base](#spoon_ai.tools.base)
  * [ToolFailure](#spoon_ai.tools.base.ToolFailure)
* [spoon\_ai.tools.crypto\_tools](#spoon_ai.tools.crypto_tools)
  * [get\_crypto\_tools](#spoon_ai.tools.crypto_tools.get_crypto_tools)
  * [create\_crypto\_tool\_manager](#spoon_ai.tools.crypto_tools.create_crypto_tool_manager)
  * [get\_crypto\_tool\_names](#spoon_ai.tools.crypto_tools.get_crypto_tool_names)
  * [add\_crypto\_tools\_to\_manager](#spoon_ai.tools.crypto_tools.add_crypto_tools_to_manager)
  * [CryptoToolsConfig](#spoon_ai.tools.crypto_tools.CryptoToolsConfig)
    * [get\_available\_tools](#spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_available_tools)
    * [get\_tools\_requiring\_config](#spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_tools_requiring_config)
* [spoon\_ai.tools.mcp\_tool](#spoon_ai.tools.mcp_tool)
  * [MCPTool](#spoon_ai.tools.mcp_tool.MCPTool)
    * [call\_mcp\_tool](#spoon_ai.tools.mcp_tool.MCPTool.call_mcp_tool)
    * [list\_available\_tools](#spoon_ai.tools.mcp_tool.MCPTool.list_available_tools)
* [spoon\_ai.tools.mcp\_tools\_collection](#spoon_ai.tools.mcp_tools_collection)
  * [MCPToolsCollection](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection)
    * [\_\_init\_\_](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.__init__)
    * [run](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.run)
    * [add\_tool](#spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.add_tool)
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
* [spoon\_ai.tools.toolkit\_integration](#spoon_ai.tools.toolkit_integration)
  * [get\_all\_toolkit\_tools](#spoon_ai.tools.toolkit_integration.get_all_toolkit_tools)
  * [get\_crypto\_tools](#spoon_ai.tools.toolkit_integration.get_crypto_tools)
  * [get\_security\_tools](#spoon_ai.tools.toolkit_integration.get_security_tools)
  * [get\_data\_platform\_tools](#spoon_ai.tools.toolkit_integration.get_data_platform_tools)
  * [get\_storage\_tools](#spoon_ai.tools.toolkit_integration.get_storage_tools)
  * [get\_social\_media\_tools](#spoon_ai.tools.toolkit_integration.get_social_media_tools)
  * [create\_comprehensive\_tool\_manager](#spoon_ai.tools.toolkit_integration.create_comprehensive_tool_manager)
  * [add\_all\_toolkit\_tools\_to\_manager](#spoon_ai.tools.toolkit_integration.add_all_toolkit_tools_to_manager)
  * [ToolkitConfig](#spoon_ai.tools.toolkit_integration.ToolkitConfig)
    * [get\_tools\_by\_category](#spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_by_category)
    * [get\_all\_categories](#spoon_ai.tools.toolkit_integration.ToolkitConfig.get_all_categories)
    * [get\_tools\_requiring\_config](#spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_requiring_config)
* [spoon\_ai.tools.tool\_manager](#spoon_ai.tools.tool_manager)
  * [ToolManager](#spoon_ai.tools.tool_manager.ToolManager)
    * [reindex](#spoon_ai.tools.tool_manager.ToolManager.reindex)
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
* [spoon\_ai.tools.x402\_payment](#spoon_ai.tools.x402_payment)
  * [X402PaymentHeaderTool](#spoon_ai.tools.x402_payment.X402PaymentHeaderTool)
  * [X402PaywalledRequestTool](#spoon_ai.tools.x402_payment.X402PaywalledRequestTool)

<a id="spoon_ai.tools"></a>

# Module `spoon_ai.tools`

<a id="spoon_ai.tools.base"></a>

# Module `spoon_ai.tools.base`

<a id="spoon_ai.tools.base.ToolFailure"></a>

## `ToolFailure` Objects

```python
class ToolFailure(Exception)
```

Exception to indicate a tool execution failure.

<a id="spoon_ai.tools.crypto_tools"></a>

# Module `spoon_ai.tools.crypto_tools`

Crypto Tools Integration Module

This module provides integration of spoon-toolkit crypto tools as core tools
for the spoon-core chat functionality.

<a id="spoon_ai.tools.crypto_tools.get_crypto_tools"></a>

#### `get_crypto_tools`

```python
def get_crypto_tools() -> List[BaseTool]
```

Import and return all available crypto tools from spoon-toolkit.

**Returns**:

- `List[BaseTool]` - List of instantiated crypto tools

<a id="spoon_ai.tools.crypto_tools.create_crypto_tool_manager"></a>

#### `create_crypto_tool_manager`

```python
def create_crypto_tool_manager() -> ToolManager
```

Create a ToolManager instance with all crypto tools loaded.

**Returns**:

- `ToolManager` - Tool manager with crypto tools

<a id="spoon_ai.tools.crypto_tools.get_crypto_tool_names"></a>

#### `get_crypto_tool_names`

```python
def get_crypto_tool_names() -> List[str]
```

Get list of available crypto tool names.

**Returns**:

- `List[str]` - List of crypto tool names

<a id="spoon_ai.tools.crypto_tools.add_crypto_tools_to_manager"></a>

#### `add_crypto_tools_to_manager`

```python
def add_crypto_tools_to_manager(tool_manager: ToolManager) -> ToolManager
```

Add crypto tools to an existing ToolManager instance.

**Arguments**:

- `tool_manager` _ToolManager_ - Existing tool manager
  

**Returns**:

- `ToolManager` - Updated tool manager with crypto tools

<a id="spoon_ai.tools.crypto_tools.CryptoToolsConfig"></a>

## `CryptoToolsConfig` Objects

```python
class CryptoToolsConfig()
```

Configuration class for crypto tools integration

<a id="spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_available_tools"></a>

#### `get_available_tools`

```python
@classmethod
def get_available_tools(cls) -> List[str]
```

Get list of available crypto tool names

<a id="spoon_ai.tools.crypto_tools.CryptoToolsConfig.get_tools_requiring_config"></a>

#### `get_tools_requiring_config`

```python
@classmethod
def get_tools_requiring_config(cls) -> List[str]
```

Get list of tools that may require additional configuration

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

<a id="spoon_ai.tools.mcp_tools_collection"></a>

# Module `spoon_ai.tools.mcp_tools_collection`

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection"></a>

## `MCPToolsCollection` Objects

```python
class MCPToolsCollection()
```

Collection class that wraps existing tools as MCP tools

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.__init__"></a>

#### `__init__`

```python
def __init__()
```

Initialize MCP tools collection

**Arguments**:

- `name` - Name of the MCP server

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.run"></a>

#### `run`

```python
async def run(**kwargs)
```

Start the MCP server

**Arguments**:

- `**kwargs` - Parameters passed to FastMCP.run()

<a id="spoon_ai.tools.mcp_tools_collection.MCPToolsCollection.add_tool"></a>

#### `add_tool`

```python
async def add_tool(tool: BaseTool)
```

Add a tool to the MCP server

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

<a id="spoon_ai.tools.toolkit_integration"></a>

# Module `spoon_ai.tools.toolkit_integration`

Comprehensive Toolkit Integration Module

This module provides integration of all spoon-toolkit tools as core tools
for the spoon-core chat functionality, including crypto, security, data platforms,
storage, and social media tools.

<a id="spoon_ai.tools.toolkit_integration.get_all_toolkit_tools"></a>

#### `get_all_toolkit_tools`

```python
def get_all_toolkit_tools() -> List[BaseTool]
```

Import and return all available tools from spoon-toolkit.

**Returns**:

- `List[BaseTool]` - List of instantiated tools from all modules

<a id="spoon_ai.tools.toolkit_integration.get_crypto_tools"></a>

#### `get_crypto_tools`

```python
def get_crypto_tools() -> List[BaseTool]
```

Import crypto tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_security_tools"></a>

#### `get_security_tools`

```python
def get_security_tools() -> List[BaseTool]
```

Import security tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_data_platform_tools"></a>

#### `get_data_platform_tools`

```python
def get_data_platform_tools() -> List[BaseTool]
```

Import data platform tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_storage_tools"></a>

#### `get_storage_tools`

```python
def get_storage_tools() -> List[BaseTool]
```

Import storage tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.get_social_media_tools"></a>

#### `get_social_media_tools`

```python
def get_social_media_tools() -> List[BaseTool]
```

Import social media tools from spoon-toolkit

<a id="spoon_ai.tools.toolkit_integration.create_comprehensive_tool_manager"></a>

#### `create_comprehensive_tool_manager`

```python
def create_comprehensive_tool_manager() -> ToolManager
```

Create a ToolManager instance with all toolkit tools loaded.

**Returns**:

- `ToolManager` - Tool manager with all toolkit tools

<a id="spoon_ai.tools.toolkit_integration.add_all_toolkit_tools_to_manager"></a>

#### `add_all_toolkit_tools_to_manager`

```python
def add_all_toolkit_tools_to_manager(tool_manager: ToolManager) -> ToolManager
```

Add all toolkit tools to an existing ToolManager instance.

**Arguments**:

- `tool_manager` _ToolManager_ - Existing tool manager
  

**Returns**:

- `ToolManager` - Updated tool manager with all toolkit tools

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig"></a>

## `ToolkitConfig` Objects

```python
class ToolkitConfig()
```

Configuration class for comprehensive toolkit integration

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_by_category"></a>

#### `get_tools_by_category`

```python
@classmethod
def get_tools_by_category(cls, category: str) -> List[str]
```

Get list of tools in a specific category

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig.get_all_categories"></a>

#### `get_all_categories`

```python
@classmethod
def get_all_categories(cls) -> List[str]
```

Get list of all available tool categories

<a id="spoon_ai.tools.toolkit_integration.ToolkitConfig.get_tools_requiring_config"></a>

#### `get_tools_requiring_config`

```python
@classmethod
def get_tools_requiring_config(cls) -> List[str]
```

Get list of tools that require additional configuration

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

