const User = require('../models/sso/UserModel')
const {encryptPassword,decryptPassword} = require('../helpers/EncryptHelper')
require('dotenv').config() //<-- access app environment (.env)

const SignIn = (req, res, next) => {
    res.status(200).json({
        message: 'authenticated',
        password: req.body.password,
        encrypt: encryptPassword(req.body.password),
        decrypt: decryptPassword(encryptPassword(req.body.password))
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