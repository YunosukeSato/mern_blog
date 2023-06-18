const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log("Database Connected");
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/auth", authRoutes);
app.use("/article", articleRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));
