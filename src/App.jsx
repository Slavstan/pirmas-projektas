import CurrentDate from './components/CurrentDate'
import LoginForm from './components/LoginForm'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="current-date-wrapper">
        <CurrentDate />
      </div>

      <section id="center">
  <div className="hero">
    <img
      src={heroImg}
      className="base"
      width="170"
      height="179"
      alt=""
    />

    <img
      src={reactLogo}
      className="framework"
      alt="React logo"
    />

    <img
      src={viteLogo}
      className="vite"
      alt="Vite logo"
    />
  </div>

  <h1>Pirmas Projektas</h1>

  <LoginForm />
</section>

    </>
  )
}

export default App
