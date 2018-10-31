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

module.exports = {
    bearerAuth
}