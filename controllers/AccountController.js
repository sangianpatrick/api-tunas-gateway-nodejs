require('dotenv').config() //<-- access app environment (.env)

// load model
const FakeUser = require('../models/sso/FakeUserModel')

const GetProfile = (req, res, next) => {
    FakeUser.getProfile(req.user.id)
        .then((profile) => {
            res.status(200)
                .json(profile)
        })
        .catch(error => next(error))
}

const ChangePassword = (req, res) => {
    res.status(200).json({
        message: 'password changed',
        directory: __dirname
    })
}

const ChangeProfilePicture = (req, res) => {
    // res.cookie('rememberme', '1',{expires: new Date(Date.now() + 900000), httpOnly: true})
    res.status(200).json({
        message: 'profile picture updated'
    })
}

module.exports = {
    GetProfile,
    ChangePassword,
    ChangeProfilePicture
}