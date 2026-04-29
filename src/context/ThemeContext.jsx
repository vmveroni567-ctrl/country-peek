import { createContext, useState, useContext } from 'react'

// 1 & 2. create and export context
export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // 3. theme state
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    // 4. toggle theme
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    // 5. update body attribute
    if (newTheme === 'dark') {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.removeAttribute('data-theme')
    }
  }

  // 6. provide value to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 7. custom hook
export function useTheme() {
  return useContext(ThemeContext)
}