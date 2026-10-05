import { useState } from 'react'
import CurrentDate from './components/CurrentDate'
import LoginForm from './components/LoginForm'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div className="current-date-wrapper">
        <CurrentDate />
      </div>

      <section id="center">
      {isLoggedIn ? (
    <>
      <h1>Sveiki atvykę!</h1>
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

  <LoginForm onLogin={() => setIsLoggedIn(true)} />
    </>
  )}
</section>

    </>
  )
}

export default App
