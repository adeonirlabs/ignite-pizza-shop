import { useMutation, useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'
import { queryClient } from '~/lib/react-query'

import type { OrderDetailsRequest, OrderDetailsResponse, OrdersRequest, OrdersResponse } from './types'

const endpoints = {
  orders: '/orders',
  details: (id: string) => `/orders/${id}`,
  cancel: (id: string) => `/orders/${id}/cancel`,
  approve: (id: string) => `/orders/${id}/approve`,
  deliver: (id: string) => `/orders/${id}/deliver`,
  dispatch: (id: string) => `/orders/${id}/dispatch`,
}

const ordersKeys = {
  all: ['orders'] as const,
  lists: () => [...ordersKeys.all, 'list'] as const,
  list: (filters: string | string[]) => [...ordersKeys.lists(), { filters }] as const,
  details: () => [...ordersKeys.all, 'detail'] as const,
  detail: (id: string) => [...ordersKeys.details(), id] as const,
}

const ordersQueries = {
  useOrdersQuery: ({ pageIndex, orderId, customerName, status }: OrdersRequest) =>
    useQuery({
      queryKey: ordersKeys.list([String(pageIndex), orderId || '', customerName || '', status || 'all']),
      queryFn: async () =>
        api
          .get<OrdersResponse>(endpoints.orders, {
            params: { pageIndex, orderId, customerName, status: status === 'all' ? null : status },
          })
          .then((res) => res.data),
    }),
  useOrderDetailsQuery: ({ id }: OrderDetailsRequest) =>
    useQuery({
      queryKey: ordersKeys.detail(id),
      queryFn: async () => api.get<OrderDetailsResponse>(endpoints.details(id)).then((res) => res.data),
    }),
  useOrderCancelMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderDetailsRequest) => api.patch(endpoints.cancel(id)),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ordersKeys.all }),
    })
  },
  useOrderApproveMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderDetailsRequest) => api.patch(endpoints.approve(id)),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ordersKeys.all }),
    })
  },
  useOrderDispatchMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderDetailsRequest) => api.patch(endpoints.dispatch(id)),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ordersKeys.all }),
    })
  },
  useOrderDeliverMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderDetailsRequest) => api.patch(endpoints.deliver(id)),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ordersKeys.all }),
    })
  },
}

export const {
  useOrdersQuery,
  useOrderDetailsQuery,
  useOrderCancelMutation,
  useOrderApproveMutation,
  useOrderDispatchMutation,
  useOrderDeliverMutation,
} = ordersQueries
