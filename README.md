# SpoonOS Developer Documentation

Welcome to the **SpoonOS Developer Documentation** - the comprehensive guide for building, deploying, and scaling Web3 AI agents with the SpoonOS Agentic Operating System.

This documentation site provides everything you need to get started with SpoonOS, the **Agentic OS for a Sentient Economy**.

If you plan to build or refresh the Python-generated API docs that power this cookbook, use `uv` (Python 3.12+) for a fast, reproducible setup:

```bash
cd cookbook
uv venv .venv
./.venv/Scripts/activate   # Windows
# source .venv/bin/activate # macOS/Linux
uv pip install spoon-ai-sdk
```

## 🚀 What is SpoonOS?

SpoonOS is an **Agentic Operating System that enables AI agents to perceive, reason, plan, and execute**. It provides a robust framework for creating, deploying, and managing Web3 AI agents. SpoonOS fosters interoperability, data scalability, and privacy—empowering AI agents to engage in collaborative learning while ensuring secure and efficient data processing.

### Key Features

- 🧠 **Intelligent Agent Framework** - Advanced reasoning and action capabilities
- 🌐 **Web3-Native Architecture** - Built-in blockchain and DeFi integration
- 🔧 **Modular Tool System** - Extensible architecture with MCP protocol support
- 🤖 **Multi-Model AI Support** - Compatible with OpenAI, Anthropic, DeepSeek, and more
- 📊 **Graph-Based Workflows** - Complex workflow orchestration and management
- 💻 **Interactive CLI** - Powerful development and deployment interface
- 🔒 **Privacy-First Design** - Secure data processing and collaborative learning
- ⚡ **High Performance** - Optimized for scalability and efficiency

## 📚 Documentation Structure

- **Getting Started** - Installation, configuration, and quick start
- **Core Concepts** - Agents, tools, and system architecture
- **Guides** - Step-by-step tutorials and best practices
- **API Reference** - Complete API documentation
- **Examples** - Real-world use cases and sample code

## 🛠️ Development

### Installation

For Python-based API doc generation (recommended when updating the docs), set up `uv` first:

```bash
uv venv .venv
./.venv/Scripts/activate   # Windows
# source .venv/bin/activate # macOS/Linux
uv pip install pydoc-markdown spoon-ai-sdk
```

Then install the site dependencies:

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 🤝 Contributing

We welcome contributions to improve the documentation! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This documentation is part of the SpoonOS project and follows the same license terms.

## 🔗 Links

- **Main Repository**: [XSpoonAi/spoon-core](https://github.com/XSpoonAi/spoon-core)
- **Official Website**: [SpoonOS Landing](https://spoonai.io)
- **Documentation**: [Developer Documentation](https://xspoonai.github.io/spoon-doc/)
- **Community**: [GitHub Discussions](https://github.com/XSpoonAi/spoon-core/discussions)

---

**Build, deploy and scale Web3 AI agents in an evolving paradigm.**

Built with ❤️ by the SpoonOS Team
