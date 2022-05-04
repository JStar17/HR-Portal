const mongoose = require("mongoose")


const userdetailSchema = new mongoose.Schema({
    
        dateofBirth:{
            type:Date,
            
        },
        dateOfJoinning:{
            type:Date,
            
        },
        marriatlStatus:{
            type:String,
            
        },
        address:{
            type:String,
        },
        emergencyContact:{
            type:Number,
        },
    
        user:{
            type:mongoose.Types.ObjectId,
                ref:"user"
        }
      
})


const userdetailModel = mongoose.model("userdetail",userdetailSchema)
module.exports = userdetailModel 