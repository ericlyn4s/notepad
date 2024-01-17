const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const fs = require('fs');

// For deployment, this assigns to the user's port on this server, OR 3001 
const PORT = process.env.port || 3001;

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
    res.status(200).json(notes);
});

// POST route for new notes
app.post('/api/notes', (req, res) => {
    const newNote = {};
    newNote["id"] = Math.floor(Math.random()*1000);
    newNote["text"] = req.body.text;
    newNote["title"] = req.body.title;
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
});

// For delete route you'd have to add to your post route, adding IDs
// For puling up an existing note, you'd need to add id's to every note saved and then pull up that ID

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
