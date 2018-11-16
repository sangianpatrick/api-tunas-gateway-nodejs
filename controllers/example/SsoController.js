const axios = require('axios')
const { User,UserGroup } = require('../../models/example/SsoModel')

require('dotenv').config() //<-- access app environment (.env)

const signIn = (req, res, next) => {
    axios.post(process.env.SIGNIN_URL, {
        username: req.body.username,
        password: req.body.password
    },{
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
    .then((result) => {
        return res.status(result.status)
            .json(result.data)
    })
    .catch((error) => {
        return res.status(error.response.status)
            .json(result.data)
    })
}

function groupChecking(groups){
    return new Promise((resolve, reject) => {
        var isOnGroup = groups.find(function(group){
            if(group == 169){
                resolve(true)
            }else{
                reject(new Error('Not listed in group'))
            }
        })
    })
}

const getUsers = (req, res, next) => { 
    User.findAll()
        .then(async (result) => {
            let message;
            try{
                var isOnGroup = await groupChecking(req.user.groups)
                message = 'list of user'
                res.status(200)
            }catch(error){
                console.log(error.message)
                var isOnGroup = false
                result = undefined
                message = 'request is forbidden'
                res.status(403)
            }
            res.json({
                success: isOnGroup,
                message: message,
                users: result
            })
            
        })
        .catch((error) => {
            console.error(error)
        })
}

//<-- add more function depends on business needs

module.exports = {
    getUsers,
    signIn
}

