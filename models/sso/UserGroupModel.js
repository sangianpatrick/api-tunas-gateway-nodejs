const {
    Sequelize,
    db
} = require('../../config/Databases')

// has one relationship
const User = require('./UserModel')

// model
const UserGroup = db.define('sso_usergroup', {
    user_id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    group_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
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
    tableName: 'sso_usergroup',
    timestamps: false
})

module.exports = UserGroup