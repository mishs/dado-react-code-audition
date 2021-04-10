import React, { createContext, useReducer } from 'react';
import CommitsReducer from './CommitsReducer';

const initialState = {
    commits: {},
    searchQuery: ''
}

export const CommitsContext = createContext(initialState);

export const CommitsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CommitsReducer, initialState);

    function updateCommits(commits) {
        dispatch({
            type: 'UPDATE_COMMITS',
            payload: commits
        });
    }

    function updateSearchQuery(searchQuery) {
        dispatch({
            type: 'UPDATE_SEARCH_QUERY',
            payload: searchQuery
        });
    }

    return (
        <CommitsContext.Provider value={{ 
            commits: state.commits,  
            searchQuery: state.searchQuery,
            updateCommits,
            updateSearchQuery
        }}>
            {children}
        </CommitsContext.Provider>
    )
}

export default CommitsContext
 