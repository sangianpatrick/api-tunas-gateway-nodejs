const init = require('express').Router()

//router module for sso
const authRouter = require('./AuthRouter')
const userRouter = require('./UserRouter')

init.use('/', authRouter)
init.use('/user', userRouter)

module.exports = init