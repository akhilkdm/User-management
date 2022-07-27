const express = require("express");
const { authAdmin } = require("../controllers/adminController");
const { userDetails,deleteUser ,getUser,Edituser} = require("../controllers/userController");


const router = express.Router();



router.route("/").get(userDetails);
router.route("/admin").post(authAdmin)
router.route("/deleteuser").delete(deleteUser)
router.route("/edituser/:userId").get(getUser)
router.route("/edituser/:userId").patch(Edituser)

module.exports= router;