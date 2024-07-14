import { useCallback } from 'react'
import { useCardStore } from '@stores/card'

export function useCard() {
  const { data, error, isLoading, refetch, setQueryData } = useCardStore()

  const updateCard = useCallback((card: Partial<Card>) => {
    setQueryData(card)
  }, [setQueryData])

  return {
    data,
    error,
    isLoading,
    refetch,
    updateCard,
  }
}
