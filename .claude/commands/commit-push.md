Run the simplify skill first to review changed code, fix any issues found, then commit and push.

Steps:
1. Run `git status` and `git diff` to see what changed.
2. Run the `simplify` skill on the changed files — review for code quality, reuse, and efficiency. Fix any issues found before proceeding.
3. Re-run `git diff` after fixes to confirm the final state of changes.
4. Run `git log --oneline -5` to match the commit message style.
5. Stage only relevant changed files. Never stage build output — `dist/`, `js/main.js` and `js/main.js.map` are gitignored.
6. Write a commit message following this project's convention:
   - Format: `<type>: <short description in English, imperative mood>`
   - Types: `feat` (new feature/section/project), `fix` (bug fix), `refactor` (restructure without behavior change), `style` (CSS/visual only), `docs`, `chore`
   - Subject line: max ~72 chars, lowercase after the colon, no period at the end
   - No body or footer needed for simple changes
   - Never add `Co-Authored-By` or any AI attribution
7. Review `.claude/skills/` — separate check from updating docs. For each changed path/pattern, ask: "does an existing SKILL.md document this pattern?" Triggers:
   - new entry in `PROJECTS` array in `ts/main.ts` → `add-project`
   - new `<section>` + nav link + reveal init → `add-section`
   - if a recurring new pattern emerges that no skill covers, create a new SKILL.md.

   Also review documentation (README.md, CLAUDE.md, ARCHITECTURE.md) — update affected sections. Do not add docs for things that haven't changed.
8. **Testy** — jeśli diff zmienia czystą logikę objętą testami (`ts/validation.ts` lub inny moduł z sąsiednim `*.test.ts`), zaktualizuj/rozszerz `*.test.ts`. Uruchom `npm test` (`vitest run`) — musi przejść (pre-commit hook też je odpala).
9. Run `npm run lint` (ESLint). Fix any errors. (Pre-commit runs `lint-staged` on staged `.ts` with `--max-warnings=0`; pre-push runs full lint.)
10. Run `npm run typecheck` (`tsc --noEmit`). Fix any errors. (Pre-push runs the same.)
11. Run `npm run build` (`tsc && vite build`) to confirm it bundles.
12. Commit using a HEREDOC so formatting is correct. Never use `--no-verify` — if a hook fails, fix the cause.
13. Push to the current branch with `git push`. CI (`.github/workflows/ci.yml`) runs test + lint + typecheck + build; the deploy workflow (`.github/workflows/deploy.yml`) triggers on push to `master` and auto-deploys the live site.

If $ARGUMENTS is provided, use it as the commit message instead of auto-generating one.
