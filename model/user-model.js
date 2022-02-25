const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        gender:{
            type:String
        },
        mobileNo:{
            type:Number
        },
        
        dateOfBirth:{
            type:Date
        },
        address:{
            type:String
        },
        role : {
                type:mongoose.Types.ObjectId,
                ref:"role"
        },
        salary : {
                 type:Number
        },

})


const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel 