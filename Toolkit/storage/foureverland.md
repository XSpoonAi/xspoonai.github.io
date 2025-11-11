# 4EVERLAND Storage

`spoon_toolkits.storage.foureverland` integrates the 4EVERLAND decentralized storage service.

## Environment

```bash
export FOUREVERLAND_ENDPOINT_URL=https://endpoint.4everland.org
export FOUREVERLAND_ACCESS_KEY=your_access_key
export FOUREVERLAND_SECRET_KEY=your_secret_key
export FOUREVERLAND_BUCKET_NAME=default_bucket  # optional for helper scripts
```

## Tools

- `ListFourEverlandBuckets`
- `UploadFileToFourEverland`
- `DownloadFileFromFourEverland`
- `DeleteFourEverlandObject`
- `GenerateFourEverlandPresignedUrl`

Object listing currently requires calling the 4EVERLAND console or a custom script; there is no dedicated `ListObjectsFourEverland` helper yet.

All inherit from `FourEverlandStorageTool`, which itself extends `S3Tool`. That means you can expect identical method signatures and status string formats across the storage adapters, simplifying multi-provider automation.

## Return formats & shared behavior
- Most methods return strings starting with `✅`/`❌`. Agents can parse the first character to branch logic quickly.
- `ListFourEverlandBuckets` returns a newline-separated string with emoji prefixes (e.g., `📁 bucket-name`). Parse the string manually if structured data is required.
- `GenerateFourEverlandPresignedUrl` accepts `expires_in` (default 3600). 4EVERLAND caps presigned URLs at 24h—higher values raise a validation error.
- Exceptions from boto3 bubble up only when the helper must return structured data; otherwise they’re converted to the `❌ ... (Error: ...)` string.

## Usage examples

```python
from spoon_toolkits.storage.foureverland.foureverland_tools import (
    UploadFileToFourEverland,
    ListFourEverlandBuckets,
)

uploader = UploadFileToFourEverland()
print(await uploader.execute(bucket_name="governance-data", file_path="/tmp/summary.json"))

lister = ListFourEverlandBuckets()
print(await lister.execute())
```

CLI verification:
```
python spoon_toolkits/storage/foureverland/foureverland_tools.py list-buckets
```

## Provider-specific notes

- **Endpoint nuance**: 4EVERLAND requires HTTPS; unsigned HTTP calls fail with `SSL required`. Ensure `FOUREVERLAND_ENDPOINT_URL` includes `https://`.
- **Bucket namespace**: Bucket names are global per account. If `CreateBucket` fails with `BucketAlreadyOwnedByYou`, delete or reuse the existing one.
- **Presign errors**: 4EVERLAND enforces lowercase bucket names; uppercase characters cause signature mismatches (403).

## MCP / agent integration

Register any `FourEverland*` tool with FastMCP:
```python
from spoon_toolkits.storage.foureverland.foureverland_tools import GenerateFourEverlandPresignedUrl

tool = GenerateFourEverlandPresignedUrl()
url = await tool.execute(bucket_name="datasets", object_key="daily.csv")
```
Because these classes inherit `BaseTool`, they plug into Spoon agent tool lists directly. For service-style exposure, mount them in your MCP server alongside other storage providers.
