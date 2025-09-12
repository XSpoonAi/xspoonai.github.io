# CLI Commands API Reference

Comprehensive reference for all SpoonOS CLI commands, options, and usage patterns.

## Command Categories

### Core Commands

#### `help`
**Aliases:** `h`, `?`
**Description:** Display help information
**Usage:** `help [command]`

**Examples:**
```bash
> help
> help load-agent
> h
> ?
```

#### `exit`
**Aliases:** `quit`, `q`
**Description:** Exit the CLI
**Usage:** `exit`

**Examples:**
```bash
> exit
> quit
> q
```

#### `system-info`
**Aliases:** `sysinfo`, `status`, `info`
**Description:** Display comprehensive system information, environment status, and health checks
**Usage:** `system-info`

**Output includes:**
- System details (platform, Python version, architecture)
- Environment variables status
- Configuration validation
- Agent status
- Health checks with scoring

**Examples:**
```bash
> system-info
> sysinfo
> status
> info
```

### Agent Management

#### `load-agent`
**Aliases:** `load`
**Description:** Load an agent with the specified name
**Usage:** `load-agent <agent_name>`

**Parameters:**
- `agent_name` (required): Name or alias of the agent to load

**Examples:**
```bash
> load-agent react
> load-agent spoon_react_mcp
> load spoon_react
```

#### `list-agents`
**Aliases:** `agents`
**Description:** List all available agents
**Usage:** `list-agents`

**Output format:**
```
Available agents:
- react (SpoonReactAI) - Standard blockchain analysis agent
- spoon_react_mcp (SpoonReactMCP) - MCP-enabled blockchain agent
```

**Examples:**
```bash
> list-agents
> agents
```

#### `action`
**Aliases:** `a`
**Description:** Perform a specific action using the current agent
**Usage:** `action <action_type> [parameters]`

**Action Types:**
- `chat [message]`: Start chat session or send message
- `react`: Start step-by-step reasoning session
- `new`: Start new chat (clear history)
- `list`: List available chat histories
- `load <chat_id>`: Load specific chat history

**Examples:**
```bash
> action chat "Hello, how are you?"
> action react
> action new
> action list
> action load chat_001
> a chat
```

### Configuration Management

#### `config`
**Aliases:** `cfg`, `settings`
**Description:** Configure settings such as API keys
**Usage:** `config [key] [value]`

**Parameters:**
- `key` (optional): Configuration key to view or modify
- `value` (optional): New value for the configuration key

**Special usage:**
- `config api_key <provider> <key>`: Set provider API key

**Examples:**
```bash
> config
> config api_key openai sk-your-openai-key
> config DEFAULT_AGENT react
> cfg
```

#### `reload-config`
**Aliases:** `reload`
**Description:** Reload the current agent's configuration
**Usage:** `reload-config`

**Examples:**
```bash
> reload-config
> reload
```

#### `migrate-config`
**Aliases:** `migrate`
**Description:** Migrate legacy configuration to new unified format
**Usage:** `migrate-config`

**Examples:**
```bash
> migrate-config
> migrate
```

#### `check-config`
**Aliases:** `check-migration`
**Description:** Check if configuration needs migration
**Usage:** `check-config`

**Examples:**
```bash
> check-config
> check-migration
```

#### `validate-config`
**Aliases:** `validate`
**Description:** Validate current configuration and check for issues
**Usage:** `validate-config`

**Examples:**
```bash
> validate-config
> validate
```

### Chat Management

#### `new-chat`
**Aliases:** `new`
**Description:** Start a new chat (clear history)
**Usage:** `new-chat`

**Examples:**
```bash
> new-chat
> new
```

#### `list-chats`
**Aliases:** `chats`
**Description:** List available chat history records
**Usage:** `list-chats`

**Examples:**
```bash
> list-chats
> chats
```

#### `load-chat`
**Description:** Load a specific chat history record
**Usage:** `load-chat <chat_id>`

**Parameters:**
- `chat_id` (required): ID of the chat history to load

**Examples:**
```bash
> load-chat chat_20250101_143022
```

### Cryptocurrency Operations

#### `transfer`
**Aliases:** `send`
**Description:** Transfer tokens to a specified address
**Usage:** `transfer <address> <amount> <token>`

**Parameters:**
- `address` (required): Destination wallet address
- `amount` (required): Amount to transfer
- `token` (required): Token symbol or address

**Examples:**
```bash
> transfer 0x123... 0.1 SPO
> send 0xabc... 100 USDC
```

#### `swap`
**Description:** Exchange tokens using an aggregator
**Usage:** `swap <source_token> <target_token> <amount>`

**Parameters:**
- `source_token` (required): Token to swap from
- `target_token` (required): Token to swap to
- `amount` (required): Amount to swap

**Examples:**
```bash
> swap ETH USDC 1.0
> swap BTC SPO 0.01
```

#### `token-info`
**Aliases:** `token`
**Description:** Get token information by address
**Usage:** `token-info <address>`

**Parameters:**
- `address` (required): Token contract address

**Examples:**
```bash
> token-info 0x123...
> token 0xabc...
```

#### `token-by-symbol`
**Aliases:** `symbol`
**Description:** Get token information by symbol
**Usage:** `token-by-symbol <symbol>`

**Parameters:**
- `symbol` (required): Token symbol (e.g., BTC, ETH, SPO)

**Examples:**
```bash
> token-by-symbol SPO
> symbol BTC
```

### Document Management

#### `load-docs`
**Aliases:** `docs`
**Description:** Load documents from the specified directory to the current agent
**Usage:** `load-docs <directory_path>`

**Parameters:**
- `directory_path` (required): Path to directory containing documents

**Examples:**
```bash
> load-docs ./documents
> docs /path/to/docs
```

#### `delete-docs`
**Description:** Delete documents from the current agent or specified agent
**Usage:** `delete-docs [agent_name]`

**Parameters:**
- `agent_name` (optional): Name of agent to delete documents from

**Examples:**
```bash
> delete-docs
> delete-docs react
```

### Toolkit Management

#### `list-toolkit-categories`
**Aliases:** `toolkit-categories`, `categories`
**Description:** List all available toolkit categories
**Usage:** `list-toolkit-categories`

**Examples:**
```bash
> list-toolkit-categories
> toolkit-categories
> categories
```

#### `list-toolkit-tools`
**Aliases:** `toolkit-tools`
**Description:** List tools in a specific category
**Usage:** `list-toolkit-tools <category>`

**Parameters:**
- `category` (required): Toolkit category name

**Examples:**
```bash
> list-toolkit-tools crypto
> toolkit-tools blockchain
```

#### `load-toolkit-tools`
**Aliases:** `load-tools`
**Description:** Load toolkit tools from specified categories
**Usage:** `load-toolkit-tools <categories>`

**Parameters:**
- `categories` (required): Comma-separated list of categories

**Examples:**
```bash
> load-toolkit-tools crypto,blockchain
> load-tools social,storage
```

### LLM Provider Management

#### `llm-status`
**Aliases:** `llm`, `providers`
**Description:** Show LLM provider configuration and availability
**Usage:** `llm-status`

**Output includes:**
- Available providers and their status
- Current default provider
- Model configurations
- Health status for each provider

**Examples:**
```bash
> llm-status
> llm
> providers
```

### Social Media

#### `telegram`
**Aliases:** `tg`
**Description:** Start the Telegram client
**Usage:** `telegram`

**Examples:**
```bash
> telegram
> tg
```

## Command Patterns

### Interactive Mode
Many commands support interactive mode when called without parameters:

```bash
> action chat
# Enters interactive chat mode

> config
# Shows current configuration
```

### Batch Operations
Some commands support batch operations:

```bash
> load-toolkit-tools crypto,blockchain,social
```

### Environment Variable References
Configuration commands support environment variable references:

```bash
> config api_key openai ${OPENAI_API_KEY}
```

## Error Handling

### Common Error Codes

| Error | Description | Solution |
|-------|-------------|----------|
| `Agent not found` | Specified agent doesn't exist | Use `list-agents` to see available agents |
| `Invalid command` | Command not recognized | Use `help` to see available commands |
| `Missing parameter` | Required parameter not provided | Check command syntax with `help <command>` |
| `Configuration error` | Invalid configuration | Use `validate-config` to check configuration |
| `API key missing` | Required API key not set | Set environment variables or use `config` command |

### Debug Mode
Enable debug mode for detailed error information:

```bash
export DEBUG=true
export LOG_LEVEL=debug
python main.py
```

## Best Practices

### Command Usage
- Use tab completion for command names and parameters
- Use aliases for frequently used commands
- Check command help before first use: `help <command>`
- Validate configuration after changes: `validate-config`

### Error Recovery
- Use `system-info` to diagnose issues
- Check `llm-status` for provider problems
- Reload configuration after changes: `reload-config`
- Start fresh chat session if needed: `new-chat`

### Performance
- Load only required toolkit categories
- Use appropriate agent for your use case
- Monitor system resources with `system-info`
- Clear chat history periodically with `new-chat`

## See Also

- [CLI Configuration](../../getting-started/configuration.md)
- [Agent API Reference](../agents/base-agent.md)
- [Tool API Reference](../tools/base-tool.md)
- [Troubleshooting Guide](../../troubleshooting/common-issues.md)