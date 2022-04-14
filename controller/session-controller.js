const fs=require('fs')
const nodemailer = require("nodemailer");
const crypto = require('crypto')
const bcrypt = require('bcrypt');
const UserModel = require('../model/user-model');

function login(req,res){
    let loginHtml=fs.readFileSync("./view/login.html")
    res.write(loginHtml)
    res.end()
}
module.exports.mailLinkToResetPassword = function (req, res) {
    let email = req.body.email
    if(email===null){
        // console.log('email requireed')
        res.json({msg:"Email is required!",status:-1,data:err})
    }
    else{
        UserModel.findOne({email:email},function(err,data){
            if(err || data ==null){
                // console.log('email not found!')
                res.json({msg:"Email not found",status:-1,data:err})
            }
            else{
                const token = crypto.randomBytes(20).toString('hex');
                // console.log(token)
                data.update({
                    resetPasswordToken:token,
                    resetPasswordExpires:Date.now() + 3600000
                });
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'hrportal17@gmail.com',
                        pass: '17Hrportal'
                    }
                });
                var mailOptions = {
                    from: 'hrportal17@gmail.com',
                    to: data.email,
                    subject: 'Link to reset Password!',
                    text: "click on this link to reset your password:"+`http://localhost:3000/reset/${token}`
                };
                transporter.sendMail(mailOptions, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Email sent: ' + data.response);
                        res.json({msg:"Email Sent!",status:200,data:data})
                    }
                });
            }
        })

    }
   
}

module.exports.resetPassword = function(req,res){
    let email = req.body.email
    let password =req.body.password
    let hashPassword = bcrypt.hashSync(password,10)
    UserModel.findOneAndUpdate({email:email},{password:hashPassword},function(err,data){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else if(data==null){
            res.json({msg:"Email Not FOund!",status:-1,data:data})
        }
        else{
            res.json({msg:"Password Reset!",status:200,data:data})
        }
    })
    
}
module.exports.login=login