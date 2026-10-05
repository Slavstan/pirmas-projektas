# Pirmas Projektas

Paprastas React + Vite projektas su dabartinės datos rodymu, prisijungimo formos vartotojo sąsaja ir paspaudžiamu skaitikliu.

## Funkcijos

- **Dabartinė data** – rodoma viršutiniame dešiniajame kampe formatu `YYYY-MM-DD`.
- **Prisijungimo forma** – el. pašto ir slaptažodžio laukai bei LOGIN mygtukas.
- **Skaitiklis** – paspaudus mygtuką, skaičius padidėja vienetu.
- **Hero grafika** – puslapio viršutinėje centrinėje dalyje rodomas projekto paveikslėlis.
- **Komponentų atskyrimas** – datos, prisijungimo formos ir skaitiklio kodas laikomas atskiruose komponentuose.

> Prisijungimo forma šiuo metu yra tik vizualinė sąsaja. Ji neatlieka tikro prisijungimo ir nenaudoja serverio ar duomenų bazės.

## Naudojamos technologijos

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (JSX)
- CSS

## Projekto struktūra

```text
public/
├── favicon.svg
└── icons.svg

src/
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── Counter.jsx
│   ├── CurrentDate.jsx
│   └── LoginForm.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx

index.html
package.json
vite.config.js
```

## Paleidimas lokaliai

### 1. Įdiekite priklausomybes

```bash
npm install
```

### 2. Paleiskite kūrimo serverį

```bash
npm run dev
```

Terminale pateiktą vietinį adresą atidarykite naršyklėje (dažniausiai `http://localhost:5173`).

### 3. Sukurkite produkcinę versiją

```bash
npm run build
```

### 4. Peržiūrėkite produkcinę versiją lokaliai

```bash
npm run preview
```

## Komponentai

| Failas | Paskirtis |
|---|---|
| `src/App.jsx` | Sujungia puslapio komponentus ir valdo skaitiklio būseną. |
| `src/components/CurrentDate.jsx` | Parodo dabartinę datą. |
| `src/components/LoginForm.jsx` | Atvaizduoja el. pašto ir slaptažodžio laukus bei LOGIN mygtuką. |
| `src/components/Counter.jsx` | Atvaizduoja skaitiklį ir jo didinimo mygtuką. |
| `src/App.css` | Pagrindinio puslapio ir komponentų stiliai. |
| `src/index.css` | Bendrieji puslapio stiliai. |

## Tolimesnė plėtra

Projektą galima plėsti palaipsniui, išlaikant esamą išdėstymą ir komponentų atskyrimą. Prieš keičiant funkcionalumą verta patikrinti atitinkamus failus ir atlikti nedidelius, lengvai patikrinamus pakeitimus.

---
Sukurta naudojant React ir Vite.
