import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'

const api_key = '8Bnr2jJICW8VxasMe7oKI6wlAg-7iPmZ1ekD45xfKtM'
export const useSearchPhoto = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['taskList'],
    queryFn: async () => {
      const { data } = await customFetch.get('/', {
        params: {
          query: 'bar',
          client_id: api_key,
        },
      })
      return data
    },
  })
  console.log(data)
  return { data, isError, isLoading }
}
