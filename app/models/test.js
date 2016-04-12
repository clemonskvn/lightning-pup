// app/models/test.js
var mongoose	= require('mongoose')
var Schema      = mongoose.Schema;

var testModel   = new Schema({
    myText: String
});

module.exports = mongoose.model('Test', testModel);