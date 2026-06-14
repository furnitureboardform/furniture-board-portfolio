# Architecture — Furniture Board Portfolio

Aktualizuj przy zmianie przepływu lub dodaniu punktu rozszerzeń.

## Model

Statyczny one-page bez frameworka. Jeden dokument `index.html`, jeden moduł `ts/main.ts`, jeden arkusz `css/style.css`.

```
        index.html  ──(<script type=module src=ts/main.ts>)──▶  ts/main.ts
        │  sekcje, nav, modal,                                  │  PROJECTS[] (dane)
        │  formularz (markup statyczny)                         │  init*() (zachowanie)
        │                                                       │
        │  #projectsGrid  ◀────renderCard()/initProjects()──────┤
        │  .filter-btn    ◀────filterCards()────────────────────┤
        │  #projectModal  ◀────showModal()──────────────────────┤
        │  section[id]    ◀────initNav/observer (active link)────┤
        │  .reveal-*      ◀────initReveal (in-view)──────────────┤
        │  [data-count]   ◀────initCounters─────────────────────┤
        │  #contactForm   ◀────initContactForm ──▶ validateContact (ts/validation.ts, czyste, testowane)
        │
        └─ css/style.css  (BEM, zmienne CSS)

   build:  tsc && vite build  →  dist/  →  GitHub Pages (deploy.yml @ push master)
   gates:  vitest · eslint · tsc --noEmit  (husky pre-commit/pre-push + ci.yml)
```

## Punkty rozszerzeń

| Cel | Gdzie | Skill |
|---|---|---|
| Nowa realizacja | obiekt w `PROJECTS` (`ts/main.ts`) | `add-project` |
| Nowa kategoria filtra | unia `Project.category` + `data-filter` w `index.html` | `add-project` |
| Nowa sekcja + link menu | `<section id>` w `index.html` + styl + ewent. `initX()` | `add-section` |
| Nowa interaktywność | funkcja `initX()` + rejestracja w `DOMContentLoaded` | — |
| Czysta logika (walidacja itp.) + test | `ts/validation.ts` (+ `validation.test.ts`), bez DOM | — |
| Treść statyczna | `index.html` | — |
| Wygląd | `css/style.css` | — |

## Konwencje i pułapki
- `id` sekcji musi == `href` linku nawigacji (active-link + smooth-scroll dopasowują po `#${id}`).
- `Project.category` musi == `data-filter` przycisku filtra.
- `qs`/`qsa` rzucają przy braku elementu — selektory w TS muszą zgadzać się z HTML.
- Każda nowa `initX()` musi być wywołana w `DOMContentLoaded`, inaczej martwa.
- Brak zdjęć — placeholdery to kolory (`Project.color`).
- Build output (`dist/`, `js/main.js*`) gitignored — nie commituj.
- Deploy z gałęzi `master` (push auto-deployuje na GitHub Pages).
- Czysta logika do testów idzie do `ts/validation.ts` (bez DOM) — `main.ts` jest pełen `document`/`window`, więc nie da się go zaimportować w teście node. Pliki `ts/**/*.test.ts` są wyłączone z `tsconfig` (kompiluje je tylko Vitest), żeby nie trafiały do `js/`.
