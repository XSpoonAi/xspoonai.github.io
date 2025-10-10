# CLI Troubleshooting

This guide helps you diagnose and resolve common issues with . Follow the systematic approach to identify and fix problems.

## Quick Diagnosis

### System Health Check

Run the comprehensive health check first:

```bash
# Start  and run:
system-info
```

This command shows:
- Environment variables status
- Configuration file validity
- API key configuration
- Agent and tool availability
- Overall health score

### LLM Provider Status

Check LLM provider configuration:

```bash
# Start  and run:
llm-status
```

This shows:
- Available providers
- API key status (masked)
- Default provider
- Fallback chain configuration

## Configuration Issues

### Configuration File Problems

#### Invalid JSON Syntax

**Symptoms:**
- Configuration loading errors
- CLI fails to start

**Diagnosis:**
```bash
# Start spoon-cli and run:
validate-config
```

**Solutions:**
1. Check JSON syntax with online validator
2. Ensure proper quoting of strings
3. Validate file encoding (should be UTF-8)

#### Configuration Not Loading

**Symptoms:**
- Settings not applied
- Default values used instead

**Diagnosis:**
```bash
# Check if config file exists and is readable
ls -la config.json

# Start spoon-cli and run:
check-config
```

**Solutions:**
1. Ensure `config.json` is in current directory or `~/.spoon/config.json`
2. Check file permissions: `chmod 644 config.json`
3. Validate JSON format

### Environment Variable Issues

#### API Keys Not Recognized

**Symptoms:**
- LLM provider unavailable
- Authentication errors

**Diagnosis:**
```bash
# Check environment variables
env | grep -E "(OPENAI|ANTHROPIC|DEEPSEEK)"

# Test specific provider
 llm-status
```

**Solutions:**
1. Set environment variables correctly:
   ```bash
   export OPENAI_API_KEY="sk-your-key-here"
   export ANTHROPIC_API_KEY="sk-ant-your-key-here"
   ```

2. Use `.env` file for persistent configuration:
   ```bash
   echo "OPENAI_API_KEY=sk-your-key-here" > .env
   ```

3. Restart shell or reload environment

### Migration Issues

#### Legacy Configuration Detected

**Symptoms:**
- Migration warnings
- Some features not working

**Diagnosis:**
```bash
# Start spoon-cli and run:
check-config
```

**Solutions:**
```bash
# Preview migration
# Start spoon-cli and run:
migrate-config --dry-run

# Perform migration
# Start spoon-cli and run:
migrate-config

# Validate after migration
# Start spoon-cli and run:
validate-config
```

## Agent Loading Issues

### Agent Not Found

**Symptoms:**
- "Agent not found" error
- Cannot load specific agent

**Diagnosis:**
```bash
# Start spoon-cli and run:
# List available agents
list-agents

# Check configuration
config agents
```

**Solutions:**
1. Verify agent name in configuration
2. Check agent class name is correct
3. Ensure required dependencies are installed

### Tool Loading Failures

**Symptoms:**
- Tools not available after loading
- Agent lacks expected capabilities

**Diagnosis:**
```bash
# Start spoon-cli and run:
# Check tool loading status
tool-status

# List available toolkits
list-toolkit-categories
```

**Solutions:**
1. Reload agent configuration:
   ```bash
# Start spoon-cli and run:
reload-config
   ```

2. Reinstall toolkits:
   ```bash
   pip install --upgrade spoon-toolkits
   ```

3. Check network connectivity for external tools

## Network and Connectivity Issues

### MCP Server Connection Problems

**Symptoms:**
- MCP tools unavailable
- Server connection timeouts

**Diagnosis:**
```bash
# Start spoon-cli and run:
# Validate MCP configuration
validate-config --check-servers

# Test specific server
# Start spoon-cli and run:
load-agent mcp_agent
```

**Solutions:**
1. Verify server commands are installed:
   ```bash
   which npx
   which uvx
   ```

2. Check server environment variables
3. Update server configurations in `config.json`

### API Rate Limiting

**Symptoms:**
- Requests failing with rate limit errors
- Intermittent connectivity issues

**Solutions:**
1. Implement request throttling:
   ```json
   {
     "llm": {
       "rate_limiting": {
         "requests_per_minute": 30,
         "burst_limit": 5
       }
     }
   }
   ```

2. Switch to different provider temporarily
3. Upgrade API plan for higher limits

## Performance Issues

### Slow Startup

**Symptoms:**
- CLI takes long time to start
- Agent loading is slow

**Diagnosis:**
```bash
# Enable profiling
export SPOON_CLI_PROFILE=1
 system-info
```

**Solutions:**
1. Load fewer tools initially
2. Use faster LLM providers
3. Enable caching:
   ```json
   {
     "llm": {
       "caching": {
         "enabled": true,
         "ttl": 3600
       }
     }
   }
   ```

### High Memory Usage

**Symptoms:**
- System running out of memory
- Performance degradation

**Solutions:**
1. Reduce chat history size:
   ```json
   {
     "memory": {
       "max_chat_history": 50,
       "compress_old_messages": true
     }
   }
   ```

2. Enable memory cleanup:
   ```json
   {
     "memory": {
       "cleanup_temp_files": true,
       "auto_save_interval": 300
     }
   }
   ```

### Slow Response Times

**Diagnosis:**
```bash
# Start spoon-cli and run:
# Check LLM provider status
llm-status

# Test response time
time spoon-cli action chat <<< "Hello"
```

**Solutions:**
1. Switch to faster models
2. Adjust timeout settings:
   ```json
   {
     "llm": {
       "timeout": 60,
       "retry_attempts": 2
     }
   }
   ```

3. Enable response streaming for better perceived performance

## Installation Issues

### Import Errors

**Symptoms:**
- "Module not found" errors
- CLI fails to start

**Diagnosis:**
```bash
# Check Python path
python -c "import spoon_ai; print(spoon_ai.__file__)"

# Verify installation
pip list | grep spoon
```

**Solutions:**
1. Reinstall packages:
   ```bash
   pip uninstall  spoon-ai-sdk spoon-toolkits
   pip install    ```

2. Check Python version compatibility
3. Use virtual environment to avoid conflicts

### Permission Issues

**Symptoms:**
- Cannot write configuration files
- Installation fails

**Solutions:**
1. Use user installation:
   ```bash
   pip install --user    ```

2. Fix directory permissions:
   ```bash
   chmod 755 ~/.spoon/
   chmod 644 ~/.spoon/config.json
   ```

## Platform-Specific Issues

### Windows Issues

#### Command Prompt Problems

**Symptoms:**
- Interactive features not working
- Display issues

**Solutions:**
1. Use PowerShell instead of CMD
2. Install Windows Terminal
3. Enable ANSI color support

#### Path Issues

**Solutions:**
1. Add Python to PATH during installation
2. Use absolute paths in configuration
3. Avoid spaces in installation paths

### macOS Issues

#### SIP (System Integrity Protection)

**Solutions:**
1. Install in user directory:
   ```bash
   pip install --user    ```

2. Use Homebrew for Python:
   ```bash
   brew install python
   ```

### Linux Issues

#### Shared Library Problems

**Diagnosis:**
```bash
ldd $(which python) | grep "not found"
```

**Solutions:**
1. Install missing system libraries
2. Use system package manager:
   ```bash
   # Ubuntu/Debian
   sudo apt-get install python3-dev build-essential

   # CentOS/RHEL
   sudo yum install python3-devel gcc
   ```

## Debugging Techniques

### Enable Debug Mode

```bash
# Enable debug logging
export SPOON_CLI_DEBUG=1

# Or use flag
 --debug system-info
```

### Log Analysis

```bash
# Check log files
tail -f spoon_cli.log

# Increase log verbosity
export SPOON_CLI_LOG_LEVEL=DEBUG
```

### Network Debugging

```bash
# Test network connectivity
curl -I https://api.openai.com/v1/models

# Check proxy settings
env | grep -i proxy
```

### Configuration Debugging

```bash
# Show full configuration with debug
 --debug config

# Validate with detailed output
 validate-config --verbose
```

## Common Error Messages

### "Configuration validation failed"

**Cause:** Invalid configuration syntax or missing required fields

**Solution:**
```bash
 validate-config
# Fix reported issues
 reload-config
```

### "Agent class not found"

**Cause:** Invalid agent class name in configuration

**Solution:**
- Check class name spelling
- Ensure correct module imports
- Update to valid class names

### "Tool loading failed"

**Cause:** Tool dependencies not available

**Solution:**
```bash
pip install --upgrade spoon-toolkits
 reload-config
```

### "MCP server connection timeout"

**Cause:** Network issues or server configuration problems

**Solution:**
```bash
 validate-config --check-servers
# Fix server configurations
 reload-config
```

## Getting Help

### Community Resources

1. **GitHub Issues:** Report bugs and request features
2. **Documentation:** Check the full documentation
3. **Discord/Forum:** Community discussions

### Debug Information Collection

When reporting issues, include:

```bash
# System information
 system-info

# Configuration (mask sensitive data)
 config

# Error logs
tail -n 50 spoon_cli.log

# Python environment
python --version
pip list | grep spoon
```

## Preventive Maintenance

### Regular Updates

```bash
# Update CLI and dependencies
pip install --upgrade  spoon-ai-sdk spoon-toolkits

# Update configuration if needed
 migrate-config
```

### Configuration Backup

```bash
# Backup configuration
cp config.json config.json.backup

# Backup environment
env | grep SPOON > spoon_env.backup
```

### Health Monitoring

```bash
# Regular health checks
 system-info

# Monitor for issues
 validate-config
```

## Emergency Recovery

### Reset Configuration

```bash
# Remove corrupted config
rm config.json

# Start with minimal config
echo '{"default_agent": "react"}' > config.json

# Test basic functionality
 list-agents
```

### Clean Reinstall

```bash
# Complete cleanup
pip uninstall  spoon-ai-sdk spoon-toolkits
rm -rf ~/.spoon/
rm -rf chat_logs/

# Fresh install
pip install
# Basic setup
 config api_key openai "your-key"
```

## Next Steps

- [Installation](./installation.md) - Reinstall if needed
- [Configuration](./configuration.md) - Review configuration options
- [Basic Usage](./basic-usage.md) - Verify basic functionality works

