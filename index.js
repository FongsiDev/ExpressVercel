const express = require("express");
const app = express();

app.get("/api/", (req, res) => {
  res.send({ message: "=)" });
});

app.all("*", (req, res) => {
  res.status(404).send({ message: "route not defined!" });
});

module.exports = app;
