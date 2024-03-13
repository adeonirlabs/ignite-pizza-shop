import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type {
  DayOrdersResponse,
  DayRevenueRequest,
  DayRevenueResponse,
  MonthCanceledOrdersResponse,
  MonthOrdersResponse,
  MonthRevenueResponse,
  PopularProductsResponse,
} from './types'

export const endpoints = {
  dayOrders: '/metrics/day-orders-amount',
  monthOrders: '/metrics/month-orders-amount',
  monthRevenue: '/metrics/month-receipt',
  monthCanceledOrders: '/metrics/month-canceled-orders-amount',
  dayRevenue: '/metrics/daily-receipt-in-period',
  popularProducts: '/metrics/popular-products',
}

const metricsKeys = {
  all: ['metrics'] as const,
  lists: () => [...metricsKeys.all, 'list'] as const,
  list: (filters: string | string[]) => [...metricsKeys.lists(), { filters }] as const,
  details: () => [...metricsKeys.all, 'detail'] as const,
  detail: (id: string) => [...metricsKeys.details(), id] as const,
}

const metricsQueries = {
  useDayOrdersQuery: () =>
    useQuery({
      queryKey: metricsKeys.list('day-orders-amount'),
      queryFn: async () => api.get<DayOrdersResponse>(endpoints.dayOrders).then((res) => res.data),
    }),
  useDayRevenueQuery: ({ from = new Date(), to = new Date() }: DayRevenueRequest) =>
    useQuery({
      queryKey: metricsKeys.list(['daily-receipt-in-period', from.toISOString(), to.toISOString()]),
      queryFn: async () =>
        api.get<DayRevenueResponse>(endpoints.dayRevenue, { params: { from, to } }).then((res) => res.data),
    }),
  useMonthRevenueQuery: () =>
    useQuery({
      queryKey: metricsKeys.list('month-receipt'),
      queryFn: async () => api.get<MonthRevenueResponse>(endpoints.monthRevenue).then((res) => res.data),
    }),
  useMonthOrdersQuery: () =>
    useQuery({
      queryKey: metricsKeys.list('month-orders-amount'),
      queryFn: async () => api.get<MonthOrdersResponse>(endpoints.monthOrders).then((res) => res.data),
    }),
  useMonthCanceledOrdersQuery: () =>
    useQuery({
      queryKey: metricsKeys.list('month-canceled-orders-amount'),
      queryFn: async () => api.get<MonthCanceledOrdersResponse>(endpoints.monthCanceledOrders).then((res) => res.data),
    }),
  usePopularProductsQuery: () =>
    useQuery({
      queryKey: metricsKeys.list('popular-products'),
      queryFn: async () => api.get<PopularProductsResponse>(endpoints.popularProducts).then((res) => res.data),
    }),
}

export const {
  useDayOrdersQuery,
  useDayRevenueQuery,
  useMonthRevenueQuery,
  useMonthOrdersQuery,
  useMonthCanceledOrdersQuery,
  usePopularProductsQuery,
} = metricsQueries
