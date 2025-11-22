---
title: AIOZ Storage
---

# AIOZ Storage

`spoon_toolkits.storage.aioz` adapts AIOZ's S3-compatible service for SpoonOS agents.

## Environment

```bash
export AIOZ_ENDPOINT_URL=https://gateway.aioz.io
export AWS_ACCESS_KEY=your_access_key
export AWS_SECRET_KEY=your_secret_key
```

Set optional `BUCKET_NAME` when using the helper coroutines in `aioz_tools.py`; the tools themselves only require the three variables above.

## Tools

- `AiozListBucketsTool` – list all accessible buckets.
- `UploadFileToAiozTool` – push a local file to a bucket.
- `DownloadFileFromAiozTool` – fetch an object to a local path.
- `DeleteAiozObjectTool` – remove a single object.
- `GenerateAiozPresignedUrlTool` – produce temporary download URLs.

Bucket/object mutations emit emoji-prefixed status strings (✅ success / ❌ failure). Wrap calls in agents that interpret the prefix to decide next steps.

### Return semantics & shared helpers
- Success responses look like `✅ Uploaded 'file' to 'bucket'`.
- Failures bubble up `botocore` messages but remain human readable: `❌ Failed to upload ... (Error: ...)`.
- `AiozListBucketsTool` returns a newline-separated string (emojis included) such as `📁 bucket-a`; parse the string if you need structured output.
- `GenerateAiozPresignedUrlTool` returns the raw URL string on success (no emoji prefix). Failures return `❌ ...` strings coming from `_generate_presigned_url`.
- `GenerateAiozPresignedUrlTool` accepts `expires_in` in seconds; the default is 3600. AIOZ supports up to 7 days—set higher values when sharing large datasets.

## Usage Examples

### Upload & presign
```python
from spoon_toolkits.storage.aioz.aioz_tools import UploadFileToAiozTool, GenerateAiozPresignedUrlTool

uploader = UploadFileToAiozTool()
status = await uploader.execute(bucket_name="research-artifacts", file_path="/tmp/report.pdf")
print(status)

# Object keys default to the filename (here: report.pdf). Rename after upload if needed.
presigner = GenerateAiozPresignedUrlTool()
url = await presigner.execute(bucket_name="research-artifacts", object_key="report.pdf", expires_in=900)
print(url)
```

### Module self-test
Running the module directly executes the async test harness in `aioz_tools.py`, which performs list/upload/presign/download/delete flows using the configured credentials and `BUCKET_NAME`. Use this as a credential check, but be aware it will create/delete real objects rather than accept CLI arguments.

## Operation Tips
- **Endpoint style**: `S3Tool` forces path-style URLs; keep bucket names DNS-safe to avoid signature issues.
- **Access denied**: If you see `❌ Failed ... (Error: An error occurred (AccessDenied))`, verify the access key/secret pair. AIOZ keys are distinct from AWS IAM keys.
- **Large uploads**: For >5GB objects, extend `AIOZMultipartUploadTool` (not shipped yet) using `S3Tool`'s `_create_multipart_upload` helpers; standard uploads will fail with `EntityTooLarge`.
- **Presign mismatch**: If the generated URL returns 403, ensure the bucket policy allows `s3:GetObject` for presigned requests and that your system clock is accurate.

## MCP / Agent integration

Each class inherits `BaseTool`. Register them in FastMCP like:
```python
from spoon_toolkits.storage.aioz.aioz_tools import AiozListBucketsTool

tool = AiozListBucketsTool()
result = await tool.execute()
```
To expose via FastMCP server, import the tool into your MCP registry or call the module’s `main` script. Within Spoon agents, include `Aioz*` tools in the tool set and pass bucket parameters directly from planner prompts.
