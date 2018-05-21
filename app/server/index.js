const
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	morgan = require('morgan');

// log requests to the console
app.use(morgan('dev'));

// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set our port
const port = process.env.PORT || 3001;

// create our router
const router = express.Router();

// middleware to use for all requests
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	//res.status(404).send("Sorry can't find that!")

  //console.log('everyrequest', req.params.length)
  next()
})

// ========== resource declarations ==========

	/**
	 * Description of the exercise
	 * @returns {...} - Brief description about the project
	 */	
	router.get('/', (req, res) => {
		res.json({'content': '<div>\
			<a href="sd">view demo</a>\
			<p>see the project readme for more information</p>\
			</div>'});	
	});

	router.use('/patients', require('./controllers/patients.ctrl.js'))

// ===========================================

// register routes
app.use('/', router);

// start the server
app.listen(port);

console.log(`express API server running on ${port}`);

module.exports = app