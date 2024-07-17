import AsyncStorage from '@react-native-async-storage/async-storage'
import { experimental_createPersister } from '@tanstack/query-persist-client-core'
import {
  defaultShouldDehydrateQuery,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { useState } from 'react'

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 60 * 5,
        persister: experimental_createPersister({
          storage: AsyncStorage,
          maxAge: 1000 * 60 * 60 * 12 // 12 hours
        })
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === 'pending'
      }
    }
  })
}

let clientQueryClientSingleton: QueryClient | undefined = undefined
const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return createQueryClient()
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient())
}

export const QueryProvider: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(getQueryClient)
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
