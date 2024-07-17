import { z } from 'zod'

export const CustomerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  phone: z.string(),
  password: z.string().nullable()
})
