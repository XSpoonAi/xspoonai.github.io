`spoon_toolkits.github.github_provider.GitHubProvider` gives you a thin but flexible GraphQL client built on `gql`. Use it when the stock analysis tools don’t expose the fields or filtering you need.

## Environment & Auth

```bash
export GITHUB_TOKEN=ghp_your_personal_access_token   # repo scope recommended
```

- The constructor reads `GITHUB_TOKEN` automatically and raises `ValueError` immediately if no token is available. Pass `GitHubProvider(token="ghp_...")` to override per request.
- The underlying transport hits `https://api.github.com/graphql`. Rate limits (5,000 points/hour) and GraphQL errors are raised as Python exceptions, so always wrap calls in `try/except`.

## Initialization

```python
from spoon_toolkits.github.github_provider import GitHubProvider

provider = GitHubProvider()
```

Provide the token only once per provider instance. Each method is `async`, so you can reuse the same instance across awaits.

When you need deterministic cleanup (for example in long-running services), use the provider as a context manager; it will close the underlying `gql.Client` transport automatically:

```python
with GitHubProvider() as provider:
    repo = await provider.fetch_repository_info("XSpoonAi", "spoon-core")
```

## Built-in Methods

| Method | What it queries | Useful fields returned |
| --- | --- | --- |
| `fetch_issues(owner, repo, start_date, end_date)` | `issues` connection filtered by creation date | `title`, `state`, `labels`, `comments.totalCount`, `author.login`, timestamps |
| `fetch_pull_requests(...)` | `pullRequests` connection in the same date window | `mergedAt`, `reviews.totalCount`, `commits.totalCount`, labels, author |
| `fetch_commits(...)` | `defaultBranchRef.target.history` limited to 100 commits (GraphQL limit) | `message`, `committedDate`, `additions`, `deletions`, `changedFiles`, `author` |
| `fetch_repository_info(owner, repo)` | `repository` node | `stargazerCount`, `forkCount`, `watcherCount`, open issue/pr counts, topics, license |

The default history queries request 100 nodes. To page further, copy the query strings in `github_provider.py` and extend them with `after` cursors.

## Example: Custom GraphQL + Provider Methods

```python
from spoon_toolkits.github.github_provider import GitHubProvider
from gql import gql

provider = GitHubProvider()

# Use the prebuilt helper
repo = await provider.fetch_repository_info("XSpoonAi", "spoon-core")
print("Stars:", repo["stargazerCount"])

# Extend with your own query
custom_query = gql("""
  query($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      releases(last: 5) {
        nodes {
          name
          tagName
          publishedAt
        }
      }
    }
  }
""")

result = provider.client.execute(custom_query, variable_values={"owner": "XSpoonAi", "repo": "spoon-core"})
```

## Error Handling & Best Practices

- Each method wraps `client.execute` and raises `Exception` with the underlying GraphQL message (`RATE_LIMITED`, `NOT_FOUND`, `FORBIDDEN`, etc.). Catch `Exception` at call sites to degrade gracefully.
- For long-running agents, instantiate the provider once and reuse it—this avoids fetching the schema repeatedly.
- GraphQL schemas are fetched on first transport use (`fetch_schema_from_transport=True`). When developing offline, consider setting that flag to `False` in a forked provider to skip the extra call.

Reach for `GitHubProvider` when you need to compose bespoke queries, add pagination, or stitch multiple GraphQL responses together within a single agent step.
