# Multimodal File Uploads

This guide explains how to use images, PDFs, and other files with Spoon AI agents and the graph system.

## Overview

Spoon AI supports multimodal content across all major LLM providers:

| Provider | Images | PDFs | Text Files |
|----------|--------|------|------------|
| OpenAI | ✅ | ✅ | ✅ |
| Anthropic | ✅ | ✅ | ✅ |
| Gemini | ✅ | ✅ | ✅ |

## Quick Start

The simplest way to use files is with the `add_message_with_file()` method - just pass a file path:

```python
from spoon_ai.agents.toolcall import ToolCallAgent
from spoon_ai.chat import ChatBot

# Create an agent
llm = ChatBot(provider="openai", model="gpt-4o-mini")
agent = ToolCallAgent(llm=llm)

# Add a file - no base64 encoding needed!
await agent.add_message_with_file(
    role="user",
    text="What is this document about?",
    file_path="./report.pdf"
)

# Run the agent
response = await agent.run()
```

## File Upload Methods

### Generic File Upload (Recommended)

`add_message_with_file()` automatically detects file type and handles encoding:

```python
# Works with PDFs
await agent.add_message_with_file("user", "Summarize this", "./document.pdf")

# Works with images
await agent.add_message_with_file("user", "Describe this image", "./photo.jpg")

# Works with text files
await agent.add_message_with_file("user", "Review this code", "./config.json")
```

### Specific File Type Methods

For more control, use type-specific methods:

```python
# PDF files
await agent.add_message_with_pdf_file(
    role="user",
    text="Extract key points from this whitepaper",
    file_path="./bitcoin_whitepaper.pdf"
)

# Image files (with detail level control)
await agent.add_message_with_image_file(
    role="user",
    text="What's in this image?",
    file_path="./screenshot.png",
    detail="high"  # "auto", "low", or "high"
)
```

### Base64 Methods (Advanced)

If you already have base64-encoded data:

```python
import base64

# Read and encode file
with open("document.pdf", "rb") as f:
    pdf_base64 = base64.b64encode(f.read()).decode("utf-8")

# Use base64 data directly
await agent.add_message_with_pdf(
    role="user",
    text="Analyze this document",
    pdf_data=pdf_base64,
    filename="document.pdf"
)
```

## Image Upload Methods

Three ways to upload images:

### Method 1: File Path (Recommended)

```python
await agent.add_message_with_image_file(
    role="user",
    text="What's in this image?",
    file_path="./photo.jpg"
)
```

### Method 2: External URL

```python
await agent.add_message_with_image(
    role="user",
    text="Describe this image",
    image_url="https://example.com/image.jpg"
)
```

### Method 3: Base64 Data

```python
import base64

with open("image.png", "rb") as f:
    image_base64 = base64.b64encode(f.read()).decode("utf-8")

await agent.add_message_with_image(
    role="user",
    text="What's in this image?",
    image_data=image_base64,
    image_media_type="image/png"
)
```

## Large File Handling

For files larger than 4MB (especially PDFs with OpenAI), the system automatically:

1. Detects files exceeding the 4MB threshold
2. Uploads them via the OpenAI Files API
3. References the file by ID instead of inline base64
4. Cleans up temporary files after the request

This happens transparently - you don't need to do anything special:

```python
# Large PDFs are handled automatically
await agent.add_message_with_file(
    role="user",
    text="Summarize this 10MB report",
    file_path="./large_report.pdf"  # Automatically uses Files API
)
```

## Graph System Integration

For graph-based workflows, use the multimodal message utilities:

```python
from spoon_ai.graph import create_pdf_message, create_multimodal_message

# Create a PDF message for graph state
async def analyze_document(state: State) -> dict:
    import base64

    with open("report.pdf", "rb") as f:
        pdf_data = base64.b64encode(f.read()).decode("utf-8")

    msg = create_pdf_message(
        role="user",
        text="Extract key metrics",
        pdf_data=pdf_data,
        filename="report.pdf"
    )
    return {"messages": [msg]}

# Create an image message
async def analyze_image(state: State) -> dict:
    msg = create_multimodal_message(
        role="user",
        text="Describe this chart",
        image_url="https://example.com/chart.png"
    )
    return {"messages": [msg]}
```

## Supported File Types

| Extension | MIME Type | Support |
|-----------|-----------|---------|
| `.pdf` | application/pdf | Full (native PDF processing) |
| `.png` | image/png | Full |
| `.jpg/.jpeg` | image/jpeg | Full |
| `.gif` | image/gif | Full |
| `.webp` | image/webp | Full |
| `.txt` | text/plain | Converted to text |
| `.md` | text/markdown | Converted to text |
| `.json` | application/json | Converted to text |

## Best Practices

1. **Use file paths** - Let the system handle encoding
2. **Use `add_message_with_file()`** - Auto-detects file type
3. **Don't worry about file size** - Large files are handled automatically
4. **Use high detail for complex images** - Set `detail="high"` for diagrams/charts

## Error Handling

```python
try:
    await agent.add_message_with_file(
        role="user",
        text="Analyze this",
        file_path="./document.pdf"
    )
except FileNotFoundError:
    print("File not found")
except ValueError as e:
    print(f"Invalid file: {e}")
```

## Complete Example

```python
import asyncio
from spoon_ai.agents.toolcall import ToolCallAgent
from spoon_ai.chat import ChatBot
from spoon_ai.tools import ToolManager

class DocumentAnalyzer(ToolCallAgent):
    name = "document_analyzer"
    system_prompt = "You analyze documents and extract key information."
    max_steps = 3
    available_tools = ToolManager([])

async def main():
    # Initialize
    llm = ChatBot(provider="openai", model="gpt-4o-mini")
    agent = DocumentAnalyzer(llm=llm)

    # Add document (handles encoding automatically)
    await agent.add_message_with_file(
        role="user",
        text="What are the main topics in this document?",
        file_path="./whitepaper.pdf"
    )

    # Run agent
    response = await agent.run()
    print(response)

asyncio.run(main())
```
