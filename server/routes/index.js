const express = require('express');

const app = express();

// Rutas de subida de archivos
app.use(require('./upFile'));
// Rutas para ver archivo cargado
app.use(require('./viewFile'));
// Rutas de descarga de archivos
app.use(require('./downFile'));

module.exports = app;