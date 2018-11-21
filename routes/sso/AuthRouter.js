const AuthRouter = require('express').Router()

//load controller
const { SignIn, SignOut, GetProfile } = require('../../controllers/AuthController')

AuthRouter.post('/signin', SignIn)
AuthRouter.get('/signout', SignOut)

module.exports = AuthRouter