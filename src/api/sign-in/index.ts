import { useMutation } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { SignInRequest } from './types'

export const endpoints = {
  signIn: '/authenticate',
}

const signInQueries = {
  useSignInMutation: () =>
    useMutation({
      mutationFn: async ({ email }: SignInRequest) => api.post(endpoints.signIn, { email }),
    }),
}

export const { useSignInMutation } = signInQueries
