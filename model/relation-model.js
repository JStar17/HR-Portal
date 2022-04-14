const mongoose = require("mongoose")


const relationSchema = new mongoose.Schema({
    
        relationName:{
            type:String,
            
        }
       
})


const relationModel = mongoose.model("relation",relationSchema)
module.exports = relationModel 