# Base Tool API Reference

The `BaseTool` class is the foundation for all tools in SpoonOS, providing a standardized interface for tool development and execution.

## Class Definition

```python
from spoon_ai.tools.base import BaseTool
from typing import Any, Dict, Optional

class BaseTool:
    name: str
    description: str
    
    def __init__(self, **kwargs):
        pass
    
    async def execute(self, **kwargs) -> Any:
        raise NotImplementedError
```

## Required Attributes

### `name: str`
Unique identifier for the tool. Must be a valid Python identifier.

### `description: str`
Human-readable description of what the tool does. Used by agents to understand tool capabilities.

## Methods

### Core Methods

#### `async execute(**kwargs) -> Any`

Execute the tool with provided parameters.

**Parameters:**
- `**kwargs`: Tool-specific parameters

**Returns:**
- `Any`: Tool execution result

**Raises:**
- `ToolError`: When tool execution fails
- `ValidationError`: When parameters are invalid

**Example:**
```python
class CalculatorTool(BaseTool):
    name = "calculator"
    description = "Perform basic arithmetic operations"
    
    async def execute(self, operation: str, a: float, b: float) -> float:
        if operation == "add":
            return a + b
        elif operation == "subtract":
            return a - b
        elif operation == "multiply":
            return a * b
        elif operation == "divide":
            if b == 0:
                raise ToolError("Division by zero")
            return a / b
        else:
            raise ValidationError(f"Unknown operation: {operation}")
```

### Validation Methods

#### `validate_parameters(self, **kwargs) -> Dict[str, Any]`

Validate and normalize input parameters.

**Parameters:**
- `**kwargs`: Raw input parameters

**Returns:**
- `Dict[str, Any]`: Validated and normalized parameters

**Example:**
```python
class WebSearchTool(BaseTool):
    name = "web_search"
    description = "Search the web for information"
    
    def validate_parameters(self, **kwargs) -> Dict[str, Any]:
        query = kwargs.get("query")
        if not query or not isinstance(query, str):
            raise ValidationError("Query must be a non-empty string")
        
        limit = kwargs.get("limit", 10)
        if not isinstance(limit, int) or limit < 1 or limit > 100:
            raise ValidationError("Limit must be an integer between 1 and 100")
        
        return {
            "query": query.strip(),
            "limit": limit
        }
    
    async def execute(self, **kwargs) -> Dict[str, Any]:
        params = self.validate_parameters(**kwargs)
        # Perform web search with validated parameters
        return await self._search(params["query"], params["limit"])
```

### Configuration Methods

#### `configure(self, config: Dict[str, Any]) -> None`

Configure the tool with runtime settings.

**Parameters:**
- `config`: Configuration dictionary

**Example:**
```python
class APITool(BaseTool):
    name = "api_tool"
    description = "Make API requests"
    
    def __init__(self):
        self.api_key = None
        self.base_url = None
        self.timeout = 30
    
    def configure(self, config: Dict[str, Any]) -> None:
        self.api_key = config.get("api_key")
        self.base_url = config.get("base_url")
        self.timeout = config.get("timeout", 30)
        
        if not self.api_key:
            raise ConfigurationError("API key is required")
```

## Tool Metadata

### Schema Definition

```python
class WeatherTool(BaseTool):
    name = "get_weather"
    description = "Get current weather for a location"
    
    # Define parameter schema
    schema = {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City name or coordinates"
            },
            "units": {
                "type": "string",
                "enum": ["celsius", "fahrenheit"],
                "default": "celsius",
                "description": "Temperature units"
            }
        },
        "required": ["location"]
    }
    
    async def execute(self, location: str, units: str = "celsius") -> Dict[str, Any]:
        # Implementation here
        pass
```

### Categories and Tags

```python
class CryptoTool(BaseTool):
    name = "get_crypto_price"
    description = "Get cryptocurrency price data"
    category = "crypto"
    tags = ["price", "market", "cryptocurrency"]
    version = "1.0.0"
    
    async def execute(self, symbol: str) -> Dict[str, Any]:
        # Implementation here
        pass
```

## Error Handling

### Exception Types

```python
from spoon_ai.tools.errors import (
    ToolError,
    ValidationError,
    ConfigurationError,
    ExecutionError
)

class RobustTool(BaseTool):
    name = "robust_tool"
    description = "Tool with comprehensive error handling"
    
    async def execute(self, **kwargs) -> Any:
        try:
            # Validate parameters
            params = self.validate_parameters(**kwargs)
            
            # Execute tool logic
            result = await self._perform_operation(params)
            
            return result
            
        except ValidationError:
            # Re-raise validation errors
            raise
        except ConfigurationError:
            # Re-raise configuration errors
            raise
        except Exception as e:
            # Wrap unexpected errors
            raise ExecutionError(f"Tool execution failed: {str(e)}") from e
    
    def validate_parameters(self, **kwargs) -> Dict[str, Any]:
        # Parameter validation logic
        pass
    
    async def _perform_operation(self, params: Dict[str, Any]) -> Any:
        # Core tool logic
        pass
```

## Async Patterns

### HTTP Requests

```python
import aiohttp
from typing import Dict, Any

class HTTPTool(BaseTool):
    name = "http_request"
    description = "Make HTTP requests"
    
    def __init__(self):
        self.session = None
    
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    async def execute(self, url: str, method: str = "GET", **kwargs) -> Dict[str, Any]:
        if not self.session:
            self.session = aiohttp.ClientSession()
        
        try:
            async with self.session.request(method, url, **kwargs) as response:
                return {
                    "status": response.status,
                    "data": await response.text(),
                    "headers": dict(response.headers)
                }
        except Exception as e:
            raise ExecutionError(f"HTTP request failed: {str(e)}")
```

### Database Operations

```python
import asyncpg
from typing import List, Dict, Any

class DatabaseTool(BaseTool):
    name = "database_query"
    description = "Execute database queries"
    
    def __init__(self, connection_string: str):
        self.connection_string = connection_string
        self.pool = None
    
    async def initialize(self):
        """Initialize database connection pool"""
        self.pool = await asyncpg.create_pool(self.connection_string)
    
    async def execute(self, query: str, params: List[Any] = None) -> List[Dict[str, Any]]:
        if not self.pool:
            await self.initialize()
        
        try:
            async with self.pool.acquire() as connection:
                rows = await connection.fetch(query, *(params or []))
                return [dict(row) for row in rows]
        except Exception as e:
            raise ExecutionError(f"Database query failed: {str(e)}")
    
    async def cleanup(self):
        """Clean up database connections"""
        if self.pool:
            await self.pool.close()
```

## Testing Tools

### Unit Testing

```python
import pytest
from unittest.mock import AsyncMock, patch
from my_tool import CalculatorTool

@pytest.fixture
def calculator_tool():
    return CalculatorTool()

@pytest.mark.asyncio
async def test_addition(calculator_tool):
    result = await calculator_tool.execute(operation="add", a=5, b=3)
    assert result == 8

@pytest.mark.asyncio
async def test_division_by_zero(calculator_tool):
    with pytest.raises(ToolError, match="Division by zero"):
        await calculator_tool.execute(operation="divide", a=5, b=0)

@pytest.mark.asyncio
async def test_invalid_operation(calculator_tool):
    with pytest.raises(ValidationError, match="Unknown operation"):
        await calculator_tool.execute(operation="invalid", a=5, b=3)
```

### Integration Testing

```python
import pytest
from spoon_ai.tools import ToolManager
from my_tool import WebSearchTool

@pytest.mark.asyncio
async def test_tool_integration():
    # Test tool registration
    tool_manager = ToolManager()
    web_tool = WebSearchTool()
    
    tool_manager.register_tool(web_tool)
    assert "web_search" in tool_manager.get_tool_names()
    
    # Test tool execution through manager
    result = await tool_manager.execute_tool(
        "web_search",
        query="SpoonOS documentation",
        limit=5
    )
    
    assert isinstance(result, dict)
    assert "results" in result
```

## Performance Optimization

### Caching

```python
from functools import lru_cache
import asyncio
from typing import Dict, Any

class CachedTool(BaseTool):
    name = "cached_tool"
    description = "Tool with caching support"
    
    def __init__(self):
        self._cache = {}
        self._cache_ttl = 300  # 5 minutes
    
    async def execute(self, **kwargs) -> Any:
        # Create cache key
        cache_key = self._create_cache_key(**kwargs)
        
        # Check cache
        cached_result = self._get_from_cache(cache_key)
        if cached_result is not None:
            return cached_result
        
        # Execute and cache result
        result = await self._perform_operation(**kwargs)
        self._set_cache(cache_key, result)
        
        return result
    
    def _create_cache_key(self, **kwargs) -> str:
        """Create cache key from parameters"""
        import hashlib
        import json
        
        key_data = json.dumps(kwargs, sort_keys=True)
        return hashlib.md5(key_data.encode()).hexdigest()
    
    def _get_from_cache(self, key: str) -> Any:
        """Get value from cache if not expired"""
        import time
        
        if key in self._cache:
            value, timestamp = self._cache[key]
            if time.time() - timestamp < self._cache_ttl:
                return value
            else:
                del self._cache[key]
        
        return None
    
    def _set_cache(self, key: str, value: Any) -> None:
        """Set value in cache with timestamp"""
        import time
        self._cache[key] = (value, time.time())
```

### Connection Pooling

```python
class PooledTool(BaseTool):
    name = "pooled_tool"
    description = "Tool with connection pooling"
    
    _connection_pool = None
    _pool_size = 10
    
    @classmethod
    async def get_connection_pool(cls):
        """Get or create connection pool"""
        if cls._connection_pool is None:
            cls._connection_pool = await create_connection_pool(
                size=cls._pool_size
            )
        return cls._connection_pool
    
    async def execute(self, **kwargs) -> Any:
        pool = await self.get_connection_pool()
        
        async with pool.acquire() as connection:
            # Use connection for tool operation
            result = await self._perform_operation(connection, **kwargs)
            return result
```

## Best Practices

### Tool Design
- Keep tools focused on a single responsibility
- Use descriptive names and clear descriptions
- Implement proper parameter validation
- Handle errors gracefully
- Document expected inputs and outputs

### Performance
- Use async/await for I/O operations
- Implement caching for expensive operations
- Use connection pooling for database/API tools
- Set appropriate timeouts
- Monitor resource usage

### Security
- Validate all input parameters
- Sanitize user inputs
- Use secure communication protocols
- Implement proper authentication
- Log security-relevant events

### Testing
- Write comprehensive unit tests
- Test error conditions
- Use mocking for external dependencies
- Perform integration testing
- Test with realistic data

## See Also

- [Built-in Tools Reference](./builtin-tools.md)
- [MCP Tools Reference](./mcp-tools.md)
- [Tool Development Guide](../../how-to-guides/add-custom-tools.md)
- [Agent Integration](../agents/base-agent.md)"}