import { useMutation, useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'
import { queryClient } from '~/lib/react-query'

import type {
  OrderApproveRequest,
  OrderCancelRequest,
  OrderDeliverRequest,
  OrderDetailsRequest,
  OrderDetailsResponse,
  OrderDispatchRequest,
  OrdersRequest,
  OrdersResponse,
  Status,
} from './types'

export const endpoints = {
  orders: '/orders',
  details: (id: string) => `/orders/${id}`,
  approve: (id: string) => `/orders/${id}/approve`,
  cancel: (id: string) => `/orders/${id}/cancel`,
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

const updateStatusOnCache = (id: string, status: Status) => {
  const ordersListCache = queryClient.getQueriesData<OrdersResponse>({ queryKey: ordersKeys.all })

  ordersListCache.forEach(([cacheKey, cacheData]) => {
    if (!cacheData) return

    queryClient.setQueryData<OrdersResponse>(cacheKey, {
      ...cacheData,
      orders: cacheData.orders.map((order) => (order.orderId === id ? { ...order, status } : order)),
    })
  })
}

const ordersQueries = {
  useOrdersQuery: ({ pageIndex, orderId, customerName, status }: OrdersRequest) =>
    useQuery({
      queryKey: ordersKeys.list([String(pageIndex ?? 0), orderId ?? '', customerName ?? '', status ?? 'all']),
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
  useOrderApproveMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderApproveRequest) => api.patch(endpoints.approve(id)),
      onSuccess: (_, { id }) => {
        updateStatusOnCache(id, 'processing')
      },
    })
  },
  useOrderCancelMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderCancelRequest) => api.patch(endpoints.cancel(id)),
      onSuccess: (_, { id }) => {
        updateStatusOnCache(id, 'canceled')
      },
    })
  },
  useOrderDispatchMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderDispatchRequest) => api.patch(endpoints.dispatch(id)),
      onSuccess: (_, { id }) => {
        updateStatusOnCache(id, 'delivering')
      },
    })
  },
  useOrderDeliverMutation: () => {
    return useMutation({
      mutationFn: async ({ id }: OrderDeliverRequest) => api.patch(endpoints.deliver(id)),
      onSuccess: (_, { id }) => {
        updateStatusOnCache(id, 'delivered')
      },
    })
  },
}

export const {
  useOrdersQuery,
  useOrderDetailsQuery,
  useOrderApproveMutation,
  useOrderCancelMutation,
  useOrderDeliverMutation,
  useOrderDispatchMutation,
} = ordersQueries
