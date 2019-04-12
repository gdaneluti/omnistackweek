const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://omnistack:omnistack@localhost:27017/omnistack', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(require('./routes'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.listen(3333);