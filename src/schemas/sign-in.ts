import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email(),
})

export type SignInType = z.infer<typeof signInSchema>
