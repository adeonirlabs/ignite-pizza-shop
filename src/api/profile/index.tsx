import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { ProfileResponse } from './types'

const endpoints = {
  profile: '/me',
}

const profileKeys = {
  all: ['profile'] as const,
  lists: () => [...profileKeys.all, 'list'] as const,
  list: (filters: string) => [...profileKeys.lists(), { filters }] as const,
  details: () => [...profileKeys.all, 'detail'] as const,
  detail: (id: number) => [...profileKeys.details(), id] as const,
}

const profileQueries = {
  useProfileQuery: () =>
    useQuery({
      queryKey: profileKeys.all,
      queryFn: async () => api.get<ProfileResponse>(endpoints.profile).then((res) => res.data),
    }),
}

export const { useProfileQuery } = profileQueries
