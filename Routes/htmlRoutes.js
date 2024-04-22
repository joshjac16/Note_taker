// Importing the Express Router and the path module
const app = require("express").Router();
const path = require("path");

// Route to serve the homepage
app.get("/", function (req, res) {
  // Send the index.html file located in the public directory
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route to serve the notes page
app.get("/notes", function (req, res) {
  // Send the notes.html file located in the public directory
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Catch-all route to handle any other requests and redirect to the homepage
app.get("*", function (req, res) {
  // Send the index.html file for any other route (e.g., if the requested route doesn't match any defined routes)
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Exporting the router to be used in other modules
module.exports = app;
