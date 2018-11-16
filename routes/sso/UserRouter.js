const user = require('express').Router()
const { authorize } = require('../../middlewares/AuthMiddleware')

user.get('/', (req, res) => {
    res.status(200).json({
        message: `on sso/users "list of user users"`
    })
})

user.post('/', (req, res) => {
    res.status(200).json({
        message: `on sso/users "add new sso user"`
    })
})

user.get('/:user_id', (req, res) => {
    res.status(200).json({
        message: `on sso/users "detail of user with id ${req.params.user_id}"`
    })
})

user.patch('/:user_id', (req, res) => {
    res.status(200).json({
        message: `on sso/users "update existing sso user with id ${req.params.user_id}"`
    })
})

user.delete('/:user_id', (req, res) => {
    res.status(200).json({
        message: `on sso/users "remove existing sso user with id ${req.params.user_id}"`
    })
})

module.exports = user

