import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type { SignUpRequest } from './types'

export const signUp = http.post<never, SignUpRequest>(endpoints.signUp, async ({ request }) => {
  const { restaurantName } = await request.json()

  if (restaurantName === 'Pizza Shop') {
    return HttpResponse.json(null, { status: 201 })
  }

  return HttpResponse.json(null, { status: 400 })
})
