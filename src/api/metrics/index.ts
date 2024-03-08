import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type {
  DayOrdersResponse,
  DayRevenueResponse,
  MonthOrdersResponse,
  MonthRevenueResponse,
  PopularProductsResponse,
} from './types'

const endpoints = {
  dayOrders: '/metrics/day-orders-amount',
  dayRevenue: '/metrics/daily-receipt-in-period',
  monthRevenue: '/metrics/month-receipt',
  monthOrders: '/metrics/month-orders-amount',
  monthCanceledOrders: '/metrics/month-canceled-orders-amount',
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
  useDayRevenueQuery: () =>
    useQuery({
      queryKey: metricsKeys.list('day-receipt-in-period'),
      queryFn: async () => api.get<DayRevenueResponse>(endpoints.dayRevenue).then((res) => res.data),
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
      queryFn: async () => api.get<MonthOrdersResponse>(endpoints.monthCanceledOrders).then((res) => res.data),
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
