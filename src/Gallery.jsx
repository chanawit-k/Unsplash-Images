import axios from 'axios'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'
const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`
const Gallery = () => {
  const { searchParam } = useGlobalContext()
  const { isLoading, data, isError } = useQuery({
    queryKey: ['taskList', searchParam],
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${searchParam}`)
      return data
    },
  })
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error </h4>
      </section>
    )
  }
  return (
    <section className="image-container">
      {data?.results.map((image) => {
        const { alt_description, urls, id } = image
        return (
          <img key={id} className="img" src={urls.raw} alt={alt_description} />
        )
      })}
    </section>
  )
}

export default Gallery
