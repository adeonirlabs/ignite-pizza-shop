import { z } from 'zod'

export const signUpSchema = z.object({
  company: z.string(),
  manager: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
