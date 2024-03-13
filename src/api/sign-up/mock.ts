import { http, HttpResponse } from 'msw'

import type { SignUpRequest } from './types'

export const signUp = http.post<never, SignUpRequest>('/restaurants', async ({ request }) => {
  const { restaurantName } = await request.json()

  if (restaurantName === 'Pizza Shop') {
    return new HttpResponse(null, { status: 200 })
  }

  return new HttpResponse(null, { status: 400 })
})
