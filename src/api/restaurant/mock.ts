import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type { RestaurantRequest, RestaurantResponse } from './types'

export const restaurant = http.get<never, never, RestaurantResponse>(endpoints.restaurant, () => {
  return HttpResponse.json({
    id: 'restaurant-id',
    name: 'Pizza Shop',
    description: 'The best pizza in town!',
    managerId: 'manager-id',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})

export const restaurantProfile = http.put<never, RestaurantRequest>(endpoints.profile, async ({ request }) => {
  const { name } = await request.json()

  if (name === 'Pizza Shop') {
    return new HttpResponse(null, { status: 204 })
  }

  return new HttpResponse(null, { status: 400 })
})
