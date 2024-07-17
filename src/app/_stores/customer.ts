import { emptyCustomer } from '@services/cart'

import { createStores } from './create-stores'

export const useCustomerStore = createStores(['cart'], emptyCustomer, () =>
  Promise.resolve(emptyCustomer)
)
