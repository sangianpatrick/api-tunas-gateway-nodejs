const { execFile, spawn, execSync } = require('child_process');
const fs = require('fs')

function getRandNumber(){
    var random = Math.floor(Math.random() * Math.floor(9999))
    return random.toString()
}
function removeTempPhp(file){
    setTimeout(()=>{
        fs.unlinkSync(`./libs/php/temp/${file}`)
    }, 1000)
}

function encryptPassword(password){
    
    var file = 'fileForHash_' + getRandNumber() + '_.php'
    console.log(file)
    fs.writeFileSync(`./libs/php/temp/${file}`,
            `<?php require_once 'D:\\nodejs\\api-gateway-nodejs\\libs\\php\\encryption\\Encrypt.php'; echo Encrypt::encode('${password}');`)
    removeTempPhp(file)
    return execSync(`php ./libs/php/temp/${file}`).toString()
    
}

function decryptPassword(password){
    var file = 'fileForUnhash_' + getRandNumber() + '_.php'
    fs.writeFileSync(`./libs/php/temp/${file}`,
            `<?php require_once 'D:\\nodejs\\api-gateway-nodejs\\libs\\php\\encryption\\Encrypt.php'; echo Encrypt::decode('${password}');`)
    removeTempPhp(file)
    return execSync(`php ./libs/php/temp/${file}`).toString()
    
}

module.exports = {
    encryptPassword,
    decryptPassword
}