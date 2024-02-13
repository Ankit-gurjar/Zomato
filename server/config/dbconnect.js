const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASS)
    );
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit();
  }
};

module.exports = DBconnect;
