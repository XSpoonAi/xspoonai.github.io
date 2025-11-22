---
id: solana
title: Solana Tools
---

# Solana Tools

`spoon_toolkits.crypto.solana` provides Python-based Solana blockchain tools built on top of `solana-py`, offering native SOL transfers, SPL token operations, and Jupiter-powered token swaps. Populate the tooling constants in `spoon_toolkits.crypto.solana.constants` (token program IDs, common mint addresses) before relying on SPL features or symbol shortcuts—the defaults are intentionally left as `None`.

## Environment & Dependencies

```bash
# Required runtime settings / env vars
export SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
export SOLANA_PRIVATE_KEY=your_base58_or_base64_private_key


# Optional extras
export HELIUS_API_KEY=your_helius_key   # Enables enriched RPC + webhooks
export BIRDEYE_API_KEY=your_birdeye_key # Enables live price + portfolio data
```

The keypair loader accepts both base58 (phantom export) and base64 strings, and you can override any parameter per call via the tool arguments.

**Dependencies:**
- `solana-py` – RPC client used by transfers, swaps, and wallet reads
- `solders` – Fast keypair/pubkey primitives for signing
- `spl.token` – SPL Token program bindings (ATA creation, transfers)
- `httpx` – Async Jupiter and Birdeye integrations

## Tool Catalog

### Transfer Tools

#### `SolanaTransferTool`

Transfer SOL or SPL tokens to another address.

**Parameters:**
- `recipient` (str, **required**) - Destination Solana address
- `amount` (str/number, **required**) - Amount in human-readable units
- `token_address` (str, optional) - SPL token mint address; omit for SOL
- `rpc_url` (str, optional) - RPC endpoint override
- `private_key` (str, optional) - Sender private key override

**Returns:**
```python
ToolResult(output={
    "success": True,
    "signature": "5j7s...",
    "amount": "1.5",
    "recipient": "9jW8F..."
})
```

**Example:**
```python
from spoon_toolkits.crypto.solana import SolanaTransferTool

# Transfer SOL
transfer_tool = SolanaTransferTool()
result = await transfer_tool.execute(
    recipient="9jW8FPr6BSSsemWPV22UUCzSqkVdTp6HTyPqeqyuBbCa",
    amount="0.1"
)
print(f"Signature: {result.output['signature']}")

# Transfer SPL token (USDC)
result = await transfer_tool.execute(
    recipient="9jW8FPr6BSSsemWPV22UUCzSqkVdTp6HTyPqeqyuBbCa",
    amount="100",
    token_address="EPjFW..."
)
```

**Features:**
-  Automatic ATA (Associated Token Account) creation for recipients
-  Transfers execute immediately after submission; confirmations and decimal precision checks should be handled by the caller if needed.

### Swap Tools

#### `SolanaSwapTool`

Execute token swaps using Jupiter aggregator with intelligent token resolution.

**Parameters:**
- `input_token` (str, **required**) - Input token (symbol/mint/address)
- `output_token` (str, **required**) - Output token (symbol/mint/address)
- `amount` (str/number, **required**) - Amount to swap
- `slippage_bps` (int, optional) - Slippage tolerance in basis points (default: dynamic)
- `priority_level` (str, optional) - Transaction priority: `low`, `medium`, `high`, `veryHigh` (default)
- `rpc_url` (str, optional) - RPC endpoint override
- `private_key` (str, optional) - Wallet private key override

**Returns:**
```python
ToolResult(output={
    "success": True,
    "signature": "3xK9...",
    "input_token": "SOL",
    "input_mint": "So111...",
    "output_token": "USDC",
    "output_mint": "EPjFW...",
    "input_amount": "1.0",
    "output_amount": "150.23",
    "price_impact": 0.002,
    "slippage_bps": 50,
    "route_plan": [...],
    "fees": {"transaction_fee": 5000, "fee_sol": 0.000005}
})
```

**Example:**
```python
from spoon_toolkits.crypto.solana import SolanaSwapTool

swap_tool = SolanaSwapTool()

# Swap using symbols (automatically resolved from wallet)
result = await swap_tool.execute(
    input_token="SOL",
    output_token="USDC",
    amount="1.0",
    slippage_bps=50,  # 0.5% slippage
    priority_level="high"
)

# Swap using mint addresses
result = await swap_tool.execute(
    input_token="So11111111111111111111111111111111111111112",
    output_token="EPjF...",
    amount="1.0"
)
```

**Advanced Features:**

**1. Smart Token Resolution**

Supports multiple input formats:
- Symbol: `"SOL"`, `"USDC"`, `"$BONK"`
- Mint address: `"So111..."`
- Portfolio lookup: Searches your wallet's token holdings

```python
# All these work:
await swap_tool.execute(input_token="SOL", ...)        # Symbol
await swap_tool.execute(input_token="$BONK", ...)      # From wallet
await swap_tool.execute(input_token="So111...", ...)   # Mint address
```

**2. Priority Fee Levels**

| Level | Max Lamports | Use Case |
|-------|-------------|----------|
| `low` | 50 | Non-urgent swaps |
| `medium` | 200 | Normal operations |
| `high` | 1,000 | Time-sensitive |
| `veryHigh` | 4,000,000 | MEV protection (default) |

**3. Dynamic Quote Context Building**

The tool validates inputs, resolves decimals, and fetches Jupiter quotes before execution:
```python
# Internally handles:
# - Token existence validation
# - Decimal precision checks
# - Amount > 0 validation
# - Slippage bounds (1-10000 bps)
# - Jupiter quote fetching
# - Output amount formatting
```

### Wallet Tools

#### `SolanaWalletInfoTool`

Query comprehensive wallet information including SOL balance and SPL token holdings.

**Parameters:**
- `address` (str, optional) - Wallet address; defaults to configured wallet
- `include_tokens` (bool, optional) - Include SPL token balances (default: `True`)
- `token_limit` (int, optional) - Max tokens to return (default: 20)
- `rpc_url` (str, optional) - RPC endpoint override

**Returns:**
```python
ToolResult(output={
    "address": "9jW8F...",
    "truncated_address": "9jW8...BbCa",
    "sol_balance": 1.523456789,
    "lamports": 1523456789,
    "token_count": 5,
    "tokens": [
        {
            "mint": "EPjFW...",
            "balance": "150.23",
            "decimals": 6,
            "raw_balance": "150230000"
        },
        # ...
    ]
})
```

**Example:**
```python
from spoon_toolkits.crypto.solana import SolanaWalletInfoTool

wallet_tool = SolanaWalletInfoTool()

# Query configured wallet
result = await wallet_tool.execute()
print(f"SOL Balance: {result.output['sol_balance']}")
print(f"Token Count: {result.output['token_count']}")

# Query specific wallet
result = await wallet_tool.execute(
    address="9jW8FPr6BSSsemWPV22UUCzSqkVdTp6HTyPqeqyuBbCa",
    include_tokens=True,
    token_limit=10
)
```

- **Features:**
- ✅ **Wallet Cache Scheduler** – Results are cached per `(rpc_url, address)` so repeated reads avoid RPC calls. The scheduler refresh cadence is 120s by default and can be forced manually.
- ✅ **Token metadata basics** – Each entry includes the mint, UI balance, decimals, and raw balance. Birdeye metadata (names, symbols, USD totals) is not injected automatically—use service helpers to enrich the cached data when an API key is present.
- ✅ **Portfolio cache hook** – The same cache powers the swap helper’s “smart token resolution,” so swaps can reference symbols (`SOL`, `$BONK`, etc.) without extra lookups.
- ✅ **Optional price data** – When `BIRDEYE_API_KEY` is present, the scheduler records token prices and wallet USD totals, which can be consumed through the service helpers.

## Service Helpers

The toolkit provides 30+ utility functions in `service.py`:

### Validation

```python
from spoon_toolkits.crypto.solana import (
    validate_solana_address,
    validate_private_key,
    is_native_sol
)

# Address validation
is_valid = validate_solana_address("9jW8FPr6BSSsemWPV22UUCzSqkVdTp6HTyPqeqyuBbCa")

# Private key validation (base58/base64)
is_valid = validate_private_key("5j7s...")

# Check if token is native SOL
is_sol = is_native_sol("So11111111111111111111111111111111111111112")
```

### Conversion

```python
from spoon_toolkits.crypto.solana import (
    lamports_to_sol,
    sol_to_lamports,
    format_token_amount,
    parse_token_amount
)

# SOL <-> Lamports
lamports = sol_to_lamports(1.5)  # → 1500000000
sol = lamports_to_sol(1500000000)  # → 1.5

# Token amount formatting
ui_amount = format_token_amount(150230000, decimals=6)  # → 150.23
raw_amount = parse_token_amount(150.23, decimals=6)  # → 150230000
```

### Address Utilities

```python
from spoon_toolkits.crypto.solana import (
    get_associated_token_address,
    truncate_address,
    detect_pubkeys_from_string
)

# Get ATA for token
ata = get_associated_token_address(
    token_mint="EPjFW...",
    owner="9jW8F..."
)

# Shorten address for display
short = truncate_address("9jW8FPr6BSSsemWPV22UUCzSqkVdTp6HTyPqeqyuBbCa")
# → "9jW8...BbCa"

# Extract addresses from text
pubkeys = detect_pubkeys_from_string("Send 1 SOL to 9jW8F...")
```

### Error Parsing

```python
from spoon_toolkits.crypto.solana import parse_transaction_error

# Error normalization (currently pass-through)
friendly = parse_transaction_error("Error: 0x1")
# → "Error: 0x1"
```

## Keypair Management

```python
from spoon_toolkits.crypto.solana import (
    get_wallet_keypair,
    get_wallet_key,
    get_private_key,
    get_public_key
)

# Get full keypair (requires private key)
keypair_result = get_wallet_keypair(require_private_key=True)
if keypair_result.keypair:
    print(f"Public Key: {keypair_result.keypair.pubkey()}")

# Get public key only
keypair_result = get_wallet_keypair(require_private_key=False)
if keypair_result.public_key:
    print(f"Public Key: {keypair_result.public_key}")

# Dynamic private key support
keypair_result = get_wallet_key(
    require_private_key=True,
    private_key="5j7s..."  # Override env var
)
```

## Advanced: Wallet Cache Scheduler

**Unique to Python version** - Background service that keeps wallet data fresh.

```python
from spoon_toolkits.crypto.solana import get_wallet_cache_scheduler

scheduler = get_wallet_cache_scheduler()

# Start background refresh (runs every 60s)
await scheduler.ensure_running(
    rpc_url="https://api.mainnet-beta.solana.com",
    wallet_address="9jW8F...",
    include_tokens=True
)

# Get cached data (no RPC call)
cached = await scheduler.get_cached(
    rpc_url="https://api.mainnet-beta.solana.com",
    wallet_address="9jW8F..."
)

if cached:
    wallet_data = cached["data"]
    print(f"SOL: {wallet_data['sol_balance']}")

# Force immediate refresh
fresh_data = await scheduler.force_refresh(
    rpc_url="https://api.mainnet-beta.solana.com",
    wallet_address="9jW8F...",
    include_tokens=True
)
```

**Benefits:**
-  Automatic background updates
-  Instant wallet info access for swap token resolution

## Constants

```python
from spoon_toolkits.crypto.solana import (
    TOKEN_ADDRESSES,
    DEFAULT_SLIPPAGE_BPS,
    JUPITER_PRIORITY_LEVELS
)

# Provide your own well-known addresses; the shipped defaults are None placeholders.
TOKEN_ADDRESSES["USDC"] = "Wdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
TOKEN_ADDRESSES["BONK"] = "DezX..."

# Default configuration helpers
printEPjF(DEFAULT_SLIPPAGE_BPS)       # e.g. 100 (1%)
print(JUPITER_PRIORITY_LEVELS)    # {"low": 50, "medium": 200, "high": 1000, "veryHigh": 4000000}
```

## Operational Notes

### Error Handling

Always check `ToolResult.error`:

```python
result = await swap_tool.execute(...)

if result.error:
    print(f" Swap failed: {result.error}")
    if result.diagnostic:
        print(f"Details: {result.diagnostic}")
else:
    print(f" Swap successful: {result.output['signature']}")
```

### Rate Limiting

Jupiter API limits:
- Quote endpoint: ~10 req/s
- Swap endpoint: ~5 req/s

Use the wallet cache scheduler to minimize RPC calls:

```python
# Bad: Queries RPC every time
for token in tokens:
    await wallet_tool.execute(address="...", include_tokens=True)

# Good: Use cache scheduler
scheduler = get_wallet_cache_scheduler()
await scheduler.ensure_running("...", "...", True)
for token in tokens:
    cached = await scheduler.get_cached("...", "...")
```










