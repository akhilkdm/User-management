
const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  console.log(id);
  return jwt.sign({ id },'asdfgh', {
    expiresIn: "30d",
  });
};

module.exports=generateToken;