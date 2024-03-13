import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type { SignInRequest } from './types'

export const signIn = http.post<never, SignInRequest>(endpoints.signIn, async ({ request }) => {
  const { email } = await request.json()

  if (email === 'john.doe@example.com') {
    return HttpResponse.json(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'token=sample-token',
      },
    })
  }

  return HttpResponse.json(null, { status: 401 })
})
