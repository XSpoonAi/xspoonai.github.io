# CLI Installation

The  is the command-line interface for SpoonAI, providing an easy way to interact with AI agents, manage configurations, and perform various operations.

## Installation Methods

### Method 1: Install from PyPI (Recommended)

```bash
pip install ```

This installs the latest stable version of  along with all necessary dependencies.

### Method 2: Install from Source

If you want to install from source or contribute to development:

```bash
# Clone the repository
git clone https://github.com/your-org/spoon-ai.git
cd spoon-ai/
# Install in development mode
pip install -e .
```

## System Requirements

### Minimum Requirements

- **Python**: 3.11 or higher
- **Operating System**: Linux, macOS, or Windows
- **Memory**: 4GB RAM minimum, 8GB recommended
- **Disk Space**: 500MB for installation

### Recommended Requirements

- **Python**: 3.12+
- **Memory**: 16GB RAM
- **CPU**: Multi-core processor

## Dependencies

The  automatically installs the following core dependencies:

- **spoon-ai-sdk**: Core SpoonAI framework
- **spoon-toolkits**: Additional tool collections
- **prompt_toolkit**: Enhanced command-line interface
- **python-dotenv**: Environment variable management
- **fastmcp**: MCP (Model Context Protocol) support
- **pydantic**: Data validation
- **websockets**: WebSocket communication

## Verification

After installation, verify the installation by checking the version:

```bash
# Check version
spoon-cli --version
```

Or start the interactive CLI:

```bash
# Start spoon-cli
spoon-cli
```

## Post-Installation Setup

### 1. Configure Environment Variables

Create a `.env` file in your project directory or set environment variables:

```bash
# LLM API Keys (choose at least one)
export OPENAI_API_KEY="sk-your-openai-key"
export ANTHROPIC_API_KEY="sk-ant-your-anthropic-key"
export DEEPSEEK_API_KEY="your-deepseek-key"

# Optional: Blockchain operations
export PRIVATE_KEY="your-wallet-private-key"
export RPC_URL="https://mainnet.infura.io/v3/YOUR_PROJECT_ID"
```

### 2. Create Configuration File

Create a `config.json` file for advanced configuration (optional but recommended):

```json
{
  "default_agent": "react",
  "api_keys": {
    "openai": "sk-your-key-here"
  }
}
```

### 3. Test Installation

Run the system health check:

```bash
# Start spoon-cli and run:
system-info
```

This command will show:
- System information
- Environment variable status
- Configuration file status
- Available agents and tools

## Troubleshooting Installation

### Common Issues

1. **Python Version Too Old**
   ```bash
   python --version
   # Should show 3.11 or higher
   ```

2. **Permission Denied**
   ```bash
   # Use user installation
   pip install --user
   # Or use virtual environment
   python -m venv spoon_env
   source spoon_env/bin/activate  # Linux/macOS
   # spoon_env\Scripts\activate    # Windows
   pip install    ```

3. **Dependency Conflicts**
   ```bash
   # Upgrade pip
   pip install --upgrade pip

   # Install in isolated environment
   pip install --isolated    ```

### Windows-Specific Issues

On Windows, you might need to:

1. **Add Python to PATH** during installation
2. **Use Command Prompt or PowerShell** instead of bash
3. **Install Microsoft Visual C++ Redistributable** if required

### Network Issues

If you're behind a corporate firewall:

```bash
# Use a proxy
pip install --proxy=http://proxy.company.com:8080
# Or configure pip proxy globally
pip config set global.proxy http://proxy.company.com:8080
```

## Upgrading

To upgrade to the latest version:

```bash
pip install --upgrade ```

## Uninstalling

To remove :

```bash
pip uninstall ```

Note: This will not remove configuration files or chat histories you may have created.

## Next Steps

After installation, proceed to:
- [Configuration Guide](./configuration.md) - Learn how to configure - [Basic Usage](./basic-usage.md) - Start using - [Advanced Features](./advanced-features.md) - Explore advanced capabilities

