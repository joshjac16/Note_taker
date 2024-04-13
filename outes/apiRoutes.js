const app = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");

app.get("/api/notes", function (req, res) {
  db = JSON.parse(fs.readFileSync("./db/db.json")) || [];
  res.json(db);
});

app.post("/api/notes", function (req, res) {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 9999),
  };
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });

  res.json(db);
});

module.exports = app;