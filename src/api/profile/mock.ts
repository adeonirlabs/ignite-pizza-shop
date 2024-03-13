import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type { ProfileResponse } from './types'

export const profile = http.get<never, never, ProfileResponse>(endpoints.me, () => {
  return HttpResponse.json({
    id: '1',
    name: 'Admin',
    email: 'admin@example.com',
    phone: '(123) 456-7890',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
