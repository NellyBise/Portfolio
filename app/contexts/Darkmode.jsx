'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode')
    if (savedMode) {
      const root = window.document.documentElement
      const isDarkMode = savedMode === 'dark'
      root.setAttribute('data-mode', isDarkMode ? 'dark' : 'light')
      setIsDark(isDarkMode)
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      const root = window.document.documentElement
      root.setAttribute('data-mode', prefersDark ? 'dark' : 'light')
      setIsDark(prefersDark)
    }
  }, [])

  const toggleDark = () => {
    const root = window.document.documentElement
    if (isDark) {
      root.setAttribute('data-mode', 'light')
      localStorage.setItem('dark-mode', 'light')
    } else {
      root.setAttribute('data-mode', 'dark')
      localStorage.setItem('dark-mode', 'dark')
    }
    setIsDark(!isDark)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)
