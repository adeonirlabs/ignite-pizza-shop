import { render, screen } from '~/lib/tests'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the active link', () => {
    render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
    )

    expect(screen.getByText('Home').dataset.active).toBe('true')
    expect(screen.getByText('About').dataset.active).toBe('false')
  })
})
