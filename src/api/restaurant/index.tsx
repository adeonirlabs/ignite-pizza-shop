import { useMutation, useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'
import { queryClient } from '~/lib/react-query'

import type { RestaurantRequest, RestaurantResponse } from './types'

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
  useRestaurantMutation: () =>
    useMutation({
      mutationFn: async (data: RestaurantRequest) => api.put<RestaurantRequest>(endpoints.profile, data),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: restaurantKeys.all }),
    }),
}

export const { useRestaurantQuery, useRestaurantMutation } = restaurantQueries
