Stwórz dokument deweloperski na podstawie bieżącej konwersacji i zapisz go w `docs/development/<temat>/`.

Celem jest trwała dokumentacja, z której **inny agent (lub Ty w przyszłej sesji) skorzysta jako kontekstu** — ma wyjaśniać DLACZEGO, JAK i jak to ODTWORZYĆ, nie tylko streszczać czat.

## Struktura — folder na temat, nie luźny plik
Każdy temat to **podfolder** `docs/development/<temat-slug>/`, w którym:
- `<slug>.md` — główny dokument (kontekst, decyzje, pułapki, weryfikacja). Bez daty w nazwie — data jest w nagłówku.
- `README.md` — krótkie wejście: linkuje do głównego dokumentu i wymienia artefakty + przepływ uruchomienia.
- **Artefakty** (opcjonalnie) — gotowe, uruchamialne pliki użyte w pracy: skrypty, zapytania, tymczasowe testy, body requestów. Zapisz je tu zamiast zostawiać tylko w czacie.

Nazwa `<temat-slug>` z `$ARGUMENTS` (zslugifikowana, kebab-case) lub wyprowadzona z tematu konwersacji. Dopisuj do istniejącego folderu, jeśli temat już jest.

## Kroki
1. Utwórz folder `docs/development/<temat-slug>/` jeśli nie istnieje.
2. Przejrzyj całą konwersację i wyłuskaj wartość trwałą:
   - problem / cel i kontekst (dlaczego się tym zajmowaliśmy),
   - decyzje — co wybrano i co **odrzucono**, z uzasadnieniem,
   - konkretne zmiany/odkrycia w kodzie i API: pliki, funkcje, stałe, endpointy (linkuj `[plik](ścieżka)`),
   - **pułapki i niespodzianki** — rzeczy nieoczywiste, na które agent się nadział (osobny rozdział, to najcenniejsza część),
   - jak zweryfikowano (testy, realny przebieg z konkretnymi liczbami/wynikiem),
   - jak to **odtworzyć** krok po kroku + co posprzątać po sobie,
   - co otwarte / TODO / co dodać by dokończyć.
   Pomiń ślepe uliczki bez wartości, literówki, przepychanki o formatowanie.
3. Zapisz `<slug>.md` (bez daty w nazwie). Szkielet — **dostosuj do tematu**, dodawaj własne sekcje domenowe (np. „Jak działa API X", „Co dodać by zrobić z tego funkcję") i tabele, gdy pomagają:

   ```markdown
   # <Tytuł>

   > Data: YYYY-MM-DD · Status: <done | in-progress | superseded>

   ## Kontekst
   <problem i dlaczego>

   ## Decyzje
   <co wybrano i dlaczego; co odrzucono i dlaczego>

   ## <Sekcje domenowe wg potrzeb>
   <jak coś działa, mapowania, tabele pól/parametrów>

   ## Pułapki i wnioski
   <nieoczywiste rzeczy, gotchas, na co uważać następnym razem>

   ## Weryfikacja
   <jak sprawdzono — testy, realny przebieg, konkretne wyniki/liczby>

   ## Odtworzenie
   <kroki + linki do artefaktów w tym folderze; co posprzątać po sobie>

   ## Otwarte / TODO
   <co zostało; usuń sekcję jeśli puste>
   ```

   Pomiń puste sekcje — nie wpisuj „brak".
4. Jeśli w pracy powstały uruchamialne artefakty (skrypty, zapytania, tymczasowe testy), zapisz je do tego folderu i napisz `README.md` z przepływem ich użycia. Zaznacz, że nie są częścią buildu/testów i co usunąć po użyciu.
5. Pisz po polsku, zwięźle (zgodnie z Response Rules projektu). Bez lania wody, bez powtarzania treści CLAUDE.md.
6. Po zapisie podaj ścieżki utworzonych plików jako klikalne linki.

**Nie commituj** — to tylko utworzenie dokumentacji (reguła #16). Commit wykonuje user jawnie przez `commit-push`.
