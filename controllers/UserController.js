"use strict";
const User = require('../DB/Models/User');
class UserController {
    userSignup(user_data, cb) {
        var self = this;
        let username = user_data.username;
        /* Check if the username already exists */
        User.where({username: username}).findOne(function (err, doc) {
            /*
                If user doesn't exist then create one
             */
            if (!err && !doc) {
                // create new user model object
                var user = new User();
                // populating user object
                user.addPassword(user_data.password);
                user.username = username;
                user.first_name = user_data.first_name;
                user.last_name = user_data.last_name;
                user.gender = user_data.gender;

                user.save(function (err, userObj) {
                    if (err) {
                        // All callbacks func(err, response)
                        cb(err, Utils.makeResponse(false, "Could not save the user" +
                            err, {}))
                    } else {
                        cb(err, Utils.makeResponse(true, null, userObj))
                    }
                })
            } else {
                cb(err, Utils.makeResponse(false, "User already exists by username " +
                    username, {}))
            }
        });
    }
}

module.exports = new UserController();