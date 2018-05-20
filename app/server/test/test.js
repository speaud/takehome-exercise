const
	chai = require('chai'),
	chaiHttp = require('chai-http'),
	should = chai.should(),
	server = require('../index');

chai.use(chaiHttp)

describe('takehome exercise - api smoke test', () => {
	let testPatient;

	it('Get the description content', (done) => {
		chai.request(server)
		.get('/')
		.end((err, res) => {
	  	res.should.have.status(200)
  		done()
		})
	})

	it('Get the list of patients', (done) => {
		chai.request(server)
		.get('/patients')
		.end((err, res) => {
	  	res.should.have.status(200)
	  	testPatient = res.body[0]
  		done()
		})
	})

	it('Get patients whose full_name matches a string', (done) => {
		chai.request(server)
		.get(`/patients/${testPatient.full_name.slice(0, 3)}`)
		.end((err, res) => {
	  	res.should.have.status(200)
	  	chai.expect(res.body).to.not.be.empty // note: not recommended implementation however in this case it'll suffice
  		done()
		})
	})	

	it('Get a patient by mrn value', (done) => {
		chai.request(server)
		.get(`/patients/patient/${testPatient.mrn}`)
		.end((err, res) => {
	  	res.should.have.status(200)
			chai.expect(testPatient).to.deep.equal(res.body)
  		done()
		})
	})	
})