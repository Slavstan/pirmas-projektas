function LoginForm() {
  return (
    <form className="login-form">
      <div className="login-field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your e-mail"
        />
      </div>

      <div className="login-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="button" className="login-button">
        LOGIN
      </button>
    </form>
  )
}

export default LoginForm