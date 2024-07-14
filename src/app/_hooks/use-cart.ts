import { cartService } from '@services/cart'
import { useCartStore } from '@stores/cart'
import { useCallback } from 'react'

export function useCart() {
  const { data, error, isLoading, refetch, setQueryData } = useCartStore()
  const { getProductTotal, getProductTotalExcludingVAT, getProductVAT, round2Decimals} = cartService()
  function calculateTotals() {
    if (!data) return
    const totals = data.lines.reduce(
      (acc, product) => {
        const subtotal = round2Decimals(acc.subtotal + getProductTotalExcludingVAT(product))
        const totalVAT = round2Decimals(acc.totalVAT + getProductVAT(product) * product.quantity)
        const total = round2Decimals(acc.total + getProductTotal(product))
        const totalExcludingVAT = getProductTotalExcludingVAT(product)
        return {
          products: round2Decimals(acc.products + product.quantity),
          subtotal,
          totalVAT,
          total,
          totalExcludingVAT,
        }
      },
      { products: 0, subtotal: 0, totalVAT: 0, total: 0 }
    )
    const shipping = round2Decimals(totals.total * 0.08)
    setQueryData({
      ...data,
      totals: {
        ...totals,
        shipping,
      },
    })
  }
  const addToCart = useCallback((item: Item) => {
    if (!data) return
    const newCart = {
      ...data,
      lines: data.lines.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }
    setQueryData(newCart)
    calculateTotals()
  }, [setQueryData])

  const removeFromCart = useCallback((item: Item) => {
    if (!data) return
    const newCart = {
      ...data,
      lines: data.lines.filter((product) => product.id !== item.id),
    }
    setQueryData(newCart)
    calculateTotals()
  }, [setQueryData])

  const removeQuantity = useCallback((item: Item) => {
    if (!data) return
    if (item.quantity === 1) {
      return removeFromCart(item)
    }
    const newCart = {
      ...data,
      lines: data.lines.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    }
    setQueryData(newCart)
    calculateTotals()
  }, [removeFromCart, setQueryData])

  return {
    cart: data,
    error,
    isLoading,
    refetch,
    addToCart,
    removeFromCart,
    removeQuantity,
    calculateTotals,
  }
  
}