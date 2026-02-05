---
id: spoon_ai.schema
slug: /api-reference/spoon_ai/schema
title: spoon_ai.schema
---

# Table of Contents

* [spoon\_ai.schema](#spoon_ai.schema)
  * [Function](#spoon_ai.schema.Function)
    * [get\_arguments\_dict](#spoon_ai.schema.Function.get_arguments_dict)
    * [create](#spoon_ai.schema.Function.create)
  * [AgentState](#spoon_ai.schema.AgentState)
  * [ToolChoice](#spoon_ai.schema.ToolChoice)
  * [Role](#spoon_ai.schema.Role)
  * [ROLE\_TYPE](#spoon_ai.schema.ROLE_TYPE)
  * [ContentType](#spoon_ai.schema.ContentType)
    * [IMAGE](#spoon_ai.schema.ContentType.IMAGE)
    * [IMAGE\_URL](#spoon_ai.schema.ContentType.IMAGE_URL)
    * [DOCUMENT](#spoon_ai.schema.ContentType.DOCUMENT)
    * [FILE](#spoon_ai.schema.ContentType.FILE)
    * [AUDIO](#spoon_ai.schema.ContentType.AUDIO)
  * [ImageMediaType](#spoon_ai.schema.ImageMediaType)
  * [ImageSource](#spoon_ai.schema.ImageSource)
  * [ImageUrlSource](#spoon_ai.schema.ImageUrlSource)
  * [TextContent](#spoon_ai.schema.TextContent)
  * [ImageContent](#spoon_ai.schema.ImageContent)
  * [ImageUrlContent](#spoon_ai.schema.ImageUrlContent)
  * [FileContent](#spoon_ai.schema.FileContent)
  * [DocumentSource](#spoon_ai.schema.DocumentSource)
  * [DocumentContent](#spoon_ai.schema.DocumentContent)
  * [Message](#spoon_ai.schema.Message)
    * [role](#spoon_ai.schema.Message.role)
    * [is\_multimodal](#spoon_ai.schema.Message.is_multimodal)
    * [text\_content](#spoon_ai.schema.Message.text_content)
    * [has\_images](#spoon_ai.schema.Message.has_images)
    * [has\_documents](#spoon_ai.schema.Message.has_documents)
    * [create\_text](#spoon_ai.schema.Message.create_text)
    * [create\_multimodal](#spoon_ai.schema.Message.create_multimodal)
    * [create\_with\_image\_url](#spoon_ai.schema.Message.create_with_image_url)
    * [create\_with\_base64\_image](#spoon_ai.schema.Message.create_with_base64_image)
    * [create\_with\_pdf](#spoon_ai.schema.Message.create_with_pdf)
    * [create\_with\_document](#spoon_ai.schema.Message.create_with_document)
  * [SystemMessage](#spoon_ai.schema.SystemMessage)
    * [role](#spoon_ai.schema.SystemMessage.role)
  * [TOOL\_CHOICE\_TYPE](#spoon_ai.schema.TOOL_CHOICE_TYPE)
  * [LLMConfig](#spoon_ai.schema.LLMConfig)
  * [LLMResponse](#spoon_ai.schema.LLMResponse)
    * [text](#spoon_ai.schema.LLMResponse.text)
  * [LLMResponseChunk](#spoon_ai.schema.LLMResponseChunk)

<a id="spoon_ai.schema"></a>

# Module `spoon_ai.schema`

<a id="spoon_ai.schema.Function"></a>

## `Function` Objects

```python
class Function(BaseModel)
```

<a id="spoon_ai.schema.Function.get_arguments_dict"></a>

#### `get_arguments_dict`

```python
def get_arguments_dict() -> dict
```

Parse arguments string to dictionary.

**Returns**:

- `dict` - Parsed arguments as dictionary

<a id="spoon_ai.schema.Function.create"></a>

#### `create`

```python
@classmethod
def create(cls, name: str, arguments: Union[str, dict]) -> "Function"
```

Create Function with arguments as string or dict.

**Arguments**:

- `name` - Function name
- `arguments` - Function arguments as string or dict
  

**Returns**:

- `Function` - Function instance with arguments as JSON string

<a id="spoon_ai.schema.AgentState"></a>

## `AgentState` Objects

```python
class AgentState(str, Enum)
```

The state of the agent.

<a id="spoon_ai.schema.ToolChoice"></a>

## `ToolChoice` Objects

```python
class ToolChoice(str, Enum)
```

Tool choice options

<a id="spoon_ai.schema.Role"></a>

## `Role` Objects

```python
class Role(str, Enum)
```

Message role options

<a id="spoon_ai.schema.ROLE_TYPE"></a>

#### `ROLE_TYPE`

type: ignore

<a id="spoon_ai.schema.ContentType"></a>

## `ContentType` Objects

```python
class ContentType(str, Enum)
```

Types of content blocks for multimodal messages

<a id="spoon_ai.schema.ContentType.IMAGE"></a>

#### `IMAGE`

Base64 encoded image data

<a id="spoon_ai.schema.ContentType.IMAGE_URL"></a>

#### `IMAGE_URL`

URL reference to image

<a id="spoon_ai.schema.ContentType.DOCUMENT"></a>

#### `DOCUMENT`

PDF and other documents (base64)

<a id="spoon_ai.schema.ContentType.FILE"></a>

#### `FILE`

File attachment (path-based)

<a id="spoon_ai.schema.ContentType.AUDIO"></a>

#### `AUDIO`

Audio content (future)

<a id="spoon_ai.schema.ImageMediaType"></a>

## `ImageMediaType` Objects

```python
class ImageMediaType(str, Enum)
```

Supported image media types

<a id="spoon_ai.schema.ImageSource"></a>

## `ImageSource` Objects

```python
class ImageSource(BaseModel)
```

Source for base64-encoded image content (Anthropic style)

<a id="spoon_ai.schema.ImageUrlSource"></a>

## `ImageUrlSource` Objects

```python
class ImageUrlSource(BaseModel)
```

Source for URL-based image content (OpenAI style)

<a id="spoon_ai.schema.TextContent"></a>

## `TextContent` Objects

```python
class TextContent(BaseModel)
```

Text content block

<a id="spoon_ai.schema.ImageContent"></a>

## `ImageContent` Objects

```python
class ImageContent(BaseModel)
```

Image content block with base64 data (Anthropic-compatible)

<a id="spoon_ai.schema.ImageUrlContent"></a>

## `ImageUrlContent` Objects

```python
class ImageUrlContent(BaseModel)
```

Image content block with URL reference (OpenAI-compatible)

<a id="spoon_ai.schema.FileContent"></a>

## `FileContent` Objects

```python
class FileContent(BaseModel)
```

File content block (path-based, for local file references)

<a id="spoon_ai.schema.DocumentSource"></a>

## `DocumentSource` Objects

```python
class DocumentSource(BaseModel)
```

Source for base64-encoded document content (PDF, etc.)

<a id="spoon_ai.schema.DocumentContent"></a>

## `DocumentContent` Objects

```python
class DocumentContent(BaseModel)
```

Document content block for PDFs and other documents (Anthropic/Gemini compatible)

Supported by:
- Anthropic Claude: Native PDF support via base64
- Gemini: Native PDF support via inline_data
- OpenAI: NOT supported (will be converted to text placeholder)

<a id="spoon_ai.schema.Message"></a>

## `Message` Objects

```python
class Message(BaseModel)
```

Represents a chat message in the conversation.

Supports both text-only and multimodal content:
- Simple text: content="Hello world"
- Multimodal: content=[TextContent(...), ImageUrlContent(...)]

<a id="spoon_ai.schema.Message.role"></a>

#### `role`

type: ignore

<a id="spoon_ai.schema.Message.is_multimodal"></a>

#### `is_multimodal`

```python
@property
def is_multimodal() -> bool
```

Check if this message contains multimodal content.

<a id="spoon_ai.schema.Message.text_content"></a>

#### `text_content`

```python
@property
def text_content() -> str
```

Extract text content from message (for backward compatibility).

**Returns**:

- `str` - Combined text content from all text blocks, or empty string

<a id="spoon_ai.schema.Message.has_images"></a>

#### `has_images`

```python
@property
def has_images() -> bool
```

Check if message contains any image content.

<a id="spoon_ai.schema.Message.has_documents"></a>

#### `has_documents`

```python
@property
def has_documents() -> bool
```

Check if message contains any document content (PDF, etc.).

<a id="spoon_ai.schema.Message.create_text"></a>

#### `create_text`

```python
@classmethod
def create_text(cls, role: str, text: str, **kwargs) -> "Message"
```

Create a simple text message.

**Arguments**:

- `role` - Message role (user, assistant, system, tool)
- `text` - Text content
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Text message instance

<a id="spoon_ai.schema.Message.create_multimodal"></a>

#### `create_multimodal`

```python
@classmethod
def create_multimodal(cls, role: str, content_blocks: List[ContentBlock],
                      **kwargs) -> "Message"
```

Create a multimodal message with mixed content types.

**Arguments**:

- `role` - Message role (user, assistant, system, tool)
- `content_blocks` - List of content blocks (TextContent, ImageContent, etc.)
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message instance

<a id="spoon_ai.schema.Message.create_with_image_url"></a>

#### `create_with_image_url`

```python
@classmethod
def create_with_image_url(cls,
                          role: str,
                          text: str,
                          image_url: str,
                          detail: Literal["auto", "low", "high"] = "auto",
                          **kwargs) -> "Message"
```

Create a message with text and an image URL.

**Arguments**:

- `role` - Message role
- `text` - Text content
- `image_url` - URL of the image
- `detail` - Image detail level (auto, low, high)
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and image URL

<a id="spoon_ai.schema.Message.create_with_base64_image"></a>

#### `create_with_base64_image`

```python
@classmethod
def create_with_base64_image(cls,
                             role: str,
                             text: str,
                             image_data: str,
                             media_type: str = "image/png",
                             **kwargs) -> "Message"
```

Create a message with text and a base64-encoded image.

**Arguments**:

- `role` - Message role
- `text` - Text content
- `image_data` - Base64-encoded image data
- `media_type` - Image MIME type (image/jpeg, image/png, etc.)
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and base64 image

<a id="spoon_ai.schema.Message.create_with_pdf"></a>

#### `create_with_pdf`

```python
@classmethod
def create_with_pdf(cls,
                    role: str,
                    text: str,
                    pdf_data: str,
                    filename: Optional[str] = None,
                    **kwargs) -> "Message"
```

Create a message with text and a base64-encoded PDF document.

Supported by Anthropic Claude and Gemini. OpenAI does not support PDFs.

**Arguments**:

- `role` - Message role
- `text` - Text content / question about the PDF
- `pdf_data` - Base64-encoded PDF data
- `filename` - Optional filename for display
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and PDF document

<a id="spoon_ai.schema.Message.create_with_document"></a>

#### `create_with_document`

```python
@classmethod
def create_with_document(cls,
                         role: str,
                         text: str,
                         document_data: str,
                         media_type: str = "application/pdf",
                         filename: Optional[str] = None,
                         **kwargs) -> "Message"
```

Create a message with text and a base64-encoded document.

Supported document types vary by provider:
- Anthropic: PDF
- Gemini: PDF, and many other formats
- OpenAI: NOT supported (will show placeholder)

**Arguments**:

- `role` - Message role
- `text` - Text content / question about the document
- `document_data` - Base64-encoded document data
- `media_type` - Document MIME type (default: application/pdf)
- `filename` - Optional filename for display
- `**kwargs` - Additional message fields
  

**Returns**:

- `Message` - Multimodal message with text and document

<a id="spoon_ai.schema.SystemMessage"></a>

## `SystemMessage` Objects

```python
class SystemMessage(Message)
```

<a id="spoon_ai.schema.SystemMessage.role"></a>

#### `role`

type: ignore

<a id="spoon_ai.schema.TOOL_CHOICE_TYPE"></a>

#### `TOOL_CHOICE_TYPE`

type: ignore

<a id="spoon_ai.schema.LLMConfig"></a>

## `LLMConfig` Objects

```python
class LLMConfig(BaseModel)
```

Configuration for LLM providers

<a id="spoon_ai.schema.LLMResponse"></a>

## `LLMResponse` Objects

```python
class LLMResponse(BaseModel)
```

Unified LLM response model

<a id="spoon_ai.schema.LLMResponse.text"></a>

#### `text`

Original text response

<a id="spoon_ai.schema.LLMResponseChunk"></a>

## `LLMResponseChunk` Objects

```python
class LLMResponseChunk(BaseModel)
```

Enhanced LLM streaming response chunk.

