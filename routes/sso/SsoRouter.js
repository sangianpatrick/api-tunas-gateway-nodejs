const SsoRouter = require('express').Router()

//load middleware
const { authorize  } = require('../../middlewares/AuthMiddleware')

//router module for sso
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')

SsoRouter.use('/auth', AuthRouter)
SsoRouter.use('/users', UserRouter)

module.exports = SsoRouter