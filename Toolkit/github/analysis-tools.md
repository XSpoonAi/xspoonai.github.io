

`spoon_toolkits.github.github_analysis_tool` bundles three ready-made `BaseTool` classes that call the GitHub GraphQL API via `GitHubProvider`. They are ideal when you want actionable repository stats without writing custom GraphQL queries.

## Environment

```bash
export GITHUB_TOKEN=ghp_your_personal_access_token   # repo scope recommended
```

- Each tool pulls `GITHUB_TOKEN` unless you pass `token="..."` explicitly. Missing credentials surface as `ToolResult(error="GitHub token is required...")`.
- GitHub’s GraphQL endpoint enforces a rate limit of 5,000 points/hour per token. These tools request up to 100 nodes per call; batch long-range reports accordingly.

## Tool Catalog

| Tool | Parameters | Output highlights | Use cases |
| --- | --- | --- | --- |
| `GetGitHubIssuesTool` | `owner`, `repo`, `start_date`, `end_date`, optional `token` | `total_count`, `issues_list` (state, labels, comment counts, author), `date_range` | Bug triage dashboards, changelog assembly, governance transparency |
| `GetGitHubPullRequestsTool` | Same window parameters | `pull_requests_list` with review totals, commit counts, merge timestamps | Contributor scorecards, weekly PR digests |
| `GetGitHubCommitsTool` | Same window parameters | `commits_list` including message, author, additions/deletions, `changedFiles` | Release notes, productivity metrics, feature tracking |

All parameters accept ISO `YYYY-MM-DD` strings. The window is inclusive and aligned to UTC.

## Usage Patterns

### Issues snapshot
```python
from spoon_toolkits.github.github_analysis_tool import GetGitHubIssuesTool

issues_tool = GetGitHubIssuesTool()
issues = await issues_tool.execute(
    owner="XSpoonAi",
    repo="spoon-core",
    start_date="2024-01-01",
    end_date="2024-02-01",
)

if issues.error:
    raise RuntimeError(issues.error)

for issue in issues.output["issues_list"]:
    print(issue["title"], issue["state"])
```

### Weekly contributor digest (issues → PRs → commits)
```python
from datetime import date, timedelta
from spoon_toolkits.github.github_analysis_tool import (
    GetGitHubIssuesTool,
    GetGitHubPullRequestsTool,
    GetGitHubCommitsTool,
)

today = date.today()
week_ago = today - timedelta(days=7)
window = dict(
    owner="XSpoonAi",
    repo="spoon-core",
    start_date=week_ago.isoformat(),
    end_date=today.isoformat(),
)

issues = await GetGitHubIssuesTool().execute(**window)
prs = await GetGitHubPullRequestsTool().execute(**window)
commits = await GetGitHubCommitsTool().execute(**window)

if any(result.error for result in (issues, prs, commits)):
    raise RuntimeError("GitHub API call failed")

summary = {
    "issues": issues.output["total_count"],
    "pull_requests": prs.output["total_count"],
    "commits": commits.output["total_count"],
}
```

## Error Handling Tips

- Inspect `ToolResult.error` before consuming `output`. Authentication failures, invalid repo names, or GraphQL validation errors are surfaced there.
- If GitHub throttles you, the GraphQL API returns `errors: [{"type": "RATE_LIMITED", ...}]`; the tool passes that text through the `error` field.
- Dates outside the repository lifetime simply return `total_count = 0`; no error is raised.

Use these tools when you need standardized analytics quickly. If you outgrow the default fields, switch to the lower-level `GitHubProvider` documented separately to craft custom queries.
