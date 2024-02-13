const express = require("express");
const { uploadimage, allimages } = require("../controllers/imagecontrollers");
// const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.route("/").post(uploadimage).get(allimages);

module.exports = router;
