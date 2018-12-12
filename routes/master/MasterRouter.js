const MasterRouter = require('express').Router()

//load middleware
const { authorize  } = require('../../middlewares/AuthMiddleware')

//router module for master
const EmployeeRouter = require('./EmployeeRouter')

MasterRouter.use('/employees', EmployeeRouter)

module.exports = MasterRouter