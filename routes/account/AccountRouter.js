const AccountRouter = require('express').Router()

// load controller
const { GetProfile, ChangePassword, UpdateProfilePicture } = require('../../controllers/AccountController')

AccountRouter.get('/', GetProfile)
AccountRouter.patch('/', ChangePassword)
AccountRouter.get('/profile-picture', UpdateProfilePicture)

module.exports = AccountRouter