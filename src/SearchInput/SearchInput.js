import React from 'react'
import { SearchInputStyles } from './SearchInputStyles'

function SearchInput() {
    return (
        <SearchInputStyles>
            <form>
              <div>
                <input type="text"
                placeholder="Eg. facebook/react"
                />
              </div>
              <input
                type="submit"
                value="See commits"  
                />
            </form>
        </SearchInputStyles>
        
    )
}

export default SearchInput
