const mongoose = require("mongoose")


const userrelativeSchema = new mongoose.Schema({
    
        contactnum:{
            type:Number
            
        },
        
        user:{
            type:mongoose.Types.ObjectId,
                ref:"user"
        },
        relation:{
            type:mongoose.Types.ObjectId,
                ref:"relation"
        }
      
})


const userrelativelModel = mongoose.model("userrelative",userrelativeSchema)
module.exports = userrelativelModel