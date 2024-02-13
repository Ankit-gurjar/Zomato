const express = require("express");
const { uploadimage, allimages } = require("../controllers/imagecontrollers");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.route("/").post(protect, uploadimage).get(protect, allimages);

module.exports = router;
