const
	router = require('express').Router(),
	patientsJson = require('../data/patients.json');

router.get('/', (req, res) => {
  res.json({ data: patientsJson })
})

router.get('/:name', (req, res) => {
  res.json({ data: patientsJson.find(element => element.full_name = req.params.name) })
})

module.exports = router