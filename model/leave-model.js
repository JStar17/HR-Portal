const mongoose = require("mongoose")


const leaveSchema = new mongoose.Schema({
    
        leaveType:{
            type:String,
            
        },
        notes:{
            type:String,
            
        },
        fromdate:{
            type:String,
            
        },
        todate:{
            type:String,
            
        },
        status:{
            type:String
        },
        user : {
            type:mongoose.Types.ObjectId,
            ref:"user"
    },
        reason:{
            type:String,
        }
       

})


const leaveModel = mongoose.model("leave",leaveSchema)
module.exports = leaveModel 