---
title: OORT Storage
---

# OORT Storage

`spoon_toolkits.storage.oort` provides S3-style tools for the OORT network.

## Environment

```bash
export OORT_ENDPOINT_URL=https://s3.oortech.com
export OORT_ACCESS_KEY=your_access_key
export OORT_SECRET_KEY=your_secret_key
```

## Tools

- `OortCreateBucketTool` / `OortDeleteBucketTool`
- `OortListBucketsTool`
- `OortListObjectsTool`
- `OortUploadFileTool` / `OortDownloadFileTool`
- `OortDeleteObjectTool` / `OortDeleteObjectsTool`
- `OortGeneratePresignedUrlTool`

These tools inherit retry and formatting logic from `S3Tool`; responses are concise strings suited for immediate user feedback or logging. Use `object_keys` arrays for batch deletions when cleaning up agent artifacts.

## Return & error semantics

- Bucket/object operations return emoji-prefixed strings (`✅ Created bucket ...`, `❌ Failed to delete object ... (Error: AccessDenied)`); parse them if you need structured status codes.
- `OortListObjectsTool` returns a newline-separated string of bullet points (e.g., `• key (Size: 123)`), and `OortListBucketsTool` emits emoji-prefixed bucket names. Convert these strings yourself if your workflow requires JSON. Errors raised by `_list_objects` propagate as `RuntimeError`, so wrap the call if you need graceful handling.
- Batch delete accepts an `object_keys` list and replies with the count requested for deletion (`🗑️ Deleted N objects ...`). It does not currently surface per-key AWS errors.
- Presigned URLs honour `expires_in` (default 3600). OORT supports up to 12 hours per token. The `OortGeneratePresignedUrlTool` returns the raw URL string without emoji prefixes.
- Boto3 exceptions only bubble up when returning structured data (list objects) or presigned URL failures; otherwise they are embedded in the failure string.
- Upload helpers derive the destination key from `os.path.basename(file_path)`. Use `_copy_object` if you need to rename or place objects under prefixes.

## Usage examples

```python
from spoon_toolkits.storage.oort.oort_tools import (
    OortCreateBucketTool,
    OortUploadFileTool,
    OortDeleteObjectsTool,
)

creator = OortCreateBucketTool()
print(await creator.execute(bucket_name="agent-artifacts"))

uploader = OortUploadFileTool()
print(await uploader.execute(bucket_name="agent-artifacts", file_path="/tmp/logs.zip"))

deleter = OortDeleteObjectsTool()
print(await deleter.execute(bucket_name="agent-artifacts", object_keys=["logs.zip", "old-report.pdf"]))
```

CLI check:
```
python spoon_toolkits/storage/oort/oort_tools.py list-buckets
```
When run without arguments the module executes the async tests defined at the bottom (create/upload/download flows). Treat it as an integration check rather than an argument-driven CLI.

## Operational Tips

- **Batch delete**: `OortDeleteObjectsTool` leverages `_delete_objects`; pass up to 1000 keys per call, but expect only a count in the response. Retry the entire batch or reissue with smaller sets if something fails.
- **Bucket lifecycle**: Newly created buckets may take a few seconds to propagate; handle `BucketAlreadyExists` by retrying with backoff or generating unique names.
- **Endpoint**: Keep `OORT_ENDPOINT_URL` aligned with your account’s region; otherwise you may see `PermanentRedirect`.
- **Permissions**: Ensure your key pair has `s3:ListAllMyBuckets` and object-level permissions; lacking one results in `❌ ... AccessDenied`.

## MCP / agent usage

```python
from spoon_toolkits.storage.oort.oort_tools import OortGeneratePresignedUrlTool

tool = OortGeneratePresignedUrlTool()
url = await tool.execute(bucket_name="agent-artifacts", object_key="logs.zip", expires_in=600)
```

Because every tool extends `BaseTool`, add them to your agent’s toolset or mount them in a FastMCP server to share across workspaces.
