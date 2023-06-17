const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log("Database Connected");
});

app.use(express.json());
app.use(cookieParser())
app.use("/auth", authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));
