import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type { Order, OrdersResponse, Status } from './types'

const statusArray: Status[] = ['pending', 'canceled', 'processing', 'delivering', 'delivered']

const ordersArray: Order[] = Array.from({ length: 60 }, (_, index) => ({
  orderId: `${faker.string.uuid()}${index + 1}`,
  status: statusArray[Math.floor(Math.random() * statusArray.length)],
  customerName: faker.person.fullName(),
  total: Math.floor(Math.random() * 1000),
  createdAt: new Date().toISOString(),
}))

export const orders = http.get<never, never, OrdersResponse>(endpoints.orders, ({ request }) => {
  const { searchParams } = new URL(request.url)

  const pageIndex = Number(searchParams.get('pageIndex')) || 0
  const orderId = searchParams.get('orderId') ?? ''
  const customerName = searchParams.get('customerName') ?? ''
  const status = searchParams.get('status') ?? ''

  const filteredOrders = ordersArray.filter(
    (order) =>
      (!orderId || order.orderId.toLowerCase().includes(orderId.toLowerCase())) &&
      (!customerName || order.customerName.toLowerCase().includes(customerName.toLowerCase())) &&
      (!status || order.status === status),
  )

  const paginatedOrders = filteredOrders.slice(pageIndex * 10, (pageIndex + 1) * 10)

  return HttpResponse.json({
    orders: paginatedOrders,
    meta: {
      pageIndex,
      perPage: 10,
      totalCount: filteredOrders.length,
    },
  })
})
