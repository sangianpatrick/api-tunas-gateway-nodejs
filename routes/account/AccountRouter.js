const AccountRouter = require('express').Router()

// load controller
const { GetProfile, ChangePassword, ChangeProfilePicture } = require('../../controllers/AccountController')

AccountRouter.get('/', GetProfile)
AccountRouter.patch('/', ChangePassword)
AccountRouter.patch('/profile-picture', ChangeProfilePicture)

module.exports = AccountRouter