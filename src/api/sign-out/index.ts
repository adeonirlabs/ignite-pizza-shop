import { useMutation } from '@tanstack/react-query'

import { api } from '~/lib/axios'

const endpoints = {
  signOut: '/sign-out',
}

const signOutQueries = {
  useSignOutMutation: () =>
    useMutation({
      mutationFn: async () => api.post(endpoints.signOut),
    }),
}

export const { useSignOutMutation } = signOutQueries
