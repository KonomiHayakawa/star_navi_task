const initialState = {
  currentRow: '',
  currentColumn: '',
}

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ROW': 
      return {...state, currentRow: action.currentRow}
    case 'SET_CURRENT_COLUMN': 
      return {...state, currentColumn: action.currentColumn}
    default: return state
  }
}

export const setCurrentRow = (currentRow) => ({type: 'SET_CURRENT_ROW', currentRow})
export const setCurrentColumn = (currentColumn) => ({type: 'SET_CURRENT_COLUMN', currentColumn})

export default fieldReducer