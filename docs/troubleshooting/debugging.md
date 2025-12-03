# Debugging Guide

Comprehensive guide for debugging SpoonOS applications, agents, and tools.

## Debug Configuration

### Environment Variables

```bash
# Enable debug mode
export DEBUG=true
export LOG_LEVEL=debug

# Enable specific debug categories
export DEBUG_AGENTS=true
export DEBUG_TOOLS=true
export DEBUG_LLM=true
export DEBUG_MCP=true

# Enable request/response logging
export LOG_REQUESTS=true
export LOG_RESPONSES=true
```

### Configuration File Debug Settings

```json
{
  "debug": {
    "enabled": true,
    "log_level": "debug",
    "categories": ["agents", "tools", "llm", "mcp"],
    "log_requests": true,
    "log_responses": true,
    "save_logs": true,
    "log_file": "spoon_debug.log"
  }
}
```

## Logging Setup

### Python Logging Configuration

```python
# debug_setup.py
import logging
import sys
from datetime import datetime

def setup_debug_logging():
    """Configure comprehensive debug logging"""
    
    # Create formatter
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(filename)s:%(lineno)d - %(message)s'
    )
    
    # Console handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(logging.DEBUG)
    console_handler.setFormatter(formatter)
    
    # File handler
    file_handler = logging.FileHandler(
        f'spoon_debug_{datetime.now().strftime("%Y%m%d_%H%M%S")}.log'
    )
    file_handler.setLevel(logging.DEBUG)
    file_handler.setFormatter(formatter)
    
    # Configure root logger
    root_logger = logging.getLogger()
    root_logger.setLevel(logging.DEBUG)
    root_logger.addHandler(console_handler)
    root_logger.addHandler(file_handler)
    
    # Configure SpoonOS loggers
    spoon_logger = logging.getLogger('spoon_ai')
    spoon_logger.setLevel(logging.DEBUG)
    
    toolkit_logger = logging.getLogger('spoon_toolkits')
    toolkit_logger.setLevel(logging.DEBUG)
    
    print("Debug logging configured")

if __name__ == "__main__":
    setup_debug_logging()
```

### Structured Logging

```python
# structured_logging.py
import structlog
import json
from datetime import datetime

def setup_structured_logging():
    """Configure structured logging with JSON output"""
    
    structlog.configure(
        processors=[
            structlog.stdlib.filter_by_level,
            structlog.stdlib.add_logger_name,
            structlog.stdlib.add_log_level,
            structlog.stdlib.PositionalArgumentsFormatter(),
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.format_exc_info,
            structlog.processors.UnicodeDecoder(),
            structlog.processors.JSONRenderer()
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )
    
    return structlog.get_logger()

# Usage example
logger = setup_structured_logging()
logger.info("Agent started", agent_name="debug_agent", tools_count=5)
logger.error("Tool execution failed", tool_name="crypto_tool", error="API timeout")
```

## Agent Debugging

### Agent State Inspection

```python
# agent_debugger.py
from spoon_ai.agents import SpoonReactAI
from spoon_ai.tools import ToolManager
import json

class DebuggableAgent(SpoonReactAI):
    """Agent with enhanced debugging capabilities"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.debug_info = {
            "steps": [],
            "tool_calls": [],
            "llm_requests": [],
            "errors": []
        }
    
    async def run(self, message: str, **kwargs):
        """Run with debug tracking"""
        self.debug_info["steps"].append({
            "timestamp": datetime.now().isoformat(),
            "action": "run_started",
            "message": message,
            "kwargs": kwargs
        })
        
        try:
            result = await super().run(message, **kwargs)
            
            self.debug_info["steps"].append({
                "timestamp": datetime.now().isoformat(),
                "action": "run_completed",
                "result_length": len(str(result))
            })
            
            return result
            
        except Exception as e:
            self.debug_info["errors"].append({
                "timestamp": datetime.now().isoformat(),
                "error_type": type(e).__name__,
                "error_message": str(e),
                "traceback": traceback.format_exc()
            })
            raise
    
    def get_debug_info(self) -> dict:
        """Get comprehensive debug information"""
        return {
            "agent_name": self.name,
            "system_prompt": self.system_prompt,
            "config": self.config,
            "available_tools": [tool.name for tool in self.tools],
            "debug_info": self.debug_info
        }
    
    def save_debug_info(self, filename: str = None):
        """Save debug information to file"""
        if not filename:
            filename = f"debug_{self.name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        with open(filename, 'w') as f:
            json.dump(self.get_debug_info(), f, indent=2)
        
        print(f"Debug info saved to {filename}")

# Usage
async def debug_agent_example():
    agent = DebuggableAgent(
        name="debug_agent",
        system_prompt="You are a debugging assistant."
    )
    
    try:
        response = await agent.run("Hello, debug me!")
        print(f"Response: {response}")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        agent.save_debug_info()
        print(json.dumps(agent.get_debug_info(), indent=2))
```

### Step-by-Step Execution Tracing

```python
# execution_tracer.py
from spoon_ai.agents.base import BaseAgent
from functools import wraps
import inspect

def trace_execution(func):
    """Decorator to trace function execution"""
    @wraps(func)
    async def wrapper(self, *args, **kwargs):
        func_name = func.__name__
        
        # Log function entry
        logger.debug(
            "Function entry",
            function=func_name,
            args=args,
            kwargs=kwargs,
            agent=getattr(self, 'name', 'unknown')
        )
        
        try:
            # Execute function
            result = await func(self, *args, **kwargs)
            
            # Log successful completion
            logger.debug(
                "Function success",
                function=func_name,
                result_type=type(result).__name__,
                agent=getattr(self, 'name', 'unknown')
            )
            
            return result
            
        except Exception as e:
            # Log error
            logger.error(
                "Function error",
                function=func_name,
                error_type=type(e).__name__,
                error_message=str(e),
                agent=getattr(self, 'name', 'unknown')
            )
            raise
    
    return wrapper

class TracedAgent(BaseAgent):
    """Agent with method tracing"""
    
    @trace_execution
    async def run(self, message: str, **kwargs):
        return await super().run(message, **kwargs)
    
    @trace_execution
    async def chat(self, messages, **kwargs):
        return await super().chat(messages, **kwargs)
```

## Tool Debugging

### Tool Execution Monitoring

```python
# tool_debugger.py
from spoon_ai.tools.base import BaseTool
from spoon_ai.tools.errors import ToolError
import time
import traceback

class DebuggableTool(BaseTool):
    """Base tool with debugging capabilities"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.execution_history = []
        self.performance_stats = {
            "total_calls": 0,
            "successful_calls": 0,
            "failed_calls": 0,
            "average_duration": 0,
            "total_duration": 0
        }
    
    async def execute(self, **kwargs):
        """Execute with comprehensive debugging"""
        start_time = time.time()
        execution_id = f"{self.name}_{int(start_time)}"
        
        # Log execution start
        logger.debug(
            "Tool execution started",
            tool=self.name,
            execution_id=execution_id,
            parameters=kwargs
        )
        
        try:
            # Validate parameters
            validated_params = self.validate_parameters(**kwargs)
            
            # Execute tool
            result = await self._execute_impl(**validated_params)
            
            # Calculate duration
            duration = time.time() - start_time
            
            # Update stats
            self._update_success_stats(duration)
            
            # Log execution success
            logger.debug(
                "Tool execution completed",
                tool=self.name,
                execution_id=execution_id,
                duration=duration,
                result_type=type(result).__name__
            )
            
            # Store execution history
            self.execution_history.append({
                "execution_id": execution_id,
                "timestamp": start_time,
                "duration": duration,
                "parameters": validated_params,
                "success": True,
                "result_type": type(result).__name__
            })
            
            return result
            
        except Exception as e:
            duration = time.time() - start_time
            
            # Update stats
            self._update_error_stats(duration)
            
            # Log execution error
            logger.error(
                "Tool execution failed",
                tool=self.name,
                execution_id=execution_id,
                duration=duration,
                error_type=type(e).__name__,
                error_message=str(e),
                traceback=traceback.format_exc()
            )
            
            # Store execution history
            self.execution_history.append({
                "execution_id": execution_id,
                "timestamp": start_time,
                "duration": duration,
                "parameters": kwargs,
                "success": False,
                "error_type": type(e).__name__,
                "error_message": str(e)
            })
            
            raise
    
    async def _execute_impl(self, **kwargs):
        """Override this method in subclasses"""
        raise NotImplementedError
    
    def _update_success_stats(self, duration: float):
        """Update performance statistics for successful execution"""
        self.performance_stats["total_calls"] += 1
        self.performance_stats["successful_calls"] += 1
        self.performance_stats["total_duration"] += duration
        self.performance_stats["average_duration"] = (
            self.performance_stats["total_duration"] / 
            self.performance_stats["total_calls"]
        )
    
    def _update_error_stats(self, duration: float):
        """Update performance statistics for failed execution"""
        self.performance_stats["total_calls"] += 1
        self.performance_stats["failed_calls"] += 1
        self.performance_stats["total_duration"] += duration
        self.performance_stats["average_duration"] = (
            self.performance_stats["total_duration"] / 
            self.performance_stats["total_calls"]
        )
    
    def get_debug_info(self) -> dict:
        """Get comprehensive debug information"""
        return {
            "tool_name": self.name,
            "description": self.description,
            "performance_stats": self.performance_stats,
            "recent_executions": self.execution_history[-10:],  # Last 10 executions
            "total_executions": len(self.execution_history)
        }
```

### Parameter Validation Debugging

```python
# parameter_debugger.py
from spoon_ai.tools.base import BaseTool
from spoon_ai.tools.errors import ValidationError
import jsonschema

class ValidatedTool(DebuggableTool):
    """Tool with enhanced parameter validation and debugging"""
    
    # Define parameter schema
    parameter_schema = {
        "type": "object",
        "properties": {},
        "required": []
    }
    
    def validate_parameters(self, **kwargs) -> dict:
        """Validate parameters with detailed error reporting"""
        logger.debug(
            "Parameter validation started",
            tool=self.name,
            raw_parameters=kwargs,
            schema=self.parameter_schema
        )
        
        try:
            # Validate against schema
            jsonschema.validate(kwargs, self.parameter_schema)
            
            # Custom validation
            validated = self._custom_validation(**kwargs)
            
            logger.debug(
                "Parameter validation successful",
                tool=self.name,
                validated_parameters=validated
            )
            
            return validated
            
        except jsonschema.ValidationError as e:
            logger.error(
                "Schema validation failed",
                tool=self.name,
                validation_error=str(e),
                error_path=list(e.path),
                invalid_value=e.instance
            )
            raise ValidationError(f"Parameter validation failed: {e.message}")
        
        except Exception as e:
            logger.error(
                "Custom validation failed",
                tool=self.name,
                validation_error=str(e)
            )
            raise ValidationError(f"Parameter validation failed: {str(e)}")
    
    def _custom_validation(self, **kwargs) -> dict:
        """Override for custom validation logic"""
        return kwargs
```

## LLM Debugging

### Request/Response Logging

```python
# llm_debugger.py
from spoon_ai.llm.base import BaseLLMProvider
import json
import time

class DebuggableLLMProvider(BaseLLMProvider):
    """LLM provider with request/response logging"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.request_history = []
    
    async def generate(self, messages, **kwargs):
        """Generate with request/response logging"""
        request_id = f"req_{int(time.time() * 1000)}"
        start_time = time.time()
        
        # Log request
        logger.debug(
            "LLM request started",
            provider=self.provider_name,
            request_id=request_id,
            model=kwargs.get('model', self.default_model),
            message_count=len(messages),
            parameters=kwargs
        )
        
        # Log messages (truncated for privacy)
        for i, msg in enumerate(messages):
            content_preview = msg.get('content', '')[:100] + '...' if len(msg.get('content', '')) > 100 else msg.get('content', '')
            logger.debug(
                "LLM message",
                request_id=request_id,
                message_index=i,
                role=msg.get('role'),
                content_preview=content_preview
            )
        
        try:
            # Make request
            response = await super().generate(messages, **kwargs)
            
            duration = time.time() - start_time
            
            # Log response
            logger.debug(
                "LLM request completed",
                provider=self.provider_name,
                request_id=request_id,
                duration=duration,
                response_length=len(str(response)),
                tokens_used=response.get('usage', {}).get('total_tokens', 0)
            )
            
            # Store request history
            self.request_history.append({
                "request_id": request_id,
                "timestamp": start_time,
                "duration": duration,
                "model": kwargs.get('model', self.default_model),
                "message_count": len(messages),
                "success": True,
                "tokens_used": response.get('usage', {}).get('total_tokens', 0)
            })
            
            return response
            
        except Exception as e:
            duration = time.time() - start_time
            
            logger.error(
                "LLM request failed",
                provider=self.provider_name,
                request_id=request_id,
                duration=duration,
                error_type=type(e).__name__,
                error_message=str(e)
            )
            
            # Store request history
            self.request_history.append({
                "request_id": request_id,
                "timestamp": start_time,
                "duration": duration,
                "model": kwargs.get('model', self.default_model),
                "message_count": len(messages),
                "success": False,
                "error_type": type(e).__name__,
                "error_message": str(e)
            })
            
            raise
```

### Token Usage Monitoring

```python
# token_monitor.py
from collections import defaultdict
import time

class TokenUsageMonitor:
    """Monitor and analyze token usage patterns"""
    
    def __init__(self):
        self.usage_stats = defaultdict(lambda: {
            "total_requests": 0,
            "total_tokens": 0,
            "prompt_tokens": 0,
            "completion_tokens": 0,
            "total_cost": 0.0,
            "average_tokens_per_request": 0,
            "requests_by_hour": defaultdict(int)
        })
    
    def record_usage(self, provider: str, model: str, usage: dict, cost: float = 0.0):
        """Record token usage for analysis"""
        key = f"{provider}:{model}"
        stats = self.usage_stats[key]
        
        # Update counters
        stats["total_requests"] += 1
        stats["total_tokens"] += usage.get("total_tokens", 0)
        stats["prompt_tokens"] += usage.get("prompt_tokens", 0)
        stats["completion_tokens"] += usage.get("completion_tokens", 0)
        stats["total_cost"] += cost
        
        # Update averages
        stats["average_tokens_per_request"] = (
            stats["total_tokens"] / stats["total_requests"]
        )
        
        # Track hourly usage
        hour = int(time.time() // 3600)
        stats["requests_by_hour"][hour] += 1
        
        logger.info(
            "Token usage recorded",
            provider=provider,
            model=model,
            tokens=usage.get("total_tokens", 0),
            cost=cost
        )
    
    def get_usage_report(self) -> dict:
        """Generate comprehensive usage report"""
        report = {
            "total_providers": len(self.usage_stats),
            "providers": {}
        }
        
        for key, stats in self.usage_stats.items():
            provider, model = key.split(":", 1)
            
            if provider not in report["providers"]:
                report["providers"][provider] = {
                    "models": {},
                    "total_requests": 0,
                    "total_tokens": 0,
                    "total_cost": 0.0
                }
            
            # Add model stats
            report["providers"][provider]["models"][model] = stats
            
            # Aggregate provider stats
            report["providers"][provider]["total_requests"] += stats["total_requests"]
            report["providers"][provider]["total_tokens"] += stats["total_tokens"]
            report["providers"][provider]["total_cost"] += stats["total_cost"]
        
        return report
    
    def print_usage_summary(self):
        """Print formatted usage summary"""
        report = self.get_usage_report()
        
        print("\
=== Token Usage Summary ===")
        print(f"Total Providers: {report['total_providers']}")
        
        for provider, provider_stats in report["providers"].items():
            print(f"\
{provider.upper()}:")
            print(f"  Total Requests: {provider_stats['total_requests']:,}")
            print(f"  Total Tokens: {provider_stats['total_tokens']:,}")
            print(f"  Total Cost: ${provider_stats['total_cost']:.4f}")
            
            for model, model_stats in provider_stats["models"].items():
                print(f"  {model}:")
                print(f"    Requests: {model_stats['total_requests']:,}")
                print(f"    Tokens: {model_stats['total_tokens']:,}")
                print(f"    Avg Tokens/Request: {model_stats['average_tokens_per_request']:.1f}")
                print(f"    Cost: ${model_stats['total_cost']:.4f}")
```

## MCP Debugging

### MCP Server Connection Debugging

```python
# mcp_debugger.py
from spoon_ai.tools.mcp_client import MCPClient
import asyncio
import aiohttp

class DebuggableMCPClient(MCPClient):
    """MCP client with enhanced debugging"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.connection_history = []
        self.tool_discovery_history = []
    
    async def connect(self):
        """Connect with connection debugging"""
        start_time = time.time()
        
        logger.debug(
            "MCP connection attempt",
            server_url=self.server_url,
            transport=self.transport
        )
        
        try:
            await super().connect()
            
            duration = time.time() - start_time
            
            logger.info(
                "MCP connection successful",
                server_url=self.server_url,
                duration=duration
            )
            
            self.connection_history.append({
                "timestamp": start_time,
                "duration": duration,
                "success": True
            })
            
        except Exception as e:
            duration = time.time() - start_time
            
            logger.error(
                "MCP connection failed",
                server_url=self.server_url,
                duration=duration,
                error_type=type(e).__name__,
                error_message=str(e)
            )
            
            self.connection_history.append({
                "timestamp": start_time,
                "duration": duration,
                "success": False,
                "error_type": type(e).__name__,
                "error_message": str(e)
            })
            
            raise
    
    async def discover_tools(self):
        """Discover tools with debugging"""
        start_time = time.time()
        
        logger.debug("MCP tool discovery started", server_url=self.server_url)
        
        try:
            tools = await super().discover_tools()
            
            duration = time.time() - start_time
            
            logger.info(
                "MCP tool discovery completed",
                server_url=self.server_url,
                tools_found=len(tools),
                duration=duration,
                tool_names=[tool.name for tool in tools]
            )
            
            self.tool_discovery_history.append({
                "timestamp": start_time,
                "duration": duration,
                "success": True,
                "tools_found": len(tools),
                "tool_names": [tool.name for tool in tools]
            })
            
            return tools
            
        except Exception as e:
            duration = time.time() - start_time
            
            logger.error(
                "MCP tool discovery failed",
                server_url=self.server_url,
                duration=duration,
                error_type=type(e).__name__,
                error_message=str(e)
            )
            
            self.tool_discovery_history.append({
                "timestamp": start_time,
                "duration": duration,
                "success": False,
                "error_type": type(e).__name__,
                "error_message": str(e)
            })
            
            raise
```

## Performance Debugging

### Performance Profiler

```python
# performance_profiler.py
import cProfile
import pstats
import io
from functools import wraps
import time
import psutil
import os

class PerformanceProfiler:
    """Profile performance of SpoonOS components"""
    
    def __init__(self):
        self.profiles = {}
        self.memory_snapshots = []
    
    def profile_function(self, func_name: str = None):
        """Decorator to profile function performance"""
        def decorator(func):
            name = func_name or f"{func.__module__}.{func.__name__}"
            
            @wraps(func)
            async def wrapper(*args, **kwargs):
                # Memory snapshot before
                process = psutil.Process(os.getpid())
                memory_before = process.memory_info().rss
                
                # CPU profiling
                profiler = cProfile.Profile()
                profiler.enable()
                
                start_time = time.time()
                
                try:
                    result = await func(*args, **kwargs)
                    
                    # Stop profiling
                    end_time = time.time()
                    profiler.disable()
                    
                    # Memory snapshot after
                    memory_after = process.memory_info().rss
                    
                    # Store profile data
                    s = io.StringIO()
                    ps = pstats.Stats(profiler, stream=s)
                    ps.sort_stats('cumulative')
                    ps.print_stats()
                    
                    self.profiles[name] = {
                        "timestamp": start_time,
                        "duration": end_time - start_time,
                        "memory_before": memory_before,
                        "memory_after": memory_after,
                        "memory_delta": memory_after - memory_before,
                        "profile_stats": s.getvalue()
                    }
                    
                    logger.debug(
                        "Function profiled",
                        function=name,
                        duration=end_time - start_time,
                        memory_delta=memory_after - memory_before
                    )
                    
                    return result
                    
                except Exception as e:
                    profiler.disable()
                    raise
            
            return wrapper
        return decorator
    
    def take_memory_snapshot(self, label: str = None):
        """Take a memory usage snapshot"""
        process = psutil.Process(os.getpid())
        memory_info = process.memory_info()
        
        snapshot = {
            "timestamp": time.time(),
            "label": label or f"snapshot_{len(self.memory_snapshots)}",
            "rss": memory_info.rss,
            "vms": memory_info.vms,
            "percent": process.memory_percent(),
            "cpu_percent": process.cpu_percent()
        }
        
        self.memory_snapshots.append(snapshot)
        
        logger.debug(
            "Memory snapshot taken",
            label=snapshot["label"],
            rss_mb=snapshot["rss"] / 1024 / 1024,
            cpu_percent=snapshot["cpu_percent"]
        )
        
        return snapshot
    
    def generate_performance_report(self) -> str:
        """Generate comprehensive performance report"""
        report = ["\
=== Performance Report ==="]
        
        # Function profiles
        if self.profiles:
            report.append("\
Function Profiles:")
            for func_name, profile in self.profiles.items():
                report.append(f"\
{func_name}:")
                report.append(f"  Duration: {profile['duration']:.4f}s")
                report.append(f"  Memory Delta: {profile['memory_delta'] / 1024 / 1024:.2f} MB")
        
        # Memory snapshots
        if self.memory_snapshots:
            report.append("\
Memory Snapshots:")
            for snapshot in self.memory_snapshots:
                report.append(
                    f"  {snapshot['label']}: {snapshot['rss'] / 1024 / 1024:.2f} MB "
                    f"({snapshot['percent']:.1f}%) CPU: {snapshot['cpu_percent']:.1f}%"
                )
        
        return "\
".join(report)
```

## Debug CLI Commands

### Enhanced CLI with Debug Commands

```python
# debug_cli.py
from spoon_ai.cli.base import BaseCLI
import json

class DebugCLI(BaseCLI):
    """CLI with enhanced debugging commands"""
    
    def __init__(self):
        super().__init__()
        self.debug_mode = False
        self.profiler = PerformanceProfiler()
    
    def do_debug_on(self, args):
        """Enable debug mode"""
        self.debug_mode = True
        setup_debug_logging()
        print("Debug mode enabled")
    
    def do_debug_off(self, args):
        """Disable debug mode"""
        self.debug_mode = False
        print("Debug mode disabled")
    
    def do_debug_agent(self, args):
        """Show agent debug information"""
        if hasattr(self.current_agent, 'get_debug_info'):
            debug_info = self.current_agent.get_debug_info()
            print(json.dumps(debug_info, indent=2))
        else:
            print("Current agent does not support debugging")
    
    def do_debug_tools(self, args):
        """Show tool debug information"""
        if hasattr(self.current_agent, 'tools'):
            for tool in self.current_agent.tools:
                if hasattr(tool, 'get_debug_info'):
                    debug_info = tool.get_debug_info()
                    print(f"\
{tool.name}:")
                    print(json.dumps(debug_info, indent=2))
        else:
            print("No tools available for debugging")
    
    def do_debug_memory(self, args):
        """Take memory snapshot"""
        snapshot = self.profiler.take_memory_snapshot(args or "manual")
        print(f"Memory snapshot: {snapshot['rss'] / 1024 / 1024:.2f} MB")
    
    def do_debug_performance(self, args):
        """Show performance report"""
        report = self.profiler.generate_performance_report()
        print(report)
    
    def do_debug_save(self, args):
        """Save debug information to file"""
        filename = args or f"debug_session_{int(time.time())}.json"
        
        debug_data = {
            "timestamp": time.time(),
            "agent_info": self.current_agent.get_debug_info() if hasattr(self.current_agent, 'get_debug_info') else None,
            "tool_info": [tool.get_debug_info() for tool in getattr(self.current_agent, 'tools', []) if hasattr(tool, 'get_debug_info')],
            "memory_snapshots": self.profiler.memory_snapshots,
            "performance_profiles": self.profiler.profiles
        }
        
        with open(filename, 'w') as f:
            json.dump(debug_data, f, indent=2)
        
        print(f"Debug information saved to {filename}")
```

## Best Practices

### Debug-Friendly Code
- Add comprehensive logging at key points
- Use structured logging with context
- Implement debug modes in components
- Provide introspection methods
- Store execution history for analysis

### Performance Monitoring
- Profile critical code paths
- Monitor memory usage patterns
- Track API call performance
- Measure end-to-end latency
- Set up alerts for performance degradation

### Error Investigation
- Capture full stack traces
- Log relevant context information
- Implement error categorization
- Store error patterns for analysis
- Provide clear error messages

### Production Debugging
- Use log levels appropriately
- Implement feature flags for debug features
- Provide remote debugging capabilities
- Monitor system health metrics
- Set up automated error reporting

## See Also

- [Common Issues](./common-issues.md)
- [Performance Optimization](./performance.md)
- [Logging Configuration](../getting-started/configuration.md)
- [System Monitoring](../api-reference/index)"}
