// Dependencias
const express = require("express");
const colors = require("colors");
const path = require('path');
const fs = require('fs');
const cors = require('cors');

// Helpers
const { VerificaCarpeta } = require('./helper/poblar');

// Configuracion de servidor
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

// Inicio de servidor
app.listen(3000, err => {
    if (err) {
        console.log(`=>${"ERROR".red}: Server off<=`);
        console.log(err);
    } else {
        console.log(`=>${"SUCCESS".green}: Server on<=`);
        VerificaCarpeta();
    }
});