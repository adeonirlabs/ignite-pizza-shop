/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { createContext, useContext, useEffect, useState } from 'react'

type ThemeType = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeType
  storageKey?: string
}

interface ThemeProviderState {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const Context = createContext<ThemeProviderState>(initialState)

const Provider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(() => (localStorage.getItem(storageKey) as ThemeType) || defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

      root.classList.add(systemTheme)

      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: ThemeType) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <Context.Provider {...props} value={value}>
      {children}
    </Context.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(Context)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}

export const Theme = { Provider }
