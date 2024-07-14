import { emptyCart } from '@services/cart';
import { createStores } from './create-stores';

export const useCartStore = createStores(['cart'], emptyCart, () => Promise.resolve(emptyCart));
