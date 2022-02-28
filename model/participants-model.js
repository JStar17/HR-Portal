const mongoose = require("mongoose")


const participantsSchema = new mongoose.Schema({
    
        status:{
            type:Number
            
        },
        
        user:{
            type:mongoose.Types.ObjectId,
                ref:"user"
        },
        celebbrationn:{
            type:mongoose.Types.ObjectId,
                ref:"celebration"
        }
      
})


const participantsModel = mongoose.model("participants",participantsSchema)
module.exports = participantsModel