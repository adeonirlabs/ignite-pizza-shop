import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from '~/components/ui/sonner'
import { ThemeProvider } from '~/providers/theme'

import { router } from './routes'

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <ThemeProvider defaultTheme="light" storageKey="pizza-shop-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster />
    </HelmetProvider>
  )
}
