var CONFIG = require('../config/database.js');
var mongoose = require('mongoose');
module.exports = function db_connect(cb) {
    //Connect to the mongoose
    mongoose.connect(process.env.DB_URL || CONFIG.URI);

    // Logging any connection errors
    mongoose.connection.on("error", console.error.bind(console, 'connection error:'));

    // Performing Schema Actions once the connection is open
    mongoose.connection.once("open", function () {
        console.log("Database Connected");
        if (cb) {
            cb();
        }
    });
};