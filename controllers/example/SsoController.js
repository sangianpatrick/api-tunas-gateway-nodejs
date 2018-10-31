const axios = require('axios')
const { User,UserGroup } = require('../../models/example/SsoModel')

const signIn = (req, res, next) => {
    axios.post('http://192.168.200.110:88/v6/public/api/sso.php', {
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

const getUsers = (req, res, next) => {
    User.findAll()
        .then((result) => {
            // var check_group = req.user.groups.find(function(data) { 
            //     if(data == 1){
            //         return true
            //     }
            //     return false
            // })
            res.status(200).json({
                success: true,
                is_group: req.user,
                users: result
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

//<-- add more function depends on business needs

module.exports = {
    getUsers,
    signIn
}

