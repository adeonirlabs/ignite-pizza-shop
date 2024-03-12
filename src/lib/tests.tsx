/* eslint-disable import/export */
import type { RenderOptions, RenderResult } from '@testing-library/react'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Tooltip } from '~/components/ui/tooltip'
import { Theme } from '~/providers/theme'

interface CustomRenderOptions extends RenderOptions {
  initialRoutes?: string[]
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <Theme.Provider defaultTheme="light" storageKey="pizza-shop-theme">
        <Tooltip.Provider>
          <MemoryRouter initialEntries={options?.initialRoutes}>{children}</MemoryRouter>
        </Tooltip.Provider>
      </Theme.Provider>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
