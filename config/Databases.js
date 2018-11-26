/**
 * Database Connection
 * Works on MSSQL, POSTGRESQL, MYSQL, SQLITE3
 * Customize the connection by add variables or constants as the instance
 */
require('dotenv').config() //<-- access app environment (.env)

const Sequelize = require('sequelize')

// default connection
const db = new Sequelize(
    'GATEWAYV6', 
    'SA',
    'P@ssw0rd',
    {
        host: '192.168.110.213',
        dialect: 'mssql',
        operatorsAliases: false
    }
)

// <-- add more database connection

module.exports = {
    Sequelize,
    db
    // <-- add the instance of any database connection for being exported
}