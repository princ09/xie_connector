const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = user = mongoose.model('user', userSchema);