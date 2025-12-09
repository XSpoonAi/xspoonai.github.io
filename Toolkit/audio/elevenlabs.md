---
id: elevenlabs
title: ElevenLabs Audio Tools
sidebar_label: ElevenLabs
---

# ElevenLabs Audio Tools

High-quality AI audio tools powered by [ElevenLabs](https://elevenlabs.io). Generate lifelike speech, transcribe audio, design custom voices, clone voices from samples, and dub content into 70+ languages.

## Installation

```bash
pip install spoon-toolkits elevenlabs
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ELEVENLABS_API_KEY` | Yes | Your ElevenLabs API key. Get it at [elevenlabs.io/app/settings/api-keys](https://elevenlabs.io/app/settings/api-keys) |

```bash
export ELEVENLABS_API_KEY="your_api_key_here"
```

## Available Tools

### Text-to-Speech

#### `ElevenLabsTextToSpeechTool`

Convert text to high-quality speech audio. Returns base64-encoded audio.

```python
from spoon_toolkits.audio import ElevenLabsTextToSpeechTool
import base64

tts = ElevenLabsTextToSpeechTool()
result = await tts.execute(
    text="Hello, this is a test of ElevenLabs text to speech.",
    voice_id="JBFqnCBsd6RMkjVDRZzb",  # George voice
    model_id="eleven_multilingual_v2",
    output_format="mp3_44100_128"
)

out = result.output if hasattr(result, 'output') else result
print(f"Audio size: {out['audio_size_bytes']} bytes")

# Save to file
audio = base64.b64decode(out['audio_base64'])
with open("output.mp3", "wb") as f:
    f.write(audio)
```

**Parameters:**
- `text` (required): Text to convert to speech
- `voice_id`: Voice ID (default: "JBFqnCBsd6RMkjVDRZzb" - George)
- `model_id`: Model ID (options: `eleven_multilingual_v2`, `eleven_turbo_v2_5`, `eleven_flash_v2_5`)
- `output_format`: Audio format (`mp3_44100_128`, `mp3_22050_32`, `pcm_16000`, `pcm_44100`)
- `language_code`: ISO 639-1 language code to enforce pronunciation

#### `ElevenLabsTextToSpeechStreamTool`

Stream text-to-speech with character-level timestamps (useful for lip-sync/subtitles).

```python
from spoon_toolkits.audio import ElevenLabsTextToSpeechStreamTool

stream_tts = ElevenLabsTextToSpeechStreamTool()
result = await stream_tts.execute(
    text="Streaming text to speech with timestamps.",
    voice_id="JBFqnCBsd6RMkjVDRZzb"
)

out = result.output if hasattr(result, 'output') else result
print(f"Total alignment points: {out['total_alignment_points']}")
# Each alignment point: {'char': 'S', 'start': 0.0, 'end': 0.128}
print(f"Sample: {out['alignment'][:3]}")
```

### Speech-to-Text

#### `ElevenLabsSpeechToTextTool`

Transcribe audio or video files to text. Supports 99 languages.

```python
from spoon_toolkits.audio import ElevenLabsSpeechToTextTool

stt = ElevenLabsSpeechToTextTool()
result = await stt.execute(
    file_path="recording.mp3",
    model_id="scribe_v1",
    language="en"  # Optional, auto-detected if not specified
)

out = result.output if hasattr(result, 'output') else result
print(f"Transcription: {out['text']}")
```

**Parameters:**
- `file_path` (required): Path to audio/video file
- `model_id`: STT model (options: `scribe_v1`, `scribe_v1_experimental`, `scribe_v2`)
- `language`: ISO 639-1 language code (auto-detected if not provided)

### Voice Design

#### `ElevenLabsVoiceDesignTool`

Generate custom voices from text descriptions.

```python
from spoon_toolkits.audio import ElevenLabsVoiceDesignTool

designer = ElevenLabsVoiceDesignTool()
result = await designer.execute(
    voice_description="A warm elderly British man with a gentle, storytelling tone",
    auto_generate_text=True
)

out = result.output if hasattr(result, 'output') else result
# Returns voice previews with generated_voice_id
for preview in out.get('previews', []):
    print(f"Preview ID: {preview['generated_voice_id']}")
```

#### `ElevenLabsCreateVoiceFromPreviewTool`

Save a voice preview as a permanent voice.

```python
from spoon_toolkits.audio import ElevenLabsCreateVoiceFromPreviewTool

creator = ElevenLabsCreateVoiceFromPreviewTool()
result = await creator.execute(
    generated_voice_id="preview_id_from_design",
    voice_name="Grandfather Voice",
    voice_description="Warm British storyteller"
)

out = result.output if hasattr(result, 'output') else result
print(f"Created voice ID: {out['voice_id']}")
```

### Voice Cloning

#### `ElevenLabsInstantVoiceCloneTool`

Clone a voice from audio samples (1-3 files recommended).

```python
from spoon_toolkits.audio import ElevenLabsInstantVoiceCloneTool

cloner = ElevenLabsInstantVoiceCloneTool()
result = await cloner.execute(
    name="My Cloned Voice",
    files=["sample1.mp3", "sample2.mp3"],
    description="Cloned from my recordings",
    remove_background_noise=True
)

out = result.output if hasattr(result, 'output') else result
print(f"Cloned voice ID: {out['voice_id']}")
```

**Parameters:**
- `name` (required): Name for the cloned voice
- `files` (required): List of audio file paths (1-3 recommended)
- `description`: Voice description
- `remove_background_noise`: Clean up samples (default: False)

### Dubbing

#### `ElevenLabsDubbingCreateTool`

Create a dubbing project to localize audio/video content.

```python
from spoon_toolkits.audio import ElevenLabsDubbingCreateTool

dubber = ElevenLabsDubbingCreateTool()
result = await dubber.execute(
    file_path="video.mp4",
    target_lang="es",  # Spanish
    source_lang="en",  # Optional
    name="Spanish Dub"
)

out = result.output if hasattr(result, 'output') else result
print(f"Dubbing ID: {out['dubbing_id']}")
```

#### `ElevenLabsDubbingStatusTool`

Check dubbing project status.

```python
from spoon_toolkits.audio import ElevenLabsDubbingStatusTool

status_tool = ElevenLabsDubbingStatusTool()
result = await status_tool.execute(dubbing_id="your_dubbing_id")

out = result.output if hasattr(result, 'output') else result
print(f"Status: {out['status']}")
```

#### `ElevenLabsDubbingAudioTool`

Download dubbed audio from a completed project.

```python
from spoon_toolkits.audio import ElevenLabsDubbingAudioTool
import base64

downloader = ElevenLabsDubbingAudioTool()
result = await downloader.execute(
    dubbing_id="your_dubbing_id",
    language_code="es"
)

out = result.output if hasattr(result, 'output') else result
audio = base64.b64decode(out['audio_base64'])
with open("dubbed_spanish.mp3", "wb") as f:
    f.write(audio)
```

## Complete Example

Here's a complete workflow using multiple ElevenLabs tools:

```python
import asyncio
import base64
import os
from spoon_toolkits.audio import (
    ElevenLabsTextToSpeechTool,
    ElevenLabsSpeechToTextTool,
)

async def elevenlabs_demo():
    # Check API key
    if not os.getenv("ELEVENLABS_API_KEY"):
        print("Set ELEVENLABS_API_KEY environment variable first!")
        return

    # 1. Generate speech
    tts = ElevenLabsTextToSpeechTool()
    tts_result = await tts.execute(
        text="Welcome to the ElevenLabs toolkit demonstration."
    )
    out = tts_result.output if hasattr(tts_result, 'output') else tts_result
    
    if out.get('success'):
        audio = base64.b64decode(out['audio_base64'])
        with open("demo_output.mp3", "wb") as f:
            f.write(audio)
        print(f"Generated audio: {out['audio_size_bytes']} bytes")
        
        # 2. Transcribe it back
        stt = ElevenLabsSpeechToTextTool()
        stt_result = await stt.execute(file_path="demo_output.mp3", model_id="scribe_v1")
        stt_out = stt_result.output if hasattr(stt_result, 'output') else stt_result
        print(f"Transcription: {stt_out['text']}")

if __name__ == "__main__":
    asyncio.run(elevenlabs_demo())
```

## Supported Languages

ElevenLabs supports 70+ languages for text-to-speech and 99 languages for speech-to-text. Common language codes:

| Code | Language |
|------|----------|
| `en` | English |
| `es` | Spanish |
| `fr` | French |
| `de` | German |
| `it` | Italian |
| `pt` | Portuguese |
| `zh` | Chinese |
| `ja` | Japanese |
| `ko` | Korean |
| `ar` | Arabic |
| `hi` | Hindi |
| `ru` | Russian |

## Voice IDs

Some popular pre-built voice IDs:

| Voice ID | Name | Description |
|----------|------|-------------|
| `JBFqnCBsd6RMkjVDRZzb` | George | Warm British male |
| `21m00Tcm4TlvDq8ikWAM` | Rachel | American female |
| `AZnzlk1XvdvUeBnXmlld` | Domi | Young American female |
| `EXAVITQu4vr4xnSDxMaL` | Bella | Soft American female |
| `ErXwobaYiN019PkySvjV` | Antoni | Well-rounded American male |

Browse more voices at [elevenlabs.io/voice-library](https://elevenlabs.io/voice-library).

## API Reference

- [ElevenLabs API Docs](https://elevenlabs.io/docs/api-reference)
- [ElevenLabs Python SDK](https://github.com/elevenlabs/elevenlabs-python)
- [Pricing](https://elevenlabs.io/pricing)
