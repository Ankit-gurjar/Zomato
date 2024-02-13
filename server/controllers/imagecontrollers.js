const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { use } = require("../routes/userRoute");

const uploadimage = expressAsyncHandler(async (req, res) => {
  const { image_url } = req.body;
  //   console.log(image_url);
  const userid = req.user.id;

  //   console.log(req.user);
  if (!image_url || !userid) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }
  let user = await User.findById(userid);

  try {
    if (user) {
      user.images.push(image_url);
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(400);
      throw new Error("Retry Image is not Uploaded");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const allimages = expressAsyncHandler(async (req, res) => {
  const userid = req.user.id;
  const user = await User.findById(userid);
  if (user) {
    res.status(200).send({
      images: user.images,
    });
  } else {
    res.status(400);
    throw new Error("NO user found");
  }
});

module.exports = { uploadimage, allimages };
