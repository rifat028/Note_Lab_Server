const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//------------connection testing-------------
app.get("/", async (req, res) => {
  res.send("NoteLab Server is running");
});

//------------routes-------------

module.exports = app;
