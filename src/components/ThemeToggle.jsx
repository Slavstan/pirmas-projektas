function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'šviesią' : 'tamsią'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Perjungti į ${nextTheme} temą`}
    >
      {theme === 'dark' ? '☀ Šviesi tema' : '◐ Tamsi tema'}
    </button>
  )
}

export default ThemeToggle
