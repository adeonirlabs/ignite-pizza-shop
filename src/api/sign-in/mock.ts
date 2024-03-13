import { http, HttpResponse } from 'msw'

import type { SignInSchema } from '~/schemas/sign-in'

export const signIn = http.post<never, SignInSchema>('/authenticate', async ({ request }) => {
  const { email } = await request.json()

  if (email === 'john.doe@example.com') {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'token=sample-token',
      },
    })
  }

  return new HttpResponse(null, { status: 401 })
})
