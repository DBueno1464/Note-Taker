const express = require('express');
const { writeFile, uuid, notesData } = require('../helpers/reading');
const router = express.Router();


router.get('/api/notes', (req, res) => {
    // Logging that a GET request was received
    console.log(`${req.method} request received for feedback`);
    // Reading the db.json and parsing the content
    res.json(notesData);
});

router.post('api/notes', (req, res) => {

    // Logging that a POST request was received
    console.log(`${req.method} request received to submit feedback`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    console.log('Object created.');
    // Checks for all propeerties
    if (title && text) {
        const newNotes = {
            title,
            text,
            notes_id: uuid(),
        };

        notesData.push(newNotes);
        res.json(newNotes);
        writeFile('db.json', JSON.stringify(notesData));

    } else {
        res.json('Error in posting feedback');
    }
});

module.exports = router;