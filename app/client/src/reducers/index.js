import { combineReducers } from 'redux'
import patients from './patients.js'
import description from './description.js'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  patients,
  description,
  routing
})

export default rootReducer