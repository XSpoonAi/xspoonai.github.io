
# 🚀 SpoonOS Core Developer Framework (SCDF)
*Agentic OS for the sentient economy · Next-Generation AI Agent Framework*  
![Build Status](https://img.shields.io/github/workflow/status/XSpoonAi/spoon-core/CI)
![Contributors](https://img.shields.io/github/contributors/XSpoonAi/spoon-core)
![License](https://img.shields.io/github/license/XSpoonAi/spoon-core)
![Version](https://img.shields.io/github/v/release/XSpoonAi/spoon-core)
---
## 📑 Table of Contents
- [Features](#features-)
- [Quick Start](#quick-start)
- [Unified LLM Architecture](#unified-llm--provider-architecture)
- [Graph System](#graph-system-example)
- [Custom Agents & Tools](#build-custom-agents--tools)
- [MCP & Web3 Support](#mcp--web3-tool-support)
- [Project Structure](#project-structure)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)
- [Contributor Stats](#contributor-stats)
- [Developer Flow (Emoji Diagram)](#spoonos-developer-flow-emoji-diagram)
- [Getting Help](#getting-help)
---
## 🎉 Features 🧠💬🛠️🌐🚀
- **🧠 ReAct Reasoning Agent:** Advanced agent reasoning & tool usage
- **🔧 Modular Tool Ecosystem:** Compose, register, and use custom tools
- **💬 Multi-Provider LLM:** OpenAI, Anthropic, DeepSeek, Gemini support
- **🏗️ Unified LLM Manager:** Provider config, fallback, and fine-tuning
- **📊 Graph Workflows:** State-backed, dynamic, multi-agent graphs
- **⚡ Prompt Caching:** Fast, efficient API queries with cost management
- **🌐 Web3-Ready:** On-chain, ZKML, blockchain, decentralized identity
- **🔌 MCP Protocol:** Dynamic tool invocation (HTTP/SSE/WebSocket)
- **💻 CLI Tools:** Powerful prompt and config CLI
- **🔄 Persistent State:** Session, history, and resumable workflows
---
## 👩‍💻 Quick Start
```shell
# 🛸 Clone Repo
git clone https://github.com/XSpoonAi/spoon-core.git
# 🧪 Create Virtual Env
python -m venv spoon-env && source spoon-env/bin/activate
# 🛠️ Install Dependencies
pip install -r requirements.txt
# Tip: Faster setup
uv pip install -r requirements.txt
# 🔑 Configure Keys/Env
cp .env.example .env      # Fill API keys: OpenAI, Claude, Turnkey, Web3, ...
# Or use CLI:
python main.py           # → config api_key openai ...
# 🤖 Run CLI
python main.py
# 🏗️ Build Agents & Tools
# - Extend ToolCallAgent
# - Create custom tools (BaseTool)
# - Register tools (agent/CLI)
# 📁 Test Examples
# - /examples/* scripts and /agent/my_agent_demo.py
# 📖 Docs & Help
# - /doc/configuration.md, /doc/agent.md, /doc/graph_agent.md, /doc/mcp_mode_usage.md
```
---
## 🏗️ Unified LLM & Provider Architecture
Plug-and-play support: OpenAI, Anthropic, Gemini (multi-provider, fallback). Configure in `config.json`.
```python
from spoon_ai.llm import LLMManager, ConfigurationManager
config_manager = ConfigurationManager()
llm_manager = LLMManager(config_manager)
response = await llm_manager.chat([{"role": "user", "content": "Hello!"}])
llm_manager.set_fallback_chain(["openai", "anthropic"])
```
---
## 📊 Graph System Example
StateGraph orchestrates steps/nodes:
```python
from spoon_ai.graph import StateGraph
graph = StateGraph(WorkflowState)
graph.add_node("increment", increment)
# ...
compiled = graph.compile()
result = await compiled.invoke({"counter": 0, "completed": False})
```
---
## 🧩 Build Custom Agents & Tools
```python
from spoon_ai.tools.base import BaseTool
class MyCustomTool(BaseTool):
    name = "my_tool"
    description = "Describe tool"
    parameters = {...}
    async def execute(self, param1: str):
        return f"Result: {param1}"
from spoon_ai.agents import ToolCallAgent, ToolManager
class MyAgent(ToolCallAgent):
    name = "my_agent"
    description = "My custom agent"
    available_tools = ToolManager([MyCustomTool()])
```
---
## 🔌 MCP & Web3 Tool Support
Supports live tool servers, Web3-native agents, blockchain interoperability.  
See `/doc/mcp_mode_usage.md` & `/examples/mcp/`.
---
## 🗂️ Project Structure
```
spoon-core/
├── README.md
├── main.py
├── config.json
├── .env.example
├── requirements.txt
├── spoon_ai/
│   ├── agents/
│   ├── tools/
│   ├── llm/
│   ├── graph.py
│   ├── chat.py
├── examples/
├── doc/
│   ├── configuration.md
│   ├── agent.md
│   ├── graph_agent.md
│   ├── mcp_mode_usage.md
│   ├── cli.md
├── tests/
```
---
## 💡 Usage Examples
**Run the agent:**
```shell
python main.py --agent my_agent --input "What's the weather?"
```
Agent responds with weather info using WebSearchTool 🌦️
---
## 🚑 Troubleshooting
- Double-check Python and pip versions.
- Ensure ALL required API keys are set.
- OpenAI/Anthropic/Gemini errors: often key or env issues.
- MCP/Web3: See `/doc/mcp_mode_usage.md` for connectivity.
---
## 📈 Contributor Stats
- 20+ contributors
- 150+ stars, 30+ forks
- Open issues/PRs always welcome!
---
## 🟰 SpoonOS Developer Flow (Emoji Diagram)
```
🛸 ➡️ 🧪 ➡️ 🛠️ ➡️ 🔑 ➡️ 🤖 ➡️ 🏗️ ➡️ 📁 ➡️ 📖
Clone → Venv → Install → Config → Run → Build → Test → Docs
```
---
## 💬 Getting Help
- [Issues](https://github.com/XSpoonAi/spoon-core/issues)
- [Discussions](https://github.com/XSpoonAi/spoon-core/discussions)
- Discord/Slack coming soon!
---
