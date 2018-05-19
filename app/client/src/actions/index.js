import axios from 'axios'


import {
	REQUEST_PATIENTS,
	RECEIVE_PATIENTS
} from '../constants'


//axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const initializationAction = () => dispatch => {
	console.log('initializationAction')
  dispatch({
      type: REQUEST_PATIENTS
  });


	axios.get('/api/patients')
		.then(function (response) {
		  dispatch({
		      type: RECEIVE_PATIENTS,
		      payload: response.data
		  });			
		})
		// todo: error handle
};