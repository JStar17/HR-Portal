
const userdetailModel = require("../model/userdetail-model")

//add [ POST ]
    module.exports.adduserdetail = function (req,res) {

        let dateOfBirth = req.body.dateofBirth 
        let dateOfJoinning = req.body.dateOfJoinning
        let marriatlStatus=req.body.marriatlStatus
        let address=req.body.address
        let emergencyContact=req.body.emergencyContact
        let lastapprisalDate=req.body.lastapprisalDate
       //encript
       
         let user= req.body.user


    let userdetail = new userdetailModel({
       
            dateOfBirth:dateOfBirth,
            dateOfJoinning:dateOfJoinning,
            marriatlStatus:marriatlStatus,
            address:address,
            emergencyContact:emergencyContact,
            lastapprisalDate:lastapprisalDate,
            user:user


    })



    userdetail.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "details added", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAlluserdetails = function (req,res){

    userdetailModel.find().populate("user").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteuserdetails = function(req,res){
    //params userid 
    let userdetailId = req.params.userdetailId //postman -> userid 

    userdetailModel.deleteOne({_id:userdetailId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateuserdetail = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let userdetailId = req.body.userdetailId
    let dateOfBirth = req.body.dateofBirth 
    let dateOfJoinning = req.body.dateOfJoinning
    let marriatlStatus=req.body.marriatlStatus
    let address=req.body.address
    let emergencyContact=req.body.emergencyContact
    let lastapprisalDate=req.body.lastapprisalDate
   //encript
   
     let userId= req.body.userId

    userdetailModel.updateOne({_id:userdetailId},{dateOfBirth:dateOfBirth,dateOfJoinning:dateOfJoinning,marriatlStatus:marriatlStatus,address:
        address,emergencyContact:emergencyContact,lastapprisalDate:lastapprisalDate},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
