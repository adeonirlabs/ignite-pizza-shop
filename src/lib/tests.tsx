/* eslint-disable import/export */
import type { RenderOptions, RenderResult } from '@testing-library/react'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ReactElement } from 'react'

import { ThemeProvider } from '~/providers/theme'

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider defaultTheme="light" storageKey="pizza-shop-theme">
        {children}
      </ThemeProvider>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
