import { useMutation } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { SignUpRequest } from './types'

export const endpoints = {
  signUp: '/restaurants',
}

const signUpKeys = {
  all: ['signUp'] as const,
  lists: () => [...signUpKeys.all, 'list'] as const,
  list: (filters: string) => [...signUpKeys.lists(), { filters }] as const,
  details: () => [...signUpKeys.all, 'detail'] as const,
  detail: (id: number) => [...signUpKeys.details(), id] as const,
}

const signUpQueries = {
  useSignUpMutation: () =>
    useMutation({
      mutationFn: async (body: SignUpRequest) => api.post(endpoints.signUp, body),
    }),
}

export const { useSignUpMutation } = signUpQueries
