const path = require('path');
const fs = require('fs');
const colors = require('colors');

const DownloadFile = (req, res) => {
    let ruta = path.resolve(__dirname, '../files');

    if (fs.existsSync(ruta)) {
        let rutaFile = `${ruta}/${process.env.NAME_FILE}`;

        if (fs.existsSync(rutaFile)) {
            return res.download(rutaFile, )
        } else {
            console.log(`=>${"ERROR".red}: ruta no encontrada ${rutaFile.red}<=`);
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'Error en carga de archivo'
                }
            });
        }
    } else {
        console.log(`=>${"ERROR".red}: ruta no existente ${ruta.red}`);
        return res.status(500).json({
            ok: false,
            err: {
                message: 'Error en carga de archivo'
            }
        });
    }
}

module.exports = {
    DownloadFile
}