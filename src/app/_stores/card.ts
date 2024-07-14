import { createStores } from './create-stores'
import { emptyCard } from '@services/cart'
export const useCardStore = createStores(['card'], emptyCard, () => Promise.resolve(emptyCard))