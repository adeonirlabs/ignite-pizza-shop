import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Toaster } from '~/components/ui/sonner'
import { Tooltip } from '~/components/ui/tooltip'
import { queryClient } from '~/lib/react-query'
import { Theme } from '~/providers/theme'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <HelmetProvider>
      <Toaster />
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Theme.Provider defaultTheme="light" storageKey="pizza-shop-theme">
        <Tooltip.Provider delayDuration={300}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Tooltip.Provider>
      </Theme.Provider>
    </HelmetProvider>
  )
}
