# Projekto failai ChatGPT įkėlimui

Žemiau pateiktas pasirinkto projekto failų turinys. Failų vietos nurodytos antraštėse.

## `AGENTS.md`

```markdown
# AGENTS.md — AI darbo taisyklės

Šiame faile aprašytos taisyklės AI asistentui, kuris padeda kurti ir prižiūrėti šį projektą. Laikykis jų kiekvienos užduoties metu.

## 1. Prieš pradedant
- Perskaityk `context.md`, kad suprastum projekto paskirtį, dabartinę būseną ir naudotojo pageidavimus.
- Perskaityk `README.md`, jei reikia suprasti projekto funkcijas ar paleidimo komandas.
- Patikrink tikruosius projekto failus prieš darydamas pakeitimus. Dokumentai yra kontekstas, o ne garantija, kad kodas vis dar toks pats.
- Jei užduotis aiški, pradėk ją vykdyti neklausinėdamas nereikalingų klausimų.
- Jei trūksta esminės informacijos arba yra keli reikšmingai skirtingi sprendimai, užduok vieną konkretų klausimą.

## 2. Pagrindinis principas
**Išsaugok tai, kas jau veikia. Keisk tik tai, ko reikia konkrečiai užduočiai.**

- Nedaryk didelių perrašymų ar struktūrinių pertvarkymų be aiškaus prašymo.
- Nešalink veikiančių funkcijų, komponentų, paveikslėlių ar stilių vien dėl to, kad jie atrodo nereikalingi.
- Išlaikyk dabartinį dizainą, išdėstymą, spalvas ir šviesaus / tamsaus režimo sprendimus, nebent naudotojas prašo juos keisti.
- Nedaryk papildomų, su užduotimi nesusijusių pakeitimų.

## 3. Projekto struktūra ir komponentai
- Laikykis esamo `src/components/` komponentų atskyrimo.
- `App.jsx` naudok pagrindiniam komponentų sujungimui ir bendram puslapio būsenos valdymui.
- Datos, prisijungimo formos ir skaitiklio logiką palik atitinkamuose komponentuose, nebent užduotis pagrįstai reikalauja kitaip.
- Naują komponentą kurk tada, kai jis turi aiškią, atskirą atsakomybę arba kai taip prašo naudotojas.
- Naudok esamą React ir Vite konfigūraciją. Nepridėk naujų bibliotekų be reikalo.

## 4. Esamos funkcijos
- **Data:** išlaikyk formatą `YYYY-MM-DD` ir dabartinį jos rodymo išdėstymą, nebent nurodyta kitaip.
- **Prisijungimo forma:** šiuo metu tai tik vartotojo sąsaja. Nekurk tikro autentifikavimo, serverio, duomenų bazės ar slaptažodžių saugojimo, jei naudotojas aiškiai neprašo.
- **Skaitiklis:** išsaugok galimybę didinti skaičių paspaudus mygtuką ir dabartinį jo išdėstymą, nebent nurodyta kitaip.
- **Hero grafika ir kiti vaizdai:** prieš keisdamas ar šalindamas patikrink, kur jie naudojami.

## 5. Kodo kokybė
- Rašyk aiškų, įskaitomą ir nuoseklų React / JSX bei CSS kodą.
- Laikykis esamų projekto pavadinimų, formatavimo ir stiliaus konvencijų.
- Naudok prasmingus komponentų, kintamųjų ir CSS klasių pavadinimus.
- Venk nereikalingo sudėtingumo, perteklinių abstrakcijų ir dubliuoto kodo.
- Neįterpk tikrų prisijungimo duomenų, API raktų ar kitų paslapčių į kodą.
- Nekeisk priklausomybių ar konfigūracijos failų, jei tam nėra būtinybės.

## 6. Dizainas ir pritaikomumas
- Nauji elementai turi vizualiai derėti prie esamo puslapio.
- Išlaikyk aiškią hierarchiją, pakankamus tarpus ir nuoseklius mygtukų bei laukų stilius.
- Patikrink, kad nauji elementai nesugadintų išdėstymo siauresniuose ekranuose.
- Naudok semantiškus HTML elementus ir susiek formų laukus su jų etiketėmis.
- Išlaikyk klaviatūra pasiekiamus valdiklius ir matomą fokusavimo būseną.

## 7. Darbo eiga
1. Įvardyk, kokius failus ir kokią dalį reikia keisti.
2. Patikrink susijusius failus ir jų tarpusavio ryšius.
3. Atlik mažiausią pakeitimų rinkinį, kuris išsprendžia užduotį.
4. Peržiūrėk pakeitimus ir patikrink, ar neliko nereikalingų redagavimų.
5. Jei įmanoma, paleisk tinkamą patikrą, pavyzdžiui, `npm run build`. Jei jos nepaleidai, aiškiai tai pasakyk.
6. Pateik trumpą santrauką: kas pakeista, kokie failai paliesti ir kaip patikrinti rezultatą.

## 8. Klaidų paieška
- Jei puslapis rodo baltą ekraną arba neveikia, pirmiausia patikrink terminalo ir naršyklės konsolės klaidas.
- Ieškok konkrečios klaidos priežasties prieš keisdamas daug failų.
- Problemą izoliuok mažais, grįžtamais bandymais.
- Nekeisk veikiančių komponentų į supaprastintus testinius variantus nepaaiškinęs, kodėl ir kaip bus grąžintas jų funkcionalumas.
- Nelaikyk CSS įspėjimų automatiškai JavaScript atvaizdavimo klaidos priežastimi.

## 9. Bendravimas
- Bendrauk lietuviškai, nebent naudotojas paprašo kitos kalbos.
- Paaiškink techninius dalykus paprastai ir žingsnis po žingsnio.
- Nerašyk, kad pakeitimas pavyko, kol jo nepatikrinai.
- Jei yra rizika sugadinti esamą funkcionalumą, trumpai paaiškink riziką ir pasiūlyk saugų kelią.

## 10. Ko nedaryti be aiškaus prašymo
- Neperkurti viso puslapio ar jo dizaino.
- Neįdiegti naujų bibliotekų ar įrankių.
- Nepridėti backend, autentifikavimo ar duomenų saugojimo.
- Nešalinti esamų komponentų, paveikslėlių ar dokumentacijos.
- Neperrašyti `package.json`, Vite ar ESLint konfigūracijos.
- Neatlikti plataus refaktorizavimo, nesusijusio su užduotimi.

## 11. Instrukcijų prioritetas
1. Naujausias aiškus naudotojo prašymas.
2. Šio `AGENTS.md` failo taisyklės.
3. `context.md` ir `README.md` aprašymai.
4. AI asistento numatytosios prielaidos.

Jei tikrasis kodas skiriasi nuo dokumentacijos, vadovaukis tikruoju kodu ir, jei naudinga, pasiūlyk atnaujinti dokumentus.
```

## `package.json`

```json
{
  "name": "pirmas-projektas",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.8",
    "react-dom": "^19.2.8"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "eslint": "^10.10.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.6",
    "globals": "^17.12.0",
    "vite": "^8.3.0"
  }
}
```

## `src/App.jsx`

```jsx
import { useState } from 'react'
import CurrentDate from './components/CurrentDate'
import LoginForm from './components/LoginForm'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <>
      {isLoggedIn && (
        <div className="login-success-message">
          <h1>Sėkmingai prisijungėte prie pirmo projekto</h1>
          <p className="login-success-email">{email}</p>
        </div>
      )}

      <div className="current-date-wrapper">
        <CurrentDate />
      </div>

      <section id="center">
        {isLoggedIn ? (
          <>
            <div className="service-buttons" aria-label="Paslaugos">
              {[
                { name: 'ChatGPT', url: 'https://chatgpt.com/' },
                { name: 'Claude', url: 'https://claude.ai/' },
                { name: 'GitHub', url: 'https://github.com/' },
                { name: 'Cursor', url: 'https://www.cursor.com/' },
              ].map((service) => (
                <a
                  className="service-button"
                  href={service.url}
                  key={service.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {service.name}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="back-button"
              onClick={() => setIsLoggedIn(false)}
            >
              Atgal
            </button>
          </>
        ) : (
          <>
            <div className="hero">
              <img
                src={heroImg}
                className="base"
                width="170"
                height="179"
                alt=""
              />

              <img src={reactLogo} className="framework" alt="React logo" />

              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>

            <h1>Pirmas Projektas</h1>

            <LoginForm
              onLogin={(enteredEmail) => {
                setEmail(enteredEmail)
                setIsLoggedIn(true)
              }}
            />
          </>
        )}
      </section>
    </>
  )
}

export default App
```

## `src/App.css`

```css
.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg)
      rotateY(39deg) scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg)
      rotateY(39deg) scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

/* Current date */

.current-date-wrapper {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;
}

.current-date {
  color: var(--text);
  font-family: var(--mono);
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.2px;
}

/* Login */

.login-form {
  width: min(100%, 320px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
}

.service-buttons {
  width: min(100%, 420px);
  display: flex;
  gap: 10px;
}

.service-button {
  flex: 1;
  min-width: 0;
  padding: 9px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--code-bg);
  color: var(--text);
  font: 500 14px/135% var(--sans);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition:
    border-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}

.service-button:hover {
  border-color: var(--accent-border);
  color: var(--accent);
  box-shadow: var(--shadow);
}

.service-button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.login-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
}

.login-field label {
  color: var(--text-h);
  font-size: 14px;
  font-weight: 500;
}

.login-field input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--code-bg);
  color: var(--text-h);
  font: 15px/135% var(--sans);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.login-field input::placeholder {
  color: var(--text);
  opacity: 0.7;
}

.login-field input:hover {
  border-color: var(--accent-border);
}

.login-field input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-bg);
}

.login-button {
  align-self: center;
  margin-top: 4px;
  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  background: var(--accent-bg);
  color: var(--accent);
  font: 600 14px/135% var(--sans);
  letter-spacing: 0.3px;
  cursor: pointer;
  transition:
    border-color 0.3s,
    background 0.3s,
    box-shadow 0.3s;
}

.login-button:hover {
  border-color: var(--accent-border);
}

.login-button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.login-button:active {
  box-shadow: var(--shadow);
}

.back-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  padding: 8px 20px;
  border: 2px solid var(--accent-border);
  border-radius: 5px;
  background: var(--accent-bg);
  color: var(--accent);
  font: 600 14px/135% var(--sans);
  cursor: pointer;
}

.login-success-email {
  color: var(--text-h);
  overflow-wrap: anywhere;
}

.login-success-message {
  position: absolute;
  top: 24px;
  left: 24px;
  max-width: min(420px, calc(100% - 220px));
  text-align: left;
}

.login-success-message h1 {
  margin: 0 0 6px;
  font-size: 18px;
  line-height: 1.35;
  letter-spacing: 0;
}

.login-success-message .login-success-email {
  font-size: 14px;
}

.back-button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;

    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }

    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);

  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }

  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

## `src/index.css`

```css
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px,
      rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}
```

## `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## `src/components/Counter.jsx`

```jsx
function Counter({ count, setCount }) {
  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
  )
}

export default Counter
```

## `src/components/CurrentDate.jsx`

```jsx
function CurrentDate() {
  const today = new Date()

  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return (
    <div className="current-date">
      {year}-{month}-{day}
    </div>
  )
}

export default CurrentDate
```

## `src/components/LoginForm.jsx`

```jsx
function LoginForm({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onLogin(formData.get('email'))
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          autoComplete="email"
          required
        />
      </div>

      <div className="login-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />
      </div>

      <button type="submit" className="login-button">
        LOGIN
      </button>
    </form>
  )
}

export default LoginForm
```
