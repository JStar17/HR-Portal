const fs=require('fs')


function login(req,res){
    let loginHtml=fs.readFileSync("./view/login.html")
    res.write(loginHtml)
    res.end()
}
module.exports.login=login