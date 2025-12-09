# Advanced CLI Features

This guide covers advanced  features including MCP integration, custom agents, scripting, and automation capabilities.

## Model Context Protocol (MCP) Integration

### MCP Overview

MCP allows  to integrate with external tools and services through standardized protocols.

### Configuring MCP Servers

Add MCP server configurations to your `config.json`:

```json
{
  "mcp_servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Documents"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    },
    "slack": {
      "command": "uvx",
      "args": ["mcp-server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-bot-token"
      }
    }
  }
}
```

### MCP Agent Configuration

Create agents with MCP support:

```json
{
  "agents": {
    "mcp_agent": {
      "class_name": "SpoonReactMCP",
      "description": "Agent with full MCP integration",
      "mcp_servers": ["filesystem", "github", "slack"],
      "config": {
        "llm_provider": "anthropic",
        "model_name": "claude-3-sonnet-20240229"
      }
    }
  }
}
```

### Testing MCP Connections

```bash
# Start spoon-cli and run:
# Validate MCP server configurations
validate-config --check-servers

# Load MCP-enabled agent
load-agent mcp_agent

# List available MCP tools
action list_mcp_tools
```

## Custom Agent Development

### Agent Configuration Structure

```json
{
  "agents": {
    "custom_agent": {
      "class_name": "SpoonReactAI",
      "description": "Description of your custom agent",
      "aliases": ["ca", "custom"],
      "config": {
        "llm_provider": "anthropic",
        "model_name": "claude-3-sonnet-20240229",
        "temperature": 0.7,
        "max_tokens": 4000,
        "custom_parameter": "value"
      },
      "tools": [
        "web_search",
        "calculator",
        "custom_tool_1",
        "custom_tool_2"
      ],
      "system_prompt": "Custom system prompt for specialized behavior"
    }
  }
}
```

### Specialized Agent Types

#### Research Agent

```json
{
  "research_agent": {
    "class_name": "SpoonReactAI",
    "description": "Specialized research and analysis agent",
    "config": {
      "llm_provider": "openai",
      "model_name": "gpt-4-turbo-preview",
      "temperature": 0.3
    },
    "tools": [
      "web_search",
      "academic_search",
      "data_analysis",
      "citation_manager"
    ]
  }
}
```

#### Trading Agent

```json
{
  "trading_agent": {
    "class_name": "SpoonReactAI",
    "description": "Cryptocurrency trading assistant",
    "config": {
      "llm_provider": "anthropic",
      "model_name": "claude-3-sonnet-20240229",
      "temperature": 0.2
    },
    "tools": [
      "crypto_price_lookup",
      "dex_swap",
      "wallet_balance",
      "market_data",
      "technical_indicators"
    ]
  }
}
```

#### Code Review Agent

```json
{
  "code_review_agent": {
    "class_name": "SpoonReactAI",
    "description": "Code review and development assistant",
    "config": {
      "llm_provider": "openai",
      "model_name": "gpt-4",
      "temperature": 0.1
    },
    "tools": [
      "file_operations",
      "git_operations",
      "code_analysis",
      "testing_tools"
    ]
  }
}
```

## Scripting and Automation

### Command Chaining

Execute multiple commands in sequence:

```bash
# Setup and start session (these would be run in spoon-cli interactive mode)
# load-agent research_agent
# load-toolkit-tools web_search academic
# action chat
```

### Batch Operations

Create scripts for automated workflows:

```bash
#!/bin/bash
# research_workflow.sh

# Note: This script would need to be run in spoon-cli interactive mode
# Start spoon-cli first, then run these commands:
# load-agent research_agent
# load-toolkit-tools web_search data_analysis
# load-docs ./research_papers/
# action chat

# For automation, you would need to:
echo "Starting automated research analysis..."
# spoon-cli action chat << EOF
Please analyze the loaded documents and provide a comprehensive summary of the key findings, methodologies, and conclusions.
EOF
```

### Environment-Specific Configurations

Use different configurations for different environments:

```json
{
  "profiles": {
    "development": {
      "default_agent": "debug_agent",
      "llm": {
        "timeout": 60,
        "retry_attempts": 5
      },
      "logging": {
        "level": "DEBUG"
      }
    },
    "production": {
      "default_agent": "production_agent",
      "llm": {
        "timeout": 30,
        "retry_attempts": 2
      },
      "logging": {
        "level": "WARNING"      }
    }
  }
}
```

Activate profiles:

```bash
export SPOON_CLI_PROFILE="production"
# Start spoon-cli and run:
system-info
```

## Advanced Tool Integration

### Custom Tool Development

#### Tool Factory Pattern

```json
{
  "tool_factories": {
    "custom_api_tool": {
      "factory": "my_package.tools.CustomAPIToolFactory",
      "config": {
        "api_endpoint": "https://api.example.com",
        "api_key": "${API_KEY}"
      }
    }
  }
}
```

#### Dynamic Tool Loading

```bash
# Start spoon-cli and run:
# Load tools from specific categories
load-toolkit-tools crypto blockchain

# Load all available tools (use with caution)
load-toolkit-tools all

# Load tools with specific configuration
load-toolkit-tools web_search --timeout 30 --max-results 20
```

### Tool Configuration

Advanced tool configuration in `config.json`:

```json
{
  "tool_configs": {
    "web_search": {
      "max_results": 10,
      "timeout": 30,
      "user_agent": "SpoonAI/1.0",
      "proxies": {
        "http": "http://proxy.company.com:8080",
        "https": "https://proxy.company.com:8080"
      }
    },
    "crypto_price_lookup": {
      "cache_timeout": 300,
      "preferred_exchanges": ["binance", "coinbase", "kraken"]
    }
  }
}
```

## Performance Optimization

### LLM Configuration Tuning

```json
{
  "llm": {
    "default_provider": "anthropic",
    "fallback_chain": ["anthropic", "openai", "deepseek"],
    "timeout": 30,
    "retry_attempts": 3,
    "rate_limiting": {
      "requests_per_minute": 60,
      "burst_limit": 10
    },
    "caching": {
      "enabled": true,
      "ttl": 3600,
      "max_size": "1GB"
    }
  }
}
```

### Memory Management

```json
{
  "memory": {
    "max_chat_history": 100,
    "compress_old_messages": true,
    "auto_save_interval": 300,
    "cleanup_temp_files": true
  }
}
```

### Parallel Processing

```json
{
  "parallel_processing": {
    "max_concurrent_requests": 5,
    "thread_pool_size": 10,
    "async_timeout": 60
  }
}
```

## Logging and Debugging

### Advanced Logging Configuration

```json
{
  "logging": {
    "level": "INFO",
    "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    "file": "spoon_cli.log",
    "max_file_size": "10MB",
    "backup_count": 5,
    "handlers": {
      "console": {
        "level": "WARNING",
        "format": "%(levelname)s: %(message)s"
      },
      "file": {
        "level": "DEBUG",
        "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
      }
    }
  }
}
```

### Debug Mode

Enable detailed debugging:

```bash
export SPOON_CLI_DEBUG=1

# Or use command-line flag when starting spoon-cli
# spoon-cli --debug

# Then run:
# system-info
```

### Performance Profiling

```bash
# Enable performance logging
export SPOON_CLI_PROFILE=1

# Start spoon-cli and run:
# action chat

# Check performance metrics
# system-info --performance
```

## Security Features

### API Key Management

```json
{
  "security": {
    "api_key_rotation": {
      "enabled": true,
      "interval_days": 30
    },
    "key_validation": {
      "enabled": true,
      "cache_timeout": 3600
    },
    "audit_logging": {
      "enabled": true,
      "log_sensitive_operations": false
    }
  }
}
```

### Network Security

```json
{
  "network": {
    "ssl_verification": true,
    "proxy": "http://proxy.company.com:8080",
    "timeout": 30,
    "retry_on_failure": true,
    "trusted_domains": [
      "*.openai.com",
      "*.anthropic.com",
      "*.googleapis.com"
    ]
  }
}
```

## Integration Features

### Webhook Support

Configure webhooks for external integrations:

```json
{
  "webhooks": {
    "telegram_bot": {
      "enabled": true,
      "token": "${TELEGRAM_BOT_TOKEN}",
      "allowed_users": ["user1", "user2"]
    },
    "slack_integration": {
      "enabled": false,
      "webhook_url": "${SLACK_WEBHOOK_URL}",
      "channel": "#ai-notifications"
    }
  }
}
```

### API Server Mode

Run as an API server:

```bash
# Start spoon-cli and run:
serve --host 0.0.0.0 --port 8000
```

### Database Integration

```json
{
  "database": {
    "type": "postgresql",
    "url": "${DATABASE_URL}",
    "connection_pool": {
      "min_size": 5,
      "max_size": 20
    }
  }
}
```

## Custom Extensions

### Plugin System

Load custom plugins:

```json
{
  "plugins": {
    "my_custom_plugin": {
      "path": "/path/to/my/plugin",
      "enabled": true,
      "config": {
        "custom_setting": "value"
      }
    }
  }
}
```

### Custom Commands

Extend CLI with custom commands:

```python
# custom_commands.py
from spoon_cli.commands import SpoonCommand

def my_custom_command(input_list):
    # Custom command implementation
    print("Custom command executed!")

# Register command
custom_command = SpoonCommand(
    name="my-command",
    description="My custom command",
    handler=my_custom_command
)
```

## Monitoring and Analytics

### Usage Analytics

```json
{
  "analytics": {
    "enabled": true,
    "metrics": {
      "commands_used": true,
      "response_times": true,
      "error_rates": true
    },
    "reporting": {
      "interval": "1h",
      "destination": "console"
    }
  }
}
```

### Health Monitoring

```bash
# Start spoon-cli and run:
# Continuous health monitoring
monitor --interval 60

# Export metrics
export-metrics --format json --output metrics.json
```

## Next Steps

- [Troubleshooting](./troubleshooting.md) - Solve advanced issues
- [Configuration Guide](./configuration.md) - Master configuration options
- [API Reference](../api-reference/index) - Complete command reference
