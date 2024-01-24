// Importing express.js, 'path' component, and our working database
const express = require('express');
const path = require('path');
const notes = require('./db/db.json');

const fs = require('fs');

// For deployment, this assigns to the user's port on this server, OR 3001 
const PORT = process.env.PORT || 3001;

// Assigning an express call to variable 'app'
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Let the app look within public folder automatically
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET request for existing notes
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.info(err)
      }
      // Pull all new notes into the GET call
      const newData = JSON.parse(data);
      res.status(200).json(newData);
    });
  });

// POST route for new notes
app.post('/api/notes', (req, res) => {
  const newNote = {};
  newNote["id"] = Math.round(Math.random()*100);
  newNote["text"] = req.body.text;
  newNote["title"] = req.body.title;
  notes.push(newNote);
  // Writing this new note to the database
  fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
    if (err) {
      console.error(err);
    }
    res.json(data)
    });
  });

/* DELETE a specific note - in progress!
app.delete('/api/notes/:id', (req, res) => {
  fs.readFileSync('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedNotes = JSON.parse(data);
      const filteredArr = parsedNotes.filter( element =>{ 
        return element.id != req.params.id
      });
      fs.writeFile('.db/db.json', JSON.stringify(filteredArr), (err, data) => {
        if (err) {
          console.error(err);
        }
        res.json(data)
        });
        };
});
});
*/

// Send a notification of path when app is loaded
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
