/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/mongoose/mongoose.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../models/user.ts" />

import User = require('../models/user');
import mongoose = require('mongoose');

var model2 = <User.IUserModel> User;

var apa = new model2();



//var user2 = new user();




