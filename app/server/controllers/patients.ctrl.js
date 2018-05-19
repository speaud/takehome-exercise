const
	router = require('express').Router(),
	patientsJson = require('../data/patients.json');

// List of patients - This endpoint should return a list of patients for consumption of the frontend.
router.get('/', (req, res) => {
  res.json(patientsJson)
})

router.get('/:name', (req, res) => {
	// todo: better regex - paz i should match Paz Littlejohn
  res.json({ data: patientsJson.filter(element => RegExp(`${req.params.name}`,'ig').test(element.full_name)) })
	// res.json({ data: patientsJson.filter(element => RegExp(`[${req.params.name}]`,'ig').test(element.full_name)) })
  //res.json({ matchedPatients: matches.length, matches: matches, totalPatients: patientsJson.length, patients: patientsJson })
})

/*
router.get('/:mrn', (req, res) => {})
*/

module.exports = router