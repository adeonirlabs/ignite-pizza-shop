import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  description: z.string(),
})

export type ProfileSchema = z.infer<typeof profileSchema>
