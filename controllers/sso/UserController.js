require('dotenv').config()

//load model
const FakeUser = require('../../models/sso/FakeUserModel')

//module function
function validateUrlQuery(req){
    var validOrder = /[\w],(ASC|asc|DESC|desc)$/.test(req.query.order||'user_id,asc')
    var validOfsset = /\d$/.test(req.query.offset||0)
    var validLimit = /\d$/.test(req.query.limit||10)
    var error=[]
    if(!validOrder){
        error.push({
            name: 'Invalid Order Query'
        })
    }
    if(!validOfsset){
        error.push({
            name: 'Invalid Offset Query'
        })
    }
    if(!validLimit){
        error.push({
            name: 'Invalid Limit Query'
        })
    }

    var query = {
        order: req.query.order||'user_id,asc',
        offset: parseInt(req.query.offset) || 0,
        limit: parseInt(req.query.limit)|| 10
    }

    return new Promise((resolve, reject) => {
        if(error.length < 1){
            console.log('error: '+error.length)
            resolve(query)
        }else{
            console.log('error: asdfasdf')

            reject(error)
        }
    })
}

function setPagination(query,counted){
    var pages = Math.floor(counted/query.limit) + (counted % Math.floor(counted/query.limit) > 1?1:0)
    var offset = 0
    var pagination = []
    for (let i = 1; i <= pages; i++) {
        pagination.push({
            page: i,
            uri: `/sso/users?order=${query.order}&offset=${offset}&limit=${query.limit}`
        })
        offset += query.limit
        
    }

    return pagination


}

//controller function
const GetUsers = async (req, res, next) => {
    
    try {
        var query = await validateUrlQuery(req)

        order = query.order.split(',',2)

        FakeUser.findAndCountAll({
            attributes: {
                exclude: ['create_user','create_date','update_user','update_date','user_pasword','user_password_salt','user_count_wrong_pass'] 
            },
            offset: query.offset, 
            limit: query.limit,
            order: [
                order
            ]
        })
        .then((result) => {
            var users = []
            result.rows.forEach((row, i) => {
                users.push({
                    user_id: row.user_id,
                    user_emp_id: row.user_emp_id,
                    user_fullname: row.user_fullname,
                    user_email: row.user_email,
                    access_link:{
                        uri: `/sso/users/${row.user_emp_id}`,
                        authorization: true
                    } 
                })
            })
            
            res.status(200)
                .json({
                    count: result.count,
                    pages: setPagination(query,result.count),
                    users: users
                })
        })
    } catch (error) {
        console.log(error)
        res.status(400)
        .json({
            error_on_validation: error
        })
    }
}

const GetUserByEmployeeId = (req, res, next) => {
    
    FakeUser.findByEmployeeId(req.params.user_emp_id)
        .then((user) => {
            if(!user){
                next()

            }else{
                res.status(200)
                    .json(user)
            }
            
        })
        .catch(error => next(error))
}

module.exports = {
    GetUsers,
    GetUserByEmployeeId
}
