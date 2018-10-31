const index = require('express').Router()
const { authorize } = require('../middlewares/AuthMiddleware')
const example = require('../controllers/example/SsoController')
//<-- or
const { getUsers, signIn } = require('../controllers/example/SsoController')

index.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'connected to application'
    })
});

index.get('/example', example.getUsers )
index.get('/example2/users', authorize(), getUsers)
index.post('/example/signin', signIn)
module.exports = { index }

