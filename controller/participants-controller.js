
const participantsModel = require("../model/participants-model")

//add [ POST ]
    module.exports.addparticipants = function (req,res) {
        
        let status= req.body.status  
        let user = req.body.user
        let celebration=req.body.celebration


    let participants = new participantsModel({
            
            status:status,
            user:user,
            celebration:celebration

    })



    participants.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg:  "done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllparticipants= function (req,res) {
    participantsModel.find().populate("user").populate("celebration").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "done", data: data, status: 200 })//http status code 
        }
    })
}



//delete
module.exports.deleteparticipants = function(req,res){
    //params userid 
    let participantsId = req.params.participantsId //postman -> userid 

participantsModel.deleteOne({_id:participantsId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: " removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateparticipants = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let userrelativeId = req.body.userrelativeId
    let status= req.body.status 
    
    participantsModel.updateOne({_id:participantsId},{status:status},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}