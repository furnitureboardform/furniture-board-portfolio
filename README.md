# furniture-board-portfolio

Statyczny landing page (one-page) portfolio stolarni „Meble Premium" — hero, o nas, filtrowane realizacje z modalem, proces i formularz kontaktowy. Vanilla TypeScript + Vite, deploy na GitHub Pages.

## Stack
TypeScript (`strict`, bez frameworka), Vite, czysty HTML/CSS. Bez routera, testów i lintera.

## Uruchamianie
```bash
npm install
npm run dev      # dev server (Vite)
npm run build    # tsc && vite build → dist/
npm run preview  # podgląd builda
```

## Struktura
- [index.html](index.html) — markup wszystkich sekcji, nawigacja, modal, formularz.
- [ts/main.ts](ts/main.ts) — dane `PROJECTS` + interaktywność (`init*` w `DOMContentLoaded`).
- [css/style.css](css/style.css) — wszystkie style (BEM, zmienne CSS).
- [vite.config.ts](vite.config.ts) — `base` dla GitHub Pages.
- `js/`, `dist/` — build output (gitignored).

## Deploy
[.github/workflows/deploy.yml](.github/workflows/deploy.yml) buduje i publikuje na GitHub Pages przy push do gałęzi `master` (lub ręcznie przez `workflow_dispatch`).

## Dla agentów AI
Nawigacja, model treści i reguły pracy: [CLAUDE.md](CLAUDE.md). Przepływ i punkty rozszerzeń: [ARCHITECTURE.md](ARCHITECTURE.md). Skille w [.claude/skills/](.claude/skills/): `add-project` (nowa realizacja), `add-section` (nowa sekcja). Komenda `/commit-push` automatyzuje review + commit + push.
