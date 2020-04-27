const express = require('express');
const filesUploads = require('express-fileupload');

const { VerificaFileExistente } = require('../middelwares/validaFile');

const { SubirArchivo } = require('../controllers/upFile');

const app = express();

app.use(filesUploads());

app.post('/file/up', [VerificaFileExistente], SubirArchivo);

module.exports = app;