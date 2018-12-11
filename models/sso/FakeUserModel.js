/**
 * FakeUserModel
 * Contains properties, static/instance method
 * With association model
 */

const { Sequelize, db } = require('../../config/Databases')
const { hashString } = require('../../helpers/EncryptHelper')

//has-many relationship
const UserGroup = require('./UserGroupModel')
const UserApplication = require('./UserApplicationModel')

//Model attributes
const FakeUser = db.define('test_fakeuser', {
    user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    user_emp_id: {
        type: Sequelize.STRING,
    },
    user_fullname: {
        type: Sequelize.STRING
    },
    user_email: {
        type: Sequelize.STRING
    },
    user_password: {
        type: Sequelize.STRING
    },
    user_password_salt: {
        type: Sequelize.STRING
    },
    user_is_login: {
        type: Sequelize.TINYINT
    },
    user_status: {
        type: Sequelize.TINYINT
    },
    user_count_wrong_pass: {
        type: Sequelize.INTEGER
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
    tableName: 'test_fakeuser',
    timestamps: false,
    
})

//Model association
FakeUser.hasMany(UserGroup, {as: 'groups',foreignKey: 'user_id', sourceKey: 'user_id'})
FakeUser.hasMany(UserApplication, {as: 'applications',foreignKey: 'user_id', sourceKey: 'user_id'})
UserGroup.belongsTo(FakeUser, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})
UserApplication.belongsTo(FakeUser, {as: 'users',foreignKey: 'user_id', targetKey: 'user_id'})

//Model static methods
FakeUser.findByUserId = function(user_id){
    return this.findOne({
        where: {
            user_id: user_id
        }
    })
}

FakeUser.findByEmployeeId = function(user_emp_id){
    return this.findOne({
        attributes: {
            exclude: ['create_user','create_date','update_user','update_date','user_password','user_password_salt','user_count_wrong_pass'] 
        },
        where: {
            user_emp_id: user_emp_id
        },
        include: [
            { 
                model: UserGroup, as: "groups",
                attributes: {
                    exclude: ['create_user','create_date','update_user','update_date','user_id']
                }
            },
            {
                model: UserApplication, as: "applications",
                attributes: {
                    exclude: ['create_user','create_date','update_user','update_date','user_id']
                }
            }
        ],
    })
}

FakeUser.getProfile = function(user_id){

    return this.findOne({
        attributes: {
            exclude: ['create_user','create_date','update_user','update_date','user_password','user_password_salt','user_count_wrong_pass'] 
        },
        where: {
            user_id: user_id
        },
        include: [
            { 
                model: UserGroup, as: "groups",
                attributes: {
                    exclude: ['create_user','create_date','update_user','update_date','user_id']
                }
            },
            {
                model: UserApplication, as: "applications",
                attributes: {
                    exclude: ['create_user','create_date','update_user','update_date','user_id']
                }
            }
        ],
    })
}

//Model instance methods
FakeUser.prototype.validPassword = function(password){
    return this.user_password == hashString(password, this.user_password_salt)
}


module.exports = FakeUser