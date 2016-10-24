var UserController = require("./controllers/UserController");
var router = require('express').Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

// Test route for user post and get methods
router
    .route("/user")
    .post(function (req, res) {
        if (req.body) {
            UserController.userSignup(req.body, function (err, response) {
                if (!err) {
                    req.session.user_id = req.body.username;
                }
                res.json(response)
            })
        } else {
            res.json(Utils.makeResponse(false, "No data Passed"))
        }
    });

module.exports = router;