require('dotenv').config()

//load model
const FakeUser = require('../../models/sso/FakeUserModel')

//module function
function uriQueryValidator(req,res){
    var validOrder = /[\w],(ASC|asc|DESC|desc)$/.test(req.query.order)
    var validOfsset = /\d$/.test(req.query.offset)
    var validLimit = /\d$/.test(req.query.limit)
}

//controller function
const GetUsers = async (req, res, next) => {
    if(!validOrder){
        res.status(400).json({
            message: `order in query string must be a column name and order type eg. ?order=test,asc`
        })
    }

    // const {offset,limit, order} = req.query

    // var order = order?order.split(',',2):['user_id','asc']
    // var counted_user = await FakeUser.count()


    // FakeUser.findAndCountAll({
    //     offset: offset || 0, 
    //     limit: limit || 10,
    //     order: [
    //         [order[0],order[1]]
    //     ]
    // })
    // .then((result) => {
    //     res.status(200)
    //         .json({
    //             counted_user: result.rows.length,
    //             order_by: order,
    //             user: result.rows
                
    //         })
    // })
    // .catch((error) => { next(error) })

    
    // FakeUser.(req.query.user)
    // .then((user) => {
    //     res.status(200)
    //     .json({
    //         user: user
    //     })
    // })
    // .catch((error) =>next(error))

    // res.status(200)
    // .json({
    //     data: Object.keys(req.body)
    // })

    // res.status(200).json({
    //     message: 'ok'
    // })
}

module.exports = {
    GetUsers
}
