"use strict";
/**
 * This server just provides REST APIs to run the chat application
 * No one gives a fuck about server but I kind of do. So here is what I plan to
 * do.
 * 1. Connect a DB with the server
 * 2. Write the login/signup api
 * 3. Based on the login user I am gonna generate a session which will be stored in some DB(redis most probably.)
 */

    require("babel-register");
var express = require('express'),
    path = require('path'),
    router = require('./routes'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    db = require('./DB/database'),
    session = require('express-session'),
    bodyParser = require('body-parser');

//Defining Utils as a global var
global.Utils = require("./utils");

// Setting up the express app.
var app = express();

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('../webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'web/dist')));

//configure app to parse cookies and populate request cookies
app.use(cookieParser());
// To Set Sessions
app.use(session({secret: 'ssshhhhh'}));
// Logger added
app.use(logger('combined'));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
app.use('/', router);


// START THE SERVER AFTER DB CONNECTION
// =============================================================================
db(function(){
    app.listen(port);
    console.log('Magic happens on port ' + port);
})