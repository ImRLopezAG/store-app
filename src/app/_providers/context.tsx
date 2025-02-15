import { createContext, useCallback, useState } from 'react'

const getBase = (attribute: TemplateStringsArray) =>
  `/product_feed/rollup_threads/v2?filter=marketplace(US)&filter=language(en)&filter=attributeIds(${attribute[0]})&anchor=10&consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&count=16&language=en&localizedRangeStr={lowestPrice} — {highestPrice}`

const endpoints = {
  NEW_RELEASES: getBase`53e430ba-a5de-4881-8015-68eb1cff459f`,
  WOMEN: getBase`7baf216c-acc6-4452-9e07-39c2ca77ba32,a00f0bb2-648b-4853-9559-4cd943b7d6c6`,
  MEN: getBase`a00f0bb2-648b-4853-9559-4cd943b7d6c6,0f64ecc7-d624-4e91-b171-b83a03dd8550`
}

export interface ContextStore {
  currPage: string
  nextPage: string
  prevPage: string
  totalPages: number
  totalResources: number
  endpoints: typeof endpoints
  product: 'NEW_RELEASES' | 'WOMEN' | 'MEN'
}

type ContextProps = ContextStore & {
  handleNextPage: (nextPage: string) => void
  handlePrevPage: (prevPage: string) => void
  handleTotalPages: (totalPages: number) => void
  handleTotalResources: (totalResources: number) => void
  handleCurrPage: (currPage: string) => void
  getBase: (attribute: TemplateStringsArray) => string
  getTitle: () => string
  setTitles: (title: string) => void
}

export const PaginationContext = createContext<ContextProps | null>(null)

export const PaginationProvider: React.FC<Props> = ({ children }) => {
  const [pagination, setPagination] = useState<ContextStore>({
    currPage: getBase`53e430ba-a5de-4881-8015-68eb1cff459f`,
    nextPage: '',
    prevPage: '',
    totalPages: 0,
    totalResources: 0,
    endpoints,
    product: 'NEW_RELEASES'
  })

  const handleNextPage = useCallback((nextPage: string) => {
    setPagination((prev) => ({ ...prev, nextPage }))
  }, [])

  const handlePrevPage = useCallback((prevPage: string) => {
    setPagination((prev) => ({ ...prev, prevPage }))
  }, [])

  const handleTotalPages = useCallback((totalPages: number) => {
    setPagination((prev) => ({ ...prev, totalPages }))
  }, [])

  const handleTotalResources = useCallback((totalResources: number) => {
    setPagination((prev) => ({ ...prev, totalResources }))
  }, [])

  const handleCurrPage = useCallback((currPage: string) => {
    setPagination((prev) => ({ ...prev, currPage }))
  }, [])

  const getTitle = useCallback(() => {
    const title = {
      NEW_RELEASES: 'New Releases',
      MEN: 'Wen',
      WOMEN: 'Women'
    }
    return title[pagination.product]
  }, [pagination.product])

  const setTitles = useCallback((title: string) => {
    setPagination((prev) => ({ ...prev, product: title as 'NEW_RELEASES' | 'WOMEN' | 'MEN' }))
  }, [])
  const value = {
    ...pagination,
    handleNextPage,
    handlePrevPage,
    handleTotalPages,
    handleTotalResources,
    handleCurrPage,
    getBase,
    getTitle,
    setTitles
  }

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}
