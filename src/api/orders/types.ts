export type Status = 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'

export interface Order {
  orderId: string
  status: Status
  customerName: string
  total: number
  createdAt: string
}

export interface Meta {
  pageIndex: number
  perPage: number
  totalCount: number
}

export interface Customer {
  name: string
  email: string
  phone: string | null
}

export interface Product {
  name: string
}

export interface OrderItems {
  id: string
  priceInCents: number
  quantity: number
  product: Product
}

export interface OrderDetails {
  id: string
  createdAt: string
  status: Status
  totalInCents: number
  customer: Customer
  orderItems: OrderItems[]
}

export interface OrdersResponse {
  orders: Order[]
  meta: Meta
}

export interface OrdersRequest {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: Status | 'all' | null
}

export interface OrderDetailsRequest {
  id: string
}

export type OrderDetailsResponse = OrderDetails
