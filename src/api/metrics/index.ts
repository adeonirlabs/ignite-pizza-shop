import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/axios'

import type { DayOrdersResponse, MonthOrdersResponse, MonthRevenueResponse } from './types'

const endpoints = {
  dayOrders: '/metrics/day-orders-amount',
  monthRevenue: '/metrics/month-receipt',
  monthOrders: '/metrics/month-orders-amount',
  monthCanceledOrders: '/metrics/month-canceled-orders-amount',
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
      queryKey: metricsKeys.list('month-orders-amount'),
      queryFn: async () => api.get<MonthOrdersResponse>(endpoints.monthCanceledOrders).then((res) => res.data),
    }),
}

export const { useDayOrdersQuery, useMonthRevenueQuery, useMonthOrdersQuery, useMonthCanceledOrdersQuery } =
  metricsQueries
