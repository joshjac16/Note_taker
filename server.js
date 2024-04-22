// Import the express module
const express = require("express");

// Create an express application
const app = express();

// Define the port number, using the environment variable PORT if available, otherwise defaulting to 3006
const PORT = process.env.PORT || 3006;

// Importing route modules
const htmlRoutes = require("./Routes/htmlRoutes");
const apiRoutes = require("./Routes/apiRoutes");

// Middleware to parse incoming request bodies as urlencoded or JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Mounting the API routes
app.use(apiRoutes)

// Mounting the HTML routes
app.use(htmlRoutes)

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
});
