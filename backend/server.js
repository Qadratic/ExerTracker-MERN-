const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan=require('morgan');

require('dotenv').config();

var app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connection to mongodb successful');
});

const usersRouter=require('./routes/users');
const exercisesRouter=require('./routes/exercises');

app.use(morgan('tiny'));
app.use('/users',usersRouter);
app.use('/exercises',exercisesRouter);

app.listen(port, () => {
    console.log(`server up on port ${port}`);
});