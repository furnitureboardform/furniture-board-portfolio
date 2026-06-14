---
name: add-project
description: Dodaj nową realizację do portfolio — "dodaj projekt X", "nowa realizacja kuchni/szafy/garderoby", "wstaw kolejne zdjęcie do portfolio". Edycja tablicy PROJECTS w ts/main.ts (+ ewentualnie nowa kategoria w filtrach index.html i typie)
---

# Skill: add-project

Dodaje nową realizację (kartę) do sekcji portfolio. Karty są generowane z tablicy `PROJECTS` w [ts/main.ts](ts/main.ts) — nie z HTML.

## Kiedy używać
"Dodaj projekt X", "nowa realizacja kuchni/szafy/garderoby", "dodaj kolejną kartę do portfolio".

## Pliki do zmodyfikowania

### 1. `ts/main.ts` — tablica `PROJECTS` (jedyny wymagany krok)
Dodaj nowy obiekt `Project` na końcu tablicy. Pola (wszystkie wymagane):
```ts
{
  id: <kolejny unikalny number>,
  category: "kuchnia" | "szafa" | "garderoba",   // musi pasować do data-filter w index.html
  categoryLabel: "Kuchnia",                        // etykieta widoczna na karcie
  title: "Nazwa realizacji",
  desc: "Krótki opis na kartę (1–2 zdania).",
  longDesc: "Pełny opis w modalu (kilka zdań).",
  tags: ["Tag1", "Tag2", "Tag3"],                  // chipy na karcie
  details: [                                        // tabela w modalu
    { label: "Styl", value: "..." },
    { label: "Czas realizacji", value: "X tygodni" },
  ],
  color: "#1a1e22",                                 // tło placeholdera (brak zdjęć — kolor)
}
```
- `id` musi być unikalne — weź `max(id) + 1`.
- Karta, filtr, modal i animacja reveal działają automatycznie (renderowane przez `renderCard`/`initProjects`).

### 2. Nowa kategoria (TYLKO jeśli projekt nie pasuje do kuchnia/szafa/garderoba)
Trzy miejsca, wszystkie muszą się zgadzać:
1. **`ts/main.ts`** — rozszerz unię `Project.category` o nowy literał (np. `"biuro"`).
2. **`index.html`** — dodaj `<button class="filter-btn" data-filter="biuro">Biura</button>` w `.projects__filters`.
3. `data-filter` w HTML musi być **identyczny** ze stringiem `category` w danych — inaczej filtr nie złapie kart.

## Gotchas
- **Brak zdjęć** — placeholder to kolorowe tło (`color`) z ikoną domu; nie ma `src` obrazów. Jeśli dodajesz realne zdjęcia, to osobne zadanie (zmiana `renderCard`/`showModal` + assety).
- **`id` unikalne** — duplikat nie wywoła błędu TS, ale modal/animacja mogą zachować się niespójnie.
- **`category` ⇄ `data-filter`** — literówka = karta nie znika/nie pojawia się przy filtrowaniu.
- Treść po polsku (cała strona jest PL).
- Weryfikacja: `npm test` + `npm run lint` + `npm run typecheck` + `npm run build` (pre-commit/pre-push i CI robią to automatycznie).

## Checklist
- [ ] Nowy obiekt w `PROJECTS` z unikalnym `id`.
- [ ] `category` pasuje do istniejącego `data-filter` (lub dodana nowa kategoria w 2 miejscach).
- [ ] `npm test` + `npm run lint` + `npm run build` przechodzą.
