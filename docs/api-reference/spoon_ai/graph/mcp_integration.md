---
id: spoon_ai.graph.mcp_integration
slug: /api-reference/spoon_ai/graph/mcp_integration
title: spoon_ai.graph.mcp_integration
---

# Table of Contents

* [spoon\_ai.graph.mcp\_integration](#spoon_ai.graph.mcp_integration)
  * [MCPToolSpec](#spoon_ai.graph.mcp_integration.MCPToolSpec)
  * [MCPConfigManager](#spoon_ai.graph.mcp_integration.MCPConfigManager)
  * [MCPToolDiscoveryEngine](#spoon_ai.graph.mcp_integration.MCPToolDiscoveryEngine)
  * [MCPIntegrationManager](#spoon_ai.graph.mcp_integration.MCPIntegrationManager)

<a id="spoon_ai.graph.mcp_integration"></a>

# Module `spoon_ai.graph.mcp_integration`

Utility classes for intelligent MCP tool discovery and configuration.

Core graph components no longer hard-code external tools; instead, user code
registers tool specifications and optional transport/configuration details via
these helpers.

<a id="spoon_ai.graph.mcp_integration.MCPToolSpec"></a>

## `MCPToolSpec` Objects

```python
@dataclass
class MCPToolSpec()
```

Specification describing a desired MCP tool.

<a id="spoon_ai.graph.mcp_integration.MCPConfigManager"></a>

## `MCPConfigManager` Objects

```python
class MCPConfigManager()
```

Centralised configuration loader for MCP tools.

<a id="spoon_ai.graph.mcp_integration.MCPToolDiscoveryEngine"></a>

## `MCPToolDiscoveryEngine` Objects

```python
class MCPToolDiscoveryEngine()
```

Discover MCP tools based on registered intent mappings.

<a id="spoon_ai.graph.mcp_integration.MCPIntegrationManager"></a>

## `MCPIntegrationManager` Objects

```python
class MCPIntegrationManager()
```

High level coordinator for MCP tool usage within graphs.

