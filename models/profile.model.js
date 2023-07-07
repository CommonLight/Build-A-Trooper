const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    
    userRank: {type: String,
        required: [true, `A rank or title is required.`]},


    userName: {type: String,
        required: [true, `A rank or title is required.`],
        minlength: [5, `Username is too short.`],
        maxlength: [50, `Username is too long.`]},


    userStation: {type: String,
        required: [true, `You must specify your current station.`]},


    userMail: {type: String,
        required: [true, `An official hyper-e-mail address is required.`],
        minlength: [5, `Indicated hyper-e-mail address is too short.`],
        maxlength: [50, `Indicated hyper-e-mail address is too long.`],
        validate: {
            validator: function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                return emailRegex.test(value)},
            message: `Imperial Mail address is invalid.`}},


    userPassword: {type: String,
        required: [true, `A password is required.`],
        minlength: [7, `Password must be 7 or more characters long.`],
        maxlength: [20, `Password cannot be longer than 20 characters.`],
        validate: {
            validator: function (value) {
                const symbolRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/
                return symbolRegex.test(value)},
            message: `Password must contant at least one unique symbol [!@#$%^&*].`}},


    // userConfirmPassword: {type: String,
    //     required: [true, `You must confirm your password.`],
    //     validate: {
    //         validator: function (value) {
    //             console.log(this.userPassword)
    //             return value === this.userPassword},
    //         message: `The password confirmation must exactly match the password entered.`}
    //     },


}, {timestamps: true})

module.exports = mongoose.model('Profile', ProfileSchema)