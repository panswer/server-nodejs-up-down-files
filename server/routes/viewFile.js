const express = require('express');

const { ViewFile } = require('../controllers/viewFile');

const app = express();

app.get('/file/view', ViewFile);

module.exports = app;