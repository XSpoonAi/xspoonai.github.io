# LLMManager API Reference

`LLMManager` orchestrates providers, fallback, and optional load balancing. It wraps provider implementations that conform to `LLMProviderInterface`.

## Class Definition

```python
from spoon_ai.llm import LLMManager

manager = LLMManager(
    config_manager: ConfigurationManager | None = None,
    debug_logger: DebugLogger | None = None,
    metrics_collector: MetricsCollector | None = None,
    response_normalizer: ResponseNormalizer | None = None,
    registry: LLMProviderRegistry | None = None,
)
```

If no arguments are given, defaults are created: `ConfigurationManager()` (env‑driven), global registry, metrics/debug loggers, and response normalizer.

## Request Methods

- `async chat(messages: list[Message], provider: str | None = None, **kwargs) -> LLMResponse`  
  Executes a chat request. If `provider` is `None`, the manager builds a provider chain from the fallback settings.

- `async chat_stream(messages: list[Message], provider: str | None = None, **kwargs) -> AsyncGenerator[LLMResponseChunk, None]`  
  Streaming variant; yields normalized chunks.

- `async completion(prompt: str, provider: str | None = None, **kwargs) -> LLMResponse`  
  Legacy completion API; internally routed like `chat`.

- `async chat_with_tools(messages: list[Message], tools: list[dict], provider: str | None = None, **kwargs) -> LLMResponse`  
  Sends tools/functions with the request; provider must support `ProviderCapability.TOOLS`.

## Provider Control

- `def set_fallback_chain(providers: list[str]) -> None`  
  Sets an ordered list of providers for cascading retries (duplicates removed; must be registered).

- `def enable_load_balancing(strategy: str = "round_robin") -> None`  
  Turns on load balancing across healthy providers (`"round_robin"`, `"weighted"`, or `"random"`).

- `def disable_load_balancing() -> None`

- `async def reset_provider(provider_name: str) -> bool`  
  Clears initialization state and reinitializes the provider.

- `def get_provider_status() -> dict[str, dict[str, Any]]`  
  Per‑provider initialization and health info (initialized flags, retry backoff, last error).

- `async def health_check_all() -> dict[str, bool]`  
  Runs provider `health_check()` and updates load balancer health.

- `def get_stats() -> dict[str, Any>`  
  Aggregated manager settings plus metrics from the `MetricsCollector`.

- `async def cleanup() -> None`  
  Stops background tasks and cleans up providers; also registered with `atexit`.

## Behavior Notes

- Provider selection combines `default_provider`, `fallback_chain`, and load balancer health to build the chain for each request.
- Responses are normalized through `ResponseNormalizer` before returning to callers.
- All provider operations run under a shared manager lock to avoid concurrent init races.

## Example

```python
from spoon_ai.llm import LLMManager
from spoon_ai.schema import Message

manager = LLMManager()
manager.set_fallback_chain(["openai", "anthropic"])
manager.enable_load_balancing("round_robin")

messages = [Message(role="user", content="Give me a haiku about graphs.")]
response = await manager.chat(messages)
print(response.content)
```

## See Also
- `provider-interface.md` for the provider contract.
- `config-manager.md` for environment-driven configuration.
