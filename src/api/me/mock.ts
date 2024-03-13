import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type { MeResponse } from './types'

export const me = http.get<never, never, MeResponse>(endpoints.me, () => {
  return HttpResponse.json({
    id: 'user-id',
    name: 'Admin',
    email: 'admin@example.com',
    phone: '(123) 456-7890',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
