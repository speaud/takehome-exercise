import {
	API,

  REQUEST_DESCRIPTION,
  RECEIVE_DESCRIPTION,

	REQUEST_PATIENTS,
	RECEIVE_PATIENTS
} from '../constants'

export const initializationAction = () => dispatch => {
  dispatch({
    type: REQUEST_DESCRIPTION
  })

	fetch(`${API}`)
	  .then((response) => {
	    return response.json();
	  })
	  .then((response) => {
	  	console.log(response)
		  dispatch({
		      type: RECEIVE_DESCRIPTION,
		      payload: response.content
		  })
	  })
  	.catch(error => console.error(error));

  dispatch({
    type: REQUEST_PATIENTS
  })  	 

	fetch(`${API}/patients`)
	  .then((response) => {
	    return response.json();
	  })
	  .then((response) => {
		  dispatch({
		      type: RECEIVE_PATIENTS,
		      payload: response
		  })
	  })
  	.catch(error => console.error(error));
};