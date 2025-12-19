# Common Issues and Solutions

This guide covers the most frequently encountered issues when working with SpoonOS and their solutions.

## Installation Issues

### Python Version Compatibility

**Problem:** `ImportError` or `ModuleNotFoundError` when importing SpoonOS modules

**Symptoms:**
```bash
ImportError: No module named 'spoon_ai'
ModuleNotFoundError: No module named 'asyncio'
```

**Solution:**
1. Ensure Python 3.12 or Python 3.13 is installed:
   ```bash
   python --version
   ```

2. Create a new virtual environment:
   ```bash
   python -m venv spoon-env
   source spoon-env/bin/activate  # Linux/macOS
   # or
   spoon-env\\Scripts\\activate     # Windows
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Dependency Conflicts

**Problem:** Package version conflicts during installation

**Symptoms:**
```bash
ERROR: pip's dependency resolver does not currently have a solution
Conflicting dependencies: package-a requires package-b>=2.0, but package-c requires package-b<2.0
```

**Solution:**
1. Use a fresh virtual environment
2. Install packages one by one to identify conflicts
3. Check `requirements.txt` for version pinning issues
4. Use `pip install --upgrade` for outdated packages

## Configuration Issues

### API Key Problems

**Problem:** Authentication errors with LLM providers

**Symptoms:**
```bash
AuthenticationError: Invalid API key
Unauthorized: API key not found
```

**Solution:**
1. Verify API keys are set correctly:
   ```bash
   echo $OPENAI_API_KEY
   echo $ANTHROPIC_API_KEY
   ```

2. Check `.env` file format:
   ```bash
   # Correct format
   OPENAI_API_KEY=sk-your-actual-key-here

   # Incorrect (no quotes needed)
   OPENAI_API_KEY="sk-your-actual-key-here"
   ```

3. Validate API key format:
   - OpenAI: Starts with `sk-`
   - Anthropic: Starts with `sk-ant-`
   - Google: 39-character string

4. Test API key validity:
   ```bash
   curl -H "Authorization: Bearer $OPENAI_API_KEY" \\
        https://api.openai.com/v1/models
   ```

### Configuration File Errors

**Problem:** JSON parsing errors in `config.json`

**Symptoms:**
```bash
JSONDecodeError: Expecting ',' delimiter
ConfigurationError: Invalid configuration format
```

**Solution:**
1. Validate JSON syntax using online validator or:
   ```bash
   python -m json.tool config.json
   ```

2. Common JSON errors:
   ```json
   // Wrong: trailing comma
   {
     "key": "value",
   }

   // Correct
   {
     "key": "value"
   }
   ```

3. Use CLI validation:
   ```bash
   python main.py
   > validate-config
   ```

## Agent Issues

### Agent Loading Failures

**Problem:** Agent fails to load or initialize

**Symptoms:**
```bash
AgentError: Agent 'my_agent' not found
ImportError: cannot import name 'MyAgent'
```

**Solution:**

1. Verify agent class exists:
   ```python
   from spoon_ai.agents import SpoonReactAI
   # Should not raise ImportError
   ```

2. Check for typos in agent names and class names

3. List available agents:
   ```bash
   python main.py
   > list-agents
   ```

### Tool Loading Issues (CLI `config.json`)

**Problem:** Tools not available or failing to load

**Symptoms:**
```bash
ToolError: Tool 'crypto_tool' not found
ModuleNotFoundError: No module named 'spoon_toolkits'
```

**Solution:**
1. Install spoon-toolkit package:
   ```bash
   pip install spoon-toolkits
   ```

2. Verify environment variables for tools:
   ```bash
   echo $OKX_API_KEY
   echo $COINGECKO_API_KEY
   ```

3. List available tools:
   ```bash
   python main.py
   > list-toolkit-categories
   > list-toolkit-tools crypto
   ```

## LLM Provider Issues

### Provider Connection Failures

**Problem:** Cannot connect to LLM providers

**Symptoms:**
```bash
ConnectionError: Failed to connect to OpenAI API
TimeoutError: Request timed out
```

**Solution:**
1. Check internet connectivity:
   ```bash
   ping api.openai.com
   ping api.anthropic.com
   ```

2. Verify API endpoints are accessible:
   ```bash
   curl -I https://api.openai.com/v1/models
   ```

3. Check firewall and proxy settings

4. Test with different provider:
   ```bash
   python main.py
   > llm-status
   ```

## MCP (Model Context Protocol) Issues

### MCP Server Connection Problems

**Problem:** Cannot connect to MCP servers

**Symptoms:**
```bash
MCPError: Failed to connect to MCP server
ConnectionRefusedError: [Errno 111] Connection refused
```

**Solution:**
1. Verify MCP server is running:
   ```bash
   curl http://localhost:8765/health
   ```

2. Check MCP server configuration:
   ```json
   {
     "mcp_servers": [
       {
         "name": "my_server",
         "url": "http://localhost:8765",
         "transport": "sse"
       }
     ]
   }
   ```

3. Start MCP server:
   ```bash
   python mcp_server.py
   ```

4. Check server logs for errors

### MCP Tool Discovery Issues

**Problem:** MCP tools not discovered or available

**Symptoms:**
```bash
MCPError: No tools found on server
ToolError: MCP tool 'my_tool' not available
```

**Solution:**
1. Verify tools are registered on MCP server:
   ```python
   @mcp.tool()
   def my_tool():
       return "Hello from MCP"
   ```

2. Check MCP server tool listing:
   ```bash
   curl http://localhost:8765/tools
   ```

3. Restart MCP server after adding tools

4. Verify tool permissions and authentication

## Performance Issues

### Slow Response Times

**Problem:** Agent responses are very slow

**Symptoms:**
- Long delays before responses
- Timeout errors
- High CPU/memory usage

**Solution:**
1. Check system resources:
   ```bash
   python main.py
   > system-info
   ```

2. Optimize LLM configuration:
   ```json
   {
     "llm": {
       "temperature": 0.7,
       "max_tokens": 1000,
       "timeout": 30
     }
   }
   ```

3. Enable caching:
   ```json
   {
     "cache": {
       "enabled": true,
       "ttl": 3600
     }
   }
   ```

4. Reduce tool complexity and number of tools

### Memory Issues

**Problem:** High memory usage or out-of-memory errors

**Symptoms:**
```bash
MemoryError: Unable to allocate memory
Process killed (OOM)
```

**Solution:**
1. Monitor memory usage:
   ```bash
   python main.py
   > system-info
   ```

2. Reduce conversation history:
   ```bash
   python main.py
   > new-chat
   ```

3. Optimize agent configuration:
   ```json
   {
     "config": {
       "max_steps": 5,
       "max_tokens": 500
     }
   }
   ```

4. Use lighter LLM models (e.g., GPT-3.5 instead of GPT-4)

## Blockchain Integration Issues

### RPC Connection Problems

**Problem:** Cannot connect to blockchain RPC endpoints

**Symptoms:**
```bash
ConnectionError: Failed to connect to RPC
HTTPError: 403 Forbidden
```

**Solution:**
1. Verify RPC URL is correct:
   ```bash
   curl -X POST -H "Content-Type: application/json" \\
        --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \\
        $RPC_URL
   ```

2. Check RPC provider limits and authentication

3. Try alternative RPC endpoints:
   ```bash
   # Ethereum
   export RPC_URL="https://eth.llamarpc.com"
   export RPC_URL="https://rpc.ankr.com/eth"
   ```

4. Verify network connectivity and firewall settings

### Transaction Failures

**Problem:** Blockchain transactions fail or revert

**Symptoms:**
```bash
TransactionError: Transaction reverted
InsufficientFundsError: Not enough balance
```

**Solution:**
1. Check wallet balance:
   ```bash
   python main.py
   > token-by-symbol ETH
   ```

2. Verify gas settings:
   ```json
   {
     "blockchain": {
       "gas_limit": 21000,
       "gas_price": "20000000000"
     }
   }
   ```

3. Check transaction parameters and recipient address

4. Verify private key and wallet configuration

## Debugging Techniques

### Enable Debug Logging

```bash
# Set environment variables
export DEBUG=true
export LOG_LEVEL=debug

# Run with verbose output
python main.py
```

### Use System Diagnostics

```bash
python main.py
> system-info
> llm-status
> validate-config
```

### Check Configuration

```bash
# Validate configuration
python main.py
> validate-config

# Check migration status
python main.py
> check-config
```

### Test Individual Components

```python
# Test LLM connection
from spoon_ai.llm import LLMManager
llm = LLMManager()
response = await llm.generate("Hello, world!")

# Test tool execution
from spoon_toolkits.crypto import GetTokenPriceTool
tool = GetTokenPriceTool()
result = await tool.execute(symbol="BTC")
```

## Getting Help

### Documentation Resources
- [Installation Guide](../getting-started/installation.md)
- [Configuration Guide](../getting-started/configuration.md)
- [API Reference](../api-reference/index)
- [How-To Guides](../how-to-guides/)

### 📚 **Working Examples**

#### 🎯 [Intent Graph Demo](../examples/intent-graph-demo.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/intent_graph_demo.py)

**Perfect for troubleshooting:**
- Graph system setup and configuration
- Memory management and state persistence issues
- Parallel execution and routing problems
- Production deployment patterns

#### 🔍 [MCP Spoon Search Agent](../examples/mcp-spoon-search-agent.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/mcp/spoon_search_agent.py)

**Great for debugging:**
- MCP server connection and integration issues
- Tool discovery and loading problems
- API rate limiting and error handling
- Multi-tool orchestration challenges

#### 📊 [Graph Crypto Analysis](../examples/graph-crypto-analysis.md)
**GitHub**: [View Source](https://github.com/XSpoonAi/spoon-core/blob/main/examples/graph_crypto_analysis.py)

**Excellent for testing:**
- Real API integration and authentication
- Data processing and validation issues
- Performance optimization problems
- Complex workflow debugging

### Community Support
- GitHub Issues: Report bugs and feature requests
- Discord: Real-time community support
- Documentation: Comprehensive guides and working examples

### Diagnostic Information
When reporting issues, include:
- Python version (`python --version`)
- SpoonOS version
- Operating system
- Error messages and stack traces
- Configuration files (sanitized)
- Steps to reproduce

### Log Collection

```bash
# Enable debug logging
export DEBUG=true
export LOG_LEVEL=debug

# Capture logs
python main.py 2>&1 | tee spoon_debug.log

# Include relevant log sections in issue reports
```

## Prevention Tips

### Regular Maintenance
- Keep dependencies updated
- Rotate API keys regularly
- Monitor system resources
- Backup configuration files
- Test in development environment first

### Best Practices
- Use version control for configurations
- Implement proper error handling
- Monitor API usage and costs
- Set up alerts for critical issues
- Document custom configurations

### Environment Management
- Use separate environments for development/production
- Pin dependency versions in requirements.txt
- Use environment variables for sensitive data
- Regularly test backup and recovery procedures

## See Also

- [Debugging Guide](./debugging.md)
- [Performance Optimization](./performance.md)
- [System Requirements](../getting-started/installation.md)"}

## Prevention Tips

### Regular Maintenance
- Keep dependencies updated
- Rotate API keys regularly
- Monitor system resources
- Backup configuration files
- Test in development environment first

### Best Practices
- Use version control for configurations
- Implement proper error handling
- Monitor API usage and costs
- Set up alerts for critical issues
- Document custom configurations

### Environment Management
- Use separate environments for development/production
- Pin dependency versions in requirements.txt
- Use environment variables for sensitive data
- Regularly test backup and recovery procedures

## See Also

- [Debugging Guide](./debugging.md)
- [Performance Optimization](./performance.md)
- [System Requirements](../getting-started/installation.md)"}
