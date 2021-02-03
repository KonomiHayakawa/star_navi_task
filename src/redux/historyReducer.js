const initialState = {
  history: [],
}

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_HISTORY': 
      return {...state, history: [...state.history, action.newHistoryItem]}
    case 'CLEAR_HISTORY': 
      return {...state, history: []}
    default: return state
  }
}

export const addToHistory = (newHistoryItem) => ({type: 'ADD_TO_HISTORY', newHistoryItem})
export const clearHistory = () => ({type: 'CLEAR_HISTORY'})


export default historyReducer