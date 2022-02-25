const mongoose = require("mongoose")


const userdetailSchema = new mongoose.Schema({
    
        dateofBirth:{
            type:String,
            
        },
        dateOfJoinning:{
            type:Number,
            
        },
        marriatlStatus:{
            type:String,
            
        },
        address:{
            type:String
        },
        emergencyContact:{
            type:Number
        },
        lastapprisalDate:{
            type:Number
        },
      
})


const userdetailModel = mongoose.model("userdetail",userdetailSchema)
module.exports = userdetailModel 