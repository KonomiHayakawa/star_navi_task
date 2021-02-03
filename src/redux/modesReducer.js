const initialState = {
  fieldModes: {},
  selectedModeSize: 0,
  isGameStarted: false,
}

const modesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FIELD_MODES': 
      return {...state, fieldModes: action.fieldModes}
    case 'SET_SELECTED_MODE': 
      return {...state, selectedModeSize: action.selectedModeSize}
    case 'SET_IS_GAME_STARTED': 
      return {...state, isGameStarted: action.isStarted}
    default: return state
  }
}

export const setFieldModes = (fieldModes) => ({type: 'SET_FIELD_MODES', fieldModes})
export const setSelectedModeSize = (selectedModeSize) => ({type: 'SET_SELECTED_MODE', selectedModeSize})
export const setIsGameStarted = (isStarted) => ({type: 'SET_IS_GAME_STARTED', isStarted})

export default modesReducer