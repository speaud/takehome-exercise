const
	router = require('express').Router(),
	patientsJson = require('../data/patients.json');

router.use('/:value', (req, res, next) => {
	//console.log("patientspatients")
	next();
})

/*
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.'
    });
*/

/**
 * List of patients - This endpoint should return a list of patients for consumption of the frontend.
 * @returns {obj} - List of patients
 */
router.get('/', (req, res, next) => {
  res.json(patientsJson)
})

/**
 * List of patients that include that string in their full_name
 * @param {string} name - The value to search for patient
 * @returns {obj} - Patients matches
 */
router.get('/:name', (req, res) => {
  res.json(patientsJson.filter(element => RegExp(`${req.params.name}`,'ig').test(element.full_name)))
})

/**
 * View one patient specifically
 * @param {string} mrn - The mrn of a patient
 * @returns {obj} - Patient
 */
router.get('/patient/:mrn', (req, res) => {
  res.json(patientsJson.find(element => element.mrn = req.params.mrn))
})

module.exports = router