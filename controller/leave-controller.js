
const leaveModel = require("../model/leave-model")

//add [ POST ]
    module.exports.addleave= function (req,res) {

        let leaveType= req.body.leaveType
        let notes  = req.body.notes
        let fromdate=req.body.fromdate
        let todate=req.body.todate
        let reason=req.body.reason
        let user = req.body.user
        let status = "pending"
        


    let leave = new leaveModel({
       
        leaveType:leaveType,
        notes:notes,
        fromdate:fromdate,
        todate:todate,
        user:user,
        reason:reason,
        status:status
   })


    leave.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "details added", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllleave = function (req,res){

    leaveModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "leave ",data: data, status: 200 })//http status code 
        }
    })
}
module.exports.listOneLeave = function(req,res){
    let leaveId = req.params.leaveId
    leaveModel.findById(leaveId).populate({
        path: 'user',populate:{path: 'role',model: 'role'}}).exec(function(err,data){
        if(err){
            res.json({msg:"SMW",status:-1,data:err})
        }
        else{
            res.json({msg:"Leave detail...",status:200,data:data})
        }
    })
}



//delete
module.exports.deleteleave = function(req,res){
    //params userid 
    let leaveId = req.params.leaveId //postman -> userid 

    leaveModel.deleteOne({_id:leaveId},function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "leave removed", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateleave = function(req,res){

    //update role set roleName = admin where roleId = 12121 
        let leaveId= req.params.leaveId
        let leaveType= req.body.leaveType
        let notes  = req.body.notes
        let fromdate=req.body.fromdate
        let todate=req.body.todate
        let status = req.body.status
        
        let reason=req.body.reason
        
        
    leaveModel.findByIdAndUpdate(leaveId,{ leaveType:leaveType,
        notes:notes,
        fromdate:fromdate,
        todate:todate,
        status:status,
        reason:reason},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
