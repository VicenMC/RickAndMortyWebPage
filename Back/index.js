//Calling dependencies
const express = require('express');
const morgan = require('morgan');
const server = express();

//Calling routes file
const router = require('./routes/routes.js');

//calling my db data
const {db} = require('./db/connections.js');

var bodyParser = require('body-parser');

//Using cors to allow interaction with frontend
const cors = require('cors');
const {PORT} = process.env;
require('dotenv').config();

//Allowing all sources to interact with the backend
server.use(
	cors({
		origin: '*'
	})
	);

server.use(express.json());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}))


//Calling main routes
server.use('/', router);
server.get('*', (req, res) => {
	res.status(400).json({error: 'Page not found'})
});

//Post
server.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
	db.sync({force: true})
})