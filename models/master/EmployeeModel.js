/**
 * EmployeeModel
 * Contains properties, static/instance method
 * With association model
 */

const { Sequelize, db } = require('../../config/Databases')
// const { hashString } = require('../../helpers/EncryptHelper')

//has-many relationship
// const UserGroup = require('./UserGroupModel')
// const UserApplication = require('./UserApplicationModel')

//Model attributes
const Employee = db.define('ma_employees', {
    nip: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    nm_peg: {
        type: Sequelize.STRING,
    },
    cmp_id: {
        type: Sequelize.STRING
    },
    kd_unit_org: {
        type: Sequelize.STRING
    },
    kd_unit_org_divisi_ho: {
        type: Sequelize.STRING
    },
    kd_jabatan_str: {
        type: Sequelize.STRING
    },
    nm_jabatan: {
        type: Sequelize.STRING
    },
    kd_pangkat: {
        type: Sequelize.STRING
    },
    nm_pangkat: {
        type: Sequelize.STRING
    },
    kd_status_kepeg: {
        type: Sequelize.STRING
    },
    nm_status_kepeg: {
        type: Sequelize.STRING
    },
    jns_kantor: {
        type: Sequelize.STRING
    },
    kd_kantor: {
        type: Sequelize.STRING
    },
    nm_kantor: {
        type: Sequelize.STRING
    },
    non_aktif: {
        type: Sequelize.STRING
    },
    tgl_berhenti: {
        type: Sequelize.DATE
    },
    kd_costcenter: {
        type: Sequelize.STRING
    },
    kd_grade: {
        type: Sequelize.STRING
    },
    kd_gol: {
        type: Sequelize.STRING
    },
    nm_gol: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    ctime: {
        type: Sequelize.DATE
    },
    mtime: {
        type: Sequelize.DATE
    },
    create_user: {
        type: Sequelize.STRING
    },
    create_date: {
        type: Sequelize.DATE
    },
    update_user: {
        type: Sequelize.STRING
    },
    update_date: {
        type: Sequelize.DATE
    }

},
{
    tableName: 'ma_employees',
    timestamps: false,
    
})

//Model association
// Employee.hasMany(UserGroup, {as: 'groups',foreignKey: 'user_id', sourceKey: 'user_id'})
// Employee.hasMany(UserApplication, {as: 'applications',foreignKey: 'user_id', sourceKey: 'user_id'})
// UserGroup.belongsTo(Employee, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})
// UserApplication.belongsTo(Employee, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})

// Model static methods
Employee.findByEmployeeId = function(employee_id){
    return this.findOne({
        where: {
            nip: employee_id
        }
    })
}

// Employee.findByEmployeeId = function(user_emp_id){
//     return this.findOne({
//         attributes: {
//             exclude: ['create_user','create_date','update_user','update_date','user_password','user_password_salt','user_count_wrong_pass'] // <-- set as an unaccesible field
//         },
//         where: {
//             user_emp_id: user_emp_id
//         },
//         include: [
//             { 
//                 model: UserGroup, 
//                 as: "groups",
//                 attributes: {
//                     exclude: ['create_user','create_date','update_user','update_date','user_id']
//                 },
//                 required: true
//             },
//             {
//                 model: UserApplication, 
//                 as: "applications",
//                 attributes: {
//                     exclude: ['create_user','create_date','update_user','update_date','user_id']
//                 },
//                 required: true
//             }
//         ],
//     })
// }

// Employee.getProfile = function(user_id){

//     return this.findOne({
//         attributes: {
//             exclude: ['create_user','create_date','update_user','update_date','user_password','user_password_salt','user_count_wrong_pass'] // <-- set as an unaccesible field
//         },
//         where: {
//             user_id: user_id
//         },
//         include: [
//             { 
//                 model: UserGroup, as: "groups",
//                 attributes: {
//                     exclude: ['create_user','create_date','update_user','update_date','user_id']
//                 }
//             },
//             {
//                 model: UserApplication, as: "applications",
//                 attributes: {
//                     exclude: ['create_user','create_date','update_user','update_date','user_id']
//                 }
//             }
//         ],
//     })
// }

//Model instance methods
// Employee.prototype.validPassword = function(password){
//     return this.user_password == hashString(password, this.user_password_salt)
// }


module.exports = Employee