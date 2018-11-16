const { execFile, spawn, execSync } = require('child_process');
const fs = require('fs')

function writePhpFile(password){
    return new Promise((resolve, reject) => {
        fs.writeFile('../libs/php/temp/fileForHash.php',
            `<?php require_once 'D:\\nodejs\\api-gateway-nodejs\\libs\\php\\encryption\\Encrypt.php'; echo Encrypt::encode('${password}');`, function(error){
                if(error){
                    reject(error)
                }
                resolve()
        })
    })
}
function phpEncryptExec(){
    return new Promise((resolve, reject) => {
        var hash = execSync(`php ../libs/php/temp/fileForHash.php`).toString()
        // console.log(hash)
        resolve(hash)
    })
}

const passwordHash = function(password, callback){
    writePhpFile(password)
        .then(() => {
            phpEncryptExec().then((hash) => {
                callback()
            })
        })
        .catch(error => console.log(error))

}

passwordHash('asdfasdfasdf')