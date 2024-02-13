const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const uploadimage = expressAsyncHandler(async () => {});

const allimages = expressAsyncHandler(async () => {});

module.exports = { uploadimage, allimages };
