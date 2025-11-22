

`spoon_toolkits.crypto.evm` gathers the core on-chain primitives agents need—native transfers, ERC-20 operations, swaps, quotes, bridges, and balance lookups—without shelling out to the JS plugin. Each class inherits `BaseTool`, so input validation, diagnostics, and async receipt waiting all behave consistently across Spoon agents.

## Environment & Dependencies

```bash
export EVM_PROVIDER_URL=https://mainnet.infura.io/v3/...
export EVM_PRIVATE_KEY=0xyourSignerKey
# Optional global fallback used by other crypto toolkits
export RPC_URL=https://eth.llamarpc.com
```

- All tools accept an `rpc_url` override, but only transaction senders (`EvmTransferTool`, `EvmErc20TransferTool`, `EvmSwapTool`, `EvmBridgeTool`) take `private_key`/signer inputs; read-only helpers rely solely on RPC access.
- `web3.py` is lazily imported inside each execute path, so include it (and `requests`) in your runtime environment.
- Aggregator-backed tools call public REST APIs (Bebop or LiFi). If you operate behind a proxy, ensure outbound HTTPS is allowed.

## Quick Start – Native Transfer

```python
from spoon_toolkits.crypto.evm import EvmTransferTool

transfer = EvmTransferTool()
tx = await transfer.execute(
    to_address="0xrecipient...",
    amount_ether="0.05",
    data="0x",                      # optional calldata
)

print(tx.output["hash"])
```

Receipts are awaited with reasonable timeouts; if the transaction reverts, `ToolResult.error` includes the tx hash so you can inspect it with an explorer.

## Toolkit Overview

| Tool | Module | Purpose |
| --- | --- | --- |
| `EvmTransferTool` | `transfer.py` | Send native tokens with optional data payloads, auto gas estimation, and nonce management. |
| `EvmErc20TransferTool` | `erc20.py` | Transfer ERC-20 tokens (balanceOf/decimals aware) with gas estimation and optional gas price overrides. |
| `EvmBalanceTool` | `balance.py` | Read native or ERC-20 balances for any address. |
| `EvmSwapTool` | `swap.py` | Execute same-chain swaps through the Bebop aggregator, including approvals when needed. |
| `EvmSwapQuoteTool` | `quote.py` | Fetch swap quotes without execution; compares Bebop and LiFi outputs when requested. |
| `EvmBridgeTool` | `bridge.py` | Bridge assets across chains via LiFi advanced routes and step transactions. |

## Tool Notes

### `EvmTransferTool`
- Defaults to `EVM_PROVIDER_URL`/`EVM_PRIVATE_KEY` but also checks `RPC_URL` so the tool can run inside broader Spoon stacks.
- Automatically estimates gas; if estimation fails it falls back to 21k for plain transfers or 100k when `data` is present.
- Explicit overrides exist for `gas_limit`, `gas_price_gwei`, and `nonce` so advanced workflows (batched transactions, EOA abstraction) remain possible.

### `EvmErc20TransferTool`
- Resolves token decimals via the contract; if the call fails it assumes 18 decimals, so pass `amount` accordingly.
- Builds and signs a `transfer` call, then waits for completion. Emits `{hash, token, amount, decimals}` in `output`.
- Accepts `gas_price_gwei`; otherwise uses the RPC’s `gas_price`.

### `EvmBalanceTool`
- Returns native balances (Ether-equivalent) when `token_address` is omitted, or ERC-20 balances converted using on-chain decimals. Outputs include only the formatted balance value (no decimals field).
- Useful for guardrails before making transfers or swaps.

### `EvmSwapTool`
- Calls Bebop’s router for supported chains (`1`, `10`, `137`, `42161`, `8453`, `59144`). Unsupported IDs return a descriptive error.
- Handles ERC-20 approvals automatically by checking allowance against `approvalTarget` and submitting an `approve` tx when required.
- Accepts `gas_price_gwei` overrides; otherwise reuses the aggregator-suggested gas price or the RPC default.
- `slippage_bps` is currently informational because Bebop does not accept slippage; expect fills to match aggregator routing.

### `EvmSwapQuoteTool`
- Works in quote-only contexts where you want to compare outputs without signing anything.
- Resolve chain ID via `chain_id` parameter or by pointing `rpc_url` at the target network.
- `aggregator="both"` (default) fetches Bebop and LiFi; response includes `quotes` plus a precalculated `best` entry ranked by min output amount.
- Requires RPC access for ERC-20 decimals when quoting token sales; native sells use zero address.

### `EvmBridgeTool`
- Wraps LiFi’s `/advanced/routes` + `/advanced/stepTransaction`. After selecting the recommended path, it executes the first step locally and waits for the on-chain receipt.
- Performs ERC-20 approvals before bridging when necessary; approvals and bridge txs both honor `gas_price_gwei`.
- `from_address` is implied from the signer, while `to_address` defaults to the same account but can target any destination address.
- Returns hashes plus source/destination chain IDs so orchestrators can track the bridge until completion on the far chain.

## Operational Tips

- Centralize signer management: store hot keys in a secure vault and inject them as environment variables just before launching the agent process.
- Throttle swap/bridge calls if you expect to fire many approvals quickly; both Bebop and LiFi enforce rate limits.
- Log the `ToolResult` payloads—especially `output["hash"]`—so you can reconcile actions if an agent crashes mid-run.
- When rotating RPC endpoints, prefer passing `rpc_url` explicitly to keep observability clear (environment-based fallbacks can mask misconfiguration). 
