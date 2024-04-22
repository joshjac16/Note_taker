// Importing required modules
const app = require("express").Router();
const fs = require("fs");
// Loading initial notes data from db.json file
let db = require("../db/db.json");

// Route to get all notes
app.get("/api/notes", function (req, res) {
  // Reading and parsing the db.json file to get notes data
  db = JSON.parse(fs.readFileSync("./db/db.json")) || [];
  // Sending the notes data as a JSON response
  res.json(db);
});

// Route to add a new note
app.post("/api/notes", function (req, res) {
  // Creating a new note object with data from the request body
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    // Generating a random ID for the note
    id: Math.floor(Math.random() * 9999),
  };

  // Adding the new note to the notes array
  db.push(newNote);
  // Writing the updated notes array back to the db.json file
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });
  // Sending the updated notes data as a JSON response
  res.json(db);
});

// Route to delete a note by ID
app.delete("/api/notes/:id", function (req, res) {
  // Filtering out the note with the specified ID and creating a new notes array without it
  let tempNotes = [];
  db.forEach((element) => {
    if (element.id != req.params.id) {
      tempNotes.push(element);
    }
  });
  db = tempNotes;
  // Writing the updated notes array back to the db.json file
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });

  // Sending the updated notes data as a JSON response
  res.json(db);
});

// Exporting the router to be used in other modules
module.exports = app;
