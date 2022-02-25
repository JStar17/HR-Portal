
const relationModel = require("../model/relation-model")

//add [ POST ]
    module.exports.addRelation = function (req, res) {

        let relationName = req.body.relationName 
        

    let relation = new relationModel({
        relationName: relationName
            
    })



    relation.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "relation added", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllRelation = function (req, res) {

    relationModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "all relation", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteRelation = function(req,res){
    //params userid 
    let relationId = req.params.relationId //postman -> userid 

    relationModel.deleteOne({_id:relationId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "realtion removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateRelation = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let relationId = req.body.relationId
    let relationName = req.body.relationName 

    relationModel.updateOne({_id:userId},{relationName:relationName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
