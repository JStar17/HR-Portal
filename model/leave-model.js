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
        isApproved:{
            type:Number,
        },
        reason:{
            type:String,
        }
       

})


const leaveModel = mongoose.model("leave",leaveSchema)
module.exports = leaveModel 