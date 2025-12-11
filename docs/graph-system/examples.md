---
sidebar_position: 7
title: Practical Examples
description: Complete working examples demonstrating LLM-powered Graph patterns
---

# Practical Examples

This page provides complete, runnable examples demonstrating key Graph System patterns with LLM integration. Each example shows real LLM calls, not fixed outputs.

## Example 1: LLM Intent Router

Route user queries to specialized LLM handlers based on intent classification.

```python
"""
LLM Intent Router Example

Demonstrates:
- LLM-based intent classification
- Conditional routing based on LLM output
- Specialized handler nodes for different intents
"""

import asyncio
import json
from typing import TypedDict
from spoon_ai.graph import StateGraph, END
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message


class RouterState(TypedDict):
    query: str
    intent: str
    confidence: float
    result: str


llm = LLMManager()


async def classify_intent(state: RouterState) -> dict:
    """LLM classifies the user's intent with confidence score."""
    response = await llm.chat([
        Message(role="system", content="""You are an intent classifier for a crypto assistant.
        Classify the user query into one of these categories:
        - price: asking about cryptocurrency prices
        - news: asking about crypto news or updates
        - analysis: requesting market analysis or trends
        - general: other questions

        Respond with JSON only: {"intent": "category", "confidence": 0.0-1.0}"""),
        Message(role="user", content=state["query"])
    ])

    try:
        result = json.loads(response.content)
        return {
            "intent": result.get("intent", "general"),
            "confidence": result.get("confidence", 0.5)
        }
    except json.JSONDecodeError:
        return {"intent": "general", "confidence": 0.5}


async def handle_price(state: RouterState) -> dict:
    """LLM generates price-related response."""
    response = await llm.chat([
        Message(role="system", content="""You are a crypto price expert.
        Provide helpful information about cryptocurrency prices.
        Be concise and include relevant data points."""),
        Message(role="user", content=state["query"])
    ])
    return {"result": response.content}


async def handle_news(state: RouterState) -> dict:
    """LLM generates news-related response."""
    response = await llm.chat([
        Message(role="system", content="""You are a crypto news analyst.
        Summarize relevant cryptocurrency news and updates.
        Focus on recent developments and their implications."""),
        Message(role="user", content=state["query"])
    ])
    return {"result": response.content}


async def handle_analysis(state: RouterState) -> dict:
    """LLM generates market analysis."""
    response = await llm.chat([
        Message(role="system", content="""You are a crypto market analyst.
        Provide detailed market analysis including:
        - Current trends
        - Technical indicators
        - Risk assessment
        Be analytical and data-driven."""),
        Message(role="user", content=state["query"])
    ])
    return {"result": response.content}


async def handle_general(state: RouterState) -> dict:
    """LLM handles general questions."""
    response = await llm.chat([
        Message(role="system", content="""You are a helpful crypto assistant.
        Answer questions clearly and accurately.
        If you're unsure, say so."""),
        Message(role="user", content=state["query"])
    ])
    return {"result": response.content}


def route_by_intent(state: RouterState) -> str:
    """Route based on classified intent."""
    return state.get("intent", "general")


# Build the graph
graph = StateGraph(RouterState)

graph.add_node("classify", classify_intent)
graph.add_node("price_handler", handle_price)
graph.add_node("news_handler", handle_news)
graph.add_node("analysis_handler", handle_analysis)
graph.add_node("general_handler", handle_general)

graph.set_entry_point("classify")

graph.add_conditional_edges(
    "classify",
    route_by_intent,
    {
        "price": "price_handler",
        "news": "news_handler",
        "analysis": "analysis_handler",
        "general": "general_handler",
    }
)

graph.add_edge("price_handler", END)
graph.add_edge("news_handler", END)
graph.add_edge("analysis_handler", END)
graph.add_edge("general_handler", END)

app = graph.compile()


async def main():
    """Test the LLM router with different queries."""
    test_queries = [
        "What is the current price of Bitcoin?",
        "Any news about Ethereum updates?",
        "Analyze the SOL market trend",
        "What is a blockchain?",
    ]

    for query in test_queries:
        print(f"\n{'='*60}")
        print(f"Query: {query}")
        print('='*60)

        result = await app.invoke({
            "query": query,
            "intent": "",
            "confidence": 0.0,
            "result": ""
        })

        print(f"Intent: {result['intent']} (confidence: {result['confidence']:.0%})")
        print(f"\nResponse:\n{result['result']}")

    return True


if __name__ == "__main__":
    asyncio.run(main())
```

**Key Learnings:**
- LLM classifies intent and returns structured JSON
- Confidence score enables quality-based routing
- Specialized handlers provide better responses

---

## Example 2: Multi-Step Analysis Pipeline

Chain multiple LLM calls for deep analysis with context accumulation.

```python
"""
Multi-Step LLM Analysis Pipeline

Demonstrates:
- Sequential LLM calls with context building
- State accumulation across nodes
- Progressive refinement of analysis
"""

import asyncio
from typing import TypedDict, List, Dict, Any
from spoon_ai.graph import StateGraph, END
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message


class AnalysisState(TypedDict):
    symbol: str
    user_question: str
    market_context: str
    technical_analysis: str
    risk_assessment: str
    final_recommendation: str
    confidence: float


llm = LLMManager()


async def gather_context(state: AnalysisState) -> dict:
    """LLM gathers market context for the symbol."""
    response = await llm.chat([
        Message(role="system", content="""You are a market context specialist.
        Provide relevant market context for the cryptocurrency including:
        - Current market sentiment
        - Recent price movements
        - Key events affecting the asset
        Be factual and concise."""),
        Message(role="user", content=f"Provide market context for {state['symbol']}")
    ])
    return {"market_context": response.content}


async def analyze_technicals(state: AnalysisState) -> dict:
    """LLM provides technical analysis based on context."""
    response = await llm.chat([
        Message(role="system", content="""You are a technical analyst.
        Based on the market context, provide technical analysis including:
        - Support and resistance levels
        - Key indicators (RSI, MACD trends)
        - Chart patterns
        Be specific and analytical."""),
        Message(role="user", content=f"""
        Symbol: {state['symbol']}
        Market Context: {state['market_context']}

        Provide technical analysis:""")
    ])
    return {"technical_analysis": response.content}


async def assess_risk(state: AnalysisState) -> dict:
    """LLM assesses risk based on all gathered information."""
    response = await llm.chat([
        Message(role="system", content="""You are a risk assessment specialist.
        Based on the context and technical analysis, assess:
        - Risk level (Low/Medium/High)
        - Key risk factors
        - Potential downside scenarios
        Also provide a confidence score (0-100) for your assessment.

        End your response with: Confidence: XX%"""),
        Message(role="user", content=f"""
        Symbol: {state['symbol']}
        Market Context: {state['market_context']}
        Technical Analysis: {state['technical_analysis']}

        Provide risk assessment:""")
    ])

    # Extract confidence from response
    content = response.content
    confidence = 0.7  # default
    if "Confidence:" in content:
        try:
            conf_str = content.split("Confidence:")[-1].strip().replace("%", "")
            confidence = float(conf_str) / 100
        except:
            pass

    return {
        "risk_assessment": content,
        "confidence": confidence
    }


async def generate_recommendation(state: AnalysisState) -> dict:
    """LLM generates final recommendation."""
    response = await llm.chat([
        Message(role="system", content="""You are a senior investment advisor.
        Based on all the analysis, provide a clear recommendation.
        Structure your response as:
        1. Summary recommendation (Buy/Hold/Sell)
        2. Key reasoning points
        3. Suggested actions
        4. Caveats and disclaimers"""),
        Message(role="user", content=f"""
        User Question: {state['user_question']}
        Symbol: {state['symbol']}

        Analysis Summary:
        - Market Context: {state['market_context'][:500]}...
        - Technical: {state['technical_analysis'][:500]}...
        - Risk: {state['risk_assessment'][:500]}...
        - Confidence: {state['confidence']:.0%}

        Generate final recommendation:""")
    ])
    return {"final_recommendation": response.content}


# Build graph: context -> technical -> risk -> recommendation
graph = StateGraph(AnalysisState)

graph.add_node("gather_context", gather_context)
graph.add_node("analyze_technicals", analyze_technicals)
graph.add_node("assess_risk", assess_risk)
graph.add_node("generate_recommendation", generate_recommendation)

graph.set_entry_point("gather_context")
graph.add_edge("gather_context", "analyze_technicals")
graph.add_edge("analyze_technicals", "assess_risk")
graph.add_edge("assess_risk", "generate_recommendation")
graph.add_edge("generate_recommendation", END)

app = graph.compile()


async def main():
    """Run the analysis pipeline."""
    print("="*60)
    print("MULTI-STEP LLM ANALYSIS PIPELINE")
    print("="*60)

    result = await app.invoke({
        "symbol": "BTC",
        "user_question": "Should I buy Bitcoin now?",
        "market_context": "",
        "technical_analysis": "",
        "risk_assessment": "",
        "final_recommendation": "",
        "confidence": 0.0
    })

    print("\n📊 MARKET CONTEXT:")
    print("-"*40)
    print(result["market_context"][:500] + "...")

    print("\n📈 TECHNICAL ANALYSIS:")
    print("-"*40)
    print(result["technical_analysis"][:500] + "...")

    print("\n⚠️ RISK ASSESSMENT:")
    print("-"*40)
    print(result["risk_assessment"][:500] + "...")

    print(f"\n🎯 CONFIDENCE: {result['confidence']:.0%}")

    print("\n💡 FINAL RECOMMENDATION:")
    print("-"*40)
    print(result["final_recommendation"])

    return True


if __name__ == "__main__":
    asyncio.run(main())
```

**Key Learnings:**
- Each LLM node builds on previous outputs
- Context accumulates through the pipeline
- Final recommendation incorporates all analysis

---

## Example 3: LLM-Powered Human-in-the-Loop

Pause for human approval with LLM-generated summaries.

```python
"""
LLM-Powered Human Approval Workflow

Demonstrates:
- LLM generates approval summary
- Interrupt for human decision
- Resume with user input
"""

import asyncio
from typing import TypedDict, Optional, Dict, Any
from spoon_ai.graph import StateGraph, END, interrupt, Command
from spoon_ai.graph import InMemoryCheckpointer
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message


class ApprovalState(TypedDict):
    request_type: str
    request_details: Dict[str, Any]
    llm_summary: str
    risk_level: str
    user_approved: Optional[bool]
    execution_result: str


llm = LLMManager()


async def analyze_request(state: ApprovalState) -> dict:
    """LLM analyzes the request and generates summary."""
    response = await llm.chat([
        Message(role="system", content="""You are a request analyzer.
        Analyze the request and provide:
        1. A clear summary of what will happen
        2. Risk level: LOW, MEDIUM, or HIGH
        3. Key points to consider

        Format your response as:
        SUMMARY: [summary]
        RISK: [LOW/MEDIUM/HIGH]
        CONSIDERATIONS: [key points]"""),
        Message(role="user", content=f"""
        Request Type: {state['request_type']}
        Details: {state['request_details']}

        Analyze this request:""")
    ])

    content = response.content
    risk_level = "MEDIUM"  # default
    if "RISK: LOW" in content:
        risk_level = "LOW"
    elif "RISK: HIGH" in content:
        risk_level = "HIGH"

    return {
        "llm_summary": content,
        "risk_level": risk_level
    }


async def request_approval(state: ApprovalState) -> dict:
    """Interrupt for user approval."""
    if state.get("user_approved") is not None:
        return {}  # Already have decision

    interrupt({
        "type": "approval_required",
        "summary": state["llm_summary"],
        "risk_level": state["risk_level"],
        "request_type": state["request_type"],
        "details": state["request_details"],
        "requires_response": ["user_approved"]
    })
    return {}


async def execute_request(state: ApprovalState) -> dict:
    """LLM generates execution result based on approval."""
    if state.get("user_approved"):
        response = await llm.chat([
            Message(role="system", content="Generate a confirmation message for the executed request."),
            Message(role="user", content=f"""
            Request Type: {state['request_type']}
            Details: {state['request_details']}

            The user approved this request. Generate execution confirmation:""")
        ])
        return {"execution_result": f"✅ APPROVED\n{response.content}"}
    else:
        response = await llm.chat([
            Message(role="system", content="Generate a professional rejection acknowledgment."),
            Message(role="user", content=f"The user rejected the {state['request_type']} request.")
        ])
        return {"execution_result": f"❌ REJECTED\n{response.content}"}


# Build graph with checkpointer
checkpointer = InMemoryCheckpointer()
graph = StateGraph(ApprovalState, checkpointer=checkpointer)

graph.add_node("analyze", analyze_request)
graph.add_node("approve", request_approval)
graph.add_node("execute", execute_request)

graph.set_entry_point("analyze")
graph.add_edge("analyze", "approve")
graph.add_edge("approve", "execute")
graph.add_edge("execute", END)

app = graph.compile()


async def main():
    """Test the approval workflow."""
    test_requests = [
        {"type": "transfer", "details": {"amount": 500, "to": "wallet_abc", "currency": "USDT"}},
        {"type": "trade", "details": {"action": "buy", "amount": 0.5, "symbol": "ETH", "price": "market"}},
    ]

    for i, request in enumerate(test_requests):
        print(f"\n{'#'*60}")
        print(f"Processing Request {i + 1}: {request['type']}")
        print('#'*60)

        session_id = f"approval_session_{i}"

        # Initial invocation - will get LLM analysis then interrupt
        result = await app.invoke(
            {
                "request_type": request["type"],
                "request_details": request["details"],
                "llm_summary": "",
                "risk_level": "",
                "user_approved": None,
                "execution_result": ""
            },
            config={"configurable": {"thread_id": session_id}}
        )

        # Check for interrupt
        if "__interrupt__" in result:
            interrupt_data = result["__interrupt__"][0]["value"]

            print("\n🔔 APPROVAL REQUIRED")
            print("="*50)
            print(f"Risk Level: {interrupt_data['risk_level']}")
            print(f"\nLLM Analysis:\n{interrupt_data['summary']}")
            print("="*50)

            # Simulate user decision based on risk
            approved = interrupt_data["risk_level"] != "HIGH"
            print(f"\nSimulated Decision: {'APPROVED' if approved else 'REJECTED'}")

            # Resume with decision
            result = await app.invoke(
                Command(resume={"user_approved": approved}),
                config={"configurable": {"thread_id": session_id}}
            )

        print(f"\n📋 Final Result:\n{result.get('execution_result', 'Unknown')}")

    return True


if __name__ == "__main__":
    asyncio.run(main())
```

**Key Learnings:**
- LLM generates human-readable summaries for approval
- Risk assessment helps users make informed decisions
- Interrupt/resume pattern enables async human interaction

---

## Example 4: Parallel LLM Analysis

Execute multiple LLM calls in parallel and aggregate results.

```python
"""
Parallel LLM Analysis Example

Demonstrates:
- Multiple LLM calls running concurrently
- Different analytical perspectives
- Result aggregation with LLM
"""

import asyncio
from typing import TypedDict, Dict, Any
from spoon_ai.graph import StateGraph, END
from spoon_ai.graph.config import ParallelGroupConfig
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message


class ParallelAnalysisState(TypedDict):
    symbol: str
    query: str
    bullish_view: str
    bearish_view: str
    neutral_view: str
    aggregated_analysis: str


llm = LLMManager()


async def bullish_analyst(state: ParallelAnalysisState) -> dict:
    """LLM analyzes from bullish perspective."""
    response = await llm.chat([
        Message(role="system", content="""You are a bullish crypto analyst.
        Find and present the positive aspects and upside potential.
        Focus on growth catalysts, adoption metrics, and bullish indicators.
        Be optimistic but grounded in facts."""),
        Message(role="user", content=f"Analyze {state['symbol']}: {state['query']}")
    ])
    return {"bullish_view": response.content}


async def bearish_analyst(state: ParallelAnalysisState) -> dict:
    """LLM analyzes from bearish perspective."""
    response = await llm.chat([
        Message(role="system", content="""You are a bearish crypto analyst.
        Find and present the risks and downside potential.
        Focus on threats, competition, and bearish indicators.
        Be cautious but fair in your assessment."""),
        Message(role="user", content=f"Analyze {state['symbol']}: {state['query']}")
    ])
    return {"bearish_view": response.content}


async def neutral_analyst(state: ParallelAnalysisState) -> dict:
    """LLM provides balanced neutral analysis."""
    response = await llm.chat([
        Message(role="system", content="""You are a neutral crypto analyst.
        Provide balanced analysis considering both sides.
        Focus on factual data and objective metrics.
        Present pros and cons equally."""),
        Message(role="user", content=f"Analyze {state['symbol']}: {state['query']}")
    ])
    return {"neutral_view": response.content}


async def aggregate_analysis(state: ParallelAnalysisState) -> dict:
    """LLM aggregates all perspectives into final analysis."""
    response = await llm.chat([
        Message(role="system", content="""You are a senior analyst aggregating multiple perspectives.
        Synthesize the bullish, bearish, and neutral views into a comprehensive analysis.
        Structure your response:
        1. Executive Summary
        2. Key Bullish Points
        3. Key Bearish Points
        4. Balanced Assessment
        5. Final Verdict"""),
        Message(role="user", content=f"""
        Symbol: {state['symbol']}
        Query: {state['query']}

        BULLISH VIEW:
        {state['bullish_view']}

        BEARISH VIEW:
        {state['bearish_view']}

        NEUTRAL VIEW:
        {state['neutral_view']}

        Synthesize these perspectives:""")
    ])
    return {"aggregated_analysis": response.content}


# Build graph with parallel execution
graph = StateGraph(ParallelAnalysisState)

graph.add_node("bullish", bullish_analyst)
graph.add_node("bearish", bearish_analyst)
graph.add_node("neutral", neutral_analyst)
graph.add_node("aggregate", aggregate_analysis)

# Configure parallel group
graph.add_parallel_group(
    "perspectives",
    nodes=["bullish", "bearish", "neutral"],
    config=ParallelGroupConfig(
        join_strategy="all",
        timeout=60.0,
    )
)

# All parallel nodes converge to aggregate
graph.add_edge("bullish", "aggregate")
graph.add_edge("bearish", "aggregate")
graph.add_edge("neutral", "aggregate")
graph.add_edge("aggregate", END)

graph.set_entry_point("bullish")
app = graph.compile()


async def main():
    """Run parallel LLM analysis."""
    print("="*60)
    print("PARALLEL LLM ANALYSIS")
    print("="*60)

    result = await app.invoke({
        "symbol": "ETH",
        "query": "What's the outlook for Ethereum in the next year?",
        "bullish_view": "",
        "bearish_view": "",
        "neutral_view": "",
        "aggregated_analysis": ""
    })

    print("\n🐂 BULLISH VIEW:")
    print("-"*40)
    print(result["bullish_view"][:400] + "...")

    print("\n🐻 BEARISH VIEW:")
    print("-"*40)
    print(result["bearish_view"][:400] + "...")

    print("\n⚖️ NEUTRAL VIEW:")
    print("-"*40)
    print(result["neutral_view"][:400] + "...")

    print("\n📊 AGGREGATED ANALYSIS:")
    print("-"*40)
    print(result["aggregated_analysis"])

    return True


if __name__ == "__main__":
    asyncio.run(main())
```

**Key Learnings:**
- Multiple LLM calls run in parallel for speed
- Different "personas" provide varied perspectives
- Aggregation LLM synthesizes diverse inputs

---

## Example 5: Conversational Agent with Memory

Multi-turn conversation with context preservation.

```python
"""
Conversational LLM Agent with Memory

Demonstrates:
- Multi-turn conversation state
- Message history accumulation
- Context-aware responses
"""

import asyncio
from typing import TypedDict, List
from spoon_ai.graph import StateGraph, END, InMemoryCheckpointer
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message


class ConversationState(TypedDict):
    messages: List[dict]  # Store as dicts for serialization
    user_input: str
    assistant_response: str
    turn_count: int


llm = LLMManager()


async def process_message(state: ConversationState) -> dict:
    """LLM processes message with full conversation history."""
    messages = state.get("messages", [])
    user_input = state["user_input"]

    # Build conversation with history (convert dicts to Message objects)
    conversation = [
        Message(role="system", content="""You are a helpful crypto trading assistant.
        You have memory of the entire conversation.
        Reference previous messages when relevant.
        Be conversational and helpful.""")
    ] + [
        Message(role=m["role"], content=m["content"]) for m in messages
    ] + [
        Message(role="user", content=user_input)
    ]

    response = await llm.chat(conversation)

    # Update message history (store as dicts for JSON serialization)
    new_messages = messages + [
        {"role": "user", "content": user_input},
        {"role": "assistant", "content": response.content}
    ]

    return {
        "assistant_response": response.content,
        "messages": new_messages,
        "turn_count": state.get("turn_count", 0) + 1
    }


# Build graph
checkpointer = InMemoryCheckpointer()
graph = StateGraph(ConversationState, checkpointer=checkpointer)

graph.add_node("chat", process_message)
graph.set_entry_point("chat")
graph.add_edge("chat", END)

app = graph.compile()


async def main():
    """Simulate multi-turn conversation."""
    print("="*60)
    print("CONVERSATIONAL LLM AGENT WITH MEMORY")
    print("="*60)

    session_id = "conversation_demo"

    # Conversation turns
    turns = [
        "Hi! I'm interested in Bitcoin.",
        "What's its current market situation?",
        "You mentioned Bitcoin earlier - what about Ethereum compared to it?",
        "Based on our conversation, what would you recommend for a beginner?",
    ]

    state = {
        "messages": [],
        "user_input": "",
        "assistant_response": "",
        "turn_count": 0
    }

    for turn in turns:
        print(f"\n👤 User: {turn}")

        state["user_input"] = turn
        result = await app.invoke(
            state,
            config={"configurable": {"thread_id": session_id}}
        )

        print(f"\n🤖 Assistant: {result['assistant_response']}")
        print(f"   [Turn {result['turn_count']}, History: {len(result['messages'])} messages]")

        # Preserve state for next turn
        state = result

    return True


if __name__ == "__main__":
    asyncio.run(main())
```

**Key Learnings:**
- Message history enables context-aware responses
- LLM references previous conversation naturally
- Checkpointing preserves conversation across sessions

---

## Running the Examples

All examples are available in the repository:

```bash
cd spoon-core/examples/docs

# Run individual examples
python llm_router.py           # Example 1: Intent Router
python analysis_pipeline.py    # Example 2: Multi-Step Analysis
python llm_approval.py         # Example 3: Human-in-the-Loop
python parallel_analysis.py    # Example 4: Parallel LLM
python conversational.py       # Example 5: Conversational Agent
```

:::tip API Keys Required
These examples require LLM API keys configured in your environment.
See the [Getting Started](/docs/getting-started) guide for setup.
:::

---

## Next Steps

Explore the full examples in the Examples section:

- **[Intent Graph Demo](../examples/intent-graph-demo.md)** - Advanced routing with LLM intent classification
- **[Graph Crypto Analysis](../examples/graph-crypto-analysis.md)** - Complete market analysis pipeline
