

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String }
});

module.exports = mongoose.model('User', userSchema);
//# sourceMappingURL=user.js.map
