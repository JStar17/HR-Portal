const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    
        firstName:{
            type:String,
            
        },
        lastName:{
            type:String,
            
        },
        userName:{
            type:String,
            
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
            type:String
        },
        address:{
            type:String
        },
        country:{
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