/**
 * Database Connection
 * Works on MSSQL, POSTGRESQL, MYSQL, SQLITE3
 * Customize the connection by add variables or constants as the instance
 */
require('dotenv').config() //<-- access app environment (.env)

const Sequelize = require('sequelize')

// default connection
const db = new Sequelize(
    process.env.DB_SCHEMA, 
    process.env.DB_USER,
    process.env.DB_PASSWD,
    {
        host: process.env.DB_HOST,
        dialect:  process.env.DB_DIALECT,
        operatorsAliases: false
    }
)

// <-- add more database connection

module.exports = {
    Sequelize,
    db
    // <-- add the instance of any database connection for being exported
}