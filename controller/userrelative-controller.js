
const UserrelativeModel = require("../model/userrelative-model")

//add [ POST ]
    module.exports.addUserrelative = function (req,res) {
        
        let contactnum = req.body.contactnum  
        let user = req.body.user
        let relation=req.body.relation


    let userrelative = new UserrelativeModel({
            
            contactnum:contactnum,
            user:user,
            relation:relation

    })



    userrelative.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllUsersrelative= function (req,res) {

    UserrelativeModel.find().populate('user').populate("relation").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteUserrelative = function(req,res){
    //params userid 
    let userrelationId = req.params.userrelationId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateUserrelative = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let userrelativeId = req.body.userrelativeId
    let contactnum = req.body.contactnum 
    
    UserrelativeModel.updateOne({_id:userrelativeId},{contactnum:contactnum},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}