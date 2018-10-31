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

const UserGroup = db.define('sso_usergroup', {
    user_id:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    group_id: {
        type: Sequelize.STRING,
        primaryKey: true
    }
},
{
    tableName: 'sso_usergroup',
    timestamps: false
})

const UserApplication = db.define('sso_userapplication', {
    user_id:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    application_id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    company_id: {
        type: Sequelize.INTEGER,
    },
    branch_id: {
        type: Sequelize.INTEGER,
    }
},
{
    tableName: 'sso_userapplication',
    timestamps: false
})

User.hasMany(UserGroup, {as: 'groups',foreignKey: 'user_id', sourceKey: 'user_id'})
UserGroup.belongsTo(User, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})
User.hasMany(UserApplication, {as: 'applications',foreignKey: 'user_id', sourceKey: 'user_id'})
UserApplication.belongsTo(User, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})


//<-- add more model spesification

module.exports = {
    User,
    UserGroup,
    UserApplication
}