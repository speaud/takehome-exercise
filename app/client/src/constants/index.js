// Define general-use constants
export const IS_PRODUCTION = (process.env.NODE_ENV == 'production') ? true : false;
export const API = 'http://localhost:3001'

// Define Flux Standard Action constants - https://github.com/acdlite/flux-standard-action
export const FSA_META_DEFAULT = {
	fetching: null,
	fetched: null
};

export const FSA_META_REQUEST = {
	fetching: true,
	fetched: false
};

export const FSA_META_RECEIVE = {
	fetching: false,
	fetched: true	
};

// Define action type constants
export const REQUEST_DESCRIPTION = 'REQUEST_DESCRIPTION'
export const RECEIVE_DESCRIPTION = 'RECEIVE_DESCRIPTION'

export const REQUEST_PATIENTS = 'REQUEST_PATIENTS'
export const RECEIVE_PATIENTS = 'RECEIVE_PATIENTS'

export const REQUEST_PATIENTS_QUERY = 'REQUEST_PATIENTS_QUERY'
export const RECEIVE_PATIENTS_QUERY = 'RECEIVE_PATIENTS_QUERY'

export const RECEIVE_PATIENTS_RESET = 'RECEIVE_PATIENTS_RESET'






















export const REQUEST_PATIENTS_QUERY_RESULTS = 'REQUEST_PATIENTS_QUERY_RESULTS'
export const RECEIVE_PATIENTS_QUERY_RESULTS = 'RECEIVE_PATIENTS_QUERY_RESULTS'

export const REQUEST_PATIENT = 'REQUEST_PATIENT'
export const RECEIVE_PATIENT = 'RECEIVE_PATIENT'
