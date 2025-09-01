---
sidebar_position: 4
---

# Graph Workflows Example

This example demonstrates how to build complex, multi-step workflows using SpoonOS's graph system for sophisticated AI agent orchestration.

## Overview

We'll build a comprehensive crypto analysis workflow that:
- Fetches market data from multiple sources
- Performs technical and fundamental analysis
- Generates trading signals
- Creates detailed reports
- Manages risk assessment

## Complete Graph Workflow

```python
import asyncio
from datetime import datetime
from typing import Dict, Any, List
from spoon_ai.graph import StateGraph, NodeContext, NodeResult
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager
from spoon_toolkits.crypto import CryptoPowerDataCEXTool

# Define the workflow state
class CryptoAnalysisState:
    # Input parameters
    symbols: List[str] = []
    analysis_type: str = "comprehensive"  # "quick", "comprehensive", "deep"
    risk_tolerance: str = "medium"  # "low", "medium", "high"
    
    # Market data
    market_data: Dict[str, Any] = {}
    price_history: Dict[str, List] = {}
    volume_data: Dict[str, List] = {}
    
    # Analysis results
    technical_analysis: Dict[str, Any] = {}
    fundamental_analysis: Dict[str, Any] = {}
    sentiment_analysis: Dict[str, Any] = {}
    
    # Signals and recommendations
    trading_signals: Dict[str, str] = {}
    risk_assessment: Dict[str, Any] = {}
    portfolio_recommendations: List[Dict] = []
    
    # Final output
    analysis_report: str = ""
    confidence_score: float = 0.0
    execution_metadata: Dict[str, Any] = {}

class CryptoAnalysisWorkflow:
    def __init__(self):
        # Initialize LLM and tools
        self.llm = ChatBot(model_name="gpt-4.1", temperature=0.3)
        self.crypto_tool = CryptoPowerDataCEXTool()
        
        # Create the graph
        self.graph = StateGraph(CryptoAnalysisState)
        self._build_workflow()
    
    def _build_workflow(self):
        """Build the complete analysis workflow"""
        
        # Data collection nodes
        self.graph.add_node("fetch_market_data", self.fetch_market_data)
        self.graph.add_node("fetch_price_history", self.fetch_price_history)
        self.graph.add_node("fetch_volume_data", self.fetch_volume_data)
        
        # Analysis nodes
        self.graph.add_node("technical_analysis", self.perform_technical_analysis)
        self.graph.add_node("fundamental_analysis", self.perform_fundamental_analysis)
        self.graph.add_node("sentiment_analysis", self.perform_sentiment_analysis)
        
        # Signal generation
        self.graph.add_node("generate_signals", self.generate_trading_signals)
        self.graph.add_node("risk_assessment", self.assess_risk)
        
        # Report generation
        self.graph.add_node("generate_report", self.generate_analysis_report)
        self.graph.add_node("validate_output", self.validate_analysis_output)
        
        # Define the workflow edges
        self.graph.set_entry_point("fetch_market_data")
        
        # Parallel data fetching
        self.graph.add_edge("fetch_market_data", "fetch_price_history")
        self.graph.add_edge("fetch_market_data", "fetch_volume_data")
        
        # Analysis phase (after data collection)
        self.graph.add_edge("fetch_price_history", "technical_analysis")
        self.graph.add_edge("fetch_volume_data", "technical_analysis")
        self.graph.add_edge("fetch_market_data", "fundamental_analysis")
        self.graph.add_edge("fetch_market_data", "sentiment_analysis")
        
        # Signal generation (after analysis)
        self.graph.add_edge("technical_analysis", "generate_signals")
        self.graph.add_edge("fundamental_analysis", "generate_signals")
        self.graph.add_edge("sentiment_analysis", "generate_signals")
        
        # Risk assessment
        self.graph.add_edge("generate_signals", "risk_assessment")
        
        # Report generation
        self.graph.add_edge("risk_assessment", "generate_report")
        self.graph.add_edge("generate_report", "validate_output")
        
        # Conditional routing for analysis depth
        self.graph.add_conditional_edges(
            "validate_output",
            self.should_continue_analysis,
            {
                "continue": "technical_analysis",  # Re-run with deeper analysis
                "complete": "END"
            }
        )
    
    async def fetch_market_data(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Fetch current market data for all symbols"""
        try:
            market_data = {}
            
            for symbol in state.symbols:
                # Fetch current market data using crypto tool
                data = await self.crypto_tool.execute(
                    action="get_market_data",
                    symbol=symbol
                )
                market_data[symbol] = data
            
            return NodeResult(
                updates={"market_data": market_data},
                confidence=0.9,
                metadata={"data_sources": ["crypto_powerdata"], "timestamp": datetime.now()}
            )
            
        except Exception as e:
            return NodeResult(
                updates={"market_data": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def fetch_price_history(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Fetch historical price data"""
        try:
            price_history = {}
            
            for symbol in state.symbols:
                # Fetch price history
                history = await self.crypto_tool.execute(
                    action="get_price_history",
                    symbol=symbol,
                    timeframe="1h",
                    limit=168  # 1 week of hourly data
                )
                price_history[symbol] = history
            
            return NodeResult(
                updates={"price_history": price_history},
                confidence=0.9
            )
            
        except Exception as e:
            return NodeResult(
                updates={"price_history": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def fetch_volume_data(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Fetch volume and liquidity data"""
        try:
            volume_data = {}
            
            for symbol in state.symbols:
                # Fetch volume data
                volume = await self.crypto_tool.execute(
                    action="get_volume_data",
                    symbol=symbol,
                    timeframe="1h",
                    limit=168
                )
                volume_data[symbol] = volume
            
            return NodeResult(
                updates={"volume_data": volume_data},
                confidence=0.9
            )
            
        except Exception as e:
            return NodeResult(
                updates={"volume_data": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def perform_technical_analysis(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Perform technical analysis using LLM"""
        try:
            analysis_prompt = f"""
            Perform technical analysis for: {', '.join(state.symbols)}
            
            Market Data: {state.market_data}
            Price History: {state.price_history}
            Volume Data: {state.volume_data}
            
            For each symbol, analyze:
            1. Trend analysis (short, medium, long term)
            2. Support and resistance levels
            3. Technical indicators (RSI, MACD, Moving Averages)
            4. Chart patterns
            5. Volume analysis
            6. Momentum indicators
            
            Provide structured analysis with confidence scores.
            """
            
            response = await self.llm.chat([
                {"role": "user", "content": analysis_prompt}
            ])
            
            # Parse the response (in a real implementation, you'd parse the structured output)
            technical_analysis = {
                "analysis": response["content"],
                "timestamp": datetime.now(),
                "confidence": 0.8
            }
            
            return NodeResult(
                updates={"technical_analysis": technical_analysis},
                confidence=0.8
            )
            
        except Exception as e:
            return NodeResult(
                updates={"technical_analysis": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def perform_fundamental_analysis(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Perform fundamental analysis"""
        try:
            fundamental_prompt = f"""
            Perform fundamental analysis for: {', '.join(state.symbols)}
            
            Market Data: {state.market_data}
            
            For each symbol, analyze:
            1. Project fundamentals and use case
            2. Tokenomics and supply dynamics
            3. Development activity and roadmap
            4. Partnerships and ecosystem
            5. Competitive position
            6. Regulatory environment
            7. Market cap and valuation metrics
            
            Provide investment thesis and long-term outlook.
            """
            
            response = await self.llm.chat([
                {"role": "user", "content": fundamental_prompt}
            ])
            
            fundamental_analysis = {
                "analysis": response["content"],
                "timestamp": datetime.now(),
                "confidence": 0.7
            }
            
            return NodeResult(
                updates={"fundamental_analysis": fundamental_analysis},
                confidence=0.7
            )
            
        except Exception as e:
            return NodeResult(
                updates={"fundamental_analysis": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def perform_sentiment_analysis(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Analyze market sentiment"""
        try:
            sentiment_prompt = f"""
            Analyze market sentiment for: {', '.join(state.symbols)}
            
            Consider:
            1. Social media sentiment
            2. News sentiment
            3. Fear & Greed index
            4. On-chain metrics
            5. Institutional activity
            6. Market momentum
            
            Provide sentiment scores and key drivers.
            """
            
            response = await self.llm.chat([
                {"role": "user", "content": sentiment_prompt}
            ])
            
            sentiment_analysis = {
                "analysis": response["content"],
                "timestamp": datetime.now(),
                "confidence": 0.6
            }
            
            return NodeResult(
                updates={"sentiment_analysis": sentiment_analysis},
                confidence=0.6
            )
            
        except Exception as e:
            return NodeResult(
                updates={"sentiment_analysis": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def generate_trading_signals(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Generate trading signals based on all analysis"""
        try:
            signals_prompt = f"""
            Generate trading signals based on comprehensive analysis:
            
            Technical Analysis: {state.technical_analysis}
            Fundamental Analysis: {state.fundamental_analysis}
            Sentiment Analysis: {state.sentiment_analysis}
            
            For each symbol in {state.symbols}, provide:
            1. Signal: BUY/SELL/HOLD
            2. Confidence: 1-10
            3. Time horizon: Short/Medium/Long term
            4. Entry price range
            5. Stop loss level
            6. Take profit targets
            7. Position size recommendation
            8. Key reasoning
            
            Consider risk tolerance: {state.risk_tolerance}
            """
            
            response = await self.llm.chat([
                {"role": "user", "content": signals_prompt}
            ])
            
            # Parse signals (simplified for example)
            trading_signals = {}
            for symbol in state.symbols:
                trading_signals[symbol] = {
                    "signal": "HOLD",  # Would parse from LLM response
                    "confidence": 7,
                    "reasoning": response["content"]
                }
            
            return NodeResult(
                updates={"trading_signals": trading_signals},
                confidence=0.8
            )
            
        except Exception as e:
            return NodeResult(
                updates={"trading_signals": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def assess_risk(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Assess overall portfolio risk"""
        try:
            risk_prompt = f"""
            Assess portfolio risk for trading signals:
            
            Trading Signals: {state.trading_signals}
            Risk Tolerance: {state.risk_tolerance}
            
            Analyze:
            1. Individual asset risks
            2. Portfolio correlation risk
            3. Market risk factors
            4. Liquidity risks
            5. Regulatory risks
            6. Overall portfolio risk score
            
            Provide risk mitigation recommendations.
            """
            
            response = await self.llm.chat([
                {"role": "user", "content": risk_prompt}
            ])
            
            risk_assessment = {
                "overall_risk_score": 6,  # Would parse from LLM
                "risk_factors": response["content"],
                "recommendations": [],
                "timestamp": datetime.now()
            }
            
            return NodeResult(
                updates={"risk_assessment": risk_assessment},
                confidence=0.8
            )
            
        except Exception as e:
            return NodeResult(
                updates={"risk_assessment": {}},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def generate_analysis_report(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Generate comprehensive analysis report"""
        try:
            report_prompt = f"""
            Generate a comprehensive crypto analysis report:
            
            Symbols Analyzed: {state.symbols}
            Technical Analysis: {state.technical_analysis}
            Fundamental Analysis: {state.fundamental_analysis}
            Sentiment Analysis: {state.sentiment_analysis}
            Trading Signals: {state.trading_signals}
            Risk Assessment: {state.risk_assessment}
            
            Create a professional report with:
            1. Executive Summary
            2. Market Overview
            3. Individual Asset Analysis
            4. Trading Recommendations
            5. Risk Analysis
            6. Portfolio Allocation Suggestions
            7. Conclusion and Next Steps
            
            Format as a structured markdown report.
            """
            
            response = await self.llm.chat([
                {"role": "user", "content": report_prompt}
            ])
            
            # Calculate overall confidence
            confidences = [
                state.technical_analysis.get("confidence", 0),
                state.fundamental_analysis.get("confidence", 0),
                state.sentiment_analysis.get("confidence", 0)
            ]
            overall_confidence = sum(confidences) / len(confidences) if confidences else 0
            
            return NodeResult(
                updates={
                    "analysis_report": response["content"],
                    "confidence_score": overall_confidence
                },
                confidence=overall_confidence
            )
            
        except Exception as e:
            return NodeResult(
                updates={"analysis_report": f"Report generation failed: {str(e)}"},
                confidence=0.1,
                metadata={"error": str(e)}
            )
    
    async def validate_analysis_output(self, state: CryptoAnalysisState, context: NodeContext) -> NodeResult:
        """Validate the analysis output quality"""
        try:
            # Check if analysis is complete and meets quality standards
            quality_score = 0
            
            if state.market_data:
                quality_score += 2
            if state.technical_analysis:
                quality_score += 2
            if state.fundamental_analysis:
                quality_score += 2
            if state.trading_signals:
                quality_score += 2
            if state.analysis_report:
                quality_score += 2
            
            # Quality score out of 10
            is_complete = quality_score >= 8
            
            execution_metadata = {
                "quality_score": quality_score,
                "is_complete": is_complete,
                "validation_timestamp": datetime.now(),
                "total_execution_time": context.execution_time if hasattr(context, 'execution_time') else 0
            }
            
            return NodeResult(
                updates={"execution_metadata": execution_metadata},
                confidence=0.9 if is_complete else 0.5
            )
            
        except Exception as e:
            return NodeResult(
                updates={"execution_metadata": {"error": str(e)}},
                confidence=0.1
            )
    
    def should_continue_analysis(self, state: CryptoAnalysisState) -> str:
        """Determine if analysis should continue or complete"""
        quality_score = state.execution_metadata.get("quality_score", 0)
        
        # If quality is low and we haven't tried deep analysis yet
        if quality_score < 8 and state.analysis_type != "deep":
            return "continue"
        else:
            return "complete"
    
    async def run_analysis(self, symbols: List[str], analysis_type: str = "comprehensive", risk_tolerance: str = "medium") -> Dict[str, Any]:
        """Run the complete crypto analysis workflow"""
        
        # Compile the graph
        compiled_graph = self.graph.compile()
        
        # Initial state
        initial_state = {
            "symbols": symbols,
            "analysis_type": analysis_type,
            "risk_tolerance": risk_tolerance
        }
        
        # Execute the workflow
        result = await compiled_graph.invoke(initial_state)
        
        return result

# Usage example
async def main():
    # Check environment variables
    if not os.getenv("OPENAI_API_KEY"):
        print("❌ Missing OPENAI_API_KEY")
        return
    
    # Create workflow
    workflow = CryptoAnalysisWorkflow()
    
    # Run analysis
    print("🚀 Starting comprehensive crypto analysis workflow...")
    
    symbols = ["BTC", "ETH", "SOL"]
    result = await workflow.run_analysis(
        symbols=symbols,
        analysis_type="comprehensive",
        risk_tolerance="medium"
    )
    
    # Display results
    print("\n" + "="*60)
    print("📊 CRYPTO ANALYSIS WORKFLOW RESULTS")
    print("="*60)
    
    print(f"\n📈 Symbols Analyzed: {', '.join(result['symbols'])}")
    print(f"🎯 Confidence Score: {result['confidence_score']:.1%}")
    print(f"⚡ Quality Score: {result['execution_metadata']['quality_score']}/10")
    
    print("\n📋 ANALYSIS REPORT:")
    print("-" * 40)
    print(result['analysis_report'])
    
    print("\n🎯 TRADING SIGNALS:")
    print("-" * 40)
    for symbol, signal in result['trading_signals'].items():
        print(f"{symbol}: {signal['signal']} (Confidence: {signal['confidence']}/10)")
    
    print("\n⚠️ RISK ASSESSMENT:")
    print("-" * 40)
    risk = result['risk_assessment']
    print(f"Overall Risk Score: {risk['overall_risk_score']}/10")
    
    print("\n✅ Workflow completed successfully!")

if __name__ == "__main__":
    asyncio.run(main())
```

## Key Features

### 1. Parallel Processing
- Simultaneous data fetching from multiple sources
- Concurrent analysis execution
- Optimized workflow performance

### 2. Conditional Logic
- Dynamic routing based on analysis quality
- Adaptive workflow execution
- Quality-driven re-processing

### 3. State Management
- Comprehensive state tracking
- Metadata preservation
- Error handling and recovery

### 4. Modular Design
- Reusable workflow components
- Easy customization and extension
- Clear separation of concerns

## Workflow Benefits

- **Scalability**: Handle multiple assets simultaneously
- **Reliability**: Built-in error handling and validation
- **Flexibility**: Configurable analysis depth and parameters
- **Traceability**: Complete execution metadata and logging

## Next Steps

- **[Custom Tools](./custom-tools)** - Build workflow-specific tools
- **[Building Agents](./building-agents)** - Integrate workflows with agents
- **[Web3 Agent](./web3-agent)** - Add blockchain-specific workflows
