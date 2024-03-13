export interface DayOrdersResponse {
  amount: number
  diffFromYesterday: number
}

export interface MonthOrdersResponse {
  amount: number
  diffFromLastMonth: number
}

export interface MonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export interface MonthCanceledOrdersResponse {
  amount: number
  diffFromLastMonth: number
}

export interface DayRevenueRequest {
  from?: Date
  to?: Date
}

export type DayRevenueResponse = {
  date: string
  receipt: number
}[]

export type PopularProductsResponse = {
  product: string
  amount: number
}[]
