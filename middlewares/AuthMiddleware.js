const { bearerAuth } = require('../helpers/AuthHelpers')
const { User,UserGroup,UserApplication  } = require('../models/example/SsoModel')

const authorize = function(){
    console.log('authorizing request ...')
    return (req, res, next) => {
        bearerAuth(req, (error, decoded) => {
            if(error){
                res.status(401).json({error})
            }else{
                User.findOne({
                    include: [
                        { 
                            model: UserGroup, as: "groups",
                        },
                        // {
                        //     model: UserApplication, as: "applications"
                        // }
                    ],
                    where: {user_id: decoded.user}
                })
                .then((userdata) => {
                    req.user = userdata
                })
                .catch((error) => {
                    next(error)
                })
                
                next()
            }
        })
    }
}

module.exports = {
    authorize
}