import React, { useState } from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const [input, setInput] = useState('')
  const { setSearchParam } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.search.value
    setSearchParam(input)
  }
  return (
    <section>
      <h1 className="title">Unsplash Image</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="cat"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </section>
  )
}

export default SearchForm
