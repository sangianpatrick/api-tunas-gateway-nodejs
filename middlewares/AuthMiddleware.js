const { bearerAuth } = require('../helpers/AuthHelpers')
const FakeUser = require('../models/sso/FakeUserModel')

const authorize = function(){
    console.log('authorizing request ...')
    return (req, res, next) => {
        bearerAuth(req, (error, decoded) => {
            if(error){
                res.status(401).json({error})
            }else{
                req.user = {id: decoded.user_id}
                next()
            }
        })
    }
}

module.exports = {
    authorize
}