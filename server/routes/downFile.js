const express = require('express');

const { DownloadFile } = require('../controllers/downFile');

const app = express();

app.get('/file/download', DownloadFile);

module.exports = app;