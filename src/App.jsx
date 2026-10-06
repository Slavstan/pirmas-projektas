import { useState } from 'react'
import CurrentDate from './components/CurrentDate'
import LoginForm from './components/LoginForm'
import ServiceCard from './components/ServiceCard'
import ThemeToggle from './components/ThemeToggle'
import UserProfile from './components/UserProfile'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const services = [
  {
    name: 'ChatGPT',
    description: 'AI pagalba ir idėjų generavimas.',
    url: 'https://chatgpt.com/',
  },
  {
    name: 'Claude',
    description: 'AI įrankis darbui su tekstu ir kodu.',
    url: 'https://claude.ai/',
  },
  {
    name: 'GitHub',
    description: 'Kodo saugyklos ir projekto versijos.',
    url: 'https://github.com/',
  },
  {
    name: 'Cursor',
    description: 'AI funkcijos programuotojo aplinkoje.',
    url: 'https://www.cursor.com/',
  },
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [theme, setTheme] = useState('system')

  function handleLogin(enteredEmail) {
    setEmail(enteredEmail)
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setIsLoggedIn(false)
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const themeAttribute = theme === 'system' ? undefined : theme

  return (
    <div id="app-shell" data-theme={themeAttribute}>
      <header className="app-header">
        {isLoggedIn ? (
          <div className="login-success-message" aria-live="polite">
            <p className="eyebrow">Pirmas Projektas</p>
            <p className="login-success-email">{email}</p>
          </div>
        ) : (
          <div className="brand-label">PIRMAS PROJEKTAS</div>
        )}

        <div className="header-actions">
          <CurrentDate />
          <ThemeToggle theme={theme === 'system' ? 'light' : theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main id="center">
        {isLoggedIn ? (
          <div className="dashboard">
            <UserProfile email={email} onLogout={handleLogout} />

            <section className="services-section" aria-labelledby="services-title">
              <div className="section-heading">
                <p className="eyebrow">Tavo įrankiai</p>
                <h1 id="services-title">Paslaugos</h1>
                <p>Greita prieiga prie kasdien naudojamų kūrimo ir AI įrankių.</p>
              </div>

              <div className="service-grid" aria-label="Paslaugos">
                {services.map((service) => (
                  <ServiceCard key={service.name} {...service} />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <section className="login-section" aria-labelledby="login-title">
            <div className="hero" aria-hidden="true">
              <img src={heroImg} className="base" width="170" height="179" alt="" />
              <img src={reactLogo} className="framework" alt="" />
              <img src={viteLogo} className="vite" alt="" />
            </div>

            <h1 id="login-title">Pirmas Projektas</h1>
            <p className="login-intro">
              Prisijunkite, kad pasiektumėte savo kūrimo įrankius.
            </p>
            <LoginForm onLogin={handleLogin} />
          </section>
        )}
      </main>
    </div>
  )
}

export default App
