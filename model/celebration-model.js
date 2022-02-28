const mongoose = require("mongoose")


const celebrationSchema = new mongoose.Schema({
    
        title:{
            type:String,
            
        },
        description:{
            type:String,
            
        },
        date:{
            type:Date,
            
        },
        time:{
            type:String,
        },
        venue:{
            type:String,
        }
       

})


const celebrationModel = mongoose.model("celebration",celebrationSchema)
module.exports = celebrationModel 