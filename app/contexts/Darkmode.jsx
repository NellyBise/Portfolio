'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode')
    if (savedMode) {
      setIsDark(savedMode === 'dark')
    } else {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDarkMode)
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      setIsDark(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  /*useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-mode', isDark ? 'dark' : 'light')
    localStorage.setItem('dark-mode', isDark ? 'dark' : 'light')
  }, [isDark])*/

  const toggleDark = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('dark-mode', newIsDark ? 'dark' : 'light')
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)
