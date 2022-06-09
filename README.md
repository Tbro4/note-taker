# note-taker

- Link Get Started button to go to Note page
  needs to load previous notes (stored in db.json)
  use fs.readFile (Activity 20, Solves, server.js line 47)

- when app detects that both Title and Note fields are not empty, a save button appears in the nav

-Upon save, note is saved to db and moved to the right side of the page with the other saves notes

-When clicking on existing note, it is moved to the right (for editing?)
need to use data to autofill the fields

-Add functionality to the Write icon so that an empty note appears

05/server.js/line 31 -- // Fallback route for when a user attempts to visit routes that don't exist
app.get("\*", (req, res) =>
res.send(
`Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
)
);
