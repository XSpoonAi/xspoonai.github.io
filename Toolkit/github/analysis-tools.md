

`spoon_toolkits.github.github_analysis_tool` bundles three ready-made `BaseTool` classes that call the GitHub GraphQL API via `GitHubProvider`. Each tool simply returns the raw list of entities (`issues`, `pull requests`, `commits`) interpolated into a single string (e.g., `"GitHub issues: [{...}, ...]"`), so you get the data without crafting queries yourself but will need to parse/count manually if you want aggregates.

## Environment

```bash
export GITHUB_TOKEN=ghp_your_personal_access_token   # repo scope recommended
```

- Each tool pulls `GITHUB_TOKEN` unless you pass `token="..."` explicitly. Missing credentials surface as `ToolResult(error="GitHub token is required...")`.
- GitHub’s GraphQL endpoint enforces a rate limit of 5,000 points/hour per token. These tools request up to 100 nodes per call; batch long-range reports accordingly.

## Tool Catalog

| Tool | Parameters | Raw data returned | Use cases |
| --- | --- | --- | --- |
| `GetGitHubIssuesTool` | `owner`, `repo`, `start_date`, `end_date`, optional `token` | List of up to 100 issues with `title`, `state`, labels, comment totals, author, timestamps | Bug triage dashboards, changelog assembly, governance transparency |
| `GetGitHubPullRequestsTool` | Same window parameters | List of up to 100 pull requests with merge info, review counts, commit totals, labels | Contributor scorecards, weekly PR digests |
| `GetGitHubCommitsTool` | Same window parameters | Default branch history (first 100 commits) including message, author name/email, additions/deletions, `changedFiles` | Release notes, productivity metrics, feature tracking |

All parameters accept ISO `YYYY-MM-DD` strings. The window is inclusive and aligned to UTC. Because the code returns only the raw list embedded in a string, there is no built-in `total_count` or `date_range` metadata—add that logic in your calling code if required.

## Usage Patterns

### Issues snapshot
```python
from spoon_toolkits.github.github_analysis_tool import GetGitHubIssuesTool

issues_tool = GetGitHubIssuesTool()
issues_result = await issues_tool.execute(
    owner="XSpoonAi",
    repo="spoon-core",
    start_date="2024-01-01",
    end_date="2024-02-01",
)

if issues_result.error:
    raise RuntimeError(issues_result.error)

raw_issues = issues_result.output  # e.g., "GitHub issues: [{...}, {...}]"
print(raw_issues)

# Optionally convert the trailing list into Python data:
from ast import literal_eval
issues_payload = literal_eval(raw_issues.replace("GitHub issues: ", "", 1))
for issue in issues_payload:
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
    "issues": len(literal_eval(issues.output.replace("GitHub issues: ", "", 1))),
    "pull_requests": len(literal_eval(prs.output.replace("GitHub pull requests: ", "", 1))),
    "commits": len(literal_eval(commits.output.replace("GitHub commits: ", "", 1))),
}
```

## Error Handling Tips

- Inspect `ToolResult.error` before consuming `output`. Authentication failures, invalid repo names, or GraphQL validation errors are surfaced there.
- If GitHub throttles you, the GraphQL API returns `errors: [{"type": "RATE_LIMITED", ...}]`; the tool passes that text through the `error` field.
- Dates outside the repository lifetime simply return an empty list (so the output string becomes `"GitHub <entity>: []"`); no error is raised.

Use these tools when you need standardized analytics quickly. If you outgrow the default fields, switch to the lower-level `GitHubProvider` documented separately to craft custom queries.
