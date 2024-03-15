import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type {
  DayOrdersResponse,
  DayRevenueResponse,
  MonthCanceledOrdersResponse,
  MonthOrdersResponse,
  MonthRevenueResponse,
  PopularProductsResponse,
} from './types'

export const dayOrders = http.get<never, never, DayOrdersResponse>(endpoints.dayOrders, () => {
  return HttpResponse.json({
    amount: 100,
    diffFromYesterday: -5,
  })
})

export const monthOrders = http.get<never, never, MonthOrdersResponse>(endpoints.monthOrders, () => {
  return HttpResponse.json({
    amount: 35,
    diffFromLastMonth: 3,
  })
})

export const monthRevenue = http.get<never, never, MonthRevenueResponse>(endpoints.monthRevenue, () => {
  return HttpResponse.json({
    receipt: 850,
    diffFromLastMonth: 7,
  })
})

export const monthCanceledOrders = http.get<never, never, MonthCanceledOrdersResponse>(
  endpoints.monthCanceledOrders,
  () => {
    return HttpResponse.json({
      amount: 30,
      diffFromLastMonth: -4,
    })
  },
)

export const dayRevenue = http.get<never, never, DayRevenueResponse>(endpoints.dayRevenue, () => {
  return HttpResponse.json([
    {
      date: '2024-03-01',
      receipt: 1000,
    },
    {
      date: '2024-03-02',
      receipt: 800,
    },
    {
      date: '2024-03-03',
      receipt: 1200,
    },
    {
      date: '2024-03-04',
      receipt: 900,
    },
    {
      date: '2024-03-05',
      receipt: 1100,
    },
  ])
})

export const popularProducts = http.get<never, never, PopularProductsResponse>(endpoints.popularProducts, () => {
  return HttpResponse.json([
    {
      product: 'Pizza',
      amount: 6,
    },
    {
      product: 'Burger',
      amount: 4,
    },
    {
      product: 'Coke',
      amount: 2,
    },
    {
      product: 'Fries',
      amount: 4,
    },
    {
      product: 'Salad',
      amount: 1,
    },
  ])
})
