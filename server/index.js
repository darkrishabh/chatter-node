/**
 * This server just provides REST APIs to run the chat application
 * No one gives a fuck about server but I kind of do. So here is what I plan to
 * do.
 * 1. Connect a DB with the server
 * 2. Write the login/signup api
 * 3. Based on the login user I am gonna generate a session which will be stored in some DB(redis most probably.)
 */
var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

// Setting up the express app.
const app = express();

//configure app to parse cookies and populate request cookies
app.use(cookieParser());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);