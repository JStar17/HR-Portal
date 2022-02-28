
const celebrationModel = require("../model/celebration-model")

//add [ POST ]
    module.exports.addcelebration= function (req,res) {

        let title = req.body.title 
        let description = req.body.description
        let date=req.body.date
        let time=req.body.time
        let venue=req.body.venue
        


    let celebration = new celebrationModel({
       
        title:title,
        description:description,
        date:date,
        time:time,
        venue:venue
   })


    celebration.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "details added", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllcelebration = function (req,res){

    celebrationModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "celebration set",data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deletecelebration = function(req,res){
    //params userid 
    let celebrationId = req.params.celebrationId //postman -> userid 

    userdetailModel.deleteOne({_id:celebrationId},function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "celebration removed", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updatecelebration = function(req,res){

    //update role set roleName = admin where roleId = 12121 
        let celebrationId= req.body.celebrationId
        let title = req.body.title 
        let description = req.body.description
        let date=req.body.date
        let time=req.body.time
        let venue=req.body.venue
    
    celebrationModel.updateOne({_id:celebrationId},{title:title,description:description,date:date,time:time,venue:venue},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
