import { combineReducers } from 'redux'
import patients from './patients.js'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  patients,
  routing
})

export default rootReducer