/* eslint-disable import/export */
import { QueryClientProvider } from '@tanstack/react-query'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { Tooltip } from '~/components/ui/tooltip'
import { Theme } from '~/providers/theme'

import { queryClient } from './react-query'

interface CustomRenderOptions extends RenderOptions {
  initialRoutes?: string[]
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <HelmetProvider>
        <Theme.Provider defaultTheme="light" storageKey="pizza-shop-theme">
          <Tooltip.Provider>
            <MemoryRouter initialEntries={options?.initialRoutes}>
              <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </MemoryRouter>
          </Tooltip.Provider>
        </Theme.Provider>
      </HelmetProvider>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
