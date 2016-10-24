/**
 * Created by hangvirus on 23/10/16.
 */
var UserSchema = require('../Schemas/Schemas').UserSchema;
var mongoose = require("mongoose");

module.exports = mongoose.model("User", UserSchema);