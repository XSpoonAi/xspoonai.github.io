---
sidebar_position: 5
title: Advanced Features
description: Routing strategies, parallel execution, human-in-the-loop, and error handling
---

# Advanced Features

This guide covers production-ready patterns for building robust, scalable graph workflows.

**You will learn:** Routing layers, parallel execution, HITL, retries, and monitoring patterns
**Best for:** Users ready for production hardening and debugging
**Time to complete:** ~8–12 minutes

## Routing Strategies

The Graph System evaluates routing in a priority order, giving you multiple layers of control.

### Routing Priority Stack

```mermaid
flowchart TD
    A[Node Complete] --> B{Explicit Edge?}
    B -->|Yes| C[Follow Static Edge]
    B -->|No| D{Routing Rule Match?}
    D -->|Yes| E[Apply Highest Priority Rule]
    D -->|No| F{Intelligent Router?}
    F -->|Yes| G[Call Router Function]
    F -->|No| H{LLM Router Enabled?}
    H -->|Yes| I[LLM Decides Target]
    H -->|No| J{Default Target?}
    J -->|Yes| K[Use Default]
    J -->|No| L[END]

    style C fill:#c8e6c9
    style E fill:#fff3e0
    style G fill:#e3f2fd
    style I fill:#fce4ec
```

**Pitfall:** Explicit edges are evaluated before routing rules. If you add `add_edge("entry", "fallback")`, routing rules for `entry` will never fire. For a fallback, prefer `graph.config.router.default_target = "fallback"` instead of a static edge from the source node.

### 1. Conditional Edges (Most Common)

Route based on state inspection:

```python
import asyncio
from typing import TypedDict

from spoon_ai.graph import END, StateGraph


class AnalysisState(TypedDict, total=False):
    confidence: float
    output: str


async def analyze(state: AnalysisState) -> dict:
    # Pretend we ran an analysis that produced a confidence score.
    return {"confidence": float(state.get("confidence", 0.0) or 0.0)}


async def generate_recommendation(state: AnalysisState) -> dict:
    return {"output": "generated recommendation"}


async def request_clarification(state: AnalysisState) -> dict:
    return {"output": "requested clarification"}


async def escalate_to_human(state: AnalysisState) -> dict:
    return {"output": "escalated to human"}


def route_by_confidence(state: AnalysisState) -> str:
    """Route based on analysis confidence level."""
    confidence = state.get("confidence", 0.0) or 0.0
    if confidence >= 0.8:
        return "high_confidence"
    if confidence >= 0.5:
        return "medium_confidence"
    return "low_confidence"


graph = StateGraph(AnalysisState)
graph.add_node("analyze", analyze)
graph.add_node("generate_recommendation", generate_recommendation)
graph.add_node("request_clarification", request_clarification)
graph.add_node("escalate_to_human", escalate_to_human)
graph.set_entry_point("analyze")

graph.add_conditional_edges(
    "analyze",
    route_by_confidence,
    {
        "high_confidence": "generate_recommendation",
        "medium_confidence": "request_clarification",
        "low_confidence": "escalate_to_human",
    },
)

graph.add_edge("generate_recommendation", END)
graph.add_edge("request_clarification", END)
graph.add_edge("escalate_to_human", END)

app = graph.compile()


async def main() -> None:
    for confidence in [0.9, 0.6, 0.2]:
        result = await app.invoke({"confidence": confidence})
        print(confidence, "->", result["output"])


if __name__ == "__main__":
    asyncio.run(main())
```

### 2. Routing Rules (Pattern-Based)

For pattern matching with priorities:

```python
import asyncio
from typing import TypedDict

from spoon_ai.graph import END, StateGraph


class RoutingState(TypedDict, total=False):
    user_query: str
    category: str
    output: str


async def entry(state: RoutingState) -> dict:
    # No explicit edge from this node; routing rules decide the next node.
    return {}


async def priority_handler(state: RoutingState) -> dict:
    return {"output": f"Priority: {state.get('user_query', '')}"}


async def trading_handler(state: RoutingState) -> dict:
    return {"output": f"Trading: {state.get('user_query', '')}"}


async def general_handler(state: RoutingState) -> dict:
    return {"output": f"Fallback: {state.get('user_query', '')}"}


graph = StateGraph(RoutingState)
graph.add_node("entry", entry)
graph.add_node("priority_handler", priority_handler)
graph.add_node("trading_handler", trading_handler)
graph.add_node("general_handler", general_handler)
graph.set_entry_point("entry")

# Priority 10 - Specific patterns first
graph.add_routing_rule(
    source_node="entry",
    condition=lambda state, query: "urgent" in query,
    target_node="priority_handler",
    priority=10,
)

# Priority 5 - Category-based
graph.add_routing_rule(
    source_node="entry",
    condition=lambda state, query: state.get("category") == "trading",
    target_node="trading_handler",
    priority=5,
)

# Priority 1 - Default fallback
graph.add_routing_rule(
    source_node="entry",
    condition=lambda state, query: True,  # Always matches
    target_node="general_handler",
    priority=1,
)

graph.add_edge("priority_handler", END)
graph.add_edge("trading_handler", END)
graph.add_edge("general_handler", END)

app = graph.compile()


async def main() -> None:
    for state in [
        {"user_query": "urgent: price drop", "category": ""},
        {"user_query": "btc outlook", "category": "trading"},
        {"user_query": "hello", "category": ""},
    ]:
        result = await app.invoke(state)
        print(result["output"])


if __name__ == "__main__":
    asyncio.run(main())
```

### 3. Intelligent Router (Custom Logic)

For complex routing logic:

```python
import asyncio
from typing import List, TypedDict

from spoon_ai.graph import END, StateGraph


class AnalysisState(TypedDict, total=False):
    user_query: str
    intent: str
    confidence: float
    routing_history: List[str]
    output: str


async def analyze(state: AnalysisState) -> dict:
    history = list(state.get("routing_history") or [])
    history.append("analyze")
    return {"routing_history": history}


async def human_review(state: AnalysisState) -> dict:
    return {"output": "needs human review"}


async def execute_trade(state: AnalysisState) -> dict:
    return {"output": "executed trade (stub)"}


async def general_handler(state: AnalysisState) -> dict:
    return {"output": "general handler"}


async def intelligent_router(state: AnalysisState, query: str) -> str:
    """Custom routing logic."""
    intent = state.get("intent", "")
    confidence = state.get("confidence", 0.0) or 0.0
    history = state.get("routing_history", []) or []

    # Avoid loops
    if "analyze" in history and intent == "retry":
        return "human_review"

    if intent == "trading" and confidence > 0.9:
        return "execute_trade"

    return "general_handler"


graph = StateGraph(AnalysisState)
graph.add_node("analyze", analyze)
graph.add_node("human_review", human_review)
graph.add_node("execute_trade", execute_trade)
graph.add_node("general_handler", general_handler)
graph.set_entry_point("analyze")
graph.set_intelligent_router(intelligent_router)

graph.add_edge("human_review", END)
graph.add_edge("execute_trade", END)
graph.add_edge("general_handler", END)

app = graph.compile()


async def main() -> None:
    result = await app.invoke({"user_query": "trade", "intent": "trading", "confidence": 0.95, "routing_history": []})
    print(result["output"])


if __name__ == "__main__":
    asyncio.run(main())
```

### 4. LLM-Powered Routing (Most Flexible)

Let an LLM decide the next step:

```python
from spoon_ai.graph.config import GraphConfig, RouterConfig
from typing import TypedDict

from spoon_ai.graph import StateGraph

config = GraphConfig(
    router=RouterConfig(
        allow_llm=True,
        llm_timeout=8.0,
        default_target="fallback_handler",
        allowed_targets=["price_handler", "trade_handler", "analysis_handler", "fallback_handler"],
    )
)

class AnalysisState(TypedDict, total=False):
    user_query: str
    output: str

graph = StateGraph(AnalysisState)
graph.config = config

# Or enable after creation
graph.enable_llm_routing(config={
    "model": "gpt-4",
    "temperature": 0.1,
    "max_tokens": 50,
})
```

### Routing Decision Matrix

| Routing Type | Complexity | Latency | Use Case |
|--------------|------------|---------|----------|
| Static Edge | None | ~0ms | Linear workflows |
| Conditional Edge | Low | ~0ms | State-based branching |
| Routing Rules | Medium | ~0ms | Pattern matching |
| Intelligent Router | Medium | ~1ms | Custom business logic |
| LLM Router | High | ~500ms | Natural language understanding |

---

## Parallel Execution

Execute multiple nodes concurrently for better performance.

### Basic Parallel Group

```python
from spoon_ai.graph.config import ParallelGroupConfig
from typing import Any, Dict, TypedDict

from spoon_ai.graph import END, StateGraph

class MarketState(TypedDict, total=False):
    symbol: str
    binance: Dict[str, Any]
    coinbase: Dict[str, Any]
    kraken: Dict[str, Any]
    output: str


async def fetch_binance(state: MarketState) -> dict:
    return {"binance": {"price": 45000}}


async def fetch_coinbase(state: MarketState) -> dict:
    return {"coinbase": {"price": 45050}}


async def fetch_kraken(state: MarketState) -> dict:
    return {"kraken": {"price": 44980}}


async def aggregate(state: MarketState) -> dict:
    prices = [state.get("binance", {}).get("price"), state.get("coinbase", {}).get("price"), state.get("kraken", {}).get("price")]
    prices = [p for p in prices if isinstance(p, (int, float))]
    avg = sum(prices) / len(prices) if prices else 0.0
    return {"output": f"avg price: {avg:.2f}"}


graph = StateGraph(MarketState)
graph.add_node("fetch_binance", fetch_binance)
graph.add_node("fetch_coinbase", fetch_coinbase)
graph.add_node("fetch_kraken", fetch_kraken)
graph.add_node("aggregate", aggregate)

graph.add_parallel_group(
    "market_data_fetch",
    nodes=["fetch_binance", "fetch_coinbase", "fetch_kraken"],
    config=ParallelGroupConfig(join_strategy="all", timeout=15.0),
)

graph.set_entry_point("fetch_binance")
graph.add_edge("fetch_binance", "aggregate")
graph.add_edge("fetch_coinbase", "aggregate")
graph.add_edge("fetch_kraken", "aggregate")
graph.add_edge("aggregate", END)

app = graph.compile()
```

### Join Strategies

| Strategy | Behavior | Use Case |
|----------|----------|----------|
| `"all"` | Wait for all nodes to complete | Need complete data from all sources |
| `"any"` | Return when first node completes | Redundant sources, want fastest |
| `"quorum"` | Wait for majority (configurable) | Fault-tolerant consensus |

```python
# These are standalone config examples.
from spoon_ai.graph.config import ParallelGroupConfig

# Quorum: Wait for 2 out of 3 (66%)
config = ParallelGroupConfig(
    join_strategy="quorum",
    quorum=0.66,  # 66% = 2 of 3 nodes
    timeout=15.0,
)

# Any: Return on first success
config = ParallelGroupConfig(
    join_strategy="any",
    timeout=10.0,
)
```

### Error Strategies

| Strategy | Behavior | Use Case |
|----------|----------|----------|
| `"fail_fast"` | Cancel all, raise exception | Critical path, must all succeed |
| `"collect_errors"` | Continue, store errors in `__errors__` | Best-effort, report issues |
| `"ignore_errors"` | Continue, discard failures | Non-critical enrichment |

```python
from spoon_ai.graph.config import ParallelGroupConfig, ParallelRetryPolicy

config = ParallelGroupConfig(
    join_strategy="quorum",
    quorum=0.66,
    timeout=30.0,

    # Error handling
    error_strategy="collect_errors",

    # Retry policy for individual nodes
    retry_policy=ParallelRetryPolicy(
        max_retries=2,
        backoff_initial=0.5,
        backoff_multiplier=2.0,
        backoff_max=5.0,
    ),

    # Resource controls
    max_in_flight=10,
    rate_limit_per_second=5.0,

    # Circuit breaker
    circuit_breaker_threshold=5,
    circuit_breaker_cooldown=30.0,
)
```

### Complete Parallel Example

```python
import asyncio
from typing import TypedDict, Dict, Any, List
from spoon_ai.graph import StateGraph, END
from spoon_ai.graph.config import ParallelGroupConfig

class MultiSourceState(TypedDict):
    symbol: str
    source_a_data: Dict[str, Any]
    source_b_data: Dict[str, Any]
    source_c_data: Dict[str, Any]
    aggregated_price: float
    errors: List[str]

async def fetch_source_a(state: MultiSourceState) -> dict:
    await asyncio.sleep(0.1)  # Simulate API call
    return {"source_a_data": {"price": 45000, "source": "A"}}

async def fetch_source_b(state: MultiSourceState) -> dict:
    await asyncio.sleep(0.2)
    return {"source_b_data": {"price": 45050, "source": "B"}}

async def fetch_source_c(state: MultiSourceState) -> dict:
    await asyncio.sleep(0.15)
    # Simulate occasional failure
    if state.get("symbol") == "FAIL":
        raise Exception("Source C unavailable")
    return {"source_c_data": {"price": 44980, "source": "C"}}

async def aggregate_prices(state: MultiSourceState) -> dict:
    prices = []
    for key in ["source_a_data", "source_b_data", "source_c_data"]:
        data = state.get(key, {})
        if data.get("price"):
            prices.append(data["price"])

    avg = sum(prices) / len(prices) if prices else 0
    return {"aggregated_price": avg}

# Build graph
graph = StateGraph(MultiSourceState)

graph.add_node("fetch_a", fetch_source_a)
graph.add_node("fetch_b", fetch_source_b)
graph.add_node("fetch_c", fetch_source_c)
graph.add_node("aggregate", aggregate_prices)

# Configure parallel group
graph.add_parallel_group(
    "data_fetch",
    nodes=["fetch_a", "fetch_b", "fetch_c"],
    config=ParallelGroupConfig(
        join_strategy="quorum",
        quorum=0.66,
        timeout=5.0,
        error_strategy="collect_errors",
    )
)

# Edges
graph.add_edge("fetch_a", "aggregate")
graph.add_edge("fetch_b", "aggregate")
graph.add_edge("fetch_c", "aggregate")
graph.add_edge("aggregate", END)

graph.set_entry_point("fetch_a")
app = graph.compile()
```

---

## Human-in-the-Loop

Interrupt execution to collect user input, then resume.

### Basic Interrupt Pattern

```python
from typing import Any, Dict, TypedDict

from spoon_ai.graph import interrupt


class TradeState(TypedDict, total=False):
    trade_details: Dict[str, Any]
    user_confirmed: bool
    trade_executed: bool
    execution_time: str


async def confirm_trade_node(state: TradeState) -> dict:
    """Node that requires user confirmation."""
    trade_details = state.get("trade_details", {})

    # Check if already confirmed
    if not state.get("user_confirmed"):
        # Interrupt execution and wait for user
        interrupt({
            "type": "confirmation_required",
            "question": f"Execute {trade_details['action']} {trade_details['amount']} {trade_details['symbol']}?",
            "trade_details": trade_details,
        })

    # This runs after resume with confirmation
    return {
        "trade_executed": True,
        "execution_time": "2024-01-15T10:30:00Z"
    }
```

### Handling Interrupts

```python
import asyncio

from typing import Any, Dict, TypedDict

from spoon_ai.graph import END, StateGraph, interrupt


async def main() -> None:
    class TradeState(TypedDict, total=False):
        trade_details: Dict[str, Any]
        user_confirmed: bool
        trade_executed: bool

    async def confirm_trade(state: TradeState) -> dict:
        details = state.get("trade_details", {})
        if not state.get("user_confirmed"):
            interrupt(
                {
                    "type": "confirmation_required",
                    "question": f"Execute {details.get('action')} {details.get('amount')} {details.get('symbol')}?",
                    "trade_details": details,
                }
            )
        return {}

    async def execute_trade(state: TradeState) -> dict:
        return {"trade_executed": True}

    graph = StateGraph(TradeState)
    graph.add_node("confirm_trade", confirm_trade)
    graph.add_node("execute_trade", execute_trade)
    graph.set_entry_point("confirm_trade")
    graph.add_edge("confirm_trade", "execute_trade")
    graph.add_edge("execute_trade", END)
    app = graph.compile()

    config = {"configurable": {"thread_id": "trade_session"}}
    initial_state = {
        "trade_details": {"action": "buy", "amount": 0.1, "symbol": "BTC"},
        "user_confirmed": False,
        "trade_executed": False,
    }

    # First execution - will interrupt
    result = await app.invoke(initial_state, config=config)
    if "__interrupt__" in result:
        interrupt_info = result["__interrupt__"][0]
        print(f"Question: {interrupt_info['value']['question']}")

        # In a real app, collect this from UI/CLI/API; keep docs non-interactive.
        user_confirmed = True

        # \"Resume\" by invoking again with updated state (this graph re-checks at the entry node).
        resume_state = {**initial_state, "user_confirmed": user_confirmed}
        result = await app.invoke(resume_state, config=config)

    print(f"Final result: {result}")


if __name__ == "__main__":
    asyncio.run(main())
```

### Multi-Step Approval Workflow

```python
import asyncio
from typing import TypedDict

from spoon_ai.graph import END, StateGraph, interrupt


class ApprovalState(TypedDict, total=False):
    request: str
    manager_approved: bool
    compliance_approved: bool
    final_status: str


async def request_manager_approval(state: ApprovalState) -> dict:
    if not state.get("manager_approved"):
        interrupt({"type": "manager_approval", "request": state.get("request", ""), "approver_role": "manager"})
    return {}


async def request_compliance_approval(state: ApprovalState) -> dict:
    if not state.get("compliance_approved"):
        interrupt({"type": "compliance_approval", "request": state.get("request", ""), "approver_role": "compliance"})
    return {}


async def execute_request(state: ApprovalState) -> dict:
    if state.get("manager_approved") and state.get("compliance_approved"):
        return {"final_status": "approved_and_executed"}
    return {"final_status": "rejected"}


# Wire up: manager → compliance → execute
graph = StateGraph(ApprovalState)
graph.add_node("manager", request_manager_approval)
graph.add_node("compliance", request_compliance_approval)
graph.add_node("execute", execute_request)
graph.set_entry_point("manager")
graph.add_edge("manager", "compliance")
graph.add_edge("compliance", "execute")
graph.add_edge("execute", END)
app = graph.compile()


async def main() -> None:
    config = {"configurable": {"thread_id": "approval_session"}}

    # 1) manager approval interrupt
    state = {"request": "approve transfer", "manager_approved": False, "compliance_approved": False}
    result = await app.invoke(state, config=config)
    print("step1:", result.get("__interrupt__"))

    # 2) compliance approval interrupt
    state = {**state, "manager_approved": True}
    result = await app.invoke(state, config=config)
    print("step2:", result.get("__interrupt__"))

    # 3) fully approved
    state = {**state, "compliance_approved": True}
    result = await app.invoke(state, config=config)
    print("final:", result.get("final_status"))


if __name__ == "__main__":
    asyncio.run(main())
```

### Interrupt Best Practices

:::tip Guidelines
1. **Always check state first** - Don't interrupt if already confirmed
2. **Include context** - Provide all info needed for decision
3. **Use thread IDs** - Required for resume functionality
4. **Handle timeout** - What if user never responds?
5. **Log interrupts** - Track for audit purposes
:::

---

## Error Handling

Production-ready error handling patterns.

### Retry Policies

```python
from spoon_ai.graph.config import ParallelRetryPolicy

retry_policy = ParallelRetryPolicy(
    max_retries=3,              # Try up to 3 times
    backoff_initial=0.5,        # Start with 0.5s delay
    backoff_multiplier=2.0,     # Double each time: 0.5, 1, 2
    backoff_max=10.0,           # Cap at 10 seconds
)
```

### Circuit Breakers

Prevent cascading failures:

```python
from spoon_ai.graph.config import ParallelGroupConfig

config = ParallelGroupConfig(
    # After 5 failures, disable the group
    circuit_breaker_threshold=5,

    # Re-enable after 30 seconds
    circuit_breaker_cooldown=30.0,
)
```

### Error Handling in Nodes

```python
import asyncio
from typing import TypedDict


class MyState(TypedDict, total=False):
    symbol: str


async def external_api_call(symbol: str) -> dict:
    # Minimal stub for docs. Replace with a real client call.
    if symbol == "TIMEOUT":
        raise TimeoutError("simulated timeout")
    if symbol == "DOWN":
        raise ConnectionError("simulated connection error")
    return {"symbol": symbol, "price": 123.45}


async def robust_api_node(state: MyState) -> dict:
    """Node with comprehensive error handling."""
    import logging
    logger = logging.getLogger(__name__)

    try:
        result = await external_api_call(state["symbol"])
        return {
            "data": result,
            "error": None,
            "status": "success"
        }

    except ConnectionError as e:
        logger.warning(f"Connection failed for {state['symbol']}: {e}")
        return {
            "data": None,
            "error": f"Connection error: {e}",
            "status": "retry_suggested"
        }

    except TimeoutError as e:
        logger.error(f"Timeout for {state['symbol']}: {e}")
        return {
            "data": None,
            "error": f"Timeout: {e}",
            "status": "timeout"
        }

    except Exception as e:
        logger.exception(f"Unexpected error for {state['symbol']}")
        return {
            "data": None,
            "error": f"Unexpected: {e}",
            "status": "failed"
        }


async def main() -> None:
    for symbol in ["BTC", "DOWN", "TIMEOUT"]:
        result = await robust_api_node({"symbol": symbol})
        print(symbol, "->", result["status"])


if __name__ == "__main__":
    asyncio.run(main())
```

### State Validation

```python
import asyncio
from typing import TypedDict

from spoon_ai.graph import END, StateGraph
from spoon_ai.graph.config import GraphConfig

class MyState(TypedDict, total=False):
    user_id: str
    amount: float
    output: str


def validate_state(state: dict) -> None:
    """Raise exception if state is invalid."""
    if not state.get("user_id"):
        raise ValueError("user_id is required")

    if state.get("amount", 0) < 0:
        raise ValueError("amount cannot be negative")

config = GraphConfig(
    state_validators=[validate_state],
    max_iterations=100,
)

graph = StateGraph(MyState)
graph.config = config


async def process(state: MyState) -> dict:
    return {"output": "ok"}


graph.add_node("process", process)
graph.set_entry_point("process")
graph.add_edge("process", END)
app = graph.compile()


async def main() -> None:
    try:
        await app.invoke({"amount": 1.0})  # missing user_id
    except Exception as e:
        print("validation failed:", str(e)[:80])

    result = await app.invoke({"user_id": "user_123", "amount": 1.0})
    print(result["output"])


if __name__ == "__main__":
    asyncio.run(main())
```

---

## Resource Controls

Manage system resources and prevent overload.

### Rate Limiting

```python
from spoon_ai.graph.config import ParallelGroupConfig

config = ParallelGroupConfig(
    rate_limit_per_second=10.0,  # Max 10 requests/second
    max_in_flight=5,            # Max 5 concurrent tasks
)
```

### Execution Limits

```python
from spoon_ai.graph.config import GraphConfig

config = GraphConfig(
    max_iterations=100,  # Prevent infinite loops
)
```

### Timeout Configuration

```python
from spoon_ai.graph.config import ParallelGroupConfig, RouterConfig

config = ParallelGroupConfig(
    timeout=30.0,  # 30 second timeout for parallel group
)

# Or for LLM routing
router_config = RouterConfig(
    llm_timeout=8.0,  # 8 second timeout for LLM calls
)
```

---

## Configuration Reference

### GraphConfig

```python
from spoon_ai.graph.config import GraphConfig, RouterConfig

config = GraphConfig(
    # Execution limits
    max_iterations=100,

    # Router configuration
    router=RouterConfig(
        allow_llm=False,
        allowed_targets=None,        # None = all nodes allowed
        default_target=None,         # Fallback when no route matches
        llm_timeout=8.0,
        enable_fallback_to_default=True,
    ),

    # Validation
    state_validators=[],

    # Pre-configured parallel groups
    parallel_groups={},
)
```

### ParallelGroupConfig

```python
from spoon_ai.graph.config import ParallelGroupConfig, ParallelRetryPolicy

config = ParallelGroupConfig(
    # Join behavior
    join_strategy="all",        # "all", "any", "quorum"
    quorum=None,                # For quorum: 0.0-1.0 or int

    # Timing
    timeout=None,               # None = unlimited

    # Error handling
    error_strategy="fail_fast", # "fail_fast", "collect_errors", "ignore_errors"

    # Retry
    retry_policy=ParallelRetryPolicy(
        max_retries=0,
        backoff_initial=0.5,
        backoff_multiplier=2.0,
        backoff_max=10.0,
    ),

    # Resource controls
    max_in_flight=None,
    rate_limit_per_second=None,

    # Circuit breaker
    circuit_breaker_threshold=None,
    circuit_breaker_cooldown=30.0,
)
```

---

## Next Steps

Learn how to integrate your graphs with the broader SpoonOS ecosystem:

**[Integration & Extensions →](./integration.md)** - GraphAgent, tools, MCP protocol, memory management
