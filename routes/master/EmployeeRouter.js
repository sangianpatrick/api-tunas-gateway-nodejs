const EmployeeRouter = require('express').Router()

//load middleware
const { authorize  } = require('../../middlewares/AuthMiddleware')

//load controller
const { GetEmployees, GetEmployeeById } = require('../../controllers/master/EmployeeController')

EmployeeRouter.get('/', GetEmployees)
EmployeeRouter.get('/:employee_id', GetEmployeeById)

module.exports = EmployeeRouter