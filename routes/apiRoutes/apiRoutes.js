const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../../db/db.json');

function createNewNote(newNote) {
    notes.push(newNote);
    updateDataBase()
}

router.post('/public/notes.html', (req, res) => {
    createNewNote(req.body);
    console.log(notes);
    res.json(notes);
});

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
}

function updateDataBase() {
    const pathToFile = path.resolve(__dirname, '../..//db/db.json');
    const data = JSON.stringify(notes);
    const callback = err => err ? console.error(err) : false;
    fs.writeFile(pathToFile, data, options, callback);
}

router.get('/public/notes.html', (req, res) => {
    res.json(notes);
});

router.get('/public/notes.html/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.delete('/public/notes.html/:id', (req, res) => {
    req.params.id
    notes.forEach((note, currIndex, arr) => {
        if (note.id === req.params.id) {
            arr.splice(currIndex, 1);
        }
    })
    updateDataBase();
});

module.exports = router;