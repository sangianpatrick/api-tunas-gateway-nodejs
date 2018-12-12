/**
 * UserModel
 * 
 * contains properties, static & instance method
 * with association model
 * 
 * ********* Use this model carefuly, it will affect the "sso_user" table.    ************
 * ********* In case of using, please integrate the app with Testin Database. ************
 * 
 * Just uncomment the script below for use
 */

// const {
//     Sequelize,
//     db
// } = require('../../config/Databases')

// //has many relationship
// const UserGroup = require('./UserGroupModel')
// const UserApplication = require('./UserApplicationModel')

// //model properties
// const User = db.define('sso_user', {
//     user_id: {
//         type: Sequelize.STRING,
//         primaryKey: true,
//         allowNull: false
//     },
//     user_emp_id: {
//         type: Sequelize.STRING,
//     },
//     user_fullname: {
//         type: Sequelize.STRING
//     },
//     user_email: {
//         type: Sequelize.STRING
//     },
//     user_password: {
//         type: Sequelize.STRING
//     },
//     user_is_login: {
//         type: Sequelize.TINYINT
//     },
//     user_status: {
//         type: Sequelize.TINYINT
//     },
//     user_count_wrong_pass: {
//         type: Sequelize.INTEGER
//     },
//     create_user: {
//         type: Sequelize.STRING
//     },
//     create_date: {
//         type: Sequelize.DATE
//     },
//     update_user: {
//         type: Sequelize.STRING
//     },
//     update_date: {
//         type: Sequelize.DATE
//     }

// },{
//     tableName: 'sso_user',
//     timestamps: false
// })

// // association
// User.hasMany(UserGroup, {as: 'groups',foreignKey: 'user_id', sourceKey: 'user_id'})
// User.hasMany(UserApplication, {as: 'applications',foreignKey: 'user_id', sourceKey: 'user_id'})
// UserGroup.belongsTo(User, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})
// UserApplication.belongsTo(User, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})

// module.exports = User