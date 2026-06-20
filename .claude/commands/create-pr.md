Create a pull request from the current branch into `master`.

Steps:
1. Run `git status` to confirm the working tree is clean. If there are uncommitted changes, STOP and tell the user to run `/commit-push` first — this command does not commit.
2. Run `git branch --show-current`. If it is `master` (or the default branch), STOP — never open a PR from the default branch into itself.
3. Run `git log origin/master..HEAD --oneline` to see the commits that will be included. If empty, STOP — there is nothing to open a PR for.
4. Ensure the branch is pushed: `git push -u origin <current-branch>` (retry up to 4 times with exponential backoff on network errors). Never use `--force`.
5. Build the PR title and body:
   - **Title**: same convention as commits — `<type>: <short description in English, imperative mood>`, max ~72 chars, lowercase after the colon, no trailing period. If there is a single commit, reuse its subject; otherwise summarize the set.
   - **Body**: a short `## Summary` (bullet points of what changed and why) and a `## Test plan` section (what was run / how to verify). Keep it terse.
   - Never add `Co-Authored-By` or any AI/Claude/Anthropic attribution to the title or body.
6. Create the PR against base `master`:
   - In the web/remote environment use the GitHub MCP tool `mcp__github__create_pull_request` (owner `furnitureboardform`, repo `furniture-board-portfolio`, base `master`, head = current branch).
   - Locally, if `gh` is available, use `gh pr create --base master --title "<title>" --body "<body>"`.
7. Return the PR URL to the user. Do NOT merge it.

If $ARGUMENTS is provided, use it as the PR title instead of auto-generating one.
