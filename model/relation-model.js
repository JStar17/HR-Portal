const mongoose = require("mongoose")


const relationSchema = new mongoose.Schema({
    
        relationName:{
            type:String,
            required:true
        }
       
})


const relationModel = mongoose.model("relation",relationSchema)
module.exports = relationModel 