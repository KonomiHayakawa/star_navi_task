import {createStore, combineReducers} from 'redux'
import modesReducer from './modesReducer'
import fieldReducer from './fieldReducer'
import historyReducer from './historyReducer'

const reducers = combineReducers({
  modesReducer,
  fieldReducer,
  historyReducer,
})

const store = createStore(reducers)

export default store