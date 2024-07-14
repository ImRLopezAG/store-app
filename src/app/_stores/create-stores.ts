import { QueryClient, QueryKey, useQuery, useQueryClient } from "@tanstack/react-query";

export function createStores<T>(queryKey: QueryKey,initialData: T | null = null, queryFn: () => Promise<T> | null ) {

  return function () {
    const queryClient = useQueryClient();

    const {data, error, isLoading } = useQuery({
      queryKey,
      queryFn,
      initialData,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    })

    function setQueryData(newData: Partial<T>) {
      queryClient.setQueryData(queryKey, (oldData: T) => {
        return { ...oldData, ...newData }
      })
    }
    function refetch() {
      queryClient.invalidateQueries({
        queryKey,
      })
      queryClient.refetchQueries({
        queryKey,
      })
    }

    return {
      data,
      error,
      isLoading,
      setQueryData,
      refetch,
    }
  }
}