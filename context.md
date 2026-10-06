# Projekto kontekstas: Pirmas Projektas

Šis dokumentas skirtas įkelti į ChatGPT kaip kontekstą, kai prašoma suplanuoti ar parengti šio projekto MVP. Prieš siūlydamas pakeitimus, ChatGPT turi remtis tikrais projekto failais, nes šis aprašas gali pasenti.

## Projekto paskirtis

Tai nedidelis mokomasis React + Vite projektas. Dabartinis MVP parodo prisijungimo sąsają ir po formos pateikimo pateikia demonstracinį prisijungimo patvirtinimą bei nuorodas į kelias paslaugas. Prisijungimas yra tik kliento pusės demonstracija, tikro autentifikavimo nėra.

## Dabartinis stack

- React 19
- Vite 8
- JavaScript ir JSX
- CSS
- Priklausomybės nurodytos `package.json`; papildomų UI bibliotekų nėra.

## Esamos funkcijos

1. **Prisijungimo ekranas**
   - El. pašto ir slaptažodžio laukai su HTML privalomumo patikra.
   - Pateikus formą puslapis nepersikrauna, o pereina į prisijungusio naudotojo vaizdą.
   - Tai tik UI: nėra serverio, paskyros patikros, slaptažodžio saugojimo ar tikro autentifikavimo.

2. **Prisijungimo patvirtinimas**
   - Viršutiniame kairiajame kampe rodomas tekstas „Sėkmingai prisijungėte prie pirmo projekto“ ir įvestas el. paštas.
   - Ekrane yra „Atgal“ mygtukas, grąžinantis į prisijungimo formą.

3. **Paslaugų nuorodos po prisijungimo**
   - Centre, vienoje eilėje, rodomi ChatGPT, Claude, GitHub ir Cursor mygtukai.
   - Jie atidaro atitinkamus puslapius naujame skirtuke: `https://chatgpt.com/`, `https://claude.ai/`, `https://github.com/`, `https://www.cursor.com/`.

4. **Dabartinė data**
   - Rodoma viršutiniame dešiniajame kampe `YYYY-MM-DD` formatu.

5. **Vizualai**
   - Prisijungimo ekrane rodomas hero paveikslėlis su React ir Vite ženklais.
   - Išlaikyti šviesaus ir tamsaus režimo CSS kintamieji.

## Pagrindinė failų struktūra

```text
src/
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── Counter.jsx
│   ├── CurrentDate.jsx
│   └── LoginForm.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

`Counter.jsx` egzistuoja kaip skaitiklio komponentas, tačiau dabartiniame `App.jsx` jis nenaudojamas. Prieš nuspręsdamas, ką daryti su šiuo komponentu ar kitais failais, patikrink jų naudojimą.

## MVP ribos ir pageidavimai

- Išsaugoti esamas veikiančias funkcijas, komponentų atskyrimą, išdėstymą ir šviesaus / tamsaus režimo sprendimus.
- Rinktis nedidelius, aiškius pakeitimus; vengti plataus perrašymo ir nereikalingų priklausomybių.
- Nekeisti prisijungimo į tikrą autentifikavimą, jei to aiškiai neprašoma.
- Naujos funkcijos turi veikti siauruose ekranuose, naudoti semantišką HTML ir išlaikyti klaviatūros prieinamumą bei matomą fokusą.
- Datos formatą palikti `YYYY-MM-DD`, nebent aiškiai nurodyta kitaip.
- Projekto bendravimo kalba – lietuvių.

## Paleidimas ir patikra

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Nurodymas ChatGPT

Naudok šį failą tik kaip projekto kontekstą. Prieš rašydamas ar keisdamas kodą, patikrink įkeltus tikrus projekto failus, ypač `AGENTS.md`, `src/App.jsx`, komponentus ir CSS. Jei prašomas MVP aprašas ar pakeitimas neaiškus, užduok vieną konkretų klausimą. Jei užduotis aiški, pateik praktišką, mažos apimties sprendimą ir paaiškink, kuriuos failus jis paliečia bei kaip jį paleisti ar patikrinti.
