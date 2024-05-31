'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()
const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const savedMode = localStorage.getItem('dark-mode')
    if (savedMode) {
      return savedMode === 'dark'
    } else {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDarkMode
    }
  }
  return false
}

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialState)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      if (event.matches !== isDark) {
        setIsDark(event.matches)
      }
    }

    if (typeof window !== 'undefined') {
      mediaQuery.addEventListener('change', handleChange)

      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-mode', isDark ? 'dark' : 'light')
    localStorage.setItem('dark-mode', isDark ? 'dark' : 'light')
  }, [isDark])

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
