import { z } from 'zod';
import { ProductSchema } from './product.schema';
import { CustomerSchema } from './customer.schema'

export const CardSchema = z.object({
  number: z.string().length(16),
  cvc: z.string().length(3),
  month: z.string().length(2),
  year: z.string().length(2),
  holder: z.enum(['Visa', 'MasterCard', 'American Express', 'Discover']),
});

const TotalsSchema = z.object({
  products: z.number(),
  subtotal: z.number(),
  totalVAT: z.number(),
  shipping: z.number(),
  total: z.number(),
});


export const PaymentSchema = z.object({
  customer: CustomerSchema,
  card: CardSchema,
});

export const CartSchema = z.object({
  id: z.string().nanoid(),
  lines: z.array(
    ProductSchema.extend({
      quantity: z.number().default(1),
    })
  ),
  totals: TotalsSchema,
  payment: PaymentSchema,
  createdAt: z.string()
});
