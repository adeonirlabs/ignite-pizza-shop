import { http, HttpResponse } from 'msw'

import { endpoints } from '.'
import type {
  Order,
  OrderApproveRequest,
  OrderCancelRequest,
  OrderDeliverRequest,
  OrderDetailsRequest,
  OrderDetailsResponse,
  OrderDispatchRequest,
  OrdersResponse,
  Status,
} from './types'

const statusArray: Status[] = ['pending', 'canceled', 'processing', 'delivering', 'delivered']

const ordersArray: Order[] = Array.from({ length: 60 }, (_, index) => ({
  orderId: `order-${index + 1}`,
  status: statusArray[Math.floor(Math.random() * statusArray.length)],
  customerName: `Customer ${index + 1}`,
  total: Math.floor(Math.random() * 1000),
  createdAt: new Date().toISOString(),
}))

export const ordersList = http.get<never, never, OrdersResponse>(endpoints.orders, ({ request }) => {
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

export const orderDetails = http.get<OrderDetailsRequest, never, OrderDetailsResponse>(
  endpoints.details(':id'),
  ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      createdAt: new Date().toISOString(),
      status: 'pending',
      totalInCents: 5000,
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
      },
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 1000,
          quantity: 1,
          product: {
            name: 'Pizza',
          },
        },
        {
          id: 'order-item-2',
          priceInCents: 2000,
          quantity: 2,
          product: {
            name: 'Fries',
          },
        },
      ],
    })
  },
)

export const orderApprove = http.patch<OrderApproveRequest, never, never>(endpoints.approve(':id'), ({ params }) => {
  if (params.id === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  }

  return new HttpResponse(null, { status: 204 })
})

export const orderCancel = http.patch<OrderCancelRequest, never, never>(endpoints.cancel(':id'), ({ params }) => {
  if (params.id === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  }

  return new HttpResponse(null, { status: 204 })
})

export const orderDispatch = http.patch<OrderDispatchRequest, never, never>(endpoints.dispatch(':id'), ({ params }) => {
  if (params.id === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  }

  return new HttpResponse(null, { status: 204 })
})

export const orderDeliver = http.patch<OrderDeliverRequest, never, never>(endpoints.deliver(':id'), ({ params }) => {
  if (params.id === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  }

  return new HttpResponse(null, { status: 204 })
})
