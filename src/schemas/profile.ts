import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  description: z.string(),
})

export type ProfileType = z.infer<typeof profileSchema>
