const UserRouter = require('express').Router()
const { authorize } = require('../../middlewares/AuthMiddleware')

UserRouter.get('/', (req, res) => {
    res.status(200).json({
        message: `on sso/users "list of user users"`
    })
})

UserRouter.post('/', (req, res) => {
    res.status(200).json({
        message: `on sso/users "add new sso user"`
    })
})

UserRouter.get('/:user_id', (req, res) => {
    res.status(200).json({
        message: `on sso/users "detail of user with id ${req.params.user_id}"`
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

