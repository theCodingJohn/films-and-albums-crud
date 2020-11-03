const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/webApp";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB CONNECTION OPEN");
  })
  .catch(() => {
    console.log("CAN'T CONNECT TO MONGODB");
  });

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Movie routes
const movieRouter = require("./routes/movie.js");
app.use(movieRouter);

// Music routes
const musicRouter = require("./routes/music.js");
app.use(musicRouter);

// Homepage routes
app.get("/", (req, res) => {
  res.render("index");
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`App is listening on http://localhost:${port}/`);
});
