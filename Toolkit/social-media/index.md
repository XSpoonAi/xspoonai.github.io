---
title: Social Media Toolkit
---

# Social Media Toolkit

`spoon_toolkits.social_media` centralizes outbound and bidirectional messaging for Discord, Telegram, Twitter/X, and Email. All adapters share the same base classes, request/response models, and MCP-friendly interfaces, so you can swap channels without rewriting agent logic.

## Shared Architecture

- **Base classes** – Every tool inherits from `SocialMediaToolBase`, which defines `send_message()` and `validate_config()`. Notification-only adapters extend `NotificationToolBase`; interactive bots (Discord/Telegram) extend `InteractiveToolBase` and add `start_bot()` / `stop_bot()`.
- **Models** – All `execute()` methods accept a `MessageRequest` subclass (e.g., `DiscordMessageRequest`, `EmailMessageRequest`) and return a `MessageResponse` with `{success: bool, message: str, data?: dict}`. This makes the tools drop-in ready for FastMCP exposure.
- **Helper coroutines** – Each adapter exports a `send_*` convenience function (`send_discord_message`, `send_email`, etc.) for one-off notifications.
- **Config validation** – `validate_config()` logs a warning when required credentials are missing; call it during startup to fail fast rather than silently dropping messages.

## Environment Reference

| Channel | Required variables | Optional variables |
| --- | --- | --- |
| **Discord** | `DISCORD_BOT_TOKEN` | `DISCORD_DEFAULT_CHANNEL_ID` |
| **Telegram** | `TELEGRAM_BOT_TOKEN` | `TELEGRAM_DEFAULT_CHAT_ID` |
| **Twitter/X** | `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET`, `TWITTER_ACCESS_TOKEN`, `TWITTER_ACCESS_TOKEN_SECRET` | `TWITTER_BEARER_TOKEN`, `TWITTER_USER_ID` |
| **Email (SMTP)** | `EMAIL_SMTP_SERVER`, `EMAIL_SMTP_PORT`, `EMAIL_SMTP_USER`, `EMAIL_SMTP_PASSWORD`, `EMAIL_FROM` | `EMAIL_DEFAULT_RECIPIENTS` |

Set these variables before importing the corresponding tool. Missing credentials surface when `validate_config()` runs or when the client attempts its first API call.

## Discord

- **Module**: `discord_tool.py`
- **Client**: `spoon_ai.social_media.discord.DiscordClient`
- **Key methods**:
  - `send_message(message, channel_id=None)` – pushes text to a specific channel or falls back to `DISCORD_DEFAULT_CHANNEL_ID`.
  - `start_bot(agent=None)` / `stop_bot()` – wraps the async gateway loop for interactive bots; pass your Spoon agent at construction time so inbound events are routed through planners.
  - `execute(DiscordMessageRequest)` – MCP entry point; accepts `message` and optional `channel_id`.
- **Usage**:

```python
from spoon_toolkits.social_media.discord_tool import DiscordTool

discord = DiscordTool(agent=my_agent)
if discord.validate_config():
    await discord.send_message("Graph agent finished ingesting blocks")
```

Errors (invalid token, missing intents, closed WebSocket) bubble up as exceptions; wrap calls with retries or queue them through a supervisor task to avoid duplicate sessions.

## Telegram

- **Module**: `telegram_tool.py`
- **Client**: `spoon_ai.social_media.telegram.TelegramClient`
- **Key methods**:
  - `send_message(message, chat_id=None)` – proactive messaging. If the tool was instantiated without an agent, it spins a temporary client just for this send call.
  - `start_bot()` / `stop_bot()` – register webhook/polling handlers so agents can react to user prompts in real time.
  - `execute(TelegramMessageRequest)` – MCP-friendly send wrapper.
- **Usage**:

```python
from spoon_toolkits.social_media.telegram_tool import TelegramTool

telegram = TelegramTool()
await telegram.send_message("🔔 Validator risk threshold exceeded")
```

Rate limits are per bot token; Telegram will throttle after ~30 messages/s. Catch exceptions from `send_message` to implement backoff if you broadcast alerts in bursts.

## Twitter / X

- **Module**: `twitter_tool.py`
- **Client**: `spoon_ai.social_media.twitter.TwitterClient`
- **Key methods**:
  - `post_tweet(message)` – publish a new status.
  - `reply_to_tweet(tweet_id, message)` – threaded replies.
  - `like_tweet(tweet_id)` – reaction utility for engagement workflows.
  - `send_message(message, tags=None)` – convenience layer that appends hashtags or mentions.
  - `execute(TwitterMessageRequest)` – returns a `MessageResponse` for MCP.
- **Usage**:

```python
from spoon_toolkits.social_media.twitter_tool import TwitterTool

twitter = TwitterTool()
if twitter.validate_config():
    twitter.post_tweet("📈 Treasury rebalance complete. New target: BTC 40%, ETH 35%.")
```

Be mindful of Twitter v2 rate limits (tweets: 300 per 3 hours; likes/replies have separate quotas). Wrap the client in a queue or add exponential backoff to avoid HTTP 429 responses.

## Email (SMTP)

- **Module**: `email_tool.py`
- **Client**: `spoon_ai.social_media.email.EmailNotifier`
- **Key methods**:
  - `send_message(message, to_emails=None, subject="Crypto Monitoring Alert", html_format=True)` – send transactional emails; defaults to `EMAIL_DEFAULT_RECIPIENTS` when `to_emails` is omitted.
  - `execute(EmailMessageRequest)` – MCP wrapper returning `MessageResponse`.
- **Usage**:

```python
from spoon_toolkits.social_media.email_tool import EmailTool

email_tool = EmailTool()
await email_tool.send_message(
    message="<h2>Risk Alert</h2><p>New honeypot detected.</p>",
    to_emails=["security@example.com"],
    subject="🚨 Token Risk Detected",
)
```

Most SMTP providers enforce connection limits and per-minute quotas; reuse the same tool instance to keep TLS sessions warm, and handle `smtplib` exceptions to trigger retries or fallback to another channel.

## MCP & Convenience Functions

Each adapter exposes an `execute()` method that accepts the corresponding Pydantic request model, making it trivial to register the tool with FastMCP:

```python
from spoon_toolkits.social_media.discord_tool import DiscordTool, DiscordMessageRequest

discord = DiscordTool()
response = await discord.execute(DiscordMessageRequest(message="Hello MCP"))
```

For lightweight scripts, use the helper coroutines:

```python
from spoon_toolkits.social_media.discord_tool import send_discord_message
from spoon_toolkits.social_media.email_tool import send_email

await send_discord_message("Indexing complete")
await send_email("Pipeline healthy", ["ops@example.com"])
```

These functions internally instantiate the tool, run `validate_config()`, and return `{success, message}` dictionaries.

## Operational Tips

- **Credential hygiene**: Load all tokens via environment variables or a secrets manager; never hardcode them in agent configs.
- **Retry/backoff**: Social APIs frequently throttle. Catch exceptions from `send_message`, apply exponential backoff, or offload to a job queue.
- **Bot lifecycle**: For Discord/Telegram `start_bot()`, run the bot in a dedicated task or process and call `stop_bot()` during shutdown to avoid orphaned connections.
- **Multi-channel redundancy**: Pair channels (e.g., Telegram + Email) for critical alerts so a single API outage doesn’t silence notifications.
