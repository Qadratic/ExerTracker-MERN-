const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

var app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json());

app.listen(port, () => {
    console.log(`server up on port ${port}`);
});