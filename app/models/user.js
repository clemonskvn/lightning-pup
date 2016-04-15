// app/models/user.js
var mongoose	= require('mongoose')
var Schema      = mongoose.Schema;

var addrModel   = new Schema({
    type: {
        type: String,
        trim: true,
        uppercase: true,
        default: 'MBS',
        enum: ['M', 'B', 'S', 'MB', 'BS', 'MS', 'MBS'],
        required: true
    },
    street      : {
        type: String,
        trim: true,
        uppercase: true,
        match: /^[a-zA-Z\s\d\/]*\d[a-zA-Z\s\d\/]*$/,
        required: true
    },
    city        : {
        type: String,
        trim: true,
        uppercase: true,
        match: /[a-zA-Z\s\d/]*$/,
        required: true
    },
    state       : {
        type: String,
        trim: true,
        uppercase: true,
        default: 'TX',
        enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
        required: true
    },
    zipcode     : {
        type: String,
        trim: true,
        match: /^[0-9]{5}(?:-[0-9]{4})?$/,
        required: true
    }
});

var userName    = new Schema({
    firstName       : {
        type: String,
        trim: true,
        uppercase: true,
        match: [/^[A-Za-z][A-Za-z ,.'-]*$/, '{VALUE} is not a valid name.'],
        required: [true, 'First and last name are required.']
    },
    middleInitial   : {
        type: String,
        trim: true,
        uppercase: true,
        match: [/[A-Za-z]$/, '{VALUE} is not a valid middle initial.']
    },
    lastName        : {
        type: String,
        trim: true,
        uppercase: true,
        match: [/^[A-Za-z][A-Za-z ,.'-]*$/, '{VALUE} is not a valid name.'],
        required: [true, 'First and last name are required.']
    },
    type        : {
        type: String,
        trim: true,
        uppercase: true,
        enum: ['PRIMARY', 'SECONDARY', 'VIEW'],
        required: [true, 'Type of user is required.']
    }
}, { _id: false });

var email   = new Schema({
    type            : {
        type: String,
        trim: true,
        uppercase: true,
        enum: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
        required: [true, 'User email type is required.']
    },
    emailAddress    : {
        type: String,
        trim: true,
        match: [/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/, '{VALUE} is not a valid email.'],
        required: [true, 'User email address is required.']
    }
}, { _id: false });

var phone   = new Schema({
    type            : {
        type: String,
        trim: true,
        uppercase: true,
        enum: ['MOBILE', 'HOME', 'WORK', 'FAX', 'PAGER', 'OTHER'],
        required: [true, 'User phone type is required.']
    },
    telNumber       : {
        type: String,
        match: [/\d{10}/, '{VALUE} is not a valid phone number.'],
        required: [true, 'User phone number is required.']
    }
}, { _id: false });

var userModel   = new Schema({
    
    userId      : {
        type: String,
        trim: true,
        unique: true,
        index: true,
        required: [true, 'User ID is required.']
    },
    name        : [userName],
    email       : [email],
    phone       : [phone],
    address     : [addrModel],
    deleteIndicator : {
        type: String,
        enum: ['X']
    }
});

module.exports = mongoose.model('User', userModel);