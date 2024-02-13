const express = require("express");
const { registerUser, authUser } = require("../controllers/usercontrolers");
// const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
