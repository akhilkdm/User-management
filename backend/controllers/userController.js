const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  console.log("gdhgf",req.body);
  const { name, email, password} = req.body;

  const uerExists = await User.findOne({ email });
  if (uerExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

const userDetails=asyncHandler(async(req,res)=>{
  try {
    const users=await User.find({})
  if(users){
   res.status(201).json(users)
   console.log('users',users);
  }
    
  } catch (err) {
    res.json(err);
  }
  

})
const deleteUser = asyncHandler(async (req, res) => {
  console.log(req.query.id,"fdslkfjskd");
  try {
    const user = await User.findById(req.query.id);
    await user.remove();
    res.json({});
  } catch (error) {
    res.json(error);
  }
});
const Edituser = asyncHandler(async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const id=req.params.userId
console.log(email,name,id);
    const user = await User.findByIdAndUpdate(id, {
      name: name,
      email: email,
    });
    res.json(user);
    console.log(user);
  } catch (error) {

  }
});
const getUser=asyncHandler(async(req,res)=>{
  const id=req.params.userId
  
  const user=await User.findById(id);
 
  if(user){
    res.json(user)
  }else{
    res.status(400)
    throw new Error("User not Found");
  }

})


module.exports = { registerUser, authUser,userDetails,deleteUser,getUser ,Edituser};
