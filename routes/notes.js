const express = require('express');
const router = express.Router()
const Note = require('../models/Note')

//GET ALL NOTES
router.get('/', async(req,res) => {
    try{
        const notes = await Note.find();
        res.json(notes);
    } catch(err) {
        res.json({message: err});
    }
});

//SUBMIT A NOTE
router.post('/', async(req,res) => {
    const note = new Note({
        body: req.body.body
    });

    try{
        const savedNote = await note.save();
        res.json(savedNote);
    } catch(err) {
        res.json({message: err});
    }
});

//SPECIFIC NOTE
router.get('/:noteId', async(req,res) => {
    try{
        const note = await Note.findById(req.params.noteId);
        res.json(note);
    } catch(err) {
        res.json({message: err});
    }
});

//DELETE A NOTE
router.delete('/:noteId', async(req,res) => {
    try{
        const removedNote = await Note.remove({ _id: req.params.noteId });
        res.json(removedNote);
    } catch(err) {
        res.json({message: err});
    }
});

//Update a note
router.patch('/:noteId', async(req,res) => {
    try{
        const updatedNote = await Note.updateOne(
            { _id: req.params.noteId },
            { $set: {body: req.body.body }});
        res.json(updatedNote);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;