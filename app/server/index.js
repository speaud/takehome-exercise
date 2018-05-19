const
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	morgan = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set our port
const port = process.env.PORT || 3001;

// create our router
const router = express.Router();

// middleware to use for all requests
app.use((req, res, next) => {
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
		res.json({ message: 'Description of the exercise' });	
	});

	router.use('/patients', require('./controllers/patients.ctrl.js'))

// ===========================================

// register routes
app.use('/', router);

// start the server
app.listen(port);

console.log(`express API server running on ${port}`);

module.exports = app