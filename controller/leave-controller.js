
const leaveModel = require("../model/leave-model")

//add [ POST ]
    module.exports.addleave= function (req,res) {

        let leaveType= req.body.leaveType
        let notes  = req.body.notes
        let fromdate=req.body.fromdate
        let todate=req.body.todate
        let isApproved=req.body.isApproved
        let reason=req.body.reason
        


    let leave = new leaveModel({
       
        leaveType:leaveType,
        notes:notes,
        fromdate:fromdate,
        todate:todate,
        isApproved:isApproved,
        reason:reason
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
        let leaveId= req.body.leaveId
        let leaveType= req.body.leaveType
        let notes  = req.body.notes
        let fromdate=req.body.fromdate
        let todate=req.body.todate
        let isApproved=req.body.isApproved
        let reason=req.body.reason
        
        
    leaveModel.updateOne({_id:leaveId},{ leaveType:leaveType,
        notes:notes,
        fromdate:fromdate,
        todate:todate,
        isApproved:isApproved,
        reason:reason},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
