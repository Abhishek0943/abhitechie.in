const express = require("express");
const {
  registerUser,
  VerifyUser,
  tokenLogin,
  Login,
  activeOffer,
  offerCancel,
  offerSuccess
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("./middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/verify").post(VerifyUser);
// router.route("/tokenLogin").post(tokenLogin);
router.route("/Login").post(Login);



router.route("/activeOffer").post(activeOffer);
router.route("/offerCancel").post(offerCancel);
router.route("/offerSuccess").post(offerSuccess);

module.exports = router;
