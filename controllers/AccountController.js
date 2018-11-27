require('dotenv').config() //<-- access app environment (.env)

// load model
const User = require('../models/sso/UserModel')

const GetProfile = (req, res, next) => {
    res.status(200).json({
        message: 'user profile',
        profile: {
            employee_id: 'HOIT18001',
            username: 'patrick.maurits',
            fullname: 'Patrick Maurits Sangian',
            email: 'patrick.maurits@intra.tunasgroup.com',
            image: '/user/profile-picture/patrickmaurits.jpg'
        },
        links: {
            change_password: {
                header: 'authorization',
                method: 'patch',
                uri: '/account/',
                body: ['old_password', 'new_password']
            },
            update_profile_picture: {
                header: 'authorization',
                method: 'patch',
                uri: '/account/profile-picture',
                file: {
                    format: ['jpg','jpeg','png'],
                    dimension: [400, 400],
                    size_on_disk: {
                        measurement: 'KByte',
                        value: 512
                    }
                }
            }
        }

    })
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