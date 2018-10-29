const index = require('express').Router()

const example = require('../controllers/example/SsoController')
//<-- or
const { getUsers } = require('../controllers/example/SsoController')

index.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'connected to application'
    })
});

index.get('/example', example.getUsers )
index.get('/example2', getUsers)

module.exports = { index }

