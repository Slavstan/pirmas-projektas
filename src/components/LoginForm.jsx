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
