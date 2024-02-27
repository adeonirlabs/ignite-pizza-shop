export interface Order {
  orderId: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
  createdAt: Date
}

export interface Meta {
  pageIndex: number
  perPage: number
  totalCount: number
}

export interface OrdersResponse {
  orders: Order[]
  meta: Meta
}
