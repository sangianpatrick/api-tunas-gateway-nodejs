const UserRouter = require('express').Router()
const { authorize } = require('../../middlewares/AuthMiddleware')

//load controller
const { GetUsers, GetUserByEmployeeId  }= require('../../controllers/sso/UserController')

UserRouter.get('/', GetUsers)

UserRouter.get('/:user_emp_id', GetUserByEmployeeId)

UserRouter.post('/', (req, res) => {
    res.status(200).json({
        message: `on sso/users "add new sso user"`
    })
})


UserRouter.patch('/:user_id', (req, res) => {
    res.status(200).json({
        message: `on sso/users "update existing sso user with id ${req.params.user_id}"`
    })
})

UserRouter.delete('/:user_id', (req, res) => {
    res.status(200).json({
        message: `on sso/users "remove existing sso user with id ${req.params.user_id}"`
    })
})

module.exports = UserRouter

