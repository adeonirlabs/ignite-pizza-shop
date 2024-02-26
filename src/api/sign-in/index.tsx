import { useMutation } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { SignInRequest } from './types'

const endpoints = {
  signIn: '/authenticate',
}

const signInKeys = {
  all: ['signIn'] as const,
  lists: () => [...signInKeys.all, 'list'] as const,
  list: (filters: string) => [...signInKeys.lists(), { filters }] as const,
  details: () => [...signInKeys.all, 'detail'] as const,
  detail: (id: number) => [...signInKeys.details(), id] as const,
}

const signInQueries = {
  useSignInMutation: () =>
    useMutation({
      mutationFn: async ({ email }: SignInRequest) => api.post(endpoints.signIn, { email }),
    }),
}

export const { useSignInMutation } = signInQueries
