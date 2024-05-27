'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode')
    if (savedMode) {
      return savedMode === 'dark'
    } else {
      return (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    }
  })

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

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-mode', isDark ? 'dark' : 'light')
    localStorage.setItem('dark-mode', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleDark = () => {
    setIsDark((prevIsDark) => !prevIsDark)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)
