// Dependencias
const express = require("express");
const colors = require("colors");
const path = require('path');
const fs = require('fs');
const cors = require('cors');

require('./config/config');

// Helpers
const { VerificaCarpeta } = require('./helper/poblar');

// Configuracion de servidor
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Carpeta publica
let public = path.resolve(__dirname, '../public');

if (!fs.existsSync(public)) {
    fs.mkdirSync(public);
    console.log(`=>${"Folder".green} regenerado<=`);
    console.log(`=>${"path".green}: ${public}<=`);
}

app.use(express.static(public));

// Rutas
app.use(require('./routes/index'));

// Salvacion
app.get('*', (req, res) => {
    res.sendFile(`${public}/index.html`);
});

// Inicio de servidor
app.listen(process.env.PORT, err => {
    if (err) {
        console.log(`=>${"ERROR".red}: Server off<=`);
        console.log(err);
    } else {
        console.log(`=>${"SUCCESS".green}: Server on<=`);
        VerificaCarpeta();
    }
});