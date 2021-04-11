import React, { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { CommitsContext } from '../context/CommitsContext'
import { SearchInputStyles } from './SearchInputStyles'
import { useHistory } from 'react-router-dom'

function SearchInput(props) {
  const { searchQuery, updateSearchQuery } = useContext(CommitsContext)
  const [query, setQuery] = useState('')
  const { push } = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    updateSearchQuery(query)
    push('/commits')
  }

  return (
    <SearchInputStyles>
      <form onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <FaSearch className="search-icon" />  
          <input
            type="text"
            placeholder="Eg. facebook/react"
            // value={}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <input type="submit" value="See commits 🚀" />
      </form>
    </SearchInputStyles>
  )
}

export default SearchInput
