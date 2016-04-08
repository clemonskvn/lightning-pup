// app/models/user.js
var mongoose	= require('mongoose')
var Schema      = mongoose.Schema;
var addrModel   = new Schema({
    street      : String,
    city        : String,
    state       : String,
    zipcode     : Number
});

var userModel   = new Schema({
    userId      : String,
    firstName   : String,
    middleInitial: String,
    lastName    : String,
    email       : String,
    phone       : Number,
    address     : [addrModel]
});

module.exports = mongoose.model('User', userModel);