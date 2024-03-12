import { render, screen } from '~/lib/tests'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should fill the email input if the search params contains an email', () => {
    render(<SignIn />, { initialRoutes: ['/sign-in?email=john.doe@example.com'] })

    expect(screen.getByLabelText('E-mail')).toHaveValue('john.doe@example.com')
  })
})
