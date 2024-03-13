import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { MeResponse } from './types'

export const endpoints = {
  me: '/me',
}

const meKeys = {
  all: ['profile'] as const,
  lists: () => [...meKeys.all, 'list'] as const,
  list: (filters: string) => [...meKeys.lists(), { filters }] as const,
  details: () => [...meKeys.all, 'detail'] as const,
  detail: (id: number) => [...meKeys.details(), id] as const,
}

const meQueries = {
  useMeQuery: () =>
    useQuery({
      queryKey: meKeys.all,
      queryFn: async () => api.get<MeResponse>(endpoints.me).then((res) => res.data),
      staleTime: Infinity,
    }),
}

export const { useMeQuery } = meQueries
