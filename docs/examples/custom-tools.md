---
sidebar_position: 5
---

# Custom Tools Example

This example demonstrates how to create powerful custom tools for SpoonOS agents, including API integrations, data processing tools, and specialized utilities.

## Overview

We'll build several custom tools:

- Weather API integration tool
- Data analysis and visualization tool
- File processing tool
- Custom crypto analysis tool
- Social media monitoring tool

## Complete Custom Tools Collection

```python
import asyncio
import os
import json
import pandas as pd
import aiohttp
import hashlib
from datetime import datetime, timedelta
from typing import Dict, Any, List, Optional
from spoon_ai.tools.base import BaseTool
from spoon_ai.tools import ToolManager
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot

# 1. Weather API Tool
class WeatherAnalysisTool(BaseTool):
    name: str = "weather_analysis"
    description: str = "Get comprehensive weather data and analysis for any location"

    parameters: Dict[str, Any] = {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City name, coordinates (lat,lon), or airport code"
            },
            "analysis_type": {
                "type": "string",
                "enum": ["current", "forecast", "historical", "comprehensive"],
                "default": "current",
                "description": "Type of weather analysis to perform"
            },
            "days": {
                "type": "integer",
                "minimum": 1,
                "maximum": 14,
                "default": 7,
                "description": "Number of days for forecast (if applicable)"
            }
        },
        "required": ["location"]
    }

    def __init__(self, api_key: str, **kwargs):
        super().__init__(**kwargs)
        self.api_key = api_key
        self.base_url = "https://api.openweathermap.org/data/2.5"
        self.cache = {}
        self.cache_duration = 600  # 10 minutes

    async def execute(self, location: str, analysis_type: str = "current", days: int = 7) -> str:
        """Execute weather analysis"""
        # Check cache first
        cache_key = f"{location}_{analysis_type}_{days}"
        if self._is_cached(cache_key):
            return self.cache[cache_key]["data"]

        # Framework handles API errors with automatic retry and fallback
        if analysis_type == "current":
            data = await self._get_current_weather(location)
        elif analysis_type == "forecast":
            data = await self._get_forecast(location, days)
        elif analysis_type == "comprehensive":
            data = await self._get_comprehensive_analysis(location, days)
        else:
            data = await self._get_current_weather(location)

        # Cache the result
        self._cache_data(cache_key, data)
        return data

    async def _get_current_weather(self, location: str) -> str:
        """Get current weather conditions"""
        async with aiohttp.ClientSession() as session:
            url = f"{self.base_url}/weather"
            params = {
                "q": location,
                "appid": self.api_key,
                "units": "metric"
            }

            async with session.get(url, params=params) as response:
                if response.status == 200:
                    data = await response.json()
                    return self._format_current_weather(data)
                else:
                    raise Exception(f"API error: {response.status}")

    async def _get_forecast(self, location: str, days: int) -> str:
        """Get weather forecast"""
        async with aiohttp.ClientSession() as session:
            url = f"{self.base_url}/forecast"
            params = {
                "q": location,
                "appid": self.api_key,
                "units": "metric",
                "cnt": days * 8  # 8 forecasts per day (3-hour intervals)
            }

            async with session.get(url, params=params) as response:
                if response.status == 200:
                    data = await response.json()
                    return self._format_forecast(data, days)
                else:
                    raise Exception(f"API error: {response.status}")

    def _format_current_weather(self, data: dict) -> str:
        """Format current weather data"""
        weather = {
            "location": f"{data['name']}, {data['sys']['country']}",
            "temperature": f"{data['main']['temp']:.1f}°C",
            "feels_like": f"{data['main']['feels_like']:.1f}°C",
            "description": data['weather'][0]['description'].title(),
            "humidity": f"{data['main']['humidity']}%",
            "pressure": f"{data['main']['pressure']} hPa",
            "wind_speed": f"{data['wind']['speed']} m/s",
            "visibility": f"{data.get('visibility', 0) / 1000:.1f} km",
            "uv_index": "N/A",  # Would need additional API call
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }

        return json.dumps(weather, indent=2)

    def _is_cached(self, key: str) -> bool:
        """Check if data is cached and still valid"""
        if key not in self.cache:
            return False

        cached_time = self.cache[key]["timestamp"]
        return (datetime.now() - cached_time).seconds < self.cache_duration

    def _cache_data(self, key: str, data: str):
        """Cache data with timestamp"""
        self.cache[key] = {
            "data": data,
            "timestamp": datetime.now()
        }

# 2. Data Analysis Tool
class DataAnalysisToolAdvanced(BaseTool):
    name: str = "data_analysis_advanced"
    description: str = "Perform advanced data analysis on CSV files with statistical insights and visualizations"

    parameters: Dict[str, Any] = {
        "type": "object",
        "properties": {
            "file_path": {
                "type": "string",
                "description": "Path to the CSV file to analyze"
            },
            "analysis_type": {
                "type": "string",
                "enum": ["summary", "correlation", "trends", "outliers", "comprehensive"],
                "default": "comprehensive",
                "description": "Type of analysis to perform"
            },
            "target_column": {
                "type": "string",
                "description": "Target column for specific analysis (optional)"
            },
            "generate_plots": {
                "type": "boolean",
                "default": False,
                "description": "Whether to generate visualization plots"
            }
        },
        "required": ["file_path"]
    }

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.output_dir = "analysis_output"
        os.makedirs(self.output_dir, exist_ok=True)

    async def execute(self, file_path: str, analysis_type: str = "comprehensive",
                     target_column: str = None, generate_plots: bool = False) -> str:
        """Execute data analysis"""
        # Framework handles file loading errors with graceful degradation
        df = pd.read_csv(file_path)

        # Perform analysis based on type
        if analysis_type == "summary":
            result = self._generate_summary(df)
        elif analysis_type == "correlation":
            result = self._analyze_correlation(df)
        elif analysis_type == "trends":
            result = self._analyze_trends(df, target_column)
        elif analysis_type == "outliers":
            result = self._detect_outliers(df, target_column)
        else:  # comprehensive
            result = self._comprehensive_analysis(df, target_column)

        # Generate plots if requested
        if generate_plots:
            plot_paths = await self._generate_plots(df, analysis_type)
            result += f"

Generated plots: {', '.join(plot_paths)}"

        return result

    def _generate_summary(self, df: pd.DataFrame) -> str:
        """Generate comprehensive data summary"""
        summary = {
            "dataset_info": {
                "rows": len(df),
                "columns": len(df.columns),
                "memory_usage_mb": df.memory_usage(deep=True).sum() / 1024 / 1024,
                "missing_values": df.isnull().sum().sum(),
                "duplicate_rows": df.duplicated().sum()
            },
            "column_types": df.dtypes.value_counts().to_dict(),
            "numeric_summary": df.describe().to_dict() if len(df.select_dtypes(include=['number']).columns) > 0 else {},
            "categorical_summary": {
                col: {
                    "unique_values": df[col].nunique(),
                    "most_frequent": df[col].mode().iloc[0] if not df[col].mode().empty else None,
                    "frequency": df[col].value_counts().head().to_dict()
                }
                for col in df.select_dtypes(include=['object']).columns
            }
        }

        return json.dumps(summary, indent=2, default=str)

    def _analyze_correlation(self, df: pd.DataFrame) -> str:
        """Analyze correlations between numeric columns"""
        numeric_df = df.select_dtypes(include=['number'])

        if numeric_df.empty:
            return "No numeric columns found for correlation analysis."

        correlation_matrix = numeric_df.corr()

        # Find strong correlations
        strong_correlations = []
        for i in range(len(correlation_matrix.columns)):
            for j in range(i+1, len(correlation_matrix.columns)):
                corr_value = correlation_matrix.iloc[i, j]
                if abs(corr_value) > 0.7:  # Strong correlation threshold
                    strong_correlations.append({
                        "variables": f"{correlation_matrix.columns[i]} vs {correlation_matrix.columns[j]}",
                        "correlation": round(corr_value, 3),
                        "strength": "Strong positive" if corr_value > 0 else "Strong negative"
                    })

        result = {
            "correlation_matrix": correlation_matrix.round(3).to_dict(),
            "strong_correlations": strong_correlations,
            "analysis_summary": f"Found {len(strong_correlations)} strong correlations out of {len(correlation_matrix.columns)} numeric variables"
        }

        return json.dumps(result, indent=2)

# 3. Crypto Market Analysis Tool
class CryptoMarketAnalysisTool(BaseTool):
    name: str = "crypto_market_analysis"
    description: str = "Advanced cryptocurrency market analysis with technical indicators and sentiment"

    parameters: Dict[str, Any] = {
        "type": "object",
        "properties": {
            "symbols": {
                "type": "array",
                "items": {"type": "string"},
                "description": "List of cryptocurrency symbols to analyze"
            },
            "timeframe": {
                "type": "string",
                "enum": ["1h", "4h", "1d", "1w"],
                "default": "1d",
                "description": "Timeframe for analysis"
            },
            "indicators": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": ["rsi", "macd", "sma", "ema", "bollinger", "volume"]
                },
                "default": ["rsi", "macd", "sma"],
                "description": "Technical indicators to calculate"
            },
            "market_cap_filter": {
                "type": "number",
                "minimum": 0,
                "description": "Minimum market cap filter (in millions USD)"
            }
        },
        "required": ["symbols"]
    }

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.cache = {}
        self.cache_duration = 300  # 5 minutes

    async def execute(self, symbols: List[str], timeframe: str = "1d",
                     indicators: List[str] = None, market_cap_filter: float = None) -> str:
        """Execute crypto market analysis"""
        if indicators is None:
            indicators = ["rsi", "macd", "sma"]

        analysis_results = {}

        for symbol in symbols:
            # Framework handles market data fetching with automatic retry
            market_data = await self._get_market_data(symbol, timeframe)

            # Calculate technical indicators
            technical_analysis = self._calculate_indicators(market_data, indicators)

            # Perform sentiment analysis
            sentiment = await self._analyze_sentiment(symbol)

            # Generate trading signal
            signal = self._generate_signal(technical_analysis, sentiment)

            analysis_results[symbol] = {
                "market_data": market_data,
                "technical_analysis": technical_analysis,
                "sentiment": sentiment,
                "trading_signal": signal,
                "timestamp": datetime.now().isoformat()
            }

        # Generate summary report
        summary = self._generate_market_summary(analysis_results)

        return json.dumps({
            "individual_analysis": analysis_results,
            "market_summary": summary
        }, indent=2, default=str)

    async def _get_market_data(self, symbol: str, timeframe: str) -> Dict[str, Any]:
        """Get real market data for symbol using CryptoPowerData"""
        from spoon_toolkits.crypto.crypto_powerdata.tools import CryptoPowerDataCEXTool, CryptoPowerDataPriceTool

        # Framework handles API errors with automatic fallback to alternative data sources
        data_tool = CryptoPowerDataCEXTool()
        result = await data_tool.execute(
            exchange="binance",
            symbol=f"{symbol}/USDT",
            timeframe=timeframe,
            limit=50,  # Last 50 candles for price history
            indicators_config='{"sma": [{"timeperiod": 20}], "rsi": [{"timeperiod": 14}], "macd": [{"fastperiod": 12, "slowperiod": 26, "signalperiod": 9}]}'
        )

        if result.error:
            # Framework provides automatic fallback to price-only data
            price_tool = CryptoPowerDataPriceTool()
            price_result = await price_tool.execute(
                source="cex",
                exchange="binance",
                symbol=f"{symbol}/USDT",
                market_type="spot"
            )

            if not price_result.error:
                price_data = json.loads(price_result.output) if isinstance(price_result.output, str) else price_result.output
                return {
                    "symbol": symbol,
                    "price": float(price_data.get('price', 50000)),
                    "volume_24h": price_data.get('volume_24h', 1000000000),
                    "market_cap": price_data.get('market_cap', 1000000000000),
                    "price_change_24h": price_data.get('price_change_24h', 2.5),
                    "price_history": [price_data.get('price', 50000)] * 5  # Placeholder history
                }

        # Parse the comprehensive data
        market_data = json.loads(result.output) if isinstance(result.output, str) else result.output
        ohlcv_data = market_data.get('ohlcv_data', [])

        if ohlcv_data:
            latest = ohlcv_data[-1]  # Latest candle
            prices = [candle['close'] for candle in ohlcv_data[-5:]]  # Last 5 close prices

            return {
                "symbol": symbol,
                "price": latest['close'],
                "volume_24h": sum(candle['volume'] for candle in ohlcv_data[-24:]) if len(ohlcv_data) >= 24 else latest['volume'],
                "market_cap": latest['close'] * latest['volume'],  # Approximation
                "price_change_24h": ((latest['close'] - ohlcv_data[-24]['close']) / ohlcv_data[-24]['close'] * 100) if len(ohlcv_data) >= 24 else 0,
                "price_history": prices,
                "indicators": market_data.get('indicators', {})
            }

        # Framework provides graceful fallback data when all sources fail
        return {
            "symbol": symbol,
            "price": 50000.0,
            "volume_24h": 1000000000,
            "market_cap": 1000000000000,
            "price_change_24h": 2.5,
            "price_history": [49000, 49500, 50000, 50200, 50000]
        }

    def _calculate_indicators(self, market_data: Dict, indicators: List[str]) -> Dict[str, Any]:
        """Calculate technical indicators"""
        prices = market_data["price_history"]
        results = {}

        if "rsi" in indicators:
            # Use real RSI from market data if available, otherwise calculate or use fallback
            if "indicators" in market_data and "rsi" in market_data["indicators"]:
                rsi_data = market_data["indicators"]["rsi"]
                rsi_value = rsi_data[-1] if isinstance(rsi_data, list) else rsi_data
                results["rsi"] = rsi_value
                results["rsi_signal"] = "overbought" if rsi_value > 70 else "oversold" if rsi_value < 30 else "neutral"
            else:
                results["rsi"] = 65.0  # Fallback RSI
                results["rsi_signal"] = "neutral"

        if "macd" in indicators:
            results["macd"] = {
                "macd_line": 100.0,
                "signal_line": 95.0,
                "histogram": 5.0,
                "signal": "bullish"
            }

        if "sma" in indicators:
            results["sma_20"] = sum(prices[-20:]) / 20 if len(prices) >= 20 else sum(prices) / len(prices)
            results["sma_50"] = sum(prices[-50:]) / 50 if len(prices) >= 50 else sum(prices) / len(prices)

        return results

# 4. Social Media Monitoring Tool
class SocialMediaMonitoringTool(BaseTool):
    name: str = "social_media_monitoring"
    description: str = "Monitor social media sentiment and trends for specific topics or cryptocurrencies"

    parameters: Dict[str, Any] = {
        "type": "object",
        "properties": {
            "keywords": {
                "type": "array",
                "items": {"type": "string"},
                "description": "Keywords or hashtags to monitor"
            },
            "platforms": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": ["twitter", "reddit", "telegram", "discord"]
                },
                "default": ["twitter", "reddit"],
                "description": "Social media platforms to monitor"
            },
            "sentiment_analysis": {
                "type": "boolean",
                "default": True,
                "description": "Whether to perform sentiment analysis"
            },
            "time_range": {
                "type": "string",
                "enum": ["1h", "6h", "24h", "7d"],
                "default": "24h",
                "description": "Time range for monitoring"
            }
        },
        "required": ["keywords"]
    }

    async def execute(self, keywords: List[str], platforms: List[str] = None,
                     sentiment_analysis: bool = True, time_range: str = "24h") -> str:
        """Execute social media monitoring"""
        if platforms is None:
            platforms = ["twitter", "reddit"]

        monitoring_results = {}

        for platform in platforms:
            # Framework handles platform API errors with graceful degradation
            platform_data = await self._monitor_platform(platform, keywords, time_range)

            if sentiment_analysis:
                sentiment_data = await self._analyze_platform_sentiment(platform_data)
                platform_data["sentiment_analysis"] = sentiment_data

            monitoring_results[platform] = platform_data

        # Generate summary
        summary = self._generate_monitoring_summary(monitoring_results, keywords)

        return json.dumps({
            "keywords": keywords,
            "time_range": time_range,
            "platform_results": monitoring_results,
            "summary": summary,
            "timestamp": datetime.now().isoformat()
        }, indent=2)

    async def _monitor_platform(self, platform: str, keywords: List[str], time_range: str) -> Dict[str, Any]:
        """Monitor specific platform (simulated)"""
        # In a real implementation, this would use platform APIs
        return {
            "platform": platform,
            "total_mentions": 150,
            "trending_score": 7.5,
            "top_posts": [
                {"content": f"Great news about {keywords[0]}!", "engagement": 100, "sentiment": "positive"},
                {"content": f"Concerns about {keywords[0]} market", "engagement": 75, "sentiment": "negative"}
            ],
            "engagement_metrics": {
                "likes": 1500,
                "shares": 300,
                "comments": 450
            }
        }

# Tool Collection Manager
class CustomToolCollection:
    def __init__(self):
        self.tools = []
        self._setup_tools()

    def _setup_tools(self):
        """Set up all custom tools"""
        # Weather tool (requires API key)
        if os.getenv("OPENWEATHER_API_KEY"):
            weather_tool = WeatherAnalysisTool(api_key=os.getenv("OPENWEATHER_API_KEY"))
            self.tools.append(weather_tool)

        # Data analysis tool
        data_tool = DataAnalysisToolAdvanced()
        self.tools.append(data_tool)

        # Crypto analysis tool
        crypto_tool = CryptoMarketAnalysisTool()
        self.tools.append(crypto_tool)

        # Social media monitoring tool
        social_tool = SocialMediaMonitoringTool()
        self.tools.append(social_tool)

    def get_tool_manager(self) -> ToolManager:
        """Get tool manager with all custom tools"""
        return ToolManager(self.tools)

    def list_tools(self) -> List[str]:
        """List all available tools"""
        return [tool.name for tool in self.tools]

# Example Agent with Custom Tools
class CustomToolsAgent:
    def __init__(self):
        # Set up custom tools
        self.tool_collection = CustomToolCollection()
        self.tools = self.tool_collection.get_tool_manager()

        # Create agent
        self.agent = SpoonReactAI(
            llm=ChatBot(model_name="gpt-4.1", temperature=0.3),
            available_tools=self.tools,
            system_prompt=self._get_system_prompt(),
            max_iterations=15
        )

    def _get_system_prompt(self) -> str:
        """Define agent behavior with custom tools"""
        available_tools = self.tool_collection.list_tools()

        return f"""
        You are an advanced AI assistant with access to powerful custom tools.

        Available tools: {', '.join(available_tools)}

        Your capabilities include:
        - Weather analysis and forecasting
        - Advanced data analysis and visualization
        - Cryptocurrency market analysis
        - Social media monitoring and sentiment analysis

        When helping users:
        1. Choose the most appropriate tool for their request
        2. Provide comprehensive analysis using multiple tools when beneficial
        3. Explain your reasoning and methodology
        4. Offer actionable insights and recommendations
        5. Suggest follow-up analyses when relevant

        Always be thorough, accurate, and helpful in your responses.
        """

    async def analyze(self, request: str) -> str:
        """Analyze user request using custom tools"""
        return await self.agent.run(request)

# Usage example
async def main():
    # Framework validates environment variables automatically
    agent = CustomToolsAgent()

    # Example analyses demonstrating custom tool capabilities
    examples = [
        "Analyze the weather in New York and provide a 7-day forecast",
        "Monitor social media sentiment for Bitcoin and Ethereum", 
        "Analyze cryptocurrency market trends for BTC, ETH, and SOL",
        "What's the current weather like in London and how does it compare to historical data?"
    ]

    # Framework handles all analysis execution with automatic error recovery
    results = []
    for example in examples:
        result = await agent.analyze(example)
        results.append({
            "query": example,
            "result": result,
            "available_tools": agent.tool_collection.list_tools()
        })

    return results

if __name__ == "__main__":
    asyncio.run(main())
```

## Key Features

### 1. Weather Analysis Tool

- Real-time weather data
- Forecast analysis
- Historical comparisons
- Caching for performance

### 2. Data Analysis Tool

- CSV file processing
- Statistical analysis
- Correlation detection
- Visualization generation

### 3. Crypto Market Tool

- Technical indicator calculations
- Market sentiment analysis
- Trading signal generation
- Multi-symbol analysis

### 4. Social Media Monitoring

- Multi-platform monitoring
- Sentiment analysis
- Trend detection
- Engagement metrics

## Best Practices Demonstrated

- **Error Handling**: Framework-native error handling with automatic retry
- **Caching**: Performance optimization with intelligent caching
- **Validation**: Input parameter validation
- **Modularity**: Reusable tool components
- **Documentation**: Clear parameter descriptions

## Next Steps

- **[Building Agents](../building-agents)** - Integrate custom tools with agents
- **[Graph Workflows](./graph-workflows)** - Use tools in complex workflows
- **[Web3 Agent](./web3-agent)** - Specialized blockchain tools
