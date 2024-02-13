const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DBconnect = require("./config/dbconnect");
dotenv.config({ path: "./.env" });
const userRoute = require("./routes/userRoute");
const imageRoute = require("./routes/imageRoutes");
const PORT = process.env.PORT || 5002;

DBconnect();
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/images", imageRoute);

const server = app.listen(PORT, console.log(`server started ${PORT}`));
