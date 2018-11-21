const {
    Sequelize,
    db
} = require('../../config/Databases')

// has one relationship
const User = require('./UserModel')

//model
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
        type: Sequelize.STRING,
        primaryKey: true
    },
    branch_id: {
        type: Sequelize.STRING,
        primaryKey: true
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
    tableName: 'sso_userapplication',
    timestamps: false
})


module.exports = UserApplication