import {
  FSA_META_DEFAULT,
  FSA_META_REQUEST,
  FSA_META_RECEIVE,

  REQUEST_PATIENTS,
  RECEIVE_PATIENTS,

  REQUEST_PATIENTS_QUERY,
  RECEIVE_PATIENTS_QUERY,

  RECEIVE_PATIENTS_RESET
} from '../constants/index.js';

const patients = (state = {
  query: {
    string: null,
    matches: []
  },
  masterList: [],
  list: [],
  selected: [],
  meta: FSA_META_DEFAULT
}, action) => {
  switch (action.type) {

  case REQUEST_PATIENTS:
    return {
      ...state,
      meta: FSA_META_REQUEST
    }

  case RECEIVE_PATIENTS:
    return {
      ...state,
      masterList: action.payload,
      list: action.payload,
      meta: FSA_META_RECEIVE
    }

  case RECEIVE_PATIENTS_RESET:
  case RECEIVE_PATIENTS_QUERY:
    return {
      ...state,
      list: action.payload,
      meta: FSA_META_RECEIVE
    }    

    default:
      return state
  }
}

export default patients;