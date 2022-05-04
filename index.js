const express=require("express")
const mongoose=require("mongoose")
const sessionController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController = require("./controller/user-controller")
const relationController = require("./controller/relation-controller")
const userdetailController = require("./controller/userdetail-controller")
const userrelativeController=require("./controller/userrelative-controller")
const celebrationController=require("./controller/celebration-controller")
const leaveController=require("./controller/leave-controller")
const participantsController=require("./controller/participants-controller")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
var cors =require('cors')
app.use(cors())

mongoose.connect("mongodb://localhost:27017/HR-Portal",function(err){
    if(err){
    console.log(" database connection failed");
    console.log(err);
  }else{
      console.log("database connected");
  }
})
app.post('/forgotPassword',sessionController.mailLinkToResetPassword)
app.post('/reset/:token',sessionController.resetPassword)
app.get("/login",sessionController.login)

app.get("/",function(req,res){
    res.write("Welcome")
    res.end()
})


//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/role",roleController.updateRole)

//user 
app.post("/users",userController.addUser)
app.get("/users/:userId",userController.listOneUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users/:userId",userController.updateUser)

app.post("/login",userController.login)

//relation
app.post("/relations",relationController.addRelation)
app.get("/relations",relationController.getAllRelation)
app.delete("/relations/:relationId",relationController.deleteRelation)
app.put("/relations",relationController.updateRelation)

//userdetail
app.post("/userdetails",userdetailController.adduserdetail)
app.get("/userdetails",userdetailController.getAlluserdetails)
app.delete("/userdetails/:userdetailId",userdetailController.deleteuserdetails)
app.put("/userdetails",userdetailController.updateuserdetail)

//user realtive
app.post("/userrelative",userrelativeController.addUserrelative)
app.get("/userrelative",userrelativeController.getAllUsersrelative)
app.delete("/userrelative/:userrelativeId",userrelativeController.deleteUserrelative)
app.put("/userrelative/:userrelativeId",userrelativeController.updateUserrelative)

//celebration
app.post("/celebration",celebrationController.addcelebration)
app.get("/celebration",celebrationController.getAllcelebration)
app.get("/celebration/:celebrationId",celebrationController.listOneCelebration)
app.delete("/celebration/:celebrationId",celebrationController.deletecelebration)
app.put("/celebration/:celebrationId",celebrationController.updatecelebration)

// leave
app.post("/leave",leaveController.addleave)
app.get("/leave",leaveController.getAllleave)
app.get("/leave/:leaveId",leaveController.listOneLeave)
app.delete("/leave/:leaveId",leaveController.deleteleave)
app.put("/leave/:leaveId",leaveController.updateleave)

//participants
app.post("/participants",participantsController.addparticipants)
app.get("/participants",participantsController.getAllparticipants)
app.delete("/participants/:participantsId",participantsController.deleteparticipants)
app.put("/participants",participantsController.updateparticipants)




app.listen (2000,function(req,res){
    console.log("server strated at 2000")


})