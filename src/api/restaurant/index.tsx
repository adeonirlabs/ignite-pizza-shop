import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { RestaurantResponse } from './types'

const endpoints = {
  restaurant: '/managed-restaurant',
  profile: '/profile',
}

const restaurantKeys = {
  all: ['restaurant'] as const,
  lists: () => [...restaurantKeys.all, 'list'] as const,
  list: (filters: string) => [...restaurantKeys.lists(), { filters }] as const,
  details: () => [...restaurantKeys.all, 'detail'] as const,
  detail: (id: number) => [...restaurantKeys.details(), id] as const,
}

const restaurantQueries = {
  useRestaurantQuery: () =>
    useQuery({
      queryKey: restaurantKeys.all,
      queryFn: async () => api.get<RestaurantResponse>(endpoints.restaurant).then((res) => res.data),
      staleTime: Infinity,
    }),
}

export const { useRestaurantQuery } = restaurantQueries
