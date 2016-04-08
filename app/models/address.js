// app/models/address.js

var mongoose	= require('mongoose'), schema  = mongoose.Schema;
var ObjectId    = schema.ObjectId;
var addrModel   = new schema({
    // props
    addrId  : ObjectId,
    street  : String,
    city    : String,
    state   : String,
    zipcode : String
});


mongoose.model('Address', addrModel);