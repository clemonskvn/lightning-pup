// app/models/user.js

var mongoose	= require('mongoose'), schema  = mongoose.Schema;
var ObjectId    = schema.ObjectId;
var addrModel   = require('./user');
var userModel   = new schema({
    // props
    userId  : ObjectId,
    firstName   : String,
    middleInitial   : String,
    lastName    : String,
    email   : String,
    phone   : Number,
    address : [addrModel]
});


mongoose.model('User', userModel);