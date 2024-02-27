export interface Order {
  orderId: string
  status: Status
  customerName: string
  total: number
  createdAt: string
}

export type Status = 'all' | 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'

export interface Meta {
  pageIndex: number
  perPage: number
  totalCount: number
}

export interface OrdersResponse {
  orders: Order[]
  meta: Meta
}

export interface OrdersRequest {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: Status | null
}
