import {z} from 'zod'

export const authnticationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})