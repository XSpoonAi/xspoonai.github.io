# Graph System

The Graph System in SpoonOS enables complex, multi-step workflows through structured node-based execution patterns.

## What is the Graph System?

The Graph System allows you to:
- **Define** complex workflows as connected nodes
- **Execute** parallel and sequential operations
- **Handle** conditional logic and branching
- **Manage** state across workflow steps

## Graph vs ReAct Agents

### ReAct Agents
- Linear thought-action-observation loop
- Simple, single-step reasoning
- Lower computational overhead
- Best for straightforward tasks

### Graph Agents
- Structured workflow with nodes and edges
- Complex multi-step processes
- Parallel execution capabilities
- Better error handling and recovery

## Basic Graph Structure

### Creating a Simple Graph

```python
from spoon_ai.graph import GraphBuilder, Node, Edge

# Create graph builder
builder = GraphBuilder()

# Define nodes
start_node = Node(
    name="start",
    action="initialize_task",
    description="Initialize the workflow"
)

process_node = Node(
    name="process",
    action="process_data",
    description="Process the input data"
)

end_node = Node(
    name="end",
    action="finalize_result",
    description="Finalize and return result"
)

# Connect nodes with edges
builder.add_node(start_node)
builder.add_node(process_node)
builder.add_node(end_node)

builder.add_edge(Edge("start", "process"))
builder.add_edge(Edge("process", "end"))

# Build the graph
graph = builder.build()
```

### Graph Execution

```python
from spoon_ai.agents import GraphAgent

# Create graph agent
agent = GraphAgent(
    graph=graph,
    llm=ChatBot(model_name="gpt-4.1", llm_provider="openai")
)

# Execute workflow
result = await agent.execute("Analyze market data and generate report")
```

## Advanced Graph Patterns

### Conditional Branching

```python
# Define conditional node
condition_node = Node(
    name="check_condition",
    action="evaluate_condition",
    condition=lambda state: state.get("value", 0) > 100
)

# Add conditional edges
builder.add_edge(Edge("check_condition", "high_value_path", condition=True))
builder.add_edge(Edge("check_condition", "low_value_path", condition=False))
```

### Parallel Execution

```python
# Create parallel branches
parallel_nodes = [
    Node("fetch_data_a", "get_market_data"),
    Node("fetch_data_b", "get_social_data"),
    Node("fetch_data_c", "get_news_data")
]

# All branches converge at merge node
merge_node = Node("merge", "combine_data")

for node in parallel_nodes:
    builder.add_node(node)
    builder.add_edge(Edge("start", node.name))
    builder.add_edge(Edge(node.name, "merge"))
```

### Loop Structures

```python
# Create loop with exit condition
loop_node = Node(
    name="process_item",
    action="process_next_item",
    loop_condition=lambda state: len(state.get("items", [])) > 0
)

# Loop back to itself or exit
builder.add_edge(Edge("process_item", "process_item", condition="has_more_items"))
builder.add_edge(Edge("process_item", "complete", condition="no_more_items"))
```

## Graph Node Types

### Action Nodes

```python
class ActionNode(Node):
    async def execute(self, state: dict, context: dict) -> dict:
        # Perform specific action
        result = await self.perform_action(state)
        return {"result": result, "status": "completed"}
```

### Tool Nodes

```python
class ToolNode(Node):
    def __init__(self, tool_name: str, parameters: dict):
        self.tool_name = tool_name
        self.parameters = parameters
    
    async def execute(self, state: dict, context: dict) -> dict:
        tool_manager = context["tool_manager"]
        result = await tool_manager.execute_tool(self.tool_name, self.parameters)
        return {"tool_result": result}
```

### Decision Nodes

```python
class DecisionNode(Node):
    def __init__(self, condition_func: callable):
        self.condition_func = condition_func
    
    async def execute(self, state: dict, context: dict) -> dict:
        decision = self.condition_func(state)
        return {"decision": decision, "next_path": "path_a" if decision else "path_b"}
```

## State Management

### Graph State

```python
class GraphState:
    def __init__(self):
        self.data = {}
        self.history = []
        self.current_node = None
    
    def update(self, key: str, value: any):
        self.data[key] = value
        self.history.append({"action": "update", "key": key, "value": value})
    
    def get(self, key: str, default=None):
        return self.data.get(key, default)
```

### State Persistence

```python
# Save state between executions
class PersistentGraphState(GraphState):
    def save_to_file(self, filepath: str):
        with open(filepath, 'w') as f:
            json.dump(self.data, f)
    
    def load_from_file(self, filepath: str):
        with open(filepath, 'r') as f:
            self.data = json.load(f)
```

## Error Handling in Graphs

### Node-Level Error Handling

```python
class RobustNode(Node):
    async def execute(self, state: dict, context: dict) -> dict:
        try:
            return await self.perform_action(state)
        except Exception as e:
            return {
                "error": str(e),
                "status": "failed",
                "retry_count": state.get("retry_count", 0) + 1
            }
```

### Graph-Level Recovery

```python
class RecoveryGraph(GraphBuilder):
    def add_error_handling(self, node_name: str, recovery_node: str):
        # Add error recovery path
        self.add_edge(Edge(
            node_name, 
            recovery_node, 
            condition=lambda state: state.get("status") == "failed"
        ))
```

## Real-World Examples

### Trading Workflow

```python
# Create trading analysis workflow
trading_graph = GraphBuilder()

# Analysis nodes
trading_graph.add_node(Node("fetch_prices", "get_current_prices"))
trading_graph.add_node(Node("technical_analysis", "analyze_indicators"))
trading_graph.add_node(Node("sentiment_analysis", "analyze_social_sentiment"))
trading_graph.add_node(Node("risk_assessment", "calculate_risk"))
trading_graph.add_node(Node("make_decision", "trading_decision"))
trading_graph.add_node(Node("execute_trade", "place_order"))

# Connect workflow
trading_graph.add_edge(Edge("fetch_prices", "technical_analysis"))
trading_graph.add_edge(Edge("technical_analysis", "sentiment_analysis"))
trading_graph.add_edge(Edge("sentiment_analysis", "risk_assessment"))
trading_graph.add_edge(Edge("risk_assessment", "make_decision"))
trading_graph.add_edge(Edge("make_decision", "execute_trade", 
                           condition=lambda s: s.get("decision") == "buy"))
```

### Data Processing Pipeline

```python
# Create data processing workflow
pipeline_graph = GraphBuilder()

# Processing stages
pipeline_graph.add_node(Node("ingest", "load_raw_data"))
pipeline_graph.add_node(Node("validate", "validate_data_quality"))
pipeline_graph.add_node(Node("clean", "clean_and_normalize"))
pipeline_graph.add_node(Node("transform", "apply_transformations"))
pipeline_graph.add_node(Node("analyze", "perform_analysis"))
pipeline_graph.add_node(Node("store", "save_results"))

# Linear pipeline with error handling
stages = ["ingest", "validate", "clean", "transform", "analyze", "store"]
for i in range(len(stages) - 1):
    pipeline_graph.add_edge(Edge(stages[i], stages[i + 1]))
    # Add error recovery
    pipeline_graph.add_edge(Edge(stages[i], "error_handler", 
                                condition=lambda s: s.get("status") == "error"))
```

## Performance Optimization

### Parallel Execution

```python
# Optimize with parallel execution
async def execute_parallel_nodes(nodes: list, state: dict, context: dict):
    tasks = [node.execute(state, context) for node in nodes]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    return results
```

### Caching

```python
# Cache node results
class CachedNode(Node):
    def __init__(self, *args, cache_ttl=300, **kwargs):
        super().__init__(*args, **kwargs)
        self.cache = {}
        self.cache_ttl = cache_ttl
    
    async def execute(self, state: dict, context: dict) -> dict:
        cache_key = self.generate_cache_key(state)
        
        if cache_key in self.cache:
            cached_result, timestamp = self.cache[cache_key]
            if time.time() - timestamp < self.cache_ttl:
                return cached_result
        
        result = await super().execute(state, context)
        self.cache[cache_key] = (result, time.time())
        return result
```

## Monitoring and Debugging

### Graph Execution Monitoring

```python
class MonitoredGraph:
    def __init__(self, graph):
        self.graph = graph
        self.execution_log = []
    
    async def execute_with_monitoring(self, input_data):
        start_time = time.time()
        
        try:
            result = await self.graph.execute(input_data)
            self.log_execution("success", time.time() - start_time, result)
            return result
        except Exception as e:
            self.log_execution("error", time.time() - start_time, str(e))
            raise
    
    def log_execution(self, status, duration, result):
        self.execution_log.append({
            "timestamp": time.time(),
            "status": status,
            "duration": duration,
            "result": result
        })
```

### Visual Graph Representation

```python
# Generate graph visualization
def visualize_graph(graph):
    import matplotlib.pyplot as plt
    import networkx as nx
    
    G = nx.DiGraph()
    
    # Add nodes and edges
    for node in graph.nodes:
        G.add_node(node.name)
    
    for edge in graph.edges:
        G.add_edge(edge.source, edge.target)
    
    # Draw graph
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, node_color='lightblue', 
            node_size=1500, font_size=10, arrows=True)
    plt.show()
```

## Best Practices

### Graph Design
- **Keep nodes focused** - Each node should have a single responsibility
- **Plan for errors** - Include error handling and recovery paths
- **Use meaningful names** - Node and edge names should be descriptive
- **Document workflows** - Provide clear documentation for complex graphs

### Performance
- **Identify parallelizable operations** - Use parallel execution where possible
- **Cache expensive operations** - Cache results of time-consuming nodes
- **Monitor execution** - Track performance and identify bottlenecks

### Maintainability
- **Modular design** - Create reusable node types
- **Version control** - Track changes to graph definitions
- **Testing** - Test individual nodes and complete workflows

## Next Steps

- [Agents](./agents.md) - Learn how agents use graphs
- [Tools](./tools.md) - Understand tool integration in graphs
- [Graph Workflow Examples](../examples/graph-workflows.md) - See practical implementations