require('dotenv').config()

//load model
const Employee = require('../../models/master/EmployeeModel')

//package function


//controller function
const GetEmployees = (req, res, next) => {
    Employee.findAndCount({limit: 1000})
        .then((result) => {
            if(result.count < 1){
                res.status(204)
                .send()
            }else{
                res.status(200)
                .json({count: result.count, employees: result.rows})
            }
        })
        .catch(error => next(error))
}

const GetEmployeeById = (req, res, next) =>{
    Employee.findByEmployeeId(req.params.employee_id)
        .then((employee) => {
            if(!employee){
                next()
            }else{
                res.status(200)
                .json(employee)
            }
        })
        .catch(error => next(error))
}

module.exports = {
    GetEmployees,
    GetEmployeeById
}