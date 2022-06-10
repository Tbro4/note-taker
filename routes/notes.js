const notes = require("express").Router();
const {
  readFromFile,
  readAndAppend,
  readAndDelete,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");
const noteDb = require("../db/db.json");

// GET Route for notes in db
//  localhost:3001/api/notes
notes.get("/", (req, res) => {
  console.info(`${req.method} request received to add a new note`);

  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//POST route to save to notes in db
notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a new note`);

  //Detructure from req.body
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    const response = {
      status: "success",
      body: newNote,
    };
    res.json(response);
    console.log(response);

    console.info(`Note added successfully 🚀`);
  } else {
    res.error("Error in adding Note");
  }
});

notes.delete("/:id", (req, res) => {
  if (req.params.id) {
    console.info(`${req.method} request received to delete note`);
    const deleteId = req.params.id;
    readAndDelete(deleteId, "./db/db.json");
    res.json("Deleted successfully");
  } else {
    res.status(400).send("Note ID not provided");
  }
});

module.exports = notes;
