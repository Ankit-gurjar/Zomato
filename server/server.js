const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5002;

const app = express();

app.get("/", (req, res) => {
  res.send("Api working");
});

const server = app.listen(PORT, console.log(`server started ${PORT}`));
