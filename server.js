const express = require("express");
const cors = require("cors");

//import json files
const projects = require("./projects.json");

const about = require("./about.json");

const app = express();
// middlewares

app.use(cors());

//home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//projects route
app.get("/projects", (req, res) => {
  res.json(projects);
});

//about route
app.get("/about", (req, res) => {
  res.json(about);
});

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => {
  console.log(
    "running  on port : " +
      PORT +
      " " +
      "try routes:http://localhost:5200/about" +
      ",,or,," +
      "http://localhost:5200/projects"
  );
});
