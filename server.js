const express = require("express");
const path = require("path");

const noteData = require("./db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  ///////////////////////in the current dir, lets access public/index.html
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET Route for notes in db
app.get("/api/notes", (req, res) => res.json(noteData));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
