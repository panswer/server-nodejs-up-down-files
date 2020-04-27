const path = require('path');
const fs = require('fs');
const colors = require('colors');

const ViewFile = (req, res) => {
    let ruta = path.resolve(__dirname, '../files');

    if (!process.env.NAME_FILE || process.env.NAME_FILE == "") {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No hay archivo cargado en servidor'
            }
        });
    }

    if (fs.existsSync(ruta)) {
        let rutaFile = `${ruta}/${process.env.NAME_FILE}`;

        if (fs.existsSync(rutaFile)) {
            res.sendFile(rutaFile, err => {
                if (err) {
                    console.log(`=>${"ERROR".red}: ViewFile<=`);
                } else {
                    console.log(`=>${"SUCCESS".green}: ViewFile<=`);
                }
            });
        } else {
            return res.status(400).json({
                ok: false,
                message: 'Archivo no cargado'
            });
        }
    } else {
        console.log(`=>${"ERROR".red}: ruta no encontrada ${ruta.red}<=`);
        res.status(500).json({
            ok: false,
            err: {
                message: 'error en carga de archivo'
            }
        });
    }
}

module.exports = {
    ViewFile
}