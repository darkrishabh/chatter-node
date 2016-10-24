var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    gender: String,
    active: { type: Boolean, default: true },
    last_active: { type: Date, default: Date.now },
    date_created: { type: Date, default: Date.now }
});

UserSchema.methods = {
    greet: function(){
        console.log(this.username + ", Welcome")
    },
    addPassword: function(password){
        this.password = bcrypt.hashSync(password, 10);
    }
};

module.exports = UserSchema;