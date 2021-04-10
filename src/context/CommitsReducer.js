export default function CommitsReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_COMMITS':
      return {
        ...state,
        commits: action.payload,
      }
    case 'UPDATE_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      }
    default:
      return state
  }
}
