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
