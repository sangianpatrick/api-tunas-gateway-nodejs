const User = require('../models/sso/UserModel')
const { genAuthToken } = require('../helpers/AuthHelpers')
require('dotenv').config() //<-- access app environment (.env)

//load models
const FakeUser = require('../models/sso/FakeUserModel')

const SignIn = (req, res, next) => {
    FakeUser.findByUserId(req.body.user_id)
    .then((user) => {
        if(user && user.validPassword(req.body.password)){
            genAuthToken(user, req, res, next)
        }else{
            res.status(400).json({
                message: 'incorrect user_id or password',
            })
        }
    })
}

const SignOut = (req, res, next) => {
    res.status(200).json({
        message: decryptPassword(req.body.password)
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