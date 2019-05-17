const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

var app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connection to mongodb successful');
});

const usersRouter=require('./routes/users');
const excercisesRouter=require('./routes/excercises');

app.use('/users',usersRouter);
app.use('/excercises',excercisesRouter);

app.listen(port, () => {
    console.log(`server up on port ${port}`);
});