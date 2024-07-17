import * as schema from '@shared/schemas'
import type { z } from 'zod'
declare global {
  type Product = z.infer<typeof schema.ProductSchema>
  type Cart = z.infer<typeof schema.CartSchema>
  type Customer = z.infer<typeof schema.CustomerSchema>
  type Page = z.infer<typeof schema.PageSchema>
  type Colorway = z.infer<typeof schema.ColorwaySchema>
  type Payment = z.infer<typeof schema.PaymentSchema>
  type Card = z.infer<typeof schema.CardSchema>
  type Item = Product & {
    quantity: number
  }
  type KeyOf<T> = {
    [K in keyof T]: T[K] extends unknown ? K : never
  }[keyof T]

  interface State {
    cart: Cart
    users: Customer[]
  }

  interface CartHandlers {
    addToCart: (item: Item) => void
    removeFromCart: (item: Item) => void
    addQuantity: (item: Item) => void
    removeQuantity: (item: Item) => void
    payCart: () => void
    calculateTotals: () => void
    handleCustomer: (customer: Customer) => void
    handleCard: (card: Card) => void
    registerUser: (user: Customer) => void
    loginUser: (user: Pick<Customer, 'email' | 'password'>) => string
    logoutUser: () => void
  }

  type CartStore = State & CartHandlers

  interface Props {
    children?: React.ReactNode
    className?: string
  }
}
