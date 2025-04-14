import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  //estado
  const [input, setInput] = useState('')

  //funciones de cambio y enter
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(input)
    setInput('')
  }

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search'
        value={input}
        onChange={handleInputChange}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar
