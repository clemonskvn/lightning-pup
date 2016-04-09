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
    
    userId      : {
        type: String,
        required: [true, 'User ID is required.']
    },
    
    userName        : {
        firstName       : {
            type: String,
            uppercase: true,
            valudate: /a/,
            required: [true, 'First and last name are required.']
        },
        middleInitial   : {
            type: String,
            uppercase: true,
            validate: {
                validator: function(v) {
                    return /[A-Za-z]/.test(v);
                },
                message: 'Middle initial must only be one character.'
            }
        },
        lastName        : {
            type: String,
            uppercase: true,
            valudate: {
                validator: function(v) {
                    return /^[A-Z][a-zA-Z ,.'-]*/.test(v);
                },
                message: 'Name must only be characters, white space, commas, periods, apostrophes, and/or hyphens.'
            },
            required: [true, 'First and last name are required.']
        }
    }/*,
    
    email       : [{
        type            : {
            type: String,
            uppercase: true,
            enum: ['PRIMARY', 'SECONDARY'],
            required: [true, 'User email type is required.']
        },
        emailAddress    : {
            type: String,
            validate: {
                validator: function(v) {
                    return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(v);
                },
                message: '{VALUE} is not a valid email address.'
            },
            required: [true, 'User email address is required.']
        }
    }],
    
    phone       : [{
        type            : String,
        telNumber       : {
            type: String,
            validate: {
                validator: function(v) {
                    return /\d{3}-\d{3}-\d{4}/.test(v);
                },
                message: '{VALUE} is not a valid phone number.'
            },
            required: [true, 'User phone number is required.']
        }
    }],
    
    address     : [addrModel],
    
    deleteIndicator : {
        type: String,
        enum: ['X']
    }
    */
});

module.exports = mongoose.model('User', userModel);