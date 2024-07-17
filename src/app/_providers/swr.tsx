import { SWRConfig } from 'swr'

export const SWRProvider: React.FC<Props> = ({ children }) => (
  <SWRConfig
    value={{
      fetcher: (url: string) => fetch(url).then((res) => res.json())
    }}
  >
    {children}
  </SWRConfig>
)
