import {
  FSA_META_DEFAULT,
  FSA_META_REQUEST,
  FSA_META_RECEIVE,

  REQUEST_PATIENTS,
  RECEIVE_PATIENTS,

  REQUEST_PATIENTS_QUERY,
  RECEIVE_PATIENTS_QUERY,

  REQUEST_PATIENTS_QUERY_RESULTS,
  RECEIVE_PATIENTS_QUERY_RESULTS,

  REQUEST_PATIENT,
  RECEIVE_PATIENT
} from '../constants/index.js';

const patients = (state = {
  query: {
    string: null,
    matches: []
  },
  list: [],
  selected: null,
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
      list: action.payload,
      meta: FSA_META_RECEIVE
    }    

    default:
      return state
  }
}

export default patients;