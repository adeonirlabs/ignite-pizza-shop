import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { OrdersRequest, OrdersResponse } from './types'

const endpoints = {
  orders: '/orders',
}

const ordersKeys = {
  all: ['orders'] as const,
  lists: () => [...ordersKeys.all, 'list'] as const,
  list: (filters: string | string[]) => [...ordersKeys.lists(), { filters }] as const,
  details: () => [...ordersKeys.all, 'detail'] as const,
  detail: (id: number) => [...ordersKeys.details(), id] as const,
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
}

export const { useOrdersQuery } = ordersQueries
