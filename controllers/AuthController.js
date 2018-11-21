const User = require('../models/sso/UserModel')
require('dotenv').config() //<-- access app environment (.env)

const SignIn = (req, res, next) => {
    res.status(200).json({
        message: 'authenticated'
    })
}

const SignOut = (req, res, next) => {
    res.status(200).json({
        message: 'logged out'
    })
}

const GetProfile = (req, res, next) => {
    res.status(200).json({
        message: 'user profile',
        profile: {
            fullname: 'Patrick Maurits Sangian',
            email: 'patricksangian@gmail.com'
        }

    })
}

module.exports = {
    SignIn,
    SignOut,
    GetProfile
}