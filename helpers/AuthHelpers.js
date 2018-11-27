const jwt = require('jsonwebtoken')
require('dotenv').config()

const bearerAuth = (req, callback) => {
    const auth_header = req.headers.authorization || ' '
    const token = auth_header.split(' ')
    if(token[0] != 'Bearer'){
        callback({
            name: 'NotABearerFormat',
            message: 'invalid token'
        })
    }else{
        jwt.verify(token[1], process.env.JWT_SECRET_KEY, (error, decoded) => {
            callback(error, decoded)
        })
    }
}

const genAuthToken = (user, req, res, next) => {
    jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET_KEY,{ expiresIn: 60*60*24*15 }, (error, token) => {
        if (error) { next() }
        else {
            res.status(200)
            .json({
                message: 'authenticated',
                auth_token: token
            })
        }
})
}

module.exports = {
    bearerAuth,
    genAuthToken
}