import {
	API,

  REQUEST_DESCRIPTION,
  RECEIVE_DESCRIPTION,

	REQUEST_PATIENTS,
	RECEIVE_PATIENTS,

	REQUEST_PATIENTS_QUERY,
	RECEIVE_PATIENTS_QUERY,

	RECEIVE_PATIENTS_RESET
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

export const patientQueryAction = (arr, str) => dispatch => {
	// fetch(`${API}/patients${str}`) <-- no need since we already have data
	/*
	*/
	//if (str.length >= 3) {}
  dispatch({
    type: REQUEST_PATIENTS_QUERY
  })	

  dispatch({
    type: RECEIVE_PATIENTS_QUERY,
    payload: arr.filter(element => RegExp(`${str}`,'ig').test(element.full_name))
  })
}

export const resetPatientsListAction = arr => dispatch => {
	dispatch({
		type: RECEIVE_PATIENTS_RESET,
		payload: arr
	})
}