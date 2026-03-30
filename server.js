require("dotenv").config();

const app = require("./src/app");
const { connectDB } = require("./src/Config/db");
const PORT = process.env.PORT || 3000;

connectDB(); // 🔥Database connected here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
