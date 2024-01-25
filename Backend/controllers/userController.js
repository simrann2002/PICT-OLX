// const {sequelize,DataTypes} = require('sequelize')

const db = require("../models/server");
const user = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtKey = "project";
require('dotenv').config()

const getUser = async (req, res) => {
  let users = await user.findAll({});
  res.status(200).send(users);
};

const loggedInUser = async (req,res) =>{
    const user = req.user;
    res.send(user);
}

// const addUser = async(req,res)=>{
//     const users = await user.build({name:"def",email:"xyz",password:"456"});
//     await users.save();
//     res.status(200).send(users);
// }

//1.create entry
const addUser = async (req, res) => {
  // console.log(req);
  const pass = await bcrypt.hash(req.body.password, 11);
  // console.log(pass);
  let info = {
    name: req.body.name,
    email: req.body.email,
    password: pass,
    phone: req.body.phone,
    address: req.body.address,
  };
  console.log(info);
  const u = await user.create(info);
  // res.status(200).send(user);
  jwt.sign({ u }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    // console.log(user,token);
    res.status(200).send(u);
  });
};

//6 . Find user get method

// const findUser = async (req, res) => {
//   const ema = req.body.email;
//   const password1 = req.body.password;

//   let u = await db.user.findOne({
//     where: { email: ema },
//   });

//   const pass = u.password;
//   if (password1) {
//     const isMatch = await bcrypt.compare(password1, pass);
//     // console.log(isMatch);
//     if (isMatch) {
//       jwt.sign({ u }, jwtKey, { expiresIn: "2h" }, (err, token) => {
//         // console.log(user,token);
//         res.status(200).send(u);
//       });
//     } else {
//       res.send({ err: "wrong password provided" });
//     }
//   } else {
//     res.send({ err: "no password provided" });
//   }

//   // console.log(password1,pass);
// };

const findUserById = async (req, res) => {
  let req_id = req.params.id;
  const userInfo = await db.user.findOne({
    where: {
      id: req_id,
    },
  });
  res.send(userInfo);
};

const login = async (req, res) => {
  const user = await db.user.findOne({
    where: {
      email: req.body.email,
    },
  });

//   console.log(user);
  //   console.log(req.body.password);
  //   console.log(user.password);
  if (user != null) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign(user.dataValues, process.env.ACCESS_TOKEN);
      res.json({ accessToken: token });
    } else {
      res.send("Provide correct password");
    }
  } else {
    res.send("User not found");
  }
};

const authenticateToken = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    console.log(req.headers);

    const token = authHeader && authHeader.split(' ')[2];
    //authHeader = 'Bearer jnwefjewiojewj3r3r1nj1'
    //so split header and second element will be token

    console.log(token);

    if(token == null) return res.sendStatus(401);

    jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err) {
            res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}

module.exports = {
  getUser,
  addUser,
  findUserById,
  login,
  authenticateToken,
  loggedInUser,
};
