const
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	morgan = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use([bodyParser.urlencoded({ extended: true }), bodyParser.json()]);

// set our port
const port = process.env.PORT || 3001;

// create our router
const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => {
  next();
});

// ========== resource declarations ==========

	// Description of the exercise - This endpoint should return a brief description about the project, it may be a static value that is returned.
	router.get('/', (req, res) => {
		res.json({ message: 'Description of the exercise' });	
	});

	// List of patients - This endpoint should return a list of patients for consumption of the frontend.
	router.use('/patients', require('./controllers/patients.ctrl.js'))

// ===========================================

// register routes
app.use('/', router);

// start the server
app.listen(port);

console.log(`express API server running on ${port}`);