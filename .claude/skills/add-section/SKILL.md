---
name: add-section
description: Dodaj nową sekcję na stronie portfolio (np. opinie, FAQ, oferta) — "dodaj sekcję X", "nowy blok na stronie", "dodaj kolejną pozycję w menu". HTML w index.html + nawigacja + animacje reveal + ewentualny init w ts/main.ts
---

# Skill: add-section

Dodaje nową sekcję landing page'a (np. opinie, FAQ, cennik) wraz z linkiem w nawigacji i animacjami wejścia.

## Kiedy używać
"Dodaj sekcję X", "nowy blok na stronie", "dodaj pozycję Y w menu".

## Pliki do zmodyfikowania

### 1. `index.html` — markup sekcji
- Wstaw `<section class="<nazwa> section" id="<id>">` w logicznym miejscu (sekcje renderują się w kolejności DOM). Wzorzec nagłówka jak w istniejących:
  ```html
  <section class="reviews section" id="reviews">
    <div class="container">
      <div class="section__header reveal-up">
        <p class="section__label">Etykieta</p>
        <h2 class="section__title">Tytuł sekcji</h2>
      </div>
      <!-- treść -->
    </div>
  </section>
  ```
- Klasy współdzielone: `section`, `container`, `section__header`, `section__label`, `section__title`, `section__desc`. Elementy wjeżdżające oznacz `reveal-up` / `reveal-left` / `reveal-right` (+ opcjonalnie `style="--delay: 0.1s"`).
- **Nawigacja** — dodaj `<li><a href="#<id>" class="nav__link">Etykieta</a></li>` w `.nav__menu` (i opcjonalnie w `footer__nav`). `id` sekcji musi się zgadzać z `href` — IntersectionObserver podświetla aktywny link po `#${id}` oraz smooth-scroll skacze po `href`.

### 2. `css/style.css` — style sekcji
- Dopisz reguły dla nowych klas (BEM: `.<nazwa>__element`). Reużywaj zmiennych CSS (`var(--font-sans)`, kolory, spacing) z góry pliku.

### 3. `ts/main.ts` — TYLKO jeśli sekcja ma interaktywność
- Statyczna sekcja **nie wymaga** zmian w TS — nawigacja, reveal, smooth-scroll i active-link działają automatycznie dla każdej `section[id]` i `.reveal-*`.
- Jeśli sekcja ma logikę (akordeon FAQ, slider opinii, liczniki) — dodaj funkcję `initX()` i wywołaj ją w handlerze `DOMContentLoaded` na końcu pliku (obok `initNav()`, `initProjects()`, …).
- Liczniki: dodaj `data-count="N"` na elemencie — `initCounters()` obsłuży go automatycznie.
- **Czysta logika (walidacja, obliczenia) → `ts/validation.ts`** (lub nowy moduł bez DOM), nie do `main.ts`. `main.ts` jest pełen `document`/`window`, więc nie da się go testować — wyniesiona logika ma sąsiedni `*.test.ts` (jak `validateContact`). Dopisz/uaktualnij test i uruchom `npm test`.

## Gotchas
- **`id` sekcji ⇄ `href` linku** — muszą być identyczne, inaczej active-link i scroll nie zadziałają.
- **`reveal-*` wymaga IntersectionObservera** — działa out-of-the-box, ale element musi mieć którąś z klas `reveal-up/left/right`, inaczej pozostanie ukryty jeśli CSS startuje od `opacity:0`.
- Nowe `initX()` zawsze rejestruj w `DOMContentLoaded` — inaczej nie wystartuje.
- Treść po polsku.
- Weryfikacja: `npm test` + `npm run lint` + `npm run typecheck` + `npm run build` (pre-commit/pre-push i CI robią to automatycznie).

## Checklist
- [ ] `<section id>` w `index.html` + reguły w `css/style.css`.
- [ ] Link `<a href="#id">` w `.nav__menu` (id == href).
- [ ] Interaktywność (jeśli jest): `initX()` wywołane w `DOMContentLoaded`.
- [ ] Czysta logika w `ts/validation.ts` (lub nowy moduł) + test, jeśli dotyczy.
- [ ] `npm test` + `npm run lint` + `npm run build` przechodzą.
