import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'

export const useSearchPhoto = () => {
  const a = useQuery({
    queryKey: ['taskList'],
    queryFn: async () => {
      const { data } = await customFetch.get('/', {
        params: {
          query: 'bar',
        },
      })
      return data
    },
  })
  return a
}
