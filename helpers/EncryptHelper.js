const { execFile, spawn, execSync } = require('child_process');
const crypto = require('crypto')
const fs = require('fs')

function getRandString(length){
    return crypto
        .randomBytes(Math.ceil(length / 2))
        .toString('hex')
}

const hashString = function (value, salt) {
    return crypto
        .createHmac('md5', salt)
        .update(value)
        .digest('hex')
}


function removeTempPhp(file){
    setTimeout(()=>{
        fs.unlinkSync(`${__dirname}/../libs/php/temp/${file}`)
    }, 1000)
}

function encryptPassword(password, passwordSalt){
    
    var file = 'fileForHash_' + getRandString(5) + '_.php'
    fs.writeFileSync(`${__dirname}/../libs/php/temp/${file}`,
        `<?php require_once '${__dirname}/../libs/php/encryption/Encrypt.php'; echo Encrypt::encode('${password}');`)
    removeTempPhp(file)
    return execSync(`php ${__dirname}/../libs/php/temp/${file}`).toString()
    
}

function decryptPassword(password, hashed, passwordSalt){
    var file = 'fileForUnhash_' + getRandString(5) + '_.php'
    fs.writeFileSync(`${__dirname}/../libs/php/temp/${file}`,
            `<?php require_once '${__dirname}/../libs/php/encryption/Encrypt.php'; echo Encrypt::decode('${password}');`)
    removeTempPhp(file)
    return execSync(`php ${__dirname}/../libs/php/temp/${file}`).toString()
    
}

module.exports = {
    encryptPassword,
    decryptPassword,
    getRandString,
    hashString
}