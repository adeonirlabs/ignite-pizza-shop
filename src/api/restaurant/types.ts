export interface RestaurantResponse {
  id: string
  name: string
  description: string | null
  managerId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export interface RestaurantRequest {
  name: string
  description: string | null
}
