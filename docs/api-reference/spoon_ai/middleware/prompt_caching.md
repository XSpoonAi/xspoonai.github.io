---
id: spoon_ai.middleware.prompt_caching
slug: /api-reference/spoon_ai/middleware/prompt_caching
title: spoon_ai.middleware.prompt_caching
---

# Table of Contents

* [spoon\_ai.middleware.prompt\_caching](#spoon_ai.middleware.prompt_caching)
  * [is\_anthropic\_model](#spoon_ai.middleware.prompt_caching.is_anthropic_model)
  * [add\_cache\_control](#spoon_ai.middleware.prompt_caching.add_cache_control)
  * [should\_cache\_content](#spoon_ai.middleware.prompt_caching.should_cache_content)
  * [AnthropicPromptCachingMiddleware](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware)
    * [\_\_init\_\_](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.__init__)
    * [awrap\_model\_call](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.awrap_model_call)
    * [get\_stats](#spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.get_stats)
  * [create\_prompt\_caching\_middleware](#spoon_ai.middleware.prompt_caching.create_prompt_caching_middleware)

<a id="spoon_ai.middleware.prompt_caching"></a>

# Module `spoon_ai.middleware.prompt_caching`

Anthropic Prompt Caching Middleware.

Adds cache_control markers to system prompts and messages for Anthropic models,
enabling prompt caching to reduce costs and latency for repeated content.

How Anthropic Prompt Caching Works:
- Content marked with cache_control: &#123;"type": "ephemeral"&#125; is cached for ~5 minutes
- Subsequent requests within the cache window reuse the cached content
- This reduces input token costs and speeds up responses
- Only works with Claude models (claude-3-*, claude-2-*, etc.)

Compatible with LangChain DeepAgents AnthropicPromptCachingMiddleware interface.

Usage:
    from spoon_ai.middleware.prompt_caching import AnthropicPromptCachingMiddleware

    agent = ToolCallAgent(
        middleware=[AnthropicPromptCachingMiddleware()],
        ...
    )

<a id="spoon_ai.middleware.prompt_caching.is_anthropic_model"></a>

#### `is_anthropic_model`

```python
def is_anthropic_model(model_name: Optional[str]) -> bool
```

Check if a model name indicates an Anthropic Claude model.

**Arguments**:

- `model_name` - Model identifier string
  

**Returns**:

  True if this is an Anthropic model that supports caching

<a id="spoon_ai.middleware.prompt_caching.add_cache_control"></a>

#### `add_cache_control`

```python
def add_cache_control(content: Any) -> Any
```

Add cache_control marker to content.

Anthropic expects content to be a list of content blocks, where each
block can have a cache_control field.

**Arguments**:

- `content` - Content to add cache control to (string or list of blocks)
  

**Returns**:

  Content with cache_control added

<a id="spoon_ai.middleware.prompt_caching.should_cache_content"></a>

#### `should_cache_content`

```python
def should_cache_content(content: Any) -> bool
```

Determine if content is worth caching based on length.

**Arguments**:

- `content` - Content to evaluate
  

**Returns**:

  True if content should be cached

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware"></a>

## `AnthropicPromptCachingMiddleware` Objects

```python
class AnthropicPromptCachingMiddleware(AgentMiddleware)
```

Middleware that adds cache control markers for Anthropic prompt caching.

When using Anthropic Claude models, this middleware:
1. Adds cache_control to system prompts (if long enough)
2. Optionally adds cache_control to tool definitions
3. Skips caching for non-Anthropic models

Benefits:
- Reduces input token costs for repeated content
- Speeds up response time for cached prompts
- Automatic cache invalidation after ~5 minutes

**Example**:

    ```python
    from spoon_ai.middleware.prompt_caching import AnthropicPromptCachingMiddleware

    # Basic usage - caches system prompt
    middleware = AnthropicPromptCachingMiddleware()

    # With options
    middleware = AnthropicPromptCachingMiddleware(
        cache_system_prompt=True,
        cache_tools=True,
        min_cache_length=1024,
        unsupported_model_behavior="ignore",  # or "warn"
    )

    agent = ToolCallAgent(
        middleware=[middleware],
        ...
    )
    ```

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.__init__"></a>

#### `__init__`

```python
def __init__(cache_system_prompt: bool = True,
             cache_tools: bool = True,
             min_cache_length: int = MIN_CACHE_LENGTH,
             unsupported_model_behavior: Literal["ignore", "warn"] = "ignore")
```

Initialize Anthropic prompt caching middleware.

**Arguments**:

- `cache_system_prompt` - Whether to cache the system prompt (default: True)
- `cache_tools` - Whether to cache tool definitions (default: True)
- `min_cache_length` - Minimum content length to cache (default: 1024 chars)
- `unsupported_model_behavior` - What to do for non-Anthropic models:
  - "ignore": Silently skip caching
  - "warn": Log a warning and skip caching

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.awrap_model_call"></a>

#### `awrap_model_call`

```python
async def awrap_model_call(request: ModelRequest,
                           handler: Callable) -> ModelResponse
```

Add cache control markers before model call.

<a id="spoon_ai.middleware.prompt_caching.AnthropicPromptCachingMiddleware.get_stats"></a>

#### `get_stats`

```python
def get_stats() -> Dict[str, int]
```

Get caching statistics.

<a id="spoon_ai.middleware.prompt_caching.create_prompt_caching_middleware"></a>

#### `create_prompt_caching_middleware`

```python
def create_prompt_caching_middleware(
    cache_system_prompt: bool = True,
    cache_tools: bool = True,
    min_cache_length: int = MIN_CACHE_LENGTH,
    unsupported_model_behavior: Literal["ignore", "warn"] = "ignore"
) -> AnthropicPromptCachingMiddleware
```

Create an Anthropic prompt caching middleware.

**Arguments**:

- `cache_system_prompt` - Whether to cache system prompts
- `cache_tools` - Whether to cache tool definitions
- `min_cache_length` - Minimum content length to cache
- `unsupported_model_behavior` - How to handle non-Anthropic models
  

**Returns**:

  Configured AnthropicPromptCachingMiddleware

