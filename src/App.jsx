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
