import {
  FSA_META_DEFAULT,
  FSA_META_REQUEST,
  FSA_META_RECEIVE,

  REQUEST_DESCRIPTION,
  RECEIVE_DESCRIPTION
} from '../constants/index.js';

const description = (state = {
  content: null,
  meta: FSA_META_DEFAULT
}, action) => {
  switch (action.type) {

  case REQUEST_DESCRIPTION:
    return {
      ...state,
      meta: FSA_META_REQUEST
    }

  case RECEIVE_DESCRIPTION:
    return {
      ...state,
      content: action.payload,
      meta: FSA_META_RECEIVE
    }    

    default:
      return state
  }
}

export default description;