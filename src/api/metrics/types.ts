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
