export const emptyCustomer: Customer = {
  name: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: Math.floor(Math.random() * 100000).toString(),
  country: '',
  phone: '',
  password: ''
}
export const emptyCard: Card = {
  number: '',
  cvc: '',
  month: '',
  year: '',
  holder: 'Visa'
}
export const emptyCart: Cart = {
  id: `INV-${Math.floor(Math.random() * 100000).toString()}`,
  payment: {
    customer: emptyCustomer,
    card: emptyCard
  },
  lines: [],
  totals: {
    products: 0,
    subtotal: 0,
    totalVAT: 0,
    total: 0,
    shipping: 0
  },
  createdAt: new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date())
}
