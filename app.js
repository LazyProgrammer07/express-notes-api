const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config')

//Middleware
app.use(cors());
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');
const notesRoute = require('./routes/notes');

app.use('/posts', postsRoute);
app.use('/notes', notesRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('We are home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!!')
})

app.listen(process.env.PORT || 3000);