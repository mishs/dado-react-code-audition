import React, {useState } from 'react'
import { SearchInputStyles } from './SearchInputStyles'
import { useHistory } from 'react-router-dom';


function SearchInput(props) {
    const [query, setQuery]     = useState('');
    const { push }              = useHistory();
    
    function handleSubmit(e) {        
        e.preventDefault();
        push('/commits');
    }

    return (
        <SearchInputStyles>
            <form>
              <div>
                <input type="text"
                placeholder="Eg. facebook/react"
                // value={}
                onChange={(e) => setQuery(e.target.value)}
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
