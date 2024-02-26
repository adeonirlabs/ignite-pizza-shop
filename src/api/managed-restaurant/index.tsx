import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { ManagedRestaurantResponse } from './types'

const endpoints = {
  managedRestaurant: '/managed-restaurant',
}

const managedRestaurantKeys = {
  all: ['managedRestaurant'] as const,
  lists: () => [...managedRestaurantKeys.all, 'list'] as const,
  list: (filters: string) => [...managedRestaurantKeys.lists(), { filters }] as const,
  details: () => [...managedRestaurantKeys.all, 'detail'] as const,
  detail: (id: number) => [...managedRestaurantKeys.details(), id] as const,
}

const managedRestaurantQueries = {
  useManagedRestaurantQuery: () =>
    useQuery({
      queryKey: managedRestaurantKeys.all,
      queryFn: async () => api.get<ManagedRestaurantResponse>(endpoints.managedRestaurant).then((res) => res.data),
    }),
}

export const { useManagedRestaurantQuery } = managedRestaurantQueries
