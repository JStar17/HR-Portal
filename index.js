const express=require("express")
const sessionController=require("./controller/session-controller")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/login",sessionController.login)

app.get("/",function(req,res){
    res.write("Welcome")
    res.end()
})

app.listen (3000,function(req,res){
    console.log("server strated at 3000")


})

