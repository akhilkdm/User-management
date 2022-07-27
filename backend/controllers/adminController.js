const asyncHandler = require("express-async-handler");
const generateToken = require('../utils/generateToken')


const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  console.log("this is admin form ", email, password);
  const credentials={
    email:"admin@gmail.com",
    password:123456
   };


const admin =  credentials.email ;
 const passwordd=credentials.password
  console.log("hhhhhh",admin);
  if (credentials.email==  email && credentials.password== password) {
  
      res.json({
        _id: admin._id,
        name: admin,
        password: passwordd,
        token: generateToken(admin._id),
      });
     
}else{
    res.status(400)
    res.json("Invalid email or password")
    throw new Error("Invalid email or password")
}
});

module.exports = { authAdmin };