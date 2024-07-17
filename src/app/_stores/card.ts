import { emptyCard } from '@services/cart'

import { createStores } from './create-stores'
export const useCardStore = createStores(['card'], emptyCard, () =>
  Promise.resolve(emptyCard)
)
