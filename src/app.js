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
const demoProductRoutes = require("./Routes/demo-product.routes");

app.use("/api/demo-products", demoProductRoutes);

module.exports = app;
