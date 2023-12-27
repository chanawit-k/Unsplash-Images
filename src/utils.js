import axios from 'axios'

const customFetch = axios.create({
  baseURL:
    'https://api.unsplash.com/search/photos/?client_id=8Bnr2jJICW8VxasMe7oKI6wlAg-7iPmZ1ekD45xfKtM',
})

export default customFetch
