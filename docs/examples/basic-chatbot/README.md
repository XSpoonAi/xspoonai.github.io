# Basic Chatbot Example

This example demonstrates how to create a simple chatbot using SpoonOS with basic conversation capabilities.

## Overview

The basic chatbot example shows:
- Setting up a simple conversational agent
- Handling user input and generating responses
- Managing conversation history
- Basic error handling

## Prerequisites

- Python 3.10+
- SpoonOS Core installed
- OpenAI API key (or other LLM provider)

## Quick Start

### 1. Environment Setup

```bash
# Set your API key
export OPENAI_API_KEY="sk-your-openai-key-here"

# Or create .env file
echo "OPENAI_API_KEY=sk-your-openai-key-here" > .env
```

### 2. Basic Chatbot Code

```python
# basic_chatbot.py
import asyncio
from spoon_ai.agents import SpoonReactAI
from spoon_ai.llm import LLMManager

async def main():
    # Initialize LLM manager
    llm_manager = LLMManager(
        provider="openai",
        model="gpt-4.1"
    )
    
    # Create chatbot agent
    chatbot = SpoonReactAI(
        name="basic_chatbot",
        system_prompt="You are a helpful and friendly chatbot. Keep responses concise and helpful.",
        llm_manager=llm_manager
    )
    
    print("Chatbot started! Type 'quit' to exit.")
    
    while True:
        # Get user input
        user_input = input("You: ")
        
        if user_input.lower() in ['quit', 'exit', 'bye']:
            print("Chatbot: Goodbye!")
            break
        
        try:
            # Generate response
            response = await chatbot.run(user_input)
            print(f"Chatbot: {response}")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(main())
```

### 3. Run the Chatbot

```bash
python basic_chatbot.py
```

## Advanced Features

### Conversation History Management

```python
# chatbot_with_history.py
import asyncio
from spoon_ai.agents import SpoonReactAI
from spoon_ai.llm import LLMManager

class ChatbotWithHistory:
    def __init__(self):
        self.llm_manager = LLMManager(
            provider="openai",
            model="gpt-4.1"
        )
        
        self.agent = SpoonReactAI(
            name="history_chatbot",
            system_prompt="You are a helpful chatbot with memory of our conversation.",
            llm_manager=self.llm_manager
        )
        
        self.conversation_history = []
    
    async def chat(self, message: str) -> str:
        # Add user message to history
        self.conversation_history.append({
            "role": "user",
            "content": message
        })
        
        # Generate response with context
        response = await self.agent.chat(self.conversation_history)
        
        # Add assistant response to history
        self.conversation_history.append({
            "role": "assistant",
            "content": response["content"]
        })
        
        return response["content"]
    
    def clear_history(self):
        """Clear conversation history"""
        self.conversation_history = []
        print("Conversation history cleared.")
    
    def get_history_summary(self):
        """Get summary of conversation"""
        return f"Conversation has {len(self.conversation_history)} messages"

async def main():
    chatbot = ChatbotWithHistory()
    
    print("Advanced Chatbot started!")
    print("Commands: 'quit' to exit, 'clear' to clear history, 'summary' for history info")
    
    while True:
        user_input = input("You: ")
        
        if user_input.lower() in ['quit', 'exit']:
            print("Chatbot: Goodbye!")
            break
        elif user_input.lower() == 'clear':
            chatbot.clear_history()
            continue
        elif user_input.lower() == 'summary':
            print(f"Info: {chatbot.get_history_summary()}")
            continue
        
        try:
            response = await chatbot.chat(user_input)
            print(f"Chatbot: {response}")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(main())
```

### Configuration-Based Chatbot

```python
# config_chatbot.py
import asyncio
import json
from spoon_ai.agents import SpoonReactAI
from spoon_ai.config import ConfigManager

class ConfigurableChatbot:
    def __init__(self, config_file: str = "chatbot_config.json"):
        # Load configuration
        with open(config_file, 'r') as f:
            self.config = json.load(f)
        
        # Initialize agent from config
        self.agent = SpoonReactAI(
            name=self.config["name"],
            system_prompt=self.config["system_prompt"],
            config=self.config.get("agent_config", {})
        )
    
    async def run_interactive(self):
        print(f"Starting {self.config['name']}...")
        print(f"Personality: {self.config['description']}")
        print("Type 'quit' to exit.")
        
        while True:
            user_input = input("You: ")
            
            if user_input.lower() in ['quit', 'exit']:
                print(f"{self.config['name']}: {self.config['goodbye_message']}")
                break
            
            try:
                response = await self.agent.run(user_input)
                print(f"{self.config['name']}: {response}")
            except Exception as e:
                print(f"Error: {e}")

# Configuration file: chatbot_config.json
config_example = {
    "name": "Assistant",
    "description": "A helpful and knowledgeable assistant",
    "system_prompt": "You are a knowledgeable assistant who provides helpful, accurate, and concise responses.",
    "goodbye_message": "Thank you for chatting! Have a great day!",
    "agent_config": {
        "temperature": 0.7,
        "max_tokens": 500
    }
}

async def main():
    # Create config file if it doesn't exist
    try:
        with open("chatbot_config.json", 'r') as f:
            pass
    except FileNotFoundError:
        with open("chatbot_config.json", 'w') as f:
            json.dump(config_example, f, indent=2)
        print("Created chatbot_config.json with default settings")
    
    # Run chatbot
    chatbot = ConfigurableChatbot()
    await chatbot.run_interactive()

if __name__ == "__main__":
    asyncio.run(main())
```

## Configuration Examples

### Basic Configuration

```json
{
  "name": "BasicChatbot",
  "description": "Simple conversational chatbot",
  "system_prompt": "You are a helpful chatbot. Keep responses friendly and concise.",
  "goodbye_message": "Goodbye! Thanks for chatting!",
  "agent_config": {
    "temperature": 0.7,
    "max_tokens": 300
  }
}
```

### Specialized Chatbot Configuration

```json
{
  "name": "TechSupport",
  "description": "Technical support chatbot",
  "system_prompt": "You are a technical support assistant. Help users troubleshoot issues step by step. Ask clarifying questions when needed.",
  "goodbye_message": "I hope I was able to help! Feel free to return if you have more questions.",
  "agent_config": {
    "temperature": 0.3,
    "max_tokens": 500,
    "max_steps": 5
  }
}
```

## Error Handling

### Robust Error Handling

```python
# robust_chatbot.py
import asyncio
import logging
from spoon_ai.agents import SpoonReactAI
from spoon_ai.llm import LLMManager
from spoon_ai.agents.errors import AgentError, LLMError

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class RobustChatbot:
    def __init__(self):
        self.llm_manager = LLMManager(
            provider="openai",
            model="gpt-4.1",
            fallback_providers=["anthropic", "deepseek", "gemini"]
        )
        
        self.agent = SpoonReactAI(
            name="robust_chatbot",
            system_prompt="You are a helpful chatbot.",
            llm_manager=self.llm_manager
        )
    
    async def safe_chat(self, message: str) -> str:
        """Chat with comprehensive error handling"""
        try:
            response = await self.agent.run(message)
            return response
        
        except LLMError as e:
            logger.error(f"LLM error: {e}")
            return "I'm having trouble connecting to my language model. Please try again in a moment."
        
        except AgentError as e:
            logger.error(f"Agent error: {e}")
            return "I encountered an internal error. Please rephrase your question."
        
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            return "I'm sorry, something went wrong. Please try again."
    
    async def run_with_retry(self, message: str, max_retries: int = 3) -> str:
        """Run with automatic retry on failure"""
        for attempt in range(max_retries):
            try:
                response = await self.agent.run(message)
                return response
            except Exception as e:
                logger.warning(f"Attempt {attempt + 1} failed: {e}")
                if attempt == max_retries - 1:
                    return "I'm having persistent issues. Please try again later."
                await asyncio.sleep(1)  # Brief delay before retry

async def main():
    chatbot = RobustChatbot()
    
    print("Robust Chatbot started! Type 'quit' to exit.")
    
    while True:
        user_input = input("You: ")
        
        if user_input.lower() in ['quit', 'exit']:
            print("Chatbot: Goodbye!")
            break
        
        # Use safe chat method
        response = await chatbot.safe_chat(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    asyncio.run(main())
```

## Testing

### Unit Tests

```python
# test_chatbot.py
import pytest
import asyncio
from unittest.mock import Mock, AsyncMock
from basic_chatbot import ChatbotWithHistory

@pytest.fixture
def chatbot():
    return ChatbotWithHistory()

@pytest.mark.asyncio
async def test_basic_chat(chatbot):
    # Mock the agent response
    chatbot.agent.chat = AsyncMock(return_value={"content": "Hello! How can I help you?"})
    
    response = await chatbot.chat("Hello")
    assert response == "Hello! How can I help you?"
    assert len(chatbot.conversation_history) == 2  # User + assistant messages

@pytest.mark.asyncio
async def test_clear_history(chatbot):
    await chatbot.chat("Test message")
    assert len(chatbot.conversation_history) > 0
    
    chatbot.clear_history()
    assert len(chatbot.conversation_history) == 0

def test_history_summary(chatbot):
    summary = chatbot.get_history_summary()
    assert "0 messages" in summary
```

### Integration Tests

```python
# integration_test.py
import asyncio
import os
from basic_chatbot import ChatbotWithHistory

async def test_real_conversation():
    """Test with real API (requires API key)"""
    if not os.getenv("OPENAI_API_KEY"):
        print("Skipping integration test - no API key")
        return
    
    chatbot = ChatbotWithHistory()
    
    # Test basic conversation
    response1 = await chatbot.chat("Hello, what's your name?")
    print(f"Response 1: {response1}")
    
    # Test follow-up with context
    response2 = await chatbot.chat("What did I just ask you?")
    print(f"Response 2: {response2}")
    
    assert len(chatbot.conversation_history) == 4  # 2 user + 2 assistant

if __name__ == "__main__":
    asyncio.run(test_real_conversation())
```

## Deployment

### Docker Deployment

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "basic_chatbot.py"]
```

### Web Interface

```python
# web_chatbot.py
from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import asyncio
from basic_chatbot import ChatbotWithHistory

app = FastAPI()
chatbot = ChatbotWithHistory()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    while True:
        try:
            # Receive message from client
            message = await websocket.receive_text()
            
            # Generate response
            response = await chatbot.chat(message)
            
            # Send response back
            await websocket.send_text(response)
        
        except Exception as e:
            await websocket.send_text(f"Error: {str(e)}")
            break

@app.get("/")
async def get_chat_page():
    return HTMLResponse("""
    <!DOCTYPE html>
    <html>
    <head>
        <title>SpoonOS Chatbot</title>
    </head>
    <body>
        <div id="messages"></div>
        <input type="text" id="messageInput" placeholder="Type your message...">
        <button onclick="sendMessage()">Send</button>
        
        <script>
            const ws = new WebSocket("ws://localhost:8000/ws");
            
            function sendMessage() {
                const input = document.getElementById('messageInput');
                ws.send(input.value);
                addMessage('You: ' + input.value);
                input.value = '';
            }
            
            ws.onmessage = function(event) {
                addMessage('Bot: ' + event.data);
            };
            
            function addMessage(message) {
                const messages = document.getElementById('messages');
                messages.innerHTML += '<div>' + message + '</div>';
            }
        </script>
    </body>
    </html>
    """)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## Next Steps

- [Crypto Analysis Agent Example](../crypto-analysis-agent/README.md)
- [MCP Integration Example](../mcp-integration/README.md)
- [Production Deployment Example](../production-deployment/README.md)
- [How-To Guide: Build Your First Agent](../../how-to-guides/build-first-agent.md)

## See Also

- [Agent API Reference](../../api-reference/agents/base-agent.md)
- [LLM Configuration](../../core-concepts/llm-providers.md)
- [Troubleshooting Guide](../../troubleshooting/common-issues.md)"}