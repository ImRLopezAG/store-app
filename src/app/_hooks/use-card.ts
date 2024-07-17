import { useCardStore } from '@stores/card'
import { useCallback } from 'react'

export function useCard() {
  const { data, error, isLoading, refetch, setQueryData } = useCardStore()

  const updateCard = useCallback(
    (card: Partial<Card>) => {
      setQueryData(card)
    },
    [setQueryData]
  )

  return {
    data,
    error,
    isLoading,
    refetch,
    updateCard
  }
}
