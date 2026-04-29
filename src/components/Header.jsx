import { useTheme } from '../context/ThemeContext'

function Header() {
  // 2. get values from context
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <h1>Country Peek</h1>

      <div className="header__nav">
        {/* 3. theme toggle button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  )
}

export default Header