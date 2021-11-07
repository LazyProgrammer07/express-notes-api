const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Notes', NoteSchema)