import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const storageKey = 'theme'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const syncSystemTheme = () => {
      if (localStorage.getItem(storageKey) === null) {
        setTheme(media.matches ? 'dark' : 'light')
      }
    }

    media.addEventListener('change', syncSystemTheme)
    syncSystemTheme()
    return () => media.removeEventListener('change', syncSystemTheme)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem(storageKey, nextTheme)
    setTheme(nextTheme)
  }

  return { theme, toggleTheme }
}
