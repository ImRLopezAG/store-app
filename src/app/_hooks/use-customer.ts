import { useCustomerStore } from '@stores/customer'
import { useCallback } from 'react'

export function useCustomer() {
  const { data, error, isLoading, refetch, setQueryData } = useCustomerStore()

  const updateCustomer = useCallback(
    (customer: Partial<Customer>) => {
      setQueryData(customer)
    },
    [setQueryData]
  )

  return {
    data,
    error,
    isLoading,
    refetch,
    updateCustomer
  }
}
