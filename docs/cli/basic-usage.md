# Basic CLI Usage

This guide covers the fundamental operations of spoon-cli, from starting your first session to performing common tasks.

## Starting the CLI

### Interactive Mode

The most common way to use spoon-cli is through interactive mode:

```bash
spoon-cli
```

This starts the interactive command-line interface where you can enter commands and chat with agents.

### Interactive Commands

Once in the spoon-cli interactive mode, you can run various commands:

```bash
# Load an agent and start chat
action chat

# List available agents
list-agents

# Show system information
system-info
```

## Core Commands

### Help System

Get help on available commands:

```bash
# Show all commands
help

# Get help for specific command
help load-agent
```

### Agent Management

#### List Available Agents

```bash
list-agents
```

Shows all configured agents with their descriptions and aliases.

#### Load an Agent

```bash
load-agent react
# or using alias
load-agent r
```

Loads the specified agent for use in subsequent operations.

#### Check Current Agent

The prompt shows the currently loaded agent:

```
Spoon AI (react) >
```

### Chat Operations

#### Start Chat Mode

```bash
action chat
```

Starts an interactive chat session with the current agent.

#### Create New Chat

```bash
new-chat
```

Clears the current chat history and starts fresh.

#### List Chat Histories

```bash
list-chats
```

Shows available saved chat sessions.

#### Load Previous Chat

```bash
load-chat react_session_001
```

Loads a previously saved chat session.

### Configuration Management

#### View Configuration

```bash
config
```

Shows all current configuration settings.

#### Set Configuration Values

```bash
# Set API key
config api_key openai "sk-your-key-here"

# Set default agent
config default_agent "my_agent"

# Set LLM provider
config llm.default_provider "anthropic"
```

#### Reload Configuration

```bash
reload-config
```

Reloads configuration after making changes to config files.

## Interactive Chat Mode

### Starting Chat

Once you enter chat mode (`action chat`), you'll see:

```
Spoon AI (react) > action chat
Starting chat with react
Type your message and press Enter to send.
Press Ctrl+C or Ctrl+D to exit chat mode.
Chat log will be saved to: chat_logs/chat_react_20241201_143022.txt

You >
```

### Basic Chat Interaction

```bash
You > Hello, can you help me analyze some cryptocurrency data?

react: I'd be happy to help you analyze cryptocurrency data. What specific cryptocurrencies or data are you interested in? I have access to various crypto analysis tools including price lookups, market data, and technical indicators.
```

### Special Commands in Chat

While in chat mode, you can use special commands:

- `Ctrl+C` or `Ctrl+D`: Exit chat mode
- Multi-line input: Continue typing, press Enter twice to send

### Chat History

All conversations are automatically saved to timestamped files in the `chat_logs/` directory.

## Tool Integration

### List Available Toolkits

```bash
list-toolkit-categories
```

Shows all available tool categories.

### List Tools in Category

```bash
list-toolkit-tools crypto
```

Shows tools available in the crypto category.

### Load Toolkit Tools

```bash
load-toolkit-tools crypto web_search
```

Loads tools from specified categories into the current agent.

## Document Operations

### Load Documents

```bash
load-docs /path/to/documents
load-docs /path/to/file.pdf
load-docs /path/to/folder --glob "*.txt"
```

Loads documents into the current agent for analysis and querying.

## System Information

### Health Check

```bash
system-info
```

Provides comprehensive system information including:
- Environment variables status
- Configuration file status
- Available agents and tools
- API key configuration
- Health score and recommendations

### LLM Status

```bash
llm-status
```

Shows LLM provider configuration and availability status.

## Blockchain Operations

### Token Information

```bash
token-info 0xA0b86a33E6441e88C5F2712C3E9b74E39E9f6E5a
token-by-symbol ETH
```

Get information about specific tokens.

### Transfer Tokens

```bash
transfer 0x742d35Cc6634C0532925a3b844Bc454e4438f44e 1.5
transfer 0x742d35Cc6634C0532925a3b844Bc454e4438f44e 100 USDC
```

Transfer native tokens or ERC-20 tokens.

### Token Swapping

```bash
swap ETH USDC 1.0
swap UNI WETH 100 --slippage 0.5
```

Swap tokens using integrated DEX aggregator.

## Social Media Integration

### Telegram Bot

```bash
telegram
```

Starts the Telegram bot client for social media interactions.

## Configuration Validation

### Validate Configuration

```bash
validate-config
```

Checks configuration for issues and missing requirements.

### Check Migration Status

```bash
check-config
```

Checks if configuration needs migration to new format.

### Migrate Configuration

```bash
migrate-config
```

Migrates legacy configuration to the new unified format.

## Command-line Options

### Global Options

```bash
--help              # Show help
--version           # Show version
--config FILE       # Use specific config file
--debug             # Enable debug mode
```

### Command-specific Options

```bash
migrate-config --dry-run    # Preview migration
validate-config --check-env # Check environment variables
```

## Examples

### Complete Workflow

```bash
# Start spoon-cli
spoon-cli

# Then run these commands in interactive mode:
# 1. Check system status
system-info

# 2. Configure API keys
config api_key openai "sk-your-key"
config api_key anthropic "sk-ant-your-key"

# 3. List and load agent
list-agents
load-agent react

# 4. Load useful tools
load-toolkit-tools crypto web_search

# 5. Start chatting
action chat
```

### Crypto Analysis Session

```bash
# Load crypto-focused agent
load-agent crypto_analyzer

# Load crypto tools
load-toolkit-tools crypto

# Analyze specific token
action chat
# Then ask: "Analyze the current market sentiment for BTC and ETH"
```

### Document Analysis

```bash
# Load agent and documents
load-agent react
load-docs ./research_papers/

# Start analysis
action chat
# Then ask: "Summarize the key findings from the loaded documents"
```

## Keyboard Shortcuts

### Main CLI
- `Ctrl+C`: Interrupt current operation
- `Ctrl+D`: Exit CLI (at main prompt)
- `↑/↓`: Navigate command history
- `Tab`: Auto-complete commands

### Chat Mode
- `Ctrl+C`: Exit chat mode
- `Ctrl+D`: Exit chat mode
- `↑/↓`: Navigate message history

## Best Practices

### Session Management

1. **Use descriptive agent names** for different tasks
2. **Save important chats** with meaningful filenames
3. **Regularly update configuration** as needs change

### Performance

1. **Load only needed tools** to reduce startup time
2. **Use appropriate models** for your tasks
3. **Monitor system resources** with `system-info`

### Security

1. **Never share API keys** in chat sessions
2. **Use environment variables** for sensitive data
3. **Regularly rotate API keys**

## Next Steps

- [Advanced Features](./advanced-features.md) - Learn advanced CLI capabilities
- [Configuration Guide](./configuration.md) - Deep dive into configuration options
- [Troubleshooting](./troubleshooting.md) - Solve common issues

