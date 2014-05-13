/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/mongoose/mongoose.d.ts" />

// Document interface
export interface IUserDocument extends mongoose.Document {
    email: string;
    password: string;
    generateHash(password: string): string;
    validPassword(password: string): string;
}

// Model interface
export interface IUserModel extends mongoose.Model<IUserDocument> {
    
}


import mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// Schema
var userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String }
});


//Statics

userSchema.methods.generateHash = function generateHash(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}


userSchema.methods.validPassword = function validPassword(password: string): string {
    return bcrypt.compareSync(password, this.password);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);


