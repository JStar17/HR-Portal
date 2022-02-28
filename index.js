const express=require("express")
const mongoose=require("mongoose")
const sessionController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController = require("./controller/user-controller")
const relationController = require("./controller/relation-controller")
const userdetailController = require("./controller/userdetail-controller")
const userrelativeController=require("./controller/userrelative-controller")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/HR-Portal",function(err){
    if(err){
    console.log(" database connection failed");
    console.log(err);
  }else{
      console.log("database connected");
  }
})

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
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

//app.post("/login",userController.login)

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
app.put("/userrelative",userrelativeController.updateUserrelative)


app.listen (3000,function(req,res){
    console.log("server strated at 3000")


})