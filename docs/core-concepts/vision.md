# Vision & Multimodal Support

SpoonOS provides **native multimodal support** across Agents and Graph workflows. Send images alongside text to any vision-capable provider—no API differences to handle.

## Why Native Vision?

Traditional approaches require provider-specific code:

```python
# Without SpoonOS - Each provider needs different handling
# OpenAI: content = [{"type": "text", ...}, {"type": "image_url", ...}]
# Anthropic: content = [{"type": "text", ...}, {"type": "image", "source": {...}}]
# Gemini: types.Part.from_image(...)
```

SpoonOS solves this with a unified interface:

```python
# With SpoonOS - Same code for all providers
from spoon_ai.schema import Message

msg = Message.create_with_image_url(
    "user",
    "What's in this image?",
    "https://example.com/chart.png"
)
```

## Quick Start

### With ReAct Agents

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
import asyncio

# Create agent with vision-capable model
agent = SpoonReactAI(
    name="vision_agent",
    llm=ChatBot(model_name="gpt-4o", llm_provider="openai"),
    system_prompt="You are a helpful vision assistant."
)

async def main():
    # Add a message with image
    await agent.add_message_with_image(
        role="user",
        text="Analyze this chart and describe the trend",
        image_url="https://example.com/chart.png"
    )

    # Run the agent
    response = await agent.run()
    print(response)

asyncio.run(main())
```

### With Graph Workflows

```python
from spoon_ai.graph import StateGraph, START, END, create_multimodal_message
from spoon_ai.schema import Message
from typing import TypedDict, List, Annotated
from spoon_ai.graph.reducers import add_messages

class State(TypedDict):
    messages: Annotated[List[Message], add_messages]

async def analyze_image(state: State) -> dict:
    """Node that creates a vision request"""
    msg = create_multimodal_message(
        role="user",
        text="Describe what you see in this image",
        image_url="https://example.com/image.png"
    )
    return {"messages": [msg]}

# Build graph
graph = StateGraph(State)
graph.add_node("analyze", analyze_image)
graph.set_entry_point("analyze")
graph.add_edge("analyze", END)

# Execute
compiled = graph.compile()
result = await compiled.invoke({})
```

---

## Message API

### Creating Multimodal Messages

SpoonOS provides multiple ways to create vision messages:

#### Using Message Class Methods

```python
from spoon_ai.schema import Message

# With image URL
msg = Message.create_with_image_url(
    role="user",
    text="What's in this image?",
    image_url="https://example.com/image.png",
    detail="high"  # auto, low, or high
)

# With base64 image data
msg = Message.create_with_base64_image(
    role="user",
    text="Describe this diagram",
    image_data="<base64_encoded_image>",
    media_type="image/png"
)

# Full multimodal message with multiple images
from spoon_ai.schema import TextContent, ImageUrlContent, ImageUrlSource

msg = Message.create_multimodal(
    role="user",
    content_blocks=[
        TextContent(text="Compare these two charts:"),
        ImageUrlContent(image_url=ImageUrlSource(url="https://example.com/chart1.png")),
        ImageUrlContent(image_url=ImageUrlSource(url="https://example.com/chart2.png"))
    ]
)
```

#### Using Graph Utilities

```python
from spoon_ai.graph import create_multimodal_message, create_vision_user_message

# Single image
msg = create_multimodal_message(
    role="user",
    text="Analyze this chart",
    image_url="https://example.com/chart.png"
)

# Multiple images
msg = create_vision_user_message(
    text="Compare these charts",
    images=[
        {"url": "https://example.com/chart1.png"},
        {"url": "https://example.com/chart2.png", "detail": "high"}
    ]
)
```

### Content Block Types

SpoonOS supports these content types:

| Type | Description | Usage |
|------|-------------|-------|
| `TextContent` | Plain text | Always supported |
| `ImageUrlContent` | Image via URL | Vision models |
| `ImageContent` | Base64 image data | Vision models |
| `FileContent` | File attachment | Future expansion |

```python
from spoon_ai.schema import (
    TextContent,
    ImageContent,
    ImageUrlContent,
    ImageSource,
    ImageUrlSource
)

# Text block
text = TextContent(text="Hello world")

# Image URL block
img_url = ImageUrlContent(
    image_url=ImageUrlSource(
        url="https://example.com/image.png",
        detail="auto"  # auto, low, high
    )
)

# Base64 image block
img_base64 = ImageContent(
    source=ImageSource(
        type="base64",
        media_type="image/png",
        data="<base64_string>"
    )
)
```

---

## Provider Support

### Vision Capabilities by Provider

| Provider | Vision Support | Image Formats | Notes |
|----------|---------------|---------------|-------|
| **OpenAI** | GPT-4o, GPT-4V | URL, base64 | Best overall vision |
| **Anthropic** | Claude 3+ | URL, base64 | Large context + vision |
| **Google** | Gemini Pro Vision | base64, upload | Native multimodal |
| **DeepSeek** | DeepSeek-VL | URL, base64 | Cost-effective vision |
| **OpenRouter** | Model-dependent | Varies | Access to multiple vision models |

### Automatic Format Conversion

SpoonOS automatically converts between formats:

```python
# Your code - provider agnostic
msg = Message.create_with_image_url(
    "user", "Describe this",
    image_url="https://example.com/image.png"
)

# OpenAI receives: {"type": "image_url", "image_url": {"url": "..."}}
# Anthropic receives: {"type": "image", "source": {"type": "url", "url": "..."}}
# Gemini receives: types.Part with URL handling
```

---

## Agent Integration

### ReAct Agent with Vision

```python
from spoon_ai.agents import SpoonReactAI
from spoon_ai.chat import ChatBot
from spoon_ai.tools import BaseTool
import asyncio

# Define a tool that returns an image for analysis
class ChartGeneratorTool(BaseTool):
    name = "generate_chart"
    description = "Generate a chart and return its URL"

    async def execute(self, data_type: str):
        # Generate chart logic...
        return {"chart_url": "https://example.com/generated_chart.png"}

# Create vision-capable agent
agent = SpoonReactAI(
    name="chart_analyst",
    llm=ChatBot(model_name="gpt-4o", llm_provider="openai"),
    system_prompt="You are a data analyst. Analyze charts and provide insights.",
    available_tools=[ChartGeneratorTool()]
)

async def main():
    # Agent can receive and process images
    await agent.add_message_with_image(
        role="user",
        text="What trend do you see in this sales chart?",
        image_url="https://example.com/sales_chart.png"
    )

    response = await agent.run()
    print(response)

asyncio.run(main())
```

### Message Properties

The Message class provides helpful properties for multimodal content:

```python
msg = Message.create_with_image_url("user", "Hello", "https://...")

# Check if multimodal
print(msg.is_multimodal)  # True

# Check for images
print(msg.has_images)  # True

# Get text content (for logging, summarization)
print(msg.text_content)  # "Hello"
```

---

## Graph Workflows

### Vision Analysis Pipeline

```python
from spoon_ai.graph import StateGraph, START, END, create_multimodal_message
from spoon_ai.schema import Message
from spoon_ai.llm.manager import LLMManager
from typing import TypedDict, List, Annotated, Optional
from spoon_ai.graph.reducers import add_messages

class VisionState(TypedDict):
    messages: Annotated[List[Message], add_messages]
    image_url: Optional[str]
    analysis: Optional[str]

# Initialize LLM manager
llm = LLMManager()

async def prepare_vision_request(state: VisionState) -> dict:
    """Create vision request from image URL"""
    image_url = state.get("image_url")
    if not image_url:
        return {"messages": [Message(role="user", content="No image provided")]}

    msg = create_multimodal_message(
        role="user",
        text="Analyze this image in detail. Describe what you see.",
        image_url=image_url
    )
    return {"messages": [msg]}

async def analyze_with_vision(state: VisionState) -> dict:
    """Send to vision model and get analysis"""
    messages = state.get("messages", [])
    response = await llm.chat(messages, provider="openai", model="gpt-4o")
    return {
        "analysis": response.content,
        "messages": [Message(role="assistant", content=response.content)]
    }

# Build the graph
graph = StateGraph(VisionState)
graph.add_node("prepare", prepare_vision_request)
graph.add_node("analyze", analyze_with_vision)
graph.set_entry_point("prepare")
graph.add_edge("prepare", "analyze")
graph.add_edge("analyze", END)

compiled = graph.compile()

# Execute with an image
result = await compiled.invoke({
    "image_url": "https://example.com/diagram.png"
})
print(result["analysis"])
```

### Multi-Image Comparison

```python
from spoon_ai.graph import create_vision_user_message

async def compare_images(state: State) -> dict:
    """Compare multiple images"""
    images = state.get("image_urls", [])

    msg = create_vision_user_message(
        text="Compare these images and describe the differences:",
        images=[{"url": url, "detail": "high"} for url in images]
    )

    return {"messages": [msg]}
```

---

## Best Practices

### 1. Choose Appropriate Detail Level

```python
# Low detail - faster, cheaper (thumbnails, simple images)
msg = Message.create_with_image_url(
    "user", "Quick check", image_url, detail="low"
)

# High detail - slower, more accurate (documents, complex diagrams)
msg = Message.create_with_image_url(
    "user", "Detailed analysis", image_url, detail="high"
)

# Auto - let the model decide
msg = Message.create_with_image_url(
    "user", "Analyze this", image_url, detail="auto"
)
```

### 2. Use Base64 for Sensitive Images

```python
import base64

# Read local image
with open("sensitive_doc.png", "rb") as f:
    image_data = base64.b64encode(f.read()).decode()

# Send without exposing URL
msg = Message.create_with_base64_image(
    "user",
    "Analyze this confidential document",
    image_data=image_data,
    media_type="image/png"
)
```

### 3. Handle Vision Errors Gracefully

```python
from spoon_ai.llm.errors import ProviderError

try:
    response = await agent.run()
except ProviderError as e:
    if "vision" in str(e).lower() or "image" in str(e).lower():
        # Fallback to text-only
        await agent.add_message("user", "Describe the concept without the image")
        response = await agent.run()
```

### 4. Optimize for Token Usage

```python
# Combine multiple images in one request instead of separate calls
msg = create_vision_user_message(
    text="Analyze all these charts together",
    images=[{"url": url1}, {"url": url2}, {"url": url3}]
)

# Instead of:
# msg1 = create_multimodal_message("user", "Analyze chart 1", url1)
# msg2 = create_multimodal_message("user", "Analyze chart 2", url2)
```

---

## Supported Image Formats

| Format | MIME Type | Provider Support |
|--------|-----------|------------------|
| JPEG | image/jpeg | All |
| PNG | image/png | All |
| GIF | image/gif | Most |
| WebP | image/webp | Most |

Maximum sizes vary by provider—check each provider's documentation for limits.

---

## Next Steps

- [Agents](./agents.md) - Learn about ReAct agents
- [Graph System](../graph-system/index.md) - Build complex workflows
- [LLM Providers](./llm-providers.md) - Configure vision-capable providers
