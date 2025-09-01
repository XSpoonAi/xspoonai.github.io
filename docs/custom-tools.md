---
sidebar_position: 14
---

# Custom Tools

Learn how to create powerful custom tools for your SpoonOS agents. This guide covers tool development, integration patterns, and best practices.

## Tool Architecture

### Basic Tool Structure

All SpoonOS tools inherit from the `BaseTool` class:

```python
from spoon_ai.tools.base import BaseTool
from typing import Dict, Any

class MyCustomTool(BaseTool):
    name: str = "my_custom_tool"
    description: str = "A custom tool that does something specific"
    
    # Define tool parameters using JSON Schema
    parameters: Dict[str, Any] = {
        "type": "object",
        "properties": {
            "input_text": {
                "type": "string",
                "description": "Text to process"
            },
            "options": {
                "type": "object",
                "properties": {
                    "format": {"type": "string", "enum": ["json", "text"]},
                    "verbose": {"type": "boolean", "default": False}
                }
            }
        },
        "required": ["input_text"]
    }
    
    async def execute(self, input_text: str, options: Dict = None) -> str:
        """Execute the tool with given parameters"""
        if options is None:
            options = {}
        
        # Your tool logic here
        result = self.process_text(input_text, options)
        
        return result
    
    def process_text(self, text: str, options: Dict) -> str:
        """Helper method for processing"""
        # Implement your processing logic
        return f"Processed: {text}"
```

### Advanced Tool Features

```python
from spoon_ai.tools.base import BaseTool
import asyncio
import aiohttp
from typing import Optional

class AdvancedAPITool(BaseTool):
    name: str = "advanced_api_tool"
    description: str = "Advanced tool with API integration and caching"
    
    def __init__(self, api_key: str, base_url: str = None, **kwargs):
        super().__init__(**kwargs)
        self.api_key = api_key
        self.base_url = base_url or "https://api.example.com"
        self.cache = {}
        self.session: Optional[aiohttp.ClientSession] = None
    
    async def __aenter__(self):
        """Async context manager entry"""
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        """Async context manager exit"""
        if self.session:
            await self.session.close()
    
    async def execute(self, query: str, use_cache: bool = True) -> str:
        """Execute with caching and error handling"""
        # Check cache first
        if use_cache and query in self.cache:
            return self.cache[query]
        
        try:
            result = await self._make_api_call(query)
            
            # Cache successful results
            if use_cache:
                self.cache[query] = result
            
            return result
            
        except Exception as e:
            return f"Error: {str(e)}"
    
    async def _make_api_call(self, query: str) -> str:
        """Make API call with proper error handling"""
        if not self.session:
            self.session = aiohttp.ClientSession()
        
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        
        async with self.session.post(
            f"{self.base_url}/query",
            json={"query": query},
            headers=headers,
            timeout=aiohttp.ClientTimeout(total=30)
        ) as response:
            if response.status == 200:
                data = await response.json()
                return data.get("result", "No result")
            else:
                response.raise_for_status()
```

## Tool Categories

### 1. Data Processing Tools

```python
import pandas as pd
import json

class DataAnalysisTool(BaseTool):
    name: str = "data_analysis"
    description: str = "Analyze CSV data and generate insights"
    
    parameters = {
        "type": "object",
        "properties": {
            "file_path": {"type": "string", "description": "Path to CSV file"},
            "analysis_type": {
                "type": "string",
                "enum": ["summary", "correlation", "trends"],
                "description": "Type of analysis to perform"
            }
        },
        "required": ["file_path", "analysis_type"]
    }
    
    async def execute(self, file_path: str, analysis_type: str) -> str:
        try:
            # Load data
            df = pd.read_csv(file_path)
            
            if analysis_type == "summary":
                return self._generate_summary(df)
            elif analysis_type == "correlation":
                return self._analyze_correlation(df)
            elif analysis_type == "trends":
                return self._analyze_trends(df)
            
        except Exception as e:
            return f"Analysis failed: {str(e)}"
    
    def _generate_summary(self, df: pd.DataFrame) -> str:
        """Generate data summary"""
        summary = {
            "rows": len(df),
            "columns": len(df.columns),
            "numeric_columns": len(df.select_dtypes(include=['number']).columns),
            "missing_values": df.isnull().sum().sum(),
            "memory_usage": f"{df.memory_usage(deep=True).sum() / 1024:.2f} KB"
        }
        return json.dumps(summary, indent=2)
```

### 2. External API Tools

```python
import aiohttp
from datetime import datetime

class WeatherTool(BaseTool):
    name: str = "weather_lookup"
    description: str = "Get current weather information for any location"
    
    parameters = {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City name or coordinates (lat,lon)"
            },
            "units": {
                "type": "string",
                "enum": ["metric", "imperial", "kelvin"],
                "default": "metric"
            }
        },
        "required": ["location"]
    }
    
    def __init__(self, api_key: str, **kwargs):
        super().__init__(**kwargs)
        self.api_key = api_key
        self.base_url = "https://api.openweathermap.org/data/2.5"
    
    async def execute(self, location: str, units: str = "metric") -> str:
        """Get weather data from OpenWeatherMap API"""
        try:
            async with aiohttp.ClientSession() as session:
                url = f"{self.base_url}/weather"
                params = {
                    "q": location,
                    "appid": self.api_key,
                    "units": units
                }
                
                async with session.get(url, params=params) as response:
                    if response.status == 200:
                        data = await response.json()
                        return self._format_weather_data(data, units)
                    else:
                        return f"Weather API error: {response.status}"
                        
        except Exception as e:
            return f"Failed to get weather data: {str(e)}"
    
    def _format_weather_data(self, data: dict, units: str) -> str:
        """Format weather data for display"""
        temp_unit = "°C" if units == "metric" else "°F" if units == "imperial" else "K"
        
        weather_info = {
            "location": f"{data['name']}, {data['sys']['country']}",
            "temperature": f"{data['main']['temp']}{temp_unit}",
            "feels_like": f"{data['main']['feels_like']}{temp_unit}",
            "description": data['weather'][0]['description'].title(),
            "humidity": f"{data['main']['humidity']}%",
            "pressure": f"{data['main']['pressure']} hPa",
            "wind_speed": f"{data['wind']['speed']} m/s",
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
        
        return json.dumps(weather_info, indent=2)
```

### 3. File System Tools

```python
import os
import shutil
from pathlib import Path

class FileManagerTool(BaseTool):
    name: str = "file_manager"
    description: str = "Manage files and directories"
    
    parameters = {
        "type": "object",
        "properties": {
            "action": {
                "type": "string",
                "enum": ["list", "read", "write", "copy", "move", "delete"],
                "description": "Action to perform"
            },
            "path": {
                "type": "string",
                "description": "File or directory path"
            },
            "content": {
                "type": "string",
                "description": "Content for write operations"
            },
            "destination": {
                "type": "string",
                "description": "Destination path for copy/move operations"
            }
        },
        "required": ["action", "path"]
    }
    
    def __init__(self, allowed_paths: list = None, **kwargs):
        super().__init__(**kwargs)
        self.allowed_paths = allowed_paths or [os.getcwd()]
    
    async def execute(self, action: str, path: str, content: str = None, destination: str = None) -> str:
        """Execute file operation"""
        # Security check
        if not self._is_path_allowed(path):
            return f"Access denied: Path {path} is not allowed"
        
        try:
            if action == "list":
                return self._list_directory(path)
            elif action == "read":
                return self._read_file(path)
            elif action == "write":
                return self._write_file(path, content)
            elif action == "copy":
                return self._copy_file(path, destination)
            elif action == "move":
                return self._move_file(path, destination)
            elif action == "delete":
                return self._delete_file(path)
            else:
                return f"Unknown action: {action}"
                
        except Exception as e:
            return f"File operation failed: {str(e)}"
    
    def _is_path_allowed(self, path: str) -> bool:
        """Check if path is within allowed directories"""
        abs_path = os.path.abspath(path)
        return any(abs_path.startswith(allowed) for allowed in self.allowed_paths)
    
    def _list_directory(self, path: str) -> str:
        """List directory contents"""
        if os.path.isdir(path):
            items = os.listdir(path)
            return "\n".join(sorted(items))
        else:
            return f"Not a directory: {path}"
    
    def _read_file(self, path: str) -> str:
        """Read file contents"""
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    
    def _write_file(self, path: str, content: str) -> str:
        """Write content to file"""
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return f"Successfully wrote to {path}"
```

## Tool Integration Patterns

### 1. Tool Composition

```python
class CompositeAnalysisTool(BaseTool):
    name: str = "composite_analysis"
    description: str = "Perform multi-step analysis using multiple tools"
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.data_tool = DataAnalysisTool()
        self.weather_tool = WeatherTool(api_key="your-key")
        self.file_tool = FileManagerTool()
    
    async def execute(self, data_path: str, location: str) -> str:
        """Perform composite analysis"""
        results = {}
        
        # Step 1: Analyze data
        data_result = await self.data_tool.execute(data_path, "summary")
        results["data_analysis"] = data_result
        
        # Step 2: Get weather context
        weather_result = await self.weather_tool.execute(location)
        results["weather_context"] = weather_result
        
        # Step 3: Generate report
        report = self._generate_report(results)
        
        # Step 4: Save report
        report_path = f"analysis_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        await self.file_tool.execute("write", report_path, report)
        
        return f"Analysis complete. Report saved to {report_path}"
    
    def _generate_report(self, results: dict) -> str:
        """Generate analysis report"""
        return f"""
# Analysis Report
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## Data Analysis
{results['data_analysis']}

## Weather Context
{results['weather_context']}

## Summary
Analysis completed successfully with weather context.
        """.strip()
```

### 2. Tool Factory Pattern

```python
class ToolFactory:
    """Factory for creating tools with common configuration"""
    
    @staticmethod
    def create_api_tool(tool_type: str, api_key: str, **kwargs) -> BaseTool:
        """Create API tools with common configuration"""
        if tool_type == "weather":
            return WeatherTool(api_key=api_key, **kwargs)
        elif tool_type == "news":
            return NewsTool(api_key=api_key, **kwargs)
        else:
            raise ValueError(f"Unknown tool type: {tool_type}")
    
    @staticmethod
    def create_data_tool(tool_type: str, **kwargs) -> BaseTool:
        """Create data processing tools"""
        if tool_type == "analysis":
            return DataAnalysisTool(**kwargs)
        elif tool_type == "file_manager":
            return FileManagerTool(**kwargs)
        else:
            raise ValueError(f"Unknown data tool type: {tool_type}")

# Usage
weather_tool = ToolFactory.create_api_tool("weather", api_key="your-key")
data_tool = ToolFactory.create_data_tool("analysis")
```

## Testing Custom Tools

### Unit Testing

```python
import pytest
from unittest.mock import AsyncMock, patch

@pytest.mark.asyncio
async def test_weather_tool():
    """Test weather tool with mocked API"""
    tool = WeatherTool(api_key="test-key")
    
    # Mock the API response
    mock_response = {
        "name": "London",
        "sys": {"country": "GB"},
        "main": {"temp": 20, "feels_like": 18, "humidity": 65, "pressure": 1013},
        "weather": [{"description": "clear sky"}],
        "wind": {"speed": 3.5}
    }
    
    with patch('aiohttp.ClientSession.get') as mock_get:
        mock_get.return_value.__aenter__.return_value.status = 200
        mock_get.return_value.__aenter__.return_value.json = AsyncMock(return_value=mock_response)
        
        result = await tool.execute("London")
        
        assert "London, GB" in result
        assert "20" in result
        assert "clear sky" in result.lower()

@pytest.mark.asyncio
async def test_file_manager_tool():
    """Test file manager tool"""
    import tempfile
    import os
    
    with tempfile.TemporaryDirectory() as temp_dir:
        tool = FileManagerTool(allowed_paths=[temp_dir])
        
        # Test write
        test_file = os.path.join(temp_dir, "test.txt")
        result = await tool.execute("write", test_file, "Hello, World!")
        assert "Successfully wrote" in result
        
        # Test read
        result = await tool.execute("read", test_file)
        assert result == "Hello, World!"
        
        # Test list
        result = await tool.execute("list", temp_dir)
        assert "test.txt" in result
```

### Integration Testing

```python
@pytest.mark.asyncio
async def test_tool_with_agent():
    """Test tool integration with agent"""
    from spoon_ai.agents import SpoonReactAI
    from spoon_ai.chat import ChatBot
    from spoon_ai.tools import ToolManager
    
    # Create agent with custom tool
    weather_tool = WeatherTool(api_key=os.getenv("WEATHER_API_KEY"))
    tool_manager = ToolManager([weather_tool])
    
    agent = SpoonReactAI(
        llm=ChatBot(),
        available_tools=tool_manager
    )
    
    # Test agent using the tool
    result = await agent.run("What's the weather in New York?")
    assert len(result) > 0
    # Additional assertions based on expected behavior
```

## Best Practices

### 1. Error Handling

```python
class RobustTool(BaseTool):
    async def execute(self, **kwargs) -> str:
        try:
            # Validate inputs
            self._validate_inputs(kwargs)
            
            # Execute main logic
            result = await self._execute_main_logic(kwargs)
            
            # Validate outputs
            self._validate_outputs(result)
            
            return result
            
        except ValidationError as e:
            return f"Input validation failed: {e}"
        except APIError as e:
            return f"API error: {e}"
        except Exception as e:
            self.logger.error(f"Unexpected error in {self.name}: {e}")
            return f"Tool execution failed: {e}"
```

### 2. Configuration Management

```python
from dataclasses import dataclass
from typing import Optional

@dataclass
class ToolConfig:
    api_key: str
    base_url: str = "https://api.example.com"
    timeout: int = 30
    max_retries: int = 3
    cache_enabled: bool = True

class ConfigurableTool(BaseTool):
    def __init__(self, config: ToolConfig, **kwargs):
        super().__init__(**kwargs)
        self.config = config
        self._validate_config()
    
    def _validate_config(self):
        """Validate tool configuration"""
        if not self.config.api_key:
            raise ValueError("API key is required")
        if self.config.timeout <= 0:
            raise ValueError("Timeout must be positive")
```

### 3. Performance Optimization

```python
import asyncio
from functools import lru_cache

class OptimizedTool(BaseTool):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self._cache = {}
        self._semaphore = asyncio.Semaphore(10)  # Limit concurrent requests
    
    async def execute(self, query: str, use_cache: bool = True) -> str:
        # Check cache
        if use_cache and query in self._cache:
            return self._cache[query]
        
        # Limit concurrent requests
        async with self._semaphore:
            result = await self._execute_with_retry(query)
            
            # Cache result
            if use_cache:
                self._cache[query] = result
            
            return result
    
    async def _execute_with_retry(self, query: str, max_retries: int = 3) -> str:
        """Execute with exponential backoff retry"""
        for attempt in range(max_retries):
            try:
                return await self._make_request(query)
            except Exception as e:
                if attempt == max_retries - 1:
                    raise
                await asyncio.sleep(2 ** attempt)  # Exponential backoff
```

## Next Steps

- **[MCP Protocol](./mcp-protocol)** - Learn about dynamic tool loading
- **[Built-in Tools](./builtin-tools)** - Explore existing tools
- **[Examples](./examples/custom-tools)** - See custom tools in action
- **[Building Agents](./building-agents)** - Integrate tools with agents
