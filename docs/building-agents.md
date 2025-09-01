---
sidebar_position: 13
---

# Building Agents

Learn how to build sophisticated AI agents with SpoonOS. This guide covers advanced agent architectures, patterns, and best practices.

## Agent Architecture Patterns

### 1. Simple ReAct Agent

The basic ReAct (Reasoning + Acting) pattern:

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

class SimpleAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.system_prompt = """
        You are a helpful AI assistant. Think step by step:
        1. Understand the user's request
        2. Plan your approach
        3. Execute actions using available tools
        4. Provide a clear response
        """
```

### 2. Specialized Domain Agent

Create agents for specific domains:

```python
class CryptoAnalysisAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.system_prompt = """
        You are a cryptocurrency market analyst. Your expertise includes:
        - Technical analysis and chart patterns
        - Market sentiment analysis
        - Risk assessment and portfolio management
        - DeFi protocol analysis

        Always provide data-driven insights and include risk warnings.
        """

        # Add crypto-specific tools
        from spoon_ai.tools import ToolManager
        from spoon_toolkits.crypto import CryptoPowerDataCEXTool

        self.avaliable_tools = ToolManager([
            CryptoPowerDataCEXTool(),
            # Add more crypto tools
        ])
```

### 3. Multi-Modal Agent

Agents that handle different types of input:

```python
class MultiModalAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.system_prompt = """
        You can process text, images, and data files.
        Analyze the input type and respond appropriately.
        """

    async def process_input(self, input_data):
        if isinstance(input_data, str):
            return await self.process_text(input_data)
        elif isinstance(input_data, dict) and 'image' in input_data:
            return await self.process_image(input_data)
        else:
            return await self.process_data(input_data)
```

## Advanced Agent Features

### Memory and Context Management

```python
class MemoryAwareAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.conversation_memory = []
        self.long_term_memory = {}

    async def run(self, user_input: str) -> str:
        # Add to conversation memory
        self.conversation_memory.append({
            "role": "user",
            "content": user_input,
            "timestamp": datetime.now()
        })

        # Process with memory context
        result = await super().run(user_input)

        # Store important information
        await self.update_long_term_memory(user_input, result)

        return result

    async def update_long_term_memory(self, input_text, output_text):
        # Extract and store important information
        if "remember" in input_text.lower():
            key_info = self.extract_key_information(input_text)
            self.long_term_memory.update(key_info)
```

### Tool Orchestration

```python
class ToolOrchestratorAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.tool_usage_stats = {}

    async def select_tools(self, task_description: str) -> List[str]:
        """Intelligently select tools based on task"""
        if "price" in task_description.lower():
            return ["crypto_price_tool", "market_data_tool"]
        elif "news" in task_description.lower():
            return ["web_search_tool", "sentiment_analysis_tool"]
        else:
            return ["general_purpose_tool"]

    async def execute_with_tools(self, task: str, selected_tools: List[str]):
        """Execute task with specific tools"""
        results = {}
        for tool_name in selected_tools:
            if tool_name in self.avaliable_tools.tool_map:
                tool = self.avaliable_tools.tool_map[tool_name]
                result = await tool.execute(task)
                results[tool_name] = result

                # Update usage stats
                self.tool_usage_stats[tool_name] = (
                    self.tool_usage_stats.get(tool_name, 0) + 1
                )

        return results
```

### Error Recovery and Resilience

```python
class ResilientAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.max_retries = 3
        self.fallback_strategies = []

    async def run_with_recovery(self, user_input: str) -> str:
        for attempt in range(self.max_retries):
            try:
                return await self.run(user_input)
            except Exception as e:
                logging.warning(f"Attempt {attempt + 1} failed: {e}")

                if attempt < self.max_retries - 1:
                    # Try fallback strategy
                    await self.apply_fallback_strategy(e)
                else:
                    return self.generate_error_response(e)

    async def apply_fallback_strategy(self, error: Exception):
        """Apply fallback strategies based on error type"""
        if "timeout" in str(error).lower():
            # Reduce complexity or use cached data
            self.simplify_approach()
        elif "rate_limit" in str(error).lower():
            # Wait and retry with different provider
            await asyncio.sleep(5)
            self.switch_llm_provider()
```

## Agent Composition Patterns

### Master-Worker Pattern

```python
class MasterAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.worker_agents = {
            "research": ResearchAgent(),
            "analysis": AnalysisAgent(),
            "reporting": ReportingAgent()
        }

    async def delegate_task(self, task: str, agent_type: str) -> str:
        """Delegate task to specialized worker agent"""
        if agent_type in self.worker_agents:
            worker = self.worker_agents[agent_type]
            return await worker.run(task)
        else:
            return await self.run(task)  # Handle directly

    async def coordinate_workflow(self, complex_task: str) -> str:
        """Coordinate multiple agents for complex tasks"""
        # Step 1: Research
        research_result = await self.delegate_task(
            f"Research: {complex_task}", "research"
        )

        # Step 2: Analysis
        analysis_result = await self.delegate_task(
            f"Analyze: {research_result}", "analysis"
        )

        # Step 3: Reporting
        final_report = await self.delegate_task(
            f"Create report: {analysis_result}", "reporting"
        )

        return final_report
```

### Pipeline Pattern

```python
class PipelineAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.pipeline_stages = [
            self.preprocess,
            self.analyze,
            self.synthesize,
            self.format_output
        ]

    async def run_pipeline(self, input_data: str) -> str:
        """Run input through processing pipeline"""
        current_data = input_data

        for stage in self.pipeline_stages:
            try:
                current_data = await stage(current_data)
            except Exception as e:
                logging.error(f"Pipeline stage failed: {e}")
                # Decide whether to continue or abort
                if self.is_critical_stage(stage):
                    raise
                else:
                    continue

        return current_data

    async def preprocess(self, data: str) -> str:
        """Preprocess input data"""
        # Clean and normalize data
        return data.strip().lower()

    async def analyze(self, data: str) -> str:
        """Analyze processed data"""
        # Perform analysis using tools
        return await self.run(f"Analyze: {data}")

    async def synthesize(self, data: str) -> str:
        """Synthesize analysis results"""
        # Combine and synthesize findings
        return await self.run(f"Synthesize: {data}")

    async def format_output(self, data: str) -> str:
        """Format final output"""
        # Format for presentation
        return f"## Analysis Results\n\n{data}"
```

## Testing and Validation

### Unit Testing Agents

```python
import pytest
from unittest.mock import AsyncMock

@pytest.mark.asyncio
async def test_crypto_agent():
    # Mock the LLM
    mock_llm = AsyncMock()
    mock_llm.chat.return_value = {
        "content": "BTC price is $50,000",
        "finish_reason": "stop"
    }

    # Create agent with mock
    agent = CryptoAnalysisAgent(llm=mock_llm)

    # Test execution
    result = await agent.run("What's the Bitcoin price?")
    assert "50,000" in result
    assert mock_llm.chat.called
```

### Integration Testing

```python
@pytest.mark.asyncio
async def test_agent_with_real_tools():
    """Test agent with actual tools (requires API keys)"""
    agent = CryptoAnalysisAgent(llm=ChatBot())

    # Test with real API call
    result = await agent.run("Get BTC price from the last 24 hours")

    # Validate response structure
    assert len(result) > 0
    assert "btc" in result.lower() or "bitcoin" in result.lower()
```

### Performance Testing

```python
import time

async def test_agent_performance():
    """Test agent response time and resource usage"""
    agent = SimpleAgent(llm=ChatBot())

    start_time = time.time()
    result = await agent.run("Simple test query")
    execution_time = time.time() - start_time

    # Performance assertions
    assert execution_time < 10.0  # Should respond within 10 seconds
    assert len(result) > 10  # Should provide meaningful response
```

## Deployment Patterns

### Production Configuration

```python
class ProductionAgent(SpoonReactAI):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # Production settings
        self.max_tokens = 4096
        self.temperature = 0.3
        self.timeout = 30

        # Monitoring
        self.metrics = {
            "requests_count": 0,
            "success_count": 0,
            "error_count": 0,
            "avg_response_time": 0
        }

    async def run(self, user_input: str) -> str:
        start_time = time.time()
        self.metrics["requests_count"] += 1

        try:
            result = await super().run(user_input)
            self.metrics["success_count"] += 1
            return result
        except Exception as e:
            self.metrics["error_count"] += 1
            logging.error(f"Agent error: {e}")
            raise
        finally:
            execution_time = time.time() - start_time
            self.update_avg_response_time(execution_time)

    def update_avg_response_time(self, execution_time: float):
        """Update average response time metric"""
        current_avg = self.metrics["avg_response_time"]
        total_requests = self.metrics["requests_count"]

        self.metrics["avg_response_time"] = (
            (current_avg * (total_requests - 1) + execution_time) / total_requests
        )
```

## Best Practices

### 1. Clear System Prompts
- Define specific roles and capabilities
- Include examples of expected behavior
- Set clear boundaries and limitations

### 2. Tool Management
- Select tools that match agent purpose
- Implement proper error handling for tool failures
- Monitor tool usage and performance

### 3. Memory Management
- Implement conversation memory for context
- Use long-term memory for learning
- Clean up memory to prevent bloat

### 4. Error Handling
- Implement graceful degradation
- Provide meaningful error messages
- Use fallback strategies

### 5. Testing
- Unit test individual components
- Integration test with real APIs
- Performance test under load

### 6. Monitoring
- Track key metrics (response time, success rate)
- Log important events and errors
- Monitor resource usage

## Next Steps

- **[Custom Tools](./custom-tools)** - Create specialized tools for your agents
- **[Graph System](./graph-system)** - Build complex workflows
- **[Examples](./examples/basic-agent)** - See complete agent implementations
- **[Web3 Integration](./web3-integration)** - Add blockchain capabilities
