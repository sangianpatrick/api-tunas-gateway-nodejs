const { User } = require('../../models/example/SsoModel')

const getUsers = (req, res, next) => {
    User.findAll()
        .then((result) => {
            res.status(200).json({
                success: true,
                users: result
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

//<-- add more function depends on business needs

module.exports = {
    getUsers
}

