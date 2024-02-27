import { z } from 'zod'

export const filtersSchema = z.object({
  order: z.string().optional(),
  name: z.string().optional(),
  status: z.enum(['all', 'pending', 'canceled', 'processing', 'delivering', 'delivered']).optional(),
})

export type FiltersSchema = z.infer<typeof filtersSchema>
