/**
 * Example of Model Usage eg UserModel
 * For more detail (defining type or even static function, one to one, one to many, etc), you can search on google by typing "sequelize" hahah
 * Don't forget to import /config/Database.js to get the instance of Sequilize and your 'db' connection
 */

const {
    Sequelize,
    db
} = require('../../config/Databases')

// User model specification
const User = db.define('sso_user', {
    user_id:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    user_emp_id: {
        type: Sequelize.STRING,
    },
    user_email: {
        type: Sequelize.STRING,
    }
},
{
    tableName: 'sso_user',
    timestamps: false
})

//<-- add more model spesification

module.exports = {
    User
}