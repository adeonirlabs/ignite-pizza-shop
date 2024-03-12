/* eslint-disable import/export */
import type { RenderOptions, RenderResult } from '@testing-library/react'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ReactElement } from 'react'

import { Tooltip } from '~/components/ui/tooltip'
import { Theme } from '~/providers/theme'

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <Theme.Provider defaultTheme="light" storageKey="pizza-shop-theme">
        <Tooltip.Provider>{children}</Tooltip.Provider>
      </Theme.Provider>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
