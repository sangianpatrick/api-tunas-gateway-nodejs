const { Sequelize, db  } = require('../../config/Databases')
const { getRandString, hashString, decryptPassword  } = require('../../helpers/EncryptHelper')
const User = require('../../models/sso/UserModel')

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

},{
    tableName: 'test_fakeuser',
    timestamps: false
})


var AllUser = []

function setDate(str){
    
    return new Date(str)
}

function getAllUser(){
    User.findAll().then((result) => {
        result.forEach(function(user,index){
            var salt = getRandString(10)
            var newUser = FakeUser.build({
                user_id: user.user_id,
                user_emp_id: user.user_emp_id,
                user_fullname: user.user_fullname,
                user_email: user.user_email,
                user_password: hashString(decryptPassword(user.user_password),salt),
                user_password_salt: salt,
                // user_is_login: setDate(user.user_is_login),
                user_status: user.user_status,
                user_count_wrong_pass: user.user_count_wrong_pass,
                create_user: user.create_user,
                // create_date: setDate(user.create_date),
                update_user: user.update_user
                // update_date: setDate(user.update_date)
            })

            setTimeout(()=>{
                newUser.save().catch((error) => console.log(error))
            },1500)

        })
    })
    .catch(error => console.log(error))
}

getAllUser()