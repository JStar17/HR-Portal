const bcrypt = require("bcrypt");
const UserModel = require("../model/user-model");
bodyParser = {
    json: {limit: '100000mb', extended: true},
    urlencoded: {limit: '100000mb', extended: true}
  };
//add [ POST ]
module.exports.addUser = function (req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let userName = req.body.userName;
  let email = req.body.email;
  let gender = req.body.gender;
  let mobileNo = req.body.mobileNo;
  let password = req.body.password;
  let dateOfBirth = req.body.dateOfBirth;
  let address = req.body.address;
  let country = req.body.country;
  let salary = req.body.salary;
  let profile_pic = req.body.profile_pic;
  let bankName = req.body.bankName;
  let accountNo = req.body.accountNo;
  let ifsc = req.body.ifsc;
  let panno = req.body.panno;
  let relativename = req.body.relativename;
  let relation = req.body.relation;
  let emnumber = req.body.emnumber;

  console.log(firstName, email, password);

  //encript
  const salt = bcrypt.genSaltSync(10);
  let encpassword = bcrypt.hashSync(password, salt);
  let role = req.body.role;

  let user = new UserModel({
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    mobileNo: mobileNo,
    dateOfBirth: dateOfBirth,
    password: encpassword,
    gender: gender,
    address: address,
    country: country,
    salary: salary,
    role: role,
    profile_pic: profile_pic,
    bankName: bankName,
    accountNo: accountNo,
    ifsc: ifsc,
    panno: panno,
    relativename: relativename,
    relation: relation,
    emnumber: emnumber,
  });
console.log(role)
  user.save(function (err, data) {
    if (err) {
      res.json({ msg: "SMW", data: err, status: -1 }); //-1  [ 302 404 500 ]
    } else {
      res.json({ msg: "signup done", data: data, status: 200 }); //http status code
    }
  });
};
//list
module.exports.getAllUsers = function (req, res) {
  UserModel.find()
    .populate("role")
    .exec(function (err, data) {
      if (err) {
        res.json({ msg: "SMW", data: err, status: -1 }); //-1  [ 302 404 500 ]
      } else {
        res.json({ msg: "users details..", data: data, status: 200 }); //http status code
      }
    });
};
// module.exports.listOneUser = function(req,res){
//     let userId = req.params.userId
//     UserModel.findById(userId,function(err,data){
//         if(err){
//             res.json({msg:"SMW",status:-1,data:err})
//         }
//         else{
//             res.json({msg:"One Exam",status:200,data:data})
//         }
//     })
// }

//delete
module.exports.deleteUser = function (req, res) {
  //params userid
  let userId = req.params.userId; //postman -> userid

  UserModel.deleteOne({ _id: userId }, function (err, data) {
    if (err) {
      res.json({ msg: "SMW", data: err, status: -1 }); //-1  [ 302 404 500 ]
    } else {
      res.json({ msg: "user removed...", data: data, status: 200 }); //http status code
    }
  });
};

module.exports.updateUser = function (req, res) {
  //update role set roleName = admin where roleId = 12121
  let userId = req.params.userId;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let userName = req.body.userName;
  let email = req.body.email;
  let gender = req.body.gender;
  let mobileNo = req.body.mobileNo;
  let education = req.body.education;
  let dateOfBirth = req.body.dateOfBirth;
  let password = req.body.password;
  let address = req.body.address;
  let country = req.body.country;
  let salary = req.body.salary;
  let role = req.body.role;
  let bankName = req.body.bankName;
  let accountNo = req.body.accountNo;
  let ifsc = req.body.ifsc;
  let panno = req.body.panno;
  let relativename = req.body.relativename;
  let relation = req.body.relation;
  let emnumber = req.body.emnumber;
  let profile_pic = req.body.profile_pic;
  UserModel.findByIdAndUpdate(
    userId,
    {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      gender: gender,
      mobileNo: mobileNo,
      education: education,
      dateOfBirth: dateOfBirth,
      address: address,
      country: country,
      email: email,
      password: password,
      role: role,
      profile_pic: profile_pic,
      bankName: bankName,
      accountNo: accountNo,
      ifsc: ifsc,
      panno: panno,
      relativename: relativename,
      relation: relation,
      emnumber: emnumber,
    },
    function (err, data) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};
module.exports.listOneUser = function (req, res) {
  let userId = req.params.userId;
  UserModel.findById(userId)
    .populate("role")
    .exec(function (err, data) {
      if (err) {
        res.json({ msg: "SMW", status: -1, data: err });
      } else {
        res.json({ msg: "One User...", status: 200, data: data });
      }
    });
};

//login
// module.exports.login = function(req,res){

//     let param_email = req.body.email
//     let param_password  = req.body.password

//     let isCorrect = false;

//     UserModel.findOne({email:param_email}).populate('role').exec(function(err,data){
//         if(data){
//             let ans =  bcrypt.compareSync(param_password,data.password)
//             if(ans == true){
//                     isCorrect = true
//             }
//         }

//         if (isCorrect == false) {
//             res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
//         } else {
//             res.json({ msg: "Login Successfull", data: data, status: 200 })//http status code
//         }
//     })

// }

module.exports.login = function (req, res) {
  let isCorrect = false;
  let param_email = req.body.email;
  let param_password = req.body.password;
  UserModel.findOne({ email: param_email })
    .populate("role")
    .exec(function (err, data) {
      if (data) {
        let ans = bcrypt.compareSync(param_password, data.password);
        if (ans == true) {
          isCorrect = true;
        }
      }

      if (isCorrect != false) {
        res.json({ msg: "Login Successful!", status: 200, data: data });
      } else {
        res.json({ msg: "Invalid Credentials!", status: -1, data: req.body });
      }
    });
};
