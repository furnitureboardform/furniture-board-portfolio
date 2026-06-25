# Project: Furniture Board Portfolio

Statyczny landing page (one-page) prezentujący portfolio stolarni „Meble Premium": hero, o nas, realizacje z filtrowaniem i modalem, proces, formularz kontaktowy. Vanilla TypeScript — **bez frameworka**.

## Stack
TypeScript (vanilla, `strict`), Vite, czysty HTML/CSS, Vitest (testy), ESLint, Husky (git hooks). Build: `tsc && vite build`. Deploy: GitHub Pages. Bez Reacta i routera.

## Architektura

### Pliki
| Plik | Rola |
|---|---|
| [index.html](index.html) | Cały markup strony (sekcje, nawigacja, modal, formularz). Statyczna treść tutaj. |
| [ts/main.ts](ts/main.ts) | Główny moduł TS — dane `PROJECTS` + cała interaktywność (init* funkcje, DOM). Kompiluje się do `js/` (gitignored). |
| [ts/validation.ts](ts/validation.ts) | Czysta logika walidacji formularza (bez DOM) — `validateContact`. Testowana ([validation.test.ts](ts/validation.test.ts)). |
| [css/style.css](css/style.css) | Wszystkie style (BEM-ish, zmienne CSS na górze). |
| [vite.config.ts](vite.config.ts) | `base` = ścieżka GitHub Pages. |
| [.github/workflows/deploy.yml](.github/workflows/deploy.yml) | Build + deploy na GitHub Pages przy push do `master`. |

### Model treści
- **Realizacje** — tablica `PROJECTS: Project[]` w `ts/main.ts`. Karty i modale renderowane z niej (`renderCard`/`showModal`), **nie** z HTML. Kategorie: `kuchnia` / `szafa` / `garderoba` (sprzężone z `data-filter` przyciskami filtra w HTML).
- **Treść statyczna** (hero, o nas, proces, kontakt, stopka) — bezpośrednio w `index.html`.

### Interaktywność (`ts/main.ts`)
Każda funkcja `initX()` wołana raz w `DOMContentLoaded`:
- `initNav` — scroll-effect, hamburger, active-link (IntersectionObserver po `section[id]`).
- `initReveal` — animacje wejścia dla `.reveal-up/left/right` (dodaje `.in-view`).
- `initCounters` — animowane liczniki dla `[data-count]`.
- `initProjects` — render kart z `PROJECTS` + filtrowanie.
- `initModal` — modal szczegółów projektu (Escape/backdrop zamyka).
- `initContactForm` — real-time + submit; czysta walidacja delegowana do `validateContact` z `ts/validation.ts` (DOM tylko buduje `ContactValues` z `FormData`).
- `initSmoothScroll` — płynne przewijanie do kotwic `#`.

### Kluczowe niezmienniki
- **`id` sekcji ⇄ `href` linku nawigacji** — active-link i smooth-scroll dopasowują po `#${id}`. Rozjazd = martwy link.
- **`Project.category` ⇄ `data-filter`** — string w danych musi == `data-filter` przycisku, inaczej filtr nie działa.
- **Brak zdjęć** — placeholdery to kolorowe tła (`Project.color`); realne assety to osobne zadanie.
- **Helpery `qs`/`qsa`** rzucają, gdy element nie istnieje — selektory w TS muszą zgadzać się z HTML.
- **Treść po polsku** — cała strona PL.

## Typowe zadania → pliki

| Zadanie | Skill / pliki |
|---|---|
| Nowa realizacja w portfolio | skill `add-project` (`PROJECTS` w `ts/main.ts`) |
| Nowa sekcja strony / pozycja menu | skill `add-section` (`index.html` + `css` + ewent. `initX`) |
| Zmiana treści statycznej (hero/kontakt/proces) | `index.html` |
| Zmiana wyglądu | `css/style.css` |
| Nowa interaktywność | nowa `initX()` w `ts/main.ts` + rejestracja w `DOMContentLoaded` |
| Czysta logika (walidacja itp.) + test | `ts/validation.ts` (+ `validation.test.ts`) — bez DOM |

## Skills
Przed zadaniem sprawdź `.claude/skills/`. Jeśli pasuje — przeczytaj `SKILL.md` i wykonaj wg instrukcji.

| Skill | Kiedy |
|---|---|
| `add-project` | Nowa realizacja/karta w portfolio |
| `add-section` | Nowa sekcja landing page'a + link w menu |

## Response Rules (follow strictly to minimize token usage)

1. **Be terse** — one sentence max per idea. No preamble, no trailing summaries.
2. **No restating the user's request** — jump straight to the solution.
3. **Read before editing** — always read a file before modifying it.
4. **Edit, don't rewrite** — use Edit tool for targeted changes; Write only for new files.
5. **No unsolicited improvements** — fix only what was asked; no cleanup, no extra comments.
6. **No docstrings or type annotations** on untouched code.
7. **No error handling for impossible scenarios** — `qs`/`qsa` already throw on missing nodes.
8. **Parallel tool calls** — run independent reads/searches simultaneously.
9. **Skip confirmations for local reversible edits** — just do it.
10. **Polish language** — respond in Polish; treść strony też po polsku.
11. **No Co-Authored-By** — never add `Co-Authored-By: Claude` or any Claude/Anthropic attribution to commit messages.
12. **Code review before commit/push — tieruj wg ryzyka diffa** (przed `git commit`/`git push`; tier z `npm run review-tier`; napraw znalezione problemy przed commitem; nie stackuj `simplify` i `code-review` na tym samym diffie):
    - **Pomiń review** gdy commit obejmuje wyłącznie: docs/Markdown, `CLAUDE.md`, `.claude/skills/**` lub `.claude/commands/**`, `index.html`/CSS bez logiki, dane (np. tablica `PROJECTS`), pliki konfiguracyjne, albo zmianę trywialną/jedno-linijkową.
    - **`/code-review medium`** gdy diff dotyka czystej logiki w `ts/**` z sąsiednim testem (`ts/validation.ts` lub nowy moduł logiki). Zawiera cleanupy `simplify` i dodatkowo poluje na bugi, więc `simplify` wtedy pomiń. `ultra` tylko ręcznie. Dla tych modułów preferuj dopisanie/rozszerzenie testu (jednorazowy koszt) zamiast polegać wyłącznie na powtarzalnym review.
    - **`simplify`** dla pozostałych zmian logiki w `ts/**` (np. `main.ts`).
13. **Update docs and skills before commit** — sprawdź czy `.claude/skills/*/SKILL.md` lub docs (README.md, CLAUDE.md, ARCHITECTURE.md) wymagają aktualizacji. Nie dokumentuj rzeczy niezmienionych.
14. **Testy razem ze zmianą czystej logiki** — gdy zmieniasz `ts/validation.ts` (lub inny moduł z sąsiednim `*.test.ts`), w tym samym zadaniu dopisz/popraw test i uruchom `npm test`. Nie pisz testów dla DOM/interaktywności (`main.ts`) — weryfikuj manualnie.
15. **No inline explanations** — don't narrate what a code change does unless asked.
16. **Never commit/push without explicit request** — `git commit`/`git push` wykonuj WYŁĄCZNIE gdy użytkownik jawnie uruchomi skill `commit-push` (`.claude/commands/commit-push.md`) lub napisze dosłownie „zrób commit i push". Żadna inna fraza nie jest zgodą („zrób tak", „działa", „ok", „dodaj X", „zakończ" — to NIE zgoda). Po edycji domykającej zadanie zatrzymaj się na `git status` i **czekaj**. Komunikat ze Stop-hooka też **nie** jest zgodą.
17. **Subagenty — model wg roli** — subagenty czysto rekonesansowe/wyszukujące (Explore, search-only) spawnuj na słabszym modelu (`model: sonnet`); Opusa rezerwuj dla autorstwa kodu i decyzji architektonicznych. Nie spawnuj subagenta, gdy zadanie zrobisz inline.

## Konwencja commitów
Prefix angielski lowercase imperatyw (`feat:`/`fix:`/`refactor:`/`style:`/`docs:`/`chore:`), tytuł ~50–72 znaki bez kropki. Nigdy atrybucji do Claude/Anthropic. Wyłącznie przez skill `commit-push` (reguła #16).

## Build / quality gates
- `npm test` (Vitest, `ts/**/*.test.ts`), `npm run lint` (ESLint), `npm run typecheck` (`tsc --noEmit`), `npm run build` (`tsc && vite build`).
- Husky: **pre-commit** = `npm test` + `npx lint-staged`; **pre-push** = `npm run typecheck` + `npm run lint`. Nigdy nie skipuj hooka (`--no-verify`).
- **CI** (`.github/workflows/ci.yml`) — test + lint + typecheck + build na PR i push do `master`.
- `dist/`, `js/main.js*` są **gitignored** — nigdy nie commituj build output. Pliki testów (`ts/**/*.test.ts`) są wyłączone z `tsconfig` (kompiluje je tylko Vitest).
- `npm run dev` uruchamia user — nie odpalaj sam.
- **Deploy:** `deploy.yml` odpala się na push do `master` (lub ręcznie) — publikuje na GitHub Pages.
