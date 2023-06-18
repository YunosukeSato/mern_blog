const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  user,
  revokeToken,
} = require("../controllers/authController");
const verifyToken = require("../middleware/verifyToken");

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, user);
router.delete("/revoke_token", revokeToken);

module.exports = router;
