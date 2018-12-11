/**
 * IndexRouter
 * Contains all router to particular endpoint
 * First router that will be accessed
 */

 //load package/middleware/helper
const IndexRouter = require('express').Router()
const { authorize } = require('../middlewares/AuthMiddleware')

// example
const example = require('../controllers/example/SsoController')
//<-- or
const { getUsers, signIn } = require('../controllers/example/SsoController')

//additional router
const SsoRouter = require('./sso/SsoRouter')
const AccountRouter = require('./account/AccountRouter')

IndexRouter.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'connected to application'
    })
});
IndexRouter.use('/sso', SsoRouter)
IndexRouter.use('/account',authorize(), AccountRouter)

// IndexRouter.get('/example', example.getUsers )
// IndexRouter.get('/example2/users', authorize(), getUsers)
// IndexRouter.post('/example/signin', signIn)
module.exports = { IndexRouter }

