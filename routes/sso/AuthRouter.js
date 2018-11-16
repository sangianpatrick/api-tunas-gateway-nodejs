const auth = require('express').Router()

auth.post('/signin', (req, res) => {
    res.status(200).json({
        message: 'on sso/signin'
    })
})

auth.get('/signout', (req, res) => {
    res.status(200).json({
        message: 'on sso/signout'
    })
})

module.exports = auth